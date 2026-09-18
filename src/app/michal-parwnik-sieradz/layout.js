export const metadata = {
  title: { absolute: "Kancelaria prawna — profesjonalna pomoc" },
  description: "Rzetelne doradztwo i reprezentacja prawna. Indywidualne podejście, dyskrecja i jasne warunki współpracy. Umów konsultację.",
  openGraph: {
    title: "Kancelaria prawna — profesjonalna pomoc",
    description: "Rzetelne doradztwo i reprezentacja prawna. Indywidualne podejście, dyskrecja i jasne warunki współpracy. Umów konsultację.",
    type: "website"
  }
};

export default function LeadLayout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Michał parwnik",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ul. Główna 1, sieradz",
      "addressLocality": "sieradz"
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
