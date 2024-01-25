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
  const marginStyle = { margin: 8 }
  return (
    <>
      <Button type="primary" style={marginStyle}>主要按鈕</Button>
      <Button type="info" style={marginStyle}>信息按鈕</Button>
      <Button type="default" style={marginStyle}>默认按鈕</Button>
      <Button type="danger" style={marginStyle}>危险按鈕</Button>
      <Button type="warning" style={marginStyle}>警告按鈕</Button>
      <Button type="success" style={marginStyle}>成功按鈕</Button>
    </>
  );
};
export default App;
```

:::

### 填充模式

按鈕支援 `solid`、 `outline`、 `dashed`、`none`四種類型，預設為 `solid`。

:::demo

```tsx
import React from "react";
import { Button } from '@nutui/nutui-react';

const App = () => {
  const marginStyle = { margin: 8 }
  return (
    <>
      <Button fill="solid" style={marginStyle}>Solid</Button>
      <Button type="primary" fill="outline" style={marginStyle}>Outline</Button>
      <Button type="primary" fill="dashed" style={marginStyle}>Dashed</Button>
      <Button fill="none" style={marginStyle}>None</Button>
    </>
  );
};
export default App;
```

:::

### 圖標按鈕

透過 `icon` 屬性來設定按鈕圖標，並提供`rightIcon`屬性使圖標在右側顯示。

:::demo

```tsx
import React from "react";
import { Button } from '@nutui/nutui-react';
import { Star, Plus } from '@nutui/icons-react'

const App = () => {
  const marginStyle = { margin: 8 }
  return (
    <>
      <Button
        type="primary"
        icon={<Star />}
        rightIcon={<Star />}
        style={marginStyle}
      >
        操作按鈕
      </Button>
      <Button
        type="primary"
        fill="outline"
        icon={<Star />}
        rightIcon={<Star />}
        style={marginStyle}
      >
        操作按鈕
      </Button>
      <Button
        type="primary"
        fill="dashed"
        icon={<Star />}
        rightIcon={<Star />}
        style={marginStyle}
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
        style={marginStyle}
      >
        操作按鈕
      </Button>
      <Button
        shape="square"
        fill="outline"
        type="primary"
        icon={<Plus width="20" />}
        style={marginStyle}
      />
      <Button
        fill="outline"
        type="primary"
        icon={<Plus width="20" />}
        style={marginStyle}
      />
      <Button
        type="primary"
        fill="dashed"
        icon={<Plus width="20" />}
        style={marginStyle}
      />
      <Button
        type="primary"
        size="large"
        icon={<Star width={20} height={20} />}
        rightIcon={<Star width={20} height={20} />}
        style={marginStyle}
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
  const marginStyle = { margin: 8 }
  return (
    <>
      <Button
        disabled
        type="primary"
        icon={<Star />}
        rightIcon={<Star />}
        style={marginStyle}
      >
        禁用狀態
      </Button>
      <Button
        disabled
        type="primary"
        fill="outline"
        icon={<Star />}
        rightIcon={<Star />}
        style={marginStyle}
      >
        禁用狀態
      </Button>
      <Button
        disabled
        type="primary"
        fill="dashed"
        icon={<Star />}
        rightIcon={<Star />}
        style={marginStyle}
      >
        禁用狀態
      </Button>
      <Button
        disabled
        fill="solid"
        icon={<Star />}
        rightIcon={<Star />}
        style={marginStyle}
      >
        禁用狀態
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
        禁用狀態
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
        禁用狀態
      </Button>
      <Button
        disabled
        icon={<Star />}
        rightIcon={<Star />}
        style={marginStyle}
      >
        禁用狀態
      </Button>
      <Button
        disabled
        shape="square"
        fill="outline"
        type="primary"
        icon={<Plus width="20" />}
        style={marginStyle}
      />
      <Button
        disabled
        type="primary"
        icon={<Plus width="20" />}
        style={marginStyle}
      />
      <Button
        disabled
        type="primary"
        fill="dashed"
        icon={<Plus width="20" />}
        style={marginStyle}
      />
      <Button
        disabled
        type="primary"
        size="large"
        icon={<Star width={20} height={20} />}
        rightIcon={<Star width={20} height={20} />}
        style={marginStyle}
      >
        禁用狀態
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
  const marginStyle = { margin: 8 }
  return (
    <>
      <Button style={marginStyle} type="primary" shape="square">
        方形按鈕
      </Button>
      <Button style={marginStyle} type="primary">圆形按鈕</Button>
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
  const marginStyle = { margin: 8 }
  return (
    <>
      <Button loading type="warning" style={marginStyle}>
        載入中
      </Button>
      <Button
        loading={loading}
        type="success"
        onClick={() => {
          setTimeout(() => {
            setLoading(false)
          }, 1500)
          setLoading(!loading)
        }}
        style={marginStyle}
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
  const marginStyle = { margin: 8 }
  return (
    <>
      <Button size="large" type="primary">大號按鈕</Button>
      <Button type="primary" style={marginStyle}>普通按鈕</Button>
      <Button style={marginStyle}>普通按鈕</Button>
      <Button size="small" style={marginStyle} type="primary">
        小型按鈕
      </Button>
      <Button size="mini" style={marginStyle} type="primary">
        迷你按鈕
      </Button>
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
      <Button block type="primary">块级元素</Button>
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
  const marginStyle = { margin: 8 }
  return (
    <>
      <Button
        style={{
          margin: 8,
          '--nutui-button-default-border-color': 'blue',
          '--nutui-button-default-color': '#fff',
          '--nutui-button-default-background-color': 'blue',
        }}
      >
        單色按鈕
      </Button>
      <Button
        fill="outline"
        style={{
          margin: 8,
          '--nutui-button-default-border-color': '#7232dd',
          '--nutui-button-default-color': '#7232dd',
        }}
      >
        單色按鈕
      </Button>
      <Button
        style={{
          margin: 8,
          '--nutui-button-default-border-color': 'transparent',
          '--nutui-button-default-color': '#fff',
          '--nutui-button-default-background-color':
            'rgba(10,101,208,0.75)',
        }}
      >
        單色按鈕
      </Button>
      <Button
        type="primary"
        style={{
          margin: 8,
          '--nutui-button-default-border-color': 'transparent',
          '--nutui-button-default-color': '#fff',
          '--nutui-button-default-background-color':
            'linear-gradient(to right, #ff6034, #ee0a24)',
        }}
      >
        漸變按鈕
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
| type | 按鈕的樣式 | `default` \| `primary` \| `warning` \| `danger` \| `success` \| `info` | `default` |
| size | 按鈕的尺寸 | `normal` \| `large` \| `small` \| `mini` | `normal` |
| shape | 按鈕的形狀 | `square` \| `round` | `round` |
| color | 按鈕顏色，支援傳入 linear-gradient 漸層色, outline 和 dashed 模式下設定的是 color，其他情況設定的是background，建議使用CSS變數實現的顏色配置 | `string` | `-` |
| fill | 填充模式 | `solid` \| `outline` \| `dashed` \| `none` | `solid` |
| disabled | 是否禁用按鈕 | `boolean` | `false` |
| block | 是否為塊級元素 | `boolean` | `false` |
| icon | 按鈕圖標 | `ReactNode` | `-` |
| rightIcon | 右侧按鈕图标 | `ReactNode` | `-` |
| loading | 按鈕loading狀態 | `boolean` | `false` |
| nativeType | 按鈕原始类型 | `submit` \| `reset` \| `button` | `button` |
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
