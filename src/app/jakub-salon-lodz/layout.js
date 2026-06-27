export const metadata = {
  title: "Jakub Salon - Profesjonalne usługi",
  description: "Skontaktuj się z firmą Jakub Salon z miasta Lodz. Najwyższa jakość w branży: Salon Urody.",
  openGraph: {
    title: "Jakub Salon - Usługi",
    description: "Zobacz, co zaoferuje Ci Jakub Salon.",
    type: "website"
  }
};

export default function LeadLayout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Jakub Salon",
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
