"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { HeartPulse, Stethoscope, ShieldCheck, Clock, ArrowRight, Activity, Calendar, Phone } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import content from './content.json';

// Ikony kart atutów — dekoracyjne, cyklowane po indeksie.
const WHY_ICONS = [Clock, Activity, Stethoscope, ShieldCheck];

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <Navbar slug="med-dent-klinika-sieradz" companyName="Med-Dent Klinika" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-50/90 to-blue-50/50 mix-blend-multiply" />
            <img
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000&auto=format&fit=crop"
              alt="Placówka"
              className="w-full h-full object-cover opacity-40"
            />
        </div>

        {/* Decorative Orbs */}
        <motion.div
          animate={{ y: [-15, 15, -15], x: [-10, 10, -10] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-64 h-64 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 z-0 pointer-events-none"
        />
        <motion.div
          animate={{ y: [15, -15, 15], x: [10, -10, 10] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="absolute bottom-10 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 z-0 pointer-events-none"
        />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial="initial"
              animate="animate"
              variants={stagger}
            >
              <motion.div variants={fadeIn} className="flex items-center gap-2 mb-6 text-cyan-600 font-semibold tracking-wide uppercase text-sm">
                <HeartPulse className="w-5 h-5" />
                <span>stomatolog · Sieradz</span>
              </motion.div>
              <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-bold leading-tight mb-8 text-slate-900">
                {content.hero.title}
              </motion.h1>
              <motion.p variants={fadeIn} className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl">
                {content.hero.subtitle}
              </motion.p>

              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
                <a href="/med-dent-klinika-sieradz/kontakt" className="px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white rounded-full font-medium transition-all shadow-lg hover:shadow-cyan-500/30 flex items-center justify-center gap-2">
                  <Calendar className="w-5 h-5" />
                  {content.hero.cta}
                </a>
                <a href="tel:+48 555 200 003" className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 rounded-full font-medium transition-all flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  +48 555 200 003
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Atuty (why_us) - Glassmorphism */}
      <section className="relative z-20 -mt-16 container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6">
          {content.why_us.map((reason, idx) => {
            const Icon = WHY_ICONS[idx % WHY_ICONS.length];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-white/50"
              >
                <div className="mb-6 bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center shadow-inner">
                  <Icon className="w-8 h-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{reason.title}</h3>
                <p className="text-slate-600 leading-relaxed">{reason.description}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* About/Services Preview */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2 relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Zespół"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
              </div>

              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ repeat: Infinity, duration: 5 }}
                className="absolute -bottom-8 -right-8 bg-white p-6 rounded-3xl shadow-xl max-w-xs border border-slate-100"
              >
                <div className="flex items-center gap-4 mb-2">
                  <ShieldCheck className="w-8 h-8 text-cyan-500" />
                  <span className="text-lg font-bold text-slate-800">Zaufanie</span>
                </div>
                <p className="text-slate-600 font-medium">Twoje zdrowie i bezpieczeństwo w Sieradz to nasz priorytet.</p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <h2 className="text-4xl font-bold mb-6 text-slate-900">
                {content.about.heading}
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                {content.about.body}
              </p>

              <ul className="space-y-4 mb-10">
                {content.services.map((service, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700">
                    <div className="w-6 h-6 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0">
                      <HeartPulse className="w-3 h-3 text-cyan-600" />
                    </div>
                    {service.title}
                  </li>
                ))}
              </ul>

              <a href="/med-dent-klinika-sieradz/o-nas" className="flex items-center gap-2 text-cyan-600 font-bold hover:text-cyan-700 transition-colors group">
                Poznaj Pełnię Naszych Usług
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-blue-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{content.contact.heading}</h2>
            <p className="text-blue-100 text-lg mb-10">
              {content.contact.cta}
            </p>
            <a href="/med-dent-klinika-sieradz/kontakt" className="inline-block px-8 py-4 bg-white text-blue-900 rounded-full font-bold text-lg hover:bg-cyan-50 transition-colors shadow-xl">
              {content.hero.cta}
            </a>
          </motion.div>
        </div>
      </section>

      <Footer companyName="Med-Dent Klinika" />
    </div>
  );
}
