export function Pricing() {
  return (
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
  )
}

type PricingFeature = {
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
  features: PricingFeature[]
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Simula',
    subtitle: 'Essential',
    meaning: '"The Beginning"',
    price: '\u20B11,499',
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
    price: '\u20B12,999',
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
    price: '\u20B13,999',
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
    price: '\u20B19,999',
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
