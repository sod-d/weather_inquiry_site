const MomentLocalesPlugin = require("moment-locales-webpack-plugin");
const webpack = require("webpack");
const path = require("path");

const config = {
  devServer: {
    proxy: {
      "/pushwidgetapi": {
        target: "https://pushappintro.kma.go.kr/",
        changeOrigin: true,
      },
      "/w": {
        target: "https://www.weather.go.kr/",
      },
    },
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        // 전역으로 사용할 라이브러리 세팅
        isMorpheus: [
          path.resolve(path.join(__dirname, "src/common/morpheus.native")),
          "isMorpheus",
        ],
        $: "jquery",
        jquery: "jquery",
        "window.jQuery": "jquery",
        jQuery: "jquery",
        d3: "d3",
      }),
      new MomentLocalesPlugin({
        localesToKeep: ["ko"],
      }),
    ],
  },
};

module.exports = config;