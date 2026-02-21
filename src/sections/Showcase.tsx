export function Showcase() {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center">
          <div className="h-px w-12 bg-champagne/40" />
          <h2 className="mt-8 font-serif text-3xl font-light tracking-wide text-ivory sm:text-4xl">
            Everything Your Invitation Needs
          </h2>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-warm-gray sm:text-base">
            From the hero that welcomes your guests to the closing that leaves them inspired — every section is crafted for Filipino weddings.
          </p>
        </div>

        {/* Invitation Sections Grid */}
        <div className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {showcaseSections.map((item) => (
            <div
              key={item.title}
              className="group border border-white/[0.04] bg-midnight-200/40 p-7 transition-all duration-500 hover:border-champagne/20 hover:bg-midnight-200/80"
            >
              <div className="flex items-center gap-3">
                <span className="text-lg text-champagne/50">{item.icon}</span>
                <h3 className="font-serif text-base font-medium tracking-wide text-ivory">
                  {item.title}
                </h3>
                {item.variants && (
                  <span className="ml-auto text-[10px] uppercase tracking-[0.15em] text-champagne/40">
                    {item.variants}
                  </span>
                )}
              </div>
              <p className="mt-3 text-xs leading-relaxed text-warm-gray">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className="mt-20 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {showcaseStats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center">
              <span className="font-serif text-3xl font-light text-champagne">
                {stat.value}
              </span>
              <span className="mt-2 text-[10px] uppercase tracking-[0.2em] text-warm-gray">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const showcaseSections = [
  {
    icon: '\u2726',
    title: 'Hero',
    description:
      'A stunning full-screen welcome with your names, wedding date, monogram, and a countdown timer to your big day.',
    variants: '3 styles',
  },
  {
    icon: '\u2661',
    title: 'Love Story',
    description:
      'Share your journey as a couple — from how you met to the proposal — with a beautiful timeline of milestone moments and photos.',
  },
  {
    icon: '\u25C7',
    title: 'Entourage',
    description:
      'Honor your principal sponsors, ninongs, ninangs, and bridal party with a dedicated section featuring names, roles, and photos.',
  },
  {
    icon: '\u25C8',
    title: 'Venue',
    description:
      'Display your ceremony and reception venues with photos, addresses, times, and direct links to maps for easy navigation.',
  },
  {
    icon: '\u25B8',
    title: 'Program Timeline',
    description:
      'Walk guests through the day — ceremony, cocktails, dinner, first dance, and more — with icons and timing for each moment.',
    variants: '2 styles',
  },
  {
    icon: '\u25AA',
    title: 'Photo & Video Gallery',
    description:
      'Showcase your engagement photos or prenup video in a bento grid layout with a full-screen lightbox viewer.',
    variants: '2 styles',
  },
  {
    icon: '\u25FB',
    title: 'Dress Code',
    description:
      'Guide your guests with color palettes and attire suggestions — separate guidelines for ladies and gentlemen, by guest group.',
  },
  {
    icon: '\u2713',
    title: 'RSVP',
    description:
      'Collect responses with accept/decline, number of guests, meal preferences, dietary restrictions, and personal messages.',
    variants: '2 styles',
  },
  {
    icon: '?',
    title: 'FAQ',
    description:
      'Answer common questions about parking, gifts, attire, and more — in an accordion or card-based layout.',
    variants: '2 styles',
  },
  {
    icon: '\u2727',
    title: 'Personal Message',
    description:
      'A heartfelt message from the couple to their guests, accompanied by a live countdown timer to the wedding day.',
  },
  {
    icon: '\u2766',
    title: 'Closing',
    description:
      'End with your initials, a closing message, your wedding hashtag, and social media links — elegantly framed.',
    variants: '3 styles',
  },
  {
    icon: '\u26BF',
    title: 'Invite Code Protection',
    description:
      'Keep your invitation private with an invite code that guests must enter before they can view the full invitation.',
  },
]

const showcaseStats = [
  { value: '19', label: 'Section Variants' },
  { value: '8', label: 'Font Presets' },
  { value: '3', label: 'Color Themes' },
  { value: '40+', label: 'Timeline Icons' },
]
