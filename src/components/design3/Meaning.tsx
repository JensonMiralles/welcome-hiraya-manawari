import SectionWrapper from '../common/SectionWrapper'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

function QuoteCard({
  word,
  meaning,
  delay,
}: {
  word: string
  meaning: string
  delay: number
}) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 })

  return (
    <div
      ref={ref}
      className={`relative bg-white rounded-2xl p-8 md:p-10 shadow-soft transition-all duration-800 ease-elegant ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Decorative corner */}
      <div className="absolute top-4 left-4 w-8 h-8">
        <div className="absolute top-0 left-0 w-full h-px bg-gold/30" />
        <div className="absolute top-0 left-0 h-full w-px bg-gold/30" />
      </div>
      <div className="absolute bottom-4 right-4 w-8 h-8">
        <div className="absolute bottom-0 right-0 w-full h-px bg-gold/30" />
        <div className="absolute bottom-0 right-0 h-full w-px bg-gold/30" />
      </div>

      <h3 className="font-script text-4xl md:text-5xl text-gold mb-4">{word}</h3>
      <p className="text-body-lg text-charcoal-400 leading-relaxed italic">
        "{meaning}"
      </p>
    </div>
  )
}

export default function Meaning() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 })

  return (
    <SectionWrapper animate={false}>
      <div className="container-narrow">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.25em] text-gold-600 mb-4">
            The Meaning Behind the Name
          </p>
          <h2 className="font-serif text-heading-1 md:text-display-3 text-charcoal mb-4">
            A Beautiful Filipino Expression
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-px bg-gold/40" />
            <div className="w-2 h-2 rotate-45 border border-gold/40" />
            <div className="w-12 h-px bg-gold/40" />
          </div>
        </div>

        {/* Quote cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <QuoteCard
            word="Hiraya"
            meaning="The fruit of one's hopes, dreams, and aspirations—the deepest wishes of the heart."
            delay={0}
          />
          <QuoteCard
            word="Manawari"
            meaning="May it come to pass—a blessing spoken with hope, faith, and loving intention."
            delay={150}
          />
        </div>

        {/* Combined meaning */}
        <div
          ref={ref}
          className={`relative bg-charcoal rounded-2xl p-10 md:p-14 text-center transition-all duration-800 ease-elegant ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          {/* Ornamental frame */}
          <div className="absolute inset-6 border border-gold/20 rounded-lg pointer-events-none" />

          <p className="font-script text-3xl md:text-4xl text-gold mb-4">
            Hiraya Manawari
          </p>
          <p className="text-heading-3 md:text-heading-2 text-ivory font-serif mb-6">
            "May your dreams come true"
          </p>
          <p className="text-body-lg text-ivory-400 max-w-xl mx-auto leading-relaxed">
            The perfect blessing for two hearts beginning their journey
            of love and togetherness.
          </p>
        </div>
      </div>
    </SectionWrapper>
  )
}
