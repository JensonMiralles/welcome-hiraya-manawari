import SectionWrapper from '../common/SectionWrapper'
import Button from '../common/Button'
import Monogram from '../common/Monogram'

function Flourish({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 10 Q30 0 60 10 Q90 20 120 10"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        opacity="0.6"
      />
      <circle cx="60" cy="10" r="3" fill="currentColor" opacity="0.4" />
      <circle cx="30" cy="5" r="1.5" fill="currentColor" opacity="0.3" />
      <circle cx="90" cy="15" r="1.5" fill="currentColor" opacity="0.3" />
    </svg>
  )
}

export default function Closing() {
  return (
    <SectionWrapper className="relative overflow-hidden">
      {/* Warm gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-ivory via-gold-50/50 to-ivory" />

      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30z' fill='none' stroke='%23D4AF7A' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container-narrow relative z-10">
        <div className="text-center">
          {/* Top flourish */}
          <Flourish className="w-32 md:w-40 mx-auto text-gold mb-8" />

          {/* Monogram */}
          <div className="flex justify-center mb-8">
            <Monogram size="md" color="gold" className="opacity-70" />
          </div>

          {/* Heading */}
          <h2 className="font-serif text-heading-1 md:text-display-3 text-charcoal mb-4">
            Begin Your Love Story
          </h2>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-px bg-gold/40" />
            <div className="w-2 h-2 rotate-45 border border-gold/40" />
            <div className="w-12 h-px bg-gold/40" />
          </div>

          {/* Emotional copy */}
          <p className="text-body-lg text-charcoal-400 max-w-xl mx-auto mb-10 leading-relaxed">
            Every love story is unique and deserves to be told with beauty
            and grace. Let us help you create an invitation as enchanting
            as your journey together.
          </p>

          {/* Filipino blessing card */}
          <div className="inline-block bg-charcoal rounded-xl px-10 py-8 mb-10">
            <p className="font-script text-3xl md:text-4xl text-gold">
              Hiraya Manawari
            </p>
            <p className="text-ivory-400 text-sm mt-2 italic">
              May your dreams come true
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Button variant="primary" size="lg">
              Create Your Invitation
            </Button>
          </div>

          {/* Bottom flourish */}
          <Flourish className="w-32 md:w-40 mx-auto text-gold rotate-180" />

          {/* Footer */}
          <p className="mt-16 text-body-sm text-charcoal-300">
            Lovingly crafted in the Philippines
          </p>
        </div>
      </div>
    </SectionWrapper>
  )
}
