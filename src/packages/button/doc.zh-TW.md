# Button 按鈕

## 介紹

按鈕用於觸發一個操作，如提交表單。

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
      <Button type="primary" fill="outline">Outline</Button>
      <Button fill="none">None</Button>
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
import { Star, Plus } from '@nutui/icons-react'

const App = () => {
  return (
    <>
      <Button
        type="primary"
        icon={<Star />}
        rightIcon={<Star />}
        style={{ margin: 8 }}
      >
        操作按鈕
      </Button>
      <Button
        type="primary"
        fill="outline"
        icon={<Star />}
        rightIcon={<Star />}
        style={{ margin: 8 }}
      >
        操作按鈕
      </Button>
      <Button
        icon={<Star />}
        rightIcon={<Star />}
        style={{
          margin: 8,
          backgroundColor: `var(--nutui-color-primary-light)`,
          borderColor: `var(--nutui-color-primary)`,
          color: `var(--nutui-color-primary)`,
        }}
      >
        操作按鈕
      </Button>
      <Button
        type="default"
        fill="none"
        icon={<Star />}
        rightIcon={<Star />}
        style={{
          margin: 8,
          backgroundColor: `var(--nutui-gray-3)`,
          color: `var(--nutui-gray-7)`,
        }}
      >
        操作按鈕
      </Button>
      <Button
        type="default"
        fill="none"
        icon={<Star />}
        rightIcon={<Star />}
        style={{
          margin: 8,
          backgroundColor: `var(--nutui-gray-1)`,
          color: `var(--nutui-gray-7)`,
        }}
      >
        操作按鈕
      </Button>
      <Button
        type="default"
        icon={<Star />}
        rightIcon={<Star />}
        style={{
          margin: 8,
        }}
      >
        操作按鈕
      </Button>
      <Button
        shape="square"
        fill="outline"
        type="primary"
        icon={<Plus width="20" />}
        style={{ margin: 8 }}
      />
      <Button
        shape="round"
        type="primary"
        size="large"
        icon={<Star width={20} height={20} />}
        rightIcon={<Star width={20} height={20} />}
        style={{ margin: 8 }}
      >
        操作按鈕
      </Button>
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
import { Star, Plus } from '@nutui/icons-react'

const App = () => {
  return (
    <>
      <Button
        disabled
        type="primary"
        icon={<Star />}
        rightIcon={<Star />}
        style={{ margin: 8 }}
      >
        操作按鈕
      </Button>
      <Button
        disabled
        type="primary"
        fill="outline"
        icon={<Star />}
        rightIcon={<Star />}
        style={{ margin: 8 }}
      >
        操作按鈕
      </Button>
      <Button
        disabled
        fill="solid"
        icon={<Star />}
        rightIcon={<Star />}
        style={{ margin: 8 }}
      >
        操作按鈕
      </Button>
      <Button
        disabled
        type="default"
        fill="none"
        icon={<Star />}
        rightIcon={<Star />}
        style={{
          margin: 8,
          backgroundColor: `var(--nutui-gray-3)`,
          color: `var(--nutui-gray-5)`,
        }}
      >
        操作按鈕
      </Button>
      <Button
        disabled
        type="default"
        fill="none"
        icon={<Star />}
        rightIcon={<Star />}
        style={{
          margin: 8,
          backgroundColor: `var(--nutui-gray-1)`,
          color: `var(--nutui-gray-5)`,
        }}
      >
        操作按鈕
      </Button>
      <Button
        disabled
        icon={<Star />}
        rightIcon={<Star />}
        style={{
          margin: 8,
        }}
      >
        操作按鈕
      </Button>
      <Button
        shape="square"
        fill="outline"
        type="primary"
        icon={<Plus width="20" />}
        style={{ margin: 8 }}
      />
      <Button
        disabled
        type="primary"
        icon={<Plus width="20" />}
        style={{ margin: 8 }}
      />
      <Button
        shape="round"
        type="primary"
        size="large"
        icon={<Star width={20} height={20} />}
        rightIcon={<Star width={20} height={20} />}
        style={{ margin: 8 }}
      >
        操作按鈕
      </Button>
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
      <Button size="mini" type="primary">迷你按鈕</Button>
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
| type | 按鈕的樣式 | `default` \| `primary` \| `warning` \| `danger` \| `success` | `default` |
| size | 按鈕的尺寸 | `normal` \| `large` \| `small` | `normal` |
| shape | 按鈕的形狀 | `square` \| `round` | `round` |
| color | 按鈕顏色，支持傳入 linear-gradient 漸變色 | `string` | `-` |
| fill | 填充模式 | `solid` \| `ouline` \| `dashed` \| `none` | `solid` |
| disabled | 是否禁用按鈕 | `boolean` | `false` |
| block | 是否為塊級元素 | `boolean` | `false` |
| icon | 按鈕圖標 | `ReactNode` | `-` |
| loading | 按鈕loading狀態 | `boolean` | `false` |
| onClick | 點擊按鈕時觸發 | `(e: MouseEvent<HTMLButtonElement>) => void` | `-` |

## 主題定製

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-button-border-radius | 按鈕的圓角設置 | `24px` |
| \--nutui-button-border-width | 按鈕的邊框寬度 | `1px` |
| \--nutui-button-normal-padding | size normal時的padding值 | `0px 16px` |
| \--nutui-button-default-height | type 為 default 的按鈕的高度 | `32px` |
| \--nutui-button-default-color | type 為 default 的按鈕的文本色 | `$color-title` |
| \--nutui-button-default-background-color | type 為 default 的按鈕的背景色 | `$white` |
| \--nutui-button-default-border-color | type 為 default 的按鈕的邊框色 | `$color-text` |
| \--nutui-button-default-disabled | type 為 default 的按鈕的禁用色 | `$color-text-disabled` |
| \--nutui-button-default-padding | type 為 default 的按鈕的內邊距 | `0 16px` |
| \--nutui-button-default-font-size | type 為 default 的按鈕的字號 | `$font-size-base` |
| \--nutui-button-default-font-weight | type 為 default 的按鈕的字重 | `$font-weight` |
| \--nutui-button-large-height | size 為 large 的按鈕的高度 | `40px` |
| \--nutui-button-large-font-size | size 為 large 的按鈕的字號 | `$font-size-base` |
| \--nutui-button-small-padding | size 為 small 的按鈕的內邊距 | `0 12px` |
| \--nutui-button-small-height | size 為 small 的按鈕的高度 | `28px` |
| \--nutui-button-small-font-size | size 為 small 的按鈕的字號 | `$font-size-small` |
| \--nutui-button-mini-padding | size 為 mini 的按鈕的內邊距 | `0 12px` |
| \--nutui-button-mini-height | size 為 mini 的按鈕的高度 | `24px` |
| \--nutui-button-mini-font-size | size 為 mini 的按鈕的字號 | `$font-size-small` |
| \--nutui-button-text-icon-margin | 帶 icon按鈕的文本的邊距 | `4px` |
