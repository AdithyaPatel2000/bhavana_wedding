import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Crown } from 'lucide-react';
import { invitationData } from '../data/invitationData';

export default function HeroSection({ lang }) {
  const content = invitationData[lang];
  const isTelugu = lang === 'telugu';

  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center pt-24 sm:pt-28 pb-14 px-3 sm:px-4 text-center overflow-hidden">
      {/* Background Mandala Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
        <div className="w-[500px] sm:w-[750px] h-[500px] sm:h-[750px] rounded-full border-[16px] border-[#dfb76c] border-dashed animate-spin-slow"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto space-y-6 sm:space-y-8">
        {/* Lord Ganesha Invocation & Auspicious Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center space-y-2.5 sm:space-y-3"
        >
          {/* Radiant Ganesha Icon */}
          <div className="relative p-2.5 sm:p-3 rounded-full bg-gradient-to-br from-[#dfb76c]/30 to-transparent border border-[#dfb76c]/60 shadow-[0_0_20px_rgba(223,183,108,0.4)]">
            <span className="text-2xl sm:text-3xl filter drop-shadow">🕉️</span>
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#dfb76c] rounded-full animate-ping"></div>
          </div>

          {/* Srirasthu Shubhamasthu Kalyanamasthu */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-semibold tracking-widest text-[#f5d77f] font-telugu uppercase">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#dfb76c]" />
            <span>{content.auspiciousTop}</span>
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#dfb76c]" />
          </div>

          {/* Divine Blessings Tribute to Late Kasanagottu Bhagyalakshmi */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-block px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full bg-[#33080e]/80 border border-[#dfb76c]/40 text-[#f7e2a9] text-xs sm:text-sm italic font-telugu shadow"
          >
            {content.blessingsTribute}
          </motion.div>
        </motion.div>

        {/* Welcome Family & Friends Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mx-auto max-w-md p-3 sm:p-3.5 rounded-2xl bg-gradient-to-r from-[#2a060d]/90 via-[#420a15]/90 to-[#2a060d]/90 border border-[#dfb76c]/60 shadow-xl backdrop-blur-md text-center"
        >
          <div className="flex items-center justify-center gap-2 text-xs text-[#dfb76c] uppercase tracking-wider font-semibold mb-1">
            <Crown className="w-3.5 h-3.5" />
            <span>{isTelugu ? 'సాదర ఆహ్వానము' : 'Cordial Invitation'}</span>
            <Crown className="w-3.5 h-3.5" />
          </div>
          <p className="text-sm sm:text-lg font-bold font-telugu text-[#fff3cf]">
            {isTelugu ? 'బంధు-మిత్రులందరికీ సకుటుంబ సాదర ఆహ్వానము' : 'Cordially Welcoming Family & Friends'}
          </p>
          <p className="text-[11px] text-[#dbba88] mt-1 font-telugu">
            {isTelugu
              ? 'మా ఇంట జరుగనున్న వివాహ మహోత్సవానికి సకుటుంబ సపరివార సమేతంగా విచ్చేసి నూతన వధూవరులను ఆశీర్వదించగలరు.'
              : 'Soliciting your gracious presence with family and friends to bless the newly married couple.'}
          </p>
        </motion.div>

        {/* Real Couple Romantic Portrait in Royal Arch Mandapam */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative inline-block mx-auto"
        >
          <div className="relative p-2 sm:p-2.5 rounded-3xl bg-gradient-to-b from-[#dfb76c] via-[#85570b] to-[#dfb76c] shadow-[0_25px_60px_rgba(223,183,108,0.35)] group">
            <div className="relative w-44 h-56 sm:w-64 sm:h-80 rounded-2xl overflow-hidden border-2 border-[#fff2b0] shadow-2xl">
              <img
                src="/assets/couple_romantic.jpg"
                alt="Bhavana & Anush Kumar"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none"></div>

              <div className="absolute bottom-2.5 left-0 right-0 text-center">
                <span className="text-xs sm:text-sm text-[#fceec7] font-telugu font-bold drop-shadow">
                  {isTelugu ? 'భావన 💖 అనుష్ కుమార్' : 'Bhavana 💖 Anush Kumar'}
                </span>
                <span className="block text-[9px] sm:text-[10px] text-[#dfb76c] tracking-widest font-mono mt-0.5">
                  03 • 12 • 2026
                </span>
              </div>
            </div>

            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#dfb76c] via-[#ffe599] to-[#c59b27] text-[#1c0306] text-[9px] sm:text-[10px] font-extrabold px-3.5 py-0.5 sm:px-4 sm:py-1 rounded-full shadow-lg font-telugu uppercase tracking-wider whitespace-nowrap">
              {isTelugu ? 'శుభ పరిణయ మహోత్సవం' : 'Auspicious Wedding Union'}
            </div>
          </div>
        </motion.div>

        {/* Grand Wedding Announcement & Couple Names */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-3 sm:space-y-4"
        >
          <p className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#e5be7a] font-semibold">
            {isTelugu ? 'వివాహ మహోత్సవ ఆహ్వానము' : 'Wedding Ceremony of'}
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-2 sm:gap-6 py-1">
            {/* Bride */}
            <div className="text-center md:text-right">
              <span className="text-xs sm:text-sm text-[#e8c07d] block font-telugu">
                {content.bride.salutation}
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold gold-text-gradient font-telugu drop-shadow-md">
                {content.bride.name}
              </h1>
              <span className="text-xs text-[#ddbf88] block font-telugu mt-0.5 sm:mt-1">
                {isTelugu ? 'కాసనగొట్టు వారి ఏకైక కుమార్తె' : 'Only Daughter of Kasanagottu Family'}
              </span>
            </div>

            {/* Sacred Knot Symbol */}
            <div className="flex flex-col items-center justify-center my-1.5 md:my-0">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#dfb76c] to-[#781d28] p-0.5 shadow-lg flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-[#20050a] flex items-center justify-center">
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-[#dfb76c] fill-[#dfb76c] animate-pulse" />
                </div>
              </div>
              <span className="text-[10px] sm:text-[11px] text-[#f7e2a9] font-serif italic mt-0.5">
                {isTelugu ? 'పరిణయము' : 'Weds'}
              </span>
            </div>

            {/* Groom */}
            <div className="text-center md:text-left">
              <span className="text-xs sm:text-sm text-[#e8c07d] block font-telugu">
                {content.groom.salutation}
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold gold-text-gradient font-telugu drop-shadow-md">
                {content.groom.name}
              </h1>
              <span className="text-xs text-[#ddbf88] block font-telugu mt-0.5 sm:mt-1">
                {isTelugu ? 'చకినారపు వారి ప్రథమ కుమారుడు (మంచిర్యాల)' : 'Eldest Son of Chakinarapu Family (Mancherial)'}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Date, Time & Venue Key Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-6 px-4 py-2.5 sm:px-6 sm:py-3 rounded-2xl bg-[#2b070f]/90 border border-[#dfb76c]/50 shadow-lg text-xs sm:text-sm"
        >
          <div className="flex items-center gap-1.5 text-[#ffe599]">
            <span className="text-sm sm:text-base">📅</span>
            <span className="font-semibold">{content.sumuhurtham.dateFormatted}</span>
          </div>
          <div className="hidden sm:block text-[#dfb76c]">•</div>
          <div className="flex items-center gap-1.5 text-[#ffe599]">
            <span className="text-sm sm:text-base">⏰</span>
            <span className="font-semibold">{content.sumuhurtham.time}</span>
          </div>
          <div className="hidden sm:block text-[#dfb76c]">•</div>
          <div className="flex items-center gap-1.5 text-[#ffe599]">
            <span className="text-sm sm:text-base">📍</span>
            <span className="font-semibold">{content.venue.name}, {isTelugu ? 'కరీంనగర్' : 'Karimnagar'}</span>
          </div>
        </motion.div>

        {/* Sacred Vedic Shlokam Box */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-[#220409]/90 to-[#190306]/90 border border-[#dfb76c]/30 shadow-inner max-w-2xl mx-auto space-y-1.5 sm:space-y-2"
        >
          <p className="text-xs sm:text-base font-telugu text-[#ffe082] leading-relaxed whitespace-pre-line font-medium">
            {content.shlokam}
          </p>
          <p className="text-[11px] sm:text-xs text-[#ddbf88] italic font-telugu leading-relaxed">
            {content.shlokamMeaning}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
