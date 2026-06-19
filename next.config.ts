import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["@phosphor-icons/react"],
  },

  allowedDevOrigins: ["zigzagged-crumpled-endearing.ngrok-free.dev"],
};

export default nextConfig;
