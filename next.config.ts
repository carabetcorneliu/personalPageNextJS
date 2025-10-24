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
    serverActions: true,
  },
  // Configure images if you're using next/image
  images: {
    unoptimized: true, // Disable image optimization if not using Vercel
  },
};

export default nextConfig;
