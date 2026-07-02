export const metadata = {
  title: "SUPER SKLEP JACEK - Profesjonalne usługi",
  description: "Skontaktuj się z firmą SUPER SKLEP JACEK z miasta Lodz. Najwyższa jakość w branży: Usługi Budowlane.",
  openGraph: {
    title: "SUPER SKLEP JACEK - Usługi",
    description: "Zobacz, co zaoferuje Ci SUPER SKLEP JACEK.",
    type: "website"
  }
};

export default function LeadLayout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "SUPER SKLEP JACEK",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ul. Główna 1, Lodz",
      "addressLocality": "Lodz"
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
