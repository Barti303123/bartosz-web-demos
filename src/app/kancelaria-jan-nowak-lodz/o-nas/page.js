"use client";

import React from "react";
import { motion } from "framer-motion";
import { Scale, Users, Trophy } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans">
      <Navbar slug="kancelaria-jan-nowak-lodz" companyName="Kancelaria Jan Nowak" dark={true} />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-600/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif text-white mb-6"
          >
            Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">Heritage</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-400 max-w-3xl mx-auto"
          >
            A legacy built on unwavering dedication to truth, justice, and the relentless pursuit of our clients' best interests since our inception in Łódź.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-slate-900 relative">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-slate-700">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" 
                alt="Law Firm Office"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-slate-950/20" />
            </div>
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -bottom-8 -right-8 bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-xl hidden md:block"
            >
              <div className="text-4xl font-serif text-yellow-500 mb-2">100%</div>
              <div className="text-slate-300 font-medium">Commitment</div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-5xl font-serif text-white">Defining Legal Excellence in <span className="text-yellow-500">Łódź</span></h2>
            <p className="text-slate-400 leading-relaxed text-lg">
              At Kancelaria Jan Nowak, we believe that every client deserves access to elite legal representation. Founded on the principles of integrity and tenacity, our firm has grown into a powerhouse recognized for its meticulous preparation and aggressive advocacy in the courtroom.
            </p>
            <p className="text-slate-400 leading-relaxed text-lg">
              Our multidisciplinary team of attorneys brings decades of collective experience, allowing us to handle everything from high-stakes corporate litigation to sensitive family law matters with the same level of precision and care.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              {[
                { label: "Cases Won", value: "2,500+" },
                { label: "Legal Experts", value: "15" },
                { label: "Years Active", value: "25+" },
                { label: "Client Satisfaction", value: "99%" },
              ].map((stat, i) => (
                <div key={i} className="border-l-2 border-yellow-500 pl-4">
                  <div className="text-3xl font-serif text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-500 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-white mb-4">Our Core Values</h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Scale, title: "Integrity", desc: "Uncompromising ethical standards in every case we handle." },
              { icon: Trophy, title: "Excellence", desc: "A relentless pursuit of the best possible outcomes for our clients." },
              { icon: Users, title: "Compassion", desc: "Understanding the human element behind every legal challenge." }
            ].map((val, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="p-8 rounded-2xl bg-slate-900/50 backdrop-blur-md border border-slate-800 text-center hover:bg-slate-800 transition-colors"
              >
                <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <val.icon className="w-8 h-8 text-yellow-500" />
                </div>
                <h3 className="text-2xl font-serif text-white mb-4">{val.title}</h3>
                <p className="text-slate-400">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer companyName="Kancelaria Jan Nowak" />
    </div>
  );
}
