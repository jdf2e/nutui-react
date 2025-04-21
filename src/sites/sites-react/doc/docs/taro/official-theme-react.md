# 官方主题

## 介绍

NutUI 默认提供多套官方`UI`主题，同时允许在一定程度上定制新主题，以满足业务的多样化视觉需求。

####

| 主题说明 | scss 文件名称 |
| --- | --- |
| 京东 APP 主题（默认） | `variables.scss` |
| 京东 JMAPP 主题 ([预览](https://nutui.jd.com/taro/react/jmapp-3x/demo/index.html#/pages/index/index)) | `variables-jmapp.scss` |

## 使用方式

需要注意的是，配置主题时，你还需要在入口文件中引入 global 类的文件来加载一些 NutUI React 的全局性逻辑和样式：

| 主题说明 | scss 文件名称 |
| --- | --- |
| 京东 APP 主题（明亮模式） | `@nutui/nutui-react-taro/dist/styles/themes/default.css` |
| 京东 APP 主题（暗黑模式） | `@nutui/nutui-react-taro/dist/styles/themes/dark.css` |
| 京东 JMAPP 主题 | `@nutui/nutui-react-taro/dist/styles/themes/jmapp.css` |
| 京东 JRKF 主题 | `@nutui/nutui-react-taro/dist/styles/themes/jrkf.css` |

目前只有默认主题提供了暗黑模式的支持。
