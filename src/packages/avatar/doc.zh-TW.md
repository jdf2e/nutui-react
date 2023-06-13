# Avatar 頭像

## 介紹

用來代錶用戶或事物，支持圖片、圖標或字符展示。

## 安裝

```ts
import { Avatar } from '@nutui/nutui-react';

```

## 代碼演示

### 基礎用法

支持三種尺寸：small、normal、large

:::demo

```tsx
import React from "react";
import { Avatar } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Avatar
        size="large"
        src="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
      />
      <Avatar
        size="normal"
        src="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
      />
      <Avatar
        size="small"
        src="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
      />
    </>
  )
}
export default App;
```

:::

### 頭像形狀

支持兩種形狀：square、round

:::demo

```tsx
import React from "react";
import { Avatar } from '@nutui/nutui-react';
import { My } from '@nutui/icons-react';

const App = () => {
  return (
    <>
      <Avatar icon={<My />} shape="square" />
      <Avatar icon={<My />} shape="round" />
    </>
  )
}
export default App;
```

:::

### 頭像類型

支持三種類型：圖片、Icon 以及字符

:::demo

```tsx
import React from "react";
import { Avatar } from '@nutui/nutui-react';
import { My } from '@nutui/icons-react';

const App = () => {
  return (
    <>
      <Avatar src="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png" />
      <Avatar icon={<My />} />
      <Avatar>N</Avatar>
    </>
  )
}
export default App;
```

:::

### 自定義顏色及背景色

Icon 和字符型可以自定義圖標顏色及背景色

:::demo

```tsx
import React from "react";
import { Avatar } from '@nutui/nutui-react';
import { My } from '@nutui/icons-react';

const App = () => {
  return (
    <>
      <Avatar
        className="demo-avatar"
        color="#fff"
        background="#FA2C19"
        icon={<My />}
      />
      <Avatar color="rgb(245, 106, 0)" background="rgb(253, 227, 207)">
        U
      </Avatar>
    </>
  )
}
export default App;
```

:::

### 帶徽標的頭像

:::demo

```tsx
import React from "react";
import { Avatar, Badge } from '@nutui/nutui-react';
import { My } from '@nutui/icons-react';

const App = () => {
  return (
    <>
      <Badge value="8">
        <Avatar icon={<My />} shape="square" />
      </Badge>
      <Badge dot>
        <Avatar icon={<My />} shape="square" />
      </Badge>
    </>
  )
}
export default App;
```

:::

### 頭像組合展現

:::demo

```tsx
import React from "react";
import { Avatar, AvatarGroup } from '@nutui/nutui-react';
import { My } from '@nutui/icons-react';

const App = () => {
  return (
    <>
      <AvatarGroup gap="-4">
        <Avatar src="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png" />
        <Avatar icon={<My />} />
        <Avatar color="rgb(245, 106, 0)" bg-color="rgb(253, 227, 207)">
          U
        </Avatar>
      </AvatarGroup>

      <AvatarGroup max="3" maxColor="#fff" maxBackground="#498ff2">
        <Avatar src="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png" />
        <Avatar icon={<My />} />
        <Avatar color="rgb(245, 106, 0)" background="rgb(253, 227, 207)">
          U
        </Avatar>
        <Avatar icon={<My />} />
      </AvatarGroup>
    </>
  )
}
export default App;
```

:::

### 組合頭像可控制層級方嚮

:::demo

```tsx
import React from "react";
import { Avatar, AvatarGroup } from '@nutui/nutui-react';
import { My } from '@nutui/icons-react';

const App = () => {
  return (
    <>
      <AvatarGroup max="3" level="right" maxContent="...">
        <Avatar src="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png" />
        <Avatar icon={<My />} />
        <Avatar color="rgb(245, 106, 0)" background="rgb(253, 227, 207)">
          U
        </Avatar>
        <Avatar icon={<My />} />
      </AvatarGroup>
    </>
  )
}
export default App;
```

:::

### 點擊頭像觸發事件

:::demo

```tsx
import React from "react";
import { Avatar, Toast } from '@nutui/nutui-react';
import { My } from '@nutui/icons-react';

const App = () => {
  const activeAvatar = () => {
    Toast.show('觸發點擊頭像')
  }
  return (
    <>
      <Avatar icon={<My />} onClick={activeAvatar} />
    </>
  )
}
export default App;
```

:::

## Avatar

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| size | 設置頭像的大小 |`large` \| `normal` \| `small` \| `numbers`  | `-` |
| shape | 設置頭像的形狀 | `round` \| `square` | `round` |
| background | 設置 Icon、字符類型頭像的背景色 | `string` | `#eee` |
| color | 設置 Icon、字符類型頭像的顏色 | `string` | `#666` |
| fit | 圖片填充模式 | `contain` \| `cover` \| `fill` \| `none` \| `scale-down` \| `cover` |
| src | 設置圖片類型頭像的地址 | `string` | `-` |
| alt | 設置圖片類型頭像無法顯示時的替代文本 | `string` | `-` |
| icon | 設置 Icon 類型頭像圖標 | `ReactNode` | `-` |
| onClick | 點擊頭像觸發事件 | `(e: MouseEvent) => void` | `-` |
| onError | 圖片加載失敗的事件 | `() => void` | `-` |

## AvatarGroup

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| max | 顯示的最大頭像個數 | `string` \| `number` | `-` |
| maxContent | 頭像數量超出時，會出現一個頭像摺疊元素。該元素內容可為...、more、+N。 | `string` | `-` |
| size | 設置頭像的大小，可選值為：large、normal、small，支持直接輸入數字 | `large` \| `normal` \| `small` | `-` |
| shape | 設置頭像的形狀 | `string` \| `round` | `-` |
| maxBackground | 設置 Icon、字符類型頭像的背景色 | `string` | `#eee` |
| maxColor | 設置 Icon、字符類型頭像的顏色 | `string` | `#666` |
| gap | 設置頭像之間的間距 | `string` | `-8` |
| level | 頭像之間的層級關繫，可選值為：left、right | `left` \| `right` | `left` |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-avatar-square | 正方形頭像的圓角弧度 | `5px` |
| \--nutui-avatar-large-width | 大尺寸頭像的寬度 | `60px` |
| \--nutui-avatar-large-height | 大尺寸頭像的高度 | `60px` |
| \--nutui-avatar-small-width | 小尺寸頭像的寬度 | `32px` |
| \--nutui-avatar-small-height | 小尺寸頭像的高度 | `32px` |
| \--nutui-avatar-normal-width | 正常尺寸頭像的寬度 | `40px` |
| \--nutui-avatar-normal-height | 正常尺寸頭像的高度 | `40px` |