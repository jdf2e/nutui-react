# 主题定制

## 介绍

NutUI-React 支持灵活的样式定制，满足多种视觉业务和品牌需求，包括但不限于全局主色调和特定组件视觉定制的支持。
<br />
在 NutUI-React 的 1.4.0 版本中，依然可以使用 1.x 的 Sass 定制主题功能，我们在原有的主题定制功能上新增了 CSS 变量， 无需引入额外的 SCSS 样式文件，就可以使用到新的主题定制功能。

## 方式一 使用 CSS Variables 进行主题配置

`NutUI-React` 组件可以通过 [CSS Vars](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties) 来组织样式，通过覆盖这些 `CSS` 变量，可以实现定制主题、动态切换主题等功能。
<br />
您可在 [ConfigProvider 组件](#/zh-CN/component/configprovider) 进行体验。
<br />
我们更推荐使用替换 [CSS Vars](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties) 的方式来进行个性化的主题配置。

## 方式二 使用 Sass 变量 进行主题配置

### 第一步 新建自定义变量 SCSS 文件

在本地项目中新建一个 `SCSS` 文件 `custom_theme.scss` 进行自定义。

```scss
// 主色调
$color-primary: #fa2c19;
$color-primary-end: #fa6419;
...
```

### 第二步 修改本地项目 webpack 或者 vite 的配置文件

#### Taro 小程序使用示例

修改 `config/index.js` 文件中配置 `scss` 文件，全局覆盖如：

```javascript
const path = require('path');
const config = {
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
    375: 2 / 1
  },
  sass: {
    resource: [
      path.resolve(__dirname, '..', 'src/assets/styles/custom_theme.scss')
    ],
    // 默认京东 APP 10.0主题 > @import "@nutui/nutui-react-taro/dist/styles/variables.scss";
    data: `@import "@nutui/nutui-react-taro/dist/styles/variables.scss";`
	},
  // ...
```
