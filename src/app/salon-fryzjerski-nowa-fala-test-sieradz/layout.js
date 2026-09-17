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
    "name": "Salon Fryzjerski Nowa Fala (TEST)",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ul. Główna 1, Sieradz",
      "addressLocality": "Sieradz"
    },
    "telephone": "+48 600 111 222",
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
