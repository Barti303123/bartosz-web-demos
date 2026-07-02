export const metadata = {
  title: "Amazing sklep - Profesjonalne usługi",
  description: "Skontaktuj się z firmą Amazing sklep z miasta Krakow. Najwyższa jakość w branży: Medycyna.",
  openGraph: {
    title: "Amazing sklep - Usługi",
    description: "Zobacz, co zaoferuje Ci Amazing sklep.",
    type: "website"
  }
};

export default function LeadLayout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Amazing sklep",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ul. Główna 1, Krakow",
      "addressLocality": "Krakow"
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
