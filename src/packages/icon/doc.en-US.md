# Icon

## Intro

Install the @nutui/icons-react icon component package independently. Two usage methods are provided (Svg on demand, IconFont in full).

## Install

```bash
npm i --save @nutui/icons-react
```

## Demo

### Method 1: Svg is used on demand

How to load components on demand, see @nutui/icons-react/dist/types/index.d.ts for options

```html
import { Add } from '@nutui/icons-react';

<Add color='red' />
```

<icon-demo />

```
where the component library internally uses Svg as:
Loading,Location,Location2,Check,Close,Left,Service,Top,Right,CheckNormal,Checked,CheckDisabled,DownArrow,JoySmile,Image,ImageError,CircleClose,MaskClose,Minus,Plus,ArrowUp2,ArrowDown2,Notice,CheckChecked,StarN,Tips,Loading1,TriangleUp,TriangleDown,Photograph,Failure,Del,Link,Download
```

## SVG Icon

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| name | Icon name or image link | `string` | `-` |
| color | icon color | `string` | `-` |
| width | Icon size, such as `20px` `2em` `2rem` | `string` \| `object` | `-` |
| height | Icon size, such as `20px` `2em` `2rem` | `string` \| `object` | `-` |
| onClick | Triggered when the icon is clicked | `event: Event` | `-` |

## Method 2: Use IconFont in full

```js
import { IconFont } from '@nutui/icons-react'
```

### Basic

The `name` attribute of `Icon` supports passing in the icon name or image link.

:::demo

```tsx
import React from "react";
import { IconFont } from '@nutui/icons-react'

const App = () => {
  return <>
    <IconFont name="dongdong" />
    <IconFont name="JD"/>
    <IconFont size="40"  name="https://img11.360buyimg.com/imagetools/jfs/t1/137646/13/7132/1648/5f4c748bE43da8ddd/a3f06d51dcae7b60.png"/>
  </>
}
export default App;

```

:::

### Icon color

The `color` property of `Icon` is used to set the color of the icon.

:::demo

```tsx
import React from "react";
import { IconFont } from '@nutui/icons-react'

const App = () => {
  return <>
    <IconFont name="dongdong" color="#fa2c19" />
    <IconFont name="dongdong" color="#64b578" />
    <IconFont name="JD" color="#fa2c19" />
  </>
}

export default App;
```

:::

### Icon size

The `size` attribute of `Icon` is used to set the size of the icon, and the default unit is `px`.

:::demo

```tsx
import React from "react";
import { IconFont } from '@nutui/icons-react'

const App = () => {
  return <>
    <IconFont name="dongdong" />
    <IconFont name="dongdong" size="24" />
    <IconFont name="dongdong" size="16" />
  </>
}

export default App;
```

:::

### Custom icon

If you need to use more icons based on the existing Icon, you can import the font file and CSS file corresponding to the third-party iconfont, and then use it directly in the Icon component.

> Solution 1 Introduce [iconfont](https://www.iconfont.cn/) Recommend this solution

Step 1: First generate your custom Icon file in [iconfont](https://www.iconfont.cn/), download and store it in the local project \[detailed instructions\](https://www.iconfont.cn/help /detail?spm=a313x.7781069.1998910419.d8d11a391&helptype=code)

```bash
/assets/font/demo.css
/assets/font/demo_index.html
/assets/font/iconfont.css
/assets/font/iconfont.js
/assets/font/iconfont.json
/assets/font/iconfont.ttf
/assets/font/iconfont.woff
/assets/font/iconfont.woff2
```

Step 2: Project entry file main.js references `iconfont.css`

```javascript
import './assets/font/iconfont.css';
```

Step 3:

```tsx
// fontClassName specifies the class name as the default iconfont
// classPrefix specifies the default icon
// The name value is filled in according to the value in iconfont.css
import React from 'react'
import { IconFont } from '@nutui/icons-react'

const App = () => {
  return <IconFont fontClassName="iconfont" classPrefix='icon' name="close"/>
}
```

> Solution 2: Third-party custom font library

```css
/* Import third-party or custom font icon styles */
@font-face {
  font-family: 'my-icon';
  src: url('./my-icon.ttf') format('truetype');
}

.my-icon {
  font-family: 'my-icon';
}

.icon-extra::before {
  content: '\e626';
}
```

```tsx
import React from "react";
import { IconFont } from '@nutui/icons-react'

const App = () => {
  return <>
    <IconFont fontClassName="my-icon" classPrefix="icon" name="extra" />
  </>
}

export default App;
```

## IconFont

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| name | icon name or image link | `string` | `-` |
| color | icon color | `string` | `-` |
| size | icon size, such as `20px` `2em` `2rem` | `string` \| `number` | `-` |
| classPrefix | class name prefix for using custom icons | `string` | `nut-iconfont` |
| fontClassName | custom icon font base class name | `string` | `nutui-iconfont` |
| tag | tsx tag | `string` | `i` |
| onClick | Triggered when the icon is clicked | `event: Event` | `-` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-icon-height | height of iconfont container | `16px` |
| \--nutui-icon-width | width of iconfont container | `16px` |
| \--nutui-icon-line-height | iconfont line height | `16px` |