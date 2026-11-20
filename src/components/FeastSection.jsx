import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, Sparkles } from 'lucide-react';
import { invitationData } from '../data/invitationData';

export default function FeastSection({ lang }) {
  const content = invitationData[lang];
  const isTelugu = lang === 'telugu';

  return (
    <section className="relative py-12 sm:py-16 px-4 max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="rounded-3xl bg-gradient-to-b from-[#25050b] via-[#350811] to-[#1a0306] border-2 border-[#dfb76c]/60 p-6 sm:p-8 text-center space-y-4 shadow-xl"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#1b0306] border border-[#dfb76c]/40 text-xs font-semibold uppercase tracking-widest text-[#f5d77f]">
          <Utensils className="w-3.5 h-3.5" />
          <span>{isTelugu ? 'విందు' : 'LUNCH'}</span>
          <Utensils className="w-3.5 h-3.5" />
        </div>

        <h3 className="text-2xl sm:text-3xl font-extrabold gold-text-gradient font-telugu">
          {isTelugu ? 'విందు: వివాహానంతరము...' : 'LUNCH: Follows...'}
        </h3>

        <p className="text-xs sm:text-sm text-[#eed5b0] max-w-md mx-auto font-telugu leading-relaxed">
          {isTelugu
            ? 'కళ్యాణ వేదిక నందు వివాహానంతరము విందు భోజనం ఏర్పాటు చేయబడినది.'
            : 'Lunch follows immediately after the sacred wedding ceremony at the venue.'}
        </p>

        <div className="pt-2">
          <span className="inline-block px-5 py-2 rounded-2xl bg-[#3d0912]/80 text-[#ffd580] text-xs sm:text-sm font-telugu italic border border-[#dfb76c]/30 shadow">
            {isTelugu
              ? 'భోజన తాంబూలాదులను స్వీకరించి నూతన వధూవరులను ఆశీర్వదించగలరు.'
              : 'Please honor us with your gracious company over the wedding lunch and bless the newly married couple.'}
          </span>
        </div>
      </motion.div>
    </section>
  );
}
