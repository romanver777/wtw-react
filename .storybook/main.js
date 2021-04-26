const webpackConfig = require("../webpack.config.js");
const babelConfig = require("../babel.config.js");

module.exports = {
  "stories": [
    "../src/**/*.stories.tsx"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "core": {
    "builder": "webpack4"
  },
  babel: async (options) => ({
    ...options,
    ...babelConfig,
  }),
  webpackFinal: (config) => {

    config.module.rules.push({
      test: /\.stories\.tsx$/,
      loaders: [
        {
          loader: require.resolve("@storybook/source-loader"),
          options: { parser: "typescript" },
        },
      ],
      enforce: "pre",
    });

    return { 
      ...config, 
      module: { 
        ...config.module, 
        rules: [
          ...config.module.rules,
          ...webpackConfig.module.rules
        ],
      } 
    };
  }
};