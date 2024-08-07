# Icon

Install the @nutui/icons-react icon component package independently. Two usage methods are provided (Svg on demand, IconFont in full).

## Import

```bash
npm i --save @nutui/icons-react
```

## Demo

### Method 1: Svg import on demand

How to load components on demand, see @nutui/icons-react/dist/types/index.d.ts for options

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

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

```tsx
import { IconFont } from '@nutui/icons-react'
```

### Basic Usage

The `name` attribute of `Icon` supports passing in the icon name or image link.

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### Image link

The `name` attribute of `Icon` supports passing in the icon name or image link.

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### IconFont color

The `color` property of `Icon` is used to set the color of the icon.

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### IconFont size

The `size` attribute of `Icon` is used to set the size of the icon, and the default unit is `px`.

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### Custom icon

If you need to use more icons based on the existing Icon, you can import the font file and CSS file corresponding to the third-party iconfont, and then use it directly in the Icon component.

> Solution 1 Introduce [iconfont](https://www.iconfont.cn/) Recommend this solution

Step 1: First generate your custom Icon file in [iconfont](https://www.iconfont.cn/), download and store it in the local project \[detailed instructions\](https://www.iconfont.cn/help/detail?spm=a313x.7781069.1998910419.d8d11a391&helptype=code)

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

```tsx
import './assets/font/iconfont.css'
```

Step 3:

```tsx
// fontClassName specifies the class name as the default iconfont
// classPrefix specifies the default icon
// The name value is filled in according to the value in iconfont.css
import React from 'react'
import { IconFont } from '@nutui/icons-react'

const App = () => {
  return <IconFont fontClassName="iconfont" classPrefix="icon" name="close" />
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
import React from 'react'
import { IconFont } from '@nutui/icons-react'

const App = () => {
  return (
    <>
      <IconFont fontClassName="my-icon" classPrefix="icon" name="extra" />
    </>
  )
}

export default App
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
