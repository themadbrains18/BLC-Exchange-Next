/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  //  webpack5: true,
  //   webpack: (config) => {
  //     config.resolve.fallback = { fs: false };

  //     return config;
  //   },

  eslint: {
    dirs: ['pages', 'utils'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  },

}


module.exports = nextConfig
