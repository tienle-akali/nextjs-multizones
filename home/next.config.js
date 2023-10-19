/** @type {import('next').NextConfig} */

const { NEXT_PUBLIC_TOUR_URL } = process.env;

const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: `/:path*`,
      },
      {
        source: "/about",
        destination: `http://localhost:3202/about`,
        basePath: false,
      },
      {
        source: "/about/:path*",
        destination: `http://localhost:3202/about/:path*`,
      },
      {
        source: "/tour",
        destination: `http://localhost:3201/tour`,
        basePath: false,
      },
      {
        source: "/tour/:path*",
        destination: `http://localhost:3201/tour/:path*`,
      },
      {
        source: "/feed",
        destination: `https://www.facebook.com`,
        basePath: false,
      },
      {
        source: "/hotel",
        destination: `https://www.google.com/travel/search`,
        basePath: false,
      },
      {
        source: "/flight",
        destination: `https://www.google.com/travel/flights`,
        basePath: false,
      },
      {
        source: "/youtube",
        destination: `https://www.youtube.com`,
        basePath: false,
      },
      {
        source: "/help",
        destination: `https://support.google.com`,
        basePath: false,
      },
    ];
  },
};

module.exports = nextConfig;
