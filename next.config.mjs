// import { NextConfig } from "next"; // Type-only import removed for JavaScript compatibility

const nextConfig = {
  /* config options here */
  images: {
    domains: [],
  },
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
};

export default nextConfig;