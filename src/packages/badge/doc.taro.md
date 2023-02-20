# Badge 徽标

### 介绍

出现在图标或文字右上角的红色圆点、数字或者文字，表示有新内容或者待处理的信息。

### 安装

``` javascript
import { Badge } from '@nutui/nutui-react-taro';
```

## 代码实例

### 基本用法

:::demo

```tsx
import React from "react";
import { Badge, Avatar , Cell} from '@nutui/nutui-react-taro';

const App = () => {
  return (
    <Cell>
      <Badge value={8}>
        <Avatar icon="my" shape="square" />
      </Badge>
      <Badge value={76}>
        <Avatar icon="my" shape="square" />
      </Badge>
      <Badge value="NEW">
        <Avatar icon="my" shape="square" />
      </Badge>
      <Badge dot>
        <Avatar icon="my" shape="square" />
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
import { Badge, Avatar, Cell } from '@nutui/nutui-react-taro';

const App = () => {
  return (
    <Cell>
      <Badge value={200} max={9}>
        <Avatar icon="my" shape="square" />
      </Badge>
      <Badge value={200} max={20}>
        <Avatar icon="my" shape="square" />
      </Badge>
      <Badge value={200} max={99}>
        <Avatar icon="my" shape="square" />
      </Badge>
    </Cell>
  )
}
export default App;
```

:::

### 自定义颜色

:::demo

```tsx
import React from "react";
import { Badge, Avatar, Cell } from '@nutui/nutui-react-taro';

const App = () => {
  return (
    <Cell>
      <Badge value={8}
             color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)">
        <Avatar icon="my" shape="square" />
      </Badge>
      <Badge value={76}
             color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)">
        <Avatar icon="my" shape="square" />
      </Badge>
      <Badge value="NEW"
             color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)">
        <Avatar icon="my" shape="square" />
      </Badge>
      <Badge dot
             color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)">
        <Avatar icon="my" shape="square" />
      </Badge>
    </Cell>
  )
}
export default App;
```

:::

### 自定义徽标内容

:::demo

```tsx
import React from "react";
import { Badge, Avatar, Cell } from '@nutui/nutui-react-taro';

const App = () => {
  return (
    <Cell>
      <Badge icon="checklist">
        <Avatar icon="my" shape="square" />
      </Badge>
      <Badge icon="link">
        <Avatar icon="my" shape="square" />
      </Badge>
      <Badge icon="download">
        <Avatar icon="my" shape="square" />
      </Badge>
    </Cell>
  )
}
export default App;
```

:::


### 自定义徽标样式

:::demo

```tsx
import React from "react";
import { Badge, Avatar, ConfigProvider,Cell } from '@nutui/nutui-react-taro';

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
          <Avatar icon="my" shape="square" />
        </Badge>
      </ConfigProvider>

      <ConfigProvider theme={customTheme2}>
        <Badge dot top="2" right="8">
          <Avatar icon="my" shape="square" />
        </Badge>
      </ConfigProvider>
    </Cell>
  )
}
export default App;
```

:::

### 自定义位置

:::demo

```tsx
import React from "react";
import { Badge, Avatar,Cell } from '@nutui/nutui-react-taro';

const App = () => {
  return (
    <Cell>
      <Badge value={8} top="5" right="5">
        <Avatar icon="my" shape="square" />
      </Badge>
      <Badge value={76} top="10" right="10">
        <Avatar icon="my" shape="square" />
      </Badge>
      <Badge value="NEW">
        <Avatar icon="my" shape="square" />
      </Badge>
    </Cell>
  )
}
export default App;
```

:::

### 独立展示

:::demo

```tsx
import React from "react";
import { Badge, Cell } from '@nutui/nutui-react-taro';

const App = () => {
  return (
    <Cell>
      <Badge value={8}> </Badge>
      <Badge value={76}> </Badge>
      <Badge value="NEW"> </Badge>
    </Cell>
  )
}
export default App;
```

:::

## API

### Props

| 字段    | 说明                                       | 类型    | 默认值    |
|---------|--------------------------------------------|---------|-----------|
| value   | 显示的内容  | String  | -         |
| max     | value 为数值时，最大值 | Number  | `10000`   |
| zIndex | 徽标的 z-index 值 | Number  | `10`      |
| dot     | 是否为小点 | Boolean | `false`   |
| top     | 上下偏移量，支持单位设置，可设置为：5 等 | Number  | `0`       |
| right   | 左右偏移量，支持单位设置，可设置为：5 等 | Number  | `0`       |
| color   | 徽标背景颜色 | String  | `#fa2c19` |
| icons   | 徽标自定义 | String  | - |


## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 默认值 |
| --- | --- |
| --nutui-badge-background-color | ` linear-gradient(135deg, $primary-color 0%, $primary-color-end 100%))`|
| --nutui-badge-color | ` #fff` |
| --nutui-badge-font-size | ` $font-size-1` |
| --nutui-badge-default-background-color | `  rgba(255, 255, 255, 1)` |
| --nutui-badge-border | ` 0px solid $primary-text-color`|
| --nutui-badge-border-radius | ` 14px` |
| --nutui-badge-padding | ` 0 5px` |
| --nutui-badge-content-transform | ` translateY(-50%) translateX(100%)`|
| --nutui-badge-z-index | ` 1` |
| --nutui-badge-dot-width | ` 7px` |
| --nutui-badge-dot-height | ` 7px` |
| --nutui-badge-dot-border-radius | ` 7px` |
| --nutui-badge-dot-padding | ` 0px` |