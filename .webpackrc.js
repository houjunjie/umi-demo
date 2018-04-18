export default {
  extraBabelPlugins: [
    ["import", { "libraryName": "antd", "style": true }],
    ["module-resolver", {
      "alias": {
        "routes": `${__dirname}/src/routes`,
        "models": `${__dirname}/src/models`,
        "services": `${__dirname}/src/services`,
        "components": `${__dirname}/src/components`,
        "utils": `${__dirname}/src/utils`,
        "config": `${__dirname}/src/config`,
      }
    }]
  ],
}
