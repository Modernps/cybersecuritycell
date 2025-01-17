/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['hebbkx1anhila5yf.public.blob.vercel-storage.com'],
  },
  webpack: (config, { isServer }) => {
    // Increase the file size limit to 10MB
    config.performance.maxAssetSize = 10 * 1024 * 1024
    return config
  },
}

module.exports = nextConfig
