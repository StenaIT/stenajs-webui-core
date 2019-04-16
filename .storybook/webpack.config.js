const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin-alt');

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [require.resolve('babel-preset-react-app')]
    }
  });

  config.resolve.extensions.push('.ts', '.tsx');

  config.plugins.push(
    new ForkTsCheckerWebpackPlugin({
      async: true,
      checkSyntacticErrors: true,
      memoryLimit: 8192,
      formatter: require('react-dev-utils/typescriptFormatter'),
      workers: 4
    }),
  );

  return config;
};