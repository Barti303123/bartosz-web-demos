export const metadata = {
  title: "fitmaszynka - Profesjonalne usługi",
  description: "Skontaktuj się z firmą fitmaszynka z miasta karków. Najwyższa jakość w branży: siłownia.",
  openGraph: {
    title: "fitmaszynka - Usługi",
    description: "Zobacz, co zaoferuje Ci fitmaszynka.",
    type: "website"
  }
};

export default function LeadLayout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "fitmaszynka",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ul. Główna 1, karków",
      "addressLocality": "karków"
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
