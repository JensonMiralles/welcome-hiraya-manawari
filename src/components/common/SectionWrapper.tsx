import { type ReactNode } from 'react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

interface SectionWrapperProps {
  children: ReactNode
  className?: string
  id?: string
  animate?: boolean
  background?: 'ivory' | 'charcoal' | 'gradient'
}

export default function SectionWrapper({
  children,
  className = '',
  id,
  animate = true,
  background = 'ivory',
}: SectionWrapperProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 })

  const backgrounds = {
    ivory: 'bg-ivory',
    charcoal: 'bg-charcoal text-ivory',
    gradient: 'bg-gradient-ivory',
  }

  return (
    <section
      id={id}
      ref={animate ? ref : undefined}
      className={`section-padding ${backgrounds[background]} ${className} ${
        animate
          ? `transition-all duration-800 ease-elegant ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`
          : ''
      }`}
    >
      {children}
    </section>
  )
}
