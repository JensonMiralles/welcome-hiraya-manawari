import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen">
      <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-10 px-6 py-16">
        <header className="flex flex-col gap-4">
          <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
            Tailwind is live
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Welcome to Hiraya Manawari
          </h1>
          <p className="max-w-2xl text-base text-slate-300 sm:text-lg">
            TailwindCSS is now wired in. Build fast with utility classes, tweak
            styles without leaving your component, and keep everything crisp and
            cohesive.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.8)]">
            <h2 className="text-lg font-semibold text-white">
              Quick demo counter
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              Click to confirm hot reload and Tailwind styles are working.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <button
                className="rounded-full bg-slate-100 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-white"
                onClick={() => setCount((current) => current + 1)}
              >
                Count: {count}
              </button>
              <span className="text-sm text-slate-400">
                Edit <code className="rounded bg-white/10 px-2 py-1">src/App.tsx</code>{' '}
                to see updates
              </span>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/20 via-slate-900/80 to-slate-900 p-6">
            <h2 className="text-lg font-semibold text-white">
              Next steps
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li>Swap colors in <code className="rounded bg-white/10 px-2 py-1">tailwind.config.cjs</code>.</li>
              <li>Move global styles into <code className="rounded bg-white/10 px-2 py-1">src/index.css</code>.</li>
              <li>Start building components with utility-first styling.</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
