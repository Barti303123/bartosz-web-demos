export const metadata = {
  title: { absolute: "PowerGym Klub - Siłownia i Fitness w Łodzi | Twój trening" },
  description: "Szukasz nowoczesnej siłowni w Łodzi? PowerGym Klub to profesjonalny sprzęt, strefa cardio, fitness i wsparcie trenerów. Dołącz do nas już dziś!",
  openGraph: {
    title: "PowerGym Klub - Siłownia i Fitness w Łodzi | Twój trening",
    description: "Szukasz nowoczesnej siłowni w Łodzi? PowerGym Klub to profesjonalny sprzęt, strefa cardio, fitness i wsparcie trenerów. Dołącz do nas już dziś!",
    type: "website"
  }
};

export default function LeadLayout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "PowerGym Klub",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ul. Zielona 8",
      "addressLocality": "Łódź"
    },
    "telephone": "+48 555 200 006",
    "email": "kontakt@powergym.pl"
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
