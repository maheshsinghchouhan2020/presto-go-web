/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'dist',
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      }
    ]
  }
};

export default nextConfig;
