"use client";

import { useState } from "react";
import type { Lang } from "../lib/types";
import { signupCopy } from "../lib/i18n";

export function SignupForm({ lang }: { lang: Lang }) {
  const copy = signupCopy[lang];
  const [email, setEmail] = useState<string>("");
  const [role, setRole] = useState<string>(copy.roles[0]);
  const [status, setStatus] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    setLoading(true);
    setStatus("");

    const res = await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, role, lang })
    });

    const data = await res.json();
    setLoading(false);
    setStatus(data.message || (lang === "zh" ? "已收到" : "Received"));
    if (res.ok) setEmail("");
  }

  return (
    <form className="signup" onSubmit={submit}>
      <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder={copy.placeholder} required />
      <button className="btn primary" disabled={loading} type="submit">{loading ? copy.loading : copy.submit}</button>
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        {copy.roles.map((roleOption) => <option key={roleOption}>{roleOption}</option>)}
      </select>
      <div className="signup-status">{status}</div>
    </form>
  );
}
