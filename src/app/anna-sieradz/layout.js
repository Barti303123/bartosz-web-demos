export const metadata = {
  title: "anna - Profesjonalne usługi",
  description: "Skontaktuj się z firmą anna z miasta sieradz. Najwyższa jakość w branży: Gastronomia.",
  openGraph: {
    title: "anna - Usługi",
    description: "Zobacz, co zaoferuje Ci anna.",
    type: "website"
  }
};

export default function LeadLayout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "anna",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ul. Główna 1, sieradz",
      "addressLocality": "sieradz"
    },
    "telephone": "+48 500 123 456",
    "email": "Twojego maila"
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
