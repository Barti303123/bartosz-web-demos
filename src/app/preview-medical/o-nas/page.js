"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, HeartPulse, Activity, CheckCircle2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function About() {
  const teamMembers = [
    {
      name: "Dr. Sarah Jenkins",
      role: "Dyrektor Medyczny",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "Dr. Michael Chen",
      role: "Ordynator Chirurgii",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "Dr. Emily Roberts",
      role: "Kierownik Oddziału Pediatrii",
      image: "https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

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
                Poświęceni <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600">Doskonałości Klinicznej</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                W Podgląd Szablonu naszą misją jest zapewnienie społeczności Warszawa bezkompromisowych usług z zakresu Testowa Branża w pełnym empatii, najnowocześniejszym środowisku.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-10 shadow-lg border border-slate-100 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Activity className="w-32 h-32" />
              </div>
              <div className="w-14 h-14 bg-cyan-50 rounded-2xl flex items-center justify-center mb-6 text-cyan-600">
                <Award className="w-7 h-7" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-slate-900">Nasza Misja</h2>
              <p className="text-slate-600 leading-relaxed">
                Dostarczanie kompleksowej, skoncentrowanej na pacjencie opieki poprzez innowacyjne praktyki medyczne i niezachwiane zaangażowanie w poprawę zdrowia i dobrostanu każdego, komu służymy.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl p-10 shadow-lg border border-slate-100 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <HeartPulse className="w-32 h-32" />
              </div>
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
                <Users className="w-7 h-7" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-slate-900">Nasza Wizja</h2>
              <p className="text-slate-600 leading-relaxed">
                Być wiodącą instytucją z zakresu Testowa Branża w Warszawa, rozpoznawalną dzięki wybitnym wynikom klinicznym, zaawansowanej integracji technologicznej i niezrównanej satysfakcji pacjentów.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-cyan-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Dlaczego Wybrać Podgląd Szablonu</h2>
            <p className="text-cyan-100 max-w-2xl mx-auto">Kierujemy się zestawem fundamentalnych wartości, które gwarantują każdemu pacjentowi opiekę na najwyższym poziomie.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Empatia", desc: "Traktujemy każdego z empatią i życzliwością." },
              { title: "Integralność", desc: "Podtrzymujemy najwyższe standardy etyczne we wszystkich naszych działaniach." },
              { title: "Innowacyjność", desc: "Wdrażamy nowe technologie, aby podnosić jakość opieki nad pacjentem." }
            ].map((value, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
              >
                <CheckCircle2 className="w-10 h-10 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-cyan-100">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">Poznaj Naszych <span className="text-cyan-600">Specjalistów</span></h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Ekspercka opieka zaczyna się od ekspertów. Nasz zespół jest oddany Twojemu zdrowiu.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 group"
              >
                <div className="h-80 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-8 text-center bg-white relative z-10">
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">{member.name}</h3>
                  <p className="text-cyan-600 font-medium">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer companyName="Podgląd Szablonu" />
    </div>
  );
}