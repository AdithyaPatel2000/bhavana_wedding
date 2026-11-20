import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart, ChevronRight, Music } from 'lucide-react';
import { triggerEnvelopeOpeningConfetti } from '../utils/confettiEffects';
import { weddingSynth } from '../utils/audioSynth';

export default function RoyalEnvelope({ onOpen, lang }) {
  const [isOpenAnimation, setIsOpenAnimation] = useState(false);
  const [dragProgress, setDragProgress] = useState(0);
  const sliderRef = useRef(null);
  const [sliderWidth, setSliderWidth] = useState(260);

  const isTelugu = lang === 'telugu';

  useEffect(() => {
    if (sliderRef.current) {
      setSliderWidth(sliderRef.current.offsetWidth - 64);
    }
    const handleResize = () => {
      if (sliderRef.current) {
        setSliderWidth(sliderRef.current.offsetWidth - 64);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const triggerOpen = () => {
    if (isOpenAnimation) return;
    setIsOpenAnimation(true);
    weddingSynth.playTempleBell();
    triggerEnvelopeOpeningConfetti();

    setTimeout(() => {
      weddingSynth.start();
    }, 450);

    setTimeout(() => {
      onOpen();
    }, 1250);
  };

  const handleDrag = (event, info) => {
    const currentX = Math.max(0, info.offset.x);
    const progress = Math.min(1, currentX / (sliderWidth || 200));
    setDragProgress(progress);

    // If dragged more than 75% of slider width, complete the opening
    if (progress >= 0.75) {
      triggerOpen();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-gradient-to-b from-[#0e0103] via-[#1c0307] to-[#0c0102] overflow-y-auto min-h-[100dvh]">
      {/* Background Animated Sacred Geometry Mandala */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-15 overflow-hidden">
        <div className="w-[500px] sm:w-[680px] h-[500px] sm:h-[680px] rounded-full border-[10px] border-[#dfb76c] border-dashed animate-spin-slow"></div>
        <div className="absolute w-[360px] sm:w-[500px] h-[360px] sm:h-[500px] rounded-full border border-[#dfb76c]/40"></div>
      </div>

      {/* Main 3D Royal Container with Palace Gate Opening Transition */}
      <div className="relative w-full max-w-md my-auto py-2 sm:py-4 [perspective:1400px]">
        {/* Golden Radiance Behind Doors on Open */}
        <AnimatePresence>
          {isOpenAnimation && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1.5 }}
              transition={{ duration: 0.7 }}
              className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none"
            >
              <div className="w-72 h-72 rounded-full bg-gradient-to-r from-[#ffe082] via-[#dfb76c] to-[#ffb703] blur-3xl opacity-75"></div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* The Royal Card with 3D Door Flip on Open */}
        <motion.div
          animate={
            isOpenAnimation
              ? {
                  scale: 1.08,
                  opacity: 0,
                  filter: 'blur(6px)',
                  transition: { duration: 0.9, delay: 0.2 },
                }
              : { scale: 1, opacity: 1 }
          }
          className="relative bg-gradient-to-b from-[#2a060d] via-[#3d0914] to-[#1e0408] rounded-3xl p-4 sm:p-7 border-2 border-[#dfb76c] shadow-[0_25px_60px_rgba(0,0,0,0.9)] gold-glow flex flex-col justify-between overflow-hidden"
        >
          {/* Ornate Gold Filigree Corner Accents */}
          <div className="absolute top-2.5 left-2.5 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-l-2 border-[#ffe082] pointer-events-none"></div>
          <div className="absolute top-2.5 right-2.5 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-r-2 border-[#ffe082] pointer-events-none"></div>
          <div className="absolute bottom-2.5 left-2.5 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-l-2 border-[#ffe082] pointer-events-none"></div>
          <div className="absolute bottom-2.5 right-2.5 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-r-2 border-[#ffe082] pointer-events-none"></div>

          {/* Top Auspicious Header with Glowing Diyas */}
          <div className="text-center space-y-1.5 pb-3 border-b border-[#dfb76c]/30">
            <div className="flex items-center justify-center gap-2">
              <span className="text-sm sm:text-base animate-pulse">🪔</span>
              <p className="text-[11px] sm:text-xs font-bold tracking-widest text-[#fceec7] font-telugu uppercase">
                {isTelugu ? 'శ్రీరస్తు ! శుభమస్తు !! కళ్యాణమస్తు !!!' : 'Srirasthu ! Shubhamasthu !! Kalyanamasthu !!!'}
              </p>
              <span className="text-sm sm:text-base animate-pulse">🪔</span>
            </div>

            <h1 className="text-lg sm:text-2xl font-extrabold font-telugu text-[#fcf2d9] drop-shadow leading-snug">
              {isTelugu ? 'కాసనగొట్టు వారి వివాహ మహోత్సవ ఆహ్వానము' : "Kasanagottu Family's Royal Wedding Invitation"}
            </h1>
          </div>

          {/* Center Couple Showcase in Royal Mandap Arch */}
          <div className="my-3 sm:my-5 flex flex-col items-center">
            {/* Arched Gold Frame with Breathing Halo */}
            <div className="relative p-1.5 sm:p-2 rounded-3xl bg-gradient-to-b from-[#dfb76c] via-[#996515] to-[#dfb76c] shadow-[0_15px_35px_rgba(223,183,108,0.3)] animate-float-slow">
              <div className="relative w-40 h-48 sm:w-48 sm:h-56 rounded-2xl overflow-hidden border-2 border-[#fff2b0] shadow-inner">
                <img
                  src="/assets/couple_romantic.jpg"
                  alt="Bhavana & Anush Kumar"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none"></div>

                <div className="absolute bottom-2 left-0 right-0 text-center">
                  <span className="text-xs sm:text-sm text-[#fceec7] font-telugu font-bold drop-shadow">
                    {isTelugu ? 'భావన 💖 అనుష్ కుమార్' : 'Bhavana & Anush Kumar'}
                  </span>
                  <span className="block text-[9px] sm:text-[10px] text-[#dfb76c] tracking-widest font-mono mt-0.5">
                    03 • 12 • 2026
                  </span>
                </div>
              </div>

              {/* Auspicious Badge */}
              <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#dfb76c] via-[#ffe599] to-[#c59b27] text-[#1c0306] text-[9px] sm:text-[10px] font-extrabold px-3 py-0.5 rounded-full shadow-md font-telugu uppercase tracking-wider whitespace-nowrap">
                {isTelugu ? 'వివాహ సుముహూర్తం' : 'Royal Wedding'}
              </div>
            </div>

            {/* Wedding Announcement Text */}
            <div className="mt-4 sm:mt-5 text-center space-y-1">
              <span className="text-[11px] sm:text-xs tracking-widest text-[#e8c07d] uppercase font-semibold">
                {isTelugu ? 'కళ్యాణ వధూవరులు' : 'The Auspicious Wedding Of'}
              </span>

              <h2 className="text-2xl sm:text-3xl font-extrabold gold-text-gradient font-telugu tracking-wide">
                {isTelugu ? 'భావన 💖 అనుష్ కుమార్' : 'Bhavana 💖 Anush Kumar'}
              </h2>

              {/* Muhurtham Details Pill */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#180306]/80 border border-[#dfb76c]/40 text-[11px] sm:text-xs text-[#eed5b0] font-telugu mt-1">
                <span>📅 03-12-2026</span>
                <span>•</span>
                <span>⏰ {isTelugu ? 'ఉ॥ 8:56 ని॥లకు' : '8:56 AM'}</span>
                <span>•</span>
                <span>📍 {isTelugu ? 'కరీంనగర్' : 'Karimnagar'}</span>
              </div>
            </div>
          </div>

          {/* Cordial Family Invitation Note */}
          <div className="my-2 p-2.5 sm:p-3 rounded-2xl bg-[#180306]/90 border border-[#dfb76c]/40 text-center">
            <p className="text-xs sm:text-sm text-[#fff1b8] font-telugu font-semibold">
              {isTelugu
                ? 'బంధు-మిత్ర సకుటుంబ సపరివార సమేతముగా విచ్చేసి నూతన వధూవరులను ఆశీర్వదించగలరు.'
                : 'Soliciting your gracious presence with family and friends to bless the newly wedded couple.'}
            </p>
          </div>

          {/* LUXURIOUS INTERACTIVE OPENING MECHANISM: GOLDEN SEAL SLIDER & TAP */}
          <div className="mt-4 sm:mt-5 flex flex-col items-center space-y-3">
            {/* Royal Gold Slide-to-Unlock / Tap-to-Open Track */}
            <div
              ref={sliderRef}
              onClick={triggerOpen}
              className="relative w-full h-15 sm:h-16 rounded-full bg-gradient-to-r from-[#170205] via-[#2f070f] to-[#170205] border-2 border-[#dfb76c] shadow-[inset_0_2px_12px_rgba(0,0,0,0.8),0_0_20px_rgba(223,183,108,0.25)] flex items-center p-1 cursor-pointer overflow-hidden group select-none"
            >
              {/* Shimmer Light Bar Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ffd700]/15 to-transparent animate-shimmer pointer-events-none"></div>

              {/* Slider Track Animated Guide Text */}
              <div className="absolute inset-0 flex items-center justify-center pl-14 sm:pl-16 pr-4 pointer-events-none">
                <span className="text-xs sm:text-sm font-bold tracking-wider text-[#ffe8a3] font-telugu flex items-center gap-1.5 drop-shadow">
                  <span>{isTelugu ? 'ఆహ్వానాన్ని తెరవడానికి స్వైప్ / ట్యాప్ చేయండి' : 'Slide or Tap to Open Invitation'}</span>
                  <ChevronRight className="w-4 h-4 text-[#dfb76c] animate-pulse" />
                </span>
              </div>

              {/* Draggable 3D Embossed Gold Wax Seal Knob */}
              <motion.div
                drag={isOpenAnimation ? false : 'x'}
                dragConstraints={{ left: 0, right: sliderWidth || 200 }}
                dragElastic={0.08}
                onDrag={handleDrag}
                onDragEnd={(e, info) => {
                  if (info.offset.x >= (sliderWidth || 200) * 0.7) {
                    triggerOpen();
                  } else {
                    setDragProgress(0);
                  }
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative z-10 w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#ffe599] via-[#dfb76c] to-[#996515] p-0.5 shadow-[0_4px_15px_rgba(0,0,0,0.7)] flex items-center justify-center cursor-grab active:cursor-grabbing border-2 border-[#fff3b8]"
              >
                {/* Inner Wax Seal Monogram */}
                <div className="w-full h-full rounded-full bg-gradient-to-br from-[#8a1422] to-[#45070f] flex flex-col items-center justify-center border border-dashed border-[#dfb76c] shadow-inner text-[#ffe082]">
                  <span className="text-[8px] sm:text-[9px] font-extrabold tracking-wider font-mono">B & A</span>
                  <Heart className="w-2.5 h-2.5 fill-[#dfb76c] text-[#dfb76c] my-0.2" />
                  <span className="text-[7px] sm:text-[8px] font-mono font-bold text-[#fcd270]">2026</span>
                </div>

                {/* Subtle Glow Ring */}
                <div className="absolute inset-0 rounded-full border border-[#fff2b0] animate-ping opacity-25 pointer-events-none"></div>
              </motion.div>
            </div>

            {/* Tap Fallback / Audio Info */}
            <p className="text-[10px] sm:text-[11px] text-[#dbba88] flex items-center gap-1.5 font-telugu">
              <Music className="w-3.5 h-3.5 text-[#dfb76c]" />
              <span>{isTelugu ? 'మంగళ వాయిద్యాల శ్రావ్యమైన సంగీతంతో ప్రారంభమవుతుంది' : 'Opens with auspicious wedding music & blessings'}</span>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
