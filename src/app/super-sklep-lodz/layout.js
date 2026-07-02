export const metadata = {
  title: "SUPER SKLEP - Profesjonalne usługi",
  description: "Skontaktuj się z firmą SUPER SKLEP z miasta Łódź. Najwyższa jakość w branży: Kancelaria Prawna.",
  openGraph: {
    title: "SUPER SKLEP - Usługi",
    description: "Zobacz, co zaoferuje Ci SUPER SKLEP.",
    type: "website"
  }
};

export default function LeadLayout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "SUPER SKLEP",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ul. Główna 1, Łódź",
      "addressLocality": "Łódź"
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
