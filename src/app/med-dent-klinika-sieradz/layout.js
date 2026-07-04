export const metadata = {
  title: { absolute: "Med-Dent Sieradz - Twój Dobry Gabinet Stomatologiczny" },
  description: "Profesjonalna opieka dentystyczna w Sieradzu. Dbamy o zdrowy i piękny uśmiech całej rodziny. Umów wizytę w klinice Med-Dent!",
  openGraph: {
    title: "Med-Dent Sieradz - Twój Dobry Gabinet Stomatologiczny",
    description: "Profesjonalna opieka dentystyczna w Sieradzu. Dbamy o zdrowy i piękny uśmiech całej rodziny. Umów wizytę w klinice Med-Dent!",
    type: "website"
  }
};

export default function LeadLayout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Med-Dent Klinika",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ul. Rynek 8",
      "addressLocality": "Sieradz"
    },
    "telephone": "+48 555 200 003",
    "email": "rejestracja@meddent.pl"
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
