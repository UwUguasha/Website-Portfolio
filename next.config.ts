import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // makes next export work
  basePath: '/Website-Portfolio',
};

module.exports = nextConfig;

export default nextConfig;
