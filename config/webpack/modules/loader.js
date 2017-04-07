const base = require('../base/base');
const files = require('../base/files');

module.exports = (dev) => {
  return {
    rules: [
      {
        test: /\.jsx$|\.js$/,
        enforce: "pre",
        exclude: [],
        include: [files.viewPath],
        use: ['happypack/loader?id=ESLint']
      },
      {
        test: /\.(js|jsx)$/,
        include: [files.viewPath, files.staticPath, files.jsPath, files.htmlPath],
        use: ['happypack/loader?id=JSX']
      },
      {
        test: /\.(css|pcss)$/, // 标准的CSS编译
        include: [files.viewPath, files.cssPath],
        use: require('extract-text-webpack-plugin').extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            query: {
              modules: false,
              outputStyle: 'expanded',
              sourceMap: dev,
              sourceMapContents: dev
            }
          }, 'postcss-loader']
        })
      },

      {
        test: /\.(html)$/,
        include: [files.htmlPath],
        use: ['happypack/loader?id=HTML']
      },

      {
        test: /\.(jpg|jpeg|png|gif|svg)$/,
        include: [files.appPath],
        use: [
          {
            loader: 'url-loader',
            query: {
              limit: 2000,
              publicPath: '/',
              name: 'assets/[name]-[hash:8].[ext]'
            }
          },
          {
            loader: 'image-webpack-loader',
            query: {
              progressive: true,
              pngquant: {
                quality: '65-90',
                speed: 4
              }
            }
          }
        ]
      },

      {
        test: /\.(svg|ico|woff|eot|ttf)$/,
        include: [files.appPath],
        use: [{
          loader: 'url-loader',
          query: {
            limit: 1,
            publicPath: '/',
            name: 'assets/[name]-[hash:8].[ext]'
          }
        }]
      }
    ]
  };
};