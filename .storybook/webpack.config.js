const path = require('path');
const webpack = require('webpack');

const libPath = path.resolve('libs');

module.exports = {
  module: {
    rules: [
      {
        test: /\.less$/,
        loaders: ['style-loader', 'css-loader', 'less-loader'],
        include: path.resolve(__dirname, '../')
      }
    ]
  },
  plugins: [
    new webpack.NormalModuleReplacementPlugin(/@myorgworkspace/, function(
      resource
    ) {
      resource.request = resource.request.replace(/@myorgworkspace/, libPath);
    })
  ]
};
