export function Customization() {
  return (
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
  )
}

const customizationFeatures: {
  title: string
  description: string
  icon: React.ReactNode
  options?: string[]
}[] = [
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
