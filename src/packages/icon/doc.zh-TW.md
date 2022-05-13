# Icon 圖示

### 介紹

基於 IconFont 字體的圖示集，可以通過 Icon 元件使用。

### 安裝

``` javascript
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

### 自訂圖示

如果需要在現有 Icon 的基礎上使用更多圖示，可以引入第三方 iconfont 對應的字體檔和 CSS 檔，之後就可以在 Icon 元件中直接使用。

```css
/* 引入第三方或自定義的字體圖示樣式 */
@font-face {
  font-family: 'my-icon';
  src: url('./my-icon.ttf') format('truetype');
}

.my-icon {
  font-family: 'my-icon';
}

.my-icon-extra::before {
  content: '\e626';
}
```

```tsx
import React from "react";
import { Icon } from '@nutui/nutui-react';

const App = () => {
  return <>
    <Icon class-prefix="my-icon" name="extra" />
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
| click  | 點擊圖示時觸發 | event: Event |
