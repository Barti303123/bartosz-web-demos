"use client";

import { CheckCircle, ShieldCheck, Phone, MapPin } from "lucide-react";

export default function Home() {
  const company = {
    name: "Kancelaria Adwokacka Nowak",
    city: "Poznań",
    phone: "600 111 222",
    address: "ul. Półwiejska 10, Poznań",
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <section className="bg-slate-900 text-white py-24 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Skuteczna Pomoc Prawna.</h1>
        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
          {company.name} z miasta {company.city} to zespół ekspertów, którzy ochronią Twoje interesy.
        </p>
        <button className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-8 rounded-lg">
          Skontaktuj się z nami
        </button>
      </section>

      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Dlaczego My?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 flex items-start gap-4">
            <ShieldCheck className="w-8 h-8 text-blue-600 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-xl mb-2">Bezpieczeństwo</h3>
              <p className="text-slate-600">Pełna dyskrecja i ochrona Twoich danych osobowych to u nas standard.</p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 flex items-start gap-4">
            <CheckCircle className="w-8 h-8 text-blue-600 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-xl mb-2">Skuteczność</h3>
              <p className="text-slate-600">Wieloletnie doświadczenie przekłada się na wysoką wygrywalność spraw.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-slate-400 py-12 text-center border-t border-slate-800">
        <div className="flex justify-center gap-6 mb-6">
          <span className="flex items-center gap-2"><Phone className="w-5 h-5"/> {company.phone}</span>
          <span className="flex items-center gap-2"><MapPin className="w-5 h-5"/> {company.address}</span>
        </div>
        <p>© 2026 {company.name}. Wszelkie prawa zastrzeżone.</p>
      </footer>
    </div>
  );
}