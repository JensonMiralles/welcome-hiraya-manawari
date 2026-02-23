import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Showcase } from './sections/Showcase'
import { Customization } from './sections/Customization'
import { PublishedSites } from './sections/PublishedSites'
import { CulturalNote } from './sections/CulturalNote'
import { Pricing } from './sections/Pricing'
import { Footer } from './sections/Footer'

function App() {
  return (
    <main className="min-h-screen bg-midnight text-ivory-muted">
      <Hero />
      <About />
      <Showcase />
      <Customization />
      <PublishedSites />
      <CulturalNote />
      <Pricing />
      <Footer />
    </main>
  )
}

export default App
