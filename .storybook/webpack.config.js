const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports = ({ config, mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need
  config.module.rules.push({
    test: /\.scss$/,
    loaders: ['style-loader', 'css-loader', 'sass-loader'],
    include: path.resolve(__dirname, '../'),
  });

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [
        '@babel/preset-typescript',
        '@babel/preset-react',
        ['react-app', { flow: false, typescript: true }],
      ],
      plugins: [
        ['babel-plugin-typescript-to-proptypes', { typeCheck: true }]
      ],
    },
  });

  config.resolve.extensions.push('.ts', '.tsx');

  // Return the altered config
  return config;
};