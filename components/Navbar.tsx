"use client";
import { useState, useEffect } from "react";

const NAV = [
  { id: "hoe-werkt-het", label: "Hoe werkt het" },
  { id: "features", label: "Features" },
  { id: "prijzen", label: "Prijzen" },
  { id: "faq", label: "FAQ" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-billzo-950/95 backdrop-blur-xl border-b border-white/5" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center">
            <span className="text-white text-sm font-bold font-display">B</span>
          </div>
          <span className="text-base font-display font-bold tracking-tight">
            Bill<span className="text-accent-primary">zo</span>
          </span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {NAV.map((n) => (
            <button key={n.id} onClick={() => scrollTo(n.id)} className="text-sm text-white/40 hover:text-white/80 transition-colors font-medium">
              {n.label}
            </button>
          ))}
          <button className="text-sm font-semibold text-white bg-accent-primary hover:bg-accent-primary/90 px-5 py-2 rounded-lg transition-colors">
            Probeer gratis
          </button>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white/60 hover:text-white text-xl">
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/5 bg-billzo-950/95 backdrop-blur-xl px-6 py-4">
          {NAV.map((n) => (
            <button key={n.id} onClick={() => scrollTo(n.id)} className="block w-full text-left text-sm text-white/50 hover:text-white py-3 transition-colors">
              {n.label}
            </button>
          ))}
          <button className="mt-3 w-full text-sm font-semibold text-white bg-accent-primary px-5 py-3 rounded-lg">
            Probeer gratis
          </button>
        </div>
      )}
    </nav>
  );
}