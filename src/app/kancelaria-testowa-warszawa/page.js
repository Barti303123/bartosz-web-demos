"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, ShieldCheck, Star, Users, CheckCircle, Laptop, CalendarDays, Zap, Wrench, Clock } from "lucide-react";

// Animation variants for a cohesive and premium feel
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Stagger children animations for a smooth entrance
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.05,
    boxShadow: "0px 0px 8px rgba(0,0,0,0.2)",
    transition: {
      duration: 0.3,
      yoyo: Infinity, // Subtle pulse on hover
    },
  },
  tap: {
    scale: 0.95,
  },
};

export default function Home() {
  const companyData = {
    name: "Kancelaria Testowa",
    city: "Warszawa",
    phone: "123 456 789",
    address: "ul. Testowa 1, 00-001 Warszawa",
    email: "kontakt@kancelariatestowa.pl",
    openingHours: "Pn-Pt: 9:00 - 17:00",
  };

  const services = [
    {
      icon: Laptop,
      title: "Prawo Cyfrowe i Nowych Technologii",
      description: "Doradzamy w zakresie RODO, e-commerce, własności intelektualnej w sieci oraz startupów technologicznych.",
    },
    {
      icon: Users,
      title: "Prawo Rodzinne i Spadkowe",
      description: "Kompleksowe wsparcie w sprawach rozwodowych, alimentacyjnych, podziału majątku oraz dziedziczenia.",
    },
    {
      icon: ShieldCheck,
      title: "Prawo Gospodarcze i Handlowe",
      description: "Tworzenie i opiniowanie umów, obsługa korporacyjna spółek, fuzje i przejęcia, windykacja należności.",
    },
    {
      icon: Wrench,
      title: "Prawo Nieruchomości i Budowlane",
      description: "Obsługa transakcji kupna/sprzedaży, najmu, sporów budowlanych oraz regulacji stanu prawnego.",
    },
    {
      icon: CalendarDays,
      title: "Obsługa Prawna Przedsiębiorstw",
      description: "Stała obsługa prawna firm, dopasowana do indywidualnych potrzeb biznesu na każdym etapie rozwoju.",
    },
    {
      icon: Zap,
      title: "Reprezentacja w Sporach Sądowych",
      description: "Skuteczna reprezentacja przed sądami wszystkich instancji oraz organami administracji publicznej.",
    },
  ];

  const whyUsPoints = [
    {
      icon: Star,
      title: "Lokalna Ekspertyza",
      description: "Głębokie zrozumienie specyfiki prawnej i biznesowej Warszawy, co pozwala na precyzyjne doradztwo.",
    },
    {
      icon: ShieldCheck,
      title: "Bezpieczeństwo i Zaufanie",
      description: "Priorytetem jest dla nas budowanie długotrwałych relacji opartych na wzajemnym zaufaniu i dyskrecji.",
    },
    {
      icon: CheckCircle,
      title: "Indywidualne Podejście",
      description: "Każda sprawa jest dla nas unikalna. Rozwiązania szyjemy na miarę Twoich potrzeb i oczekiwań.",
    },
    {
      icon: Users,
      title: "Zespół Doświadczonych Prawników",
      description: "Nasz zespół to wykwalifikowani specjaliści z wieloletnim doświadczeniem w różnych gałęziach prawa.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans antialiased">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        {/* Placeholder for a premium background image - ensure 'public/bg-warsaw.jpg' exists or use a CSS gradient */}
        <div className="absolute inset-0 z-0 opacity-10 bg-[url('/bg-warsaw.jpg')] bg-cover bg-center bg-fixed"></div>
        <div className="absolute inset-0 z-10 bg-black opacity-40"></div> {/* Overlay for text readability */}

        <motion.div
          className="relative z-20 max-w-4xl px-6"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tighter mb-6 drop-shadow-lg"
            variants={textVariants}
          >
            Prawo na Miarę Przyszłości w Sercu Warszawy
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-90 drop-shadow"
            variants={textVariants}
          >
            Kancelaria Testowa: Twój niezawodny partner w świecie prawa. Specjalistyczne doradztwo i skuteczne rozwiązania dla biznesu i klientów indywidualnych.
          </motion.p>
          <motion.a
            href="#contact"
            className="inline-block bg-white text-blue-800 font-bold py-4 px-10 rounded-full text-lg shadow-xl hover:bg-gray-100 transition-all duration-300 transform"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Umów Bezpłatną Konsultację
          </motion.a>
        </motion.div>
      </section>

      {/* Dlaczego my? Section */}
      <section id="why-us" className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-blue-900 leading-tight"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            Dlaczego Kancelaria Testowa to Twój Wybór?
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {whyUsPoints.map((point, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center p-8 bg-gray-50 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <point.icon className="h-16 w-16 text-blue-600 mb-6 drop-shadow-md" strokeWidth={1.5} />
                <h3 className="text-xl font-bold mb-3 text-blue-800">{point.title}</h3>
                <p className="text-gray-600 leading-relaxed">{point.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Grid z usługami Section */}
      <section id="services" className="py-24 bg-gray-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-blue-900 leading-tight"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            Nasze Obszary Specjalizacji
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-start p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-200"
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <service.icon className="h-12 w-12 text-blue-600 mb-6 drop-shadow-md" strokeWidth={1.5} />
                <h3 className="text-2xl font-bold mb-3 text-blue-800 leading-snug">{service.title}</h3>
                <p className="text-gray-700 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer Section */}
      <footer id="contact" className="bg-blue-950 text-gray-200 py-16">
        <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left">
          <motion.div
            className="mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-extrabold text-white mb-4 leading-tight">{companyData.name}</h3>
            <p className="text-gray-400 max-w-xs leading-relaxed">
              Twój partner w sprawach prawnych w sercu Warszawy.
            </p>
          </motion.div>

          <motion.div
            className="mb-8 md:mb-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xl font-bold text-white mb-4">Kontakt</h4>
            <ul className="space-y-3">
              <li className="flex items-center justify-center md:justify-start">
                <Phone className="h-5 w-5 text-blue-400 mr-3" />
                <a href={`tel:${companyData.phone.replace(/\s/g, '')}`} className="hover:text-white transition-colors duration-200">
                  {companyData.phone}
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <MapPin className="h-5 w-5 text-blue-400 mr-3" />
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(companyData.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-200"
                >
                  {companyData.address}
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <Clock className="h-5 w-5 text-blue-400 mr-3" />
                <span>{companyData.openingHours}</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-xl font-bold text-white mb-4">Godziny Otwarcia</h4>
            <p className="text-gray-400">{companyData.openingHours}</p>
            <p className="text-gray-400 mt-6 text-sm">
              &copy; {new Date().getFullYear()} {companyData.name}. Wszelkie prawa zastrzeżone.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}