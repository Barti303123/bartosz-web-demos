"use client";

import React, { useEffect, useState } from 'react';
import NavbarEcommerce from '@/components/ecommerce/NavbarEcommerce';
import Footer from '@/components/Footer';
import { useCart } from '@/store/useCart';
import { Trash2, ArrowRight, ShoppingBag, Plus, Minus } from 'lucide-react';
import Link from 'next/link';

export default function Cart() {
  const { items, removeItem, updateQuantity, getCartTotal } = useCart();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col">
      <NavbarEcommerce companyName="Podgląd Szablonu" phone="+48 123 456 789" email="test@podglad.pl" slug="preview-ecommerce" />
      
      <main className="flex-grow pt-24 pb-12 px-6 sm:px-12 md:px-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <ShoppingBag className="w-8 h-8 text-blue-600" />
            Twój Koszyk
          </h1>

          {items.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 text-center shadow-sm border border-gray-100">
              <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="w-10 h-10 text-gray-300" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Twój koszyk jest pusty</h2>
              <p className="text-gray-500 mb-6">Wygląda na to, że nie dodałeś jeszcze żadnych produktów.</p>
              <Link href="/preview-ecommerce" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors">
                Wróć do sklepu
              </Link>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Lista produktów */}
              <div className="flex-grow space-y-4">
                {items.map((item) => (
                  <div key={item._id} className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col sm:flex-row items-center gap-6">
                    <div className="w-24 h-24 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0">
                      {item.imageUrl ? (
                        <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">Brak</div>
                      )}
                    </div>
                    
                    <div className="flex-grow text-center sm:text-left">
                      <h3 className="font-bold text-gray-900 text-lg">{item.name}</h3>
                      <p className="text-blue-600 font-bold mt-1">{item.price.toFixed(2)} zł</p>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg p-1">
                        <button 
                          onClick={() => updateQuantity(item._id, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-white hover:text-gray-900 rounded shadow-sm transition-all"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-10 text-center font-medium">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item._id, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-white hover:text-gray-900 rounded shadow-sm transition-all"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      
                      <button 
                        onClick={() => removeItem(item._id)}
                        className="p-2 text-red-400 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors"
                        title="Usuń z koszyka"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Podsumowanie */}
              <div className="w-full lg:w-96 flex-shrink-0">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 pb-4 border-b border-gray-100">Podsumowanie zamówienia</h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-gray-600">
                      <span>Wartość produktów</span>
                      <span>{getCartTotal().toFixed(2)} zł</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Dostawa</span>
                      <span className="text-green-600 font-medium">Darmowa</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center py-4 border-t border-gray-100 mb-6">
                    <span className="font-bold text-gray-900 text-lg">Do zapłaty</span>
                    <span className="font-extrabold text-blue-600 text-2xl">{getCartTotal().toFixed(2)} zł</span>
                  </div>

                  <button className="w-full flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white py-4 rounded-xl font-bold text-lg transition-colors">
                    Przejdź do kasy
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  
                  <p className="text-xs text-gray-400 text-center mt-4">
                    Płatności są bezpiecznie przetwarzane przez Stripe.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
