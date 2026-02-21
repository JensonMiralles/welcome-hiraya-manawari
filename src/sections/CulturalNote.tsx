export function CulturalNote() {
  return (
    <section className="relative px-6 py-20">
      {/* Warm centered glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-champagne/[0.03] blur-[100px]" />

      <div className="relative mx-auto max-w-3xl text-center">
        <div className="border border-champagne/[0.12] bg-gradient-to-b from-midnight-100/80 to-midnight-200/60 px-8 py-14 shadow-[0_0_60px_rgba(212,175,122,0.04)] sm:px-14">
          {/* Top ornamental accent */}
          <div className="mx-auto mb-8 h-px w-20 bg-gradient-to-r from-transparent via-champagne/40 to-transparent" />

          <p className="font-serif text-xl font-light italic leading-relaxed tracking-wide text-champagne sm:text-2xl">
            "Hiraya Manawari"
          </p>
          <div className="mx-auto mt-6 flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-champagne/30" />
            <div className="h-1.5 w-1.5 rotate-45 border border-champagne/40" />
            <div className="h-px w-8 bg-champagne/30" />
          </div>
          <p className="mt-6 text-sm leading-relaxed text-ivory-muted/60">
            An ancient Filipino word meaning "the dreams and wishes of the heart
            shall be fulfilled." This is the spirit of every wedding — the fulfillment
            of a dream prayed for and waited upon.
          </p>

          {/* Bottom ornamental accent */}
          <div className="mx-auto mt-8 h-px w-20 bg-gradient-to-r from-transparent via-champagne/40 to-transparent" />
        </div>
      </div>
    </section>
  )
}
