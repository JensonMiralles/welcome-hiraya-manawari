export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6">
      {/* Radial vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#0A0A0F_70%)]" />

      {/* Subtle gold glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-champagne/[0.03] blur-[120px]" />

      <div className="relative z-10 flex flex-col items-center text-center">
        <p className="animate-fade-in-up text-xs font-medium uppercase tracking-[0.35em] text-champagne-muted opacity-0">
          Digital Wedding Invitations
        </p>

        <h1 className="mt-6 animate-fade-in-up-delay-1 font-serif text-5xl font-light leading-tight tracking-wide text-champagne opacity-0 sm:text-6xl md:text-7xl lg:text-8xl">
          Hiraya Manawari
        </h1>

        {/* Gold divider */}
        <div className="mt-8 animate-fade-in-up-delay-2 opacity-0">
          <div className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-champagne/60 to-transparent" />
        </div>

        <p className="mt-8 max-w-lg animate-fade-in-up-delay-2 font-serif text-lg font-light italic tracking-wide text-ivory-muted/70 opacity-0 sm:text-xl">
          Your dreams, fulfilled.
        </p>

        <p className="mt-4 max-w-md animate-fade-in-up-delay-3 text-sm leading-relaxed text-warm-gray opacity-0">
          Made by Filipinos, for Filipinos. Digital wedding invitations as beautiful as your love story — from the first invite to the last dance.
        </p>

        <a
          href="#pricing"
          className="mt-12 animate-fade-in-up-delay-3 border border-champagne/40 px-8 py-3 text-xs font-medium uppercase tracking-[0.25em] text-champagne opacity-0 transition-all duration-500 hover:border-champagne hover:bg-champagne/10 hover:shadow-[0_0_30px_rgba(212,175,122,0.1)]"
        >
          View Plans
        </a>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in-up-delay-3 opacity-0">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.3em] text-warm-gray">Scroll</span>
          <div className="h-8 w-px bg-gradient-to-b from-champagne/30 to-transparent" />
        </div>
      </div>
    </section>
  )
}
