"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/store/useCart';
import { ArrowLeft, ShoppingCart, Check, PackageCheck, MessageCircle } from 'lucide-react';
import NavbarEcommerce from '@/components/ecommerce/NavbarEcommerce';
import Footer from '@/components/Footer';
import { buildProducts, priceLabel } from '@/lib/shopProducts';
import content from '../../content.json';

const PRODUCTS = buildProducts(content);

export default function ProductDetail() {
  const [product, setProduct] = useState(null);
  const [ready, setReady] = useState(false);
  const [added, setAdded] = useState(false);
  const addItem = useCart((state) => state.addItem);

  useEffect(() => {
    // _id produktu = ostatni segment ścieżki (routing po indeksie).
    const id = window.location.pathname.split('/').filter(Boolean).pop();
    setProduct(PRODUCTS.find(p => p._id === id) || null);
    setReady(true);
  }, []);

  const handleAddToCart = () => {
    if (product) {
      addItem(product);
      setAdded(true);
      setTimeout(() => setAdded(false), 2000);
    }
  };

  if (!ready) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Nie znaleziono produktu</h1>
        <Link href="/flora-sklep-kwiatowy-lodz" className="text-blue-600 hover:underline inline-flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Wróć do sklepu
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col">
      <NavbarEcommerce companyName="Flora Sklep Kwiatowy" phone="+48 555 200 007" email="sklep@florasklep.pl" slug="flora-sklep-kwiatowy-lodz" />

      <main className="flex-grow pt-24 pb-12 px-6 sm:px-12 md:px-24">
        <div className="max-w-6xl mx-auto">
          <Link href="/flora-sklep-kwiatowy-lodz" className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Wróć do wszystkich produktów
          </Link>

          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row">
            {/* Zdjęcie produktu */}
            <div className="w-full md:w-1/2 bg-gray-100 flex-shrink-0">
              {product.imageUrl ? (
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover aspect-square md:aspect-auto"
                />
              ) : (
                <div className="w-full h-full min-h-[400px] flex items-center justify-center text-gray-400">
                  Zdjęcie produktu
                </div>
              )}
            </div>

            {/* Detale produktu */}
            <div className="w-full md:w-1/2 p-8 sm:p-12 flex flex-col justify-center">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
                {product.name}
              </h1>

              <div className="text-3xl font-bold text-blue-600 mb-8">
                {priceLabel(product.price)}
              </div>

              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {product.description}
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-gray-600">
                  <PackageCheck className="w-5 h-5 text-green-500" />
                  <span>Zapytaj o dostępność i termin realizacji</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <MessageCircle className="w-5 h-5 text-blue-500" />
                  <span>Chętnie doradzimy w wyborze</span>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                disabled={added}
                className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all ${
                  added
                    ? 'bg-green-500 text-white cursor-default'
                    : 'bg-gray-900 hover:bg-gray-800 text-white shadow-lg shadow-gray-900/20 active:scale-95'
                }`}
              >
                {added ? (
                  <>
                    <Check className="w-5 h-5" />
                    Dodano do koszyka
                  </>
                ) : (
                  <>
                    <ShoppingCart className="w-5 h-5" />
                    Dodaj do koszyka
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer companyName="Flora Sklep Kwiatowy" />
    </div>
  );
}
