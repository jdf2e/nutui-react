module.exports = {
  webpack: {
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            'style-loader',
            'css-loader',
            {
              loader: "sass-loader",
              options: {
                additionalData: `@import '@nutui/nutui-react/dist/styles/variables.scss';`
                // JDesign 主题
                // additionalData: `@import '@nutui/nutui-react/dist/styles/variables-jmapp.scss';`
                // JRKF 主题
                // additionalData: `@import '@nutui/nutui-react/dist/styles/variables-jrkf.scss';`
              },
            },
          ],
        },
      ],
    },
  },
  babel: {
    plugins: [
      [
        'import',
        {
          libraryName: '@nutui/nutui-react',
          camel2DashComponentName: false,
          customName: (name, file) => {
            return `@nutui/nutui-react/dist/es/packages/${name.toLowerCase()}`
          },
          // 自动加载 scss 样式文件
          customStyleName: (name) => `@nutui/nutui-react/dist/es/packages/${name.toLowerCase()}/style`
          // 自动加载 css 样式文件
          // customStyleName: (name) => `@nutui/nutui-react/dist/es/packages/${name.toLowerCase()}/style`
        },
        'nutui-react',
      ],
    ]
  },
};