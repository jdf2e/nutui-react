# Icon 圖示

### 介紹

基於 IconFont 字體的圖示集，可以通過 Icon 元件使用。

### 安裝

``` javascript
// react
import { Icon } from '@nutui/nutui-react';

```

## 代碼演示

### 基礎用法

'Icon' 的 'name' 屬性支援傳入圖示名稱或圖片連結。

:::demo
```tsx
import React from "react";
import { Icon } from '@nutui/nutui-react';

const App = () => {
  return <>
    <Icon name="dongdong" />
    <Icon name="JD" />
    <Icon size="40"
          name="https://img11.360buyimg.com/imagetools/jfs/t1/137646/13/7132/1648/5f4c748bE43da8ddd/a3f06d51dcae7b60.png" />

  </>
}

export default App;
```
:::


### 圖示顏色

'Icon' 的 'color' 屬性用來設置圖示的顏色。

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

### 圖示大小

'Icon' 的 'size' 屬性用來設置圖示的尺寸大小，預設單位為 'px'。

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

| 屬性         | 說明                             | 類型             | 預設值           |
|--------------|----------------------------------|------------------|------------------|
| name         | 圖示名稱或圖片連結               | String           | -                |
| color        | 圖示顏色                         | String           | -                |
| size         | 圖示大小，如 `20px` `2em` `2rem` | String or Number | -                |
| class-prefix | 類名前綴，用於使用自定義圖示     | String           | `nutui-iconfont` |
| tag          | tsx 標籤                        | String           | `i`              |

### Events

| 事件名稱 | 說明           | 回調參數     |
|--------|----------------|--------------|
| onClick`v1.3.8`  | 點擊圖示時觸發 | event: Event |


## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 默認值 |
| --- | --- |
| --nutui-icon-height | ` 20px` |
| --nutui-icon-width | ` 20px` |
| --nutui-icon-line-height | ` 20px` |
