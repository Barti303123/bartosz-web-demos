export const metadata = {
  title: "Bartosz salon - Profesjonalne usługi",
  description: "Skontaktuj się z firmą Bartosz salon z miasta Lodz. Najwyższa jakość w branży: Salon Urody.",
  openGraph: {
    title: "Bartosz salon - Usługi",
    description: "Zobacz, co zaoferuje Ci Bartosz salon.",
    type: "website"
  }
};

export default function LeadLayout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Bartosz salon",
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
