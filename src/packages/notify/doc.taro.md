# Notify 消息通知


在页面顶部展示消息提示

## 引入

```tsx
import { Notify } from '@nutui/nutui-react-taro';
```

## 示例代码

### 基础用法

:::demo

<CodeBlock src='taro/demo1.tsx'></CodeBlock>

:::

### 函数调用
```tsx
import  React, {useState} from "react";
import { Notify, Cell } from '@nutui/nutui-react-taro';

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

:::demo

<CodeBlock src='taro/demo2.tsx'></CodeBlock>

:::

### 自定义样式

:::demo

<CodeBlock src='taro/demo3.tsx'></CodeBlock>

:::

### 自定义时长

:::demo

<CodeBlock src='taro/demo4.tsx'></CodeBlock>

:::

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

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

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