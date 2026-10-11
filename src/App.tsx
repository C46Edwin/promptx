import AboutSection from './components/AboutSection'
import FinalCTA from './components/FinalCTA'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import RoundsSection from './components/RoundsSection'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-void">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <RoundsSection />
        <FinalCTA />
      </main>
      {/* Texture sits above content but never intercepts clicks (pointer-events: none) */}
      <div aria-hidden="true" className="texture-overlay" />
    </div>
  )
}
