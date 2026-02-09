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

function CornerOrnament({ position }: { position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' }) {
  const rotations = {
    'top-left': 'rotate-0',
    'top-right': 'rotate-90',
    'bottom-right': 'rotate-180',
    'bottom-left': '-rotate-90',
  }

  const positions = {
    'top-left': 'top-8 left-8',
    'top-right': 'top-8 right-8',
    'bottom-left': 'bottom-8 left-8',
    'bottom-right': 'bottom-8 right-8',
  }

  return (
    <svg
      className={`absolute ${positions[position]} w-16 h-16 text-gold/30 ${rotations[position]}`}
      viewBox="0 0 50 50"
      fill="none"
    >
      <path
        d="M0 0 L0 20 Q0 0 20 0"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
      />
      <path
        d="M5 0 L5 15 Q5 5 15 5 L15 0"
        stroke="currentColor"
        strokeWidth="0.5"
        fill="none"
        opacity="0.5"
      />
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Warm gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-ivory via-gold-50 to-ivory" />

      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30z' fill='none' stroke='%23D4AF7A' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Corner ornaments */}
      <CornerOrnament position="top-left" />
      <CornerOrnament position="top-right" />
      <CornerOrnament position="bottom-left" />
      <CornerOrnament position="bottom-right" />

      {/* Content frame */}
      <div className="relative z-10 max-w-3xl mx-auto ornamental-border p-8 md:p-16">
        <div className="flex flex-col items-center text-center">
          {/* Top flourish */}
          <Flourish className="w-32 md:w-40 text-gold mb-8 animate-initial animate-fade-in" />

          {/* Monogram */}
          <div className="animate-initial animate-scale-in animate-delay-100 mb-6">
            <Monogram size="lg" color="gold" />
          </div>

          {/* Tagline in script */}
          <p className="animate-initial animate-fade-in-up animate-delay-200 font-script text-2xl md:text-3xl text-gold mb-4">
            Filipino Wedding E-Invitations
          </p>

          {/* Main Heading */}
          <h1 className="animate-initial animate-fade-in-up animate-delay-300 font-serif text-display-3 md:text-display-2 lg:text-display-1 text-charcoal mb-6">
            Hiraya Manawari
          </h1>

          {/* Decorative divider */}
          <div className="animate-initial animate-fade-in animate-delay-400 flex items-center gap-4 mb-8">
            <div className="w-12 md:w-20 h-px bg-gold/40" />
            <div className="w-2 h-2 rotate-45 border border-gold/60" />
            <div className="w-12 md:w-20 h-px bg-gold/40" />
          </div>

          {/* Subheading */}
          <p className="animate-initial animate-fade-in-up animate-delay-500 text-body-lg text-charcoal-400 max-w-xl mb-10 leading-relaxed">
            Create enchanting digital invitations that weave together the warmth
            of Filipino tradition with timeless romantic elegance.
          </p>

          {/* CTA Buttons */}
          <div className="animate-initial animate-fade-in-up animate-delay-600 flex flex-col sm:flex-row gap-4">
            <Button variant="primary" size="lg">
              Create Your Invitation
            </Button>
            <Button variant="outline" size="lg">
              Explore Templates
            </Button>
          </div>

          {/* Bottom flourish */}
          <Flourish className="w-32 md:w-40 text-gold mt-12 rotate-180 animate-initial animate-fade-in animate-delay-700" />
        </div>
      </div>

      {/* Scroll indicator with ornament */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-float">
        <div className="w-px h-8 bg-gradient-to-b from-transparent to-gold/40" />
        <div className="w-2 h-2 rotate-45 border border-gold/40 mt-2" />
      </div>
    </section>
  )
}
