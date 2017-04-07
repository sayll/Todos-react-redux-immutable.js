const webpack = require('webpack');
const express = require('express');
const Dashboard = require('webpack-dashboard');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const base = require('../config/webpack/base/base');
const files = require('../config/webpack/base/files');
const webpackConfig = require('../config/webpack/webpack.dev');

const app = express();
const DashboardPlugin = require('webpack-dashboard/plugin');

/**
 * Apply Webpack HMR Middleware
 * */

if (process.env.NODE_ENV === 'development') {
  const compiler = webpack(webpackConfig);

  compiler.apply(
    new DashboardPlugin(new Dashboard({
      color: '#05ccfb',
      minimal: true,
      port: base.devPort
    }).setData)
  );

  app.use(webpackDevMiddleware(compiler, {
    publicPath: files.cdnPath,
    stats: { colors: true },
    noInfo: false,
    quiet:  true,
    hot:    true,
  }));

  app.use(webpackHotMiddleware(compiler));

  app.use('/', express.static(files.buildPath));
  app.listen(base.devPort, () => {
    console.log(`open localhost:${base.devPort}`);
  });
}
else {
  console.log(
    `Server not being run of live development mode,
      Please use the NODE_ENV=development mode to run`
  );
}

module.exports = app;
