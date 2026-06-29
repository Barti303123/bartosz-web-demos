export const metadata = {
  title: "Bartosz siłownia - Profesjonalne usługi",
  description: "Skontaktuj się z firmą Bartosz siłownia z miasta kraków. Najwyższa jakość w branży: Fitness i Sport.",
  openGraph: {
    title: "Bartosz siłownia - Usługi",
    description: "Zobacz, co zaoferuje Ci Bartosz siłownia.",
    type: "website"
  }
};

export default function LeadLayout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Bartosz siłownia",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ul. Główna 1, kraków",
      "addressLocality": "kraków"
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
