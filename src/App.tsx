import { ArenaSection } from './components/ArenaSection';
import { ChallengeSection } from './components/ChallengeSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';

export default function App() {
  return (
    <>
      <a
        href="#challenge"
        className="sr-only z-[100] bg-crimson px-4 py-2 font-tech text-xs text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to the challenge
      </a>
      <Navbar />
      <main>
        <HeroSection />
        <ArenaSection />
        <ChallengeSection />
        <FinalCTA />
      </main>
      <Footer />
      <div className="fx-layer fx-scan" aria-hidden="true" />
      <div className="fx-layer fx-grain" aria-hidden="true" />
    </>
  );
}
