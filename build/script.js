var path = require("path");
const webpack = require("webpack");
const child_process = require("child_process");

var PATHS = {
  entryPoint: path.resolve(__dirname, "../src/index.ts"),
  bundles: path.resolve(__dirname, "../lib/dist"),
};

var config = (target, mode = "production") => ({
  optimization: {
    minimize: true,
  },

  mode,
  entry: {
    "regex-js": [PATHS.entryPoint],
  },

  output: {
    path: PATHS.bundles,
    filename: `[name].${target}.${mode}.js`,
    libraryTarget: target,
    library: "regex.js",
    umdNamedDefine: true,
  },
  // Add resolve for `tsx` and `ts` files, otherwise Webpack would
  // only look for common JavaScript file extension (.js)
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },

  // devtool: "source-map",

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "awesome-typescript-loader",
        exclude: /node_modules/,
      },
    ],
  },
});

const a = Date.now();

const configs = [];
["commonjs", "umd"].map((target) => {
  configs.push([target]);
  configs.push([target, "development"]);
});

Promise.all(
  configs.map(
    (arr) =>
      new Promise((resolve, reject) => {
        webpack(config(...arr), resolve);
      })
  )
).then(() => console.log(Date.now() - a));
