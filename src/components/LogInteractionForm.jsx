import { useDispatch, useSelector } from "react-redux";
import { logInteraction, resetStatus } from "../redux/interactionSlice";
import { useEffect } from "react";

export default function LogInteractionForm() {
  const dispatch = useDispatch();
  const { loading, error, success } = useSelector(
    (state) => state.interactions
  );


  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => dispatch(resetStatus()), 3000);
      return () => clearTimeout(timer);
    }
  }, [success, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      hcp_name: e.target.hcp_name.value,
      interaction_type: e.target.interaction_type.value,
      notes: e.target.notes.value,
    };
    dispatch(logInteraction(data));
    e.target.reset();
  };

  return (
    <div style={{ marginTop: "20px", maxWidth: "400px" }}>
      <h2>Log Interaction</h2>
      {loading && <p>Submitting...</p>}
      {success && <p style={{ color: "green" }}>Saved successfully!</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
      >
        <input name="hcp_name" placeholder="HCP Name" required />
        <select name="interaction_type">
          <option value="Meeting">Meeting</option>
          <option value="Call">Call</option>
          <option value="Email">Email</option>
        </select>
        <textarea name="notes" placeholder="Interaction Notes" />
        <button type="submit" disabled={loading}>
          Submit
        </button>
      </form>
    </div>
  );
}
