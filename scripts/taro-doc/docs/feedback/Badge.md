---
sidebar_class_name: hasIcon
---

# Badge 徽标

:::info 兼容性
仅支持H5及小程序，JDRN、鸿蒙端待支持
:::

出现在图标或文字右上角的红色圆点、数字或者文字，表示有新内容或者待处理的信息。

## 引入

```tsx
import { Badge } from '@dongdesign/ui'
```

## 示例代码

### 基础用法

```tsx
import { User } from '@nutui/icons-react-taro'
import { Avatar, Badge, Cell } from '@nutui/nutui-react-taro'
import React from 'react'

const Demo1 = () => {
  return (
    <Cell>
      <Badge style={{ marginInlineEnd: '40px' }} value={8}>
        <Avatar icon={<User />} shape="square" />
      </Badge>
      <Badge style={{ marginInlineEnd: '40px' }} value={76}>
        <Avatar icon={<User />} shape="square" />
      </Badge>
      <Badge style={{ marginInlineEnd: '40px' }} value="NEW">
        <Avatar icon={<User />} shape="square" />
      </Badge>
      <Badge style={{ marginInlineEnd: '40px' }} dot top="2" right="4">
        <Avatar icon={<User />} shape="square" />
      </Badge>
    </Cell>
  )
}
export default Demo1
```

### 最大值

```tsx
import { User } from '@nutui/icons-react-taro'
import { Avatar, Badge, Cell } from '@nutui/nutui-react-taro'
import React from 'react'

const Demo2 = () => {
  return (
    <Cell>
      <Badge style={{ marginInlineEnd: '40px' }} value={200} max={9}>
        <Avatar icon={<User />} shape="square" />
      </Badge>
      <Badge style={{ marginInlineEnd: '40px' }} value={200} max={20}>
        <Avatar icon={<User />} shape="square" />
      </Badge>
      <Badge style={{ marginInlineEnd: '40px' }} value={200} max={99}>
        <Avatar icon={<User />} shape="square" />
      </Badge>
    </Cell>
  )
}
export default Demo2
```

### 自定义颜色

```tsx
import { User } from '@nutui/icons-react-taro'
import { Avatar, Badge, Cell } from '@nutui/nutui-react-taro'
import React from 'react'

const Demo3 = () => {
  return (
    <Cell>
      <Badge
        style={{ marginInlineEnd: '40px' }}
        value={8}
        color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)"
      >
        <Avatar icon={<User />} shape="square" />
      </Badge>
      <Badge
        style={{ marginInlineEnd: '40px' }}
        value={76}
        color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)"
      >
        <Avatar icon={<User />} shape="square" />
      </Badge>
      <Badge
        style={{ marginInlineEnd: '40px' }}
        value="NEW"
        color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)"
      >
        <Avatar icon={<User />} shape="square" />
      </Badge>
      <Badge
        style={{ marginInlineEnd: '40px' }}
        top="2"
        right="4"
        dot
        color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)"
      >
        <Avatar icon={<User />} shape="square" />
      </Badge>
    </Cell>
  )
}
export default Demo3
```

### 自定义徽标内容

```tsx
import {
  Checklist,
  Download,
  Link as LinkIcon,
  User,
} from '@nutui/icons-react-taro'
import { Avatar, Badge, Cell } from '@nutui/nutui-react-taro'
import React from 'react'

const Demo4 = () => {
  return (
    <Cell>
      <Badge
        style={{ marginInlineEnd: '40px' }}
        value={<Checklist color="#fff" />}
      >
        <Avatar icon={<User />} shape="square" />
      </Badge>
      <Badge
        style={{ marginInlineEnd: '40px' }}
        value={<LinkIcon color="#fff" />}
      >
        <Avatar icon={<User />} shape="square" />
      </Badge>
      <Badge
        style={{ marginInlineEnd: '40px' }}
        value={<Download color="#fff" />}
      >
        <Avatar icon={<User />} shape="square" />
      </Badge>
    </Cell>
  )
}
export default Demo4
```

### 自定义徽标样式

```tsx
import { User } from '@nutui/icons-react-taro'
import { Avatar, Badge, Cell, ConfigProvider } from '@nutui/nutui-react-taro'
import React from 'react'

const customTheme = {
  nutuiBadgeBorderRadius: '12px 12px 12px 0',
}

const customTheme2 = {
  nutuiBadgeDotWidth: '14px',
  nutuiBadgeDotHeight: '14px',
  nutuiBadgeBorder: '2px solid #fff',
}

const Demo5 = () => {
  return (
    <Cell>
      <ConfigProvider theme={customTheme}>
        <Badge style={{ marginInlineEnd: '40px' }} value="NEW">
          <Avatar icon={<User />} shape="square" />
        </Badge>
      </ConfigProvider>

      <ConfigProvider theme={customTheme2}>
        <Badge style={{ marginInlineEnd: '40px' }} dot top="2" right="8">
          <Avatar icon={<User />} shape="square" />
        </Badge>
      </ConfigProvider>
    </Cell>
  )
}
export default Demo5
```

### 自定义位置

```tsx
import { User } from '@nutui/icons-react-taro'
import { Avatar, Badge, Cell } from '@nutui/nutui-react-taro'
import React from 'react'

const Demo6 = () => {
  return (
    <Cell>
      <Badge style={{ marginInlineEnd: '40px' }} value={8} top="5" right="5">
        <Avatar icon={<User />} shape="square" />
      </Badge>
      <Badge style={{ marginInlineEnd: '40px' }} value={76} top="10" right="10">
        <Avatar icon={<User />} shape="square" />
      </Badge>
      <Badge style={{ marginInlineEnd: '40px' }} value="NEW">
        <Avatar icon={<User />} shape="square" />
      </Badge>
    </Cell>
  )
}
export default Demo6
```

### 独立展示

```tsx
import React from 'react'
import { Badge, Cell } from '@nutui/nutui-react-taro'

const Demo7 = () => {
  return (
    <Cell style={{ height: '80px' }}>
      <Badge style={{ marginInlineEnd: '40px' }} value={8} />
      <Badge style={{ marginInlineEnd: '40px' }} value={76} />
      <Badge style={{ marginInlineEnd: '40px' }} value="NEW" />
    </Cell>
  )
}
export default Demo7
```

### 填充模式

```tsx
import { User } from '@nutui/icons-react-taro'
import { Avatar, Badge, Cell } from '@nutui/nutui-react-taro'
import React from 'react'

const Demo8 = () => {
  return (
    <Cell>
      <Badge style={{ marginInlineEnd: '40px' }} value={8} color="green">
        <Avatar icon={<User />} shape="square" />
      </Badge>
      <Badge style={{ marginInlineEnd: '40px' }} value={76} fill="outline">
        <Avatar icon={<User />} shape="square" />
      </Badge>
      <Badge
        style={{ marginInlineEnd: '40px' }}
        value="NEW"
        color="blue"
        fill="outline"
      >
        <Avatar icon={<User />} shape="square" />
      </Badge>
    </Cell>
  )
}
export default Demo8
```

## Badge

### Props

| 属性 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| value | 显示的内容，支持数字、字符和自定义内容 | `ReactNode` | `-` |
| max | value 为数值时，最大值 | `number` | `99` |
| dot | 是否为小点，当`value`值为自定义内容时，dot不生效 | `boolean` | `false` |
| top | 上下偏移量，支持单位设置，可设置为："0"或0 等 | `string` \| `number` | `"0"` |
| right | 左右偏移量，支持单位设置，可设置为："5"或5 等 | `string` \| `number` | `"5"` |
| color | 徽标背景颜色 | `string` | `-` |
| fill | 填充模式 | `solid` \| `outline` | `solid` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| :--- | :--- | :--- |
| \--nutui-badge-height | badge 的高度 | `14px` |
| \--nutui-badge-background-color | badge 背景色 | `linear-gradient(135deg, $color-primary 0%, $color-primary-stop-2 100%))` |
| \--nutui-badge-color | badge 内容色值 | `#fff` |
| \--nutui-badge-font-size | badge 内容字号 | `$font-size-small` |
| \--nutui-badge-border | badge 边框 | `0px solid $color-primary-text` |
| \--nutui-badge-border-radius | badge 边框圆角 | `14px` |
| \--nutui-badge-min-width | badge 最小宽度 | `5px` |
| \--nutui-badge-padding | badge 的padding值 | `0 5px` |
| \--nutui-badge-icon-padding | badge 为自定义icon时 的 padding值 | `2px` |
| \--nutui-badge-icon-size | badge 为自定义icon时 的 size | `12px` |
| \--nutui-badge-content-transform | badge 内容位置 | `translateY(-50%) translateX(100%)` |
| \--nutui-badge-z-index | badge 自定义icon时的z-index | `1` |
| \--nutui-badge-dot-width | badge 为圆点时的宽度、高度、圆角 | `7px` |
| \--nutui-badge-dot-border | badge 为圆点时的边框 | `0px solid $color-primary-text` |
