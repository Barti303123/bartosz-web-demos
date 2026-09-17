// Uczciwa informacja przy formularzu w wersji demonstracyjnej.
//
// PO CO TO ISTNIEJE: demo jest swiadomie samym front-endem, bez bazy i CRM
// (Krok 1 pkt 5 planu). Problem w tym, ze formularze pokazywaly "Wyslano
// pomyslnie" i nie wysylaly niczego — czyli klamaly osobie, ktorej wlasnie
// pokazujesz swoja prace. Wlasciciel firmy, ktory testowo wypelni wlasny
// formularz i nie dostanie nic, straci zaufanie w najgorszym momencie.
//
// Ten komponent zamienia ten problem w argument sprzedazowy: mowi wprost,
// czego w demie nie ma, i co dostaje sie w pelnej wersji.
//
// Styl jest celowo oparty o `currentColor` i przezroczystosc, a nie o konkretne
// kolory Tailwinda — dzieki temu wyglada poprawnie w kazdym z 8 motywow,
// zarowno na ciemnym, jak i jasnym tle, bez wariantow per motyw.

const styl = {
    marginTop: '1rem',
    padding: '0.75rem 1rem',
    border: '1px solid currentColor',
    borderRadius: '0.75rem',
    fontSize: '0.875rem',
    lineHeight: 1.6,
    opacity: 0.6,
};

export default function DemoNotice({ wyslane = false }) {
    return (
        <div style={styl} role="note" aria-live="polite">
            {wyslane ? (
                <>
                    <strong>Wiadomość nie została wysłana — to wersja demonstracyjna.</strong>
                    {' '}W pełnej wersji trafiłaby od razu do panelu zgłoszeń i na maila.
                </>
            ) : (
                <>Wersja demonstracyjna — ten formularz nie wysyła jeszcze wiadomości.</>
            )}
        </div>
    );
}
