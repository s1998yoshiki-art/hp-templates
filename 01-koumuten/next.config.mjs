/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Cloudflare Pages 上では Next.js の Image Optimization API が動かないため
    // 最適化は無効化し、public/ 配下の画像を直接配信する
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
};

export default nextConfig;
