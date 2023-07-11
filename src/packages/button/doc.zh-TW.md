# Button 按鈕

## 介紹

按鈕用於觸發一個操作，如提交錶單。

## 安裝

```tsx
import { Button } from '@nutui/nutui-react';
```

## 代碼演示

### 按鈕類型

按鈕支持 `default`、`primary`、`info`、`warning`、`danger`、`success` 六種類型，默認為 `default`。

:::demo

```tsx
import React from "react";
import { Button } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Button type="primary">主要按鈕</Button>
      <Button type="info">信息按鈕</Button>
      <Button type="default">默認按鈕</Button>
      <Button type="danger">危險按鈕</Button>
      <Button type="warning">警告按鈕</Button>
      <Button type="success">成功按鈕</Button>
    </>
  );
};
export default App;
```

:::

### 填充模式

:::demo

```tsx
import React from "react";
import { Button } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Button fill="solid">Solid</Button>
      <Button fill="outline">Outline</Button>
      <Button fill="none">None</Button>
    </>
  );
};
export default App;
```

:::

### 禁用狀態

通過 `disabled` 屬性來禁用按鈕，禁用狀態下按鈕不可點擊。

:::demo

```tsx
import React from "react";
import { Button } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Button disabled type="primary">禁用狀態</Button>
      <Button fill="outline" disabled type="info">禁用狀態</Button>
      <Button fill="outline" disabled type="primary">禁用狀態</Button>
    </>
  );
};
export default App;
```

:::

### 按鈕形狀

通過 `shape` 屬性設置按鈕形狀，支持圓形、方形按鈕，默認為圓形。

:::demo

```tsx
import React from "react";
import { Button } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Button shape="square" type="primary">方形按鈕</Button>
      <Button type="info">圓形按鈕</Button>
    </>
  );
};
export default App;
```

:::

### 加載狀態

:::demo

```tsx
import React, { useState } from "react";
import { Button } from '@nutui/nutui-react';

const App = () => {
  const [loading, setLoading] = useState(false)
  return (
    <>
      <Button loading type="info" />
      <Button loading type="warning">加載中...</Button>
      <Button
        loading={loading}
        type="success"
        onClick={() => {
          setTimeout(() => {
            setLoading(false)
          }, 1500);
          setLoading(!loading)
        }}
        style={{ margin: 8 }}
      >
        Click me!
      </Button>
    </>
  );
};
export default App;
```

:::

### 圖標按鈕

:::demo

```tsx
import React from "react";
import { Button } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Button shape="square" plain type="primary" icon="star-fill" />
      <Button shape="square" type="primary" icon="star">收藏</Button>
      <Button
        shape="round"
        type="primary"
        size="large"
        icon="star"
        iconSize={20}
      >
        收藏
      </Button>
    </>
  );
};
export default App;
```

:::

### 按鈕尺寸

支持 `large`、`normal`、`small` 三種尺寸，默認為 `normal`。

:::demo

```tsx
import React from "react";
import { Button } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Button size="large" type="primary">大號按鈕</Button>
      <Button type="primary">普通按鈕</Button>
      <Button size="small" type="primary">小型按鈕</Button>
    </>
  );
};
export default App;
```

:::

### 塊級元素

按鈕在默認情況下為行內塊級元素，通過 `block` 屬性可以將按鈕的元素類型設置為塊級元素，常用來實現通欄按鈕。

:::demo

```tsx
import React from "react";
import { Button } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Button block type="primary">塊級元素</Button>
    </>
  );
};
export default App;
```

:::

### 自定義顏色

通過 color 屬性可以自定義按鈕的顏色。

:::demo

```tsx
import React from "react";
import { Button } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Button color="#7232dd">單色按鈕</Button>
      <Button color="#7232dd" fill="outline">單色按鈕</Button>
      <Button color="rgba(10,101,208,0.75)">單色按鈕</Button>
      <Button color="linear-gradient(to right, #ff6034, #ee0a24)">
        漸變色按鈕
      </Button>
    </>
  );
};
export default App;
```

:::

## Button

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| type | 按鈕的樣式 | `default` \| `primary` \| `info` \| `warning` \| `danger` \| `success` | `default` |
| size | 按鈕的尺寸 | `normal` \| `large` \| `small` | `normal` |
| shape | 按鈕的形狀 | `square` \| `round` | `round` |
| color | 按鈕顏色，支持傳入 linear-gradient 漸變色 | `string` | `-` |
| fill | 填充模式 | `solid` \| `ouline` \| `none` | `solid` |
| disabled | 是否禁用按鈕 | `boolean` | `false` |
| block | 是否為塊級元素 | `boolean` | `false` |
| icon | 按鈕圖標 | `ReactNode` | `-` |
| loading | 按鈕loading狀態 | `boolean` | `false` |
| onClick | 點擊按鈕時觸發 | `onClick: (e: MouseEvent) => void` | `false` |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-button-border-radius | 按鈕的圓角設置 | `25px` |
| \--nutui-button-border-width | 按鈕的邊框寬度 | `1px` |
| \--nutui-button-default-bg-color | type 為 default 的按鈕的背景色 | `$white` |
| \--nutui-button-default-border-color | type 為 default 的按鈕的邊框色 | `$text-color` |
| \--nutui-button-default-color | type 為 default 的按鈕的文本色 |`$title-color` |
| \--nutui-button-default-padding | type 為 default 的按鈕的內邊距 | `0 18px` |
| \--nutui-button-mini-padding | size 為 mini 的按鈕的內邊距 | `0 12px` |
| \--nutui-button-mini-height | size 為 mini 的按鈕的高度 | `24px` |
| \--nutui-button-small-padding | size 為 small 的按鈕的內邊距 | `0 12px` |
| \--nutui-button-small-height | size 為 small 的按鈕的高度 | `28px` |
| \--nutui-button-default-height | type 為 default 的按鈕的高度 | `38px` |
| \--nutui-button-large-height | size 為 large 的按鈕的高度 | `48px` |
| \--nutui-button-large-line-height | size 為 large 的按鈕的行高 | `46px` |
| \--nutui-button-small-line-height | size 為 small 的按鈕的行高 | `26px` |
| \--nutui-button-block-height | block 的按鈕的高度 | `48px` |
| \--nutui-button-block-line-height | block 的按鈕的行高 | `46px` |
| \--nutui-button-default-line-height | type 為 default 的按鈕的行高 | `36px` |
| \--nutui-button-default-font-size | type 為 default 的按鈕的字號 | `$font-size-2` |
| \--nutui-button-large-font-size | size 為 large 的按鈕的字號 | `$button-default-font-size` |
| \--nutui-button-small-font-size | size 為 small 的按鈕的字號 | `$font-size-1` |
| \--nutui-button-mini-font-size | size 為 mini 的按鈕的字號 | `$font-size-1` |
| \--nutui-button-mini-line-height | size 為 mini 的按鈕的行高 | `1.2` |
| \--nutui-button-text-icon-margin-left | 帶 icon按鈕的文本的左邊距 | `5px` |
| \--nutui-button-text-icon-large-margin-left | size 為 large 按鈕的文本的左邊距 | `10px` |
| \--nutui-button-text-icon-small-margin-left | size 為 small 按鈕的文本的左邊距 | `2px` |
| \--nutui-button-text-icon-mini-margin-left | size 為 mini 按鈕的文本的左邊距 | `1px` |
| \--nutui-button-disabled-opacity | disabled 狀態下按鈕的透明度 | `0.68` |
| \--nutui-button-primary-color | type 為 primary 按鈕的文本顏色 | `$white` |
| \--nutui-button-primary-border-color | type 為 primary 按鈕的邊框顏色 | `$primary-color` |
| \--nutui-button-info-color | type 為 info 按鈕的文本顏色 | `$white` |
| \--nutui-button-info-border-color | type 為 info 按鈕的邊框顏色 | `#496af2` |
| \--nutui-button-success-color | type 為 success 按鈕的文本顏色 | `$white` |
| \--nutui-button-success-border-color | type 為 success 按鈕的邊框顏色 | `rgba(38, 191, 38, 1)` |
| \--nutui-button-danger-color | type 為 danger 按鈕的文本顏色 | `$white` |
| \--nutui-button-danger-border-color | type 為 danger 按鈕的邊框顏色 | `rgba(250, 44, 25, 1)` |
| \--nutui-button-danger-background-color | type 為 danger 按鈕的背景顏色 | `rgba(250, 44, 25, 1)` |
| \--nutui-button-warning-color | type 為 warning 按鈕的文本顏色 | `$white` |
| \--nutui-button-warning-border-color | type 為 warning 按鈕的邊框顏色 | `rgba(255, 158, 13, 1)` |