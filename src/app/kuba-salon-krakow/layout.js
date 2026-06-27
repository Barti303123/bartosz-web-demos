export const metadata = {
  title: "Kuba salon - Profesjonalne usługi",
  description: "Skontaktuj się z firmą Kuba salon z miasta Kraków. Najwyższa jakość w branży: Salon Urody.",
  openGraph: {
    title: "Kuba salon - Usługi",
    description: "Zobacz, co zaoferuje Ci Kuba salon.",
    type: "website"
  }
};

export default function LeadLayout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Kuba salon",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ul. Główna 1, Kraków",
      "addressLocality": "Kraków"
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
