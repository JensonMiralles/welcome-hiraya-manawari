import SectionWrapper from '../common/SectionWrapper'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

export default function Preview() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 })

  return (
    <SectionWrapper background="charcoal">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <div className="text-center lg:text-left">
            <p className="text-sm uppercase tracking-[0.25em] text-gold-300 mb-4">
              Preview
            </p>
            <h2 className="font-serif text-heading-1 md:text-display-3 text-ivory mb-4">
              A Glimpse of Enchantment
            </h2>
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
              <div className="w-8 h-px bg-gold/40" />
              <div className="w-1.5 h-1.5 rotate-45 border border-gold/40" />
              <div className="w-8 h-px bg-gold/40" />
            </div>
            <p className="text-body-lg text-ivory-400 leading-relaxed mb-10">
              Watch your love story transform into a breathtaking digital
              experience. Each template captures the essence of Filipino elegance
              with romantic flourishes and heartfelt details.
            </p>

            <ul className="space-y-5 text-left">
              {[
                'Ornate frames and elegant typography',
                'Personalized monograms and flourishes',
                'Animated reveals and transitions',
                'Guest RSVP and wishes collection',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-4 text-ivory-300">
                  <div className="w-6 h-6 rounded-full border border-gold/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-gold/60" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Framed gallery preview */}
          <div
            ref={ref}
            className={`relative transition-all duration-1000 ease-elegant ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            {/* Ornate frame */}
            <div className="relative bg-charcoal-700 rounded-lg p-6 md:p-8">
              {/* Inner decorative border */}
              <div className="absolute inset-4 border border-gold/20 rounded pointer-events-none" />
              <div className="absolute inset-6 border border-gold/10 rounded pointer-events-none" />

              {/* Corner ornaments */}
              <div className="absolute top-2 left-2 w-12 h-12">
                <div className="absolute top-2 left-2 w-6 h-px bg-gold/40" />
                <div className="absolute top-2 left-2 h-6 w-px bg-gold/40" />
              </div>
              <div className="absolute top-2 right-2 w-12 h-12">
                <div className="absolute top-2 right-2 w-6 h-px bg-gold/40" />
                <div className="absolute top-2 right-2 h-6 w-px bg-gold/40" />
              </div>
              <div className="absolute bottom-2 left-2 w-12 h-12">
                <div className="absolute bottom-2 left-2 w-6 h-px bg-gold/40" />
                <div className="absolute bottom-2 left-2 h-6 w-px bg-gold/40" />
              </div>
              <div className="absolute bottom-2 right-2 w-12 h-12">
                <div className="absolute bottom-2 right-2 w-6 h-px bg-gold/40" />
                <div className="absolute bottom-2 right-2 h-6 w-px bg-gold/40" />
              </div>

              {/* Invitation preview */}
              <div className="bg-ivory rounded overflow-hidden">
                <div className="aspect-[3/4] flex flex-col items-center justify-center p-8 text-center">
                  {/* Decorative top */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-px bg-gold/40" />
                    <div className="w-1.5 h-1.5 rotate-45 border border-gold/40" />
                    <div className="w-8 h-px bg-gold/40" />
                  </div>

                  <p className="text-xs uppercase tracking-widest text-gold-600 mb-3">
                    Together with their families
                  </p>

                  <div className="w-16 h-16 rounded-full border border-gold/30 flex items-center justify-center mb-4">
                    <span className="font-script text-xl text-gold">J&M</span>
                  </div>

                  <h3 className="font-serif text-2xl text-charcoal mb-1">
                    Juan Miguel
                  </h3>
                  <p className="font-script text-xl text-gold mb-1">&</p>
                  <h3 className="font-serif text-2xl text-charcoal mb-6">
                    Maria Clara
                  </h3>

                  <p className="text-sm text-charcoal-400 mb-6">
                    Request the pleasure of your company
                    <br />at their wedding celebration
                  </p>

                  <div className="flex items-center gap-4 text-sm text-charcoal-500">
                    <span>December 21</span>
                    <div className="w-1 h-1 bg-gold rounded-full" />
                    <span>2024</span>
                  </div>

                  {/* Decorative bottom */}
                  <div className="flex items-center gap-3 mt-6">
                    <div className="w-8 h-px bg-gold/40" />
                    <div className="w-1.5 h-1.5 rotate-45 border border-gold/40" />
                    <div className="w-8 h-px bg-gold/40" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating accent */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gold/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
