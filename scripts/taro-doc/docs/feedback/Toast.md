---
sidebar_class_name: hasIcon
---

# Toast 吐司

:::info 兼容性
仅支持H5及小程序，JDRN、鸿蒙端待支持
:::

用于轻提示。

> 当前组件 Taro 环境暂不支持函数式调用，推荐使用 Taro.API 使用原生组件 https://taro-docs.jd.com/taro/docs/apis/ui/interaction/showToast

## 引入

```tsx
import { Toast } from '@dongdesign/ui'
```

## 基础用法

### 文字提示

```tsx
import React, { useState } from 'react'
import { Cell, Toast } from '@nutui/nutui-react-taro'

const Demo1 = () => {
  const [state, setState] = useState({
    content: 'toast',
    type: 'text',
    duration: 2,
    icon: '',
    title: '',
  })
  const [showToast, setShowToast] = useState(false)

  const openToast = (
    type: string,
    content: string,
    duration?: number,
    icon?: string,
    title?: string
  ) => {
    const changeState = Object.assign(state, {
      type,
      content,
      duration,
      icon,
      title,
    })
    setState(changeState)
  }
  return (
    <>
      <Toast
        type={state.type}
        content={state.content}
        duration={state.duration}
        icon={state.icon}
        title={state.title}
        visible={showToast}
        onClose={() => {
          setShowToast(false)
        }}
      />
      <Cell
        title="Text文字提示"
        onClick={() => {
          openToast('text', '网络失败，请稍后再试~')
          setShowToast(true)
        }}
      />
      <Cell
        title="Toast 标题提示"
        onClick={() => {
          openToast(
            'text',
            '网络失败，请稍后再试~',
            undefined,
            undefined,
            '标题提示'
          )
          setShowToast(true)
        }}
      />
      <Cell
        title="Success 成功提示"
        onClick={() => {
          openToast('success', '成功提示')
          setShowToast(true)
        }}
      />
      <Cell
        title="Error 失败提示"
        onClick={() => {
          openToast('fail', '失败提示')
          setShowToast(true)
        }}
      />
      <Cell
        title=" Warning 警告提示"
        onClick={() => {
          openToast('warn', '警告提示')
          setShowToast(true)
        }}
      />
      <Cell
        title=" Loading 加载提示"
        onClick={() => {
          openToast('loading', '加载中')
          setShowToast(true)
        }}
      />
    </>
  )
}
export default Demo1
```

### 函数调用

```tsx
import React from 'react'
import { Jd } from '@nutui/icons-react-taro'
import { Cell, Toast } from '@nutui/nutui-react-taro'

const Demo5 = () => {
  return (
    <>
      <Cell
        title="函数调用"
        onClick={() => {
          Toast.show('test', {
            title: '函数调用',
            content: '函数调用',
            type: 'fail',
            duration: 2,
            position: 'center',
            icon: <Jd />,
            lockScroll: true,
            onClose: () => {
              console.log('close')
            },
          })
        }}
      />
    </>
  )
}
export default Demo5
```

### 设置展示时长

```tsx
import React, { useState } from 'react'
import { Cell, Toast } from '@nutui/nutui-react-taro'

const Demo3 = () => {
  const [state, setState] = useState({
    content: 'toast',
    type: 'text',
    duration: 2,
    icon: '',
    title: '',
  })
  const [showToast, setShowToast] = useState(false)

  const openToast = (
    type: string,
    content: string,
    duration?: number,
    icon?: string,
    title?: string
  ) => {
    const changeState = Object.assign(state, {
      type,
      content,
      duration,
      icon,
      title,
    })
    setState(changeState)
  }
  return (
    <>
      <Toast
        type={state.type}
        content={state.content}
        duration={state.duration}
        icon={state.icon}
        title={state.title}
        visible={showToast}
        onClose={() => {
          setShowToast(false)
        }}
      />
      <Cell
        title="展示时长为10秒"
        onClick={() => {
          openToast('text', '设置展示时长为10秒', 10)
          setShowToast(true)
        }}
      />
      <Cell
        title="隐藏Toast"
        onClick={() => {
          setShowToast(false)
        }}
      />
    </>
  )
}
export default Demo3
```

### 自定义 Icon

```tsx
import React, { useState } from 'react'
import { Cell, Toast } from '@nutui/nutui-react-taro'

const Demo4 = () => {
  const [state, setState] = useState({
    content: 'toast',
    type: 'text',
    duration: 2,
    icon: '',
    title: '',
  })
  const [showToast, setShowToast] = useState(false)

  const openToast = (
    type: string,
    content: string,
    duration?: number,
    icon?: string,
    title?: string
  ) => {
    const changeState = Object.assign(state, {
      type,
      content,
      duration,
      icon,
      title,
    })
    setState(changeState)
  }
  return (
    <>
      <Toast
        type={state.type}
        content={state.content}
        duration={state.duration}
        icon={state.icon}
        title={state.title}
        visible={showToast}
        onClose={() => {
          setShowToast(false)
        }}
      />
      <Cell
        title="自定义 Icon"
        onClick={() => {
          openToast('text', '设置icon为JD', 2, 'JD')
          setShowToast(true)
        }}
      />
    </>
  )
}
export default Demo4
```

### 换行截断方式

```tsx
import React, { useState } from 'react'
import { Cell, Toast, ToastWordBreak } from '@nutui/nutui-react-taro'

const Demo5 = () => {
  const [state, setState] = useState<{
    content: string
    wordBreak: ToastWordBreak
  }>({
    content: `Let's try ABCDEFGHIJKLMN here.`,
    wordBreak: 'break-all',
  })
  const [show, setShow] = useState(false)
  return (
    <>
      <Toast
        content={state.content}
        visible={show}
        type="text"
        onClose={() => {
          setShow(false)
        }}
        wordBreak={state.wordBreak}
      />
      <Cell.Group>
        <Cell title="换行时截断单词" onClick={() => setShow(true)} />
        <Cell
          title="换行时不截断单词"
          onClick={() => {
            setState({
              content: `Let's try ABCDEFGHIJKLMN here.`,
              wordBreak: 'break-word',
            })
            setShow(true)
          }}
        />
      </Cell.Group>
    </>
  )
}
export default Demo5
```

## Toast

### Props

| 属性 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| content | 消息文本内容 | `string` \| `React.ReactNode` | `-` |
| duration | 展示时长（秒），值为 0 时，toast 不会自动消失（loading类型默认为0） | `number` | `2` |
| title | 标题 | `string` | `-` |
| position | toast展示位置 | `top` \| `center` \| `bottom` | `center` |
| contentClassName | 自定义内容区类名 | `string` | `-` |
| contentStyle | 自定义内容区样式 | `React.CSSProperties` | `-` |
| icon | 自定义图标，对应icon组件，支持图片链接 | `string` | `-` |
| size | 文案尺寸，三选一 | `small` \| `base` \| `large` | `base` |
| closeOnOverlayClick | 是否在点击遮罩层后关闭提示 | `boolean` | `false` |
| lockScroll | 背景是否锁定 | `boolean` | `false` |
| type | 弹框类型 可选值（text、success、fail、warn、loading） | `string` | `-` |
| visible | 弹窗是否显示开关 | `boolean` | `false` |
| wordBreak | 换行截断方式 | `normal \| break-all \| break-word ` | `break-all` |
| onClose | 关闭时触发的事件 | `Function` | `null` |

### Methods

| 方法名 | 说明 | 类型 |
| :--- | :--- | :--- |
| Toast.show | 打开 Toast | (id: string, options: ToastOptions) => void |
| Toast.hide | 关闭 Toast | (id: string) => void |

ToastOptions 是 ToastProps 的子集，包含如下属性：msg, title, type, duration

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| :--- | :--- | :--- |
| \--nutui-toast-title-font-size | `toast`标题文字大小 | `16px` |
| \--nutui-toast-text-font-size | `toast`内容文字大小 | `14px` |
| \--nutui-toast-font-color | `toast`文字颜色 | `#fff` |
| \--nutui-toast-inner-top | `toast`内容区自定义高度 | `50%` |
| \--nutui-toast-inner-padding | `toast`内容区padding值 | `24px 30px` |
| \--nutui-toast-inner-bg-color | `toast`内容区背景色 | `$color-mask` |
| \--nutui-toast-inner-border-radius | `toast`内容区圆角值 | `12px` |
| \--nutui-toast-inner-text-align | `toast`内容区文本对齐方式 | `center` |
