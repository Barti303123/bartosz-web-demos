"use client";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Shield, Scale, Gavel, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      <Navbar slug="kancelaria-testowa-warszawa" companyName="Kancelaria Testowa" />
      <main className="flex-grow">
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 z-0"></div>
          <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
                Bezwzględna Skuteczność <br className="hidden md:block"/> w Świecie Prawa
              </h1>
              <p className="mt-4 text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-light">
                Kancelaria Testowa Warszawa. Ochronimy Twój biznes, zabezpieczymy Twoją przyszłość i wygramy to, co najważniejsze.
              </p>
              
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/kancelaria-testowa-warszawa/kontakt" className="inline-flex justify-center items-center px-8 py-4 text-lg font-semibold rounded-full bg-blue-600 text-white hover:bg-blue-500 transition-colors shadow-lg shadow-blue-500/30">
                  Bezpłatna Konsultacja
                </Link>
                <Link href="/kancelaria-testowa-warszawa/o-nas" className="inline-flex justify-center items-center px-8 py-4 text-lg font-semibold rounded-full bg-white/10 text-white hover:bg-white/20 backdrop-blur-md transition-colors border border-white/20">
                  Poznaj Nasz Zespół
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Dlaczego my?</h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { icon: Shield, title: "Pełne Bezpieczeństwo", desc: "Zabezpieczamy majątek i umowy przed jakimkolwiek ryzykiem prawnym." },
                { icon: Scale, title: "Sprawiedliwość", desc: "Walczymy o Twoje prawa do samego końca. Bez kompromisów." },
                { icon: Gavel, title: "Doświadczenie", desc: "Setki wygranych rozpraw i potężne know-how naszych prawników." }
              ].map((feature, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-xl transition-shadow group"
                >
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="py-20 bg-blue-600">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center px-4"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Gotowy na wygraną?</h2>
            <p className="text-blue-100 text-xl mb-10">Zostaw nam swój problem. My zajmiemy się resztą.</p>
            <Link href="/kancelaria-testowa-warszawa/kontakt" className="inline-flex justify-center items-center px-8 py-4 text-lg font-bold rounded-full bg-white text-blue-600 hover:bg-slate-100 transition-colors shadow-xl">
              Skontaktuj się z nami <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </section>

      </main>
      <Footer companyName="Kancelaria Testowa" />
    </div>
  );
}