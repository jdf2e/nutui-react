---
sidebar_class_name: hasIcon
---

# Grid 宫格

:::info 兼容性
仅支持H5及小程序，JDRN、鸿蒙端待支持
:::

用于分隔成等宽区块进行页面导航。

## 引入

```tsx
import { Grid } from '@dongdesign/ui'
```

## 示例代码

### 基础用法

```tsx
import React from 'react'
import { Grid } from '@nutui/nutui-react-taro'
// import { Image } from '@nutui/icons-react-taro'
import { Text } from '@tarojs/components'

const Image = () => <Text>T</Text>

const Demo1 = () => {
  return (
    <Grid>
      <Grid.Item text="文字">
        <Image />
      </Grid.Item>
      <Grid.Item text="文字">
        <Image />
      </Grid.Item>
      <Grid.Item text="文字">
        <Image />
      </Grid.Item>
      <Grid.Item text="文字">
        <Image />
      </Grid.Item>
      <Grid.Item text="文字">
        <Image />
      </Grid.Item>
      <Grid.Item text="文字">
        <Image />
      </Grid.Item>
      <Grid.Item text="文字">
        <Image />
      </Grid.Item>
      <Grid.Item text="文字">
        <Image />
      </Grid.Item>
    </Grid>
  )
}
export default Demo1
```

### 自定义列数

```tsx
import React from 'react'
import { Grid } from '@nutui/nutui-react-taro'
// import { Image } from '@nutui/icons-react-taro'
import { Text } from '@tarojs/components'

const Image = () => <Text>T</Text>

const Demo2 = () => {
  return (
    <Grid columns={3}>
      <Grid.Item text="文字">
        <Image />
      </Grid.Item>
      <Grid.Item text="文字">
        <Image />
      </Grid.Item>
      <Grid.Item text="文字">
        <Image />
      </Grid.Item>
      <Grid.Item text="文字">
        <Image />
      </Grid.Item>
      <Grid.Item text="文字">
        <Image />
      </Grid.Item>
      <Grid.Item text="文字">
        <Image />
      </Grid.Item>
    </Grid>
  )
}
export default Demo2
```

### 正方形格子

```tsx
import React from 'react'
import { Grid } from '@nutui/nutui-react-taro'
// import { Image } from '@nutui/icons-react-taro'
import { Text } from '@tarojs/components'

const Image = () => <Text>T</Text>

const Demo3 = () => {
  return (
    <Grid columns={3} square>
      <Grid.Item text="文字">
        <Image />
      </Grid.Item>
      <Grid.Item text="文字">
        <Image />
      </Grid.Item>
      <Grid.Item text="文字">
        <Image />
      </Grid.Item>
    </Grid>
  )
}
export default Demo3
```

### 格子间距

```tsx
import React from 'react'
import { Grid } from '@nutui/nutui-react-taro'
// import { Image } from '@nutui/icons-react-taro'
import { Text } from '@tarojs/components'

const Image = () => <Text>T</Text>

const Demo4 = () => {
  return (
    <Grid gap={3}>
      <Grid.Item text="文字">
        <Image />
      </Grid.Item>
      <Grid.Item text="文字">
        <Image />
      </Grid.Item>
      <Grid.Item text="文字">
        <Image />
      </Grid.Item>
      <Grid.Item text="文字">
        <Image />
      </Grid.Item>
      <Grid.Item text="文字">
        <Image />
      </Grid.Item>
      <Grid.Item text="文字">
        <Image />
      </Grid.Item>
      <Grid.Item text="文字">
        <Image />
      </Grid.Item>
      <Grid.Item text="文字">
        <Image />
      </Grid.Item>
    </Grid>
  )
}
export default Demo4
```

### 内容翻转

```tsx
import React from 'react'
import { Grid } from '@nutui/nutui-react-taro'
// import { Image } from '@nutui/icons-react-taro'
import { Text } from '@tarojs/components'
import pxTransform from '@dongdesign/ui/dist/utils/px-transform'

const Image = () => <Text>T</Text>

const Demo5 = () => {
  const style = { height: pxTransform(100) }
  return (
    <Grid reverse style={style}>
      <Grid.Item text="文字">
        <Image />
      </Grid.Item>
      <Grid.Item text="文字">
        <Image />
      </Grid.Item>
      <Grid.Item text="文字">
        <Image />
      </Grid.Item>
      <Grid.Item text="文字">
        <Image />
      </Grid.Item>
    </Grid>
  )
}
export default Demo5
```

### 内容横向

```tsx
import React from 'react'
import { Grid } from '@nutui/nutui-react-taro'
// import { Image } from '@nutui/icons-react-taro'
import { Text } from '@tarojs/components'

const Image = () => <Text>T</Text>

const Demo6 = () => {
  return (
    <Grid direction="horizontal">
      <Grid.Item text="文字">
        <Image />
      </Grid.Item>
      <Grid.Item text="文字">
        <Image />
      </Grid.Item>
      <Grid.Item text="文字">
        <Image />
      </Grid.Item>
      <Grid.Item text="文字">
        <Image />
      </Grid.Item>
    </Grid>
  )
}
export default Demo6
```

### 内容翻转 + 横向

```tsx
import React from 'react'
import { Grid } from '@nutui/nutui-react-taro'
// import { Image } from '@nutui/icons-react-taro'
import { Text } from '@tarojs/components'

const Image = () => <Text>T</Text>

const Demo7 = () => {
  return (
    <Grid reverse direction="horizontal">
      <Grid.Item text="文字">
        <Image />
      </Grid.Item>
      <Grid.Item text="文字">
        <Image />
      </Grid.Item>
      <Grid.Item text="文字">
        <Image />
      </Grid.Item>
      <Grid.Item text="文字">
        <Image />
      </Grid.Item>
    </Grid>
  )
}
export default Demo7
```

### 图标颜色/大小

```tsx
import React from 'react'
import { Grid } from '@nutui/nutui-react-taro'
// import { Image } from '@nutui/icons-react-taro'
import { Text } from '@tarojs/components'
import pxTransform from '@/utils/px-transform'

const Demo8 = () => {
  return (
    <Grid columns="3">
      <Grid.Item text="文字">
        {/* <Image size={16} /> */}
        <Text style={{ fontSize: pxTransform(16) }}>T</Text>
      </Grid.Item>
      <Grid.Item text="文字">
        {/* <Image color="red" /> */}
        <Text style={{ color: 'red' }}>T</Text>
      </Grid.Item>
      <Grid.Item text="文字">
        {/* <Image size={30} color="#478EF2" /> */}
        <Text style={{ color: '#478EF2', fontSize: pxTransform(30) }}>T</Text>
      </Grid.Item>
      <Grid.Item text="文字">
        {/* <Image size={16} /> */}
        <Text style={{ fontSize: pxTransform(16) }}>T</Text>
      </Grid.Item>
      <Grid.Item text="文字">
        {/* <Image color="red" /> */}
        <Text style={{ color: 'red' }}>T</Text>
      </Grid.Item>
      <Grid.Item text="文字">
        {/* <Image size={30} color="#478EF2" /> */}
        <Text style={{ color: '#478EF2', fontSize: pxTransform(30) }}>T</Text>
      </Grid.Item>
    </Grid>
  )
}
export default Demo8
```

### 自定义内容

```tsx
import React from 'react'
import { Grid } from '@nutui/nutui-react-taro'
import { Image } from '@tarojs/components'
import pxTransform from '@/utils/px-transform'

const Demo9 = () => {
  const style = {
    width: pxTransform(100),
    height: pxTransform(100),
  }
  const imgSrc =
    'https://m.360buyimg.com/babel/jfs/t1/36973/29/11270/120042/5cf1fe3cEac2b5898/10c2722d0cc0bfa7.png'
  return (
    <Grid columns={3}>
      <Grid.Item>
        <Image src={imgSrc} style={style} />
      </Grid.Item>
      <Grid.Item>
        <Image src={imgSrc} style={style} />
      </Grid.Item>
      <Grid.Item>
        <Image src={imgSrc} style={style} />
      </Grid.Item>
    </Grid>
  )
}
export default Demo9
```

### 点击子项事件

```tsx
import React from 'react'
import { Grid } from '@nutui/nutui-react-taro'
// import { Image } from '@nutui/icons-react-taro'
import Taro from '@tarojs/taro'
import { Text } from '@tarojs/components'

const Image = () => <Text>T</Text>

const Demo10 = () => {
  const onClick = (item: any, index: number) => {
    Taro.showToast({ title: `点击了${item.text}，第${index}个` })
  }
  return (
    <Grid direction="horizontal" onClick={onClick}>
      <Grid.Item text="文字">
        <Image />
      </Grid.Item>
      <Grid.Item text="文字">
        <Image />
      </Grid.Item>
      <Grid.Item text="文字">
        <Image />
      </Grid.Item>
      <Grid.Item text="文字">
        <Image />
      </Grid.Item>
    </Grid>
  )
}
export default Demo10
```

## Grid

### Props

| 属性 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
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
| :--- | :--- | :--- | :--- |
| text | 文字 | `string` \| `ReactNode` | `-` |
| onClick | 点击格子时触发 | `(event: Event) => void` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| :--- | :--- | :--- |
| \--nutui-grid-border-color | 边框颜色 | `#f5f6f7` |
| \--nutui-grid-item-content-padding | 内边距 | `16px 8px` |
| \--nutui-grid-item-content-bg-color | 背景 | `$white` |
| \--nutui-grid-item-text-margin | 外边距 | `8px` |
| \--nutui-grid-item-text-color | 文字颜色 | `$color-title` |
| \--nutui-grid-item-text-font-size | 文字字体大小 | `$font-size-small` |
