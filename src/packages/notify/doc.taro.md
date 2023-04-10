#  Notify 消息通知

### 介绍

在页面顶部展示消息提示

### 安装
```javascript
import { Notify } from '@nutui/nutui-react-taro';
```

## 代码演示

### 基础用法

:::demo

```tsx
import  React, {useState} from "react";
import { Notify, Cell } from '@nutui/nutui-react-taro';

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
                type={states.type}
                onClose={() => {
                    SetShowNotify(false)
                }}
                onClick={() => {
                    console.log('click')
                }}
            >{states.msg}</Notify>
            <Cell
                title="基础用法"
                onClick={(event: React.MouseEvent) => {
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
import { Notify, Cell } from '@nutui/nutui-react-taro';

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
                type={states.type}
                onClose={() => {
                    SetShowNotify(false)
                }}
            >{states.msg}</Notify>
            <Cell
                title="主要通知"
                onClick={(event: React.MouseEvent) => {
                    changeNotify('主要通知','primary')
                    SetShowNotify(true)
                }}
            />
            <Cell
                title="成功通知"
                onClick={(event: React.MouseEvent) => {
                    changeNotify('成功通知','success')
                    SetShowNotify(true)
                }}
            />
            <Cell
                title="危险通知"
                onClick={(event: React.MouseEvent) => {
                    changeNotify('危险通知','danger')
                    SetShowNotify(true)
                }}
            />
            <Cell
                title="警告通知"
                onClick={(event: React.MouseEvent) => {
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
import { Notify, Cell } from '@nutui/nutui-react-taro';

const App = () => {
    const [customShow, SetCustomShow] = useState(false)
    return (
        <>
            <Notify
                className="customer"
                visible={customShow}
                style={{
                    color: '#ad0000',
                    background: '#ffe1e1',
                }}
                onClose={() => {
                    SetCustomShow(false)
                }}
            >自定义背景色和字体颜色</Notify>
            <Cell
                title="自定义背景色和字体颜色"
                onClick={(event: React.MouseEvent) => {
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
import { Notify, Cell } from '@nutui/nutui-react-taro';

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
                position={states.position}
                onClose={() => {
                    SetShowNotify(false)
                }}
            >{states.msg}</Notify>
            <Cell
                title="自定义时长"
                onClick={(event: React.MouseEvent) => {
                    changeNotify('自定义时长', 5000)
                    SetShowNotify(true)
                }}
            />
            <Cell
                title="自定义位置"
                onClick={(event: React.MouseEvent) => {
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
| visible       | 消息框是否展示 | boolean        | `false` |
| type       | 提示的信息类型（primary，success  ，danger，warning） | string        | `danger` |
| msg    | 展示文案，支持通过\n换行                              | boolean       | `false`    |
| duration   | 展示时长(ms)，值为 0 时，notify 不会消失              | string        | `3000`     |
| position  | 自定义位置 (top, bottom)                | string | `top`        |

### Events

| 事件名 | 说明         | 回调参数 |
|--------|--------------|----------|
| onClick  | 点击事件回调 | 无       |
| onClose | 关闭事件回调 | 无       |


## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 默认值 |
| --- | --- |
| --nutui-notify-text-color | `$white` |
| --nutui-notify-padding | `12px 0` |
| --nutui-notify-font-size | `14px` |
| --nutui-notify-height | `44px` |
| --nutui-notify-line-height | `auto` |
| --nutui-notify-danger-background-color | `rgba(250, 50, 25, 1)` |
