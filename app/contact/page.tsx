import { C } from "../../lib/constants";

export default function ContactPage() {
 return (
 <div style={{ background: "#020617", minHeight: "100vh", fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#f8fafc" }}>
 <div style={{ maxWidth: 700, margin: "0 auto", padding: "100px 24px 60px" }}>
 <a href="/" style={{ fontSize: 13, color: "#475569", textDecoration: "none", marginBottom: 20, display: "block" }}>← Terug naar home</a>
 <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 8 }}>Contact</h1>
 <p style={{ fontSize: 13, color: "#475569", marginBottom: 32 }}>Neem contact met ons op voor vragen over PeppolPro</p>

 <div style={{ background: "rgba(15,23,42,0.6)", border: "1px solid rgba(59,130,246,0.08)", borderRadius: 16, padding: 32, marginBottom: 24 }}>
 <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12 }}>Juridische zaken</h2>
 <p style={{ fontSize: 14, color: "#94a3b8", marginBottom: 8 }}>Voor privacy, voorwaarden en AVG/GDPR:</p>
 <p style={{ fontSize: 14, color: "#3b82f6", fontWeight: 600 }}>legal@synqlayer.com</p>
 <p style={{ fontSize: 12, color: "#475569", marginTop: 16 }}>Reactietijd: binnen 5 werkdagen</p>
 </div>

 <div style={{ background: "rgba(15,23,42,0.6)", border: "1px solid rgba(59,130,246,0.08)", borderRadius: 16, padding: 32, marginBottom: 24 }}>
 <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12 }}>Technische support</h2>
 <p style={{ fontSize: 14, color: "#94a3b8", marginBottom: 8 }}>Voor problemen met het platform:</p>
 <p style={{ fontSize: 14, color: "#3b82f6", fontWeight: 600 }}>support@synqlayer.com</p>
 <p style={{ fontSize: 12, color: "#475569", marginTop: 16 }}>Reactietijd: binnen 24 uur (werkdagen)</p>
 </div>

 <div style={{ background: "rgba(15,23,42,0.6)", border: "1px solid rgba(59,130,246,0.08)", borderRadius: 16, padding: 32, marginBottom: 24 }}>
 <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12 }}>Sales & partnerships</h2>
 <p style={{ fontSize: 14, color: "#94a3b8", marginBottom: 8 }}>Voor zakelijke accounts en API access:</p>
 <p style={{ fontSize: 14, color: "#3b82f6", fontWeight: 600 }}>sales@synqlayer.com</p>
 <p style={{ fontSize: 12, color: "#475569", marginTop: 16 }}>Reactietijd: binnen 2 werkdagen</p>
 </div>

 <div style={{ marginTop: 40, paddingTop: 24, borderTop: "1px solid rgba(59,130,246,0.08)" }}>
 <h3 style={{ fontSize: 14, fontWeight: 700, marginBottom: 8 }}>SynqLayer</h3>
 <p style={{ fontSize: 12, color: "#475569" }}>KVK: [VOLGT] | BTW: [VOLGT]</p>
 <p style={{ fontSize: 12, color: "#475569" }}>Nederland</p>
 </div>
 </div>
 </div>
 );
}
