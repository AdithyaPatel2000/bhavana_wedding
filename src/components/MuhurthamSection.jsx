import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Star, Bell, Download, ExternalLink, Sparkles } from 'lucide-react';
import { invitationData } from '../data/invitationData';

export default function MuhurthamSection({ lang }) {
  const content = invitationData[lang];
  const isTelugu = lang === 'telugu';

  // Target date: Dec 3, 2026, 08:56:00 IST (UTC+5:30)
  const targetDate = new Date('2026-12-03T08:56:00+05:30').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleAddToGoogleCalendar = () => {
    // 20261203T032600Z (8:56 AM IST is 03:26 UTC)
    const title = encodeURIComponent(
      isTelugu ? 'చి॥ల॥సౌ॥ భావన & చి॥ అనుష్ కుమార్ గార్ల వివాహ మహోత్సవం' : 'Wedding of Bhavana & Anush Kumar'
    );
    const details = encodeURIComponent(
      isTelugu
        ? 'కొండ సత్యలక్ష్మి గార్డెన్స్, NTR విగ్రహం దగ్గర, హైదరాబాద్ రోడ్, కరీంనగర్ లో జరుగు వివాహ మహోత్సవ సుముహూర్తం.'
        : 'Royal Wedding Ceremony at Konda Satyalaxmi Gardens, Near NTR Statue, Karimnagar.'
    );
    const location = encodeURIComponent('Konda Satyalaxmi Gardens, Karimnagar, Telangana');
    const dates = '20261203T032600Z/20261203T083000Z';

    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
    window.open(url, '_blank');
  };

  const handleDownloadICS = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Bhavana Anush Wedding//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
UID:bhavana-anush-wedding-2026@kasanagottu.com
DTSTAMP:20261120T000000Z
DTSTART:20261203T032600Z
DTEND:20261203T090000Z
SUMMARY:Wedding: Bhavana & Anush Kumar
DESCRIPTION:Auspicious Sumuhurtham at Konda Satyalaxmi Gardens, Near NTR Statue, Karimnagar.
LOCATION:Konda Satyalaxmi Gardens, Hyderabad Road, Karimnagar, Telangana
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'Bhavana_Anush_Wedding.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="muhurtham" className="relative py-20 px-4 max-w-5xl mx-auto">
      {/* Background Mandala */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
        <div className="w-[600px] h-[600px] rounded-full border-8 border-[#dfb76c] border-dotted animate-spin-slow"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative rounded-3xl bg-gradient-to-b from-[#2e070e] via-[#460c16] to-[#1f0409] border-2 border-[#dfb76c] p-6 sm:p-10 shadow-[0_25px_60px_rgba(0,0,0,0.7)] text-center space-y-8"
      >
        {/* Ornate Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1c0306] border border-[#dfb76c]/40 text-xs font-semibold uppercase tracking-widest text-[#f5d77f]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{content.sumuhurtham.label}</span>
            <Sparkles className="w-3.5 h-3.5" />
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold gold-text-gradient font-telugu">
            {isTelugu ? 'శుభ సుముహూర్తం & జ్యోతిష వివరాలు' : 'Auspicious Sumuhurtham & Panchangam'}
          </h2>

          <p className="text-xs sm:text-sm text-[#e8c07d] max-w-2xl mx-auto font-telugu leading-relaxed">
            {content.panchangamIntro}
          </p>
        </div>

        {/* Highlighted Time & Date Pill */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          <div className="p-4 rounded-2xl bg-[#1c0306]/90 border border-[#dfb76c]/50 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#dfb76c] to-[#996515] p-0.5 flex items-center justify-center shrink-0">
              <div className="w-full h-full rounded-xl bg-[#2b050b] flex items-center justify-center">
                <Calendar className="w-6 h-6 text-[#dfb76c]" />
              </div>
            </div>
            <div className="text-left">
              <span className="text-[11px] uppercase tracking-wider text-[#dfb76c] block font-semibold">
                {isTelugu ? 'తేది & వారము' : 'Date & Day'}
              </span>
              <span className="text-base sm:text-lg font-bold text-[#fff3cf] font-telugu">
                {content.sumuhurtham.dateFormatted}
              </span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#1c0306]/90 border border-[#dfb76c]/50 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#dfb76c] to-[#996515] p-0.5 flex items-center justify-center shrink-0">
              <div className="w-full h-full rounded-xl bg-[#2b050b] flex items-center justify-center">
                <Clock className="w-6 h-6 text-[#dfb76c]" />
              </div>
            </div>
            <div className="text-left">
              <span className="text-[11px] uppercase tracking-wider text-[#dfb76c] block font-semibold">
                {isTelugu ? 'సుముహూర్త సమయము' : 'Auspicious Time'}
              </span>
              <span className="text-base sm:text-lg font-bold text-[#fff3cf] font-telugu">
                {content.sumuhurtham.time}
              </span>
            </div>
          </div>
        </div>

        {/* Astrological Pillars */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-2xl mx-auto text-xs text-[#eed5b0]">
          <div className="p-3 rounded-xl bg-[#1b0306]/60 border border-[#dfb76c]/30">
            <span className="text-[#dbba88] block text-[10px] uppercase">
              {isTelugu ? 'నక్షత్రము' : 'Nakshathram'}
            </span>
            <span className="font-bold text-[#fff2a8] font-telugu mt-0.5 block">
              {isTelugu ? 'ఉత్తరా నక్షత్రం' : 'Uttara Nakshathram'}
            </span>
          </div>

          <div className="p-3 rounded-xl bg-[#1b0306]/60 border border-[#dfb76c]/30">
            <span className="text-[#dbba88] block text-[10px] uppercase">
              {isTelugu ? 'లగ్నము' : 'Lagnam'}
            </span>
            <span className="font-bold text-[#fff2a8] font-telugu mt-0.5 block">
              {isTelugu ? 'ధనస్సు లగ్నం' : 'Dhanassu Lagnam'}
            </span>
          </div>

          <div className="col-span-2 sm:col-span-1 p-3 rounded-xl bg-[#1b0306]/60 border border-[#dfb76c]/30">
            <span className="text-[#dbba88] block text-[10px] uppercase">
              {isTelugu ? 'అంశ' : 'Amsha'}
            </span>
            <span className="font-bold text-[#fff2a8] font-telugu mt-0.5 block">
              {isTelugu ? 'పుష్కరాంశ' : 'Pushkaramsha'}
            </span>
          </div>
        </div>

        {/* Live Animated Countdown Timer */}
        <div className="space-y-4 pt-4 border-t border-[#dfb76c]/30">
          <span className="text-xs uppercase tracking-widest text-[#f5d77f] font-semibold block">
            {isTelugu ? 'కళ్యాణ మహోత్సవానికి ఇంకా సమయం' : 'Countdown to Auspicious Union'}
          </span>

          <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-lg mx-auto">
            {/* Days */}
            <div className="p-3 sm:p-4 rounded-2xl bg-gradient-to-b from-[#200408] to-[#120204] border border-[#dfb76c]/60 shadow-lg">
              <span className="text-2xl sm:text-4xl font-extrabold gold-text-gradient font-mono block">
                {String(timeLeft.days).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs text-[#ddbf88] uppercase tracking-wider block mt-1 font-semibold">
                {isTelugu ? 'రోజులు' : 'Days'}
              </span>
            </div>

            {/* Hours */}
            <div className="p-3 sm:p-4 rounded-2xl bg-gradient-to-b from-[#200408] to-[#120204] border border-[#dfb76c]/60 shadow-lg">
              <span className="text-2xl sm:text-4xl font-extrabold gold-text-gradient font-mono block">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs text-[#ddbf88] uppercase tracking-wider block mt-1 font-semibold">
                {isTelugu ? 'గంటలు' : 'Hours'}
              </span>
            </div>

            {/* Minutes */}
            <div className="p-3 sm:p-4 rounded-2xl bg-gradient-to-b from-[#200408] to-[#120204] border border-[#dfb76c]/60 shadow-lg">
              <span className="text-2xl sm:text-4xl font-extrabold gold-text-gradient font-mono block">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs text-[#ddbf88] uppercase tracking-wider block mt-1 font-semibold">
                {isTelugu ? 'నిమిషాలు' : 'Mins'}
              </span>
            </div>

            {/* Seconds */}
            <div className="p-3 sm:p-4 rounded-2xl bg-gradient-to-b from-[#200408] to-[#120204] border border-[#dfb76c]/60 shadow-lg">
              <span className="text-2xl sm:text-4xl font-extrabold gold-text-gradient font-mono block">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs text-[#ddbf88] uppercase tracking-wider block mt-1 font-semibold">
                {isTelugu ? 'సెకన్లు' : 'Secs'}
              </span>
            </div>
          </div>
        </div>

        {/* Add to Calendar Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
          <button
            onClick={handleAddToGoogleCalendar}
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#dfb76c] to-[#b8860b] text-[#1c0306] font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg hover:brightness-110 transition active:scale-95"
          >
            <Calendar className="w-4 h-4 text-[#1c0306]" />
            <span>{isTelugu ? 'Google క్యాలెండర్ లో భద్రపరచండి' : 'Add to Google Calendar'}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={handleDownloadICS}
            className="px-5 py-2.5 rounded-full bg-[#3d0912] hover:bg-[#570c1a] border border-[#dfb76c]/60 text-[#f7e2a9] font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow transition active:scale-95"
          >
            <Download className="w-4 h-4 text-[#dfb76c]" />
            <span>{isTelugu ? 'క్యాలెండర్ ఫైల్ (.ics)' : 'Download iCal / Outlook'}</span>
          </button>
        </div>
      </motion.div>
    </section>
  );
}

