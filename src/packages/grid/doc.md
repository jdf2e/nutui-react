# Grid 宫格

## 介绍

用于分隔成等宽区块进行页面导航。

## 安装

```tsx
import { Grid } from '@nutui/nutui-react'
```

## 代码演示

### 基础用法

:::demo

```tsx
import React from 'react'
import { Grid } from '@nutui/nutui-react'
import { Image } from '@nutui/icons-react'

const App = () => {
  return (
    <Grid>
      <Grid.Item text="文字"><Image /></Grid.Item>
      <Grid.Item text="文字"><Image /></Grid.Item>
      <Grid.Item text="文字"><Image /></Grid.Item>
      <Grid.Item text="文字"><Image /></Grid.Item>
      <Grid.Item text="文字"><Image /></Grid.Item>
      <Grid.Item text="文字"><Image /></Grid.Item>
      <Grid.Item text="文字"><Image /></Grid.Item>
      <Grid.Item text="文字"><Image /></Grid.Item>
    </Grid>
  )
}
export default App
```

:::

### 自定义列数

:::demo

```tsx
import React from 'react'
import { Grid } from '@nutui/nutui-react'
import { Image } from '@nutui/icons-react'

const App = () => {
  return (
    <Grid columns={3}>
      <Grid.Item text="文字"><Image /></Grid.Item>
      <Grid.Item text="文字"><Image /></Grid.Item>
      <Grid.Item text="文字"><Image /></Grid.Item>
      <Grid.Item text="文字"><Image /></Grid.Item>
      <Grid.Item text="文字"><Image /></Grid.Item>
      <Grid.Item text="文字"><Image /></Grid.Item>
    </Grid>
  )
}
export default App
```

:::

### 正方形格子

:::demo

```tsx
import React from 'react'
import { Grid } from '@nutui/nutui-react'
import { Image } from '@nutui/icons-react'

const App = () => {
  return (
    <Grid columns={3} square>
      <Grid.Item text="文字"><Image /></Grid.Item>
      <Grid.Item text="文字"><Image /></Grid.Item>
      <Grid.Item text="文字"><Image /></Grid.Item>
    </Grid>
  )
}
export default App
```

:::

### 格子间距

:::demo

```tsx
import React from 'react'
import { Grid } from '@nutui/nutui-react'
import { Image } from '@nutui/icons-react'

const App = () => {
  return (
    <Grid gap={3}>
      <Grid.Item text="文字"><Image /></Grid.Item>
      <Grid.Item text="文字"><Image /></Grid.Item>
      <Grid.Item text="文字"><Image /></Grid.Item>
      <Grid.Item text="文字"><Image /></Grid.Item>
      <Grid.Item text="文字"><Image /></Grid.Item>
      <Grid.Item text="文字"><Image /></Grid.Item>
      <Grid.Item text="文字"><Image /></Grid.Item>
      <Grid.Item text="文字"><Image /></Grid.Item>
    </Grid>
  )
}
export default App
```

:::

### 内容翻转

:::demo

```tsx
import React from 'react'
import { Grid } from '@nutui/nutui-react'
import { Image } from '@nutui/icons-react'

const App = () => {
  return (
    <Grid reverse>
      <Grid.Item text="文字"><Image /></Grid.Item>
      <Grid.Item text="文字"><Image /></Grid.Item>
      <Grid.Item text="文字"><Image /></Grid.Item>
      <Grid.Item text="文字"><Image /></Grid.Item>
    </Grid>
  )
}
export default App
```

:::

### 内容横向

:::demo

```tsx
import React from 'react'
import { Grid } from '@nutui/nutui-react'
import { Image } from '@nutui/icons-react'

const App = () => {
  return (
    <Grid direction="horizontal">
      <Grid.Item text="文字"><Image /></Grid.Item>
      <Grid.Item text="文字"><Image /></Grid.Item>
      <Grid.Item text="文字"><Image /></Grid.Item>
      <Grid.Item text="文字"><Image /></Grid.Item>
    </Grid>
  )
}
export default App
```

:::

### 内容翻转 + 横向

:::demo

```tsx
import React from 'react'
import { Grid } from '@nutui/nutui-react'
import { Image } from '@nutui/icons-react'

const App = () => {
  return (
    <Grid reverse direction="horizontal">
      <Grid.Item text="文字"><Image /></Grid.Item>
      <Grid.Item text="文字"><Image /></Grid.Item>
      <Grid.Item text="文字"><Image /></Grid.Item>
      <Grid.Item text="文字"><Image /></Grid.Item>
    </Grid>
  )
}
export default App
```

:::

### 图标颜色/大小

:::demo

```tsx
import React from 'react'
import { Grid } from '@nutui/nutui-react'
import { Image } from '@nutui/icons-react'

const App = () => {
  return (
    <Grid columns="3">
      <Grid.Item text="文字">
        <Image width={15} height={15} />
      </Grid.Item>
      <Grid.Item text="文字">
        <Image color="red" />
      </Grid.Item>
      <Grid.Item text="文字">
        <Image width={30} height={30} color="#478EF2" />
      </Grid.Item>
    </Grid>
  )
}
export default App
```

:::

### 自定义内容

:::demo

```tsx
import React from 'react'
import { Grid, Image } from '@nutui/nutui-react'

const App = () => {
  const imgSrc = "https://m.360buyimg.com/babel/jfs/t1/36973/29/11270/120042/5cf1fe3cEac2b5898/10c2722d0cc0bfa7.png"
  return (
    <Grid columns={3} square>
      <Grid.Item>
        <Image src={imgSrc} width="100%" height="100%" />
      </Grid.Item>
      <Grid.Item>
        <Image src={imgSrc} width="100%" height="100%" />
      </Grid.Item>
      <Grid.Item>
        <Image src={imgSrc} width="100%" height="100%" />
      </Grid.Item>
    </Grid>
  )
}
export default App
```

:::

### 点击子项事件

:::demo

```tsx
import React from 'react'
import { Grid, Toast } from '@nutui/nutui-react'
import { Image as ImageIcon } from '@nutui/icons-react'

const App = () => {
  const onClick = (item: any, index: number) => {
    Toast.show(`clicked ${item.text}, index ${index}`)
  }
  return (
    <Grid direction="horizontal" onClick={onClick}>
      <Grid.Item text="文字">
        <ImageIcon />
      </Grid.Item>
      <Grid.Item text="文字">
        <ImageIcon />
      </Grid.Item>
      <Grid.Item text="文字">
        <ImageIcon />
      </Grid.Item>
      <Grid.Item text="文字">
        <ImageIcon />
      </Grid.Item>
    </Grid>
  )
}
export default App
```

:::

## Grid

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| columns | 列数 | `number` \| `string` | `4` |
| gap | 格子之间的间距，默认单位为`px` | `number` \| `string` | `0` |
| center | 是否将格子内容居中显示 | `boolean` | `true` |
| square | 是否将格子固定为正方形 | `boolean` | `false` |
| reverse | 内容翻转 | `boolean` | `false` |
| direction | 格子内容排列的方向 | `horizontal` \| `vertical` | `vertical` |
| onClick | 宫格子项点击事件 | `(index) => void` | `-` |

## Grid.Item

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| text | 文字 | `string` \| `ReactNode` | `-` |
| onClick | 点击格子时触发 | `(event: Event) => void` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-grid-border-color | 边框颜色 | `#f5f6f7` |
| \--nutui-grid-item-content-padding | 内边距 | `16px 8px` |
| \--nutui-grid-item-content-bg-color | 背景 | `$white` |
| \--nutui-grid-item-text-margin | 外边距 | `8px` |
| \--nutui-grid-item-text-color | 文字颜色 | `$color-title` |
| \--nutui-grid-item-text-font-size | 文字字体大小 | `$font-size-small` |
