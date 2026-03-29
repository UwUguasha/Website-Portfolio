import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // makes next export work
  basePath: '/Website-Portfolio', //comment this line for local dev
};

module.exports = nextConfig;

export default nextConfig;
