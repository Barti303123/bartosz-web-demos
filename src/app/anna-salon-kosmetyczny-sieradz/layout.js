export const metadata = {
  title: "Anna salon kosmetyczny - Profesjonalne usługi",
  description: "Skontaktuj się z firmą Anna salon kosmetyczny z miasta Sieradz. Najwyższa jakość w branży: Salon Urody.",
  openGraph: {
    title: "Anna salon kosmetyczny - Usługi",
    description: "Zobacz, co zaoferuje Ci Anna salon kosmetyczny.",
    type: "website"
  }
};

export default function LeadLayout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Anna salon kosmetyczny",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ul. Główna 1, Sieradz",
      "addressLocality": "Sieradz"
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
