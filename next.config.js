const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  webpack (config) {
    config.module.rules.push({
      test: /\.(le|c)ss$/,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader'
        },
        
        {
          loader: 'less-loader',
          options: {
            sourceMap: true,
            lessOptions: {
              javascriptEnabled: true
            }
          }
        }
      ]
    })

    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: 'static/css/[name].css',
        chunkFilename: 'static/css/[contenthash].css'
      })
    )

    return config
  },
  async redirects() {
    return [
      {
        source: '/github',
        destination: 'https://stackoverflow.com/posts/66662033',
        permanent: false,
        basePath: false
      },
    ]
  },
}


