const path = require("path");
const { flow } = require("lodash");

// https://github.com/arackaf/customize-cra/blob/master/index.js#L149
const override = (...plugins) => flow(...plugins.filter(f => f));

// https://github.com/arackaf/customize-cra/blob/master/index.js#L25
const getBabelLoader = config => {
  const babelLoaderFilter = rule =>
    rule.loader &&
    rule.loader.includes("babel") &&
    rule.options &&
    rule.options.plugins;

  const loaders = config.module.rules.find(rule => Array.isArray(rule.oneOf))
    .oneOf;
  return loaders.find(babelLoaderFilter);
};

// https://github.com/arackaf/customize-cra/blob/master/index.js#L48
const addBabelPlugin = plugin => (config, env) => {
  getBabelLoader(config).options.plugins.push(plugin(env));
  return config;
};

// https://github.com/arackaf/customize-cra/blob/master/index.js#L144
const babelInclude = include => config => {
  getBabelLoader(config).include = include;
  return config;
};

module.exports = override(
  babelInclude([path.resolve("src"), path.resolve("../node_modules/@walmart")]),
  addBabelPlugin(env => [
    require.resolve("babel-plugin-emotion"),
    {
      autoLabel: env !== "production",
      sourceMap: env !== "production",
      outputDir: "node_modules/.cache/mds"
      // TODO: disable until css problems are solved
      // extractStatic: env === "production"
    }
  ])
);
