import { useState } from "react";
import axios from "axios";

export default function ChatBox() {
  const [msg, setMsg] = useState("");
  const [reply, setReply] = useState("");

  const sendMessage = async () => {
    const res = await axios.post("http://127.0.0.1:8000/chat", {
      message: msg,
    });
    setReply(res.data.reply);
  };

  return (
    <div>
      <h3>AI Chat</h3>
      <input value={msg} onChange={(e) => setMsg(e.target.value)} />
      <button onClick={sendMessage}>Send</button>
      <p>{reply}</p>
    </div>
  );
}
