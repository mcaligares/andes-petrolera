/** @type {import('next').NextConfig} */
const nextConfig = {
  // Export estatico: genera /out con index.html, inversores.html, etc.
  output: 'export',
  trailingSlash: false,
  images: {
    // El sitio usa <img> crudo, no next/image (ver ISSUES.md > PERF-01)
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
