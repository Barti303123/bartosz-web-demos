export const metadata = {
  title: { absolute: "Studio Belle Kosmetyka Łódź | Twój salon urody i relaksu" },
  description: "Odwiedź Studio Belle w Łodzi. Oferujemy profesjonalne zabiegi na twarz i ciało, manicure oraz pedicure w kameralnej atmosferze. Zarezerwuj wizytę!",
  openGraph: {
    title: "Studio Belle Kosmetyka Łódź | Twój salon urody i relaksu",
    description: "Odwiedź Studio Belle w Łodzi. Oferujemy profesjonalne zabiegi na twarz i ciało, manicure oraz pedicure w kameralnej atmosferze. Zarezerwuj wizytę!",
    type: "website"
  }
};

export default function LeadLayout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Studio Belle Kosmetyka",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ul. Piotrkowska 100",
      "addressLocality": "Łódź"
    },
    "telephone": "+48 555 200 001",
    "email": "kontakt@studiobelle.pl"
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
