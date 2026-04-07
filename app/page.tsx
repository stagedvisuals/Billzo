"use client";
import { useState } from "react";

const C = {
  bg: "#020617",
  card: "rgba(15,23,42,0.6)",
  blue: "#3b82f6",
  cyan: "#06b6d4",
  white: "#f8fafc",
  gray: "#94a3b8",
  dim: "#475569",
  border: "rgba(59,130,246,0.08)",
  glow: "rgba(59,130,246,0.15)",
};

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          padding: "24px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "rgba(2,6,23,0.8)",
          backdropFilter: "blur(12px)",
          borderBottom: `1px solid ${C.border}`,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "10px",
              background: `linear-gradient(135deg, ${C.blue}, ${C.cyan})`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              fontSize: "16px",
              color: C.white,
            }}
          >
            B
          </div>
          <span
            style={{
              fontSize: "20px",
              fontWeight: 800,
              letterSpacing: "-0.02em",
            }}
          >
            Bill<span style={{ color: C.blue }}>zo</span>
          </span>
        </div>
        <div style={{ display: "flex", gap: "32px", alignItems: "center" }}>
          <a
            href="#hoe"
            style={{
              fontSize: "14px",
              fontWeight: 500,
              color: C.gray,
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = C.white)}
            onMouseLeave={(e) => (e.currentTarget.style.color = C.gray)}
          >
            Hoe werkt het
          </a>
          <a
            href="#features"
            style={{
              fontSize: "14px",
              fontWeight: 500,
              color: C.gray,
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = C.white)}
            onMouseLeave={(e) => (e.currentTarget.style.color = C.gray)}
          >
            Features
          </a>
          <a
            href="#pricing"
            style={{
              fontSize: "14px",
              fontWeight: 500,
              color: C.gray,
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = C.white)}
            onMouseLeave={(e) => (e.currentTarget.style.color = C.gray)}
          >
            Prijzen
          </a>
          <button
            style={{
              background: C.blue,
              color: C.white,
              border: "none",
              borderRadius: "10px",
              padding: "10px 24px",
              fontSize: "14px",
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#2563eb";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = C.blue;
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Probeer gratis
          </button>
        </div>
      </nav>

      <main style={{ paddingTop: "120px" }}>
        {/* Hero */}
        <section
          style={{
            minHeight: "90vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 32px",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "min(800px, 90vw)",
              height: "600px",
              background: `radial-gradient(circle, ${C.blue}05 0%, transparent 70%)`,
              filter: "blur(80px)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              textAlign: "center",
              maxWidth: "800px",
              position: "relative",
              zIndex: 1,
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: `rgba(59,130,246,0.1)`,
                border: `1px solid ${C.border}`,
                borderRadius: "9999px",
                padding: "8px 20px",
                marginBottom: "32px",
              }}
            >
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: C.cyan,
                  animation: "pulse-dot 2s ease-in-out infinite",
                }}
              />
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                  color: C.cyan,
                }}
              >
                Peppol verplicht in België — bereid je voor
              </span>
            </div>
            <h1
              style={{
                fontSize: "clamp(40px, 6vw, 72px)",
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                marginBottom: "24px",
              }}
            >
              Van PDF naar{" "}
              <span
                style={{
                  background: `linear-gradient(90deg, ${C.blue}, ${C.cyan})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Peppol
              </span>{" "}
              in seconden
            </h1>
            <p
              style={{
                fontSize: "20px",
                color: C.gray,
                lineHeight: 1.6,
                maxWidth: "640px",
                margin: "0 auto 48px",
              }}
            >
              Upload je PDF-factuur. Onze AI leest alles automatisch. Download
              UBL 2.1 XML of verzend direct via Peppol. Geen gedoe, geen
              boekhoudpakket nodig.
            </p>
            <div
              style={{
                display: "flex",
                gap: "16px",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <button
                style={{
                  background: C.blue,
                  color: C.white,
                  border: "none",
                  borderRadius: "12px",
                  padding: "16px 40px",
                  fontSize: "16px",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.2s",
                  boxShadow: `0 10px 30px ${C.glow}`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#2563eb";
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = `0 15px 40px ${C.glow}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = C.blue;
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = `0 10px 30px ${C.glow}`;
                }}
              >
                Probeer gratis — 3 facturen/maand →
              </button>
              <a
                href="#hoe"
                style={{
                  background: "transparent",
                  color: C.gray,
                  border: `1px solid ${C.border}`,
                  borderRadius: "12px",
                  padding: "16px 40px",
                  fontSize: "16px",
                  fontWeight: 500,
                  cursor: "pointer",
                  textDecoration: "none",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = C.white;
                  e.currentTarget.style.borderColor = C.blue;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = C.gray;
                  e.currentTarget.style.borderColor = C.border;
                }}
              >
                Bekijk hoe het werkt
              </a>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "24px",
                marginTop: "64px",
                fontSize: "14px",
                color: C.dim,
              }}
            >
              <span>🔐 AVG/GDPR compliant</span>
              <div
                style={{ width: "4px", height: "4px", background: C.dim, borderRadius: "50%" }}
              />
              <span>🇳🇱 Nederlands bedrijf</span>
              <div
                style={{ width: "4px", height: "4px", background: C.dim, borderRadius: "50%" }}
              />
              <span>⚡ Geen installatie nodig</span>
            </div>
          </div>
        </section>

        {/* Glow Line */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "1px",
            margin: "64px 0",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: `linear-gradient(90deg, transparent, ${C.glow}, transparent)`,
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              height: "100%",
              width: "25%",
              background: `linear-gradient(90deg, transparent, ${C.blue}, transparent)`,
              animation: "gradient-x 3s ease-in-out infinite",
            }}
          />
        </div>

        {/* Hoe werkt het */}
        <section id="hoe" style={{ padding: "96px 32px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "64px" }}>
              <div
                style={{
                  fontSize: "12px",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: C.cyan,
                  marginBottom: "12px",
                }}
              >
                Hoe werkt het
              </div>
              <h2
                style={{
                  fontSize: "clamp(28px, 4vw, 44px)",
                  fontWeight: 800,
                  lineHeight: 1.1,
                }}
              >
                Drie stappen. Dat is alles.
              </h2>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "32px",
              }}
            >
              {[
                {
                  icon: "📄",
                  step: "01",
                  title: "Upload je PDF",
                  desc: "Sleep je factuur-PDF in het uploadvenster. Elk formaat, elke layout — onze AI herkent ze allemaal.",
                },
                {
                  icon: "🧠",
                  step: "02",
                  title: "AI leest alles",
                  desc: "Onze AI extraheert automatisch alle velden: leverancier, klant, BTW-nummers, bedragen, regelomschrijvingen.",
                },
                {
                  icon: "🚀",
                  step: "03",
                  title: "Download of verzend",
                  desc: "Download UBL 2.1 XML of verzend direct via Peppol naar je klant. Klaar in seconden.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    background: C.card,
                    borderRadius: "20px",
                    border: `1px solid ${C.border}`,
                    padding: "32px",
                    position: "relative",
                    overflow: "hidden",
                    transition: "all 0.3s",
                    transform: hoveredCard === idx ? "translateY(-8px)" : "none",
                    ...(hoveredCard === idx && {
                      boxShadow: `0 0 40px ${C.glow}`,
                      borderColor: C.blue,
                    }),
                  }}
                  onMouseEnter={() => setHoveredCard(idx)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {hoveredCard === idx && (
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "1px",
                        background: `linear-gradient(90deg, transparent, ${C.blue}, transparent)`,
                      }}
                    />
                  )}
                  <div style={{ fontSize: "48px", marginBottom: "16px" }}>
                    {item.icon}
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      fontFamily: "'JetBrains Mono', monospace",
                      color: C.cyan,
                      marginBottom: "8px",
                    }}
                  >
                    {item.step}
                  </div>
                  <h3
                    style={{
                      fontSize: "20px",
                      fontWeight: 700,
                      marginBottom: "12px",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ color: C.gray, lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer
          style={{
            borderTop: `1px solid ${C.border}`,
            padding: "64px 32px 32px",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "12px",
                marginBottom: "16px",
              }}
            >
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "8px",
                  background: `linear-gradient(135deg, ${C.blue}, ${C.cyan})`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 800,
                  fontSize: "14px",
                  color: C.white,
                }}
              >
                B
              </div>
              <span
                style={{
                  fontSize: "18px",
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                }}
              >
                Bill<span style={{ color: C.blue }}>zo</span>
              </span>
            </div>
            <p
              style={{
                fontSize: "14px",
                color: C.dim,
                maxWidth: "400px",
                margin: "0 auto 32px",
                lineHeight: 1.6,
              }}
            >
              Van PDF naar Peppol in seconden. De simpelste e-facturatie tool van Nederland.
            </p>
            <div
              style={{
                borderTop: `1px solid ${C.border}`,
                paddingTop: "24px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "16px",
                fontSize: "12px",
                color: C.dim,
              }}
            >
              <span>© 2026 Billzo — SynqLayer</span>
              <div
                style={{ width: "4px", height: "4px", background: C.dim, borderRadius: "50%" }}
              />
              <span>KvK: [VOLGT]</span>
              <div
                style={{ width: "4px", height: "4px", background: C.dim, borderRadius: "50%" }}
              />
              <span>BTW: [VOLGT]</span>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}