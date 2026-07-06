/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/codebounty-ai',
  assetPrefix: '/codebounty-ai',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
