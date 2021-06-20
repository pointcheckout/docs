// https://github.com/rohit-gohri/redocusaurus/issues/57
const webpack = require('webpack');

module.exports = function (context, options) {
  return {
    name: 'custom-docusaurus-plugin',
    // eslint-disable-next-line
    configureWebpack(config, isServer, utils) {
      return {
        resolve: {
          alias: {
            path: require.resolve('path-browserify'),
          },
          fallback: {
            fs: false,
            http: require.resolve('stream-http'),
            https: require.resolve('https-browserify'),
            os: require.resolve('os-browserify/browser'),
          },
        },
        plugins: [
          new webpack.ProvidePlugin({
            process: 'process/browser',
          }),
        ],
      };
    },
  };
};
