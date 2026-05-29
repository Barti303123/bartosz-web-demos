export const metadata = {
  title: "Kancelaria Mariusz - Profesjonalne usługi",
  description: "Skontaktuj się z firmą Kancelaria Mariusz z miasta Złoczew. Najwyższa jakość w branży: Kancelaria Prawna.",
  openGraph: {
    title: "Kancelaria Mariusz - Usługi",
    description: "Zobacz, co zaoferuje Ci Kancelaria Mariusz.",
    type: "website"
  }
};

export default function LeadLayout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Kancelaria Mariusz",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ul. Główna 1, Złoczew",
      "addressLocality": "Złoczew"
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
