"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, HeartPulse, Activity, CheckCircle2, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import content from '../content.json';

// Ikony kart usług — dekoracyjne, cyklowane po indeksie.
const SERVICE_ICONS = [Award, HeartPulse, Users, Activity];

export default function About() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <Navbar slug="preview-medical" companyName="Podgląd Szablonu" />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-white overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-cyan-50 to-transparent opacity-50" />

        <motion.div
          animate={{ y: [-15, 15, -15] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="absolute -top-20 -right-20 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 pointer-events-none"
        />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">
                {content.about.heading}
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                {content.about.body}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Zakres usług */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">Zakres <span className="text-cyan-600">usług</span></h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Kompleksowa opieka dopasowana do potrzeb pacjenta.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.services.map((service, i) => {
              const Icon = SERVICE_ICONS[i % SERVICE_ICONS.length];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 3) * 0.1 }}
                  className="bg-white rounded-3xl p-10 shadow-lg border border-slate-100 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-8 opacity-5">
                    <Activity className="w-32 h-32" />
                  </div>
                  <div className="w-14 h-14 bg-cyan-50 rounded-2xl flex items-center justify-center mb-6 text-cyan-600">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-900">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Dlaczego my (why_us) */}
      <section className="py-20 bg-cyan-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Dlaczego warto nam zaufać</h2>
            <p className="text-cyan-100 max-w-2xl mx-auto">Wartości, które gwarantują każdemu pacjentowi opiekę na najwyższym poziomie.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {content.why_us.map((reason, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
              >
                <CheckCircle2 className="w-10 h-10 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
                <p className="text-cyan-100">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center bg-white rounded-3xl p-12 shadow-lg border border-slate-100"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">{content.contact.heading}</h2>
            <p className="text-slate-600 text-lg mb-8">{content.contact.cta}</p>
            <a href="/preview-medical/kontakt" className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white rounded-full font-medium transition-all shadow-lg hover:shadow-cyan-500/30">
              {content.hero.cta}
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer companyName="Podgląd Szablonu" />
    </div>
  );
}
