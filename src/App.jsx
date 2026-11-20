import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import PetalBackground from './components/PetalBackground';
import RoyalEnvelope from './components/RoyalEnvelope';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CoupleSection from './components/CoupleSection';
import GallerySection from './components/GallerySection';
import MuhurthamSection from './components/MuhurthamSection';
import VenueSection from './components/VenueSection';
import FeastSection from './components/FeastSection';
import FamilySection from './components/FamilySection';
import BlessingsSection from './components/BlessingsSection';
import Footer from './components/Footer';
import { triggerAkshintaluShower, triggerPetalShower } from './utils/confettiEffects';
import { weddingSynth } from './utils/audioSynth';

export default function App() {
  const [hasOpenedEnvelope, setHasOpenedEnvelope] = useState(false);
  // Default language is English as requested by user
  const [lang, setLang] = useState('english');
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [blessingCount, setBlessingCount] = useState(() => {
    try {
      const saved = localStorage.getItem('bhavana_wedding_blessing_count');
      return saved ? parseInt(saved, 10) : 1248;
    } catch (e) {
      return 1248;
    }
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const initialLang = params.get('lang');
    if (initialLang === 'te' || initialLang === 'telugu') {
      setLang('telugu');
    }
  }, []);

  const handleOpenEnvelope = () => {
    setHasOpenedEnvelope(true);
    setIsMusicPlaying(true);
    triggerPetalShower();
  };

  const handleShowerBlessings = () => {
    triggerAkshintaluShower();
    weddingSynth.playTempleBell();
    setBlessingCount((prev) => {
      const next = prev + 1;
      try {
        localStorage.setItem('bhavana_wedding_blessing_count', next.toString());
      } catch (e) {}
      return next;
    });
  };

  return (
    <div className="relative min-h-screen bg-[#140306] text-[#f7e9d7] selection:bg-[#dfb76c] selection:text-[#1a0508] overflow-x-hidden">
      {/* Background Petals and Golden Fireflies */}
      <PetalBackground />

      {/* 3D Royal Envelope Unboxing Screen */}
      <AnimatePresence>
        {!hasOpenedEnvelope && (
          <RoyalEnvelope
            onOpen={handleOpenEnvelope}
            lang={lang}
          />
        )}
      </AnimatePresence>

      {/* Main Digital Invitation Experience */}
      {hasOpenedEnvelope && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative z-20 flex flex-col"
        >
          {/* Floating Control Navbar */}
          <Navbar
            lang={lang}
            setLang={setLang}
            isMusicPlaying={isMusicPlaying}
            setIsMusicPlaying={setIsMusicPlaying}
            blessingCount={blessingCount}
            onShowerBlessings={handleShowerBlessings}
          />

          {/* Hero Section with Couple Portrait in Royal Mandap Arch */}
          <HeroSection lang={lang} />

          {/* The Couple Profile with Traditional Wedding Attire & Avatars */}
          <CoupleSection lang={lang} />

          {/* Moments of Love & Celebration - Interactive 3D Photo Gallery with Swipe */}
          <GallerySection lang={lang} />

          {/* Sumuhurtham & Countdown */}
          <MuhurthamSection lang={lang} />

          {/* Kalyana Vedika (Venue) */}
          <VenueSection lang={lang} />

          {/* Wedding Feast */}
          <FeastSection lang={lang} />

          {/* Host Families */}
          <FamilySection lang={lang} />

          {/* Interactive Blessings & Guestbook */}
          <BlessingsSection
            lang={lang}
            blessingCount={blessingCount}
            onShowerBlessings={handleShowerBlessings}
          />

          {/* Footer */}
          <Footer lang={lang} />
        </motion.div>
      )}
    </div>
  );
}
