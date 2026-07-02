export const metadata = {
  title: "trener andrzej - Profesjonalne usługi",
  description: "Skontaktuj się z firmą trener andrzej z miasta Lodz. Najwyższa jakość w branży: Fitness i Sport.",
  openGraph: {
    title: "trener andrzej - Usługi",
    description: "Zobacz, co zaoferuje Ci trener andrzej.",
    type: "website"
  }
};

export default function LeadLayout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "trener andrzej",
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
