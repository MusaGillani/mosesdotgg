/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/u/**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/resume',
        destination: '/',
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/resume',
        destination: '/',
        permanent: true,
      },
    ]
  },
};

module.exports = nextConfig;
