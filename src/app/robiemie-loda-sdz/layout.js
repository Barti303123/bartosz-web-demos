export const metadata = {
  title: { absolute: "Profesjonalne usługi lokalne" },
  description: "Rzetelne usługi dopasowane do Twoich potrzeb. Lokalnie, terminowo i z dbałością o jakość. Skontaktuj się z nami już dziś.",
  openGraph: {
    title: "Profesjonalne usługi lokalne",
    description: "Rzetelne usługi dopasowane do Twoich potrzeb. Lokalnie, terminowo i z dbałością o jakość. Skontaktuj się z nami już dziś.",
    type: "website"
  }
};

export default function LeadLayout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "ROBIEMIE< LODA",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ul. Główna 1, SDZ",
      "addressLocality": "SDZ"
    },
    "telephone": "6767676767",
    "email": "marczwskipawel1234@gmail.com"
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
