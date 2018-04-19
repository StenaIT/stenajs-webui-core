module.exports = function(wallaby) {
  // Babel, jest-cli and some other modules may be located under
  // react-scripts/node_modules, so need to let node.js know about it
  var path = require('path');
  process.env.NODE_PATH +=
    path.delimiter +
    path.join(__dirname, 'node_modules') +
    path.delimiter +
    path.join(__dirname, 'node_modules/react-scripts-ts/node_modules');
  require('module').Module._initPaths();

  return {
    files: ['tsconfig.json', 'tsconfig.test.json', 'src/**/*.+(ts|tsx|json|snap|css)', '!src/**/*.test.ts?(x)'],

    tests: ['src/**/*.test.ts?(x)'],

    env: {
      runner: 'node',
      type: 'node',
    },

    compilers: {
      '**/*.js?(x)': wallaby.compilers.babel({
        babel: require('babel-core'),
        presets: ['react-app'],
      }),
      '**/*.ts?(x)': wallaby.compilers.typeScript({
        jsx: 'React',
        module: 'commonjs',
      }),
    },

    setup: w => {
      const jestConfig = require('react-scripts-ts/scripts/utils/createJestConfig')(p =>
        require.resolve('react-scripts-ts/' + p),
      );
      delete jestConfig.transform['^.+\\.(js|jsx)$'];
      delete jestConfig.transform['^.+\\.(ts|tsx)$'];
      delete jestConfig.testEnvironment;
      w.testFramework.configure(jestConfig);
    },

    preprocessors: {
      '**/*.js': file =>
        require('babel-core').transform(file.content, { sourceMap: true, presets: ['babel-preset-jest'] }),
    },

    testFramework: 'jest',
  };
};
