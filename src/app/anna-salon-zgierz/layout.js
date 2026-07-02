export const metadata = {
  title: "anna salon - Profesjonalne usługi",
  description: "Skontaktuj się z firmą anna salon z miasta Zgierz. Najwyższa jakość w branży: Salon Urody.",
  openGraph: {
    title: "anna salon - Usługi",
    description: "Zobacz, co zaoferuje Ci anna salon.",
    type: "website"
  }
};

export default function LeadLayout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "anna salon",
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
