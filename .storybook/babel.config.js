// babel.config.js
const plugins = [];

if (true) { // process.env.NODE_ENV !== 'production') {
  plugins.push([
    'babel-plugin-typescript-to-proptypes', {
      typeCheck: true
    }
  ]);
}

module.exports = {
  // Required
  presets: ['@babel/preset-typescript', '@babel/preset-react'],
  plugins: plugins,
};