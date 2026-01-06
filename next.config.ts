import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable React 19
  reactStrictMode: true,
  // Output standalone for better Netlify compatibility
  output: 'standalone',
  // Disable the React compiler for now as it's experimental
  // reactCompiler: true,
  // Enable server components
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
  // Configure images if you're using next/image
  images: {
    unoptimized: false,
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

export default nextConfig;
