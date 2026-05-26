export default function Footer({ companyName }) {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 text-center border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-lg font-semibold text-white mb-2">{companyName}</p>
        <p>&copy; {new Date().getFullYear()} Wszelkie prawa zastrzeżone.</p>
        <p className="mt-4 text-sm text-gray-500">Zaprojektowane i wdrożone przez <a href="https://bartosz-web.pl/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">BARTOSZ Web & AI Studio</a></p>
      </div>
    </footer>
  );
}
