export const metadata = {
  title: "bartosz - Profesjonalne usługi",
  description: "Skontaktuj się z firmą bartosz z miasta Sieradz. Najwyższa jakość w branży: Fitness i Sport.",
  openGraph: {
    title: "bartosz - Usługi",
    description: "Zobacz, co zaoferuje Ci bartosz.",
    type: "website"
  }
};

export default function LeadLayout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "bartosz",
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
