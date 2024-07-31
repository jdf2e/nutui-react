---
sidebar_class_name: hasIcon
---

# Progress 进度条

:::info 兼容性
仅支持H5及小程序，JDRN、鸿蒙端待支持
:::

展示操作或任务的当前进度。

## 引入

```tsx
import { Progress } from '@dongdesign/ui'
```

## 示例代码

### 基础用法

```tsx
import React from 'react'
import { Progress } from '@nutui/nutui-react-taro'

const Demo1 = () => {
  return <Progress percent={30} />
}
export default Demo1
```

### 设置颜色与宽度

```tsx
import React from 'react'
import { Progress } from '@nutui/nutui-react-taro'

const Demo2 = () => {
  return (
    <Progress
      percent={30}
      color="var(--nutui-color-primary)"
      background="var(--nutui-brand-1)"
      strokeWidth="15"
    />
  )
}
export default Demo2
```

### 显示百分比

```tsx
import React from 'react'
import { Progress } from '@nutui/nutui-react-taro'

const Demo3 = () => {
  return <Progress percent={50} showText />
}
export default Demo3
```

### 自定义显示内容

```tsx
import React from 'react'
import { Progress, Image } from '@nutui/nutui-react-taro'

const Demo4 = () => {
  return (
    <Progress percent={60} showText>
      <Image
        width="30px"
        height="30px"
        src="https://img11.360buyimg.com/imagetools/jfs/t1/137646/13/7132/1648/5f4c748bE43da8ddd/a3f06d51dcae7b60.png"
      />
    </Progress>
  )
}
export default Demo4
```

### 自定义尺寸

```tsx
import React from 'react'
import { Progress, Cell } from '@nutui/nutui-react-taro'

const Demo5 = () => {
  return (
    <>
      <Cell>
        <Progress percent={30} strokeWidth="5" showText />
      </Cell>
      <Cell>
        <Progress percent={50} strokeWidth="10" showText />
      </Cell>
      <Cell>
        <Progress percent={70} strokeWidth="15" showText />
      </Cell>
    </>
  )
}
export default Demo5
```

### 状态显示

```tsx
import React from 'react'
import { Progress, Cell } from '@nutui/nutui-react-taro'
import { Checked, Tips } from '@nutui/icons-react-taro'

const Demo6 = () => {
  return (
    <>
      <Cell>
        <Progress
          percent={30}
          color="linear-gradient(270deg, rgba(18,126,255,1) 0%,rgba(32,147,255,1) 32.815625%,rgba(13,242,204,1) 100%)"
          animated
        />
      </Cell>
      <Cell align="center">
        <Progress percent={100} />
        <Checked color="green" style={{ margin: '0 5px' }} />
      </Cell>
      <Cell align="center">
        <Progress
          percent={100}
          color="linear-gradient(90deg, rgba(180,236,81,1) 0%,rgba(66,147,33,1) 100%)"
          strokeWidth="15"
        />
        <Tips color="red" style={{ margin: '0 5px' }} />
      </Cell>
    </>
  )
}
export default Demo6
```

### 动态改变

```tsx
import React, { useState } from 'react'
import { Progress, Cell, Button, Toast } from '@nutui/nutui-react-taro'

const Demo7 = () => {
  const [value, setValue] = useState(0)
  const [show, setShow] = useState(false)
  const [toastMsg, setToastMsg] = useState('')
  return (
    <Cell.Group>
      <Toast
        type="text"
        visible={show}
        content={toastMsg}
        onClose={() => {
          setShow(false)
        }}
      />
      <Cell align="center">
        <Progress percent={value} />
        <span style={{ margin: '0 5px' }}>{value}%</span>
      </Cell>
      <Cell align="center">
        <Button
          type="default"
          style={{ margin: 8 }}
          onClick={() => {
            if (value <= 0) {
              setToastMsg('进度已为0')
              setShow(true)
            }
            setValue(Math.max(0, value - 10))
          }}
        >
          减少
        </Button>
        <Button
          type="primary"
          style={{ margin: 8 }}
          onClick={() => {
            if (value >= 100) {
              setToastMsg('进度已为100%')
              setShow(true)
            }
            setValue(Math.min(100, value + 10))
          }}
        >
          增加
        </Button>
      </Cell>
    </Cell.Group>
  )
}
export default Demo7
```

### 延迟加载数据

```tsx
import React from 'react'
import { Progress } from '@nutui/nutui-react-taro'

const Demo8 = () => {
  return <Progress percent={30} delay={500} lazy />
}
export default Demo8
```

## Progress

### Props

| 属性 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| percent | 百分比 | `number` | `0` |
| color | 进度条线条颜色 | `string` | `linear-gradient(135deg, #FF0F23 0%, #fa6419 100%)` |
| background | 进度条背景颜色 | `string` | `#f3f3f3` |
| strokeWidth | 进度条宽度 | `string` | `-` |
| showText | 是否显示文字内容 | `boolean` | `false` |
| animated | 是否展示动画效果 | `boolean` | `false` |
| lazy | 每次进入可视区展示进度条动画 | `boolean` | `false` |
| delay | 延迟数据加载时长，单位 ms | `number` | `0` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| :--- | :--- | :--- |
| \--nutui-progress-height | 进度条宽度 | `10px` |
| \--nutui-progress-border-radius | 进度条边框圆角 | `12px` |
| \--nutui-progress-color | 进度条颜色 | `linear-gradient(135deg, #FF0F23 0%, #fa6419 100%)` |
| \--nutui-progress-background | 进度条背景色 | `#f3f3f3` |
| \--nutui-progress-text-color | 文本颜色 | `$color-primary-text` |
| \--nutui-progress-text-padding | 文本内边距 | `0 5px` |
| \--nutui-progress-text-font-size | 文本字体大小 | `9px` |
| \--nutui-progress-text-position-top | 文本定位 top | `-4px` |
| \--nutui-progress-text-position-bottom | 文本定位 bottom | `-4px` |
| \--nutui-progress-text-border-radius | 文本边框圆角 | `5px` |
| \--nutui-progress-text-background | 文本背景颜色 | `$progress-color` |
