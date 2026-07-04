// Wspólny helper sklepu (ecommerce). Reużywa content.services jako produkty.
// Ceny są PLACEHOLDERAMI (null) — AI nie zmyśla kwot. Obraz budowany ze słowa
// kluczowego image_query (angielskie) lub — gdy brak — z nazwy produktu.

// Stockowy obraz po słowie kluczowym. lock=i zapewnia stały obraz dla danej pozycji.
export function stockImage(query, i = 0) {
  const q = (query || 'product').trim().replace(/\s+/g, ',');
  return `https://loremflickr.com/600/450/${encodeURIComponent(q)}?lock=${i + 1}`;
}

// Buduje listę produktów z content.services. _id = pozycja (routing po indeksie).
export function buildProducts(content) {
  const services = (content && content.services) || [];
  return services.map((s, i) => ({
    _id: String(i + 1),
    name: s.title,
    description: s.description,
    price: null, // placeholder — brak zmyślonych cen
    imageUrl: stockImage(s.image_query || s.title, i),
  }));
}

// Etykieta ceny: placeholder, gdy brak realnej kwoty.
export function priceLabel(price) {
  return (price === null || price === undefined || price === 0)
    ? 'Zapytaj o cenę'
    : `${Number(price).toFixed(2)} zł`;
}
