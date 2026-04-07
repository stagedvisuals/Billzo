export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center">
                <span className="text-white text-xs font-bold font-display">B</span>
              </div>
              <span className="text-sm font-display font-bold tracking-tight">
                Bill<span className="text-accent-primary">zo</span>
              </span>
            </div>
            <p className="text-sm text-white/25 leading-relaxed max-w-xs">
              Van PDF naar Peppol in seconden. De simpelste e-facturatie tool van Nederland. Een product van SynqLayer.
            </p>
          </div>
          <div>
            <div className="text-xs font-semibold text-white/30 uppercase tracking-wider mb-4">Product</div>
            <div className="space-y-2">
              {["Hoe werkt het", "Features", "Prijzen", "API Docs"].map((l) => (
                <div key={l} className="text-sm text-white/20 hover:text-white/50 cursor-pointer transition-colors">{l}</div>
              ))}
            </div>
          </div>
          <div>
            <div className="text-xs font-semibold text-white/30 uppercase tracking-wider mb-4">Juridisch</div>
            <div className="space-y-2">
              {["Privacy", "Voorwaarden", "AVG/GDPR", "Contact"].map((l) => (
                <div key={l} className="text-sm text-white/20 hover:text-white/50 cursor-pointer transition-colors">{l}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <span className="text-xs text-white/15">© 2026 Billzo — SynqLayer. Alle rechten voorbehouden.</span>
          <span className="text-xs text-white/15">KvK: [VOLGT] | BTW: [VOLGT]</span>
        </div>
      </div>
    </footer>
  );
}