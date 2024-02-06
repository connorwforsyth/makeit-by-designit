/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/.*",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          { key: "Content-Security-Policy", value: "self" },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
