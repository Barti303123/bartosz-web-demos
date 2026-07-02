export const metadata = {
  title: "Trener Marcin - Profesjonalne usługi",
  description: "Skontaktuj się z firmą Trener Marcin z miasta Warszawa. Najwyższa jakość w branży: Fitness i Sport.",
  openGraph: {
    title: "Trener Marcin - Usługi",
    description: "Zobacz, co zaoferuje Ci Trener Marcin.",
    type: "website"
  }
};

export default function LeadLayout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Trener Marcin",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ul. Główna 1, Warszawa",
      "addressLocality": "Warszawa"
    },
    "telephone": "+48 500 123 456",
    "email": "farti303pg@gmail.com"
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
