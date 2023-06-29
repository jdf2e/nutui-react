# Avatar 头像

## 介绍

用来代表用户或事物，支持图片、图标或字符展示。

## 安装

```tsx
import { Avatar } from '@nutui/nutui-react';

```

## 代码演示

### 基础用法

支持三种尺寸：small、normal、large

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

### 头像形状

支持两种形状：square、round

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

### 头像类型

支持三种类型：图片、Icon 以及字符

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

### 自定义颜色及背景色

Icon 和字符型可以自定义图标颜色及背景色

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

### 带徽标的头像

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

### 头像组合展现

:::demo

```tsx
import React from "react";
import { Avatar } from '@nutui/nutui-react';
import { My } from '@nutui/icons-react';

const App = () => {
  return (
    <>
      <Avatar.Group gap="-4">
        <Avatar src="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png" />
        <Avatar icon={<My />} />
        <Avatar color="rgb(245, 106, 0)" bg-color="rgb(253, 227, 207)">
          U
        </Avatar>
      </Avatar.Group>

      <Avatar.Group max="3" maxColor="#fff" maxBackground="#498ff2">
        <Avatar src="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png" />
        <Avatar icon={<My />} />
        <Avatar color="rgb(245, 106, 0)" background="rgb(253, 227, 207)">
          U
        </Avatar>
        <Avatar icon={<My />} />
      </Avatar.Group>
    </>
  )
}
export default App;
```

:::

### 组合头像可控制层级方向

:::demo

```tsx
import React from "react";
import { Avatar } from '@nutui/nutui-react';
import { My } from '@nutui/icons-react';

const App = () => {
  return (
    <>
      <Avatar.Group max="3" level="right" maxContent="...">
        <Avatar src="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png" />
        <Avatar icon={<My />} />
        <Avatar color="rgb(245, 106, 0)" background="rgb(253, 227, 207)">
          U
        </Avatar>
        <Avatar icon={<My />} />
      </Avatar.Group>
    </>
  )
}
export default App;
```

:::

### 点击头像触发事件

:::demo

```tsx
import React from "react";
import { Avatar, Toast } from '@nutui/nutui-react';
import { My } from '@nutui/icons-react';

const App = () => {
  const activeAvatar = () => {
    Toast.show('触发点击头像')
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

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| size | 设置头像的大小 | `large` \| `normal` \| `small` \| `numbers` | `-` |
| shape | 设置头像的形状 | `round` \| `square` | `round` |
| background | 设置 Icon、字符类型头像的背景色 | `string` | `#eee` |
| color | 设置 Icon、字符类型头像的颜色 | `string` | `#666` |
| fit | 图片填充模式 | `contain` \| `cover` \| `fill` \| `none` \| `scale-down` \| `cover` | `-` |
| src | 设置图片类型头像的地址 | `string` | `-` |
| alt | 设置图片类型头像无法显示时的替代文本 | `string` | `-` |
| icon | 设置 Icon 类型头像图标 | `ReactNode` | `-` |
| onClick | 点击头像触发事件 | `(e: MouseEvent) => void` | `-` |
| onError | 图片加载失败的事件 | `() => void` | `-` |

## Avatar.Group

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| max | 显示的最大头像个数 | `string` \| `number`  | `-` |
| maxContent | 头像数量超出时，会出现一个头像折叠元素。该元素内容可为...、more、+N。 | `string` | `-` |
| size | 设置头像的大小，可选值为：large、normal、small，支持直接输入数字 | `large` \| `normal`  \| `small`  | `-` |
| shape | 设置头像的形状 | `string` \| `round`  | `-` |
| maxBackground | 设置 Icon、字符类型头像的背景色 | `string` | `#eee` |
| maxColor | 设置 Icon、字符类型头像的颜色 | `string` | `#666` |
| gap | 设置头像之间的间距 | `string` | `-8` |
| level | 头像之间的层级关系，可选值为：left、right | `left` \| `right`  | `left` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-avatar-square | 正方形头像的圆角弧度 | `5px` |
| \--nutui-avatar-large-width | 大尺寸头像的宽度 | `60px` |
| \--nutui-avatar-large-height | 大尺寸头像的高度 | `60px` |
| \--nutui-avatar-small-width | 小尺寸头像的宽度 | `32px` |
| \--nutui-avatar-small-height | 小尺寸头像的高度 | `32px` |
| \--nutui-avatar-normal-width | 正常尺寸头像的宽度 | `40px` |
| \--nutui-avatar-normal-height | 正常尺寸头像的高度 | `40px` |