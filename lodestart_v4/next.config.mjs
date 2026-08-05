/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [{ source: "/newsletter", destination: "/insights", permanent: false }];
  },
};

export default nextConfig;
