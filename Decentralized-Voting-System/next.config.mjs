/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // ESLint 9 is not fully compatible with Next.js 14 build process out-of-the-box
    // This will ignore ESLint errors during the build so it can deploy successfully
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
