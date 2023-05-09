# Notify 消息通知

### 介紹

在頁面頂部展示消息提示

### 安裝

```javascript
import { Notify } from '@nutui/nutui-react';
```

## 代碼演示

### 基礎用法

:::demo

```tsx
import  React, {useState} from "react";
import { Notify, Cell } from '@nutui/nutui-react';

const App = () => {
    const baseNotify = (msg: string) => {
        Notify.text(msg, {
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
            title="基礎用法"
            onClick={(event: React.MouseEvent) => {
                baseNotify('基礎用法')
            }}
            />
        </>
    )
}
export default App
```

:::

### 通知類型

:::demo

```tsx
import  React, {useState} from "react";
import { Notify, Cell } from '@nutui/nutui-react';

const App = () => {
    const primaryNotify = (msg: string) => {
        Notify.primary(msg)
    }
    const successNotify = (msg: string) => {
        Notify.success(msg)
    }
    const errorNotify = (msg: string) => {
        Notify.danger(msg)
    }
    const warningNotify = (msg: string) => {
        Notify.warn(msg)
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
                title="危險通知"
                onClick={(event: React.MouseEvent) => {
                errorNotify('危險通知')
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

### 自定義樣式

:::demo

```tsx
import  React, {useState} from "react";
import { Notify, Cell } from '@nutui/nutui-react';

const App = () => {
    const cusBgNotify = (msg: string) => {
        Notify.text(msg, { style: {
                '--nutui-notify-text-color': '#ad0000',
                '--nutui-notify-base-background-color': '#ffe1e1',
            },
             })
    }
    return (
        <>
            <Cell
                title="自定義背景色和字體顏色"
                onClick={(event: React.MouseEvent) => {
                    cusBgNotify('自定義背景色和字體顏色')
                }}
            />
        </>
    )
}
export default App
```

:::

### 自定義時長

:::demo

```tsx
import  React, {useState} from "react";
import { Notify, Cell } from '@nutui/nutui-react';

const App = () => {
    const timeNotify = (msg: string) => {
        Notify.text(msg, { duration: 1000 })
    }
    const positionNotify = (msg: string) => {
        Notify.text(msg, { position: 'bottom' })
    }
    return (
        <>
             <Cell
                title="自定義時長"
                onClick={(event: React.MouseEvent) => {
                    timeNotify('自定義時長')
                }}
            />
            <Cell
                title="自定義位置"
                onClick={(event: React.MouseEvent) => {
                    positionNotify('自定義位置')
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

| 字段 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| type | 提示的信息類型（primary，success ，danger，warning） | `string` | `danger` |
| duration | 展示時長(ms)，值為 0 時，notify 不會消失 | `string` | `3000` |
| position | 自定義位置 (top, bottom) | `string` | `top` |
| onClick | 點擊事件回調 | `onClick: () => void` | `-` |
| onClose | 關閉事件回調 | `onClose: () => void` | `-` |

## 主題定製

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-notify-height | 消息通知的高度 | `44px` |
| \--nutui-notify-padding | 消息通知的內邊距 | `12px 0` |
| \--nutui-notify-font-size | 消息通知的字體大小 | `14px` |
| \--nutui-notify-line-height | 消息通知的行高 | `auto` |
| \--nutui-notify-text-color | 消息通知的文本顏色 | `$white` |
| \--nutui-notify-base-background-color | 消息通知的背景顏色 | `linear-gradient(135deg, $primary-color 0%, $primary-color-end 100%)` |
| \--nutui-notify-primary-background-color | 主要通知的背景顏色 | `linear-gradient(315deg,rgba(73, 143, 242, 1) 0%,rgba(73, 101, 242,1) 100%)` |
| \--nutui-notify-success-background-color | 成功通知的背景顏色 | `linear-gradient(135deg,rgba(38, 191, 38, 1) 0%,rgba(39, 197, 48, 1) 45%,rgba(40, 207, 63, 1) 83%,rgba(41, 212, 70, 1) 100%)` |
| \--nutui-notify-danger-background-color | 危險通知的背景顏色 | `rgba(250, 50, 25, 1)` |
| \--nutui-notify-warning-background-color | 警告通知的背景顏色 | `linear-gradient(135deg,rgba(255, 93, 13, 1) 0%,rgba(255, 154, 13, 1) 100%)` |