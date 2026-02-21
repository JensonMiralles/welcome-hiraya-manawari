function App() {
  return (
    <div className="min-h-screen bg-midnight text-ivory-muted">
      {/* ── Hero Section ── */}
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

      {/* ── About / Value Proposition ── */}
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

      {/* ── Showcase: Invitation Sections ── */}
      <section className="px-6 py-32">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center text-center">
            <div className="h-px w-12 bg-champagne/40" />
            <h2 className="mt-8 font-serif text-3xl font-light tracking-wide text-ivory sm:text-4xl">
              Everything Your Invitation Needs
            </h2>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-warm-gray sm:text-base">
              From the hero that welcomes your guests to the closing that leaves them inspired — every section is crafted for Filipino weddings.
            </p>
          </div>

          {/* Invitation Sections Grid */}
          <div className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {showcaseSections.map((item) => (
              <div
                key={item.title}
                className="group border border-white/[0.04] bg-midnight-200/40 p-7 transition-all duration-500 hover:border-champagne/20 hover:bg-midnight-200/80"
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg text-champagne/50">{item.icon}</span>
                  <h3 className="font-serif text-base font-medium tracking-wide text-ivory">
                    {item.title}
                  </h3>
                  {item.variants && (
                    <span className="ml-auto text-[10px] uppercase tracking-[0.15em] text-champagne/40">
                      {item.variants}
                    </span>
                  )}
                </div>
                <p className="mt-3 text-xs leading-relaxed text-warm-gray">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Stats row */}
          <div className="mt-20 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {showcaseStats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center text-center">
                <span className="font-serif text-3xl font-light text-champagne">
                  {stat.value}
                </span>
                <span className="mt-2 text-[10px] uppercase tracking-[0.2em] text-warm-gray">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Showcase: Customization ── */}
      <section className="px-6 py-32">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col items-center text-center">
            <div className="h-px w-12 bg-champagne/40" />
            <h2 className="mt-8 font-serif text-3xl font-light tracking-wide text-ivory sm:text-4xl">
              Make It Yours
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-warm-gray">
              Every couple is unique. Customize every detail — from fonts and colors to section order and layout — using our drag-and-drop editor.
            </p>
          </div>

          <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {customizationFeatures.map((item) => (
              <div
                key={item.title}
                className="border border-white/[0.04] bg-midnight-200/40 p-8 transition-all duration-500 hover:border-champagne/20"
              >
                <div className="flex h-8 w-8 items-center justify-center text-champagne/60">
                  {item.icon}
                </div>
                <h3 className="mt-5 font-serif text-base font-medium tracking-wide text-ivory">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-warm-gray">
                  {item.description}
                </p>
                {item.options && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.options.map((opt) => (
                      <span
                        key={opt}
                        className="border border-white/[0.06] bg-midnight-300/50 px-2.5 py-1 text-[10px] tracking-wide text-ivory-muted/50"
                      >
                        {opt}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cultural Note ── */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <div className="border border-white/[0.04] bg-midnight-200/30 px-8 py-14 sm:px-14">
            <p className="font-serif text-xl font-light italic leading-relaxed tracking-wide text-champagne/80 sm:text-2xl">
              "Hiraya Manawari"
            </p>
            <div className="mx-auto mt-6 h-px w-12 bg-champagne/30" />
            <p className="mt-6 text-sm leading-relaxed text-warm-gray">
              An ancient Filipino word meaning "the dreams and wishes of the heart
              shall be fulfilled." This is the spirit of every wedding — the fulfillment
              of a dream prayed for and waited upon.
            </p>
          </div>
        </div>
      </section>

      {/* ── Pricing Section ── */}
      <section id="pricing" className="px-6 py-32">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center text-center">
            <div className="h-px w-12 bg-champagne/40" />
            <h2 className="mt-8 font-serif text-3xl font-light tracking-wide text-ivory sm:text-4xl">
              Choose What's Right for You
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-warm-gray">
              From simple elegance to fully custom design — there's a plan for every kind of celebration.
            </p>
          </div>

          <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`group relative flex flex-col border p-8 transition-all duration-500 ${
                  tier.popular
                    ? 'border-champagne/30 bg-midnight-200'
                    : 'border-white/[0.06] bg-midnight-200/50 hover:border-champagne/20'
                }`}
              >
                {tier.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="whitespace-nowrap border border-champagne/40 bg-midnight-200 px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-champagne">
                      {tier.badge}
                    </span>
                  </div>
                )}

                <div className="flex flex-col items-center text-center">
                  <h3 className="font-serif text-2xl font-light tracking-wide text-ivory">
                    {tier.name}
                  </h3>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-warm-gray">
                    {tier.subtitle}
                  </p>
                  <p className="mt-1 font-serif text-xs italic text-champagne/40">
                    {tier.meaning}
                  </p>

                  <div className="mt-6">
                    {tier.startingAt && (
                      <span className="text-[10px] uppercase tracking-[0.15em] text-warm-gray">
                        Starts at{' '}
                      </span>
                    )}
                    <span className="font-serif text-3xl font-light text-champagne">
                      {tier.price}
                    </span>
                  </div>

                  <div className="mt-1 text-[10px] uppercase tracking-[0.15em] text-warm-gray">
                    One-time payment
                  </div>
                </div>

                <div className="mt-8 h-px w-full bg-white/[0.06]" />

                <ul className="mt-6 flex flex-col gap-3">
                  {tier.features.map((feature) => (
                    <li
                      key={feature.label}
                      className="flex items-start gap-3 text-xs"
                    >
                      {feature.included ? (
                        <svg
                          className="mt-0.5 h-3 w-3 flex-shrink-0 text-champagne/70"
                          viewBox="0 0 12 12"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        >
                          <path d="M2.5 6.5L5 9L9.5 3.5" />
                        </svg>
                      ) : (
                        <span className="mt-0.5 flex h-3 w-3 flex-shrink-0 items-center justify-center text-white/20">
                          —
                        </span>
                      )}
                      <span
                        className={
                          feature.included ? 'text-ivory-muted/80' : 'text-white/20'
                        }
                      >
                        {feature.label}
                        {feature.detail && (
                          <span className="ml-1 text-warm-gray">
                            ({feature.detail})
                          </span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-8">
                  <button
                    className={`w-full py-3 text-[11px] font-medium uppercase tracking-[0.2em] transition-all duration-500 ${
                      tier.popular
                        ? 'border border-champagne/50 bg-champagne/10 text-champagne hover:bg-champagne/20'
                        : 'border border-white/10 text-ivory-muted/60 hover:border-champagne/30 hover:text-champagne'
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-12 text-center text-xs text-warm-gray">
            All plans are one-time payments. No subscriptions, no hidden fees.
          </p>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="px-6 pb-12 pt-20">
        <div className="mx-auto max-w-5xl">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-champagne/20 to-transparent" />
          <div className="mt-10 flex flex-col items-center gap-4 text-center">
            <span className="font-serif text-lg tracking-wide text-champagne/60">
              Hiraya Manawari
            </span>
            <p className="font-serif text-xs italic text-warm-gray/60">
              Made by Filipinos, for Filipinos.
            </p>
            <p className="text-[11px] tracking-wide text-warm-gray">
              &copy; {new Date().getFullYear()} Hiraya Manawari. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

/* ── Data ── */

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

const showcaseSections = [
  {
    icon: '✦',
    title: 'Hero',
    description:
      'A stunning full-screen welcome with your names, wedding date, monogram, and a countdown timer to your big day.',
    variants: '3 styles',
  },
  {
    icon: '♡',
    title: 'Love Story',
    description:
      'Share your journey as a couple — from how you met to the proposal — with a beautiful timeline of milestone moments and photos.',
  },
  {
    icon: '◇',
    title: 'Entourage',
    description:
      'Honor your principal sponsors, ninongs, ninangs, and bridal party with a dedicated section featuring names, roles, and photos.',
  },
  {
    icon: '◈',
    title: 'Venue',
    description:
      'Display your ceremony and reception venues with photos, addresses, times, and direct links to maps for easy navigation.',
  },
  {
    icon: '▸',
    title: 'Program Timeline',
    description:
      'Walk guests through the day — ceremony, cocktails, dinner, first dance, and more — with icons and timing for each moment.',
    variants: '2 styles',
  },
  {
    icon: '▪',
    title: 'Photo & Video Gallery',
    description:
      'Showcase your engagement photos or prenup video in a bento grid layout with a full-screen lightbox viewer.',
    variants: '2 styles',
  },
  {
    icon: '◻',
    title: 'Dress Code',
    description:
      'Guide your guests with color palettes and attire suggestions — separate guidelines for ladies and gentlemen, by guest group.',
  },
  {
    icon: '✓',
    title: 'RSVP',
    description:
      'Collect responses with accept/decline, number of guests, meal preferences, dietary restrictions, and personal messages.',
    variants: '2 styles',
  },
  {
    icon: '?',
    title: 'FAQ',
    description:
      'Answer common questions about parking, gifts, attire, and more — in an accordion or card-based layout.',
    variants: '2 styles',
  },
  {
    icon: '✧',
    title: 'Personal Message',
    description:
      'A heartfelt message from the couple to their guests, accompanied by a live countdown timer to the wedding day.',
  },
  {
    icon: '❦',
    title: 'Closing',
    description:
      'End with your initials, a closing message, your wedding hashtag, and social media links — elegantly framed.',
    variants: '3 styles',
  },
  {
    icon: '⚿',
    title: 'Invite Code Protection',
    description:
      'Keep your invitation private with an invite code that guests must enter before they can view the full invitation.',
  },
]

const showcaseStats = [
  { value: '19', label: 'Section Variants' },
  { value: '8', label: 'Font Presets' },
  { value: '3', label: 'Color Themes' },
  { value: '40+', label: 'Timeline Icons' },
]

const customizationFeatures = [
  {
    title: 'Drag-and-Drop Editor',
    description:
      'Reorder, add, or remove sections with a visual editor. See changes in real time with the live preview.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="h-5 w-5">
        <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
      </svg>
    ),
  },
  {
    title: 'Font Presets',
    description:
      'Choose from 8 curated font combinations — from timeless serifs to modern minimal — each designed for readability and elegance.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="h-5 w-5">
        <path d="M4 7V4h16v3M9 20h6M12 4v16" />
      </svg>
    ),
    options: ['Timeless', 'Classic', 'Editorial', 'Romantic', 'Art Deco', 'Modern Minimal'],
  },
  {
    title: 'Color Themes',
    description:
      'Start with a pre-built theme or customize background and text colors for every section individually.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="h-5 w-5">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
    options: ['Elegant Classic', 'Floral Garden', 'Modern Minimal'],
  },
  {
    title: 'Templates',
    description:
      'Choose a starting point that sets the mood — from sophisticated gold tones to soft floral palettes — then make it your own.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="h-5 w-5">
        <rect x="3" y="3" width="7" height="9" rx="1" />
        <rect x="14" y="3" width="7" height="5" rx="1" />
        <rect x="14" y="12" width="7" height="9" rx="1" />
        <rect x="3" y="16" width="7" height="5" rx="1" />
      </svg>
    ),
  },
  {
    title: 'Per-Section Colors',
    description:
      'Set unique background and text colors for each section — create contrast between your hero, timeline, gallery, and more.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="h-5 w-5">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
  },
  {
    title: 'Content Editor',
    description:
      'Customize every heading, message, label, and placeholder text. Write your own personal message, FAQ answers, and more.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="h-5 w-5">
        <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
      </svg>
    ),
  },
]

type Feature = {
  label: string
  included: boolean
  detail?: string
}

type PricingTier = {
  name: string
  subtitle: string
  meaning: string
  price: string
  startingAt?: boolean
  popular?: boolean
  badge?: string
  features: Feature[]
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Simula',
    subtitle: 'Essential',
    meaning: '"The Beginning"',
    price: '₱1,499',
    features: [
      { label: 'Single-page invitation', included: true },
      { label: 'Pre-built template', included: true },
      { label: 'RSVP form', included: true },
      { label: 'Up to 100 guests', included: true },
      { label: 'Basic color customization', included: true },
      { label: 'Multi-page layout', included: false },
      { label: 'Custom domain', included: false },
      { label: 'Photo gallery', included: false },
    ],
  },
  {
    name: 'Diwa',
    subtitle: 'Signature',
    meaning: '"The Spirit of Love"',
    price: '₱2,999',
    popular: true,
    badge: 'Most Popular',
    features: [
      { label: 'Multi-page invitation', included: true },
      { label: 'Premium templates', included: true },
      { label: 'RSVP with meal choices', included: true },
      { label: 'Up to 300 guests', included: true },
      { label: 'Full color & font customization', included: true },
      { label: 'Photo gallery', included: true },
      { label: 'Background music', included: true },
      { label: 'Custom domain', included: false },
    ],
  },
  {
    name: 'Mayumi',
    subtitle: 'Grand',
    meaning: '"Grace and Beauty"',
    price: '₱3,999',
    features: [
      { label: 'Multi-page invitation', included: true },
      { label: 'All premium templates', included: true },
      { label: 'Advanced RSVP management', included: true },
      { label: 'Up to 500 guests', included: true },
      { label: 'Full customization suite', included: true },
      { label: 'Photo & video gallery', included: true },
      { label: 'Background music', included: true },
      { label: 'Custom domain', included: true },
    ],
  },
  {
    name: 'Hiraya',
    subtitle: 'Bespoke',
    meaning: '"Dreams Fulfilled"',
    price: '₱9,999',
    startingAt: true,
    badge: 'Fully Custom',
    features: [
      { label: 'Fully custom design', included: true },
      { label: 'Dedicated designer', included: true },
      { label: 'Unlimited guests', included: true },
      { label: 'All Grand features', included: true },
      { label: 'Custom animations', included: true },
      { label: 'Priority support', included: true },
      { label: 'Multiple event pages', included: true },
      { label: 'White-glove onboarding', included: true },
    ],
  },
]
