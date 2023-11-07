# Icon 图标

## 介绍

独立安装 @nutui/icons-react 图标组件包。提供两种使用方式（Svg 按需使用、IconFont 全量使用）。

## 安装

```bash
npm i --save @nutui/icons-react
```

## 代码演示

### 方式一： Svg 按需使用

按需加载组件使用方式，可选项见 @nutui/icons-react/dist/types/index.d.ts

```html
import { Add } from '@nutui/icons-react';

<Add color='red' />
```

<icon-demo />

```
其中组件库内部使用 Svg 为
Loading,Location,Location2,Check,Close,Left,Service,Top,Right,CheckNormal,Checked,CheckDisabled,DownArrow,JoySmile,Image,ImageError,CircleClose,MaskClose,Minus,Plus,ArrowUp2,ArrowDown2,Notice,CheckChecked,StarN,Tips,Loading1,TriangleUp,TriangleDown,Photograph,Failure,Del,Link,Download
```

## Icon

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 图标名称或图片链接 | `string` | `-` |
| color | 图标颜色 | `string` | `-` |
| width | 图标大小，如 `20px` `2em` `2rem` | `string` \| `object` | `-` |
| height | 图标大小，如 `20px` `2em` `2rem` | `string` \| `object` | `-` |
| onClick | 点击图标时触发 | `event: Event` | `-` |

## 方式二： IconFont 全量使用

```tsx
import { IconFont } from '@nutui/icons-react'
```

### 基础用法

`Icon` 的 `name` 属性支持传入图标名称或图片链接。

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

### 图标颜色

`Icon` 的 `color` 属性用来设置图标的颜色。

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

### 图标大小

`Icon` 的 `size` 属性用来设置图标的尺寸大小，默认单位为 `px`。

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

### 自定义图标

如果需要在现有 Icon 的基础上使用更多图标，可以引入第三方 iconfont 对应的字体文件和 CSS 文件，之后就可以在 Icon 组件中直接使用。

> 方案一 引入 [iconfont](https://www.iconfont.cn/) 推荐此方案

第一步：首先在 [iconfont](https://www.iconfont.cn/) 生成你自定义的Icon文件下载存放至本地项目 [详细使用说明](https://www.iconfont.cn/help/detail?spm=a313x.7781069.1998910419.d8d11a391&helptype=code)

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

第二步：项目入口文件 main.js 引用 `iconfont.css`

```tsx
import './assets/font/iconfont.css';
```

第三步:

```tsx
// fontClassName 指定类名为默认 iconfont
// classPrefix 指定默认 icon
// name 值根据 iconfont.css 中值对应填写 
import React from 'react'
import { IconFont } from '@nutui/icons-react'

const App = () => {
  return <IconFont fontClassName="iconfont" classPrefix='icon' name="close"/>
}
```

> 方案二 第三方自定义字体库

```css
/* 引入第三方或自定义的字体图标样式 */
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

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 图标名称或图片链接 | `string` | `-` |
| color | 图标颜色 | `string` | `-` |
| size | 图标大小，如 `20px` `2em` `2rem` | `string` \| `number` | `-` |
| classPrefix | 类名前缀，用于使用自定义图标 | `string` | `nut-iconfont` |
| fontClassName | 自定义 icon 字体基础类名 | `string` | `nutui-iconfont` |
| tag | tsx 标签 | `string` | `i` |
| onClick | 点击图标时触发 | `event: Event` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-icon-height | iconfont 容器的高度 | `16px` |
| \--nutui-icon-width | iconfont 容器的宽度 | `16px` |
| \--nutui-icon-line-height | iconfont 的行高 | `16px` |