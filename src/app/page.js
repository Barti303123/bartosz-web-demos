"use client";

import { motion } from "framer-motion";
import {
  Wrench,
  Car,
  ShieldCheck,
  MapPin,
  Phone,
  Clock,
  Laptop,
  Oil,
  Disc,
  Snowflake,
  Tractor, // Changed from Tyre for a more robust mechanic feel
  BatteryCharging, // Added for more service variety
  ScrollText, // For diagnostic reports
  CheckCircle, // For "Dlaczego My?" points
  Star, // For premium service
  CalendarDays, // For booking
} from "lucide-react";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerChildrenVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeInSlideUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const scaleIn = {
  hidden: { scale: 0.9, opacity: 0 },
  show: { scale: 1, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
};

const services = [
  {
    icon: Laptop,
    title: "Precyzyjna Diagnostyka Komputerowa",
    description:
      "Wykrywamy usterki z chirurgiczną dokładnością, oszczędzając Twój czas i pieniądze.",
  },
  {
    icon: Oil,
    title: "Kompleksowa Wymiana Oleju i Filtrów",
    description:
      "Zapewnij swojemu silnikowi długie życie dzięki regularnej, profesjonalnej wymianie płynów.",
  },
  {
    icon: Disc,
    title: "Serwis Układu Hamulcowego",
    description:
      "Bezpieczeństwo przede wszystkim. Gwarantujemy sprawność i niezawodność Twoich hamulców.",
  },
  {
    icon: Snowflake,
    title: "Profesjonalny Serwis Klimatyzacji",
    description:
      "Ciesz się komfortem podróży i świeżym powietrzem dzięki sprawnej klimatyzacji.",
  },
  {
    icon: Tractor, // Using Tractor for a general robust vehicle maintenance feel
    title: "Wulkanizacja i Wymiana Opon",
    description:
      "Odpowiednie ogumienie to podstawa. Zadbaj o przyczepność i bezpieczeństwo na drodze.",
  },
  {
    icon: BatteryCharging,
    title: "Kontrola i Wymiana Akumulatora",
    description:
      "Uniknij nieprzyjemnych niespodzianek. Sprawdzimy i wymienimy akumulator, gdy zajdzie potrzeba.",
  },
];

const features = [
  {
    icon: CheckCircle,
    title: "Doświadczenie i Wiedza",
    description:
      "Nasz zespół to wykwalifikowani mechanicy z wieloletnim doświadczeniem, gotowi sprostać każdemu wyzwaniu.",
  },
  {
    icon: ScrollText,
    title: "Transparentność i Uczciwość",
    description:
      "Zawsze przedstawiamy jasny kosztorys i dokładnie objaśniamy zakres prac przed ich rozpoczęciem.",
  },
  {
    icon: Star,
    title: "Nowoczesne Wyposażenie",
    description:
      "Inwestujemy w najnowsze technologie diagnostyczne i naprawcze, aby zapewnić najwyższą jakość usług.",
  },
  {
    icon: ShieldCheck,
    title: "Gwarancja Satysfakcji",
    description:
      "Zależy nam na Twoim zaufaniu. Oferujemy gwarancję na wykonane usługi i użyte części.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 text-gray-800 font-sans antialiased">
      {/* Hero Section */}
      <motion.section
        className="relative flex items-center justify-center min-h-screen py-24 md:py-32 overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800 text-white"
        initial="hidden"
        animate="show"
        variants={containerVariants}
      >
        <div className="absolute inset-0 z-0 opacity-10">
          <Wrench className="w-full h-full object-cover scale-150 transform rotate-45" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tighter mb-6 drop-shadow-lg"
            variants={itemVariants}
          >
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-white">
              Twój Samochód w Najlepszych Rękach
            </span>
            <span className="block text-blue-200 text-4xl md:text-6xl mt-2">
              w Sercu Łodzi
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 opacity-90 font-light"
            variants={itemVariants}
          >
            Precyzja, zaufanie i nowoczesna technologia – w Mechanik Łódź
            dbamy o każdy detal, byś mógł cieszyć się bezpieczną i komfortową
            jazdą.
          </motion.p>

          <motion.a
            href="#contact"
            className="inline-flex items-center px-10 py-4 text-lg md:text-xl font-semibold bg-white text-blue-700 rounded-full shadow-xl hover:bg-blue-100 hover:scale-105 transition-all duration-300 ease-in-out transform group"
            variants={itemVariants}
          >
            Umów Wizytę Już Dziś
            <CalendarDays className="ml-3 h-6 w-6 group-hover:rotate-6 transition-transform duration-300" />
          </motion.a>
        </div>
      </motion.section>

      {/* Dlaczego My? Section */}
      <motion.section
        id="about"
        className="py-20 md:py-32 bg-white relative overflow-hidden"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerChildrenVariants}
      >
        <div className="absolute -top-10 -left-10 w-48 h-48 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 leading-tight"
            variants={fadeInSlideUp}
          >
            Dlaczego Wybrać <span className="text-blue-600">Mechanik Łódź</span>?
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl max-w-3xl mx-auto mb-16 text-gray-600"
            variants={fadeInSlideUp}
          >
            Wyróżniamy się pasją do motoryzacji i niezachwianym zobowiązaniem
            do doskonałości. Oto co sprawia, że jesteśmy Twoim najlepszym
            wyborem w Łodzi.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 backdrop-blur-sm bg-opacity-80"
                variants={itemVariants}
              >
                <feature.icon className="h-12 w-12 text-blue-600 mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Services Grid Section */}
      <motion.section
        id="services"
        className="py-20 md:py-32 bg-gradient-to-br from-blue-50 to-gray-100 relative overflow-hidden"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerChildrenVariants}
      >
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 leading-tight"
            variants={fadeInSlideUp}
          >
            Nasze Usługi –{" "}
            <span className="text-blue-700">Kompleksowa Opieka</span>
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl max-w-3xl mx-auto mb-16 text-gray-600"
            variants={fadeInSlideUp}
          >
            Od rutynowych przeglądów po zaawansowaną diagnostykę – oferujemy pełen
            zakres usług, by Twój pojazd zawsze był w idealnej kondycji.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 flex flex-col items-center text-center backdrop-blur-sm bg-opacity-90 group"
                variants={scaleIn}
              >
                <div className="relative flex items-center justify-center h-20 w-20 mb-6 bg-blue-100 rounded-full group-hover:bg-blue-600 transition-colors duration-300">
                  <service.icon className="h-10 w-10 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  <div className="absolute inset-0 rounded-full bg-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Contact / Footer Section */}
      <motion.footer
        id="contact"
        className="bg-gray-900 text-gray-200 py-16 md:py-24 relative overflow-hidden"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerChildrenVariants}
      >
        <div className="absolute inset-0 z-0 opacity-10">
          <Car className="w-full h-full object-cover scale-150 transform -rotate-12" />
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold mb-6 text-white leading-tight"
            variants={fadeInSlideUp}
          >
            Skontaktuj się z <span className="text-blue-400">Nami</span>
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl max-w-3xl mx-auto mb-12 text-gray-400"
            variants={fadeInSlideUp}
          >
            Jesteśmy gotowi, by odpowiedzieć na Twoje pytania i pomóc z każdym
            problemem mechanicznym. Czekamy na Twój telefon lub wizytę!
          </motion.p>

          <motion.div
            className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mb-12"
            variants={containerVariants}
          >
            <motion.div
              className="flex items-center text-left"
              variants={itemVariants}
            >
              <Phone className="h-8 w-8 text-blue-400 mr-4 flex-shrink-0" />
              <div>
                <p className="text-sm text-gray-400 font-medium">Telefon</p>
                <a
                  href="tel:500123456"
                  className="text-xl font-semibold text-white hover:text-blue-400 transition-colors"
                >
                  500 123 456
                </a>
              </div>
            </motion.div>
            <motion.div
              className="flex items-center text-left"
              variants={itemVariants}
            >
              <MapPin className="h-8 w-8 text-blue-400 mr-4 flex-shrink-0" />
              <div>
                <p className="text-sm text-gray-400 font-medium">Adres</p>
                <a
                  href="https://maps.google.com/?q=ul.+Przykładowa+1,+Łódź"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-semibold text-white hover:text-blue-400 transition-colors"
                >
                  ul. Przykładowa 1, Łódź
                </a>
              </div>
            </motion.div>
            <motion.div
              className="flex items-center text-left"
              variants={itemVariants}
            >
              <Clock className="h-8 w-8 text-blue-400 mr-4 flex-shrink-0" />
              <div>
                <p className="text-sm text-gray-400 font-medium">Godziny Pracy</p>
                <p className="text-xl font-semibold text-white">
                  Pon-Pt: 8:00 - 17:00
                </p>
                <p className="text-sm text-gray-400">Sob: 9:00 - 14:00</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-16 border-t border-gray-800 pt-8"
            variants={fadeInSlideUp}
          >
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Mechanik Łódź. Wszelkie prawa
              zastrzeżone.
            </p>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
}