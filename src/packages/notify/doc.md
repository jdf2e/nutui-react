# Notify 消息通知

## 介绍

在页面顶部展示消息提示

## 安装

```tsx
import { Notify } from '@nutui/nutui-react';
```

## 代码演示

### 基础用法

:::demo

```tsx
import  React, {useState} from "react";
import { Notify, Cell } from '@nutui/nutui-react';

const App = () => {
    const baseNotify = (message: string) => {
        Notify.text(message, {
        onClose: () => {
            console.log('close')
        },
        onClick: () => {
            console.log('click')
        },
        })
    }
    return (
        <>
            <Cell
            title="基础用法"
            onClick={(event: React.MouseEvent) => {
                baseNotify('基础用法')
            }}
            />
        </>
    )
}
export default App
```

:::

### 通知类型

:::demo

```tsx
import  React, {useState} from "react";
import { Notify, Cell } from '@nutui/nutui-react';

const App = () => {
    const primaryNotify = (message: string) => {
        Notify.primary(message)
    }
    const successNotify = (message: string) => {
        Notify.success(message)
    }
    const errorNotify = (message: string) => {
        Notify.danger(message)
    }
    const warningNotify = (message: string) => {
        Notify.warn(message)
    }
    return (
        <>
            <Cell
                title="主要通知"
                onClick={(event: React.MouseEvent) => {
                primaryNotify('主要通知')
                }}
            />
            <Cell
                title="成功通知"
                onClick={(event: React.MouseEvent) => {
                successNotify('成功通知')
                }}
            />
            <Cell
                title="危险通知"
                onClick={(event: React.MouseEvent) => {
                errorNotify('危险通知')
                }}
            />
            <Cell
                title="警告通知"
                onClick={(event: React.MouseEvent) => {
                warningNotify('警告通知')
                }}
            />
        </>
    )
}
export default App
```

:::

### 自定义样式

:::demo

```tsx
import  React, {useState} from "react";
import { Notify, Cell } from '@nutui/nutui-react';

const App = () => {
    const cusBgNotify = (message: string) => {
        Notify.text(message, { style: {
                '--nutui-notify-text-color': '#ad0000',
                '--nutui-notify-base-background-color': '#ffe1e1',
            },
             })
    }
    return (
        <>
            <Cell
                title="自定义背景色和字体颜色"
                onClick={(event: React.MouseEvent) => {
                    cusBgNotify('自定义背景色和字体颜色')
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
    const timeNotify = (message: string) => {
        Notify.text(message, { duration: 1000 })
    }
    const positionNotify = (message: string) => {
        Notify.text(message, { position: 'bottom' })
    }
    return (
        <>
             <Cell
                title="自定义时长"
                onClick={(event: React.MouseEvent) => {
                    timeNotify('自定义时长')
                }}
            />
            <Cell
                title="自定义位置"
                onClick={(event: React.MouseEvent) => {
                    positionNotify('自定义位置')
                }}
            />
        </>
    )
}
export default App
```

:::

## Notify

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
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
| \--nutui-notify-height | 消息通知的高度 | `44px` |
| \--nutui-notify-padding | 消息通知的内边距 | `12px 0` |
| \--nutui-notify-font-size | 消息通知的字体大小 | `14px` |
| \--nutui-notify-line-height | 消息通知的行高 | `auto` |
| \--nutui-notify-text-color | 消息通知的文本颜色 | `$white` |
| \--nutui-notify-base-background-color | 消息通知的背景颜色 | `linear-gradient(135deg, $color-primary 0%, $color-primary-stop-2 100%)` |
| \--nutui-notify-primary-background-color | 主要通知的背景颜色 | `linear-gradient(315deg,rgba(73, 143, 242, 1) 0%,rgba(73, 101, 242,1) 100%)` |
| \--nutui-notify-success-background-color | 成功通知的背景颜色 | `linear-gradient(135deg,rgba(38, 191, 38, 1) 0%,rgba(39, 197, 48, 1) 45%,rgba(40, 207, 63, 1) 83%,rgba(41, 212, 70, 1) 100%)` |
| \--nutui-notify-danger-background-color | 危险通知的背景颜色 | `rgba(250, 50, 25, 1)` |
| \--nutui-notify-warning-background-color | 警告通知的背景颜色 | `linear-gradient(135deg,rgba(255, 93, 13, 1) 0%,rgba(255, 154, 13, 1) 100%)` |