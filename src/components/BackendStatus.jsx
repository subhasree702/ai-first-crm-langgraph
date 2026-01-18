import { useEffect, useState } from "react";
import { getStatus } from "../api"; 

export default function BackendStatus() {
  const [status, setStatus] = useState("Checking backend...");

  useEffect(() => {
    getStatus()
      .then(data => setStatus(data.status))
      .catch(err => setStatus("❌ Error connecting to backend"));
  }, []);

  return (
    <div style={{ marginBottom: "20px", color: status.includes("✅") ? "green" : "red" }}>
      {status}
    </div>
  );
}
