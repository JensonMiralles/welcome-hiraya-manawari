export function PublishedSites() {
  return (
    <section className="relative overflow-hidden px-6 py-32">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-midnight via-midnight-300 to-midnight" />

      {/* Champagne glow — left */}
      <div className="pointer-events-none absolute left-0 top-1/3 h-[350px] w-[350px] -translate-x-1/4 rounded-full bg-champagne/[0.025] blur-[140px] animate-glow-breathe-slow" />

      {/* Rose glow — right */}
      <div className="pointer-events-none absolute bottom-1/4 right-0 h-[300px] w-[300px] translate-x-1/4 rounded-full bg-rose-glow/[0.025] blur-[120px] animate-glow-breathe" />

      <div className="relative mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center">
          <div className="h-px w-16 bg-gradient-to-r from-champagne/20 via-champagne/50 to-champagne/20" />
          <h2 className="mt-8 font-serif text-3xl font-light tracking-wide text-ivory sm:text-4xl">
            Real Invitations, Real Couples
          </h2>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-warm-gray sm:text-base">
            See how couples have used Hiraya Manawari to create stunning wedding
            invitations that reflect their unique love stories.
          </p>
        </div>

        {/* Sites Grid */}
        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {publishedSites.map((site) => (
            <a
              key={site.couple}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden border border-white/[0.06] bg-gradient-to-br from-midnight-100/60 to-midnight-200/40 transition-all duration-500 hover:border-champagne/25 hover:shadow-[0_8px_40px_rgba(212,175,122,0.06)]"
            >
              {/* Background Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-midnight-200/60">
                <img
                  src={site.backgroundImage}
                  alt={site.couple}
                  className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient overlay — always visible, blends image into theme */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-midnight via-midnight/50 to-transparent" />
                {/* Subtle vignette for depth */}
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(26,26,26,0.5)_100%)]" />
                {/* Monogram watermark */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif text-3xl text-champagne/10 transition-opacity duration-500 group-hover:opacity-0">
                    {site.monogram}
                  </span>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-midnight/60 opacity-0 backdrop-blur-sm transition-opacity duration-500 group-hover:opacity-100">
                  <span className="flex items-center gap-2 border border-champagne/30 bg-champagne/[0.08] px-5 py-2.5 text-xs uppercase tracking-[0.15em] text-champagne">
                    View Invitation
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="h-3.5 w-3.5"
                    >
                      <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="font-serif text-base font-medium tracking-wide text-ivory">
                  {site.couple}
                </h3>
                <p className="mt-1.5 text-[11px] uppercase tracking-[0.15em] text-champagne/50">
                  {site.date} &middot; {site.location}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {site.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-champagne/10 bg-champagne/[0.04] px-2 py-0.5 text-[10px] tracking-wide text-champagne/45"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 flex flex-col items-center text-center">
          <p className="text-sm text-warm-gray">
            Your invitation could be next.
          </p>
          <a
            href="#pricing"
            className="mt-5 border border-champagne/30 bg-champagne/[0.06] px-8 py-3 text-xs uppercase tracking-[0.2em] text-champagne transition-all duration-300 hover:border-champagne/50 hover:bg-champagne/[0.12]"
          >
            Start Creating Yours
          </a>
        </div>
      </div>
    </section>
  );
}

const publishedSites: {
  couple: string;
  monogram: string;
  date: string;
  location: string;
  url: string;
  backgroundImage: string;
  tags: string[];
}[] = [
  {
    couple: "Jenson & Jade",
    monogram: "J & J",
    date: "December 28, 2026",
    location: "Tagaytay",
    url: "https://app.hirayaweddings.com/view/jenson-and-jade",
    backgroundImage: "/assets/jenson-and-jade-sample.png",
    tags: ["Modern Minimal", "Clean", "Contemporary"],
  },
];
