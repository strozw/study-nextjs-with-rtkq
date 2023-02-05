const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin')

const withVanillaExtract = createVanillaExtractPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // appDir: true,
    esmExternals: 'loose',
  },
  transpilePackages: ['@visx/scale', '@visx/xychart', '@visx/react-spring', '@visx/responsive'],
}

module.exports = withVanillaExtract(nextConfig)
