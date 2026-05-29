export const metadata = {
  title: "Budowa Marcin - Profesjonalne usługi",
  description: "Skontaktuj się z firmą Budowa Marcin z miasta Zgierz. Najwyższa jakość w branży: Usługi Budowlane.",
  openGraph: {
    title: "Budowa Marcin - Usługi",
    description: "Zobacz, co zaoferuje Ci Budowa Marcin.",
    type: "website"
  }
};

export default function LeadLayout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Budowa Marcin",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ul. Główna 1, Zgierz",
      "addressLocality": "Zgierz"
    },
    "telephone": "+48 500 123 456",
    "email": "bartosz.waw@vp.pl"
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
