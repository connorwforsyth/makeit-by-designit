/** @type {import('next').NextConfig} */

// We may need to remove / evolve these CSP headers.
const nextConfig = {
  async headers() {
    const cspHeader = `
    default-src 'self';

`
      .trim()
      .replace(/\n/g, " ");
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "no-referrer",
          },
          {
            key: "Content-Security-Policy",
            value: cspHeader,
          },
        ],
      },
    ];
  },
};

export default nextConfig;
