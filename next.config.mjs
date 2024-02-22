/** @type {import('next').NextConfig} */

// We may need to remove / evolve these CSP headers.
const nextConfig = {
  async headers() {
    const cspHeader = ""
      //     `
      //     default-src 'self';
      //     script-src 'self';
      //     style-src 'self';
      //     img-src 'self' blob: data:;
      //     font-src 'self';
      //     object-src 'none';
      //     base-uri 'self';
      //     form-action 'self';
      //     frame-ancestors 'none';
      //     block-all-mixed-content;
      //     upgrade-insecure-requests;
      // `
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
          // Removed for now as this was messing with analytics.
          // {
          //   key: "Referrer-Policy",
          //   value: "no-referrer",
          // },
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
