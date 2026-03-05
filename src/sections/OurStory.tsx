export function OurStory() {
  return (
    <section className="relative overflow-hidden px-6 py-32">
      {/* Background image */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
        style={{ backgroundImage: "url('/assets/ourstory-bg.webp')" }}
      />

      {/* Dark overlay gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-midnight via-midnight/80 to-midnight" />

      {/* Champagne glow — left */}
      <div className="pointer-events-none absolute left-0 top-1/3 h-[350px] w-[350px] -translate-x-1/4 rounded-full bg-champagne/[0.03] blur-[120px] animate-glow-breathe" />

      {/* Plum glow — right */}
      <div className="pointer-events-none absolute right-0 bottom-1/4 h-[300px] w-[300px] translate-x-1/4 rounded-full bg-plum-light/8 blur-[120px] animate-glow-breathe" />

      <div className="relative mx-auto max-w-5xl">
        {/* Section header */}
        <div className="flex flex-col items-center text-center">
          <div className="h-px w-16 bg-gradient-to-r from-champagne/20 via-champagne/50 to-champagne/20" />
          <h2 className="mt-8 font-serif text-3xl font-light tracking-wide text-ivory sm:text-4xl">
            Built by Newlyweds, for Soon-to-Wed
          </h2>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-warm-gray">
            We didn't just build this platform — we needed it for our own
            wedding. Here's why Hiraya Manawari exists.
          </p>
        </div>

        {/* Founders' story card */}
        <div className="mx-auto mt-16 max-w-3xl">
          <div className="border border-champagne/[0.12] bg-gradient-to-b from-midnight-100/80 to-midnight-200/60 px-8 py-14 shadow-[0_0_60px_rgba(212,175,122,0.04)] sm:px-14">
            {/* Top ornamental accent */}
            <div className="mx-auto mb-8 h-px w-20 bg-gradient-to-r from-transparent via-champagne/40 to-transparent" />

            <p className="font-serif text-base font-light italic leading-relaxed tracking-wide text-champagne/90 sm:text-lg">
              "When we were planning our wedding last December 28, 2025, we
              struggled to find a simple way to manage RSVPs. Spreadsheets were
              messy, Google Forms felt impersonal, and foreign platforms didn't
              understand Filipino wedding traditions. So we built the tool we
              wished we had."
            </p>

            <p className="mt-6 text-sm leading-relaxed text-ivory-muted/60">
              Hiraya Manawari was born from that experience — a platform made
              specifically for Filipino couples who deserve a beautiful,
              stress-free way to share their love story and manage their guest
              list. Every feature we built solves a problem we personally faced.
            </p>

            {/* Ornamental divider */}
            <div className="mx-auto mt-8 flex items-center justify-center gap-3">
              <div className="h-px w-8 bg-champagne/30" />
              <div className="h-1.5 w-1.5 rotate-45 border border-champagne/40" />
              <div className="h-px w-8 bg-champagne/30" />
            </div>

            <p className="mt-6 text-center text-xs tracking-widest text-champagne/50">
              Jenson & Jade — Founders, Hiraya Manawari
            </p>

            {/* Bottom ornamental accent */}
            <div className="mx-auto mt-8 h-px w-20 bg-gradient-to-r from-transparent via-champagne/40 to-transparent" />
          </div>
        </div>

        {/* Benefits grid */}
        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden border border-white/[0.06] bg-gradient-to-br from-midnight-100/70 to-midnight-200/50 p-8 transition-all duration-500 hover:border-champagne/25 hover:shadow-[0_8px_40px_rgba(212,175,122,0.05)]"
            >
              {/* Top accent line on hover */}
              <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-champagne/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-champagne/[0.08] text-champagne/70 transition-all duration-500 group-hover:bg-champagne/[0.14] group-hover:text-champagne">
                {item.icon}
              </div>
              <h3 className="mt-5 font-serif text-base font-medium tracking-wide text-ivory">
                {item.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-warm-gray">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const benefits: {
  title: string;
  description: string;
  icon: React.ReactNode;
}[] = [
  {
    title: "Advanced RSVP Management",
    description:
      "Track responses, meal choices, dietary needs, and guest counts in one dashboard. Export everything when you need it.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        className="h-5 w-5"
      >
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </svg>
    ),
  },
  {
    title: "Beautiful & Timeless Design",
    description:
      "Elegant templates crafted specifically for Filipino weddings — not generic invitations adapted as an afterthought.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        className="h-5 w-5"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Ready in Under 5 Minutes",
    description:
      "Choose a template, customize your details, and publish. Your wedding website is live before you finish your coffee.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        className="h-5 w-5"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    title: "Accessible Pricing",
    description:
      "One-time payment starting at P999 — no subscriptions, no hidden fees. Because weddings are expensive enough.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        className="h-5 w-5"
      >
        <path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
  },
  {
    title: "Made for Filipino Weddings",
    description:
      "Built-in support for entourage, ninongs and ninangs, Tagalog language options, and traditions that matter to you.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        className="h-5 w-5"
      >
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
  },
  {
    title: "All-in-One Platform",
    description:
      "Everything your guests need in one link — RSVP, event details, gallery, registry, and more. No scattered tools.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        className="h-5 w-5"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
];
