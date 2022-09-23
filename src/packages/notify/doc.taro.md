#  Notify 消息通知

### 介绍

在页面顶部展示消息提示

### 安装
```javascript
import { Notify } from '@nutui/nutui-react';
```

## 代码演示

### 基础用法

:::demo

```tsx
import  React, {useState} from "react";
import { Notify, Cell } from '@nutui/nutui-react';

const App = () => {
    const [showNotify, SetShowNotify] = useState(false)
    const [states, SetStates] = useState({
        msg: '',
        type: 'danger',
    })
    const changeNotify = (msg: string, type?: string) => {
        const change = Object.assign(states, {msg,type})
        SetStates(change)
    }
    return (
        <>
            <Notify
                visible={showNotify}
                msg={states.msg}
                type={states.type}
                onClosed={() => {
                    SetShowNotify(false)
                }}
                onClick={() => {
                    console.log('click')
                }}
            />
            <Cell
                title="基础用法"
                click={(event: React.MouseEvent) => {
                    changeNotify(translated.basic)
                    SetShowNotify(true)
                }}
            />
        </>
    )
}
export default App
```
:::

## 通知类型

:::demo

```tsx
import  React, {useState} from "react";
import { Notify, Cell } from '@nutui/nutui-react';

const App = () => {
    const [showNotify, SetShowNotify] = useState(false)
    const [states, SetStates] = useState({
        msg: '',
        type: 'danger',
    })
    const changeNotify = (msg: string, type: string) => {
        const change = Object.assign(states, {msg,type})
        SetStates(change)
    }
    return (
        <>
            <Notify
                visible={showNotify}
                msg={states.msg}
                type={states.type}
                onClosed={() => {
                    SetShowNotify(false)
                }}
            />
            <Cell
                title="主要通知"
                click={(event: React.MouseEvent) => {
                    changeNotify('主要通知','primary')
                    SetShowNotify(true)
                }}
            />
            <Cell
                title="成功通知"
                click={(event: React.MouseEvent) => {
                    changeNotify('成功通知','success')
                    SetShowNotify(true)
                }}
            />
            <Cell
                title="危险通知"
                click={(event: React.MouseEvent) => {
                    changeNotify('危险通知','danger')
                    SetShowNotify(true)
                }}
            />
            <Cell
                title="警告通知"
                click={(event: React.MouseEvent) => {
                    changeNotify('警告通知','warning')
                    SetShowNotify(true)
                }}
            />
        </>
    )
}
export default App
```
:::



## 自定义
### 自定义样式

:::demo

```tsx
import  React, {useState} from "react";
import { Notify, Cell } from '@nutui/nutui-react';

const App = () => {
    const [customShow, SetCustomShow] = useState(false)
    return (
        <>
            <Notify
                className="customer"
                visible={customShow}
                msg="自定义背景色和字体颜色"
                color="#ad0000"
                background="#ffe1e1"
                onClosed={() => {
                    SetCustomShow(false)
                }}
            />
            <Cell
                title="自定义背景色和字体颜色"
                click={(event: React.MouseEvent) => {
                    SetCustomShow(true)
                }}
            />
        </>
    )
}
export default App
```
:::



### 自定义时长

:::demo

```tsx
import  React, {useState} from "react";
import { Notify, Cell } from '@nutui/nutui-react';

const App = () => {
    const [showNotify, SetShowNotify] = useState(false)
    const [states, SetStates] = useState({
        msg: '',
        duration:3000,
        position:'top'
    })
    const changeNotify = (msg: string, duration?: string,position?:string) => {
        const change = Object.assign(states, {msg,duration,position})
        SetStates(change)
    }
    return (
        <>
            <Notify
                visible={showNotify}
                msg={states.msg}
                position={states.position}
                onClosed={() => {
                    SetShowNotify(false)
                }}
            />
            <Cell
                title="自定义时长"
                click={(event: React.MouseEvent) => {
                    changeNotify('自定义时长', 5000)
                    SetShowNotify(true)
                }}
            />
            <Cell
                title="自定义位置"
                click={(event: React.MouseEvent) => {
                    changeNotify('自定义位置在底部', 5000,  'bottom')
                    SetShowNotify(true)
                }}
            />
        </>
    )
}
export default App
```
:::




## API
    
### Props
    
| 字段       | 说明                                                  | 类型          | 默认值   |
|------------|-------------------------------------------------------|---------------|----------|
| visible       | 消息框是否展示 | Boolean        | false |
| type       | 提示的信息类型（primary，success  ，danger，warning） | String        | 'danger' |
| msg    | 展示文案，支持通过\n换行                              | Boolean       | false    |
| duration   | 展示时长(ms)，值为 0 时，notify 不会消失              | String        | 3000     |
| color      | 字体颜色                                              | String        | 空       |
| background | 背景颜色                                              | String        | 空       |
| className | 自定义类名                                            | String/Number | 1        |
| position `v1.3.0` | 自定义位置 (top, bottom)                | String | 'top'        |

### Events

| 事件名 | 说明         | 回调参数 |
|--------|--------------|----------|
| onClick  | 点击事件回调 | 无       |
| onClosed | 关闭事件回调 | 无       |
