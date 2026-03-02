export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6">
      {/* Background gradient with warm tones */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#212121_0%,_#1A1A1A_70%)]" />

      {/* Gold glow — center */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 translate-z-0 rounded-full bg-champagne/[0.06] blur-[200px]" />

      {/* Rose glow — bottom right */}
      <div className="pointer-events-none absolute bottom-0 right-0 h-[700px] w-[700px] translate-x-1/4 translate-y-1/4 translate-z-0 rounded-full bg-rose-glow/[0.04] blur-[160px]" />

      {/* Plum glow — top left */}
      <div className="pointer-events-none absolute left-0 top-0 h-[600px] w-[600px] -translate-x-1/4 -translate-y-1/4 translate-z-0 rounded-full bg-plum-light/20 blur-[140px]" />

      {/* Noise overlay to eliminate color banding */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`, backgroundRepeat: 'repeat', backgroundSize: '256px 256px' }} />

      {/* Bottom fade to midnight for seamless transition to About */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-midnight" />

      <div className="relative z-10 flex flex-col items-center text-center">
        <p className="animate-fade-in-up text-xs font-medium uppercase tracking-[0.35em] text-champagne-muted opacity-0">
          Digital Wedding Invitations
        </p>

        <h1 className="mt-6 animate-fade-in-up-delay-1 font-serif text-5xl font-light leading-tight tracking-wide text-champagne opacity-0 sm:text-6xl md:text-7xl lg:text-8xl">
          Hiraya Manawari
        </h1>

        {/* Gold divider — wider, gradient */}
        <div className="mt-8 animate-fade-in-up-delay-2 opacity-0">
          <div className="mx-auto h-px w-32 bg-gradient-to-r from-transparent via-champagne/70 to-transparent" />
        </div>

        <p className="mt-8 max-w-lg animate-fade-in-up-delay-2 font-serif text-lg font-light italic tracking-wide text-ivory-muted/70 opacity-0 sm:text-xl">
          Your dreams, fulfilled.
        </p>

        <p className="mt-4 max-w-md animate-fade-in-up-delay-3 text-sm leading-relaxed text-warm-gray opacity-0">
          Made by Filipinos, for Filipinos. Digital wedding invitations as
          beautiful as your love story — from the first invite to the last
          dance.
        </p>

        <a
          href={
            import.meta.env.VITE_SUBDOMAIN
              ? import.meta.env.VITE_SUBDOMAIN
              : "#pricing"
          }
          className="mt-12 animate-fade-in-up-delay-3 border border-champagne/40 bg-champagne/[0.05] px-8 py-3 text-xs font-medium uppercase tracking-[0.25em] text-champagne opacity-0 transition-all duration-500 hover:border-champagne hover:bg-champagne/15 hover:shadow-[0_0_40px_rgba(212,175,122,0.15)]"
          onClick={(e) => {
            const href = import.meta.env.VITE_SUBDOMAIN
              ? import.meta.env.VITE_SUBDOMAIN
              : "#pricing";
            if (href.startsWith("#")) {
              e.preventDefault();
              const element = document.querySelector(href);
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }
          }}
        >
          Get Started For Free
        </a>
        <p className="mt-3 animate-fade-in-up-delay-3 text-[11px] tracking-wide text-warm-gray opacity-0">
          No payment required until you publish
        </p>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in-up-delay-3 opacity-0">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.3em] text-warm-gray">
            Scroll
          </span>
          <div className="h-8 w-px bg-gradient-to-b from-champagne/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}
