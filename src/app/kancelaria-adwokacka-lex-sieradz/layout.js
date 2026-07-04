export const metadata = {
  title: { absolute: "Kancelaria Adwokacka Lex Sieradz | Skuteczna Pomoc Prawna" },
  description: "Potrzebujesz profesjonalnego wsparcia prawnego w Sieradzu? Kancelaria Lex oferuje pomoc w sprawach cywilnych, karnych, rodzinnych i gospodarczych.",
  openGraph: {
    title: "Kancelaria Adwokacka Lex Sieradz | Skuteczna Pomoc Prawna",
    description: "Potrzebujesz profesjonalnego wsparcia prawnego w Sieradzu? Kancelaria Lex oferuje pomoc w sprawach cywilnych, karnych, rodzinnych i gospodarczych.",
    type: "website"
  }
};

export default function LeadLayout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Kancelaria Adwokacka Lex",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ul. Rynek 3",
      "addressLocality": "Sieradz"
    },
    "telephone": "+48 555 200 005",
    "email": "kancelaria@lex-sieradz.pl"
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
