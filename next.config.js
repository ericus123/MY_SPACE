/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    minimumCacheTTL: 31536000,
    domains: [
      "files.amanieric.com"
    ]
  }
}

module.exports = nextConfig
