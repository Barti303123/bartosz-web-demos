"use client";

import React, { useEffect, useState } from 'react';
import NavbarEcommerce from '@/components/ecommerce/NavbarEcommerce';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ecommerce/ProductCard';
import { ArrowRight, ShoppingBag } from 'lucide-react';
const MOCK_PRODUCTS = [
  { _id: '1', name: 'Zestaw Premium', slug: 'zestaw-premium', price: 299.99, description: 'Luksusowy zestaw produktów najwyższej jakości, idealny dla wymagających.', imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800' },
  { _id: '2', name: 'Karta Podarunkowa', slug: 'karta-podarunkowa', price: 150.00, description: 'Świetny prezent dla bliskich. Dostępny natychmiastowo online.', imageUrl: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=800' },
  { _id: '3', name: 'Pakiet Standard', slug: 'pakiet-standard', price: 99.99, description: 'Podstawowy pakiet zawierający wszystko, czego potrzebujesz na start.', imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800' },
  { _id: '4', name: 'Usługa VIP', slug: 'usluga-vip', price: 499.00, description: 'Kompleksowa obsługa z najwyższym priorytetem i wsparciem.', imageUrl: 'https://images.unsplash.com/photo-1555529733-0e67056058e1?auto=format&fit=crop&q=80&w=800' }
];

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Symulacja ładowania
    const fetchProducts = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 600));
        setProducts(MOCK_PRODUCTS);
      } catch (error) {
        console.error("Błąd ładowania produktów:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-blue-100 selection:text-blue-900 font-sans flex flex-col">
      <NavbarEcommerce companyName="SUPER SKLEP" phone="+48 500 123 456" email="bartosz.waw@vp.pl" slug="super-sklep-lodz" />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-white border-b border-gray-100 py-20 px-6 sm:px-12 md:px-24">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold tracking-wide">
                Nowa Kolekcja
              </span>
              <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
                SUPER SKLEP - Twój Sklep Internetowy
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
                Najlepsze produkty w sieci. Odkryj naszą nową kolekcję i ciesz się wyjątkową jakością z błyskawiczną dostawą.
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                <a href="#produkty" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-blue-600/20 active:scale-95">
                  <ShoppingBag className="w-5 h-5" />
                  Zobacz Katalog
                </a>
              </div>
            </div>
            <div className="flex-1 w-full relative">
              <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full transform scale-90"></div>
              <img 
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80" 
                alt="Zakupy" 
                className="relative rounded-3xl shadow-2xl border border-gray-100 w-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </section>

        {/* Produkty Section */}
        <section id="produkty" className="py-24 px-6 sm:px-12 md:px-24 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nasze Produkty</h2>
              <div className="w-20 h-1.5 bg-blue-600 rounded-full"></div>
            </div>

            {loading ? (
              <div className="flex justify-center items-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              </div>
            ) : products.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {products.map(product => (
                  <ProductCard key={product._id} product={product} />
                ))}
              </div>
            ) : (
              <div className="bg-white p-12 rounded-2xl shadow-sm border border-gray-100 text-center">
                <ShoppingBag className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Brak produktów</h3>
                <p className="text-gray-500">Sklep jest obecnie aktualizowany. Wróć za chwilę!</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
