export const metadata = {
  title: "Klient z czatu (Auto-Fallback) - Profesjonalne usługi",
  description: "Skontaktuj się z firmą Klient z czatu (Auto-Fallback) z miasta Internet (Czatbot). Najwyższa jakość w branży: nieznana.",
  openGraph: {
    title: "Klient z czatu (Auto-Fallback) - Usługi",
    description: "Zobacz, co zaoferuje Ci Klient z czatu (Auto-Fallback).",
    type: "website"
  }
};

export default function LeadLayout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Klient z czatu (Auto-Fallback)",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ul. Główna 1, Internet (Czatbot)",
      "addressLocality": "Internet (Czatbot)"
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
