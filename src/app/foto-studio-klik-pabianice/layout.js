export const metadata = {
  title: { absolute: "Foto Studio Klik | Profesjonalny Fotograf Pabianice" },
  description: "Szukasz fotografa w Pabianicach? Foto Studio Klik oferuje wyjątkowe sesje rodzinne, ślubne oraz profesjonalne zdjęcia dokumentowe. Sprawdź ofertę!",
  openGraph: {
    title: "Foto Studio Klik | Profesjonalny Fotograf Pabianice",
    description: "Szukasz fotografa w Pabianicach? Foto Studio Klik oferuje wyjątkowe sesje rodzinne, ślubne oraz profesjonalne zdjęcia dokumentowe. Sprawdź ofertę!",
    type: "website"
  }
};

export default function LeadLayout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Foto Studio Klik",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ul. Zamkowa 12",
      "addressLocality": "Pabianice"
    },
    "telephone": "+48 555 200 002",
    "email": "kontakt@fotoklik.pl"
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
