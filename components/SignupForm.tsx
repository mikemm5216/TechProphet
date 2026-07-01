"use client";

import { useState } from "react";

export function SignupForm() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Sales / BD");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    setLoading(true);
    setStatus("");

    const res = await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, role })
    });

    const data = await res.json();
    setLoading(false);
    setStatus(data.message || "已收到");
    if (res.ok) setEmail("");
  }

  return (
    <form className="signup" onSubmit={submit}>
      <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="your@email.com" required />
      <button className="btn primary" disabled={loading} type="submit">{loading ? "送出中" : "訂閱樣刊"}</button>
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option>Sales / BD</option>
        <option>PM</option>
        <option>Procurement</option>
        <option>Executive</option>
        <option>Engineer</option>
        <option>Investor / Research</option>
      </select>
      <div className="signup-status">{status}</div>
    </form>
  );
}
