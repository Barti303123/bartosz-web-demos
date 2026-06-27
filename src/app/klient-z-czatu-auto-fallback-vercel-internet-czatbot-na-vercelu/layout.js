export const metadata = {
  title: "Klient z czatu (Auto-Fallback Vercel) - Profesjonalne usługi",
  description: "Skontaktuj się z firmą Klient z czatu (Auto-Fallback Vercel) z miasta Internet (Czatbot na Vercelu). Najwyższa jakość w branży: nieznana.",
  openGraph: {
    title: "Klient z czatu (Auto-Fallback Vercel) - Usługi",
    description: "Zobacz, co zaoferuje Ci Klient z czatu (Auto-Fallback Vercel).",
    type: "website"
  }
};

export default function LeadLayout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Klient z czatu (Auto-Fallback Vercel)",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ul. Główna 1, Internet (Czatbot na Vercelu)",
      "addressLocality": "Internet (Czatbot na Vercelu)"
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
