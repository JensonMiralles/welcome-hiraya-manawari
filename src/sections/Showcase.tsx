export function Showcase() {
  return (
    <section id="showcase" className="relative overflow-hidden px-6 py-32">
      {/* Warm background band */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-midnight via-midnight-300 to-midnight" />

      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_0%_50%,rgba(180,130,130,0.02)_0%,transparent_55%),radial-gradient(ellipse_at_100%_33%,rgba(212,175,122,0.02)_0%,transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center">
          <div className="h-px w-16 bg-gradient-to-r from-champagne/20 via-champagne/50 to-champagne/20" />
          <h2 className="mt-8 font-serif text-3xl font-light tracking-wide text-ivory sm:text-4xl">
            Everything Your Invitation Needs
          </h2>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-warm-gray sm:text-base">
            From the hero that welcomes your guests to the closing that leaves
            them inspired — every section is crafted for Filipino weddings.
          </p>
        </div>

        {/* Invitation Sections Grid */}
        <div className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {showcaseSections.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden border border-white/[0.06] bg-gradient-to-br from-midnight-100/60 to-midnight-200/40 p-7 transition-all duration-500 hover:border-champagne/25 hover:shadow-[0_4px_30px_rgba(212,175,122,0.05)]"
            >
              {/* Left accent bar */}
              <div className="absolute bottom-0 left-0 top-0 w-px bg-gradient-to-b from-champagne/20 via-champagne/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded bg-champagne/[0.08] text-sm text-champagne/70 transition-colors duration-500 group-hover:bg-champagne/[0.14] group-hover:text-champagne">
                  {item.icon}
                </span>
                <h3 className="font-serif text-base font-medium tracking-wide text-ivory">
                  {item.title}
                </h3>
                {item.variants && (
                  <span className="ml-auto rounded-full border border-champagne/20 bg-champagne/[0.06] px-2.5 py-0.5 text-[10px] uppercase tracking-[0.15em] text-champagne/60">
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
            <div
              key={stat.label}
              className="flex flex-col items-center border border-white/[0.04] bg-gradient-to-b from-midnight-100/50 to-transparent py-8 text-center"
            >
              <span className="bg-gradient-to-b from-champagne to-champagne-dark bg-clip-text font-serif text-4xl font-light text-transparent">
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
  );
}

const showcaseSections = [
  {
    icon: "\u2726",
    title: "Hero",
    description:
      "A stunning full-screen welcome with your names, wedding date, monogram, and a countdown timer to your big day.",
    variants: "4 styles",
  },
  {
    icon: "\u2661",
    title: "Love Story",
    description:
      "Share your journey as a couple — from how you met to the proposal — with a beautiful timeline of milestone moments and photos.",
  },
  {
    icon: "\u25C7",
    title: "Entourage",
    description:
      "Honor your principal sponsors, ninongs, ninangs, and bridal party with a dedicated section featuring names, roles, and photos.",
  },
  {
    icon: "\u25C8",
    title: "Venue",
    description:
      "Display your ceremony and reception venues with photos, addresses, times, and direct links to maps for easy navigation.",
  },
  {
    icon: "\u25B8",
    title: "Program Timeline",
    description:
      "Walk guests through the day — ceremony, cocktails, dinner, first dance, and more — with icons and timing for each moment.",
    variants: "2 styles",
  },
  {
    icon: "\u25AA",
    title: "Photo & Video Gallery",
    description:
      "Showcase your engagement photos or prenup video in a bento grid layout with a full-screen lightbox viewer.",
    variants: "4 styles",
  },
  {
    icon: "\u25FB",
    title: "Dress Code",
    description:
      "Guide your guests with color palettes and attire suggestions — separate guidelines for ladies and gentlemen, by guest group.",
  },
  {
    icon: "\u2713",
    title: "RSVP",
    description:
      "Collect responses with accept/decline, number of guests, meal preferences, dietary restrictions, and personal messages.",
    variants: "2 styles",
  },
  {
    icon: "?",
    title: "FAQ",
    description:
      "Answer common questions about parking, gifts, attire, and more — in an accordion or card-based layout.",
    variants: "2 styles",
  },
  {
    icon: "\u2727",
    title: "Personal Message",
    description:
      "A heartfelt message from the couple to their guests, accompanied by a live countdown timer to the wedding day.",
  },
  {
    icon: "\u2766",
    title: "Closing",
    description:
      "End with your initials, a closing message, your wedding hashtag, and social media links — elegantly framed.",
    variants: "3 styles",
  },
  {
    icon: "\u2740",
    title: "Gift Registry",
    description:
      "Let guests know where you're registered. Link to gift registries or provide bank details for monetary gifts.",
  },
  {
    icon: "\u26BF",
    title: "Invite Code Protection",
    description:
      "Keep your invitation private with an invite code that guests must enter before they can view the full invitation.",
  },
];

const showcaseStats = [
  { value: "23", label: "Section Variants" },
  { value: "8", label: "Font Presets" },
  { value: "5", label: "Color Themes" },
  { value: "40+", label: "Timeline Icons" },
];
