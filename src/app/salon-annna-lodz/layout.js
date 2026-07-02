export const metadata = {
  title: "Salon annna - Profesjonalne usługi",
  description: "Skontaktuj się z firmą Salon annna z miasta Łódź. Najwyższa jakość w branży: Salon Urody.",
  openGraph: {
    title: "Salon annna - Usługi",
    description: "Zobacz, co zaoferuje Ci Salon annna.",
    type: "website"
  }
};

export default function LeadLayout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Salon annna",
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
