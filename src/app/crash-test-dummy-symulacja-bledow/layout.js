export const metadata = {
  title: "🤖 Crash Test Dummy - Profesjonalne usługi",
  description: "Skontaktuj się z firmą 🤖 Crash Test Dummy z miasta Symulacja Błędów. Najwyższa jakość w branży: Test CRON.",
  openGraph: {
    title: "🤖 Crash Test Dummy - Usługi",
    description: "Zobacz, co zaoferuje Ci 🤖 Crash Test Dummy.",
    type: "website"
  }
};

export default function LeadLayout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "🤖 Crash Test Dummy",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ul. Główna 1, Symulacja Błędów",
      "addressLocality": "Symulacja Błędów"
    },
    "telephone": "+48 500 123 456",
    "email": "crash@test"
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
