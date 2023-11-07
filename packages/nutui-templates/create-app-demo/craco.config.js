module.exports = {
  babel: {
    plugins: [
      [
        "import",
        {
          "libraryName": "@nutui/nutui-react",
          "libraryDirectory": "dist/esm",
          "style": "css",
          "camel2DashComponentName": false
        },
        "nutui-react"
      ]
    ]
  },
};