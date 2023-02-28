const postcss = require('rollup-plugin-postcss');

module.exports = {
  rollup(config, options) {
    config.plugins = [
      ...config.plugins,
      postcss({
        modules: true,
        inject: false,
        extract: true,
      }),
    ];
    return config;
  },
};
