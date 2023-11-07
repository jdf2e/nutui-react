# Icon 圖標

## 介紹

獨立安裝 @nutui/icons-react 圖標組件包。提供兩種使用方式（Svg 按需使用、IconFont 全量使用）。

## 安裝

```bash
npm i --save @nutui/icons-react
```

## 代碼演示

### 方式一： Svg 按需使用

按需加載組件使用方式，可選項見 @nutui/icons-react/dist/types/index.d.ts

```html
import { Add } from '@nutui/icons-react';

<Add color='red' />
```

<icon-demo />

```
其中組件庫內部使用 Svg 為
Loading,Location,Location2,Check,Close,Left,Service,Top,Right,CheckNormal,Checked,CheckDisabled,DownArrow,JoySmile,Image,ImageError,CircleClose,MaskClose,Minus,Plus,ArrowUp2,ArrowDown2,Notice,CheckChecked,StarN,Tips,Loading1,TriangleUp,TriangleDown,Photograph,Failure,Del,Link,Download
```

## Icon

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| name | 圖標名稱或圖片鏈接 | `string` | `-` |
| color | 圖標顏色 | `string` | `-` |
| width | 圖標大小，如 `20px` `2em` `2rem` | `string` \| `object` | `-` |
| height | 圖標大小，如 `20px` `2em` `2rem` | `string` \| `object` | `-` |
| onClick | 點擊圖標時觸發 | `event: Event` | `-` |

## 方式二： IconFont 全量使用

```tsx
import { IconFont } from '@nutui/icons-react'
```

### 基礎用法

`Icon` 的 `name` 屬性支持傳入圖標名稱或圖片鏈接。

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

### 圖標顏色

`Icon` 的 `color` 屬性用來設置圖標的顏色。

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

### 圖標大小

`Icon` 的 `size` 屬性用來設置圖標的尺寸大小，默認單位為 `px`。

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

### 自定義圖標

如果需要在現有 Icon 的基礎上使用更多圖標，可以引入第三方 iconfont 對應的字體文件和 CSS 文件，之後就可以在 Icon 組件中直接使用。

> 方案一 引入 [iconfont](https://www.iconfont.cn/) 推薦此方案

第一步：首先在 [iconfont](https://www.iconfont.cn/) 生成妳自定義的Icon文件下載存放至本地項目 [詳細使用說明](https://www.iconfont.cn/help/detail?spm=a313x.7781069.1998910419.d8d11a391&helptype=code)

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

第二步：項目入口文件 main.js 引用 `iconfont.css`

```tsx
import './assets/font/iconfont.css';
```

第三步:

```tsx
// fontClassName 指定類名為默認 iconfont
// classPrefix 指定默認 icon
// name 值根據 iconfont.css 中值對應填寫 
import React from 'react'
import { IconFont } from '@nutui/icons-react'

const App = () => {
  return <IconFont fontClassName="iconfont" classPrefix='icon' name="close"/>
}
```

> 方案二 第三方自定義字體庫

```css
/* 引入第三方或自定義的字體圖標樣式 */
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

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| name | 圖標名稱或圖片鏈接 | `string` | `-` |
| color | 圖標顏色 | `string` | `-` |
| size | 圖標大小，如 `20px` `2em` `2rem` | `string` \| `number` | `-` |
| classPrefix | 類名前綴，用於使用自定義圖標 | `string` | `nut-iconfont` |
| fontClassName | 自定義 icon 字體基礎類名 | `string` | `nutui-iconfont` |
| tag | tsx 標簽 | `string` | `i` |
| onClick | 點擊圖標時觸發 | `event: Event` | `-` |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-icon-height | iconfont 容器的高度 | `16px` |
| \--nutui-icon-width | iconfont 容器的寬度 | `16px` |
| \--nutui-icon-line-height | iconfont 的行高 | `16px` |