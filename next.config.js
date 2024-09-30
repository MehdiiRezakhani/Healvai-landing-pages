/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'api.healvai.ir',
      'api.healvai.com',
      'media.healvai.ir',
      'media.healvai.com',
    ],
    unoptimized: false, // Re-enable image optimization
  },
  output: {
    static: true, // Enable static optimization
    export: 'always', // Ensure exports are generated
  },
}

module.exports = nextConfig
