export default function GlowLine() {
  return (
    <div className="relative w-full h-px overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-primary/10 to-transparent" />
      <div className="absolute top-0 h-full w-1/4 bg-gradient-to-r from-transparent via-accent-primary/30 to-transparent animate-glow-line" />
    </div>
  );
}