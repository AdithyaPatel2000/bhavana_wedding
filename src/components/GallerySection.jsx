import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Heart, ZoomIn, X, ChevronLeft, ChevronRight, Layers, LayoutGrid, Hand } from 'lucide-react';
import { triggerPetalShower } from '../utils/confettiEffects';

export default function GallerySection({ lang }) {
  const isTelugu = lang === 'telugu';

  const photos = [
    {
      id: 1,
      src: '/assets/couple_romantic.jpg',
      titleTelugu: 'మాంగల్య బంధం • పవిత్ర ప్రణయం',
      titleEnglish: 'Sacred Matrimony & Divine Love',
      subtitleTelugu: 'వేద మంత్రాల సాక్షిగా ఒకటవుతున్న మనసులు',
      subtitleEnglish: 'Hand in hand under the auspicious mandapam',
      tagTelugu: 'సుముహూర్త క్షణాలు',
      tagEnglish: 'Divine Union',
      likes: 384,
    },
    {
      id: 2,
      src: '/assets/couple_traditional.jpg',
      titleTelugu: 'కళ్యాణ వైభవం • సాంప్రదాయ శోభ',
      titleEnglish: 'Traditional Splendor & Royal Grace',
      subtitleTelugu: 'పట్టు వస్త్రాలు, పూలదండలతో నూతన వధూవరుల దివ్య రూపం',
      subtitleEnglish: 'Dressed in royal silk and auspicious wedding garlands',
      tagTelugu: 'రాచరిక వేడుక',
      tagEnglish: 'Royal Elegance',
      likes: 429,
    },
    {
      id: 3,
      src: '/assets/couple_festive.jpg',
      titleTelugu: 'ఆనంద తరంగాలు • మధుర స్మృతులు',
      titleEnglish: 'Joyous Celebrations & Warm Smiles',
      subtitleTelugu: 'సంబరాల నవ్వులతో కళ్యాణ సందడి',
      subtitleEnglish: 'Cherishing joyful moments of union and festivity',
      tagTelugu: 'సంతోష క్షణాలు',
      tagEnglish: 'Festive Bliss',
      likes: 512,
    },
  ];

  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const [viewMode, setViewMode] = useState('stack');
  const [lightboxPhoto, setLightboxPhoto] = useState(null);
  const [likesState, setLikesState] = useState({ 1: 384, 2: 429, 3: 512 });
  const [userLiked, setUserLiked] = useState({});

  // Touch swipe tracking
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 40; // minimum swipe distance in px
    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        // Swiped Left -> go Next
        handleNext();
      } else {
        // Swiped Right -> go Prev
        handlePrev();
      }
    }
  };

  const handleLike = (id, e) => {
    e.stopPropagation();
    if (userLiked[id]) return;
    setUserLiked((prev) => ({ ...prev, [id]: true }));
    setLikesState((prev) => ({ ...prev, [id]: prev[id] + 1 }));
    triggerPetalShower();
  };

  const handleNext = () => {
    setActivePhotoIndex((prev) => (prev + 1) % photos.length);
  };

  const handlePrev = () => {
    setActivePhotoIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <section id="gallery" className="relative py-20 px-3 sm:px-4 max-w-6xl mx-auto overflow-hidden">
      {/* Background Decorative Mandala Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
        <div className="w-[700px] h-[700px] rounded-full border-8 border-[#dfb76c] border-dashed animate-spin-slow"></div>
      </div>

      {/* Header */}
      <div className="text-center space-y-3 mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3d0912] border border-[#dfb76c]/40 text-xs font-semibold uppercase tracking-widest text-[#f5d77f]">
          <Camera className="w-3.5 h-3.5" />
          <span>{isTelugu ? 'కళ్యాణ చిత్ర మాలిక' : 'Moments of Love & Celebration'}</span>
          <Camera className="w-3.5 h-3.5" />
        </div>

        <h2 className="text-2xl sm:text-4xl font-extrabold gold-text-gradient font-telugu">
          {isTelugu ? 'భావన & అనుష్ కుమార్ మధుర క్షణాలు' : 'Glimpses of Bhavana & Anush Kumar'}
        </h2>

        <p className="text-xs sm:text-sm text-[#dbba88] max-w-xl mx-auto font-telugu">
          {isTelugu
            ? 'నూతన వధూవరుల విభిన్న ఆనంద రూపాలు • మీ ప్రేమతో కూడిన ఆశీస్సులను తెలియజేయండి'
            : 'Celebratory portraits captured in different styles of traditional elegance and joy'}
        </p>

        {/* View Mode Toggle */}
        <div className="pt-2 flex items-center justify-center gap-2">
          <button
            onClick={() => setViewMode('stack')}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition ${
              viewMode === 'stack'
                ? 'bg-gradient-to-r from-[#dfb76c] to-[#b8860b] text-[#1c0306] font-bold shadow'
                : 'bg-[#2b060d] text-[#eed5b0] hover:text-white border border-[#dfb76c]/30'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>{isTelugu ? '3D స్లైడర్ స్టైల్' : '3D Slider Style'}</span>
          </button>

          <button
            onClick={() => setViewMode('grid')}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition ${
              viewMode === 'grid'
                ? 'bg-gradient-to-r from-[#dfb76c] to-[#b8860b] text-[#1c0306] font-bold shadow'
                : 'bg-[#2b060d] text-[#eed5b0] hover:text-white border border-[#dfb76c]/30'
            }`}
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>{isTelugu ? 'గ్రిడ్ స్టైల్' : 'Grid Style'}</span>
          </button>
        </div>
      </div>

      {/* VIEW MODE 1: 3D Showcase Slider with Touch Swipe & Drag */}
      {viewMode === 'stack' && (
        <div
          className="relative max-w-4xl mx-auto touch-pan-y"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Subtle Swipe Guidance Pill */}
          <div className="text-center mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#20050a]/80 border border-[#dfb76c]/30 text-[11px] text-[#e8c07d] font-telugu shadow animate-pulse">
              <span>👉</span>
              <span>{isTelugu ? 'ఎడమ లేదా కుడికి స్వైప్ చేయండి' : 'Swipe left or right to change photo'}</span>
              <span>👈</span>
            </span>
          </div>

          <div className="relative min-h-[490px] sm:min-h-[580px] flex items-center justify-center select-none">
            {photos.map((item, idx) => {
              const isCenter = idx === activePhotoIndex;
              const isLeft = (activePhotoIndex - 1 + photos.length) % photos.length === idx;
              const isRight = (activePhotoIndex + 1) % photos.length === idx;

              let xOffset = 0;
              let scale = 0.8;
              let opacity = 0;
              let zIndex = 10;
              let rotateY = 0;

              if (isCenter) {
                xOffset = 0;
                scale = 1;
                opacity = 1;
                zIndex = 30;
                rotateY = 0;
              } else if (isLeft) {
                xOffset = -180;
                scale = 0.82;
                opacity = 0.45;
                zIndex = 20;
                rotateY = 18;
              } else if (isRight) {
                xOffset = 180;
                scale = 0.82;
                opacity = 0.45;
                zIndex = 20;
                rotateY = -18;
              }

              return (
                <motion.div
                  key={item.id}
                  drag={isCenter ? 'x' : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.35}
                  onDragEnd={(e, { offset, velocity }) => {
                    if (offset.x > 40 || velocity.x > 300) {
                      handlePrev();
                    } else if (offset.x < -40 || velocity.x < -300) {
                      handleNext();
                    }
                  }}
                  animate={{
                    x: xOffset,
                    scale: scale,
                    opacity: opacity,
                    rotateY: rotateY,
                    zIndex: zIndex,
                  }}
                  transition={{ duration: 0.5, type: 'spring' }}
                  className={`absolute w-full max-w-[300px] sm:max-w-[380px] cursor-grab active:cursor-grabbing rounded-3xl bg-gradient-to-b from-[#2d070e] via-[#3d0914] to-[#1e0408] border-2 ${
                    isCenter ? 'border-[#dfb76c] shadow-[0_20px_50px_rgba(223,183,108,0.3)]' : 'border-[#dfb76c]/40 shadow-xl'
                  } p-4 sm:p-5`}
                  onClick={() => {
                    if (isCenter) setLightboxPhoto(item);
                    else setActivePhotoIndex(idx);
                  }}
                >
                  {/* Photo Tag Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 rounded-full bg-[#1b0306] border border-[#dfb76c]/40 text-[11px] font-bold text-[#dfb76c] font-telugu">
                      {isTelugu ? item.tagTelugu : item.tagEnglish}
                    </span>

                    <button
                      onClick={(e) => handleLike(item.id, e)}
                      className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition cursor-pointer ${
                        userLiked[item.id]
                          ? 'bg-rose-900/80 text-rose-300 border border-rose-500'
                          : 'bg-[#1b0306] text-[#dfb76c] hover:bg-[#3d0912] border border-[#dfb76c]/30'
                      }`}
                    >
                      <Heart
                        className={`w-3.5 h-3.5 ${
                          userLiked[item.id] ? 'fill-rose-500 text-rose-500' : 'text-[#dfb76c]'
                        }`}
                      />
                      <span>{likesState[item.id]}</span>
                    </button>
                  </div>

                  {/* The Photo Container with Gold Border */}
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-[#dfb76c]/60 group shadow-inner">
                    <img
                      src={item.src}
                      alt={item.titleEnglish}
                      draggable={false}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition pointer-events-none"></div>

                    {/* Magnifier Hover Icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition pointer-events-none">
                      <div className="p-3 rounded-full bg-[#180306]/80 border border-[#dfb76c] text-[#dfb76c] shadow-lg">
                        <ZoomIn className="w-6 h-6" />
                      </div>
                    </div>

                    {/* Title inside image bottom */}
                    <div className="absolute bottom-3 left-3 right-3 text-left pointer-events-none">
                      <h4 className="text-base sm:text-lg font-bold text-[#fff3cf] font-telugu drop-shadow">
                        {isTelugu ? item.titleTelugu : item.titleEnglish}
                      </h4>
                      <p className="text-[11px] text-[#eed5b0] font-telugu line-clamp-1 mt-0.5">
                        {isTelugu ? item.subtitleTelugu : item.subtitleEnglish}
                      </p>
                    </div>
                  </div>

                  {isCenter && (
                    <div className="mt-3 text-center">
                      <span className="text-[11px] text-[#dbba88] italic font-telugu">
                        {isTelugu ? 'పూర్తి స్క్రీన్ లో వీక్షించడానికి ఫోటోను నొక్కండి' : 'Tap photo for fullscreen zoom'}
                      </span>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Slider Navigation Arrows & Dots */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-[#2d070e] hover:bg-[#4a0d18] border border-[#dfb76c]/60 text-[#dfb76c] hover:text-white transition shadow-md active:scale-95 cursor-pointer"
              title="Previous Photo"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {photos.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActivePhotoIndex(i)}
                  className={`h-2.5 rounded-full transition-all cursor-pointer ${
                    activePhotoIndex === i ? 'w-8 bg-[#dfb76c]' : 'w-2.5 bg-[#dfb76c]/40'
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-[#2d070e] hover:bg-[#4a0d18] border border-[#dfb76c]/60 text-[#dfb76c] hover:text-white transition shadow-md active:scale-95 cursor-pointer"
              title="Next Photo"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* VIEW MODE 2: Multi-Style Grid Showcase */}
      {viewMode === 'grid' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {photos.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="group rounded-3xl bg-gradient-to-b from-[#2b060d] via-[#3a0a14] to-[#1c0408] border-2 border-[#dfb76c]/60 hover:border-[#dfb76c] p-4 sm:p-5 shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
              onClick={() => setLightboxPhoto(item)}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 rounded-full bg-[#1b0306] border border-[#dfb76c]/40 text-[11px] font-bold text-[#dfb76c] font-telugu">
                  {isTelugu ? item.tagTelugu : item.tagEnglish}
                </span>

                <button
                  onClick={(e) => handleLike(item.id, e)}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition cursor-pointer ${
                    userLiked[item.id]
                      ? 'bg-rose-900/80 text-rose-300 border border-rose-500'
                      : 'bg-[#1b0306] text-[#dfb76c] hover:bg-[#3d0912] border border-[#dfb76c]/30'
                  }`}
                >
                  <Heart
                    className={`w-3.5 h-3.5 ${
                      userLiked[item.id] ? 'fill-rose-500 text-rose-500' : 'text-[#dfb76c]'
                    }`}
                  />
                  <span>{likesState[item.id]}</span>
                </button>
              </div>

              {/* Photo */}
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-[#dfb76c]/50 shadow-inner">
                <img
                  src={item.src}
                  alt={item.titleEnglish}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <div className="p-3 rounded-full bg-[#180306]/85 border border-[#dfb76c] text-[#dfb76c] shadow-lg">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="mt-4 space-y-1 text-center">
                <h4 className="text-base sm:text-lg font-bold text-[#fff3cf] font-telugu">
                  {isTelugu ? item.titleTelugu : item.titleEnglish}
                </h4>
                <p className="text-xs text-[#eed5b0] font-telugu">
                  {isTelugu ? item.subtitleTelugu : item.subtitleEnglish}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Lightbox Modal for High-Res View */}
      <AnimatePresence>
        {lightboxPhoto && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md"
            onClick={() => setLightboxPhoto(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full max-h-[92vh] bg-[#200408] rounded-3xl border-2 border-[#dfb76c] p-4 sm:p-6 shadow-[0_25px_60px_rgba(0,0,0,0.9)] flex flex-col items-center"
            >
              <button
                onClick={() => setLightboxPhoto(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-[#160205] text-[#eed5b0] hover:text-white border border-[#dfb76c]/40 transition z-10 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative max-h-[70vh] rounded-2xl overflow-hidden border border-[#dfb76c]/60 shadow-2xl">
                <img
                  src={lightboxPhoto.src}
                  alt={lightboxPhoto.titleEnglish}
                  className="max-h-[70vh] w-auto object-contain rounded-2xl"
                />
              </div>

              <div className="mt-4 text-center space-y-1 w-full">
                <h3 className="text-lg sm:text-xl font-bold gold-text-gradient font-telugu">
                  {isTelugu ? lightboxPhoto.titleTelugu : lightboxPhoto.titleEnglish}
                </h3>
                <p className="text-xs text-[#eed5b0] font-telugu">
                  {isTelugu ? lightboxPhoto.subtitleTelugu : lightboxPhoto.subtitleEnglish}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
