import { useDispatch, useSelector } from "react-redux";
import { chatInteraction } from "../redux/interactionSlice";
import { useState } from "react";

export default function ChatInteraction() {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");

  const { chatResponse, loading, error } = useSelector(
    (state) => state.interactions
  );

  const handleSend = () => {
    if (!message.trim()) return;
    dispatch(chatInteraction(message));
    setMessage("");
  };

  return (
    <div>
      <h2>Chat with AI</h2>

      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type interaction..."
      />

      <button onClick={handleSend} disabled={loading}>
        {loading ? "Thinking..." : "Send"}
      </button>

      {chatResponse && (
        <p style={{ marginTop: "10px", color: "green" }}>
          <strong>AI:</strong> {chatResponse}
        </p>
      )}

      {error && (
        <p style={{ color: "red" }}>
          Error: {error}
        </p>
      )}
    </div>
  );
}
