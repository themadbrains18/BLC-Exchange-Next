/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  //  webpack5: true,
  //   webpack: (config) => {
  //     config.resolve.fallback = { fs: false };

  //     return config;
  //   },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/api/:path*',
  //       destination: 'http://demo.blcexchange.net/api/:path*',
  //     },
  //   ]
  // },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'tokens.pancakeswap.finance',
        port: '',
        pathname: '/**',
        
      },
      {
        protocol: 'https',
        hostname: 'assets.coingecko.com',
        port: '',
        pathname: '/**',
        
      },
      {
        protocol: 'https',
        hostname: 'bitlivecoinnetwork.com',
        port: '',
        pathname: '/**',
        
      }
      
      
    ],
  },

  eslint: {
    dirs: ['pages', 'utils'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  },

}


module.exports = nextConfig
