// webpack-dev-server -d --hot --config $npm_package_config_build_scripts_dir/webpack/webpack.config.js --watch --progress", 
const webpack = require('webpack')
const path = require('path')

const ROOT_PATH = path.join(__dirname, '../../' )
const NODE_MODULES_PATH = path.join(__dirname, '../../node_modules' )
const DIST_PATH = path.join(__dirname, '../../public' )
const SOURCE_PATH = path.join(__dirname, '../../source' )

console.log ( 'ROOT_PATH', ROOT_PATH )

const config = {
  entry: ['babel-polyfill',`${SOURCE_PATH}/index.js`],
  output: {
    path: DIST_PATH,
    filename: 'js/main.js'
  },
  resolve: {
    extensions: ['.js', '.json'],
    modules: [
      `${SOURCE_PATH}/scripts`,
      'node_modules'
    ],
    alias: {
      'node_modules': `${NODE_MODULES_PATH}`,
      'components': `${SOURCE_PATH}/components`,
      'styles': `${SOURCE_PATH}`,
    }
  },
  module: {
    rules: [
      {
        test: /(\.js|\.jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          }, 
          {
            loader: "css-loader",
            options: { url: false }
          }, 
          {
            loader: "sass-loader"
          }, 
        ]
      }
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin()
  ],
  devServer: {
    contentBase: DIST_PATH,
    inline: true,
    publicPath: 'http://localhost:5000',
    port: 5000,
    proxy: {
      '/api/**/*': {
        disableHostCheck: false,
        target: 'http://localhost:5555',
        toProxy: true,
        changeOrigin: true
      }
    }
  },
  devtool: 'eval-source-map'
}

module.exports = config
