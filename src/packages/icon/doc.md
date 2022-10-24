# Icon 图标

### 介绍

基于 IconFont 字体的图标集，可以通过 Icon 组件使用。

### 安装

``` javascript
import { Icon } from '@nutui/nutui-react';
```

## 代码演示

### 基础用法

`Icon` 的 `name` 属性支持传入图标名称或图片链接。

:::demo
```tsx
import React from "react";
import { Icon } from '@nutui/nutui-react';

const App = () => {
  return <>
    <Icon name="dongdong" />
    <Icon name="JD"/>
    <Icon size="40"  name="https://img11.360buyimg.com/imagetools/jfs/t1/137646/13/7132/1648/5f4c748bE43da8ddd/a3f06d51dcae7b60.png"/>
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
import { Icon } from '@nutui/nutui-react';

const App = () => {
  return <>
    <Icon name="dongdong" color="#fa2c19" />
    <Icon name="dongdong" color="#64b578" />
    <Icon name="JD" color="#fa2c19" />
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
import { Icon } from '@nutui/nutui-react';

const App = () => {
  return <>
    <Icon name="dongdong" />
    <Icon name="dongdong" size="24" />
    <Icon name="dongdong" size="16" />
  </>
}

export default App;
```
:::
### 自定义图标

如果需要在现有 Icon 的基础上使用更多图标，可以引入第三方 iconfont 对应的字体文件和 CSS 文件，之后就可以在 Icon 组件中直接使用。

> 方案一 引入 [iconfont](https://www.iconfont.cn/)   推荐此方案

第一步：首先在 [iconfont](https://www.iconfont.cn/) 生成你自定义的Icon文件下载存放至本地项目  [详细使用说明](https://www.iconfont.cn/help/detail?spm=a313x.7781069.1998910419.d8d11a391&helptype=code)

``` bash
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


``` javascript
import './assets/font/iconfont.css';
```

第三步:

```tsx
// fontClassName 指定类名为默认 iconfont
// classPrefix 指定默认 icon
// name 值根据 iconfont.css 中值对应填写 
import React from 'react'
import Icon from '@nutui/nutui-react'

const App = () => {
  return <Icon fontClassName="iconfont" classPrefix='icon' name="close"/>
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
import { Icon } from '@nutui/nutui-react';

const App = () => {
  return <>
    <Icon fontClassName="my-icon" classPrefix="icon" name="extra" />
  </>
}

export default App;
```

## API

### Props

| 参数          | 说明                             | 类型             | 默认值           |
|-------------|----------------------------------|------------------|------------------|
| name        | 图标名称或图片链接               | String           | -                |
| color       | 图标颜色                         | String           | -                |
| size        | 图标大小，如 `20px` `2em` `2rem` | String or Number | -                |
| classPrefix | 类名前缀，用于使用自定义图标     | String           | `nut-iconfont` |
| fontClassName           | 自定义 icon 字体基础类名                        | String           | `nutui-iconfonti`              |
| tag         | tsx 标签                        | String           | `i`              |

### Events

| 事件名           | 说明           | 回调参数     |
|---------------|----------------|--------------|
| onClick`v1.3.8` | 点击图标时触发 | event: Event |
