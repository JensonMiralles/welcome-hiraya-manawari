import { Link } from 'react-router'

export function Footer() {
  return (
    <footer className="relative overflow-hidden px-6 pb-12 pt-20">
      {/* Subtle warm glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(212,175,122,0.015)_0%,transparent_60%)]" />

      <div className="relative mx-auto max-w-5xl">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-champagne/25 to-transparent" />
        <div className="mt-10 flex flex-col items-center gap-4 text-center">
          <span className="bg-gradient-to-b from-champagne to-champagne-dark bg-clip-text font-serif text-lg tracking-wide text-transparent">
            Hiraya Manawari
          </span>
          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/hiraya.manawari.weddings/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-warm-gray/60 transition-colors hover:text-champagne"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="mailto:hiraya.manawari.weddings@gmail.com"
              className="text-warm-gray/60 transition-colors hover:text-champagne"
              aria-label="Email"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
          </div>
          <p className="font-serif text-xs italic text-warm-gray/60">
            Made by Filipinos, for Filipinos.
          </p>
          <div className="flex items-center gap-3 text-[11px] text-warm-gray">
            <Link to="/terms" className="hover:text-champagne transition-colors">Terms</Link>
            <span className="text-warm-gray/40">&middot;</span>
            <Link to="/privacy" className="hover:text-champagne transition-colors">Privacy</Link>
          </div>
          <p className="text-[11px] tracking-wide text-warm-gray">
            &copy; {new Date().getFullYear()} Hiraya Manawari. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
