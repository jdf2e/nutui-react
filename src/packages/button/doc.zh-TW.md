# Button 按鈕

### 介紹

按鈕用於觸發一個操作，如提交表單。

### 安裝

``` javascript
// react
import { Button } from '@nutui/nutui-react';
```

## 代碼演示

### 按鈕類型

按鈕支援 'default'、'primary'、'info'、'warning'、'danger'、'success' 六種類型，預設為 'default'。

:::demo
```tsx
import React from "react";
import { Button } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Button type="primary">主要按鈕</Button>
      <Button type="info">資訊按鈕</Button>
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

通過 'disabled' 屬性來禁用按鈕，禁用狀態下按鈕不可點擊。

:::demo

```tsx
import React from "react";
import { Button } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Button disabled type="primary">禁用狀態</Button>
      <Button plain disabled type="info">禁用狀態</Button>
      <Button plain disabled type="primary">禁用狀態</Button>
    </>
  );
};
export default App;
```

:::

### 按鈕形狀

通過 『shape』 屬性設置按鈕形狀，支援圓形、方形按鈕，預設為圓形。

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

### 載入狀態

:::demo

```tsx
import React, { useState } from "react";
import { Button } from '@nutui/nutui-react';

const App = () => {
  const [loading, setLoading] = useState(false)
  return (
    <>
      <Button loading type="info" />
      <Button loading type="warning">載入中...</Button>
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

### 圖示按鈕

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

支援 'large'、'normal'、'small' 三種尺寸，預設為 'normal'。

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

按鈕在預設情況下為行內塊級元素，通過 'block' 屬性可以將按鈕的元素類型設置為塊級元素，常用來實現通欄按鈕。

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
      <Button color="#7232dd" plain>單色按鈕</Button>
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

## API

### Props

| 參數       | 說明                            | 類型          | 默認值      |
|----------|-------------------------------|-------------|----------|
| type     | 按鈕的樣式                         | `'default' \| 'primary' \| 'info' \| 'warning' \| 'danger' \| 'success'` | `'default'` |
| size     | 按鈕的尺寸                         | `'normal' \| 'large' \| 'small'` | `'normal'`  |
| shape    | 按鈕的形狀                         | `'square' \| 'round'`   | `'round'` |
| color    | 按鈕顏色，支持傳入 linear-gradient 漸變色 | `string`    | -        |
| fill     | 填充模式                          | `'solid' \| 'ouline' \| 'none'`  | `'solid'` |
| disabled | 是否禁用按鈕                        | `boolean`   | `false`  |
| block    | 是否為塊級元素                       | `boolean`   | `false`  |
| icon     | 按鈕圖標                          | `ReactNode` | -        |
| loading  | 按鈕loading狀態                   | `boolean`   | `false`  |
### Events

| 事件名稱 | 說明 | 回調參數     |
|--------|----------------|--------------|
| onClick  | 点击按钮时触发 | `event: MouseEvent` |

### 支持小程序API能力

目前1.3.11版本以前不支持原生小程序API,
如果你是需要使用原生小程序button组件能力的用户，请尽快升级至1.3.11版本，关于原生小程序button组件的详细API请前往[查阅更多文档](https://taro-docs.jd.com/docs/components/forms/button)

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 默認值 |
| --- | --- |
| --nutui-button-border-radius | `25px` |
| --nutui-button-border-width | `1px` |
| --nutui-button-default-bg-color | `$white` |
| --nutui-button-default-border-color | `rgba(204, 204, 204, 1)` |
| --nutui-button-default-color | `$gray1` |
| --nutui-button-plain-color`v1.4.8` | `$gray2` |
| --nutui-button-default-padding | `0 18px` |
| --nutui-button-mini-padding | `0 12px` |
| --nutui-button-small-padding | `0 12px` |
| --nutui-button-small-height | `28px` |
| --nutui-button-mini-height | `24px` |
| --nutui-button-default-height | `38px` |
| --nutui-button-large-height | `48px` |
| --nutui-button-large-line-height | `46px` |
| --nutui-button-small-line-height | `26px` |
| --nutui-button-block-height | `48px` |
| --nutui-button-default-line-height | `36px` |
| --nutui-button-block-line-height | `46px` |
| --nutui-button-default-font-size | `$font-size-2` |
| --nutui-button-large-font-size | `$button-default-font-size` |
| --nutui-button-small-font-size | `$font-size-1` |
| --nutui-button-mini-font-size | `$font-size-1` |
| --nutui-button-mini-line-height | `1.2` |
| --nutui-button-text-icon-margin-left | `5px` |
| --nutui-button-text-icon-large-margin-left | `10px` |
| --nutui-button-text-icon-small-margin-left | `2px` |
| --nutui-button-text-icon-mini-margin-left | `1px` |
| --nutui-button-disabled-opacity | `0.68` |
| --nutui-button-primary-color | `$white` |
| --nutui-button-primary-border-color | `$primary-color` |
| --nutui-button-info-color | `$white` |
| --nutui-button-info-border-color | `#496af2` |
| --nutui-button-success-color | `$white` |
| --nutui-button-success-border-color | `rgba(38, 191, 38, 1)` |
| --nutui-button-danger-color | `$white` |
| --nutui-button-danger-border-color | `rgba(250, 44, 25, 1)` |
| --nutui-button-danger-background-color | `rgba(250, 44, 25, 1)` |
| --nutui-button-warning-color | `$white` |
| --nutui-button-warning-border-color | `rgba(255, 158, 13, 1)` |
| --nutui-button-plain-background-color | `$white` |
| --nutui-button-small-round-border-radius | `$button-border-radius` |
