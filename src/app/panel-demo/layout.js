// Podgląd panelu zgłoszeń — materiał sprzedażowy, nie strona dla Google.
// noindex, bo to ma być link, który wysyłasz po rozmowie, a nie wynik
// wyszukiwania konkurujący z Twoją wizytówką.
export const metadata = {
    title: { absolute: 'Panel zgłoszeń — podgląd' },
    description: 'Tak wygląda panel, w którym lądują zapytania ze strony. Podgląd na przykładowych danych.',
    robots: { index: false, follow: false },
};

export default function PanelDemoLayout({ children }) {
    return children;
}
