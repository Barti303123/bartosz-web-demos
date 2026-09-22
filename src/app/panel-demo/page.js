'use client';

// PODGLĄD PANELU ZGŁOSZEŃ — do pokazywania przez telefon.
//
// PO CO TO ISTNIEJE: sprzedajesz stronę RAZEM z panelem, w którym lądują
// zapytania — a demo pokazywało tylko stronę. Druga połowa produktu była dla
// klienta niewidoczna i musiał uwierzyć na słowo. Teraz wysyłasz dwa linki:
// „tak wygląda strona" i „tak wygląda panel, w którym zobaczysz każde zapytanie".
//
// CZEGO TU NIE MA I BYĆ NIE MOŻE: połączenia z bazą, logowania, prawdziwych
// danych. To statyczna strona z wymyślonymi zgłoszeniami. Panel klienta czyta
// dane osobowe ludzi, którzy wypełnili formularz — coś takiego nie ma prawa stać
// publicznie pod adresem bez hasła. Dlatego podgląd i panel to dwie różne rzeczy,
// mimo że wyglądają tak samo.
//
// Wygląd jest celowo skopiowany z templates/client/src/app/panel/page.js. Gdy
// tamten się zmieni, ten powinien pójść za nim — inaczej obiecujesz przez telefon
// coś, czego klient potem nie dostaje.

import { useState } from 'react';

const STATUSY = [
    { id: 'nowy', label: 'Nowy', klasa: 'bg-blue-50 text-blue-700 border-blue-200' },
    { id: 'w kontakcie', label: 'W kontakcie', klasa: 'bg-amber-50 text-amber-700 border-amber-200' },
    { id: 'klient', label: 'Klient', klasa: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
    { id: 'odrzucone', label: 'Odrzucone', klasa: 'bg-slate-100 text-slate-600 border-slate-200' },
];

const stylStatusu = (s) => (STATUSY.find((x) => x.id === s) || STATUSY[0]).klasa;

// Zgłoszenia celowo zwyczajne: tak wyglądają prawdziwe zapytania z formularza
// lokalnej firmy. Żadnych "Lorem ipsum" i żadnych nazwisk prawdziwych ludzi.
//
// `doby` zastępuje datę: w prawdziwym panelu liczy się je z created_at.
// Paweł czeka dwa dni celowo — bez jednego czerwonego zgłoszenia podgląd
// nie pokazuje, po co jest licznik „czekają, aż oddzwonisz".
const PRZYKLADOWE = [
    {
        id: 1, name: 'Marta Zielińska', phone: '+48 601 234 567', email: 'marta.z@example.com',
        kiedy: 'dziś, 09:12', doby: 0, status: 'nowy',
        message: 'Dzień dobry, czy da się umówić na jutro po 16? Najlepiej kontakt telefoniczny po 15.',
    },
    {
        id: 2, name: 'Paweł Nowicki', phone: '+48 602 887 100', email: 'p.nowicki@example.com',
        kiedy: '2 dni temu, 08:40', doby: 2, status: 'nowy',
        message: 'Interesuje mnie wycena. Proszę o kontakt mailowy, w pracy nie odbieram telefonu.',
    },
    {
        id: 3, name: 'Anna Krawczyk', phone: '+48 604 119 220', email: 'ania.krawczyk@example.com',
        kiedy: 'wczoraj, 18:05', doby: 1, status: 'w kontakcie',
        message: 'Rozmawialiśmy w piątek — potwierdzam termin i proszę o adres z dojazdem.',
        notatka: 'Oddzwoniłam — termin w środę o 10:00. Dzień wcześniej przypomnieć SMS-em.',
    },
    {
        id: 4, name: 'Tomasz Bąk', phone: '+48 605 330 441', email: 'tbak@example.com',
        kiedy: 'wczoraj, 11:27', doby: 1, status: 'klient',
        message: 'Wszystko gotowe, dziękuję za sprawną obsługę. Polecę znajomym.',
        notatka: 'Zrobione, zapłacone. Poprosić o opinię w Google.',
    },
    {
        id: 5, name: 'Jarosław P.', phone: '+48 600 000 000', email: 'oferta@example.com',
        kiedy: '3 dni temu, 14:03', doby: 3, status: 'odrzucone',
        message: 'Oferta pozycjonowania strony w Google, pierwsza pozycja w 30 dni.',
    },
    {
        id: 6, name: 'Katarzyna Lis', phone: '+48 607 450 912', email: 'k.lis@example.com',
        kiedy: '5 dni temu, 10:48', doby: 5, status: 'klient',
        message: 'Poproszę o termin w przyszłym tygodniu, najlepiej rano.',
    },
];

// Ta sama logika co w templates/client/src/app/panel/page.js — „czeka" to
// status Nowy od co najmniej doby. Zmieniasz tam, zmień tu.
const czekaOpis = (doby) => `czeka ${doby} ${doby === 1 ? 'dzień' : 'dni'}`;
const MIESIAC_W = ['w styczniu', 'w lutym', 'w marcu', 'w kwietniu', 'w maju', 'w czerwcu',
    'w lipcu', 'w sierpniu', 'we wrześniu', 'w październiku', 'w listopadzie', 'w grudniu'];
// Poprzedni miesiąc jest wymyślony jak reszta danych; bieżący liczy się
// z listy, żeby zmiana statusu w podglądzie od razu ruszała licznikami.
const W_POPRZEDNIM = 4;

const PRZYKLADOWE_POPRAWKI = [
    { id: 1, sekcja: 'Godziny otwarcia', kiedy: '3 dni temu', status: 'zrobiona',
      opis: 'Od października otwieramy o 9:00 zamiast 8:00.',
      odpowiedz: 'Zmienione tego samego dnia.' },
    { id: 2, sekcja: 'Cennik', kiedy: 'wczoraj', status: 'nowa',
      opis: 'Proszę dodać nową usługę do listy — szczegóły wysłałem mailem.' },
];

const dataPL = (k) => k;

// Zakladka „Twoja strona" na wymyslonej firmie w polowie budowy. Daty licza
// sie od dzisiaj, zeby podglad nigdy nie pokazywal terminu z przeszlosci.
// Tekst etapow jak w templates/client/src/lib/etapy.js — zmieniasz tam, zmien tu.
function przykladStrony() {
    const dzien = (przesuniecie) => {
        const d = new Date();
        d.setDate(d.getDate() + przesuniecie);
        return d.toLocaleDateString('pl-PL', { day: 'numeric', month: 'long' });
    };
    return {
        etapy: [
            { id: 'umowa', tytul: 'Umowa podpisana', stan: 'zrobione', opis: `Podpisana ${dzien(-9)}.` },
            { id: 'zaliczka', tytul: 'Zaliczka', stan: 'zrobione', opis: `Wpłata 500 zł dotarła ${dzien(-8)}.` },
            { id: 'materialy', tytul: 'Materiały od Ciebie', stan: 'zrobione', opis: `Komplet dotarł ${dzien(-4)}. Od tego dnia liczy się termin.` },
            { id: 'budowa', tytul: 'Budowa strony', stan: 'teraz', opis: `Strona będzie gotowa do akceptacji najpóźniej ${dzien(10)}.` },
            { id: 'akceptacja', tytul: 'Twoja akceptacja', stan: 'pozniej', opis: 'Dostaniesz link do gotowej strony i 7 dni na uwagi.' },
            { id: 'domena', tytul: 'Strona na Twojej domenie', stan: 'pozniej', opis: 'Podpinam Twoją domenę tak, żeby nie popsuć firmowej poczty.' },
            { id: 'szkolenie', tytul: 'Szkolenie z panelu', stan: 'pozniej', opis: 'Kilkanaście minut razem: pokazuję panel, a hasło ustawiasz sam, przy mnie.' },
        ],
        umowa: [
            ['Umowa z dnia', dzien(-9)],
            ['Cena strony', '1000 zł'],
            ['Zaliczka (50%)', `500 zł — zapłacone ${dzien(-8)}`],
            ['Druga połowa', '500 zł — dopiero po odbiorze strony'],
            ['Termin', '10 dni roboczych od kompletu materiałów'],
            ['Poprawki przy budowie', 'dwie rundy w cenie'],
            ['Opieka', 'pakiet Podstawowa, 50 zł miesięcznie'],
            ['Drobne poprawki w opiece', '2 miesięcznie'],
            ['Reakcja na awarię', 'do 48 godzin roboczych'],
            ['Wypowiedzenie opieki', '30 dni'],
        ],
    };
}

export default function PanelDemo() {
    const [zgloszenia, setZgloszenia] = useState(PRZYKLADOWE);
    const [filtr, setFiltr] = useState('wszystkie');
    const [zakladka, setZakladka] = useState('zgloszenia');
    const [info, setInfo] = useState('');

    const podglad = (co) => {
        setInfo(`${co} działa w panelu Twojej firmy. Tutaj, w podglądzie, jest wyłączone.`);
        setTimeout(() => setInfo(''), 3500);
    };

    const widoczne = filtr === 'wszystkie' ? zgloszenia : zgloszenia.filter((z) => z.status === filtr);
    const teraz = new Date();
    const miesiac = MIESIAC_W[teraz.getMonth()];
    const poprzedni = MIESIAC_W[(teraz.getMonth() + 11) % 12];
    const czekajacy = zgloszenia.filter((z) => z.status === 'nowy');
    const najdluzej = czekajacy.reduce((m, z) => Math.max(m, z.doby), 0);
    const klienci = zgloszenia.filter((z) => z.status === 'klient').length;

    return (
        <div className="min-h-screen bg-[#f7f8fa] text-[#16181d]"
             style={{ colorScheme: 'light' }}>

            {/* Pasek, który ma nie zostawiać wątpliwości, co to jest. */}
            <div className="bg-[#1d4ed8] px-6 py-3 text-center text-sm text-white">
                <strong>To jest podgląd panelu</strong>, który dostajesz razem ze stroną.
                Zgłoszenia poniżej są wymyślone — w Twojej wersji będą tu prawdziwe zapytania z formularza.
            </div>

            <header className="border-b border-[#e6e8ec] bg-white">
                <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-4">
                    <div>
                        <h1 className="text-lg font-bold tracking-tight">
                            {{ zgloszenia: 'Twoje zgłoszenia', poprawki: 'Poprawki na stronie', strona: 'Twoja strona' }[zakladka]}
                        </h1>
                        <p className="text-sm text-[#5b6270]">kontakt@twojafirma.pl</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {zakladka === 'zgloszenia' && (
                            <button onClick={() => podglad('Pobieranie CSV')}
                                className="rounded-lg border border-[#e6e8ec] px-4 py-2 text-sm font-medium transition hover:bg-[#f7f8fa]">
                                Pobierz CSV
                            </button>
                        )}
                        <button onClick={() => podglad('Zmiana hasła')}
                            className="rounded-lg border border-[#e6e8ec] px-4 py-2 text-sm font-medium transition hover:bg-[#f7f8fa]">
                            Zmień hasło
                        </button>
                        <button onClick={() => podglad('Wylogowanie')}
                            className="rounded-lg border border-[#e6e8ec] px-4 py-2 text-sm font-medium transition hover:bg-[#f7f8fa]">
                            Wyloguj
                        </button>
                    </div>
                </div>
                <div className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-6">
                    {[['zgloszenia', 'Zgłoszenia'], ['poprawki', 'Poprawki na stronie'], ['strona', 'Twoja strona']].map(([id, etykieta]) => (
                        <button key={id} onClick={() => setZakladka(id)}
                            className={`-mb-px whitespace-nowrap border-b-2 px-4 py-3 text-sm font-medium transition ${
                                zakladka === id
                                    ? 'border-[#1d4ed8] text-[#1d4ed8]'
                                    : 'border-transparent text-[#5b6270] hover:text-[#16181d]'
                            }`}>
                            {etykieta}
                        </button>
                    ))}
                </div>
            </header>

            {info && (
                <div className="mx-auto mt-4 max-w-6xl px-6">
                    <p className="rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm text-blue-900">{info}</p>
                </div>
            )}

            {zakladka === 'strona' ? (
                <TwojaStrona dane={przykladStrony()} />
            ) : zakladka === 'zgloszenia' ? (
                <main className="mx-auto max-w-6xl px-6 py-8">
                    <div className="mb-6 grid grid-cols-3 gap-2 sm:gap-3">
                        {czekajacy.length > 0 ? (
                            <button onClick={() => setFiltr('nowy')}
                                className="rounded-2xl border border-red-200 bg-white p-3 text-left sm:p-5 transition hover:bg-red-50">
                                <p className="text-xs font-medium leading-snug sm:text-sm text-red-700">Czekają, aż oddzwonisz</p>
                                <p className="mt-1 text-2xl font-bold sm:text-3xl text-red-700">{czekajacy.length}</p>
                                <p className="text-xs text-[#5b6270] sm:text-sm">
                                    {najdluzej >= 1 ? `najdłużej ${najdluzej} ${najdluzej === 1 ? 'dzień' : 'dni'} · ` : ''}pokaż kto
                                </p>
                            </button>
                        ) : (
                            <div className="rounded-2xl border border-emerald-200 bg-white p-3 sm:p-5">
                                <p className="text-xs font-medium leading-snug sm:text-sm text-emerald-700">Czekają, aż oddzwonisz</p>
                                <p className="mt-1 text-2xl font-bold sm:text-3xl text-emerald-700">0</p>
                                <p className="text-xs text-[#5b6270] sm:text-sm">Każdy, kto napisał, ma odpowiedź.</p>
                            </div>
                        )}
                        <div className="rounded-2xl border border-[#e6e8ec] bg-white p-3 sm:p-5">
                            <p className="text-xs font-medium leading-snug sm:text-sm">Zapytania {miesiac}</p>
                            <p className="mt-1 text-2xl font-bold sm:text-3xl">{zgloszenia.length}</p>
                            <p className="text-xs text-[#5b6270] sm:text-sm">{poprzedni}: {W_POPRZEDNIM}</p>
                        </div>
                        <div className="rounded-2xl border border-[#e6e8ec] bg-white p-3 sm:p-5">
                            <p className="text-xs font-medium leading-snug sm:text-sm">Zostali Twoimi klientami</p>
                            <p className="mt-1 text-2xl font-bold sm:text-3xl">{klienci}</p>
                            <p className="text-xs text-[#5b6270] sm:text-sm">z zapytań {miesiac}</p>
                        </div>
                    </div>

                    <div className="mb-5 flex flex-wrap gap-2">
                        <Filtr aktywny={filtr === 'wszystkie'} onClick={() => setFiltr('wszystkie')}>
                            Wszystkie ({zgloszenia.length})
                        </Filtr>
                        {STATUSY.map((s) => (
                            <Filtr key={s.id} aktywny={filtr === s.id} onClick={() => setFiltr(s.id)}>
                                {s.label} ({zgloszenia.filter((z) => z.status === s.id).length})
                            </Filtr>
                        ))}
                    </div>

                    {filtr === 'nowy' && czekajacy.length > 0 && (
                        <p className="mb-4 rounded-xl border border-[#e6e8ec] bg-white px-4 py-3 text-sm text-[#5b6270]">
                            Oddzwoniłeś? Zmień status na <strong>W kontakcie</strong> — osoba zniknie z tej listy.
                        </p>
                    )}

                    <ul className="space-y-3">
                        {widoczne.map((z) => {
                            const czeka = z.status === 'nowy' && z.doby >= 1;
                            return (
                            <li key={z.id} className={`rounded-2xl border bg-white p-5 ${czeka ? 'border-red-200' : 'border-[#e6e8ec]'}`}>
                                <div className="flex flex-wrap items-start justify-between gap-3">
                                    <div className="min-w-0">
                                        <p className="font-semibold">{z.name}</p>
                                        <p className="mt-1 text-sm text-[#5b6270]">
                                            {z.phone} · {z.email}
                                        </p>
                                    </div>
                                    <div className="flex flex-wrap items-center gap-3">
                                        {czeka && (
                                            <span className="rounded-lg border border-red-200 bg-red-50 px-2.5 py-1 text-xs font-semibold text-red-700">
                                                {czekaOpis(z.doby)}
                                            </span>
                                        )}
                                        <span className="text-xs text-[#5b6270]">{dataPL(z.kiedy)}</span>
                                        {/* Zmiana statusu działa — to jedyna rzecz, która w podglądzie
                                            jest prawdziwa, bo bez niej nie widać, po co ten panel jest. */}
                                        <select
                                            value={z.status}
                                            onChange={(e) => setZgloszenia((lista) =>
                                                lista.map((x) => (x.id === z.id ? { ...x, status: e.target.value } : x)))}
                                            className={`rounded-lg border px-3 py-1.5 text-sm font-medium ${stylStatusu(z.status)}`}>
                                            {STATUSY.map((s) => (
                                                <option key={s.id} value={s.id}>{s.label}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <p className="mt-4 border-t border-[#e6e8ec] pt-4 text-[15px] leading-relaxed">{z.message}</p>
                                {/* Notatka działa naprawdę, ale tylko w tej karcie przeglądarki —
                                    po odświeżeniu wraca przykład. Nic nie idzie do bazy. */}
                                <Notatka tekst={z.notatka} zapisz={(t) => setZgloszenia((lista) =>
                                    lista.map((x) => (x.id === z.id ? { ...x, notatka: t.trim() || null } : x)))} />
                            </li>
                            );
                        })}
                    </ul>

                    <p className="mt-8 rounded-2xl border border-[#e6e8ec] bg-white px-6 py-5 text-sm text-[#5b6270]">
                        Każde zapytanie z formularza na stronie trafia tutaj <strong>i równolegle na Twojego maila</strong> —
                        nawet gdybyś do panelu nie zaglądał. Na górze widzisz, kto czeka na Twój telefon i ilu klientów
                        dała Ci strona w tym miesiącu. Przy każdej osobie zapiszesz notatkę, żeby po tygodniu pamiętać,
                        o czym rozmawialiście. Całość pobierzesz do pliku, który otworzysz w Excelu.
                    </p>
                </main>
            ) : (
                <main className="mx-auto grid max-w-6xl gap-8 px-6 py-8 lg:grid-cols-[1fr_360px]">
                    <div>
                        <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-[#5b6270]">Twoje prośby</p>
                        <ul className="space-y-3">
                            {PRZYKLADOWE_POPRAWKI.map((p) => (
                                <li key={p.id} className="rounded-2xl border border-[#e6e8ec] bg-white p-5">
                                    <div className="flex flex-wrap items-start justify-between gap-3">
                                        <div>
                                            <p className="font-semibold">{p.sekcja}</p>
                                            <p className="mt-1 text-xs text-[#5b6270]">{p.kiedy}</p>
                                        </div>
                                        <span className={`rounded-lg border px-3 py-1 text-xs font-medium ${
                                            p.status === 'zrobiona'
                                                ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
                                                : 'border-blue-200 bg-blue-50 text-blue-700'}`}>
                                            {p.status === 'zrobiona' ? 'Zrobiona' : 'Nowa'}
                                        </span>
                                    </div>
                                    <p className="mt-4 border-t border-[#e6e8ec] pt-4 text-[15px] leading-relaxed">{p.opis}</p>
                                    {p.odpowiedz && (
                                        <p className="mt-3 rounded-xl bg-[#f7f8fa] px-4 py-3 text-sm text-[#5b6270]">
                                            Odpowiedź: {p.odpowiedz}
                                        </p>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="rounded-2xl border border-[#e6e8ec] bg-white p-6">
                        <p className="font-semibold">Poproś o zmianę</p>
                        <p className="mt-1 text-sm text-[#5b6270]">
                            W tym miesiącu zostało Ci 1 z 2 poprawek w ramach opieki.
                        </p>
                        <div className="mt-5 space-y-4 opacity-60">
                            <div>
                                <label className="text-sm font-medium">Czego dotyczy</label>
                                <input disabled placeholder="np. Godziny otwarcia"
                                    className="mt-1 w-full rounded-xl border border-[#e6e8ec] px-4 py-2.5 text-sm" />
                            </div>
                            <div>
                                <label className="text-sm font-medium">Co ma się zmienić</label>
                                <textarea disabled rows={4} placeholder="Opisz zmianę tak, jak powiedziałbyś przez telefon."
                                    className="mt-1 w-full rounded-xl border border-[#e6e8ec] px-4 py-2.5 text-sm" />
                            </div>
                        </div>
                        <button onClick={() => podglad('Wysyłanie prośby')}
                            className="mt-5 w-full rounded-xl bg-[#1d4ed8] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#1e40af]">
                            Wyślij prośbę
                        </button>
                        <p className="mt-4 text-xs text-[#5b6270]">
                            Drobne zmiany na stronie zgłaszasz stąd — bez dzwonienia i bez szukania,
                            kto to robił. Odpowiedź dostajesz mailem.
                        </p>
                    </div>
                </main>
            )}

            <footer className="mx-auto max-w-6xl px-6 pb-16 pt-4 text-sm text-[#5b6270]">
                Podgląd panelu zgłoszeń · <a href="https://bartosz-web.pl" className="text-[#1d4ed8] hover:underline">bartosz-web.pl</a>
            </footer>
        </div>
    );
}

function TwojaStrona({ dane }) {
    const teraz = dane.etapy.find((e) => e.stan === 'teraz');
    return (
        <main className="mx-auto max-w-6xl px-6 py-8">
            <div className="mb-6 rounded-2xl border border-[#1d4ed8] bg-white p-5">
                <p className="text-sm font-medium text-[#1d4ed8]">Teraz</p>
                <p className="mt-1 text-lg font-bold">{teraz.tytul}</p>
                <p className="mt-1 leading-relaxed text-[#5b6270]">{teraz.opis}</p>
            </div>

            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_380px]">
                <section>
                    <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-[#5b6270]">Postęp prac</p>
                    <ol className="space-y-1">
                        {dane.etapy.map((e) => (
                            <li key={e.id} className="flex gap-4 rounded-2xl p-3">
                                <span className={`mt-0.5 grid h-6 w-6 flex-shrink-0 place-items-center rounded-full border-2 text-xs font-bold ${
                                    e.stan === 'zrobione' ? 'border-emerald-500 bg-emerald-500 text-white'
                                        : e.stan === 'teraz' ? 'border-[#1d4ed8] bg-white text-[#1d4ed8]'
                                            : 'border-[#e6e8ec] bg-white text-transparent'}`}>
                                    {e.stan === 'zrobione' ? '✓' : e.stan === 'teraz' ? '●' : ''}
                                </span>
                                <div className="min-w-0">
                                    <p className={`font-semibold ${e.stan === 'pozniej' ? 'text-[#5b6270]' : ''}`}>{e.tytul}</p>
                                    <p className="mt-0.5 text-sm leading-relaxed text-[#5b6270]">{e.opis}</p>
                                </div>
                            </li>
                        ))}
                    </ol>
                </section>

                <aside>
                    <div className="rounded-2xl border border-[#e6e8ec] bg-white p-6">
                        <p className="font-semibold">Umowa w skrócie</p>
                        <dl className="mt-4 space-y-3 text-sm">
                            {dane.umowa.map(([co, ile]) => (
                                <div key={co}>
                                    <dt className="text-[#5b6270]">{co}</dt>
                                    <dd className="font-medium">{ile}</dd>
                                </div>
                            ))}
                        </dl>
                        <p className="mt-5 border-t border-[#e6e8ec] pt-4 text-xs leading-relaxed text-[#5b6270]">
                            Od podpisania umowy do szkolenia widzisz tu, na jakim etapie jest Twoja strona,
                            do kiedy będzie gotowa i co już zapłaciłeś — bez dzwonienia i szukania maili.
                        </p>
                    </div>
                </aside>
            </div>
        </main>
    );
}

function Notatka({ tekst, zapisz }) {
    const [edycja, setEdycja] = useState(false);
    const [wartosc, setWartosc] = useState(tekst || '');

    if (edycja) {
        return (
            <div className="mt-3 border-t border-[#e6e8ec] pt-3">
                <textarea autoFocus rows={3} maxLength={2000} value={wartosc}
                    onChange={(e) => setWartosc(e.target.value)}
                    placeholder="np. Oddzwoniłem, chce wycenę na wtorek."
                    className="w-full resize-none rounded-xl border border-[#e6e8ec] px-4 py-3 text-[15px] outline-none focus:border-[#1d4ed8]" />
                <div className="mt-2 flex gap-2">
                    <button onClick={() => { zapisz(wartosc); setEdycja(false); }}
                        className="rounded-lg bg-[#1d4ed8] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#1e40af]">
                        Zapisz notatkę
                    </button>
                    <button onClick={() => { setWartosc(tekst || ''); setEdycja(false); }}
                        className="rounded-lg border border-[#e6e8ec] px-4 py-2 text-sm font-medium transition hover:bg-[#f7f8fa]">
                        Anuluj
                    </button>
                </div>
            </div>
        );
    }

    if (tekst) {
        return (
            <div className="mt-3 rounded-xl bg-amber-50 px-4 py-3 text-sm leading-relaxed">
                <p className="whitespace-pre-wrap"><strong>Twoja notatka:</strong> {tekst}</p>
                <button onClick={() => { setWartosc(tekst); setEdycja(true); }}
                    className="mt-1 text-sm font-medium text-[#5b6270] underline underline-offset-4 hover:text-[#16181d]">
                    Edytuj
                </button>
            </div>
        );
    }

    return (
        <button onClick={() => { setWartosc(''); setEdycja(true); }}
            className="mt-3 text-sm font-medium text-[#5b6270] underline underline-offset-4 hover:text-[#16181d]">
            + Dodaj notatkę
        </button>
    );
}

function Filtr({ aktywny, onClick, children }) {
    return (
        <button onClick={onClick}
            className={`rounded-lg border px-3.5 py-1.5 text-sm font-medium transition ${
                aktywny
                    ? 'border-[#1d4ed8] bg-[#1d4ed8] text-white'
                    : 'border-[#e6e8ec] bg-white text-[#5b6270] hover:text-[#16181d]'
            }`}>
            {children}
        </button>
    );
}
