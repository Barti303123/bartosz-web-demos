export const metadata = {
  title: "bartosz - Profesjonalne usługi",
  description: "Skontaktuj się z firmą bartosz z miasta Warszawa. Najwyższa jakość w branży: Gastronomia.",
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
      "streetAddress": "ul. Główna 1, Warszawa",
      "addressLocality": "Warszawa"
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
