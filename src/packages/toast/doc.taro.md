# Toast 吐司

### 介绍

用于轻提示。

>当前组件 Taro 环境暂不支持函数式调用，推荐使用 Taro.API 使用原生组件 https://taro-docs.jd.com/taro/docs/apis/ui/interaction/showToast


### 安装

```javascript
import { Toast } from '@nutui/nutui-react';
```
### 基本用法

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
    closeOnClickOverlay: false,
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
          isLink
          click={(
            event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
          ) => textToast('网络失败，请稍后再试~')}
        />
        <Cell
          title="Text文字提示"
          isLink
          click={(
            event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
          ) => {
            openToast('text', '网络失败，请稍后再试~')
            SetShowToast(true)
          }}
        />
       <Cell
          title="Success 成功提示"
          isLink
          click={(
            event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
          ) => {
            openToast('success', '成功提示')
            SetShowToast(true)
          }}
        />
        <Cell
          title="Error 失败提示"
          isLink
          click={(
            event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
          ) => {
            openToast('fail', '失败提示')
            SetShowToast(true)
          }}
        />
        <Cell
          title=" Warning 警告提示"
          isLink
          click={(
            event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
          ) => {
            openToast('warn', '警告提示')
            SetShowToast(true)
          }}
        />
        <Cell
          title=" Loading 加载提示"
          isLink
          click={(
            event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
          ) => {
            openToast('loading', '加载中')
            SetShowToast(true)
          }}
        />
        <Cell
          title="设置展示时长为10秒提示"
          isLink
          click={(
            event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
          ) => {
            openToast('text', '设置展示时长为10秒', 10)
            SetShowToast(true)
          }}
        />
        <Cell
          title="关闭正在显示的toast"
          isLink
          click={(
            event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
          ) => {
            SetShowToast(false)
          }}
        />
        <Cell
          title="传入icon组件中的'JD'图标"
          isLink
          click={(
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
:::



## Props

| 字段                   | 说明                                                                    | 类型         | 默认值                        |
|------------------------|-------------------------------------------------------------------------|--------------|-------------------------------|
| msg                    | 消息文本内容,支持传入HTML                                               | String/VNode | ""                            |
| duration               | 展示时长（秒）<br>值为 0 时，toast 不会自动消失（loading类型默认为0） | Number       | 2                         |
| title                  | 标题                                                                    | String       | ''                            |
| center                 | 是否展示在页面中部（为false时展示在底部）                               | Boolean      | true                          |
| bottom                 | 距页面底部的距离（像素或者百分比），option.center为false时生效          | String       | "30px"                        |
| textAlignCenter      | 多行文案是否居中                                                        | Boolean      | true                          |
| bgColor               | 背景颜色（透明度）                                                      | String       | "rgba(0, 0, 0, 0.8)"          |
| customClass           | 自定义类名                                                              | String       | ""                            |
| icon                   | 自定义图标，**对应icon组件，支持图片链接**                              | String       | ""                            |
| size                   | 文案尺寸，**small**/**base**/**large**三选一                            | String       | "base"                        |
| cover                  | 是否显示遮罩层，loading类型默认显示                                     | Boolean      | loading类型true/其他类型false |
| coverColor            | 遮罩层颜色，默认透明                                                    | String       | "rgba(0,0,0,0)"               |
| loadingRotate         | loading图标是否旋转，仅对loading类型生效                                | Boolean      | true                          |
| onClose               | 关闭时触发的事件                                                        | function     | null                          |
| closeOnClickOverlay | 是否在点击遮罩层后关闭提示                                              | Boolean      | false                         |
| type                   | 弹框类型 可选值（text、success、fail、warn、loading）                   | String       | ""                            |
| visible                   | 弹窗是否显示开关                   | Boolean       | false                            |

