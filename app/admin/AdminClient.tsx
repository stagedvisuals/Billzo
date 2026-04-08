"use client";
import { useState } from "react";
import { C } from "../../lib/constants";

interface Props {
 users: Array<Record<string, unknown>>;
 conversions: Array<Record<string, unknown>>;
 messages: Array<Record<string, unknown>>;
 payments: Array<Record<string, unknown>>;
}

export default function AdminClient({ users, conversions, messages, payments }: Props) {
 const [tab, setTab] = useState<"overview" | "users" | "conversions" | "messages" | "payments">("overview");

 const card = (label: string, value: string | number, color: string) => (
 <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, padding: "24px 20px", backdropFilter: "blur(20px)" }}>
 <div style={{ fontSize: 12, color: C.dim, fontWeight: 600, marginBottom: 6 }}>{label}</div>
 <div style={{ fontSize: 28, fontWeight: 800, color }}>{value}</div>
 </div>
 );

 const tabBtn = (t: typeof tab, label: string) => (
 <button onClick={() => setTab(t)} style={{
 background: tab === t ? `${C.blue}22` : "transparent",
 border: tab === t ? `1px solid ${C.blue}44` : `1px solid ${C.border}`,
 color: tab === t ? C.blue : C.dim, fontWeight: 600, fontSize: 13,
 padding: "8px 16px", borderRadius: 8, cursor: "pointer", fontFamily: "inherit",
 }}>{label}</button>
 );

 const successCount = conversions.filter(c => c.status === "success").length;
 const failedCount = conversions.filter(c => c.status === "failed").length;
 const paidUsers = users.filter(u => u.plan !== "free").length;
 const newMessages = messages.filter(m => m.status === "new").length;

 // Helper functions
 const formatDate = (dateStr: string) => {
 const d = new Date(dateStr);
 return d.toLocaleDateString('nl-NL', { day: '2-digit', month: '2-digit', year: 'numeric' });
 };

 const formatDateTime = (dateStr: string) => {
 const d = new Date(dateStr);
 return d.toLocaleDateString('nl-NL', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });
 };

 const truncate = (str: string, len: number) => {
 if (!str || typeof str !== 'string') return '';
 return str.length > len ? str.substring(0, len) + '...' : str;
 };

 return (
 <div style={{ background: C.bg, minHeight: "100vh", fontFamily: "'Plus Jakarta Sans', sans-serif", color: C.white }}>
 <div style={{ borderBottom: `1px solid ${C.border}`, padding: "0 24px" }}>
 <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", height: 60 }}>
 <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
 <a href="/dashboard" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", color: C.white }}>
 <div style={{ width: 32, height: 32, borderRadius: 10, background: `linear-gradient(135deg, ${C.blue}, ${C.indigo})`, display: "flex", alignItems: "center", justifyContent: "center" }}>
 <span style={{ color: "#fff", fontSize: 14, fontWeight: 800 }}>P</span>
 </div>
 <span style={{ fontSize: 18, fontWeight: 800 }}>Peppol<span style={{ color: C.blue }}>Pro</span></span>
 </a>
 <span style={{ fontSize: 12, color: "#f59e0b", fontWeight: 600, background: "#f59e0b22", padding: "2px 8px", borderRadius: 4 }}>ADMIN</span>
 </div>
 <a href="/dashboard" style={{ fontSize: 13, color: C.dim, textDecoration: "none" }}>← Dashboard</a>
 </div>
 </div>

 <div style={{ maxWidth: 1200, margin: "0 auto", padding: "32px 24px" }}>
 <h1 style={{ fontSize: 28, fontWeight: 800, marginBottom: 24 }}>Admin Panel</h1>

 {/* Stats */}
 <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 14, marginBottom: 28 }}>
 {card("Gebruikers", users.length, C.blue)}
 {card("Betaald", paidUsers, "#10b981")}
 {card("Conversies", conversions.length, C.cyan)}
 {card("Geslaagd", successCount, "#10b981")}
 {card("Mislukt", failedCount, "#ef4444")}
 {card("Nieuwe berichten", newMessages, "#f59e0b")}
 </div>

 {/* Tabs */}
 <div style={{ display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap" }}>
 {tabBtn("overview", "Overzicht")}
 {tabBtn("users", `Gebruikers (${users.length})`)}
 {tabBtn("conversions", `Conversies (${conversions.length})`)}
 {tabBtn("messages", `Berichten (${messages.length})`)}
 {tabBtn("payments", `Betalingen (${payments.length})`)}
 </div>

 {/* Tab Content */}
 <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 16, padding: 24, backdropFilter: "blur(20px)" }}>
 {tab === "overview" && (
 <div>
 <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 20 }}>Recent overzicht</h2>
 
 <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
 {/* Recente gebruikers */}
 <div>
 <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 12, color: C.dim }}>Nieuwe gebruikers</h3>
 <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
 {users.slice(0, 5).map((user: any) => (
 <div key={user.id} style={{ padding: 12, background: "rgba(255,255,255,0.03)", borderRadius: 10, border: `1px solid ${C.border}` }}>
 <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
 <div>
 <div style={{ fontWeight: 600 }}>{user.email}</div>
 <div style={{ fontSize: 12, color: C.dim }}>{user.company_name || 'Geen bedrijfsnaam'}</div>
 </div>
 <div style={{ fontSize: 11, color: C.gray }}>{formatDate(user.created_at as string)}</div>
 </div>
 </div>
 ))}
 </div>
 </div>

 {/* Recente conversies */}
 <div>
 <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 12, color: C.dim }}>Recente conversies</h3>
 <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
 {conversions.slice(0, 5).map((conv: any) => (
 <div key={conv.id} style={{ padding: 12, background: "rgba(255,255,255,0.03)", borderRadius: 10, border: `1px solid ${C.border}` }}>
 <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
 <div>
 <div style={{ fontWeight: 600, fontSize: 13 }}>{conv.original_filename || 'Onbekend bestand'}</div>
 <div style={{ fontSize: 11, color: C.dim, display: "flex", alignItems: "center", gap: 6, marginTop: 2 }}>
 <span style={{ 
  padding: "2px 6px", 
  borderRadius: 4, 
  fontSize: 10, 
  fontWeight: 600,
  background: conv.status === 'success' ? '#10b98122' : conv.status === 'failed' ? '#ef444422' : '#f59e0b22',
  color: conv.status === 'success' ? '#10b981' : conv.status === 'failed' ? '#ef4444' : '#f59e0b'
 }}>
  {conv.status || 'pending'}
 </span>
 {conv.invoice_number && <span>Factuur #{conv.invoice_number}</span>}
 {conv.invoice_total && <span>€{parseFloat(conv.invoice_total).toFixed(2)}</span>}
 </div>
 </div>
 <div style={{ fontSize: 11, color: C.gray }}>{formatDate(conv.created_at as string)}</div>
 </div>
 </div>
 ))}
 </div>
 </div>
 </div>
 </div>
 )}

 {tab === "users" && (
 <div>
 <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 20 }}>Alle gebruikers ({users.length})</h2>
 <div style={{ overflowX: "auto" }}>
 <table style={{ width: "100%", borderCollapse: "collapse" }}>
 <thead>
 <tr style={{ borderBottom: `1px solid ${C.border}` }}>
 <th style={{ textAlign: "left", padding: "12px 16px", fontSize: 12, fontWeight: 600, color: C.dim }}>ID</th>
 <th style={{ textAlign: "left", padding: "12px 16px", fontSize: 12, fontWeight: 600, color: C.dim }}>Email</th>
 <th style={{ textAlign: "left", padding: "12px 16px", fontSize: 12, fontWeight: 600, color: C.dim }}>Bedrijf</th>
 <th style={{ textAlign: "left", padding: "12px 16px", fontSize: 12, fontWeight: 600, color: C.dim }}>Plan</th>
 <th style={{ textAlign: "left", padding: "12px 16px", fontSize: 12, fontWeight: 600, color: C.dim }}>Credits</th>
 <th style={{ textAlign: "left", padding: "12px 16px", fontSize: 12, fontWeight: 600, color: C.dim }}>Admin</th>
 <th style={{ textAlign: "left", padding: "12px 16px", fontSize: 12, fontWeight: 600, color: C.dim }}>Aangemaakt</th>
 </tr>
 </thead>
 <tbody>
 {users.map((user: any) => (
 <tr key={user.id} style={{ borderBottom: `1px solid ${C.border}20` }}>
 <td style={{ padding: "12px 16px", fontSize: 13 }}>{truncate(user.id, 8)}</td>
 <td style={{ padding: "12px 16px", fontSize: 13 }}>{user.email}</td>
 <td style={{ padding: "12px 16px", fontSize: 13 }}>{user.company_name || '-'}</td>
 <td style={{ padding: "12px 16px", fontSize: 13 }}>
 <span style={{ 
  padding: "4px 8px", 
  borderRadius: 6, 
  fontSize: 11, 
  fontWeight: 600,
  background: user.plan === 'free' ? `${C.dim}22` : user.plan === 'pro' ? `${C.blue}22` : `${C.cyan}22`,
  color: user.plan === 'free' ? C.dim : user.plan === 'pro' ? C.blue : C.cyan
 }}>
  {user.plan || 'free'}
 </span>
 </td>
 <td style={{ padding: "12px 16px", fontSize: 13, fontWeight: 600 }}>{user.credits || 0}</td>
 <td style={{ padding: "12px 16px", fontSize: 13 }}>
 {user.is_admin ? (
 <span style={{ padding: "4px 8px", borderRadius: 6, fontSize: 11, fontWeight: 600, background: "#f59e0b22", color: "#f59e0b" }}>Admin</span>
 ) : (
 <span style={{ color: C.dim }}>-</span>
 )}
 </td>
 <td style={{ padding: "12px 16px", fontSize: 13, color: C.gray }}>{formatDate(user.created_at as string)}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 </div>
 )}

 {tab === "conversions" && (
 <div>
 <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 20 }}>Alle conversies ({conversions.length})</h2>
 <div style={{ overflowX: "auto" }}>
 <table style={{ width: "100%", borderCollapse: "collapse" }}>
 <thead>
 <tr style={{ borderBottom: `1px solid ${C.border}` }}>
 <th style={{ textAlign: "left", padding: "12px 16px", fontSize: 12, fontWeight: 600, color: C.dim }}>ID</th>
 <th style={{ textAlign: "left", padding: "12px 16px", fontSize: 12, fontWeight: 600, color: C.dim }}>Bestand</th>
 <th style={{ textAlign: "left", padding: "12px 16px", fontSize: 12, fontWeight: 600, color: C.dim }}>Status</th>
 <th style={{ textAlign: "left", padding: "12px 16px", fontSize: 12, fontWeight: 600, color: C.dim }}>Factuur #</th>
 <th style={{ textAlign: "left", padding: "12px 16px", fontSize: 12, fontWeight: 600, color: C.dim }}>Totaal</th>
 <th style={{ textAlign: "left", padding: "12px 16px", fontSize: 12, fontWeight: 600, color: C.dim }}>Aangemaakt</th>
 </tr>
 </thead>
 <tbody>
 {conversions.map((conv: any) => (
 <tr key={conv.id} style={{ borderBottom: `1px solid ${C.border}20` }}>
 <td style={{ padding: "12px 16px", fontSize: 13 }}>{truncate(conv.id, 8)}</td>
 <td style={{ padding: "12px 16px", fontSize: 13 }}>{conv.original_filename || 'Onbekend'}</td>
 <td style={{ padding: "12px 16px", fontSize: 13 }}>
 <span style={{ 
  padding: "4px 8px", 
  borderRadius: 6, 
  fontSize: 11, 
  fontWeight: 600,
  background: conv.status === 'success' ? '#10b98122' : conv.status === 'failed' ? '#ef444422' : '#f59e0b22',
  color: conv.status === 'success' ? '#10b981' : conv.status === 'failed' ? '#ef4444' : '#f59e0b'
 }}>
  {conv.status || 'pending'}
 </span>
 </td>
 <td style={{ padding: "12px 16px", fontSize: 13 }}>{conv.invoice_number || '-'}</td>
 <td style={{ padding: "12px 16px", fontSize: 13 }}>{conv.invoice_total ? `€${parseFloat(conv.invoice_total).toFixed(2)}` : '-'}</td>
 <td style={{ padding: "12px 16px", fontSize: 13, color: C.gray }}>{formatDateTime(conv.created_at as string)}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 </div>
 )}

 {tab === "messages" && (
 <div>
 <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 20 }}>Contact berichten ({messages.length})</h2>
 <div style={{ overflowX: "auto" }}>
 <table style={{ width: "100%", borderCollapse: "collapse" }}>
 <thead>
 <tr style={{ borderBottom: `1px solid ${C.border}` }}>
 <th style={{ textAlign: "left", padding: "12px 16px", fontSize: 12, fontWeight: 600, color: C.dim }}>ID</th>
 <th style={{ textAlign: "left", padding: "12px 16px", fontSize: 12, fontWeight: 600, color: C.dim }}>Naam</th>
 <th style={{ textAlign: "left", padding: "12px 16px", fontSize: 12, fontWeight: 600, color: C.dim }}>Email</th>
 <th style={{ textAlign: "left", padding: "12px 16px", fontSize: 12, fontWeight: 600, color: C.dim }}>Bedrijf</th>
 <th style={{ textAlign: "left", padding: "12px 16px", fontSize: 12, fontWeight: 600, color: C.dim }}>Status</th>
 <th style={{ textAlign: "left", padding: "12px 16px", fontSize: 12, fontWeight: 600, color: C.dim }}>Aangemaakt</th>
 </tr>
 </thead>
 <tbody>
 {messages.map((msg: any) => (
 <tr key={msg.id} style={{ borderBottom: `1px solid ${C.border}20` }}>
 <td style={{ padding: "12px 16px", fontSize: 13 }}>{truncate(msg.id, 8)}</td>
 <td style={{ padding: "12px 16px", fontSize: 13 }}>{msg.name || '-'}</td>
 <td style={{ padding: "12px 16px", fontSize: 13 }}>{msg.email}</td>
 <td style={{ padding: "12px 16px", fontSize: 13 }}>{msg.company || '-'}</td>
 <td style={{ padding: "12px 16px", fontSize: 13 }}>
 <span style={{ 
  padding: "4px 8px", 
  borderRadius: 6, 
  fontSize: 11, 
  fontWeight: 600,
  background: msg.status === 'new' ? '#3b82f622' : msg.status === 'read' ? '#10b98122' : '#f59e0b22',
  color: msg.status === 'new' ? C.blue : msg.status === 'read' ? '#10b981' : '#f59e0b'
 }}>
  {msg.status || 'new'}
 </span>
 </td>
 <td style={{ padding: "12px 16px", fontSize: 13, color: C.gray }}>{formatDateTime(msg.created_at as string)}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 
 {/* Bericht details van eerste bericht */}
 {messages.length > 0 && (() => {
 const firstMessage = messages[0] as any;
 return (
 <div style={{ marginTop: 24, padding: 20, background: "rgba(255,255,255,0.03)", borderRadius: 12, border: `1px solid ${C.border}` }}>
 <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12 }}>Bericht details</h3>
 <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
 <div>
 <div style={{ fontSize: 12, color: C.dim, marginBottom: 4 }}>Onderwerp</div>
 <div style={{ fontSize: 14 }}>{firstMessage.subject || 'Geen onderwerp'}</div>
 </div>
 <div>
 <div style={{ fontSize: 12, color: C.dim, marginBottom: 4 }}>Telefoon</div>
 <div style={{ fontSize: 14 }}>{firstMessage.phone || '-'}</div>
 </div>
 </div>
 <div style={{ marginTop: 16 }}>
 <div style={{ fontSize: 12, color: C.dim, marginBottom: 4 }}>Bericht</div>
 <div style={{ fontSize: 14, lineHeight: 1.6, whiteSpace: "pre-wrap" }}>{firstMessage.message}</div>
 </div>
 </div>
 );
 })()}
 </div>
 )}

 {tab === "payments" && (
 <div>
 <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 20 }}>Betalingen ({payments.length})</h2>
 {payments.length === 0 ? (
 <div style={{ textAlign: "center", padding: "40px 20px", color: C.dim }}>
 <div style={{ fontSize: 48, marginBottom: 16 }}>💸</div>
 <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 8 }}>Nog geen betalingen</div>
 <div style={{ fontSize: 14 }}>Wanneer gebruikers credits kopen, verschijnen ze hier.</div>
 </div>
 ) : (
 <div style={{ overflowX: "auto" }}>
 <table style={{ width: "100%", borderCollapse: "collapse" }}>
 <thead>
 <tr style={{ borderBottom: `1px solid ${C.border}` }}>
 <th style={{ textAlign: "left", padding: "12px 16px", fontSize: 12, fontWeight: 600, color: C.dim }}>ID</th>
 <th style={{ textAlign: "left", padding: "12px 16px", fontSize: 12, fontWeight: 600, color: C.dim }}>Gebruiker</th>
 <th style={{ textAlign: "left", padding: "12px 16px", fontSize: 12, fontWeight: 600, color: C.dim }}>Bedrag</th>
 <th style={{ textAlign: "left", padding: "12px 16px", fontSize: 12, fontWeight: 600, color: C.dim }}>Status</th>
 <th style={{ textAlign: "left", padding: "12px 16px", fontSize: 12, fontWeight: 600, color: C.dim }}>Credits</th>
 <th style={{ textAlign: "left", padding: "12px 16px", fontSize: 12, fontWeight: 600, color: C.dim }}>Betaalmethode</th>
 <th style={{ textAlign: "left", padding: "12px 16px", fontSize: 12, fontWeight: 600, color: C.dim }}>Aangemaakt</th>
 </tr>
 </thead>
 <tbody>
 {payments.map((payment: any) => (
 <tr key={payment.id} style={{ borderBottom: `1px solid ${C.border}20` }}>
 <td style={{ padding: "12px 16px", fontSize: 13 }}>{truncate(payment.id, 8)}</td>
 <td style={{ padding: "12px 16px", fontSize: 13 }}>{payment.user_email || truncate(payment.user_id, 8)}</td>
 <td style={{ padding: "12px 16px", fontSize: 13, fontWeight: 600 }}>€{parseFloat(payment.amount).toFixed(2)}</td>
 <td style={{ padding: "12px 16px", fontSize: 13 }}>
 <span style={{ 
  padding: "4px 8px", 
  borderRadius: 6, 
  fontSize: 11, 
  fontWeight: 600,
  background: payment.status === 'paid' ? '#10b98122' : payment.status === 'pending' ? '#f59e0b22' : '#ef444422',
  color: payment.status === 'paid' ? '#10b981' : payment.status === 'pending' ? '#f59e0b' : '#ef4444'
 }}>
  {payment.status}
 </span>
 </td>
 <td style={{ padding: "12px 16px", fontSize: 13 }}>{payment.credits || 0}</td>
 <td style={{ padding: "12px 16px", fontSize: 13 }}>{payment.payment_method || 'Onbekend'}</td>
 <td style={{ padding: "12px 16px", fontSize: 13, color: C.gray }}>{formatDateTime(payment.created_at as string)}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 )}
 </div>
 )}
 </div>
 </div>
 </div>
 );
}