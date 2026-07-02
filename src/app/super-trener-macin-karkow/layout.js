export const metadata = {
  title: "super trener macin - Profesjonalne usługi",
  description: "Skontaktuj się z firmą super trener macin z miasta Karkow. Najwyższa jakość w branży: Fitness i Sport.",
  openGraph: {
    title: "super trener macin - Usługi",
    description: "Zobacz, co zaoferuje Ci super trener macin.",
    type: "website"
  }
};

export default function LeadLayout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "super trener macin",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ul. Główna 1, Karkow",
      "addressLocality": "Karkow"
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
