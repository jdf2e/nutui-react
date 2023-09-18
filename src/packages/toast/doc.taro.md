# Toast 吐司

## 介绍

用于轻提示。

> 当前组件 Taro 环境暂不支持函数式调用，推荐使用 Taro.API 使用原生组件 https://taro-docs.jd.com/taro/docs/apis/ui/interaction/showToast

## 安装

```tsx
import { Toast } from '@nutui/nutui-react-taro';
```

## 基础用法

### 文字提示

:::demo

```tsx
import React, { useState } from 'react'
import { Cell, Toast } from '@/packages/nutui.react.taro'

const App = () => {
  const [state, SetState] = useState({
    msg: 'toast',
    type: 'text',
    cover: false,
    duration: 2,
    closeOnOverlayClick: false,
    icon: '',
    center: true,
  })
  const [showToast, SetShowToast] = useState(false)

  const openToast = (
    type: string,
    msg: string,
    duration?: number,
    icon?: string
  ) => {
    const changeState = Object.assign(state, {
      msg,
      type,
      duration,
      icon,
    })
    SetState(changeState)
  }
    return (
        <>
        <Toast msg={state.msg} visible={showToast} type={state.type} onClose={() => {
            SetShowToast(false)
          }} cover={state.cover} />
        <Cell
          title="Text文字提示"
          
          onClick={(
            event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
          ) => textToast('网络失败，请稍后再试~')}
        />
        <Cell
          title="Text文字提示"
          
          onClick={(
            event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
          ) => {
            openToast('text', '网络失败，请稍后再试~')
            SetShowToast(true)
          }}
        />
       <Cell
          title="Success 成功提示"
          
          onClick={(
            event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
          ) => {
            openToast('success', '成功提示')
            SetShowToast(true)
          }}
        />
        <Cell
          title="Error 失败提示"
          
          onClick={(
            event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
          ) => {
            openToast('fail', '失败提示')
            SetShowToast(true)
          }}
        />
        <Cell
          title=" Warning 警告提示"
          
          onClick={(
            event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
          ) => {
            openToast('warn', '警告提示')
            SetShowToast(true)
          }}
        />
        <Cell
          title=" Loading 加载提示"
          
          onClick={(
            event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
          ) => {
            openToast('loading', '加载中')
            SetShowToast(true)
          }}
        />
        <Cell
          title="设置展示时长为10秒提示"
          
          onClick={(
            event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
          ) => {
            openToast('text', '设置展示时长为10秒', 10)
            SetShowToast(true)
          }}
        />
        <Cell
          title="关闭正在显示的toast"
          
          onClick={(
            event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
          ) => {
            SetShowToast(false)
          }}
        />
        <Cell
          title="传入icon组件中的'JD'图标"
          
          onClick={(
            event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
          ) => {
            openToast('text', '设置icon为JD', 2, 'JD')
            SetShowToast(true)
          }}
        />
        
        </>
    )
}
export default App
```


### 函数调用
```tsx
import  React, {useState} from "react";
import { Toast, Cell } from '@nutui/nutui-react-taro';
import { Jd } from '@nutui/icons-react-taro'

const App = () => {
  const [showNotify, SetShowNotify] = useState(false)
  const [states, SetStates] = useState({
    message: '',
    type: 'danger',
  })
  const changeNotify = (message: string, type?: string) => {
    const change = Object.assign(states, {message,type})
    SetStates(change)
  }
  return (
    <>
      <Toast id="test" />
      <Cell
        title="函数调用"
        onClick={(event: React.MouseEvent) => {
          Toast.show('test', {
            title: '函数调用',
            type: 'fail',
            duration: 3,
            position: 'center',
            icon: <Jd />,
            size: 'large',
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
export default App
```

:::

## Toast

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| msg | 消息文本内容,支持传入HTML | `string \| VNode` | `-` |
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
| onClose | 关闭时触发的事件 | `Function` | `null` |

### Methods
| 方法名 | 说明 | 类型 |
| --- | --- | --- |
| Toast.show | 打开 Toast | (id: string, options: ToastOptions) => void |
| Toast.hide | 关闭 Toast | (id: string) => void |

ToastOptions 是 ToastProps 的子集，包含如下属性：msg, title, type, duration


## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-toast-title-font-size | `toast`标题文字大小 | `16px` |
| \--nutui-toast-text-font-size | `toast`内容文字大小 | `14px` |
| \--nutui-toast-font-color | `toast`文字颜色 | `#fff` |
| \--nutui-toast-inner-top           | `toast`内容区自定义高度    | `50%`              |
| \--nutui-toast-inner-padding | `toast`内容区padding值 | `24px 30px` |
| \--nutui-toast-inner-bg-color | `toast`内容区背景色 | `$gray7` |
| \--nutui-toast-inner-border-radius | `toast`内容区圆角值 | `12px` |
| \--nutui-toast-inner-text-align | `toast`内容区文本对齐方式 | `center` |
| \--nutui-overlay-bg-color | `toast`遮罩背景色 | `rgba(0, 0, 0, 0)` |