export function Footer() {
  return (
    <footer className="relative overflow-hidden px-6 pb-12 pt-20">
      {/* Subtle warm glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(212,175,122,0.015)_0%,transparent_60%)]" />

      <div className="relative mx-auto max-w-5xl">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-champagne/25 to-transparent" />
        <div className="mt-10 flex flex-col items-center gap-4 text-center">
          <span className="bg-gradient-to-b from-champagne to-champagne-dark bg-clip-text font-serif text-lg tracking-wide text-transparent">
            Hiraya Manawari
          </span>
          <p className="font-serif text-xs italic text-warm-gray/60">
            Made by Filipinos, for Filipinos.
          </p>
          <p className="text-[11px] tracking-wide text-warm-gray">
            &copy; {new Date().getFullYear()} Hiraya Manawari. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
