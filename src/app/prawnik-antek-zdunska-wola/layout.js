export const metadata = {
  title: "prawnik antek - Profesjonalne usługi",
  description: "Skontaktuj się z firmą prawnik antek z miasta Zduńska wola. Najwyższa jakość w branży: Kancelaria Prawna.",
  openGraph: {
    title: "prawnik antek - Usługi",
    description: "Zobacz, co zaoferuje Ci prawnik antek.",
    type: "website"
  }
};

export default function LeadLayout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "prawnik antek",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ul. Główna 1, Zduńska wola",
      "addressLocality": "Zduńska wola"
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
