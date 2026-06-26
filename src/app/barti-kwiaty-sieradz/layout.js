export const metadata = {
  title: "Barti Kwiaty - Profesjonalne usługi",
  description: "Skontaktuj się z firmą Barti Kwiaty z miasta Sieradz. Najwyższa jakość w branży: Salon Urody.",
  openGraph: {
    title: "Barti Kwiaty - Usługi",
    description: "Zobacz, co zaoferuje Ci Barti Kwiaty.",
    type: "website"
  }
};

export default function LeadLayout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Barti Kwiaty",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ul. Główna 1, Sieradz",
      "addressLocality": "Sieradz"
    },
    "telephone": "+48 500 123 456",
    "email": "Twojego maila"
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
