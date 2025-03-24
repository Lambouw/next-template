import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false, // Disable React Strict Mode
  // -> doesnt double render -> doesnt double useEffect, ...
};

export default nextConfig;
