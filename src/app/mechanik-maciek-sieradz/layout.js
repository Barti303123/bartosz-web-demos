export const metadata = {
  title: { absolute: "Profesjonalny serwis samochodowy" },
  description: "Diagnostyka, naprawy i przeglądy pojazdów. Rzetelnie, terminowo i uczciwie. Umów wizytę w naszym warsztacie.",
  openGraph: {
    title: "Profesjonalny serwis samochodowy",
    description: "Diagnostyka, naprawy i przeglądy pojazdów. Rzetelnie, terminowo i uczciwie. Umów wizytę w naszym warsztacie.",
    type: "website"
  }
};

export default function LeadLayout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Mechanik Maciek",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ul. Główna 1, Sieradz",
      "addressLocality": "Sieradz"
    },
    "telephone": "797735708",
    "email": "farti30pg@gmail.com"
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
