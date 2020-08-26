const config = require('./project.config');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const entries = Object.fromEntries(
  config.pages.map((entry) => [entry.name, entry.entryPath]),
);

const htmls = config.pages.map(
  (page) =>
    new HtmlWebpackPlugin({
      title: page.title,
      filename: page.filename,
      template: path.resolve('html', page.template || 'template.ejs'),
      chunks: [page.name],
      templateParameters: {
        description: page.description,
        ogType: page.ogType,
        origin: config.origin,
        pathname: `/${page.filename.replace(/\index\.html$/, '')}`,
      },
    }),
);

const plugins = [...htmls];

module.exports = () => {
  return {
    mode: process.env.NODE_ENV || 'development',
    entry: entries,
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
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      extensions: ['.ts', '.tsx', '.js', '.json'],
    },
    devServer: {
      contentBase: path.join(__dirname, config.outDir),
      port: 3000,
      host: '0.0.0.0',
      useLocalIp: true,
      disableHostCheck: true,
    },
    plugins,
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },
  };
};
