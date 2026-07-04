export const metadata = {
  title: { absolute: "Flora - Kwiaciarnia Łódź | Świeże Kwiaty i Bukiety" },
  description: "Kwiaciarnia Flora w Łodzi. Oferujemy wyjątkowe bukiety, florystykę ślubną i kompozycje okolicznościowe z dostawą na terenie Łodzi i okolic. Sprawdź nas.",
  openGraph: {
    title: "Flora - Kwiaciarnia Łódź | Świeże Kwiaty i Bukiety",
    description: "Kwiaciarnia Flora w Łodzi. Oferujemy wyjątkowe bukiety, florystykę ślubną i kompozycje okolicznościowe z dostawą na terenie Łodzi i okolic. Sprawdź nas.",
    type: "website"
  }
};

export default function LeadLayout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Flora Sklep Kwiatowy",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ul. Kwiatowa 7",
      "addressLocality": "Łódź"
    },
    "telephone": "+48 555 200 007",
    "email": "sklep@florasklep.pl"
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
