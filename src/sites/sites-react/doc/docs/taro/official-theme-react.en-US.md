# Official theme

## introduce

NutUI provides multiple sets of official `UI` themes by default, while allowing new themes to be customized to a certain extent to meet the diverse visual needs of the business.

####

| theme description | scss file name |
| --- | --- |
| Jingdong APP theme (default) | `variables.scss` |
| Jingdong B Mall Theme <a target="_blank" href="https://nutui.jd.com/h5/vue/4x/?jdb#/zh-CN/component/button" >Preview</a> | `variables-jdb.scss ` |

<img src="https://img12.360buyimg.com/imagetools/jfs/t1/157759/16/13989/142151/6052efc7Ef8f4bff4/f3dd6422949ba4b7.jpg" width="700" alt="NutUI theme customization">

## How to use

### Modify the configuration file of the local project vite or webpack

Modify the **sass-loader** configuration in the vite or webpack configuration file. The following example

#### vite configuration example

:::demo

```javascript
// https://vitejs.dev/config/
export default defineConfig({
  //...
  css: {
    preprocessorOptions: {
      scss: {
        // Default Jingdong APP 10.0 theme > @import "@nutui/nutui-react/dist/styles/variables.scss";
        // Jingdong B Mall theme > @import "@nutui/nutui-react/dist/styles/variables-jdb.scss";
        additionalData: `@import "@nutui/nutui-react/dist/styles/variables.scss";`,
      },
    },
  },
})
```

:::

#### webpack configuration example

:::demo

```javascript
{
    test: /\.(sa|sc)ss$/,
    use: [
        {
            loader: 'sass-loader',
            options: {
                // Default Jingdong APP 10.0 theme > @import "@nutui/nutui-react/dist/styles/variables.scss";
                // Jingdong B Mall theme > @import "@nutui/nutui-react/dist/styles/variables-jdb.scss";
                // Note: In different versions of sass-loader, the name of this option is different. For details, please refer to the version documentation corresponding to sass-loader
                data: `@import "@nutui/nutui-react/dist/styles/variables.scss";`,
            }
        }
    ]
}
```

:::
