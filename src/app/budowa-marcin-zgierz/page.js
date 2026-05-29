"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { HardHat, ArrowRight, CheckCircle2, Ruler, Truck, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const hazardStripe = "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(250, 204, 21, 0.1) 10px, rgba(250, 204, 21, 0.1) 20px)";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -300]);

  const slamVariants = {
    hidden: { scale: 1.5, opacity: 0, y: -100 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 200, damping: 15, mass: 1 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const childSlam = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300 } }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 overflow-hidden font-sans selection:bg-yellow-400 selection:text-slate-950" ref={containerRef}>
      <Navbar slug="budowa-marcin-zgierz" companyName="Budowa Marcin" dark={true} />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <motion.img 
            style={{ y: y1 }}
            src="https://images.unsplash.com/photo-1541888086425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Construction Site" 
            className="w-full h-[120%] object-cover opacity-30 grayscale"
          />
          <div className="absolute inset-0 bg-slate-950/70"></div>
          <div className="absolute inset-0" style={{ backgroundImage: hazardStripe }}></div>
        </div>

        {/* Decorative Orbs */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/20 rounded-full blur-[100px] z-0 pointer-events-none"
        />
        <motion.div 
          animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-orange-500/20 rounded-full blur-[120px] z-0 pointer-events-none"
        />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.div variants={slamVariants} className="inline-block mb-4 px-4 py-1 border-l-4 border-yellow-400 bg-slate-900/80 backdrop-blur-md">
              <span className="text-yellow-400 font-bold tracking-widest uppercase text-sm">Solid Foundations. Built to Last.</span>
            </motion.div>
            
            <motion.h1 variants={slamVariants} className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
              <span className="text-white">We Build Your</span><br/>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-yellow-300 to-orange-500">
                Future Today
              </span>
            </motion.h1>
            
            <motion.p variants={childSlam} className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl font-medium border-l-2 border-slate-700 pl-4">
              Budowa Marcin delivers premium Usługi Budowlane services in Zgierz. Uncompromising quality, on time, and on budget.
            </motion.p>
            
            <motion.div variants={childSlam} className="flex flex-col sm:flex-row gap-6">
              <a href="/contact" className="group relative px-8 py-4 bg-yellow-400 text-slate-950 font-black uppercase tracking-wider text-lg overflow-hidden transform hover:-translate-y-1 transition-all">
                <span className="relative z-10 flex items-center">
                  Get a Quote <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                </span>
                <div className="absolute inset-0 h-full w-0 bg-white transition-all duration-300 ease-out group-hover:w-full z-0"></div>
              </a>
              <a href="/about" className="group px-8 py-4 bg-transparent border-4 border-slate-700 text-white font-black uppercase tracking-wider text-lg hover:border-yellow-400 transition-colors flex items-center">
                Our Projects
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 relative bg-slate-900">
        <div className="absolute inset-0" style={{ backgroundImage: hazardStripe, opacity: 0.5 }}></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl"
            >
              <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-4 text-white">
                Our <span className="text-yellow-400">Expertise</span>
              </h2>
              <p className="text-lg text-slate-400 font-medium">Precision engineering and heavy-duty execution for every phase of your project.</p>
            </motion.div>
            <motion.a 
              href="/services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center text-yellow-400 font-bold uppercase tracking-wider hover:text-yellow-300 transition-colors"
            >
              View All Services <ChevronRight className="ml-1" />
            </motion.a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: HardHat, title: "General Contracting", desc: "End-to-end project management from blueprint to final inspection." },
              { icon: Ruler, title: "Design & Build", desc: "Integrated design and construction services streamlining your timeline." },
              { icon: Truck, title: "Heavy Equipment", desc: "Access to top-tier machinery for excavation, grading, and structural work." }
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                whileHover={{ y: -10 }}
                className="group p-8 bg-slate-950 border-4 border-slate-800 hover:border-yellow-400 transition-colors relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-slate-900 rounded-bl-full -z-10 group-hover:bg-yellow-400/10 transition-colors"></div>
                <service.icon className="w-16 h-16 text-yellow-400 mb-6" strokeWidth={1.5} />
                <h3 className="text-2xl font-black uppercase mb-4 text-white group-hover:text-yellow-400 transition-colors">{service.title}</h3>
                <p className="text-slate-400 font-medium">{service.desc}</p>
                <div className="mt-8 flex items-center text-sm font-bold text-slate-500 uppercase tracking-widest group-hover:text-white transition-colors">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats / Why Us with Parallax */}
      <section className="py-32 relative overflow-hidden bg-slate-950">
        <motion.img 
          style={{ y: y2 }}
          src="https://images.unsplash.com/photo-1504307651254-35680f356f58?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="Scaffolding" 
          className="absolute inset-0 w-full h-[150%] object-cover opacity-20 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block mb-4 px-4 py-1 border-l-4 border-yellow-400 bg-slate-900/80 backdrop-blur-md">
                <span className="text-yellow-400 font-bold tracking-widest uppercase text-sm">Why Choose Us</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-8 text-white">
                Built on <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">Trust</span>
              </h2>
              <div className="space-y-6">
                {[
                  "Licensed, bonded, and fully insured",
                  "Over 20 years of combined experience",
                  "Strict adherence to safety standards",
                  "Transparent pricing with no hidden fees"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center p-4 bg-slate-900/50 backdrop-blur-sm border-l-4 border-slate-700 hover:border-yellow-400 transition-colors">
                    <CheckCircle2 className="text-yellow-400 w-6 h-6 mr-4 flex-shrink-0" />
                    <span className="text-lg font-medium text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "250+", label: "Projects Completed" },
                { number: "15+", label: "Years Experience" },
                { number: "100%", label: "Safety Record" },
                { number: "50+", label: "Expert Staff" }
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, type: "spring" }}
                  className="bg-slate-900 p-8 border-4 border-slate-800 text-center relative overflow-hidden group hover:border-yellow-400 transition-colors"
                >
                  <div className="absolute inset-0 bg-yellow-400/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  <h4 className="text-4xl md:text-5xl font-black text-yellow-400 mb-2 relative z-10">{stat.number}</h4>
                  <p className="text-slate-400 font-bold uppercase tracking-wider text-sm relative z-10">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative bg-yellow-400 overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: hazardStripe, opacity: 0.2 }}></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 text-slate-950"
          >
            Ready to break ground?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xl text-slate-800 font-bold mb-10 max-w-2xl mx-auto"
          >
            Contact Budowa Marcin today to discuss your next project in Zgierz.
          </motion.p>
          <motion.a 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/contact" 
            className="inline-block px-12 py-5 bg-slate-950 text-yellow-400 font-black uppercase tracking-widest text-xl border-4 border-slate-950 hover:bg-transparent hover:text-slate-950 transition-colors shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] hover:shadow-none translate-x-[-4px] translate-y-[-4px] hover:translate-x-0 hover:translate-y-0"
          >
            Get Your Estimate
          </motion.a>
        </div>
      </section>

      <Footer companyName="Budowa Marcin" />
    </div>
  );
}
