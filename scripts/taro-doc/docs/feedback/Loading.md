---
sidebar_class_name: hasIcon
---

# Loading 加载中

:::info 兼容性
仅支持H5及小程序，JDRN、鸿蒙端待支持
:::

#

加载图标，用于显示正在加载中的状态

### 引入

```tsx
import { Loading } from '@dongdesign/ui'
```

## 示例代码

### 基础用法

```tsx
import React from 'react'
import { Loading, Cell } from '@nutui/nutui-react-taro'

const Demo1 = () => {
  return (
    <Cell>
      <Loading type="circular" />
      <Loading type="spinner" />
    </Cell>
  )
}
export default Demo1
```

### 自定义颜色

```tsx
import React from 'react'
import { Loading, Cell, ConfigProvider } from '@nutui/nutui-react-taro'

const Demo2 = () => {
  return (
    <Cell>
      <ConfigProvider theme={{ nutuiLoadingIconColor: '#FF0F23' }}>
        <Loading type="circular" />
      </ConfigProvider>
      <ConfigProvider theme={{ nutuiLoadingIconColor: '#396aca' }}>
        <Loading type="spinner" />
      </ConfigProvider>
    </Cell>
  )
}
export default Demo2
```

### 自定义大小

```tsx
import React from 'react'
import { Loading, Cell, ConfigProvider } from '@nutui/nutui-react-taro'

const Demo3 = () => {
  return (
    <Cell>
      <ConfigProvider theme={{ nutuiLoadingIconSize: '20px' }}>
        <Loading type="circular" />
      </ConfigProvider>
      <ConfigProvider theme={{ nutuiLoadingIconSize: '28px' }}>
        <Loading type="spinner" />
      </ConfigProvider>
    </Cell>
  )
}
export default Demo3
```

### 带文字

```tsx
import React from 'react'
import { Loading, Cell } from '@nutui/nutui-react-taro'

const Demo4 = () => {
  return (
    <Cell>
      <Loading>加载中</Loading>
    </Cell>
  )
}
export default Demo4
```

### 带文字(竖向排列)

```tsx
import React from 'react'
import { Loading, Cell } from '@nutui/nutui-react-taro'

const Demo5 = () => {
  return (
    <Cell>
      <Loading direction="vertical">加载中</Loading>
    </Cell>
  )
}
export default Demo5
```

### 自定义文字颜色和大小

```tsx
import React from 'react'
import { Loading, Cell, ConfigProvider } from '@nutui/nutui-react-taro'

const Demo6 = () => {
  return (
    <Cell>
      <ConfigProvider theme={{ nutuiLoadingTextColor: '#396aca' }}>
        <Loading>加载中</Loading>
      </ConfigProvider>
      <ConfigProvider theme={{ nutuiLoadingTextSize: '20px' }}>
        <Loading>加载中</Loading>
      </ConfigProvider>
    </Cell>
  )
}
export default Demo6
```

### 自定义图标

```tsx
import React from 'react'
import { Loading, Cell } from '@nutui/nutui-react-taro'
import { Star } from '@nutui/icons-react-taro'

const Demo7 = () => {
  return (
    <Cell>
      <Loading direction="vertical" icon={<Star size={24} color="red" />} />
    </Cell>
  )
}
export default Demo7
```

### 与遮罩层结合

```tsx
import React, { useState } from 'react'
import { Loading, Cell, Button, Overlay } from '@nutui/nutui-react-taro'

const Demo8 = () => {
  const [visible, setVisible] = useState(false)

  const WrapperStyle = {
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  }

  const showOverlay = () => {
    setVisible(true)
    setTimeout(() => {
      setVisible(false)
    }, 2000)
  }

  return (
    <>
      <Cell>
        <Button type="success" onClick={() => showOverlay()}>
          遮罩层loading(两秒后关闭)
        </Button>
      </Cell>
      <Overlay visible={visible}>
        <div className="wrapper" style={WrapperStyle}>
          <Loading direction="vertical">加载中</Loading>
        </div>
      </Overlay>
    </>
  )
}
export default Demo8
```

## Loading

### Props

| 属性 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| type | loading图标的样式 | `circular \| spinner` | `circular` |
| direction | loading图标和文字的排列方式 | `horizontal \| vertical` | `horizontal` |
| icon | 自定义loading的图标 | `tsx.Element` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| :--- | :--- | :--- |
| \--nutui-loading-icon-color | icon色值 | `$color-text-help` |
| \--nutui-loading-icon-size | icon大小 | `$font-size-small` |
| \--nutui-loading-color | 文本色值 | `$color-text-help` |
| \--nutui-loading-font-size | 文本字号 | `$font-size-small` |
