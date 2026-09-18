/** @type {import('next').NextConfig} */
const nextConfig = {
  // Next 16 sam dopisuje AGENTS.md i CLAUDE.md przy kazdym `next dev`.
  // Ten katalog jedzie rsynciem do publicznego repo dem, wiec zaslepki
  // ladowaly razem z nim. Wylaczone 2026-09-18.
  agentRules: false,
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  // Zezwolenie na ładowanie skryptów deweloperskich po sieci lokalnej (drugi komputer)
  allowedDevOrigins: [
    '192.168.1.13',
    '192.168.1.14',
    '192.168.1.15',
    '192.168.0.13',
    '192.168.0.14',
    '10.0.0.13'
  ]
};

export default nextConfig;
