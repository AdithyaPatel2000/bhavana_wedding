import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';

export default function BlessingsSection({ lang, blessingCount, onShowerBlessings }) {
  const isTelugu = lang === 'telugu';

  return (
    <section id="blessings" className="relative py-16 sm:py-20 px-4 max-w-4xl mx-auto">
      {/* Section Header */}
      <div className="text-center space-y-3 mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3d0912] border border-[#dfb76c]/40 text-xs font-semibold uppercase tracking-widest text-[#f5d77f]">
          <Heart className="w-3.5 h-3.5 fill-[#dfb76c] text-[#dfb76c]" />
          <span>{isTelugu ? 'అక్షతలు & దివ్యాశీస్సులు' : 'Sacred Blessings'}</span>
          <Heart className="w-3.5 h-3.5 fill-[#dfb76c] text-[#dfb76c]" />
        </div>

        <h2 className="text-2xl sm:text-4xl font-extrabold gold-text-gradient font-telugu">
          {isTelugu ? 'నూతన వధూవరులను ఆశీర్వదించండి' : 'Shower Your Holy Blessings'}
        </h2>

        <p className="text-xs sm:text-sm text-[#dbba88] max-w-xl mx-auto font-telugu">
          {isTelugu
            ? 'పసుపు అక్షింతలు, పూల వర్షం కురిపించి భావన & అనుష్ లకు మీ అమూల్యమైన దివ్యాశీస్సులను అందజేయండి'
            : 'Tap the button to shower sacred Akshintalu and fragrant flower petals on Bhavana & Anush Kumar'}
        </p>
      </div>

      {/* Grand Ceremonial Akshintalu Blessing Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="rounded-3xl bg-gradient-to-b from-[#2f070f] via-[#480c18] to-[#1f0409] border-2 border-[#dfb76c] p-6 sm:p-10 text-center shadow-[0_20px_50px_rgba(0,0,0,0.6)] space-y-6"
      >
        <div className="flex flex-col items-center justify-center space-y-5">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onShowerBlessings}
            className="group relative px-6 sm:px-10 py-4 sm:py-5 rounded-full bg-gradient-to-r from-[#dfb76c] via-[#ffe599] to-[#c59b27] text-[#1c0306] font-extrabold text-sm sm:text-lg uppercase tracking-wider shadow-[0_10px_35px_rgba(223,183,108,0.5)] border-2 border-[#fff3b0] flex items-center justify-center gap-2 sm:gap-3 cursor-pointer select-none"
          >
            <Sparkles className="w-5 h-5 text-[#1c0306] animate-spin-slow" />
            <span className="font-telugu font-bold">
              {isTelugu ? 'అక్షింతలు వేసి ఆశీర్వదించండి' : 'Shower Holy Akshintalu & Petals'}
            </span>
            <Sparkles className="w-5 h-5 text-[#1c0306] animate-spin-slow" />

            {/* Glowing ring animation */}
            <div className="absolute inset-0 rounded-full border-2 border-[#dfb76c] animate-ping opacity-30 pointer-events-none"></div>
          </motion.button>

          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#1b0306]/90 border border-[#dfb76c]/50 text-xs sm:text-sm text-[#ffe082]">
            <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
            <span className="font-bold font-mono text-sm sm:text-base">{blessingCount.toLocaleString()}</span>
            <span className="font-telugu">
              {isTelugu ? 'దివ్యాశీస్సులు సమర్పించబడ్డాయి' : 'Blessings Showered on the Couple'}
            </span>
          </div>
        </div>

        {/* Auspicious Shloka Benediction */}
        <div className="pt-4 border-t border-dashed border-[#dfb76c]/30 max-w-xl mx-auto space-y-1.5">
          <p className="text-sm sm:text-base font-bold gold-text-gradient font-telugu">
            {isTelugu ? 'సర్వేజనాః సుఖినోభవంతు • సమస్త సన్మంగళాని భవంతు' : 'May the couple be blessed with eternal love, harmony, and joy!'}
          </p>
          <p className="text-xs text-[#eed5b0] italic font-telugu">
            {isTelugu
              ? 'నూరేళ్ల దాంపత్య సుఖసంతోషాలతో, సకల ఐశ్వర్యాలతో వర్ధిల్లాలని నిండు మనసుతో ఆశీర్వదించగలరు.'
              : 'Wishing Chi. La. Sow. Bhavana and Chi. Anush Kumar a blissful and prosperous married life.'}
          </p>
        </div>
      </motion.div>
    </section>
  );
}
