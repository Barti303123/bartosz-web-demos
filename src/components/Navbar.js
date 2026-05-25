"use client";
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ slug, companyName, dark = false }) {
  const [open, setOpen] = useState(false);

  const bg = dark
    ? 'bg-slate-950/80 border-slate-800'
    : 'bg-white/80 border-gray-100';
  const textMain = dark ? 'text-white' : 'text-gray-900';
  const textLink = dark
    ? 'text-slate-300 hover:text-white'
    : 'text-gray-600 hover:text-blue-600';
  const mobileMenuBg = dark ? 'bg-slate-950' : 'bg-white';

  return (
    <nav className={`w-full ${bg} backdrop-blur-md border-b sticky top-0 z-50`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link href={`/${slug}`} className={`text-2xl font-bold ${textMain} tracking-tighter`}>
            {companyName}
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex space-x-8">
            <Link href={`/${slug}`} className={`${textLink} font-medium transition-colors`}>Strona Główna</Link>
            <Link href={`/${slug}/o-nas`} className={`${textLink} font-medium transition-colors`}>O Nas</Link>
            <Link href={`/${slug}/kontakt`} className={`${textLink} font-medium transition-colors`}>Kontakt</Link>
          </div>

          {/* Mobile hamburger */}
          <button onClick={() => setOpen(!open)} className={`md:hidden ${textMain}`}>
            {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className={`md:hidden ${mobileMenuBg} border-t ${dark ? 'border-slate-800' : 'border-gray-100'} pb-4`}>
          <div className="flex flex-col space-y-3 px-4 pt-4">
            <Link href={`/${slug}`} onClick={() => setOpen(false)} className={`${textLink} font-medium py-2 transition-colors`}>Strona Główna</Link>
            <Link href={`/${slug}/o-nas`} onClick={() => setOpen(false)} className={`${textLink} font-medium py-2 transition-colors`}>O Nas</Link>
            <Link href={`/${slug}/kontakt`} onClick={() => setOpen(false)} className={`${textLink} font-medium py-2 transition-colors`}>Kontakt</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
