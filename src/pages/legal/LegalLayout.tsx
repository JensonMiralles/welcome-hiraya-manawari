import { Link } from 'react-router'
import type { ReactNode } from 'react'

interface LegalLayoutProps {
  title: string
  lastUpdated: string
  children: ReactNode
}

export function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
  return (
    <div className="min-h-screen bg-midnight text-ivory-muted">
      <header className="border-b border-champagne/10">
        <div className="mx-auto max-w-3xl px-6 py-6 flex items-center justify-between">
          <Link
            to="/"
            className="font-serif text-lg tracking-widest text-champagne uppercase hover:text-champagne-dark transition-colors"
          >
            Hiraya Manawari
          </Link>
          <Link
            to="/"
            className="text-sm text-warm-gray hover:text-ivory-muted transition-colors"
          >
            Back
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-12 md:py-16">
        <h1 className="font-serif text-3xl md:text-4xl text-champagne mb-2">
          {title}
        </h1>
        <p className="text-sm text-warm-gray mb-10">
          Last updated: {lastUpdated}
        </p>

        <div className="space-y-6 [&_h2]:font-serif [&_h2]:text-xl [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:text-champagne/90 [&_p]:leading-relaxed [&_p]:text-warm-gray [&_ul]:text-warm-gray [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_li]:leading-relaxed [&_a]:text-champagne [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-champagne-dark [&_strong]:text-ivory-muted">
          {children}
        </div>
      </main>

      <footer className="border-t border-champagne/10">
        <div className="mx-auto max-w-3xl px-6 py-6 flex gap-6 text-xs text-warm-gray">
          <Link to="/terms" className="hover:text-champagne transition-colors">
            Terms of Service
          </Link>
          <Link to="/privacy" className="hover:text-champagne transition-colors">
            Privacy Policy
          </Link>
        </div>
      </footer>
    </div>
  )
}
