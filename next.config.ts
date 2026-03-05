import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '/clickbible',
  trailingSlash: false,
  skipTrailingSlashRedirect: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
