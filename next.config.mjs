/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      { source: "/demo/:name", destination: "/demo/:name/index.html" },
    ];
  },
  async redirects() {
    return [
      { source: "/me", destination: "/profile", permanent: true },
      { source: "/dev", destination: "/career", permanent: true },
    ];
  },
};
export default nextConfig;
