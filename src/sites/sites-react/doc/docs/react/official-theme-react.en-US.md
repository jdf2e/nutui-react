# Official theme

## introduce

NutUI provides multiple sets of official `UI` themes by default, while allowing new themes to be customized to a certain extent to meet the diverse visual needs of the business.

####

| theme description | scss file name |
| --- | --- |
| Jingdong APP 10.0 theme (default) | `variables.scss` |
| Jingdong JDesign Theme | `variables-jdb.scss ` |

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
        // Jingdong B Mall theme > @import "@nutui/nutui-react/dist/styles/variables-jmapp.scss";
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
                // Default Jingdong APP theme > @import "@nutui/nutui-react/dist/styles/variables.scss";
                // Jingdong B Mall theme > @import "@nutui/nutui-react/dist/styles/variables-jdb.scss";
                // Note: In different versions of sass-loader, the name of this option is different. For details, please refer to the version documentation corresponding to sass-loader
                data: `@import "@nutui/nutui-react/dist/styles/variables.scss";`,
            }
        }
    ]
}
```

:::
