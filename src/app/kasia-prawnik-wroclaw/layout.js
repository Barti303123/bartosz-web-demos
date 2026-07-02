export const metadata = {
  title: "kasia prawnik - Profesjonalne usługi",
  description: "Skontaktuj się z firmą kasia prawnik z miasta Wrocław. Najwyższa jakość w branży: Kancelaria Prawna.",
  openGraph: {
    title: "kasia prawnik - Usługi",
    description: "Zobacz, co zaoferuje Ci kasia prawnik.",
    type: "website"
  }
};

export default function LeadLayout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "kasia prawnik",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ul. Główna 1, Wrocław",
      "addressLocality": "Wrocław"
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
