export const metadata = {
  title: "Janusz-Pol Hydraulik - Profesjonalne usługi",
  description: "Skontaktuj się z firmą Janusz-Pol Hydraulik z miasta Sieradz. Najwyższa jakość w branży: hydraulik.",
  openGraph: {
    title: "Janusz-Pol Hydraulik - Usługi",
    description: "Zobacz, co zaoferuje Ci Janusz-Pol Hydraulik.",
    type: "website"
  }
};

export default function LeadLayout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Janusz-Pol Hydraulik",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ul. Warszawska 10",
      "addressLocality": "Sieradz"
    },
    "telephone": "+48 555 111 222",
    "email": "kontakt@janusz-pol-hydraulik.pl"
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
