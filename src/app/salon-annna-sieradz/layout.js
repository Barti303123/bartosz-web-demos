export const metadata = {
  title: "Salon annna - Profesjonalne usługi",
  description: "Skontaktuj się z firmą Salon annna z miasta Sieradz. Najwyższa jakość w branży: Salon Urody.",
  openGraph: {
    title: "Salon annna - Usługi",
    description: "Zobacz, co zaoferuje Ci Salon annna.",
    type: "website"
  }
};

export default function LeadLayout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Salon annna",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ul. Główna 1, Sieradz",
      "addressLocality": "Sieradz"
    },
    "telephone": "+48 500 123 456",
    "email": "bartosz.waw@vp.pl"
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
