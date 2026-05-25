"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, ShieldCheck, Star, Zap, CheckCircle, CalendarDays, Laptop, Clock } from "lucide-react";

// Framer Motion Variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 10 } },
};

const heroHeadlineVariants = {
  hidden: { opacity: 0, y: -50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const heroSubheadlineVariants = {
  hidden: { opacity: 0, y: -30 },
  show: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.8, ease: "easeOut" } },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { delay: 0.4, duration: 0.5, ease: "easeOut" } },
  hover: { scale: 1.05, boxShadow: "0px 0px 12px rgba(255, 255, 255, 0.4)" },
  tap: { scale: 0.95 },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 10 } },
  hover: { scale: 1.02, boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.2)" },
};


export default function Home() {
  const company = {
    name: "Kancelaria Adwokacka Nowak",
    city: "Poznań",
    phone: "600 111 222",
    address: "ul. Półwiejska 10, Poznań",
  };

  const services = [
    {
      icon: CalendarDays,
      title: "Prawo Rodzinne",
      description: "Profesjonalne wsparcie w sprawach rozwodowych, alimentacyjnych, opiekuńczych i podziału majątku.",
    },
    {
      icon: Laptop,
      title: "Prawo Cywilne",
      description: "Reprezentacja w sporach o odszkodowania, sprawy spadkowe, ochronę dóbr osobistych i windykację należności.",
    },
    {
      icon: ShieldCheck,
      title: "Prawo Karne",
      description: "Skuteczna obrona w postępowaniach karnych, reprezentacja pokrzywdzonych i doradztwo prawne.",
    },
    {
      icon: Zap,
      title: "Prawo Gospodarcze",
      description: "Kompleksowa obsługa prawna firm, doradztwo w zakresie umów, fuzji i przejęć, sporów handlowych.",
    },
    {
      icon: MapPin,
      title: "Prawo Nieruchomości",
      description: "Wsparcie w transakcjach kupna/sprzedaży, zasiedzeniu, służebnościach i sporach dotyczących nieruchomości.",
    },
    {
      icon: Clock,
      title: "Prawo Spadkowe",
      description: "Pomoc w sprawach o dziedziczenie, testamenty, zachowek oraz w podziale majątku spadkowego.",
    },
  ];

  const whyUsPoints = [
    {
      icon: ShieldCheck,
      title: "Niezawodność i Bezpieczeństwo",
      description: "Zapewniamy solidne fundamenty prawne, chroniąc Twoje interesy z najwyższą starannością.",
    },
    {
      icon: Star,
      title: "Indywidualne Podejście",
      description: "Każda sprawa jest unikalna. Analizujemy ją dogłębnie, oferując rozwiązania skrojone na miarę Twoich potrzeb.",
    },
    {
      icon: Zap,
      title: "Skuteczność Działania",
      description: "Dążymy do osiągnięcia optymalnych wyników, wykorzystując wiedzę i doświadczenie w każdym aspekcie.",
    },
    {
      icon: CheckCircle,
      title: "Transparentność i Zaufanie",
      description: "Budujemy relacje oparte na otwartości, jasnych zasadach i pełnym zaufaniu na każdym etapie współpracy.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 to-blue-800 text-gray-100 font-sans antialiased">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center min-h-screen overflow-hidden py-24 px-4 md:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/80 to-blue-800/80 backdrop-blur-sm z-0"></div>

        <motion.div
          className="relative z-10 text-center max-w-4xl mx-auto"
          initial="hidden"
          animate="show"
          variants={containerVariants}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight text-white drop-shadow-lg"
            variants={heroHeadlineVariants}
          >
            Prawo po Twojej stronie.
            <br />
            Skuteczność, Zaufanie, Doświadczenie.
          </motion.h1>
          <motion.p
            className="mt-6 text-xl md:text-2xl text-blue-200 font-light max-w-2xl mx-auto"
            variants={heroSubheadlineVariants}
          >
            {company.name} w {company.city} – kompleksowe wsparcie prawne dla klientów indywidualnych i biznesowych.
          </motion.p>
          <motion.a
            href="#contact"
            className="mt-10 inline-block bg-amber-400 text-blue-950 font-bold py-4 px-10 rounded-full text-lg shadow-xl hover:bg-amber-300 transition-colors duration-300"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Umów Bezpłatną Konsultację
          </motion.a>
        </motion.div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 px-4 md:px-8 bg-blue-900/40 border-t border-b border-blue-700">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-4xl md: