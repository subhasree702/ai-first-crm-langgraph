import LogInteractionForm from "./components/LogInteractionForm";
import BackendStatus from "./components/BackendStatus";

export default function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>AI-First CRM – HCP Module</h1>
      <BackendStatus />
      <LogInteractionForm />
    </div>
  );
}
