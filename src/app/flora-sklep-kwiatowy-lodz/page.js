"use client";

import React from 'react';
import NavbarEcommerce from '@/components/ecommerce/NavbarEcommerce';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ecommerce/ProductCard';
import { ShoppingBag } from 'lucide-react';
import { buildProducts } from '@/lib/shopProducts';
import content from './content.json';

export default function Home() {
  const products = buildProducts(content);

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-blue-100 selection:text-blue-900 font-sans flex flex-col">
      <NavbarEcommerce companyName="Flora Sklep Kwiatowy" phone="+48 555 200 007" email="sklep@florasklep.pl" slug="flora-sklep-kwiatowy-lodz" />

      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-white border-b border-gray-100 py-20 px-6 sm:px-12 md:px-24">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold tracking-wide">
                kwiaciarnia · Łódź
              </span>
              <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
                {content.hero.title}
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
                {content.hero.subtitle}
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                <a href="#produkty" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-blue-600/20 active:scale-95">
                  <ShoppingBag className="w-5 h-5" />
                  {content.hero.cta}
                </a>
              </div>
            </div>
            <div className="flex-1 w-full relative">
              <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full transform scale-90"></div>
              <img
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80"
                alt="Sklep"
                className="relative rounded-3xl shadow-2xl border border-gray-100 w-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </section>

        {/* Produkty Section */}
        <section id="produkty" className="py-24 px-6 sm:px-12 md:px-24 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nasza oferta</h2>
              <div className="w-20 h-1.5 bg-blue-600 rounded-full"></div>
            </div>

            {products.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {products.map(product => (
                  <ProductCard key={product._id} product={product} />
                ))}
              </div>
            ) : (
              <div className="bg-white p-12 rounded-2xl shadow-sm border border-gray-100 text-center">
                <ShoppingBag className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Brak produktów</h3>
                <p className="text-gray-500">Oferta jest obecnie aktualizowana. Wróć za chwilę!</p>
              </div>
            )}
          </div>
        </section>

        {/* O nas Section */}
        <section id="o-nas" className="py-24 px-6 sm:px-12 md:px-24 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{content.about.heading}</h2>
            <div className="w-20 h-1.5 bg-blue-600 rounded-full mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 leading-relaxed">{content.about.body}</p>
          </div>
        </section>
      </main>

      <Footer companyName="Flora Sklep Kwiatowy" />
    </div>
  );
}
