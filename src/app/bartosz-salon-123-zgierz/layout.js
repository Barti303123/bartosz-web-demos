export const metadata = {
  title: "Bartosz Salon 123 - Profesjonalne usługi",
  description: "Skontaktuj się z firmą Bartosz Salon 123 z miasta Zgierz. Najwyższa jakość w branży: Salon Urody.",
  openGraph: {
    title: "Bartosz Salon 123 - Usługi",
    description: "Zobacz, co zaoferuje Ci Bartosz Salon 123.",
    type: "website"
  }
};

export default function LeadLayout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Bartosz Salon 123",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ul. Główna 1, Zgierz",
      "addressLocality": "Zgierz"
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
