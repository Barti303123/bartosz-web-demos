export const metadata = {
  title: "ania salon - Profesjonalne usługi",
  description: "Skontaktuj się z firmą ania salon z miasta karków. Najwyższa jakość w branży: Salon Urody.",
  openGraph: {
    title: "ania salon - Usługi",
    description: "Zobacz, co zaoferuje Ci ania salon.",
    type: "website"
  }
};

export default function LeadLayout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "ania salon",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ul. Główna 1, karków",
      "addressLocality": "karków"
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
