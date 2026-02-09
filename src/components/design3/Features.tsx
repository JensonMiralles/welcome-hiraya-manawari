import SectionWrapper from '../common/SectionWrapper'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const features = [
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    title: 'Romantic Templates',
    description: 'Exquisite designs adorned with elegant flourishes and timeless Filipino motifs.',
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    title: 'Personal Touch',
    description: 'Infuse your love story into every detail—colors, fonts, and heartfelt messages.',
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    title: 'Graceful Display',
    description: 'Beautifully presented on every device, enchanting all your cherished guests.',
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
      </svg>
    ),
    title: 'Effortless Sharing',
    description: 'Send your invitation with a single touch—link, QR code, or social message.',
  },
]

function FeatureCard({
  feature,
  index,
}: {
  feature: typeof features[0]
  index: number
}) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 })

  return (
    <div
      ref={ref}
      className={`group relative bg-white rounded-2xl p-8 shadow-soft hover:shadow-soft-lg transition-all duration-600 ease-elegant ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Decorative top border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-gold rounded-b-full" />

      {/* Icon with ornamental circle */}
      <div className="relative w-20 h-20 mx-auto mb-6">
        <div className="absolute inset-0 rounded-full border border-gold/30" />
        <div className="absolute inset-2 rounded-full border border-gold/20" />
        <div className="absolute inset-0 flex items-center justify-center text-gold group-hover:scale-110 transition-transform duration-400">
          {feature.icon}
        </div>
      </div>

      <h3 className="font-serif text-heading-3 text-charcoal text-center mb-3">
        {feature.title}
      </h3>

      <p className="text-body text-charcoal-400 text-center leading-relaxed">
        {feature.description}
      </p>

      {/* Decorative corner flourishes */}
      <div className="absolute bottom-4 left-4 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
        <div className="absolute bottom-0 left-0 w-full h-px bg-gold/30" />
        <div className="absolute bottom-0 left-0 h-full w-px bg-gold/30" />
      </div>
      <div className="absolute bottom-4 right-4 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
        <div className="absolute bottom-0 right-0 w-full h-px bg-gold/30" />
        <div className="absolute bottom-0 right-0 h-full w-px bg-gold/30" />
      </div>
    </div>
  )
}

export default function Features() {
  return (
    <SectionWrapper background="gradient" animate={false}>
      <div className="container-wide">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.25em] text-gold-600 mb-4">
            Our Offerings
          </p>
          <h2 className="font-serif text-heading-1 md:text-display-3 text-charcoal mb-4">
            Crafted with Love & Devotion
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-px bg-gold/40" />
            <div className="w-2 h-2 rotate-45 border border-gold/40" />
            <div className="w-12 h-px bg-gold/40" />
          </div>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
