"use client";

import { motion } from "framer-motion";
import {
  Phone,
  MapPin,
  Wrench,
  Car,
  Laptop,
  Droplet,
  Clock,
  ShieldCheck,
  Star,
  CheckCircle,
  CalendarDays,
  Zap,
} from "lucide-react";

// Company Data
const companyData = {
  name: "Mechanik Łódź",
  city: "Łódź",
  phone: "500 123 456",
  address: "ul. Przykładowa 1, Łódź",
  email: "kontakt@mechaniklodz.pl", // Added email for completeness
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const heroTitleVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const heroSubtitleVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
  },
};

const buttonVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 200, damping: 10, delay: 0.6 },
  },
};

export default function Home() {
  const services = [
    {
      icon: Laptop,
      title: "Diagnostyka Komputerowa",
      description:
        "Precyzyjne wykrywanie usterek dzięki zaawansowanym systemom diagnostycznym.",
    },
    {
      icon: Droplet,
      title: "Wymiana Oleju i Płynów",
      description:
        "Kompleksowa wymiana oleju, filtrów oraz wszystkich płynów eksploatacyjnych.",
    },
    {
      icon: Wrench,
      title: "Serwis Hamulców i Zawieszenia",
      description:
        "Profesjonalne naprawy i konserwacja układów hamulcowych oraz zawieszenia.",
    },
    {
      icon: Car,
      title: "Przeglądy Okresowe",
      description:
        "Regularne przeglądy zapewniające długą żywotność i bezpieczeństwo Twojego pojazdu.",
    },
    {
      icon: Zap,
      title: "Naprawy Elektryki Samochodowej",
      description:
        "Rozwiązywanie problemów z instalacją elektryczną, akumulatorem i alternatorami.",
    },
    {
      icon: CalendarDays,
      title: "Przygotowanie do Badania Technicznego",
      description:
        "Kompleksowe sprawdzenie pojazdu i przygotowanie do obowiązkowego badania technicznego.",
    },
  ];

  const whyUsPoints = [
    {
      icon: ShieldCheck,
      title: "Zaufanie i Bezpieczeństwo",
      description:
        "Stawiamy na transparentność i uczciwość, abyś zawsze czuł się pewnie.",
    },
    {
      icon: Star,
      title: "Doświadczenie i Profesjonalizm",
      description:
        "Lata praktyki i zespół wykwalifikowanych mechaników to gwarancja najwyższej jakości.",
    },
    {
      icon: Wrench,
      title: "Nowoczesne Technologie",
      description:
        "Inwestujemy w najnowsze narzędzia i sprzęt diagnostyczny dla precyzyjnych napraw.",
    },
    {
      icon: Clock,
      title: "Szybka i Sprawna Obsługa",
      description:
        "Cenimy Twój czas, dlatego dbamy o efektywność i terminowość naszych usług.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 antialiased overflow-x-hidden">
      {/* Hero Section */}
      <motion.section
        className="relative flex items-center justify-center min-h-[70vh] md:min-h-[80vh] bg-gradient-to-br from-blue-700 to-blue-900 text-white p-6 overflow-hidden shadow-2xl"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="absolute inset-0 z-0 opacity-10">
          <svg
            className="w-full h-full"
            fill="none"
            viewBox="0 0 1200 800"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="grid"
                width="80"
                height="80"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 80 0 L 0 0 L 0 80"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.5"
                  opacity="0.1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-4 drop-shadow-lg"
            variants={heroTitleVariants}
          >
            Twój Samochód Zasługuje na Najlepszych.
          </motion.h1>
          <motion.p
            className="text-xl sm:text-2xl lg:text-3xl font-light mb-8 opacity-90 drop-shadow-md"
            variants={heroSubtitleVariants}
          >
            <span className="font-semibold text-sky-200">Mechanik Łódź</span>{" "}
            – Perfekcja w Każdym Detalu.
          </motion.p>
          <motion.a
            href={`tel:${companyData.phone.replace(/\s/g, "")}`}
            className="inline-flex items-center px-8 py-4 bg-sky-500 hover:bg-sky-600 text-white text-lg font-semibold rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-sky-300 focus:ring-opacity-75"
            variants={buttonVariants}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
            whileTap={{ scale: 0.95 }}
          >
            <Phone className="mr-3 h-5 w-5" />
            Zadzwoń i Umów Wizytę
          </motion.a>
        </div>
      </motion.section>

      {/* Why Us Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-12 text-gray-900"
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            Dlaczego Wybrać <span className="text-blue-600">Mechanik Łódź</span>?
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {whyUsPoints.map((point, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center p-8 bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-100"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="p-4 bg-blue-100 rounded-full mb-6 text-blue-600">
                  <point.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {point.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-100 to-gray-200">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-14 text-gray-900"
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            Nasze Usługi –{" "}
            <span className="text-blue-600">Kompleksowa Opieka</span> Nad
            Twoim Pojazdem
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="relative bg-white rounded-xl shadow-xl overflow-hidden group border border-blue-200"
                variants={itemVariants}
                whileHover={{ y: -8, boxShadow: "0 15px 30px rgba(0,0,0,0.15)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-8">
                  <div className="flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-6 shadow-md group-hover:bg-blue-700 transition-colors duration-300">
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact / Footer Section */}
      <section className="py-20 px-6 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold mb-10 text-white"
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            Gotowy na Bezproblemową Jazdę?
          </motion.h2>
          <motion.p
            className="text-xl font-light mb-12 max-w-2xl mx-auto opacity-90"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Skontaktuj się z nami już dziś, aby umówić wizytę lub uzyskać
            fachową poradę. Jesteśmy tu, aby pomóc!
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-6 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.a
              href={`tel:${companyData.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-opacity-75"
              variants={buttonVariants}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="mr-3 h-5 w-5" />
              {companyData.phone}
            </motion.a>
            <motion.a
              href={`https://maps.google.com/?q=${encodeURIComponent(
                companyData.address
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gray-700 hover:bg-gray-600 text-white text-lg font-semibold rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-500 focus:ring-opacity-75"
              variants={buttonVariants}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              <MapPin className="mr-3 h-5 w-5" />
              {companyData.address}
            </motion.a>
          </motion.div>

          <div className="border-t border-gray-700 pt-10 text-gray-400 text-sm">
            <p className="mb-2">
              &copy; {new Date().getFullYear()} {companyData.name}. Wszelkie
              prawa zastrzeżone.
            </p>
            <p>Stworzone z pasją do motoryzacji w {companyData.city}.</p>
          </div>
        </div>
      </section>
    </div>
  );
}