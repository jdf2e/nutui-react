# Notify 消息通知

在页面顶部展示消息提示

## 引入

```tsx
import { Notify } from '@dongdesign/ui';
```

## 示例代码

### 基础用法

```tsx
import React, { useState } from 'react'
import { Notify, Cell } from '@dongdesign/ui'

const Demo1 = () => {
  const [showNotify, setShowNotify] = useState(false)
  const [states, setStates] = useState({
    message: '',
    type: 'danger',
  })
  const changeNotify = (message: string, type?: string) => {
    const change = Object.assign(states, { message, type })
    setStates(change)
  }
  return (
    <>
      <Notify
        visible={showNotify}
        type={states.type as any}
        onClose={() => {
          setShowNotify(false)
        }}
        onClick={() => {
          console.log('click')
        }}
      >
        {states.message}
      </Notify>
      <Cell
        title="基础用法"
        onClick={(event: React.MouseEvent) => {
          changeNotify('基础用法')
          setShowNotify(true)
        }}
      />
    </>
  )
}
export default Demo1

```

### 函数调用
```tsx
import  React, {useState} from "react";
import { Notify, Cell } from '@dongdesign/ui';

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
            <Notify
                id="test"
                visible={showNotify}
                type={states.type}
                onClose={() => {
                    SetShowNotify(false)
                }}
                onClick={() => {
                    console.log('click')
                }}
            >{states.message}</Notify>
            <Cell
                title="函数调用"
                onClick={(event: React.MouseEvent) => {
                  Notify.open('test')
                }}
            />
        </>
    )
}
export default App
```

### 通知类型

```tsx
import React, { useState } from 'react'
import { Cell, Notify } from '@dongdesign/ui'

const Demo2 = () => {
  const [showNotify, setShowNotify] = useState(false)
  const [states, setStates] = useState({
    message: '',
    type: 'danger',
  })
  const changeNotify = (message: string, type: string) => {
    const change = Object.assign(states, { message, type })
    setStates(change)
  }
  return (
    <>
      <Notify
        visible={showNotify}
        type={states.type as any}
        onClose={() => {
          setShowNotify(false)
        }}
      >
        {states.message}
      </Notify>
      <Cell.Group>
        <Cell
          title="主要通知"
          onClick={(event: React.MouseEvent) => {
            changeNotify('主要通知', 'primary')
            setShowNotify(true)
          }}
        />
        <Cell
          title="成功通知"
          onClick={(event: React.MouseEvent) => {
            changeNotify('成功通知', 'success')
            setShowNotify(true)
          }}
        />
        <Cell
          title="危险通知"
          onClick={(event: React.MouseEvent) => {
            changeNotify('危险通知', 'danger')
            setShowNotify(true)
          }}
        />
        <Cell
          title="警告通知"
          onClick={(event: React.MouseEvent) => {
            changeNotify('警告通知', 'warning')
            setShowNotify(true)
          }}
        />
      </Cell.Group>
    </>
  )
}
export default Demo2

```

### 自定义样式

```tsx
import React, { useState } from 'react'
import { Notify, Cell } from '@dongdesign/ui'

const Demo3 = () => {
  const [customShow, SetCustomShow] = useState(false)
  return (
    <>
      <Notify
        className="customer"
        visible={customShow}
        style={{
          '--nutui-notify-text-color': '#ad0000',
          '--nutui-notify-base-background-color': '#ffe1e1',
        }}
        onClose={() => {
          SetCustomShow(false)
        }}
      >
        自定义背景色和字体颜色
      </Notify>
      <Cell
        title="自定义背景色和字体颜色"
        onClick={(event: React.MouseEvent) => {
          SetCustomShow(true)
        }}
      />
    </>
  )
}
export default Demo3

```

### 自定义时长

```tsx
import React, { useState } from 'react'
import { Notify, Cell } from '@dongdesign/ui'
import { harmonyAndRn } from '@dongdesign/ui/dist/utils/platform-taro'

const Demo4 = () => {
  const [showNotify, setShowNotify] = useState(false)
  const [states, setStates] = useState({
    message: '',
    type: 'danger',
    duration: 2000,
    position: 'top',
  })
  const changeNotify = (
    message: string,
    type?: string,
    duration?: number,
    position?: string
  ) => {
    const change = Object.assign(states, {
      message,
      type,
      duration,
      position,
    })
    setStates(change)
  }
  return (
    <>
      <Notify
        visible={showNotify}
        position={states.position as any}
        duration={states.duration}
        onClose={() => {
          setShowNotify(false)
        }}
      >
        {states.message}
      </Notify>
      <Cell
        title="自定义时长"
        onClick={() => {
          changeNotify('自定义时长', 'base', 10000)
          setShowNotify(true)
        }}
      />
      {/* RN和HARMONY不支持bottom */}
      {harmonyAndRn() ? null : (
        <Cell
          title="自定义位置"
          onClick={() => {
            changeNotify('自定义位置', 'base', 2000, 'bottom')
            setShowNotify(true)
          }}
        />
      )}
    </>
  )
}
export default Demo4

```

## Notify

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| visible | 消息框是否展示 | `boolean` | `false` |
| type | 提示的信息类型（primary，success ，danger，warning） | `string` | `danger` |
| duration | 展示时长(ms)，值为 0 时，notify 不会消失 | `string` | `3000` |
| position | 自定义位置 (top, bottom) | `string` | `top` |
| onClick | 点击事件回调 | `onClick: () => void` | `-` |
| onClose | 关闭事件回调 | `onClose: () => void` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/docs/component/common/ConfigProvider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-notify-height | 消息通知的高度 | `40px` |
| \--nutui-notify-padding | 消息通知的内边距 | `0 10px` |
| \--nutui-notify-font-size | 消息通知的字体大小 | `$font-size-base` |
| \--nutui-notify-text-color | 消息通知的文本颜色 | `$white` |
| \--nutui-notify-base-background-color | 消息通知的背景颜色 | `$color-primary` |
| \--nutui-notify-primary-background-color | 主要通知的背景颜色 | `$color-info` |
| \--nutui-notify-success-background-color | 成功通知的背景颜色 | `$color-success` |
| \--nutui-notify-danger-background-color | 危险通知的背景颜色 | `$color-primary` |
| \--nutui-notify-warning-background-color | 警告通知的背景颜色 | `$color-warning` |