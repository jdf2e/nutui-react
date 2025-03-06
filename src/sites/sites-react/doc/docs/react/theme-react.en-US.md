# Customize Theme

## Introduce

NutUI-React supports flexible style customization to meet multiple visual business and brand needs, including but not limited to support for global master tone and component-specific visual customization.
<br />
<br />
In NutUI-React version 2.0, the Sass theme customization function of 1.x can still be used. We added CSS variables to the original theme customization function, so that the new theme customization function can be used without introducing additional SCSS style files.

## Method 1: Use CSS Variables to configure topics

`NutUI - React` can [CSS Vars] (https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties) to organize the pattern, By overwriting these 'CSS' variables, you can achieve custom theme, dynamic switching theme and other functions.
<br />
<br />
You can play with the [ConfigProvider](#/zh-CN/component/configprovider) component.
<br />
<br />
We recommend replacing [CSS Vars] (https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties) for the theme of personalized configuration.

## Method 2: Use Sass variable for topic configuration

#### Step 1: Create a custom variable SCSS file

Create a new 'SCSS' file 'custom_theme.scss' in your local project.

```scss
// Dominant tone
$color-primary: #fa2c19;
$color-primary-end: #fa6419;
...
```

#### Step 2: Modify the configuration file of the local project webpack or vite

Modify the ** ass-loader** configuration in the 'vite' or 'webpack' configuration file. The following example

#### vite

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

#### webpack

```javascript
{
    test: /\.(sa|sc)ss$/,
    use: [
        {
            loader: 'sass-loader',
            options: {
                // Note: The option name is different for different versions of ass-loader. For details, see the corresponding version document of ass-loader
                data: `@import "./assets/custom_theme.scss";@import "@nutui/nutui/dist/styles/variables.scss";`,
            }
        }
    ]
}
```
