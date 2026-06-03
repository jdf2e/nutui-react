# Customize Theme

## Introduce

NutUI-React supports flexible style customization to meet multiple visual business and brand needs, including but not limited to support for global master tone and component-specific visual customization.
<br />
<br />
In NutUI-React, the Sass theme customization function can still be used. We added CSS variables to the original theme customization function, so that the new theme customization function can be used without introducing additional SCSS style files.

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

**When customizing themes using SCSS files, you need to set the on-demand import to the SCSS file method. Refer to the description in the automatic on-demand loading configuration in the quick start guide.**

```scss
// Dominant tone
$color-primary: #fa2c19;
$color-primary-stop-1: #fa6419;
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
                data: `@import "./assets/custom_theme.scss";@import "@nutui/nutui-react/dist/styles/variables.scss";`,
            }
        }
    ]
}
```

## Dark Mode

NutUI-React natively supports dark mode. The component library uses a set of independently tuned color variables in dark mode.

### Option A: App-Active Switch (Recommended)

If your application requires users to manually toggle between light and dark modes in the settings (not strictly following the system), you can use the **class name toggle solution**.

#### 1. Import Styles

First, import the component library's default styles and dark theme styles in the project entry file. You can choose to import CSS or SCSS depending on your project needs:

##### Import CSS styles (for general JS/TS projects):

Refer to Method 2.

##### Import SCSS styles (for projects configured with Sass preprocessor):

Refer to Method 2.

#### 2. Mount Class Name

Mount the `.nut-theme-dark` class name on the root node of the project (such as `html`, `body` or the outermost wrapper element in React) to apply the dark theme.

The value of `isDark` needs to bridge the implementation of the APP.

```tsx
import React, { useState } from 'react'

function App() {
  const [isDark, setIsDark] = useState(false)

  return (
    <div className={isDark ? 'nut-theme-dark' : ''}>
      <button onClick={() => setIsDark(!isDark)}>
        Current Mode: {isDark ? 'Dark' : 'Light'}
      </button>
      {/* Your other components */}
    </div>
  )
}
```

#### 3. Customize with ConfigProvider

If you need to control the dark mode more flexibly in React logic, or fine-tune colors in dark mode, you can use it in combination with `ConfigProvider`:

```tsx
import React, { useState } from 'react'
import { ConfigProvider } from '@nutui/nutui-react'

// Custom primary color in dark mode
const darkTheme = {
  nutuiColorPrimary: '#ff0f23',
  nutuiColorBackgroundOverlay: '#1f2226',
}

function App() {
  const [isDark, setIsDark] = useState(false)

  return (
    <ConfigProvider
      theme={isDark ? darkTheme : undefined}
      className={isDark ? 'nut-theme-dark' : ''}
    >
      <button onClick={() => setIsDark(!isDark)}>Toggle Mode</button>
      {/* The component library will automatically detect .nut-theme-dark in dark mode, and variables customized through the theme attribute will automatically override. */}
    </ConfigProvider>
  )
}
```

---

### Option B: System Media Query

If your application is designed to **automatically follow the system's** light/dark mode settings without providing a manual toggle, you can use the **system media query solution**.

#### 1. Write Custom CSS/SCSS

You can create a global style file in your project (such as `dark-mode.scss`) and use media queries to automatically apply dark mode style mappings:

```scss
@media (prefers-color-scheme: dark) {
  :root {
    // Import the dark variable mappings built into the component library
    @import '@nutui/nutui-react/dist/styles/theme-dark.scss';
  }
}
```

#### 2. Import in Entrance

Import the style file directly in the project entry file. When the system/browser toggles to dark mode, the style will automatically load without JS logic intervention.

---

### Option Comparison and Selection Recommendations

| Solution | Applicable Scenario | Implementation Principle | Advantages |
| --- | --- | --- | --- |
| **Option A (Follow App)** | Need manual toggle switch of "dark/light/system" in application, not strongly bound to system. | Mount class name `.nut-theme-dark` or combine with `ConfigProvider` | Highest flexibility, supports applying dark mode to partial containers, easily customized via JS. |
| **Option B (Follow System)** | No manual toggle switch needed, page automatically shows dark mode when user system is dark. | CSS media query `@media` | No JS intervention required, fully automated by the browser rendering engine. |

```

```
