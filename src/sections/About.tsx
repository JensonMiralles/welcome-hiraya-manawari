export function About() {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-center text-center">
          <div className="h-px w-12 bg-champagne/40" />
          <h2 className="mt-8 font-serif text-3xl font-light tracking-wide text-ivory sm:text-4xl">
            For Your Special Day
          </h2>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-warm-gray sm:text-base">
            A Filipino wedding is more than a ceremony — it's the joining of two families,
            the blessing of ninongs and ninangs, the gathering of loved ones who've been
            part of your journey. Hiraya Manawari is built for celebrations like these —
            elegant, meaningful, and truly Filipino.
          </p>
        </div>

        <div className="mt-24 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group flex flex-col items-center border border-white/[0.04] bg-midnight-200/50 p-8 text-center transition-all duration-500 hover:border-champagne/20 hover:bg-midnight-200"
            >
              <div className="flex h-10 w-10 items-center justify-center text-champagne/70 transition-colors duration-500 group-hover:text-champagne">
                {feature.icon}
              </div>
              <h3 className="mt-6 font-serif text-lg font-medium tracking-wide text-ivory">
                {feature.title}
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-warm-gray">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const features = [
  {
    title: 'Visual Editor',
    description:
      'Design your invitation with an intuitive drag-and-drop editor. No coding required.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="h-6 w-6">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 3v18" />
      </svg>
    ),
  },
  {
    title: 'Beautiful Templates',
    description:
      'Choose from templates designed for Filipino weddings — church ceremonies, garden receptions, and more.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="h-6 w-6">
        <path d="M4 4h16v16H4z" />
        <path d="M4 4l8 6 8-6" />
      </svg>
    ),
  },
  {
    title: 'RSVP Management',
    description:
      'Track guest responses — including your entourage, ninongs, ninangs, and meal preferences.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="h-6 w-6">
        <path d="M9 11l3 3 8-8" />
        <path d="M20 12v6a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h9" />
      </svg>
    ),
  },
  {
    title: 'Custom Domains',
    description:
      'Share your invitation on a personal domain — like juanandmaria.ph.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="h-6 w-6">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c-2.5 3-4 6-4 9s1.5 6 4 9c2.5-3 4-6 4-9s-1.5-6-4-9z" />
      </svg>
    ),
  },
]
