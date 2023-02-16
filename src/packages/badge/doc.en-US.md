# Badge

### Intro

出现在图标或文字右上角的红色圆点、数字或者文字，表示有新内容或者待处理的信息。

### Install

``` javascript
// react
import { Badge } from '@nutui/nutui-react';

```

## Demo

### Basic usage

:::demo

```tsx
import React from "react";
import { Badge, Avatar } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
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
    </>
  )
}
export default App;
```

:::

### Max Size

:::demo

```tsx
import React from "react";
import { Badge, Avatar } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Badge value={200} max={9}>
        <Avatar icon="my" shape="square" />
      </Badge>
      <Badge value={200} max={20}>
        <Avatar icon="my" shape="square" />
      </Badge>
      <Badge value={200} max={99}>
        <Avatar icon="my" shape="square" />
      </Badge>
    </>
  )
}
export default App;
```

:::

### Custom Color

:::demo

```tsx
import React from "react";
import { Badge, Avatar } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
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
    </>
  )
}
export default App;
```

:::

### Custom context

:::demo

```tsx
import React from "react";
import { Badge, Avatar } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Badge icon="checklist">
        <Avatar icon="my" shape="square" />
      </Badge>
      <Badge icon="link">
        <Avatar icon="my" shape="square" />
      </Badge>
      <Badge icon="download">
        <Avatar icon="my" shape="square" />
      </Badge>
    </>
  )
}
export default App;
```

:::

### Custom Position

:::demo

```tsx
import React from "react";
import { Badge, Avatar } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Badge value={8} top="5" right="5">
        <Avatar icon="my" shape="square" />
      </Badge>
      <Badge value={76} top="10" right="10">
        <Avatar icon="my" shape="square" />
      </Badge>
      <Badge value="NEW">
        <Avatar icon="my" shape="square" />
      </Badge>
    </>
  )
}
export default App;
```

:::

### Display Alone

:::demo

```tsx
import React from "react";
import { Badge } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Badge value={8}> </Badge>
      <Badge value={76}> </Badge>
      <Badge value="NEW"> </Badge>
    </>
  )
}
export default App;
```

:::

## API

### Props

| Attribute    | Description                                       | Type    | Default    |
|---------|--------------------------------------------|---------|-----------|
| value   | value to show                                 | String  | -         |
| max     | when value is number, it's the max size                     | Number  | `10000`   |
| zIndex |  z-index                          | Number  | `10`      |
| dot     | Is dotted    | Boolean | `false`   |
| top     | Up and down offset, support unit setting, can be set to: 5, etc. | Number  | `0`       |
| right   | Left and right offset, support unit setting, can be set to: 5, etc. | Number  | `0`       |
| color   | background color                                | String  | `#fa2c19` |
| icons   | custom icons                               | String  | - |





## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| --nutui-badge-color | ` #fff` |
| --nutui-badge-font-size | ` $font-size-1` |
| --nutui-badge-default-background-color | `  rgba(255, 255, 255, 1)` |
| --nutui-badge-border-radius | ` 14px` |
| --nutui-badge-padding | ` 0 5px` |
| --nutui-badge-z-index | ` 1` |
| --nutui-badge-dot-width | ` 7px` |
| --nutui-badge-dot-height | ` 7px` |
| --nutui-badge-dot-border-radius | ` 7px` |
| --nutui-badge-dot-padding | ` 0px` |
