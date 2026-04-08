"use client";
import { createClient } from "../../lib/supabase-client";
import { useRouter } from "next/navigation";
import { C } from "../../lib/constants";

interface Props {
 user: { id: string; email?: string };
 profile: {
 full_name: string;
 company_name: string;
 plan: string;
 credits: number;
 is_admin: boolean;
 } | null;
 conversions: Array<{
 id: string;
 original_filename: string;
 status: string;
 invoice_number: string;
 invoice_total: number;
 created_at: string;
 }>;
}

export default function DashboardClient({ user, profile, conversions }: Props) {
 const router = useRouter();
 const supabase = createClient();

 const handleLogout = async () => {
 await supabase.auth.signOut();
 router.push("/");
 };

 const plan = profile?.plan || "free";
 const credits = profile?.credits || 0;
 const planLabels: Record<string, string> = { free: "Gratis", starter: "Starter", pro: "Pro", business: "Business", accountant: "Accountant" };

 return (
 <div style={{ background: C.bg, minHeight: "100vh", fontFamily: "'Plus Jakarta Sans', sans-serif", color: C.white }}>
 <div style={{ borderBottom: `1px solid ${C.border}`, padding: "0 24px" }}>
 <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", height: 60 }}>
 <a href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", color: C.white }}>
 <div style={{ width: 32, height: 32, borderRadius: 10, background: `linear-gradient(135deg, ${C.blue}, ${C.indigo})`, display: "flex", alignItems: "center", justifyContent: "center" }}>
 <span style={{ color: "#fff", fontSize: 14, fontWeight: 800 }}>P</span>
 </div>
 <span style={{ fontSize: 18, fontWeight: 800 }}>Peppol<span style={{ color: C.blue }}>Pro</span></span>
 </a>
 <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
 {profile?.is_admin && (
 <a href="/admin" style={{ fontSize: 13, color: "#f59e0b", textDecoration: "none", fontWeight: 600 }}>⚙ Admin</a>
 )}
 <span style={{ fontSize: 13, color: C.dim }}>{user.email}</span>
 <button onClick={handleLogout} style={{ background: "none", border: `1px solid ${C.border}`, color: C.gray, fontSize: 13, padding: "6px 14px", borderRadius: 8, cursor: "pointer", fontFamily: "inherit" }}>Uitloggen</button>
 </div>
 </div>
 </div>

 <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 24px" }}>
 <h1 style={{ fontSize: 28, fontWeight: 800, marginBottom: 8 }}>Dashboard</h1>
 <p style={{ fontSize: 15, color: C.dim, marginBottom: 32 }}>Welkom{profile?.full_name ? `, ${profile.full_name}` : ""}!</p>

 <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16, marginBottom: 40 }}>
 {[
 { label: "Plan", value: planLabels[plan] || plan, color: C.blue },
 { label: "Credits", value: `${credits} over`, color: credits > 0 ? "#10b981" : "#ef4444" },
 { label: "Conversies", value: `${conversions.length}`, color: C.cyan },
 ].map((s, i) => (
 <div key={i} style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, padding: "24px 20px", backdropFilter: "blur(20px)" }}>
 <div style={{ fontSize: 12, color: C.dim, fontWeight: 600, marginBottom: 6 }}>{s.label}</div>
 <div style={{ fontSize: 28, fontWeight: 800, color: s.color }}>{s.value}</div>
 </div>
 ))}
 </div>

 <div style={{ display: "flex", gap: 12, marginBottom: 40, flexWrap: "wrap" }}>
 <a href="/convert" style={{ display: "inline-block", background: `linear-gradient(135deg, ${C.blue}, ${C.indigo})`, color: "#fff", fontWeight: 600, fontSize: 14, padding: "12px 28px", borderRadius: 10, textDecoration: "none" }}>
 📄 Nieuwe conversie
 </a>
 <a href="/prijzen" style={{ display: "inline-block", border: `1px solid ${C.border}`, color: C.gray, fontWeight: 600, fontSize: 14, padding: "12px 28px", borderRadius: 10, textDecoration: "none" }}>
 Upgrade plan
 </a>
 </div>

 <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16 }}>Recente conversies</h2>
 {conversions.length === 0 ? (
 <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, padding: "40px 20px", textAlign: "center" }}>
 <span style={{ fontSize: 36, display: "block", marginBottom: 12 }}>📄</span>
 <p style={{ fontSize: 15, color: C.dim, marginBottom: 16 }}>Je hebt nog geen facturen geconverteerd</p>
 <a href="/convert" style={{ color: C.blue, fontSize: 14, fontWeight: 600, textDecoration: "none" }}>Start je eerste conversie →</a>
 </div>
 ) : (
 <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, overflow: "hidden" }}>
 {conversions.map((c, i) => (
 <div key={c.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 20px", borderBottom: i < conversions.length - 1 ? `1px solid ${C.border}` : "none" }}>
 <div>
 <div style={{ fontSize: 14, fontWeight: 600, color: C.white }}>{c.original_filename}</div>
 <div style={{ fontSize: 12, color: C.dim }}>{c.invoice_number} · {new Date(c.created_at).toLocaleDateString("nl-NL")}</div>
 </div>
 <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
 {c.invoice_total && <span style={{ fontSize: 14, fontWeight: 600 }}>€{c.invoice_total}</span>}
 <span style={{ fontSize: 11, fontWeight: 600, padding: "3px 10px", borderRadius: 6, background: c.status === "success" ? "rgba(16,185,129,0.1)" : c.status === "failed" ? "rgba(239,68,68,0.1)" : "rgba(59,130,246,0.1)", color: c.status === "success" ? "#10b981" : c.status === "failed" ? "#ef4444" : C.blue }}>
 {c.status}
 </span>
 </div>
 </div>
 ))}
 </div>
 )}
 </div>
 </div>
 );
}
