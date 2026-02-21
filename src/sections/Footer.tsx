export function Footer() {
  return (
    <footer className="px-6 pb-12 pt-20">
      <div className="mx-auto max-w-5xl">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-champagne/20 to-transparent" />
        <div className="mt-10 flex flex-col items-center gap-4 text-center">
          <span className="font-serif text-lg tracking-wide text-champagne/60">
            Hiraya Manawari
          </span>
          <p className="font-serif text-xs italic text-warm-gray/60">
            Made by Filipinos, for Filipinos.
          </p>
          <p className="text-[11px] tracking-wide text-warm-gray">
            &copy; {new Date().getFullYear()} Hiraya Manawari. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
