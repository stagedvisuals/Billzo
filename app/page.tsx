import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlowLine from "@/components/GlowLine";
import Reveal from "@/components/Reveal";

const STEPS = [
  { num: "01", title: "Upload je PDF", desc: "Sleep je factuur-PDF in het uploadvenster. Elk formaat, elke layout — onze AI herkent ze allemaal.", icon: "📄" },
  { num: "02", title: "AI leest alles", desc: "Onze AI extraheert automatisch alle velden: leverancier, klant, BTW-nummers, bedragen, regelomschrijvingen.", icon: "🧠" },
  { num: "03", title: "Download of verzend", desc: "Download UBL 2.1 XML of verzend direct via Peppol naar je klant. Klaar in seconden.", icon: "🚀" },
];

const FEATURES = [
  { title: "AI-Powered Parsing", desc: "Geen handmatig invullen. Upload je PDF en onze AI leest leverancier, klant, BTW-nummers, bedragen en regeldetails automatisch.", icon: "🧠" },
  { title: "UBL 2.1 Compliant", desc: "Output voldoet aan EN 16931 — de Europese standaard. Geaccepteerd door elk Peppol access point en boekhoudpakket.", icon: "📋" },
  { title: "Peppol Verzending", desc: "Verzend je e-factuur direct via het Peppol-netwerk naar je klant. Geen apart access point nodig.", icon: "📡" },
  { title: "BTW-Validatie", desc: "Automatische validatie van BTW-nummers via het EU VIES-systeem. Voorkom fouten vóór verzending.", icon: "✅" },
  { title: "NL + BE Ready", desc: "Gebouwd voor Nederlandse en Belgische ondernemers. Tweetalig, compliant met beide regelgevingen.", icon: "🇳🇱" },
  { title: "AVG/GDPR Compliant", desc: "Je factuurdata wordt tijdelijk verwerkt en niet opgeslagen na conversie. Privacy by design.", icon: "🔐" },
];

const PRICING = [
  { name: "Gratis", price: "€0", period: "", desc: "Probeer het uit", features: ["3 facturen per maand", "PDF → UBL conversie", "BTW-validatie", "Download als XML"], cta: "Start gratis", highlight: false },
  { name: "Pro", price: "€19", period: "/maand", desc: "Voor actieve ondernemers", features: ["50 facturen per maand", "Peppol verzending", "Factuurarchief", "30-dagen cashflow", "Priority support"], cta: "Start 14-dagen trial", highlight: true },
  { name: "Accountant", price: "€99", period: "/maand", desc: "Voor kantoren", features: ["Onbeperkt facturen", "Multi-administratie", "Bulk upload", "White-label rapportage", "API access", "Dedicated support"], cta: "Contact sales", highlight: false },
];

const FAQ = [
  { q: "Wat is Peppol?", a: "Peppol is een internationaal netwerk voor het veilig uitwisselen van e-facturen. Sinds 2026 is het verplicht voor B2B-facturatie in België, en vanaf 2030 voor de hele EU." },
  { q: "Wat is UBL?", a: "UBL (Universal Business Language) 2.1 is het gestandaardiseerde XML-formaat voor e-facturen. Het is de Europese standaard (EN 16931) die door elk Peppol access point wordt geaccepteerd." },
  { q: "Moet ik als Nederlandse ondernemer al Peppol gebruiken?", a: "Als je factureert naar Belgische klanten: ja, sinds januari 2026. Voor binnenlandse NL-facturen is het nog niet verplicht, maar de EU-verplichting (ViDA) komt in 2030." },
  { q: "Welke PDF-facturen worden ondersteund?", a: "Alle PDF-facturen — of het nu een Word-export, Excel-template, of professioneel opgemaakte factuur is. Onze AI herkent en extraheert de velden ongeacht het formaat." },
  { q: "Wat gebeurt er met mijn factuurdata?", a: "Je data wordt alleen tijdelijk verwerkt voor de conversie en daarna verwijderd. We slaan geen factuurdata op. Volledig AVG/GDPR compliant." },
  { q: "Kan ik Billzo koppelen aan mijn boekhoudpakket?", a: "De API is beschikbaar op het Business- en Accountant-plan. Integraties met Moneybird, Exact Online en e-Boekhouden staan op de roadmap." },
];

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-6 pt-20">
        {/* Background gradient */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-accent-primary/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 text-center max-w-3xl">
          <Reveal>
            <div className="inline-flex items-center gap-2 border border-accent-primary/20 bg-accent-primary/5 rounded-full px-4 py-1.5 mb-8">
              <span className="w-1.5 h-1.5 bg-accent-success rounded-full animate-pulse-slow" />
              <span className="text-xs font-medium text-accent-primary">
                Peppol verplicht in België — bereid je voor
              </span>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <h1 className="font-display text-[clamp(36px,7vw,72px)] font-extrabold leading-[1.05] tracking-tight mb-6">
              Van PDF naar{" "}
              <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
                Peppol
              </span>
              <br />in seconden
            </h1>
          </Reveal>

          <Reveal delay={2}>
            <p className="text-lg text-white/40 leading-relaxed max-w-xl mx-auto mb-10">
              Upload je PDF-factuur. Onze AI leest alles automatisch. Download UBL 2.1 XML of verzend direct via Peppol. Geen gedoe, geen boekhoudpakket nodig.
            </p>
          </Reveal>

          <Reveal delay={3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-accent-primary hover:bg-accent-primary/90 text-white font-semibold text-base px-8 py-4 rounded-xl transition-all shadow-lg shadow-accent-primary/20 hover:shadow-accent-primary/30">
                Probeer gratis — 3 facturen/maand →
              </button>
              <a href="#hoe-werkt-het" className="border border-white/10 text-white/60 hover:text-white hover:border-white/20 font-medium text-base px-8 py-4 rounded-xl transition-all">
                Bekijk hoe het werkt
              </a>
            </div>
          </Reveal>

          <Reveal delay={4}>
            <div className="mt-12 flex justify-center items-center gap-6 text-xs text-white/20">
              <span>🔐 AVG/GDPR compliant</span>
              <span className="w-1 h-1 bg-white/10 rounded-full" />
              <span>🇳🇱 Nederlands bedrijf</span>
              <span className="w-1 h-1 bg-white/10 rounded-full" />
              <span>⚡ Geen installatie nodig</span>
            </div>
          </Reveal>
        </div>
      </section>

      <GlowLine />

      {/* HOE WERKT HET */}
      <section id="hoe-werkt-het" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <span className="text-xs font-semibold text-accent-primary uppercase tracking-widest">Hoe werkt het</span>
              <h2 className="font-display text-[clamp(28px,4vw,44px)] font-bold mt-3 tracking-tight">
                Drie stappen. Dat is alles.
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STEPS.map((s, i) => (
              <Reveal key={i} delay={i + 1}>
                <div className="glow-border rounded-2xl p-8 bg-billzo-900/50 transition-all hover:bg-billzo-900/80 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="text-3xl mb-4 block">{s.icon}</span>
                  <div className="text-xs font-mono text-accent-primary/60 mb-2">{s.num}</div>
                  <h3 className="font-display text-lg font-bold mb-2">{s.title}</h3>
                  <p className="text-sm text-white/35 leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <GlowLine />

      {/* FEATURES */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <span className="text-xs font-semibold text-accent-secondary uppercase tracking-widest">Features</span>
              <h2 className="font-display text-[clamp(28px,4vw,44px)] font-bold mt-3 tracking-tight">
                Alles wat je nodig hebt
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((f, i) => (
              <Reveal key={i} delay={Math.min(i + 1, 4)}>
                <div className="border border-white/5 rounded-xl p-6 hover:border-white/10 transition-colors bg-billzo-900/30">
                  <span className="text-2xl mb-3 block">{f.icon}</span>
                  <h3 className="font-display text-base font-bold mb-2">{f.title}</h3>
                  <p className="text-sm text-white/30 leading-relaxed">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <GlowLine />

      {/* PRIJZEN */}
      <section id="prijzen" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <span className="text-xs font-semibold text-accent-success uppercase tracking-widest">Prijzen</span>
              <h2 className="font-display text-[clamp(28px,4vw,44px)] font-bold mt-3 tracking-tight">
                Simpel en eerlijk
              </h2>
              <p className="text-white/30 mt-3">Ook beschikbaar: losse factuur voor €1,95/stuk. Geen abonnement nodig.</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PRICING.map((p, i) => (
              <Reveal key={i} delay={i + 1}>
                <div className={`relative rounded-2xl p-8 border transition-all ${p.highlight ? "border-accent-primary/30 bg-accent-primary/5" : "border-white/5 bg-billzo-900/30"}`}>
                  {p.highlight && (
                    <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-primary to-transparent" />
                  )}
                  {p.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      Populair
                    </div>
                  )}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-white/50 mb-1">{p.name}</h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-display font-extrabold">{p.price}</span>
                      {p.period && <span className="text-sm text-white/30">{p.period}</span>}
                    </div>
                    <p className="text-xs text-white/25 mt-1">{p.desc}</p>
                  </div>
                  <div className="space-y-3 mb-8">
                    {p.features.map((f, j) => (
                      <div key={j} className="flex items-center gap-2.5 text-sm text-white/40">
                        <span className="text-accent-success text-xs">✓</span>
                        {f}
                      </div>
                    ))}
                  </div>
                  <button className={`w-full py-3 rounded-lg text-sm font-semibold transition-colors ${p.highlight ? "bg-accent-primary hover:bg-accent-primary/90 text-white" : "border border-white/10 text-white/60 hover:border-white/20 hover:text-white"}`}>
                    {p.cta}
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <GlowLine />

      {/* FAQ */}
      <section id="faq" className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <span className="text-xs font-semibold text-accent-warning uppercase tracking-widest">FAQ</span>
              <h2 className="font-display text-[clamp(28px,4vw,44px)] font-bold mt-3 tracking-tight">
                Veelgestelde vragen
              </h2>
            </div>
          </Reveal>

          <div className="space-y-4">
            {FAQ.map((item, i) => (
              <Reveal key={i} delay={Math.min(i + 1, 3)}>
                <div className="border border-white/5 rounded-xl p-6 hover:border-white/10 transition-colors">
                  <h3 className="font-display font-bold text-base mb-2">{item.q}</h3>
                  <p className="text-sm text-white/35 leading-relaxed">{item.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <GlowLine />

      {/* CTA */}
      <section className="py-24 px-6 text-center">
        <Reveal>
          <div className="max-w-2xl mx-auto">
            <h2 className="font-display text-[clamp(28px,5vw,48px)] font-extrabold tracking-tight mb-4">
              Klaar om te starten?
            </h2>
            <p className="text-lg text-white/30 mb-10">
              Probeer Billzo gratis. 3 facturen per maand, geen creditcard nodig.
            </p>
            <button className="bg-accent-primary hover:bg-accent-primary/90 text-white font-semibold text-lg px-10 py-4 rounded-xl transition-all shadow-lg shadow-accent-primary/20">
              Start gratis →
            </button>
          </div>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}