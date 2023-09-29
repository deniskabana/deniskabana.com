/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.('.svg'))

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        resourceQuery: /url/,
        test: /\.svg$/i, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: /url/ },
        test: /\.svg$/i, // exclude if *.svg?url
        use: ['@svgr/webpack'],
      },
    )

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i

    return config
  },

  output: 'export',
}

module.exports = nextConfig
