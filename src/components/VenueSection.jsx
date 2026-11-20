import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Copy, Check, ExternalLink, Sparkles, Car } from 'lucide-react';
import { invitationData } from '../data/invitationData';

export default function VenueSection({ lang }) {
  const content = invitationData[lang];
  const isTelugu = lang === 'telugu';
  const [copied, setCopied] = useState(false);

  const googleMapsUrl = 'https://www.google.com/maps/search/?api=1&query=Konda+Satyalaxmi+Gardens+Karimnagar';

  const handleCopy = () => {
    navigator.clipboard.writeText(content.venue.fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="venue" className="relative py-20 px-4 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="text-center space-y-3 mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3d0912] border border-[#dfb76c]/40 text-xs font-semibold uppercase tracking-widest text-[#f5d77f]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{content.venue.title}</span>
          <Sparkles className="w-3.5 h-3.5" />
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold gold-text-gradient font-telugu">
          {isTelugu ? 'కళ్యాణ వేదిక & మార్గదర్శక వివరాలు' : 'Wedding Venue & Directions'}
        </h2>
        <p className="text-xs sm:text-sm text-[#dbba88] max-w-xl mx-auto font-telugu">
          {isTelugu
            ? 'బంధు-మిత్రులందరూ సకాలంలో విచ్చేసి నూతన వధూవరులను ఆశీర్వదించగలరు'
            : 'We welcome you and your family to join us at the royal celebration'}
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="rounded-3xl bg-gradient-to-b from-[#2b060d] via-[#3a0a14] to-[#1c0408] border-2 border-[#dfb76c] p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] space-y-8"
      >
        <div className="flex flex-col md:flex-row items-center gap-8 justify-between">
          <div className="space-y-4 text-center md:text-left flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1b0306] border border-[#dfb76c]/40 text-[11px] text-[#dfb76c] uppercase font-semibold">
              <MapPin className="w-3.5 h-3.5" />
              <span>{isTelugu ? 'ప్రధాన వేదిక' : 'Official Venue'}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#fff3cf] font-telugu">
              {content.venue.name}
            </h3>

            <div className="space-y-1 text-sm text-[#eed5b0] font-telugu">
              <p className="text-base text-[#ffe082] font-semibold">{content.venue.landmark}</p>
              <p>{content.venue.road}</p>
              <p className="text-xs text-[#ddbf88]">{content.venue.fullAddress}</p>
            </div>

            {/* Travel Assistance Pills */}
            <div className="pt-2 flex flex-wrap gap-2 justify-center md:justify-start text-xs text-[#dbba88]">
              <span className="px-3 py-1 rounded-full bg-[#1b0306]/80 border border-[#dfb76c]/30 flex items-center gap-1.5">
                <Car className="w-3.5 h-3.5 text-[#dfb76c]" />
                {isTelugu ? 'హైదరాబాద్ రోడ్ పై సులభ ప్రవేశం' : 'Prime Location on Hyd Highway'}
              </span>
              <span className="px-3 py-1 rounded-full bg-[#1b0306]/80 border border-[#dfb76c]/30">
                🅿️ {isTelugu ? 'విశాలమైన పార్కింగ్ సదుపాయం' : 'Spacious Valet & Parking'}
              </span>
            </div>
          </div>

          {/* Interactive Action Buttons */}
          <div className="flex flex-col gap-3 w-full md:w-auto shrink-0">
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full bg-gradient-to-r from-[#dfb76c] via-[#ffe599] to-[#c59b27] text-[#220408] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:brightness-110 transition active:scale-95"
            >
              <Navigation className="w-4 h-4 text-[#220408]" />
              <span>{isTelugu ? 'Google Maps లో మార్గాన్ని చూడండి' : 'Open in Google Maps'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={handleCopy}
              className="px-6 py-3.5 rounded-full bg-[#3d0912] hover:bg-[#570c1a] border border-[#dfb76c]/60 text-[#f7e2a9] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow transition active:scale-95"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-green-400" />
                  <span className="text-green-300">{isTelugu ? 'చిరునామా కాపీ చేయబడింది!' : 'Address Copied!'}</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#dfb76c]" />
                  <span>{isTelugu ? 'చిరునామాను కాపీ చేయండి' : 'Copy Full Address'}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Visual Map Stylized Representation */}
        <div className="relative rounded-2xl overflow-hidden border border-[#dfb76c]/40 bg-[#160205] p-6 text-center shadow-inner">
          <div className="flex flex-col items-center justify-center space-y-3 py-6">
            <div className="w-16 h-16 rounded-full bg-[#dfb76c]/10 border-2 border-[#dfb76c] flex items-center justify-center animate-bounce">
              <MapPin className="w-8 h-8 text-[#dfb76c]" />
            </div>
            <div>
              <p className="text-base sm:text-lg font-bold text-[#fff1b8] font-telugu">
                {content.venue.name} • {content.venue.landmark}
              </p>
              <p className="text-xs text-[#eed5b0] mt-1 font-telugu">
                {content.venue.road}
              </p>
            </div>
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#dfb76c] hover:underline underline-offset-4 flex items-center gap-1 font-semibold"
            >
              <span>{isTelugu ? 'లైవ్ లొకేషన్ మరియు నావిగేషన్ కోసం ఇక్కడ నొక్కండి' : 'Tap to start live turn-by-turn navigation'}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

