export default function Footer({ companyName }) {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 text-center border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-lg font-semibold text-white mb-2">{companyName}</p>
        <p>&copy; {new Date().getFullYear()} Wszelkie prawa zastrzeżone.</p>
        <p className="mt-4 text-sm text-gray-600">Zaprojektowane i wdrożone przez AI Coder</p>
      </div>
    </footer>
  );
}
