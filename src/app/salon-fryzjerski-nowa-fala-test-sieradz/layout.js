export const metadata = {
  title: { absolute: "Nowa Fala — fryzjer w Sieradzu" },
  description: "Strzyżenie, koloryzacja i pielęgnacja włosów w Sieradzu. Umów się telefonicznie, przyjmujemy od wtorku do soboty.",
  openGraph: {
    title: "Nowa Fala — fryzjer w Sieradzu",
    description: "Strzyżenie, koloryzacja i pielęgnacja włosów w Sieradzu. Umów się telefonicznie, przyjmujemy od wtorku do soboty.",
    type: "website"
  }
};

export default function LeadLayout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Salon Fryzjerski Nowa Fala (TEST)",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ul. Główna 1, Sieradz",
      "addressLocality": "Sieradz"
    },
    "telephone": "+48 600 111 222",
    "email": "Twojego maila"
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
