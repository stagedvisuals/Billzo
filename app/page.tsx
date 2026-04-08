"use client";
import { useState, useEffect, ReactNode } from "react";
import ParticleField from "../components/ParticleField";
import Reveal from "../components/Reveal";
import GlassCard from "../components/GlassCard";
import Button from "../components/Button";
import Divider from "../components/Divider";
import { C, STEPS, FEATURES, PRICING, FAQ } from "../lib/constants";

export default function Home() {
 const [scrollY, setScrollY] = useState(0);
 const [menuOpen, setMenuOpen] = useState(false);

 useEffect(() => {
 const s = () => setScrollY(window.scrollY);
 window.addEventListener("scroll", s, { passive: true });
 return () => window.removeEventListener("scroll", s);
 }, []);

 const go = (id: string) => {
 document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
 setMenuOpen(false);
 };

 const navs = [
 { id: "how", l: "Hoe werkt het" },
 { id: "features", l: "Features" },
 { id: "pricing", l: "Prijzen" },
 { id: "faq", l: "FAQ" },
 ];

 return (
 <div style={{ background: C.bg, color: C.white, minHeight: "100vh", fontFamily: "'Plus Jakarta Sans', sans-serif", overflowX: "hidden" }}>
 <ParticleField />

 {/* NAV */}
 <nav style={{
 position: "fixed",
 top: 0,
 left: 0,
 right: 0,
 zIndex: 100,
 padding: "0 20px",
 background: scrollY > 50 ? "rgba(2,6,23,0.92)" : "transparent",
 backdropFilter: scrollY > 50 ? "blur(20px)" : "none",
 borderBottom: scrollY > 50 ? `1px solid ${C.border}` : "none",
 transition: "all 0.4s",
 }}>
 <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", height: 60 }}>
 <div style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
 <div style={{ width: 32, height: 32, borderRadius: 10, background: `linear-gradient(135deg, ${C.blue}, ${C.indigo})`, display: "flex", alignItems: "center", justifyContent: "center" }}>
 <span style={{ color: "#fff", fontSize: 14, fontWeight: 800 }}>P</span>
 </div>
 <span style={{ fontSize: 18, fontWeight: 800, letterSpacing: "-0.3px" }}>Peppol<span style={{ color: C.blue }}>Pro</span></span>
 </div>

 {/* Desktop nav */}
 <div style={{ display: "flex", alignItems: "center", gap: 28 }} className="desk-nav">
 {navs.map((n) => (
 <button
 key={n.id}
 onClick={() => go(n.id)}
 style={{
 background: "none",
 border: "none",
 color: C.dim,
 fontSize: 13,
 fontWeight: 500,
 cursor: "pointer",
 fontFamily: "inherit",
 transition: "color 0.2s",
 padding: "6px 0",
 }}
 onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#fff")}
 onMouseLeave={(e) => ((e.target as HTMLElement).style.color = C.dim)}
 >
 {n.l}
 </button>
 ))}
 <Button primary text="Probeer gratis" />
 </div>

 <button
 onClick={() => setMenuOpen(!menuOpen)}
 className="mob-btn"
 style={{ background: "none", border: "none", color: "#fff", fontSize: 22, cursor: "pointer", display: "none" }}
 >
 {menuOpen ? "✕" : "☰"}
 </button>
 </div>
 {menuOpen && (
 <div style={{ padding: "12px 0 20px", borderTop: `1px solid ${C.border}` }}>
 {navs.map((n) => (
 <button
 key={n.id}
 onClick={() => go(n.id)}
 style={{
 display: "block",
 width: "100%",
 textAlign: "left",
 background: "none",
 border: "none",
 color: C.dim,
 fontSize: 15,
 padding: "10px 0",
 cursor: "pointer",
 fontFamily: "inherit",
 }}
 >
 {n.l}
 </button>
 ))}
 </div>
 )}
 </nav>
 <style>{`@media (max-width: 768px) { .desk-nav { display: none !important; } .mob-btn { display: block !important; } }`}</style>

 {/* HERO */}
 <section style={{ minHeight: "92vh", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", padding: "100px 20px 60px", textAlign: "center" }}>
 <div style={{ position: "absolute", top: "30%", left: "50%", transform: "translate(-50%, -50%)", width: 600, height: 600, background: `radial-gradient(circle, ${C.glow}, transparent 70%)`, pointerEvents: "none", opacity: 0.5 }} />
 <div style={{ position: "relative", zIndex: 2, maxWidth: 720 }}>
 <Reveal>
 <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.2)", borderRadius: 100, padding: "7px 18px", marginBottom: 28, fontSize: 12, fontWeight: 600, color: C.blue }}>
 <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#10b981", animation: "pulse-dot 2s infinite" }} />
 Peppol verplicht in België — bereid je voor
 </div>
 </Reveal>
 <Reveal delay={0.1}>
 <h1 style={{ fontSize: "clamp(38px, 8vw, 74px)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-2px", marginBottom: 20 }}>
 Van PDF naar{" "}
 <span style={{ background: `linear-gradient(135deg, ${C.blue}, ${C.cyan}, ${C.indigo})`, backgroundSize: "200% 200%", animation: "gradient-x 4s ease infinite", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Peppol</span>
 <br />in seconden
 </h1>
 </Reveal>
 <Reveal delay={0.2}>
 <p style={{ fontSize: "clamp(16px, 2.2vw, 19px)", color: C.dim, lineHeight: 1.7, maxWidth: 560, margin: "0 auto 36px", fontWeight: 400 }}>
 Upload je PDF-factuur. Onze AI leest alles automatisch. Download UBL 2.1 XML of verzend direct via Peppol. Geen gedoe.
 </p>
 </Reveal>
 <Reveal delay={0.3}>
 <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
 <Button primary text="Probeer gratis — 3 facturen/maand →" />
 <Button primary={false} text="Bekijk hoe het werkt ↓" onClick={() => go("how")} />
 </div>
 </Reveal>
 <Reveal delay={0.4}>
 <div style={{ marginTop: 48, display: "flex", justifyContent: "center", alignItems: "center", gap: 20, flexWrap: "wrap", fontSize: 12, color: "rgba(148,163,184,0.5)" }}>
 {["🔐 AVG/GDPR compliant", "🇳🇱 Nederlands bedrijf", "⚡ Geen installatie"].map((t, i) => (
 <span key={i}>{t}</span>
 ))}
 </div>
 </Reveal>
 </div>
 </section>

 <Divider />

 {/* HOW */}
 <section id="how" style={{ padding: "100px 20px", position: "relative", zIndex: 2 }}>
 <div style={{ maxWidth: 1000, margin: "0 auto" }}>
 <Reveal>
 <div style={{ textAlign: "center", marginBottom: 56 }}>
 <span style={{ fontSize: 11, color: C.blue, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase" }}>Hoe werkt het</span>
 <h2 style={{ fontSize: "clamp(28px, 4.5vw, 46px)", fontWeight: 800, marginTop: 8, letterSpacing: "-1px" }}>Drie stappen. Dat is alles.</h2>
 </div>
 </Reveal>
 <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
 {STEPS.map((s, i) => (
 <GlassCard key={i} delay={i * 0.1}>
 <span style={{ fontSize: 36, display: "block", marginBottom: 12 }}>{s.icon}</span>
 <span style={{ fontSize: 11, fontFamily: "'JetBrains Mono', monospace", color: `${C.blue}88`, fontWeight: 600 }}>{s.n}</span>
 <h3 style={{ fontSize: 19, fontWeight: 700, margin: "6px 0 8px" }}>{s.t}</h3>
 <p style={{ fontSize: 14, color: C.dim, lineHeight: 1.7 }}>{s.d}</p>
 </GlassCard>
 ))}
 </div>
 </div>
 </section>

 <Divider />

 {/* FEATURES */}
 <section id="features" style={{ padding: "100px 20px", position: "relative", zIndex: 2 }}>
 <div style={{ maxWidth: 1000, margin: "0 auto" }}>
 <Reveal>
 <div style={{ textAlign: "center", marginBottom: 56 }}>
 <span style={{ fontSize: 11, color: C.cyan, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase" }}>Features</span>
 <h2 style={{ fontSize: "clamp(28px, 4.5vw, 46px)", fontWeight: 800, marginTop: 8, letterSpacing: "-1px" }}>Alles wat je nodig hebt</h2>
 </div>
 </Reveal>
 <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
 {FEATURES.map((f, i) => (
 <GlassCard key={i} delay={i * 0.08}>
 <span style={{ fontSize: 28, display: "block", marginBottom: 10 }}>{f.icon}</span>
 <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 6 }}>{f.t}</h3>
 <p style={{ fontSize: 13, color: C.dim, lineHeight: 1.7 }}>{f.d}</p>
 </GlassCard>
 ))}
 </div>
 </div>
 </section>

 <Divider />

 {/* PRICING */}
 <section id="pricing" style={{ padding: "100px 20px", position: "relative", zIndex: 2 }}>
 <div style={{ maxWidth: 960, margin: "0 auto" }}>
 <Reveal>
 <div style={{ textAlign: "center", marginBottom: 56 }}>
 <span style={{ fontSize: 11, color: "#10b981", fontWeight: 700, letterSpacing: 3, textTransform: "uppercase" }}>Prijzen</span>
 <h2 style={{ fontSize: "clamp(28px, 4.5vw, 46px)", fontWeight: 800, marginTop: 8, letterSpacing: "-1px" }}>Simpel en eerlijk</h2>
 <p style={{ color: C.dim, marginTop: 10, fontSize: 15 }}>Ook beschikbaar: losse factuur voor €1,95/stuk</p>
 </div>
 </Reveal>
 <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20, alignItems: "start" }}>
 {PRICING.map((p, i) => (
 <GlassCard key={i} delay={i * 0.12} highlight={p.hl}>
 {p.hl && (
 <div style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", background: `linear-gradient(135deg, ${C.blue}, ${C.indigo})`, color: "#fff", fontSize: 10, fontWeight: 700, padding: "4px 14px", borderRadius: 100, letterSpacing: 1, textTransform: "uppercase" }}>Populair</div>
 )}
 <div style={{ marginBottom: 24 }}>
 <div style={{ fontSize: 13, fontWeight: 600, color: C.dim, marginBottom: 4 }}>{p.name}</div>
 <div style={{ display: "flex", alignItems: "baseline", gap: 3 }}>
 <span style={{ fontSize: 42, fontWeight: 800 }}>{p.price}</span>
 {p.period && <span style={{ fontSize: 14, color: C.dim }}>{p.period}</span>}
 </div>
 <div style={{ fontSize: 12, color: `${C.dim}99`, marginTop: 2 }}>{p.sub}</div>
 </div>
 <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
 {p.features.map((f, j) => (
 <div key={j} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: C.gray }}>
 <span style={{ color: "#10b981", fontSize: 13, fontWeight: 700 }}>✓</span>{f}
 </div>
 ))}
 </div>
 <button style={{
 width: "100%",
 padding: "13px 0",
 borderRadius: 10,
 border: p.hl ? "none" : `1px solid ${C.border}`,
 background: p.hl ? `linear-gradient(135deg, ${C.blue}, ${C.indigo})` : "transparent",
 color: p.hl ? "#fff" : C.gray,
 fontWeight: 600,
 fontSize: 14,
 cursor: "pointer",
 fontFamily: "inherit",
 transition: "all 0.2s",
 }}>
 {p.cta}
 </button>
 </GlassCard>
 ))}
 </div>
 </div>
 </section>

 <Divider />

 {/* FAQ */}
 <section id="faq" style={{ padding: "100px 20px", position: "relative", zIndex: 2 }}>
 <div style={{ maxWidth: 700, margin: "0 auto" }}>
 <Reveal>
 <div style={{ textAlign: "center", marginBottom: 48 }}>
 <span style={{ fontSize: 11, color: "#f59e0b", fontWeight: 700, letterSpacing: 3, textTransform: "uppercase" }}>FAQ</span>
 <h2 style={{ fontSize: "clamp(28px, 4.5vw, 46px)", fontWeight: 800, marginTop: 8, letterSpacing: "-1px" }}>Veelgestelde vragen</h2>
 </div>
 </Reveal>
 <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
 {FAQ.map((f, i) => (
 <GlassCard key={i} delay={i * 0.06}>
 <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 6 }}>{f.q}</h3>
 <p style={{ fontSize: 14, color: C.dim, lineHeight: 1.7 }}>{f.a}</p>
 </GlassCard>
 ))}
 </div>
 </div>
 </section>

 <Divider />

 {/* CTA */}
 <section style={{ padding: "100px 20px", position: "relative", zIndex: 2, textAlign: "center" }}>
 <Reveal>
 <div style={{ maxWidth: 580, margin: "0 auto" }}>
 <span style={{ fontSize: 48, display: "block", marginBottom: 20, animation: "float 5s ease-in-out infinite" }}>📄</span>
 <h2 style={{ fontSize: "clamp(28px, 5vw, 46px)", fontWeight: 800, letterSpacing: "-1px", marginBottom: 12 }}>
 Klaar om te{" "}
 <span style={{ background: `linear-gradient(135deg, ${C.blue}, ${C.cyan})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>starten</span>?
 </h2>
 <p style={{ fontSize: 17, color: C.dim, marginBottom: 32 }}>Probeer PeppolPro gratis. 3 facturen per maand, geen creditcard nodig.</p>
 <Button primary text="Start gratis →" />
 </div>
 </Reveal>
 </section>

 {/* FOOTER */}
 <footer style={{ borderTop: `1px solid ${C.border}`, padding: "40px 20px", position: "relative", zIndex: 2 }}>
 <div style={{ maxWidth: 1000, margin: "0 auto" }}>
 <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 32, marginBottom: 32 }}>
 <div>
 <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
 <div style={{ width: 28, height: 28, borderRadius: 8, background: `linear-gradient(135deg, ${C.blue}, ${C.indigo})`, display: "flex", alignItems: "center", justifyContent: "center" }}>
 <span style={{ color: "#fff", fontSize: 12, fontWeight: 800 }}>P</span>
 </div>
 <span style={{ fontSize: 15, fontWeight: 800 }}>Peppol<span style={{ color: C.blue }}>Pro</span></span>
 </div>
 <p style={{ fontSize: 13, color: `${C.dim}88`, lineHeight: 1.6, maxWidth: 260 }}>Van PDF naar Peppol in seconden. Een product van SynqLayer.</p>
 </div>
 <div>
 <div style={{ fontSize: 10, fontWeight: 700, color: C.dim, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>Product</div>
 {["Hoe werkt het", "Features", "Prijzen", "API Docs"].map((l) => (
 <div key={l} style={{ fontSize: 13, color: `${C.dim}88`, padding: "3px 0", cursor: "pointer" }}>{l}</div>
 ))}
 </div>
 <div>
 <div style={{ fontSize: 10, fontWeight: 700, color: C.dim, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>Juridisch</div>
 {["Privacy", "Voorwaarden", "AVG/GDPR", "Contact"].map((l) => (
 <div key={l} style={{ fontSize: 13, color: `${C.dim}88`, padding: "3px 0", cursor: "pointer" }}>{l}</div>
 ))}
 </div>
 </div>
 <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: 20, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
 <span style={{ fontSize: 11, color: `${C.dim}55` }}>© 2026 PeppolPro — SynqLayer. Alle rechten voorbehouden.</span>
 <span style={{ fontSize: 11, color: `${C.dim}55` }}>KvK: [VOLGT] | BTW: [VOLGT]</span>
 </div>
 </div>
 </footer>
 </div>
 );
}