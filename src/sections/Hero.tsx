export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6">
      {/* Background image */}
      <div
        className="animate-fade-in pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0"
        style={{ backgroundImage: "url('/assets/hero-bg.jpg')" }}
      />

      {/* Dark overlay to maintain readability */}
      <div className="pointer-events-none absolute inset-0 bg-black/55" />

      {/* Ambient glow — layered radial gradients */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_33%,rgba(212,175,122,0.06)_0%,transparent_70%)]" />

      {/* Bottom fade to midnight for seamless transition to About */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-midnight" />

      <div className="relative z-10 flex flex-col items-center text-center">
        <p className="animate-fade-in-up text-xs font-medium uppercase tracking-[0.35em] text-champagne/70 opacity-0">
          Digital Wedding Invitations
        </p>

        <h1 className="mt-6 animate-fade-in-up-delay-1 font-serif text-5xl font-light leading-tight tracking-wide text-champagne opacity-0 sm:text-6xl md:text-7xl lg:text-8xl">
          Hiraya Manawari
        </h1>

        {/* Gold divider — wider, gradient */}
        <div className="mt-8 animate-fade-in-up-delay-2 opacity-0">
          <div className="mx-auto h-px w-32 bg-gradient-to-r from-transparent via-champagne/70 to-transparent" />
        </div>

        <p className="mt-8 max-w-lg animate-fade-in-up-delay-2 font-serif text-lg font-light italic tracking-wide text-ivory-muted opacity-0 sm:text-xl">
          Your dreams, fulfilled.
        </p>

        <p className="mt-4 max-w-md animate-fade-in-up-delay-3 text-sm leading-relaxed text-ivory/60 opacity-0">
          Made by Filipinos, for Filipinos. Digital wedding invitations as
          beautiful as your love story.
        </p>

        <a
          href="https://app.hirayaweddings.com"
          className="mt-12 animate-fade-in-up-delay-3 border border-champagne/40 bg-champagne/[0.05] px-8 py-3 text-xs font-medium uppercase tracking-[0.25em] text-champagne opacity-0 transition-all duration-500 hover:border-champagne hover:bg-champagne/15 hover:shadow-[0_0_40px_rgba(212,175,122,0.15)]"
        >
          Get Started For Free
        </a>
        <p className="mt-3 animate-fade-in-up-delay-3 text-[11px] tracking-wide text-ivory/60 opacity-0">
          No payment required until you publish
        </p>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="animate-fade-in-up-delay-3 opacity-0">
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] uppercase text-ivory/60">Scroll</span>
            <div className="h-8 w-px bg-gradient-to-b from-champagne/40 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
