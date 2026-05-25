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
  Zap,
  CheckCircle,
  CalendarDays,
} from "lucide-react";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans antialiased">
      {/* Hero Section */}
      <section
        id="hero"
        className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-700 to-blue-900 text-white p-4"
      >
        <div className="absolute inset-0 z-0 opacity-10">
          <Wrench className="w-full h-full object-cover scale-[2] blur-xl" />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Twój Samochód Zasługuje na Najlepszych.
            <br />
            Witaj w <span className="text-blue-200">Autoservis Zgierz</span>.
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-10 opacity-90 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          >
            Profesjonalna mechanika pojazdowa z pasją, precyzją i zaufaniem.
            Dbamy o każdy detal.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          >
            <a
              href="#contact"
              className="px-8 py-4 bg-blue-400 text-blue-900 font-bold rounded-full shadow-lg hover:bg-blue-300 transform hover:scale-105 transition-all duration-300 ease-in-out flex items-center justify-center"
            >
              <CalendarDays className="mr-2" /> Umów Wizytę
            </a>
            <a
              href="#services"
              className="px-8 py-4 bg-transparent border-2 border-blue-300 text-blue-200 font-bold rounded-full shadow-lg hover:bg-blue-800 transform hover:scale-105 transition-all duration-300 ease-in-out flex items-center justify-center"
            >
              <Wrench className="mr-2" /> Nasze Usługi
            </a>
          </motion.div>
        </div>
      </section>

      {/* Dlaczego My? Section */}
      <motion.section
        id="about"
        className="py-20 bg-gradient-to-br from-gray-50 to-gray-100"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold mb-12 text-blue-800"
            variants={itemVariants}
          >
            Dlaczego Klienci Wybierają Autoservis Zgierz?
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-16"
            variants={itemVariants}
          >
            W Autoservis Zgierz stawiamy na jakość, zaufanie i nowoczesne
            rozwiązania. Twoje bezpieczeństwo i komfort jazdy są naszym
            priorytetem.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            variants={sectionVariants}
          >
            {[
              {
                icon: ShieldCheck,
                title: "Gwarancja Jakości",
                description:
                  "Używamy tylko sprawdzonych części i stosujemy najwyższe standardy napraw.",
              },
              {
                icon: Wrench,
                title: "Doświadczeni Mechanicy",
                description:
                  "Nasz zespół to wykwalifikowani specjaliści z wieloletnim doświadczeniem.",
              },
              {
                icon: Laptop,
                title: "Nowoczesna Diagnostyka",
                description:
                  "Precyzyjnie wykrywamy usterki dzięki zaawansowanemu sprzętowi diagnostycznemu.",
              },
              {
                icon: CheckCircle,
                title: "Transparentność Kosztów",
                description:
                  "Zawsze informujemy o zakresie prac i kosztach przed rozpoczęciem naprawy.",
              },
              {
                icon: Zap,
                title: "Szybka Realizacja",
                description:
                  "Staramy się, aby Twój samochód wrócił na drogę najszybciej, jak to możliwe.",
              },
              {
                icon: Clock,
                title: "Punktualność",
                description:
                  "Szanujemy Twój czas, dotrzymujemy ustalonych terminów.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-all duration-300 ease-in-out border border-blue-100"
                variants={itemVariants}
              >
                <feature.icon className="w-12 h-12 text-blue-600 mb-6 mx-auto" />
                <h3 className="text-2xl font-bold mb-4 text-blue-700">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Services Grid Section */}
      <motion.section
        id="services"
        className="py-20 bg-gradient-to-br from-blue-50 to-blue-100"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold mb-12 text-blue-800"
            variants={itemVariants}
          >
            Pełen Zakres Usług dla Twojego Pojazdu
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-16"
            variants={itemVariants}
          >
            Od rutynowych przeglądów po skomplikowane naprawy – Twój samochód
            jest w dobrych rękach.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={sectionVariants}
          >
            {[
              {
                icon: Laptop,
                title: "Diagnostyka Komputerowa",
                description:
                  "Precyzyjna identyfikacja usterek z użyciem najnowocześniejszego sprzętu diagnostycznego.",
              },
              {
                icon: Wrench,
                title: "Serwis Hamulców",
                description:
                  "Kompleksowa wymiana i naprawa układów hamulcowych, zapewniająca Twoje bezpieczeństwo.",
              },
              {
                icon: Droplet,
                title: "Wymiana Oleju i Filtrów",
                description:
                  "Profesjonalna wymiana płynów eksploatacyjnych dla optymalnej pracy silnika.",
              },
              {
                icon: Car,
                title: "Naprawy Zawieszenia",
                description:
                  "Przywrócimy komfort i stabilność jazdy Twojemu autu, eliminując niepożądane drgania.",
              },
              {
                icon: CalendarDays,
                title: "Przeglądy Okresowe",
                description:
                  "Kompleksowe przeglądy gwarantujące długie i bezproblemowe użytkowanie pojazdu.",
              },
              {
                icon: Wrench,
                title: "Układ Wydechowy",
                description:
                  "Naprawy i wymiana elementów układu wydechowego, redukcja hałasu i emisji.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 transform hover:translate-y-[-5px] transition-all duration-300 ease-in-out border border-blue-200"
                variants={itemVariants}
              >
                <service.icon className="w-14 h-14 text-blue-700 mb-6 mx-auto" />
                <h3 className="text-2xl font-bold mb-4 text-blue-800">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Contact / Footer Section */}
      <motion.section
        id="contact"
        className="py-20 bg-gradient-to-br from-blue-700 to-blue-900 text-white"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold mb-12 text-blue-200"
            variants={itemVariants}
          >
            Skontaktuj się z Nami
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto mb-16"
            variants={itemVariants}
          >
            Jesteśmy gotowi odpowiedzieć na Twoje pytania i umówić wizytę.
            Zadbaj o swój samochód już dziś!
          </motion.p>

          <motion.div
            className="flex flex-col md:flex-row justify-center items-center gap-10 mb-16"
            variants={sectionVariants}
          >
            <motion.div
              className="bg-blue-800 bg-opacity-70 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-blue-600 transform hover:scale-105 transition-all duration-300 ease-in-out"
              variants={itemVariants}
            >
              <Phone className="w-12 h-12 text-blue-300 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Telefon</h3>
              <a
                href="tel:+48427151842"
                className="text-2xl font-bold text-blue-100 hover:underline"
              >
                +48 42 715 18 42
              </a>
            </motion.div>

            <motion.div
              className="bg-blue-800 bg-opacity-70 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-blue-600 transform hover:scale-105 transition-all duration-300 ease-in-out"
              variants={itemVariants}
            >
              <MapPin className="w-12 h-12 text-blue-300 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Adres</h3>
              <a
                href="https://maps.google.com/?q=Piątkowska,+Zgierz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-bold text-blue-100 hover:underline"
              >
                Piątkowska, Zgierz
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-12 text-blue-300 text-lg"
            variants={itemVariants}
          >
            <Clock className="inline-block mr-2 w-6 h-6" />
            Godziny otwarcia: Pon-Pt 8:00-17:00
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p>&copy; {new Date().getFullYear()} Autoservis Zgierz. Wszelkie prawa zastrzeżone.</p>
          <p className="mt-2 text-sm">
            Zaprojektowano z pasją przez elitarnych deweloperów.
          </p>
        </div>
      </footer>
    </div>
  );
}