export function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden px-6 py-32">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-midnight via-midnight-300 to-midnight" />

      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(212,175,122,0.02)_0%,transparent_60%),radial-gradient(ellipse_at_50%_100%,rgba(180,130,130,0.015)_0%,transparent_55%)]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center">
          <div className="h-px w-16 bg-gradient-to-r from-champagne/20 via-champagne/50 to-champagne/20" />
          <h2 className="mt-8 font-serif text-3xl font-light tracking-wide text-ivory sm:text-4xl">
            Choose What's Right for You
          </h2>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-warm-gray">
            From simple elegance to fully custom design — there's a plan for
            every kind of celebration.
          </p>

          {/* Free to start callout */}
          <div className="mt-8 inline-flex items-center gap-3 border border-champagne/20 bg-champagne/[0.04] px-6 py-3">
            <div className="flex h-6 w-6 items-center justify-center rounded-full border border-champagne/30 bg-champagne/10">
              <svg
                className="h-3 w-3 text-champagne"
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M2.5 6.5L5 9L9.5 3.5" />
              </svg>
            </div>
            <p className="text-xs tracking-wide text-ivory-muted/80">
              <span className="font-semibold text-champagne">
                Start for free
              </span>
              <span className="mx-2 text-white/20">·</span>
              Only pay when you're ready to publish
            </p>
          </div>
        </div>

        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`group relative flex flex-col border p-8 transition-all duration-500 ${
                tier.popular
                  ? "border-champagne/30 bg-gradient-to-b from-champagne/[0.08] via-midnight-200 to-midnight-200 shadow-[0_0_50px_rgba(212,175,122,0.06)]"
                  : "border-white/[0.06] bg-gradient-to-b from-midnight-100/60 to-midnight-200/50 hover:border-champagne/20 hover:shadow-[0_4px_30px_rgba(212,175,122,0.04)]"
              }`}
            >
              {/* Top gradient accent for popular */}
              {tier.popular && (
                <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-champagne/60 to-transparent" />
              )}

              {tier.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="whitespace-nowrap border border-champagne/40 bg-gradient-to-r from-midnight-200 via-midnight-100 to-midnight-200 px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-champagne">
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
                      Starts at{" "}
                    </span>
                  )}
                  {tier.originalPrice && (
                    <div className="mb-1">
                      <span className="text-[10px] uppercase tracking-[0.15em] text-champagne/50">
                        Introductory Price
                      </span>
                    </div>
                  )}
                  {tier.originalPrice && (
                    <span className="mr-2 font-serif text-lg text-warm-gray/50 line-through">
                      {tier.originalPrice}
                    </span>
                  )}
                  <span className="bg-gradient-to-b from-champagne-light to-champagne-dark bg-clip-text font-serif text-3xl font-light text-transparent">
                    {tier.price}
                  </span>
                </div>

                <div className="mt-1 text-[10px] uppercase tracking-[0.15em] text-warm-gray">
                  One-time payment
                </div>
              </div>

              <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

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
                        feature.included
                          ? "text-ivory-muted/80"
                          : "text-white/20"
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
                <a
                  href="https://app.hirayaweddings.com"
                  className={`w-full block text-center py-3 text-[11px] font-medium uppercase tracking-[0.2em] transition-all duration-500 ${
                    tier.popular
                      ? "border border-champagne/50 bg-champagne/[0.12] text-champagne hover:bg-champagne/20 hover:shadow-[0_0_20px_rgba(212,175,122,0.1)]"
                      : "border border-white/10 text-ivory-muted/60 hover:border-champagne/30 hover:bg-champagne/[0.05] hover:text-champagne"
                  }`}
                >
                  Get Started
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-xs text-warm-gray">
          All plans are one-time payments. No subscriptions, no hidden fees.
          <br />
          <span className="text-ivory-muted/60">
            Design your invitation for free — you only pay when you publish.
          </span>
        </p>
      </div>
    </section>
  );
}

type PricingFeature = {
  label: string;
  included: boolean;
  detail?: string;
};

type PricingTier = {
  name: string;
  subtitle: string;
  meaning: string;
  price: string;
  originalPrice?: string;
  startingAt?: boolean;
  popular?: boolean;
  badge?: string;
  features: PricingFeature[];
};

const pricingTiers: PricingTier[] = [
  {
    name: "Simula",
    subtitle: "Essential",
    meaning: '"The Beginning"',
    price: "\u20B1999",
    originalPrice: "\u20B11,499",
    features: [
      { label: "All sections & editing", included: true },
      { label: "Full customization", included: true },
      { label: "Advanced RSVP management", included: true },
      { label: "Up to 100 guests", included: true },
      { label: "RSVP export", included: true, detail: "CSV" },
      { label: "Gallery photos", included: true, detail: "6" },
      { label: "Invite Code Protection", included: true },
      { label: "Subdomain", included: true },
      { label: "1 year duration", included: true },
    ],
  },
  {
    name: "Diwa",
    subtitle: "Signature",
    meaning: '"The Spirit of Love"',
    price: "\u20B11,999",
    originalPrice: "\u20B12,999",
    popular: true,
    badge: "Most Popular",
    features: [
      { label: "All sections & editing", included: true },
      { label: "Full customization", included: true },
      { label: "Advanced RSVP management", included: true },
      { label: "Up to 150 guests", included: true },
      { label: "RSVP export", included: true, detail: "CSV" },
      { label: "Gallery photos", included: true, detail: "12" },
      { label: "Invite Code Protection", included: true },
      { label: "Subdomain", included: true },
      { label: "1 year duration", included: true },
    ],
  },
  {
    name: "Mayumi",
    subtitle: "Grand",
    meaning: '"Grace and Beauty"',
    price: "\u20B12,999",
    originalPrice: "\u20B13,999",
    features: [
      { label: "All sections & editing", included: true },
      { label: "Full customization", included: true },
      { label: "Advanced RSVP management", included: true },
      { label: "Unlimited guests", included: true },
      { label: "RSVP export", included: true, detail: "CSV" },
      { label: "Gallery photos", included: true, detail: "24" },
      { label: "Invite Code Protection", included: true },
      { label: "Subdomain", included: true },
      { label: "2 year duration", included: true },
    ],
  },
  {
    name: "Hiraya",
    subtitle: "Bespoke",
    meaning: '"Dreams Fulfilled"',
    price: "\u20B19,999",
    startingAt: true,
    badge: "Fully Custom",
    features: [
      { label: "Unlimited guests", included: true },
      { label: "Unlimited photos", included: true },
      { label: "Custom domain", included: true },
      { label: "Invite Code Protection", included: true },
      { label: "2 year duration", included: true },
      { label: "Bespoke animations & effects", included: true },
      { label: "Dedicated design consultation", included: true },
      { label: "All Grand features", included: true },
      { label: "Priority support", included: true },
    ],
  },
];
