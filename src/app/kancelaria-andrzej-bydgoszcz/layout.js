export const metadata = {
  title: "kancelaria Andrzej - Profesjonalne usługi",
  description: "Skontaktuj się z firmą kancelaria Andrzej z miasta Bydgoszcz. Najwyższa jakość w branży: prawnik.",
  openGraph: {
    title: "kancelaria Andrzej - Usługi",
    description: "Zobacz, co zaoferuje Ci kancelaria Andrzej.",
    type: "website"
  }
};

export default function LeadLayout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "kancelaria Andrzej",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ul. Główna 1, Bydgoszcz",
      "addressLocality": "Bydgoszcz"
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
