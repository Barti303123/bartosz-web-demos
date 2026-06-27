"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Mail } from 'lucide-react';
import CartIcon from './CartIcon';

export default function NavbarEcommerce({ companyName = 'Twój Sklep', phone = '+48 500 123 456', email = 'kontakt@sklep.pl', slug = '' }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const basePath = slug ? `/${slug}` : '';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-24 flex items-center justify-between">
        
        <Link href={basePath || '/'} className="flex items-center gap-2 relative z-50">
          <span className={`text-2xl font-black tracking-tight ${isScrolled ? 'text-gray-900' : 'text-gray-900'} transition-colors`}>
            {companyName}
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href={`${basePath}/#produkty`} className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Katalog</Link>
          <Link href={`${basePath}/#o-nas`} className="text-gray-600 hover:text-blue-600 font-medium transition-colors">O nas</Link>
          <a href={`tel:${phone}`} className="flex items-center gap-2 text-gray-600 hover:text-blue-600 font-medium transition-colors">
            <Phone className="w-4 h-4" />
            {phone}
          </a>
          
          <div className="pl-4 border-l border-gray-200">
             <CartIcon slug={slug} />
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4 relative z-50">
          <CartIcon slug={slug} />
          <button 
            className={`p-2 ${isMobileMenuOpen ? 'text-gray-900' : 'text-gray-900'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      } md:hidden flex flex-col pt-24 px-6`}>
        <div className="flex flex-col gap-6 text-xl font-medium">
          <Link 
            href={`${basePath}/#produkty`}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-2xl font-bold text-gray-900"
          >
            Katalog
          </Link>
          <Link 
            href={`${basePath}/#o-nas`}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-2xl font-bold text-gray-900"
          >
            O nas
          </Link>
        </div>
        
        <div className="mt-auto pb-12 space-y-6">
          <a href={`tel:${phone}`} className="flex items-center gap-3 text-gray-600">
            <Phone className="w-5 h-5 text-blue-600" />
            <span>{phone}</span>
          </a>
          <a href={`mailto:${email}`} className="flex items-center gap-3 text-gray-600">
            <Mail className="w-5 h-5 text-blue-600" />
            <span>{email}</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
