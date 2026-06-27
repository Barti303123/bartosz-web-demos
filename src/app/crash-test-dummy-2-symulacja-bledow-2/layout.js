export const metadata = {
  title: "🤖 Crash Test Dummy 2 - Profesjonalne usługi",
  description: "Skontaktuj się z firmą 🤖 Crash Test Dummy 2 z miasta Symulacja Błędów 2. Najwyższa jakość w branży: Test CRON.",
  openGraph: {
    title: "🤖 Crash Test Dummy 2 - Usługi",
    description: "Zobacz, co zaoferuje Ci 🤖 Crash Test Dummy 2.",
    type: "website"
  }
};

export default function LeadLayout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "🤖 Crash Test Dummy 2",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ul. Główna 1, Symulacja Błędów 2",
      "addressLocality": "Symulacja Błędów 2"
    },
    "telephone": "+48 500 123 456",
    "email": "calkowicie_popsuty_adres_bez_malpy"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      {children}
    </>
  );
}
