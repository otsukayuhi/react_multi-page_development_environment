const config = require('./project.config');
const path = require('path');

module.exports = () => {
  return {
    mode: process.env.NODE_ENV || 'development',
    entry: config.entries,
    output: {
      path: `${__dirname}/${config.outDir}`,
      filename: `${config.jsDir}/[name].js`,
    },
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.css/,
          use: 'raw-loader',
        },
      ],
    },

    resolve: {
      modules: [path.resolve(__dirname, 'src'), path.resolve('./node_modules')],
      extensions: ['.ts', '.tsx', '.js', '.json'],
    },
    devServer: {
      contentBase: config.outDir,
    },
  };
};
