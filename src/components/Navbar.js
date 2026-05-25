import Link from 'next/link';

export default function Navbar({ slug, companyName }) {
  return (
    <nav className="w-full bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href={`/${slug}`} className="text-2xl font-bold text-gray-900 tracking-tighter">
              {companyName}
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href={`/${slug}`} className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Strona Główna</Link>
            <Link href={`/${slug}/o-nas`} className="text-gray-600 hover:text-blue-600 font-medium transition-colors">O Nas</Link>
            <Link href={`/${slug}/kontakt`} className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Kontakt</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
