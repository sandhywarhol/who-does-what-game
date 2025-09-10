/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
  },
  // Remove experimental.appDir as it's deprecated in Next.js 14
  output: 'standalone', // For Vercel deployment
}

module.exports = nextConfig
