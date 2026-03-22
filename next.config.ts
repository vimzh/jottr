import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Standard Next.js compiler (more stable than Turbopack for development)
  // Turbopack has known file system race conditions on macOS
  images: {
    domains: ["files.edgestore.dev"],
  },
  // Improve file watching stability on macOS
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.watchOptions = {
        ...config.watchOptions,
        // Use polling to avoid file system race conditions
        poll: 1000,
        // Increase aggregate timeout to prevent race conditions
        aggregateTimeout: 300,
      };
    }
    return config;
  },
};

export default nextConfig;
