module.exports = {
  // parserOptions: {
  //   ecmaVersion: 8, // or 2017
  // },
  // parser: "@babel/eslint-parser",
  // parserOptions: {
  //   requireConfigFile: false,
  //   sourceType: "module",
  //   allowImportExportEverywhere: false,
  //   ecmaFeatures: {
  //     globalReturn: false,
  //   },
  //   babelOptions: {
  //     configFile: "path/to/config.js",
  //   },
  // },
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "google",
  ],
  rules: {
    quotes: ["error", "double"],
  },
};
