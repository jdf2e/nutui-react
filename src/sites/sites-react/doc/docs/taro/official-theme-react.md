# 官方主题

## 介绍

NutUI 默认提供多套官方`UI`主题，同时允许在一定程度上定制新主题，以满足业务的多样化视觉需求。

####

| 主题说明 | scss 文件名称 |
| --- | --- |
| 京东 APP 主题（默认） | `variables.scss` |
| 京东B商城主题<a target="_blank" href="https://nutui.jd.com/h5/vue/4x/?jdb#/zh-CN/component/button" >预览</a> | `variables-jdb.scss` |

<img src="https://img12.360buyimg.com/imagetools/jfs/t1/157759/16/13989/142151/6052efc7Ef8f4bff4/f3dd6422949ba4b7.jpg" width="700" alt="NutUI 主题定制"/>

## 使用方式

### 修改本地项目 vite 或者 webpack 的配置文件

修改 vite 或者 webpack 配置文件中 **sass-loader** 的配置。如下示例

#### vite 配置示例

:::demo

```javascript
// https://vitejs.dev/config/
export default defineConfig({
  //...
  css: {
    preprocessorOptions: {
      scss: {
        // 默认京东 APP 主题 > @import "@nutui/nutui-react/dist/styles/variables.scss";
        // 京东B商城主题 > @import "@nutui/nutui-react/dist/styles/variables-jdb.scss";
        additionalData: `@import "@nutui/nutui-react/dist/styles/variables.scss";`,
      },
    },
  },
})
```

:::

#### webpack 配置示例

:::demo

```javascript
{
    test: /\.(sa|sc)ss$/,
    use: [
        {
            loader: 'sass-loader',
            options: {
                // 默认京东 APP 主题 > @import "@nutui/nutui-react/dist/styles/variables.scss";
                // 京东B商城主题 > @import "@nutui/nutui-react/dist/styles/variables-jdb.scss";
                // 注意：在 sass-loader 不同版本，这个选项名是 是不一样的，具体可参考 sass-loader对应的版本文档
                data: `@import "@nutui/nutui-react/dist/styles/variables.scss";`,
            }
        }
    ]
}
```

:::

#### vue/cli 3 以上版本修改 **vue.config.js** 进行配置

:::demo

```javascript
module.exports = {
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      scss: {
        // @/ 是 src/ 的别名
        // 注意：在 sass-loader v7 中，这个选项名是 "data"
        prependData: `@import "@nutui/nutui-react/dist/styles/variables.scss";`,
      },
    },
  },
}
```

:::
