import React from 'react';
import { motion } from 'framer-motion';
import { Users, Phone, Building, Home, Heart, Sparkles, MessageCircle } from 'lucide-react';
import { invitationData } from '../data/invitationData';

export default function FamilySection({ lang }) {
  const content = invitationData[lang];
  const isTelugu = lang === 'telugu';

  return (
    <section id="family" className="relative py-20 px-4 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="text-center space-y-3 mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3d0912] border border-[#dfb76c]/40 text-xs font-semibold uppercase tracking-widest text-[#f5d77f]">
          <Users className="w-3.5 h-3.5" />
          <span>{content.invitees.title}</span>
          <Users className="w-3.5 h-3.5" />
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold gold-text-gradient font-telugu">
          {isTelugu ? 'ఆహ్వానించు కుటుంబ సభ్యులు & బంధువులు' : 'Host Family & Well-Wishers'}
        </h2>
        <p className="text-xs sm:text-sm text-[#dbba88] max-w-xl mx-auto font-telugu">
          {isTelugu
            ? 'తామెల్లరు బంధు-మిత్ర సకుటుంబ సపరివార సమేతముగా విచ్చేసి ఆశీర్వదించగలరు'
            : 'Looking forward to receiving you with warm hospitality and celebration'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {/* Primary Host Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-2 rounded-3xl bg-gradient-to-b from-[#2d070e] via-[#3d0a15] to-[#1e0408] border-2 border-[#dfb76c] p-6 sm:p-8 shadow-xl space-y-6 flex flex-col justify-between"
        >
          <div className="space-y-4">
            <div className="inline-block px-3 py-1 rounded-full bg-[#1c0306] border border-[#dfb76c]/50 text-xs font-bold text-[#dfb76c] font-telugu">
              {isTelugu ? 'ముఖ్య ఆహ్వానితులు' : 'Chief Host'}
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#fff3cf] font-telugu">
                {content.invitees.primary}
              </h3>
              <p className="text-base text-[#ffd580] font-telugu mt-1 font-semibold">
                {content.invitees.primarySub}
              </p>
            </div>

            <div className="space-y-2.5 pt-3 border-t border-[#dfb76c]/30 text-xs sm:text-sm text-[#eed5b0]">
              <div className="flex items-start gap-2.5">
                <Building className="w-4 h-4 text-[#dfb76c] mt-0.5 shrink-0" />
                <span className="font-telugu font-semibold">{content.invitees.business}</span>
              </div>

              <div className="flex items-start gap-2.5">
                <Home className="w-4 h-4 text-[#dfb76c] mt-0.5 shrink-0" />
                <span className="font-telugu">{content.invitees.address}</span>
              </div>
            </div>
          </div>

          {/* Quick Call & Contact Options */}
          <div className="pt-4 border-t border-dashed border-[#dfb76c]/40 space-y-3">
            <span className="text-[11px] uppercase tracking-wider text-[#dbba88] block font-semibold">
              {isTelugu ? 'సంప్రదించవలసిన ఫోన్ నంబర్లు' : 'Direct Contact & RSVP Numbers'}
            </span>

            <div className="flex flex-wrap gap-3">
              {content.invitees.phones.map((phone, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <a
                    href={`tel:${phone}`}
                    className="px-4 py-2 rounded-xl bg-[#1b0306] hover:bg-[#3d0912] border border-[#dfb76c]/60 text-[#ffe29a] font-mono text-xs sm:text-sm font-bold flex items-center gap-2 transition active:scale-95 shadow"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#dfb76c]" />
                    <span>{phone}</span>
                  </a>

                  <a
                    href={`https://wa.me/91${phone}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-[#1b4332] hover:bg-[#2d6a4f] text-[#d8f3dc] border border-[#52b788] transition shadow"
                    title={`WhatsApp ${phone}`}
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Kids / Little Hosts Heartfelt Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-3xl bg-gradient-to-b from-[#380911] via-[#4a0d18] to-[#25050b] border-2 border-[#dfb76c] p-6 shadow-xl flex flex-col justify-between text-center relative overflow-hidden group"
        >
          {/* Decorative Corner Flowers */}
          <div className="absolute top-2 right-2 text-xl opacity-60">🌸</div>
          <div className="absolute bottom-2 left-2 text-xl opacity-60">🌼</div>

          <div className="space-y-4 my-auto">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#dfb76c] to-[#996515] p-0.5 mx-auto shadow-md flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-[#20050a] flex items-center justify-center text-xl">
                💝
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#dfb76c] font-semibold block">
                {isTelugu ? 'చిన్నారుల ప్రత్యేక ఆహ్వానం' : 'A Sweet Note From Kids'}
              </span>

              <h4 className="text-lg sm:text-xl font-extrabold text-[#fff3cf] font-telugu leading-snug">
                {content.invitees.kidsInvite}
              </h4>

              <div className="py-2 px-3 rounded-2xl bg-[#1a0306]/80 border border-[#dfb76c]/40">
                <p className="text-base sm:text-lg font-bold gold-text-gradient font-telugu">
                  {content.invitees.kidsNames}
                </p>
                <p className="text-[11px] text-[#dbba88] font-telugu mt-0.5">
                  {isTelugu ? '(మా అక్కయ్య పెళ్ళి సందడికి అందరూ రండి!)' : '(With love & joy from the young cousins!)'}
                </p>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-dashed border-[#dfb76c]/30">
            <p className="text-[11px] text-[#eed5b0] italic font-telugu">
              {isTelugu ? 'మీ రాక మాకెంతో సంతోషం!' : 'Your presence will make our joy complete!'}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Relatives & Near and Dear Greetings Box */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-8 rounded-2xl bg-[#1c0307]/90 border border-[#dfb76c]/40 p-5 sm:p-6 text-center shadow-lg space-y-2"
      >
        <span className="text-xs uppercase tracking-widest text-[#dfb76c] font-semibold block">
          {isTelugu ? 'బంధు-మిత్రుల అభినందనలతో...' : 'With Best Compliments From Near & Dear'}
        </span>
        <p className="text-sm sm:text-base font-telugu text-[#fff2c2] leading-relaxed">
          {content.invitees.familyGreetings}
        </p>
      </motion.div>
    </section>
  );
}

