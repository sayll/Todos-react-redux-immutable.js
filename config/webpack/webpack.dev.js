const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./base/base.js');

let config = require('./webpack.config.js')({ dev: true });

module.exports = merge(config, {

  devtool: "inline-source-map", // inline-source-map.cheap-source-map

  performance: { // 关闭hot更新导致文件过大提示
    hints: false // 性能提示[warning,error,false]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally

    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates
  ],

});