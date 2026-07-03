export const metadata = {
  title: { absolute: "AutoSprint Serwis - Dobry Mechanik Zduńska Wola" },
  description: "Szukasz sprawdzonego mechanika w Zduńskiej Woli? AutoSprint Serwis to profesjonalna naprawa aut, diagnostyka, hamulce i serwis klimatyzacji. Zadzwoń!",
  openGraph: {
    title: "AutoSprint Serwis - Dobry Mechanik Zduńska Wola",
    description: "Szukasz sprawdzonego mechanika w Zduńskiej Woli? AutoSprint Serwis to profesjonalna naprawa aut, diagnostyka, hamulce i serwis klimatyzacji. Zadzwoń!",
    type: "website"
  }
};

export default function LeadLayout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "AutoSprint Serwis",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ul. Łaska 44",
      "addressLocality": "Zduńska Wola"
    },
    "telephone": "+48 555 222 333",
    "email": "kontakt@autosprint-serwis.pl"
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
