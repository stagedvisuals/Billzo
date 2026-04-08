"use client";
import { useState } from "react";
import { createClient } from "../../lib/supabase-client";
import { C } from "../../lib/constants";

export default function LoginPage() {
 const [email, setEmail] = useState("");
 const [loading, setLoading] = useState(false);
 const [sent, setSent] = useState(false);
 const [error, setError] = useState("");
 const supabase = createClient();

 const handleMagicLink = async (e: React.FormEvent) => {
 e.preventDefault();
 setLoading(true);
 setError("");
 const { error } = await supabase.auth.signInWithOtp({
 email,
 options: { emailRedirectTo: `${window.location.origin}/api/auth/callback` },
 });
 setLoading(false);
 if (error) setError(error.message);
 else setSent(true);
 };

 const handleGoogle = async () => {
 await supabase.auth.signInWithOAuth({
 provider: "google",
 options: { redirectTo: `${window.location.origin}/api/auth/callback` },
 });
 };

 return (
 <div style={{ background: C.bg, minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Plus Jakarta Sans', sans-serif", padding: 20 }}>
 <div style={{ width: "100%", maxWidth: 420, background: C.card, border: `1px solid ${C.border}`, borderRadius: 20, padding: 40, backdropFilter: "blur(20px)" }}>
 <div style={{ textAlign: "center", marginBottom: 32 }}>
 <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
 <div style={{ width: 36, height: 36, borderRadius: 10, background: `linear-gradient(135deg, ${C.blue}, ${C.indigo})`, display: "flex", alignItems: "center", justifyContent: "center" }}>
 <span style={{ color: "#fff", fontSize: 16, fontWeight: 800 }}>P</span>
 </div>
 <span style={{ fontSize: 20, fontWeight: 800, color: C.white }}>Peppol<span style={{ color: C.blue }}>Pro</span></span>
 </div>
 <h1 style={{ fontSize: 24, fontWeight: 700, color: C.white, marginBottom: 6 }}>Inloggen</h1>
 <p style={{ fontSize: 14, color: C.dim }}>Log in met je email of Google account</p>
 </div>

 {sent ? (
 <div style={{ textAlign: "center", padding: "20px 0" }}>
 <span style={{ fontSize: 40, display: "block", marginBottom: 12 }}>📧</span>
 <h2 style={{ fontSize: 18, fontWeight: 700, color: C.white, marginBottom: 8 }}>Check je inbox</h2>
 <p style={{ fontSize: 14, color: C.dim }}>We hebben een login link gestuurd naar <strong style={{ color: C.white }}>{email}</strong></p>
 </div>
 ) : (
 <>
 <button onClick={handleGoogle} style={{ width: "100%", padding: "12px 0", borderRadius: 10, border: `1px solid ${C.border}`, background: "transparent", color: C.white, fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: "inherit", marginBottom: 20, transition: "border-color 0.2s" }}>
 🔵 Doorgaan met Google
 </button>

 <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
 <div style={{ flex: 1, height: 1, background: C.border }} />
 <span style={{ fontSize: 12, color: C.dim }}>of</span>
 <div style={{ flex: 1, height: 1, background: C.border }} />
 </div>

 <form onSubmit={handleMagicLink}>
 <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: C.gray, marginBottom: 6 }}>Email</label>
 <input
 type="email"
 value={email}
 onChange={(e) => setEmail(e.target.value)}
 placeholder="jouw@email.nl"
 required
 style={{ width: "100%", padding: "12px 14px", borderRadius: 10, border: `1px solid ${C.border}`, background: C.input, color: C.white, fontSize: 14, fontFamily: "inherit", marginBottom: 12, outline: "none", transition: "border-color 0.2s" }}
 />
 {error && <p style={{ fontSize: 12, color: "#ef4444", marginBottom: 12 }}>{error}</p>}
 <button
 type="submit"
 disabled={loading}
 style={{ width: "100%", padding: "12px 0", borderRadius: 10, border: "none", background: `linear-gradient(135deg, ${C.blue}, ${C.indigo})`, color: "#fff", fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: "inherit", transition: "opacity 0.2s", opacity: loading ? 0.7 : 1 }}
 >
 {loading ? "Versturen..." : "Verstuur magic link"}
 </button>
 </form>
 </>
 )}

 <div style={{ marginTop: 24, textAlign: "center" }}>
 <p style={{ fontSize: 12, color: `${C.dim}88` }}>
 Nog geen account?{" "}
 <a href="/register" style={{ color: C.blue, textDecoration: "none", fontWeight: 600 }}>Registreer</a>
 </p>
 </div>
 </div>
 </div>
 );
}
