export const metadata = {
  title: "Ania Salon - Profesjonalne usługi",
  description: "Skontaktuj się z firmą Ania Salon z miasta Sieradz. Najwyższa jakość w branży: Salon Urody.",
  openGraph: {
    title: "Ania Salon - Usługi",
    description: "Zobacz, co zaoferuje Ci Ania Salon.",
    type: "website"
  }
};

export default function LeadLayout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Ania Salon",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ul. Główna 1, Sieradz",
      "addressLocality": "Sieradz"
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
