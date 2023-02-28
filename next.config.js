/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  //  webpack5: true,
  //   webpack: (config) => {
  //     config.resolve.fallback = { fs: false };

  //     return config;
  //   },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://demo.blcexchange.net/api/:path*',
      },
    ]
  },

  eslint: {
    dirs: ['pages', 'utils'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  },

}


module.exports = nextConfig
