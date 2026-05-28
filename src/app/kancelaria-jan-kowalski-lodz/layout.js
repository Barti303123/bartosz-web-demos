export const metadata = {
  title: "Kancelaria Jan Kowalski - Profesjonalne usługi",
  description: "Skontaktuj się z firmą Kancelaria Jan Kowalski z miasta Łódź. Najwyższa jakość w branży: Kancelaria Prawna.",
  openGraph: {
    title: "Kancelaria Jan Kowalski - Usługi",
    description: "Zobacz, co zaoferuje Ci Kancelaria Jan Kowalski.",
    type: "website"
  }
};

export default function LeadLayout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Kancelaria Jan Kowalski",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ul. Główna 1, Łódź",
      "addressLocality": "Łódź"
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
