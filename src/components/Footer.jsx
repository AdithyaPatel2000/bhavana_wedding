import React from 'react';
import { ArrowUp, Sparkles } from 'lucide-react';
import { invitationData } from '../data/invitationData';

export default function Footer({ lang }) {
  const content = invitationData[lang];
  const isTelugu = lang === 'telugu';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative mt-20 pt-16 pb-28 px-4 border-t-2 border-[#dfb76c]/40 bg-gradient-to-b from-[#190306] via-[#100103] to-[#0a0102] text-center overflow-hidden">
      {/* Auspicious Golden Kalasam Vector Icon */}
      <div className="flex justify-center mb-6">
        <div className="p-4 rounded-full bg-gradient-to-b from-[#dfb76c]/20 to-transparent border border-[#dfb76c]/50 shadow-[0_0_25px_rgba(223,183,108,0.25)]">
          <span className="text-4xl filter drop-shadow">🪔</span>
        </div>
      </div>

      <div className="max-w-2xl mx-auto space-y-4">
        <div className="flex items-center justify-center gap-3 text-sm font-semibold tracking-widest text-[#f5d77f] font-telugu uppercase">
          <Sparkles className="w-4 h-4 text-[#dfb76c]" />
          <span>{content.auspiciousTop}</span>
          <Sparkles className="w-4 h-4 text-[#dfb76c]" />
        </div>

        <h3 className="text-xl sm:text-2xl font-bold gold-text-gradient font-telugu">
          {isTelugu ? 'ధన్యవాదములు • సకుటుంబ సపరివార సమేతంగా విచ్చేయండి' : 'Heartfelt Thanks • With Best Compliments From All of Us'}
        </h3>

        <p className="text-xs text-[#ddbf88] font-telugu leading-relaxed">
          {isTelugu
            ? 'కాసనగొట్టు మరియు చకినారపు కుటుంబాల తరఫున మీకు, మీ కుటుంబ సభ్యులకు ఇదే మా సాదర ఆహ్వానము.'
            : 'Warmly inviting you on behalf of the Kasanagottu & Chakinarapu Families.'}
        </p>

        {/* Back to top button */}
        <div className="pt-6">
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-[#2d070e] hover:bg-[#480c16] border border-[#dfb76c]/60 text-[#dfb76c] hover:text-white transition shadow-lg active:scale-95 inline-flex items-center justify-center"
            title="Back to Top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>

        <p className="text-[11px] text-[#7a6248] pt-4 font-mono">
          Chi. La. Sow. Bhavana Weds Chi. Anush Kumar • 03-12-2026 • Karimnagar
        </p>
      </div>
    </footer>
  );
}
