module.exports = {
  extends: 'eslint-config-ctct',
  env: {
    commonjs: true,
    amd: true
  },
  rules: {
    'no-var': 0,         // ES6 stuff
    'global-require': 0, // require()
    'max-len': ['error', 100], // maximum line length
    'max-depth': ['error', 2], // maximum depth of nested blocks
    complexity: ['error', 3],  // maximum cyclomatic complexity
    'prefer-arrow-callback': 0,
    'no-else-return': 0,
    'no-param-reassign': 0
  }
};
