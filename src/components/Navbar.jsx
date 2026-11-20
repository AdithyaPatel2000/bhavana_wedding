import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Globe, Heart, Sparkles, Share2, MapPin, Calendar, Users, Camera } from 'lucide-react';
import { weddingSynth } from '../utils/audioSynth';
import { triggerPetalShower } from '../utils/confettiEffects';

export default function Navbar({
  lang,
  setLang,
  isMusicPlaying,
  setIsMusicPlaying,
  blessingCount,
  onShowerBlessings
}) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 120);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMusic = () => {
    if (isMusicPlaying) {
      weddingSynth.stop();
      setIsMusicPlaying(false);
    } else {
      weddingSynth.start();
      setIsMusicPlaying(true);
    }
  };

  const toggleLanguage = () => {
    setLang(lang === 'telugu' ? 'english' : 'telugu');
  };

  const handleShareWhatsApp = () => {
    const text = lang === 'telugu'
      ? `💐 చి॥ల॥సౌ॥ భావన మరియు చి॥ అనుష్ కుమార్ గార్ల వివాహ మహోత్సవ ఆహ్వాన శుభ పత్రిక 💐\nతేది: 03 డిసెంబర్ 2026, ఉదయం 8:56 గంటలకు.\nవేదిక: కొండ సత్యలక్ష్మి గార్డెన్స్, NTR విగ్రహం దగ్గర, కరీంనగర్.\nడిజిటల్ ఆహ్వానాన్ని ఇక్కడ చూడండి:\n${window.location.href}`
      : `💐 Royal Wedding Invitation of Chi. La. Sow. Bhavana with Chi. Anush Kumar 💐\nDate: Thursday, 3rd December 2026 at 8:56 AM.\nVenue: Konda Satyalaxmi Gardens, Near NTR Statue, Karimnagar.\nView the royal digital invitation here:\n${window.location.href}`;

    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isTelugu = lang === 'telugu';

  return (
    <>
      {/* Top Floating Glass Bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#180407]/90 backdrop-blur-md border-b border-[#dfb76c]/40 py-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.6)]'
            : 'bg-gradient-to-b from-[#140306]/95 to-transparent py-4'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          {/* Logo & Names */}
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="cursor-pointer flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#dfb76c] to-[#996515] p-0.5 shadow-md flex items-center justify-center">
              <span className="text-xs font-bold text-[#2a050b]">B&A</span>
            </div>
            <div className="text-left">
              <span className="text-sm sm:text-base font-bold gold-text-gradient font-telugu block leading-tight">
                {isTelugu ? 'భావన & అనుష్' : 'Bhavana & Anush'}
              </span>
              <span className="text-[10px] text-[#dbba88] font-mono tracking-wider block">
                03 • 12 • 2026
              </span>
            </div>
          </div>

          {/* Quick Nav Anchors for Desktop */}
          <nav className="hidden md:flex items-center gap-6 text-xs uppercase tracking-wider text-[#eed5b0]">
            <button onClick={() => scrollTo('couple')} className="hover:text-[#dfb76c] transition cursor-pointer">
              {isTelugu ? 'వధూవరులు' : 'Couple'}
            </button>
            <button onClick={() => scrollTo('gallery')} className="hover:text-[#dfb76c] transition cursor-pointer text-[#ffe082] flex items-center gap-1">
              <Camera className="w-3 h-3 text-[#dfb76c]" />
              {isTelugu ? 'చిత్ర మాలిక' : 'Photos'}
            </button>
            <button onClick={() => scrollTo('muhurtham')} className="hover:text-[#dfb76c] transition cursor-pointer">
              {isTelugu ? 'సుముహూర్తం' : 'Sumuhurtham'}
            </button>
            <button onClick={() => scrollTo('venue')} className="hover:text-[#dfb76c] transition cursor-pointer">
              {isTelugu ? 'కళ్యాణ వేదిక' : 'Venue'}
            </button>
            <button onClick={() => scrollTo('family')} className="hover:text-[#dfb76c] transition cursor-pointer">
              {isTelugu ? 'ఆహ్వానించువారు' : 'Family'}
            </button>
            <button onClick={() => scrollTo('blessings')} className="hover:text-[#dfb76c] transition cursor-pointer">
              {isTelugu ? 'ఆశీస్సులు' : 'Blessings'}
            </button>
          </nav>

          {/* Interactive Controls Pill */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="px-3 py-1.5 rounded-full bg-[#3d0912] border border-[#dfb76c]/60 text-[#f7e2a9] hover:bg-[#5a0d1b] text-xs font-semibold flex items-center gap-1.5 transition shadow"
              title="Switch Language"
            >
              <Globe className="w-3.5 h-3.5 text-[#dfb76c]" />
              <span>{isTelugu ? 'English' : 'తెలుగు'}</span>
            </button>

            {/* Music Player Toggle with Equalizer bars */}
            <button
              onClick={toggleMusic}
              className={`p-2 rounded-full border transition flex items-center justify-center ${
                isMusicPlaying
                  ? 'bg-[#5a0d1b] border-[#dfb76c] text-[#dfb76c] shadow-[0_0_15px_rgba(223,183,108,0.4)]'
                  : 'bg-[#26050b] border-[#dfb76c]/40 text-[#a88a64]'
              }`}
              title={isMusicPlaying ? 'Mute Music' : 'Play Auspicious Music'}
            >
              {isMusicPlaying ? (
                <div className="flex items-end gap-0.5 h-3.5 w-3.5">
                  <span className="w-1 bg-[#dfb76c] rounded-full animate-bounce h-full"></span>
                  <span className="w-1 bg-[#dfb76c] rounded-full animate-bounce h-2/3 delay-75"></span>
                  <span className="w-1 bg-[#dfb76c] rounded-full animate-bounce h-4/5 delay-150"></span>
                </div>
              ) : (
                <VolumeX className="w-4 h-4" />
              )}
            </button>

            {/* WhatsApp Share Button */}
            <button
              onClick={handleShareWhatsApp}
              className="p-2 rounded-full bg-[#1b4332] hover:bg-[#2d6a4f] text-[#d8f3dc] border border-[#52b788] transition shadow"
              title="Share Invitation via WhatsApp"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Floating Bottom Quick Action Dock on Mobile */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 p-1.5 rounded-full bg-[#20050a]/90 border border-[#dfb76c]/70 backdrop-blur-lg shadow-[0_10px_35px_rgba(0,0,0,0.8)]">
        <button
          onClick={onShowerBlessings}
          className="px-4 py-2 rounded-full bg-gradient-to-r from-[#dfb76c] to-[#b8860b] text-[#1c0306] font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-md active:scale-95 transition"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>{isTelugu ? 'అక్షింతలు వేయండి' : 'Shower Blessings'}</span>
          <span className="bg-[#1c0306] text-[#dfb76c] px-1.5 py-0.2 rounded-full text-[10px]">
            {blessingCount}
          </span>
        </button>

        <button
          onClick={() => scrollTo('gallery')}
          className="p-2 rounded-full bg-[#3d0912] hover:bg-[#570c1a] text-[#eed5b0] border border-[#dfb76c]/40 transition"
          title="Photos Gallery"
        >
          <Camera className="w-4 h-4 text-[#dfb76c]" />
        </button>

        <button
          onClick={() => scrollTo('venue')}
          className="p-2 rounded-full bg-[#3d0912] hover:bg-[#570c1a] text-[#eed5b0] border border-[#dfb76c]/40 transition"
          title="Venue & Directions"
        >
          <MapPin className="w-4 h-4 text-[#dfb76c]" />
        </button>

        <button
          onClick={() => scrollTo('muhurtham')}
          className="p-2 rounded-full bg-[#3d0912] hover:bg-[#570c1a] text-[#eed5b0] border border-[#dfb76c]/40 transition"
          title="Date & Time"
        >
          <Calendar className="w-4 h-4 text-[#dfb76c]" />
        </button>

        <button
          onClick={() => scrollTo('family')}
          className="p-2 rounded-full bg-[#3d0912] hover:bg-[#570c1a] text-[#eed5b0] border border-[#dfb76c]/40 transition"
          title="Family & Contacts"
        >
          <Users className="w-4 h-4 text-[#dfb76c]" />
        </button>
      </div>
    </>
  );
}
