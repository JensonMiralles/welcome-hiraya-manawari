interface MonogramProps {
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  color?: 'gold' | 'charcoal' | 'ivory'
}

export default function Monogram({
  className = '',
  size = 'md',
  color = 'gold',
}: MonogramProps) {
  const sizes = {
    sm: 'w-12 h-12',
    md: 'w-20 h-20',
    lg: 'w-32 h-32',
    xl: 'w-48 h-48',
  }

  const colors = {
    gold: '#D4AF7A',
    charcoal: '#4A4A4A',
    ivory: '#F6F2ED',
  }

  return (
    <svg
      className={`${sizes[size]} ${className}`}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer decorative circle */}
      <circle
        cx="50"
        cy="50"
        r="48"
        stroke={colors[color]}
        strokeWidth="0.5"
        opacity="0.6"
      />
      <circle
        cx="50"
        cy="50"
        r="44"
        stroke={colors[color]}
        strokeWidth="0.5"
        opacity="0.4"
      />

      {/* H letter - stylized */}
      <path
        d="M28 30 L28 70 M28 50 L42 50 M42 30 L42 70"
        stroke={colors[color]}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />

      {/* M letter - stylized, overlapping */}
      <path
        d="M48 70 L48 35 L58 55 L68 35 L68 70"
        stroke={colors[color]}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Decorative flourish underneath */}
      <path
        d="M30 78 Q50 85 70 78"
        stroke={colors[color]}
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />

      {/* Small decorative dot */}
      <circle cx="50" cy="22" r="2" fill={colors[color]} opacity="0.6" />
    </svg>
  )
}
