# Badge 徽標

## 介紹

出現在圖標或文字右上角的紅色圓點、數字或者文字，錶示有新內容或者待處理的信息。

## 安裝

```tsx
import { Badge } from '@nutui/nutui-react';
```

## 代碼演示

### 基礎用法

:::demo

```tsx
import React from "react";
import { Badge, Avatar, Cell } from '@nutui/nutui-react';
import { My } from '@nutui/icons-react';

const App = () => {
  return (
    <Cell>
      <Badge value={8}>
        <Avatar icon={<My />} shape="square" />
      </Badge>
      <Badge value={76}>
        <Avatar icon={<My />} shape="square" />
      </Badge>
      <Badge value="NEW">
        <Avatar icon={<My />} shape="square" />
      </Badge>
      <Badge dot>
        <Avatar icon={<My />} shape="square" />
      </Badge>
    </Cell>
  )
}
export default App;
```

:::

### 最大值

:::demo

```tsx
import React from "react";
import { Badge, Avatar, Cell } from '@nutui/nutui-react';
import { My } from '@nutui/icons-react';

const App = () => {
  return (
    <Cell>
      <Badge value={200} max={9}>
        <Avatar icon={<My />} shape="square" />
      </Badge>
      <Badge value={200} max={20}>
        <Avatar icon={<My />} shape="square" />
      </Badge>
      <Badge value={200} max={99}>
        <Avatar icon={<My />} shape="square" />
      </Badge>
    </Cell>
  )
}
export default App;
```

:::

### 自定義顏色

:::demo

```tsx
import React from "react";
import { Badge, Avatar, Cell } from '@nutui/nutui-react';
import { My } from '@nutui/icons-react';

const App = () => {
  return (
    <Cell>
      <Badge
        value={8}
        color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)"
      >
        <Avatar icon={<My />} shape="square" />
      </Badge>
      <Badge
        value={76}
        color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)"
      >
        <Avatar icon={<My />} shape="square" />
      </Badge>
      <Badge
        value="NEW"
        color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)"
      >
        <Avatar icon={<My />} shape="square" />
      </Badge>
      <Badge
        dot
        color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)"
      >
        <Avatar icon={<My />} shape="square" />
      </Badge>
    </Cell>
  )
}
export default App;
```

:::

### 自定義徽標內容

:::demo

```tsx
import React from "react";
import { Badge, Avatar, Cell } from '@nutui/nutui-react';
import { My, Checklist, Link as LinkIcon, Download } from '@nutui/icons-react';

const App = () => {
  return (
    <Cell>
      <Badge
        value={<Checklist color="#fff" width={12} height={12} />}
        className="test"
      >
        <Avatar icon={<My />} shape="square" />
      </Badge>
      <Badge value={<LinkIcon color="#fff" width={12} height={12} />}>
        <Avatar icon={<My />} shape="square" />
      </Badge>
      <Badge value={<Download color="#fff" width={12} height={12} />}>
        <Avatar icon={<My />} shape="square" />
      </Badge>
    </Cell>
  )
}
export default App;
```

:::

### 自定義徽標樣式

:::demo

```tsx
import React from "react";
import { Badge, Avatar, ConfigProvider, Cell } from '@nutui/nutui-react';
import { My } from '@nutui/icons-react';

const customTheme = {
  nutuiBadgeBorderRadius: '12px 12px 12px 0',
}

const customTheme2 = {
  nutuiBadgeDotWidth: '14px',
  nutuiBadgeDotHeight: '14px',
  nutuiBadgeBorder: '2px solid #fff',
}

const App = () => {
  return (
    <Cell>
      <ConfigProvider theme={customTheme}>
        <Badge value="NEW">
          <Avatar icon={<My />} shape="square" />
        </Badge>
      </ConfigProvider>

      <ConfigProvider theme={customTheme2}>
        <Badge dot top="2" right="8">
          <Avatar icon={<My />} shape="square" />
        </Badge>
      </ConfigProvider>
    </Cell>
  )
}
export default App;
```

:::

### 自定義位置

:::demo

```tsx
import React from "react";
import { Badge, Avatar, Cell } from '@nutui/nutui-react';
import { My } from '@nutui/icons-react';

const App = () => {
  return (
    <Cell>
      <Badge value={8} top="5" right="5">
        <Avatar icon={<My />} shape="square" />
      </Badge>
      <Badge value={76} top="10" right="10">
        <Avatar icon={<My />} shape="square" />
      </Badge>
      <Badge value="NEW">
        <Avatar icon={<My />} shape="square" />
      </Badge>
    </Cell>
  )
}
export default App;
```

:::

### 獨立展示

:::demo

```tsx
import React from "react";
import { Badge,Cell } from '@nutui/nutui-react';

const App = () => {
  return (
    <Cell style={{height: '100px'}}>
      <Badge value={8}> </Badge>
      <Badge value={76}> </Badge>
      <Badge value="NEW"> </Badge>
    </Cell>
  )
}
export default App;
```

:::

## Badge

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| value | 顯示的內容，支持數字、字符和自定義內容 | `ReactNode` | `-` |
| max | value 為數值時，最大值 | `number` | `99` |
| dot | 是否為小點 | `boolean` | `false` |
| top | 上下偏移量，支持單位設置，可設置為："0"或0 等 | `string` \| `number` | `"0"` |
| right | 左右偏移量，支持單位設置，可設置為："5"或5 等 | `string` \| `number` | `"5"` |
| color | 徽標背景顏色,默認值為當前主題色 | `string` | `-` |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-badge-background-color | badge 背景色 | `linear-gradient(135deg, $primary-color 0%, $primary-color-end 100%))` |
| \--nutui-badge-color | badge 內容色值 | `#fff` |
| \--nutui-badge-font-size | badge 內容字號 | `$font-size-1` |
| \--nutui-badge-border | badge 邊框 | `0px solid $primary-text-color` |
| \--nutui-badge-border-radius | badge 邊框圓角 | `14px` |
| \--nutui-badge-min-width | badge 最小寬度 | `5px` |
| \--nutui-badge-padding | badge 的padding值 | `0 5px` |
| \--nutui-badge-icon-padding | badge 為自定義icon時 的 padding值 | `2px` |
| \--nutui-badge-content-transform | badge 內容位置 | `translateY(-50%) translateX(100%)` |
| \--nutui-badge-z-index | badge 自定義icon時的z-index | `1` |
| \--nutui-badge-dot-width | badge 為圓點時的寬度、高度、圓角 | `7px` |