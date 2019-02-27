module.exports = {
  //  presets: ['@babel/preset-env', '@babel/preset-react'],
  //  plugins: ['@babel/plugin-proposal-export-default-from'],
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    ["module-resolver", { alias: { "^react-native$": "react-native-web" } }],
    "react-native-web"
  ]
};
