export const metadata = {
  title: { absolute: "Salon urody i pielęgnacji" },
  description: "Profesjonalne zabiegi kosmetyczne i pielęgnacyjne w przyjaznej atmosferze. Zadbaj o siebie — umów wizytę już dziś.",
  openGraph: {
    title: "Salon urody i pielęgnacji",
    description: "Profesjonalne zabiegi kosmetyczne i pielęgnacyjne w przyjaznej atmosferze. Zadbaj o siebie — umów wizytę już dziś.",
    type: "website"
  }
};

export default function LeadLayout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Sanna salon",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ul. Główna 1, Łódź",
      "addressLocality": "Łódź"
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
