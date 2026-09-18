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
const PRZYKLADOWE = [
    {
        id: 1, name: 'Marta Zielińska', phone: '+48 601 234 567', email: 'marta.z@example.com',
        kiedy: 'dziś, 09:12', status: 'nowy',
        message: 'Dzień dobry, czy da się umówić na jutro po 16? Najlepiej kontakt telefoniczny po 15.',
    },
    {
        id: 2, name: 'Paweł Nowicki', phone: '+48 602 887 100', email: 'p.nowicki@example.com',
        kiedy: 'dziś, 08:40', status: 'nowy',
        message: 'Interesuje mnie wycena. Proszę o kontakt mailowy, w pracy nie odbieram telefonu.',
    },
    {
        id: 3, name: 'Anna Krawczyk', phone: '+48 604 119 220', email: 'ania.krawczyk@example.com',
        kiedy: 'wczoraj, 18:05', status: 'w kontakcie',
        message: 'Rozmawialiśmy w piątek — potwierdzam termin i proszę o adres z dojazdem.',
    },
    {
        id: 4, name: 'Tomasz Bąk', phone: '+48 605 330 441', email: 'tbak@example.com',
        kiedy: 'wczoraj, 11:27', status: 'klient',
        message: 'Wszystko gotowe, dziękuję za sprawną obsługę. Polecę znajomym.',
    },
    {
        id: 5, name: 'Jarosław P.', phone: '+48 600 000 000', email: 'oferta@example.com',
        kiedy: '2 dni temu, 14:03', status: 'odrzucone',
        message: 'Oferta pozycjonowania strony w Google, pierwsza pozycja w 30 dni.',
    },
];

const PRZYKLADOWE_POPRAWKI = [
    { id: 1, sekcja: 'Godziny otwarcia', kiedy: '3 dni temu', status: 'zrobiona',
      opis: 'Od października otwieramy o 9:00 zamiast 8:00.',
      odpowiedz: 'Zmienione tego samego dnia.' },
    { id: 2, sekcja: 'Cennik', kiedy: 'wczoraj', status: 'nowa',
      opis: 'Proszę dodać nową usługę do listy — szczegóły wysłałem mailem.' },
];

const dataPL = (k) => k;

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
                            {zakladka === 'zgloszenia' ? 'Twoje zgłoszenia' : 'Poprawki na stronie'}
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
                <div className="mx-auto flex max-w-6xl gap-1 px-6">
                    {[['zgloszenia', 'Zgłoszenia'], ['poprawki', 'Poprawki na stronie']].map(([id, etykieta]) => (
                        <button key={id} onClick={() => setZakladka(id)}
                            className={`-mb-px border-b-2 px-4 py-3 text-sm font-medium transition ${
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

            {zakladka === 'zgloszenia' ? (
                <main className="mx-auto max-w-6xl px-6 py-8">
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

                    <ul className="space-y-3">
                        {widoczne.map((z) => (
                            <li key={z.id} className="rounded-2xl border border-[#e6e8ec] bg-white p-5">
                                <div className="flex flex-wrap items-start justify-between gap-3">
                                    <div className="min-w-0">
                                        <p className="font-semibold">{z.name}</p>
                                        <p className="mt-1 text-sm text-[#5b6270]">
                                            {z.phone} · {z.email}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-3">
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
                            </li>
                        ))}
                    </ul>

                    <p className="mt-8 rounded-2xl border border-[#e6e8ec] bg-white px-6 py-5 text-sm text-[#5b6270]">
                        Każde zapytanie z formularza na stronie trafia tutaj <strong>i równolegle na Twojego maila</strong> —
                        nawet gdybyś do panelu nie zaglądał. Statusy ustawiasz sam, żeby wiedzieć, z kim już rozmawiałeś.
                        Całość pobierzesz do pliku, który otworzysz w Excelu.
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
