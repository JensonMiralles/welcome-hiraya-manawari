import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Routes, Route } from "react-router";

import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { OurStory } from "./sections/OurStory";
import { Showcase } from "./sections/Showcase";
import { Customization } from "./sections/Customization";
import { PublishedSites } from "./sections/PublishedSites";
import { CulturalNote } from "./sections/CulturalNote";
import { Pricing } from "./sections/Pricing";
import { FAQ } from "./sections/FAQ";
import { Footer } from "./sections/Footer";
import { TermsPage } from "./pages/legal/TermsPage";
import { PrivacyPage } from "./pages/legal/PrivacyPage";

function HomePage() {
  return (
    <main className="min-h-screen bg-midnight text-ivory-muted">
      <Hero />
      <About />
      <OurStory />
      <Showcase />
      <Customization />
      <PublishedSites />
      <CulturalNote />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
      </Routes>
      <Analytics />
      <SpeedInsights />
    </>
  );
}

export default App;
