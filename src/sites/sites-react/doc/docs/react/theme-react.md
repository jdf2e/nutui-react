# 主题定制

## 介绍

NutUI-React 支持灵活的样式定制，满足多种视觉业务和品牌需求，包括但不限于全局主色调和特定组件视觉定制的支持。
<br />
<br />
在 NutUI-React 的 2.0 版本中，依然可以使用 1.x 的 Sass 定制主题功能，我们在原有的主题定制功能上新增了 CSS 变量， 无需引入额外的 SCSS 样式文件，就可以使用到新的主题定制功能。

## 方式一 使用 CSS Variables 进行主题配置

`NutUI-React` 组件可以通过 [CSS Vars](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties) 来组织样式，通过覆盖这些 `CSS` 变量，可以实现定制主题、动态切换主题等功能。
<br />
<br />
您可在 [ConfigProvider 组件](#/zh-CN/component/configprovider) 进行体验。我们更推荐使用替换 [CSS Vars](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties) 的方式来进行个性化的主题配置。

## 方式二 使用 Sass 变量 进行主题配置

### 第一步 新建自定义变量 SCSS 文件

在本地项目中新建一个 `SCSS` 文件 `custom_theme.scss` 进行自定义。

```scss
// 主色调
$color-primary: #fa2c19;
$color-primary-end: #fa6419;
...
```

### 第二步 修改本地项目 Webpack 或者 Vite 的配置文件

修改 `vite` 或者 `webpack` 配置文件中 **sass-loader** 的配置。如下示例：

#### Vite 方式

```javascript
// https://vitejs.dev/config/
export default defineConfig({
  //...
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@nutui/nutui-react/dist/styles/variables.scss";@import "./your/custom_theme.scss";`,
      },
    },
  },
})
```

#### Webpack 方式

```javascript
{
  test: /\.(sa|sc)ss$/,
  use: [
    {
      loader: 'sass-loader',
      options: {
        // 注意：在 sass-loader 不同版本，这个选项名是 是不一样的，具体可参考 sass-loader对应的版本文档
        data: `@import "./assets/custom_theme.scss";@import "@nutui/nutui/dist/styles/variables.scss";`,
      }
    }
  ]
}
```
