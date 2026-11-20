import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Building, MapPin } from 'lucide-react';
import { invitationData } from '../data/invitationData';

export default function CoupleSection({ lang }) {
  const content = invitationData[lang];
  const isTelugu = lang === 'telugu';

  return (
    <section id="couple" className="relative py-20 px-4 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center space-y-3 mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3d0912] border border-[#dfb76c]/40 text-xs font-semibold uppercase tracking-widest text-[#f5d77f]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{isTelugu ? 'కళ్యాణ వధూవరులు' : 'The Auspicious Union'}</span>
          <Sparkles className="w-3.5 h-3.5" />
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold gold-text-gradient font-telugu">
          {isTelugu ? 'నూతన వధూవరుల పరిచయము' : 'Bride & Groom Profile'}
        </h2>
        <p className="text-xs sm:text-sm text-[#dbba88] max-w-xl mx-auto font-telugu">
          {isTelugu
            ? 'వేద మంత్రోచ్ఛారణల నడుమ, పెద్దల ఆశీస్సులతో ఒక్కటవుతున్న నూతన దంపతులు'
            : 'Uniting in sacred matrimony amidst Vedic hymns and divine blessings'}
        </p>
      </div>

      {/* Centerpiece Traditional Royal Couple Portrait */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-14 max-w-3xl mx-auto rounded-3xl bg-gradient-to-b from-[#2d070e] via-[#460c16] to-[#1e0408] border-2 border-[#dfb76c] p-6 sm:p-8 shadow-[0_20px_60px_rgba(223,183,108,0.25)] flex flex-col md:flex-row items-center gap-6 sm:gap-8 group"
      >
        <div className="relative w-44 h-60 sm:w-56 sm:h-72 rounded-2xl overflow-hidden border-2 border-[#dfb76c] shadow-2xl shrink-0">
          <img
            src="/assets/couple_traditional.jpg"
            alt="Bhavana & Anush Kumar Traditional Wedding Attire"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          <div className="absolute bottom-2 left-2 right-2 text-center bg-[#1b0306]/80 backdrop-blur-sm rounded-lg py-1 border border-[#dfb76c]/40">
            <span className="text-[11px] font-bold text-[#fceec7] font-telugu">
              {isTelugu ? 'కళ్యాణ మహోత్సవ శోభ' : 'Royal Wedding Attire'}
            </span>
          </div>
        </div>

        <div className="space-y-4 text-center md:text-left flex-1">
          <div className="inline-block px-3 py-1 rounded-full bg-[#1b0306] border border-[#dfb76c]/40 text-xs font-bold text-[#dfb76c] font-telugu">
            {isTelugu ? 'పవిత్ర దాంపత్య బంధం' : 'Sacred Union'}
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold gold-text-gradient font-telugu">
            {isTelugu ? 'చి॥ల॥సౌ॥ భావన 💖 చి॥ అనుష్ కుమార్' : 'Chi. La. Sow. Bhavana 💖 Chi. Anush Kumar'}
          </h3>

          <p className="text-xs sm:text-sm text-[#eed5b0] font-telugu leading-relaxed">
            {isTelugu
              ? 'మా ప్రథమ పుత్రుడు కిరణ్ కుమార్-శారద గార్ల ఏకైక కుమార్తె భావన మరియు మంచిర్యాల వాస్తవ్యులు చకినారపు లావణ్య-అనిల్ కుమార్ గార్ల ప్రథమ పుత్రుడు అనుష్ కుమార్ ల వివాహ శుభ ఘడియలు.'
              : 'Celebrating the sacred wedding ceremony of Bhavana and Anush Kumar as two loving families unite with Vedic traditions and joy.'}
          </p>

          <div className="pt-2 flex flex-wrap gap-2 justify-center md:justify-start text-xs text-[#eed5b0]">
            <span className="px-3 py-1 rounded-full bg-[#1b0306]/80 border border-[#dfb76c]/30">
              📅 03 Dec 2026, 8:56 AM
            </span>
            <span className="px-3 py-1 rounded-full bg-[#1b0306]/80 border border-[#dfb76c]/30">
              📍 Karimnagar
            </span>
          </div>
        </div>
      </motion.div>

      {/* Grid of Two Royal Profile Cards with Individual Avatars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
        {/* Bride Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl bg-gradient-to-b from-[#2d070e] via-[#3a0a14] to-[#1e0408] border-2 border-[#dfb76c]/70 p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex flex-col justify-between group hover:border-[#dfb76c] transition-all duration-300"
        >
          {/* Top Corner Crown Motif */}
          <div className="absolute top-4 right-4 text-xs font-bold text-[#dfb76c] bg-[#1a0306] px-3 py-1 rounded-full border border-[#dfb76c]/40 font-telugu">
            {isTelugu ? 'వధువు' : 'The Bride'}
          </div>

          <div className="space-y-4">
            {/* Real Bride Avatar with Gold Ring - Precision Centered */}
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-[#dfb76c] via-[#ffe599] to-[#996515] p-1 shadow-2xl">
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-[#fff2b3]">
                <img
                  src="/assets/bride_avatar.jpg"
                  alt="Chi. La. Sow. Bhavana"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute bottom-0 right-0 bg-[#dfb76c] text-[#1c0306] p-1.5 rounded-full shadow-lg border border-[#fff2b3]">
                <Heart className="w-3.5 h-3.5 fill-[#1c0306]" />
              </div>
            </div>

            <div>
              <span className="text-xs sm:text-sm text-[#dfb76c] font-telugu font-semibold">
                {content.bride.salutation}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold gold-text-gradient font-telugu mt-0.5">
                {content.bride.name}
              </h3>
              <p className="text-xs text-[#eed5b0] mt-1 font-telugu leading-relaxed">
                {content.bride.description}
              </p>
            </div>

            {/* Lineage Details */}
            <div className="space-y-3 pt-4 border-t border-[#dfb76c]/30 text-xs sm:text-sm text-[#f7e2a9]">
              <div className="flex items-start gap-2.5">
                <span className="text-base text-[#dfb76c]">👨‍👩‍👧</span>
                <div>
                  <span className="text-[#dbba88] text-[11px] block uppercase tracking-wider">
                    {isTelugu ? 'తల్లిదండ్రులు' : 'Parents'}
                  </span>
                  <span className="font-semibold font-telugu">{content.bride.parents}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="text-base text-[#dfb76c]">🏛️</span>
                <div>
                  <span className="text-[#dbba88] text-[11px] block uppercase tracking-wider">
                    {isTelugu ? 'తాతగారు & కుటుంబం' : 'Grandparents'}
                  </span>
                  <span className="font-semibold font-telugu">{content.bride.grandparents}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Building className="w-4 h-4 text-[#dfb76c] mt-0.5 shrink-0" />
                <div>
                  <span className="text-[#dbba88] text-[11px] block uppercase tracking-wider">
                    {isTelugu ? 'వ్యాపార సంస్థ' : 'Family Firm'}
                  </span>
                  <span className="font-semibold font-telugu">{content.bride.familyBusiness}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-dashed border-[#dfb76c]/30 text-center">
            <span className="text-[11px] text-[#dbba88] italic font-telugu">
              {isTelugu ? 'శ్రీ లక్ష్మీ సమానమైన వధువుకు సకల శుభములు' : 'Bestowed with grace, elegance, and divine virtue'}
            </span>
          </div>
        </motion.div>

        {/* Groom Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl bg-gradient-to-b from-[#2d070e] via-[#3a0a14] to-[#1e0408] border-2 border-[#dfb76c]/70 p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex flex-col justify-between group hover:border-[#dfb76c] transition-all duration-300"
        >
          {/* Top Corner Crown Motif */}
          <div className="absolute top-4 right-4 text-xs font-bold text-[#dfb76c] bg-[#1a0306] px-3 py-1 rounded-full border border-[#dfb76c]/40 font-telugu">
            {isTelugu ? 'వరుడు' : 'The Groom'}
          </div>

          <div className="space-y-4">
            {/* Real Groom Avatar with Gold Ring - Precision Centered */}
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-[#dfb76c] via-[#ffe599] to-[#996515] p-1 shadow-2xl">
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-[#fff2b3]">
                <img
                  src="/assets/groom_avatar.jpg"
                  alt="Chi. Anush Kumar"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute bottom-0 right-0 bg-[#dfb76c] text-[#1c0306] p-1.5 rounded-full shadow-lg border border-[#fff2b3]">
                <Heart className="w-3.5 h-3.5 fill-[#1c0306]" />
              </div>
            </div>

            <div>
              <span className="text-xs sm:text-sm text-[#dfb76c] font-telugu font-semibold">
                {content.groom.salutation}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold gold-text-gradient font-telugu mt-0.5">
                {content.groom.name}
              </h3>
              <p className="text-xs text-[#eed5b0] mt-1 font-telugu leading-relaxed">
                {content.groom.description}
              </p>
            </div>

            {/* Lineage Details */}
            <div className="space-y-3 pt-4 border-t border-[#dfb76c]/30 text-xs sm:text-sm text-[#f7e2a9]">
              <div className="flex items-start gap-2.5">
                <span className="text-base text-[#dfb76c]">👨‍👩‍👦</span>
                <div>
                  <span className="text-[#dbba88] text-[11px] block uppercase tracking-wider">
                    {isTelugu ? 'తల్లిదండ్రులు' : 'Parents'}
                  </span>
                  <span className="font-semibold font-telugu">{content.groom.parents}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#dfb76c] mt-0.5 shrink-0" />
                <div>
                  <span className="text-[#dbba88] text-[11px] block uppercase tracking-wider">
                    {isTelugu ? 'నివాసం' : 'Residence'}
                  </span>
                  <span className="font-semibold font-telugu">{content.groom.residence}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="text-base text-[#dfb76c]">✨</span>
                <div>
                  <span className="text-[#dbba88] text-[11px] block uppercase tracking-wider">
                    {isTelugu ? 'వంశ గౌరవం' : 'Heritage'}
                  </span>
                  <span className="font-semibold font-telugu">
                    {isTelugu ? 'చకినారపు వంశ ప్రథమ పుత్రుడు' : 'First Son of Chakinarapu Lineage'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-dashed border-[#dfb76c]/30 text-center">
            <span className="text-[11px] text-[#dbba88] italic font-telugu">
              {isTelugu ? 'శ్రీరామ చంద్రుని సమానుడైన వరునికి శుభాశీస్సులు' : 'Endowed with honor, nobility, and wisdom'}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
