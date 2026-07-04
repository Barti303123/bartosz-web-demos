export const metadata = {
  title: { absolute: "Trattoria Roma - Prawdziwa Włoska Restauracja w Łodzi" },
  description: "Odkryj smak prawdziwych Włoch w sercu Łodzi. Trattoria Roma zaprasza na domową pizzę, makarony i tradycyjne desery. Zarezerwuj stolik już dziś!",
  openGraph: {
    title: "Trattoria Roma - Prawdziwa Włoska Restauracja w Łodzi",
    description: "Odkryj smak prawdziwych Włoch w sercu Łodzi. Trattoria Roma zaprasza na domową pizzę, makarony i tradycyjne desery. Zarezerwuj stolik już dziś!",
    type: "website"
  }
};

export default function LeadLayout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Trattoria Roma",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ul. Piotrkowska 55",
      "addressLocality": "Łódź"
    },
    "telephone": "+48 555 200 004",
    "email": "rezerwacje@trattoriaroma.pl"
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
