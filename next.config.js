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
  },
  output: 'export',
}

module.exports = nextConfig