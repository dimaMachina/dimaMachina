import nextra from 'nextra'

const withNextra = nextra({
  defaultShowCopyCode: true,
  readingTime: true
})

export default withNextra({
  reactStrictMode: true,
  cleanDistDir: true,
  output: 'export',
  images: {
    unoptimized: true
  },
  webpack(config) {
    // rule.exclude doesn't work starting from Next.js 15
    const { test: _test, ...imageLoaderOptions } = config.module.rules.find(
      rule => rule.test?.test?.('.svg')
    )
    config.module.rules.push({
      test: /\.svg$/,
      oneOf: [
        {
          resourceQuery: /svgr/,
          use: ['@svgr/webpack']
        },
        imageLoaderOptions
      ]
    })
    return config
  }
})
