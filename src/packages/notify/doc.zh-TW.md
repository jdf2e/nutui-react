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
    const baseNotify = (msg: string) => {
        Notify.text(msg, {
        onClosed: () => {
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

## 通知类型

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



## 自定义
### 自定义样式

:::demo

```tsx
import  React, {useState} from "react";
import { Notify, Cell } from '@nutui/nutui-react';

const App = () => {
    const cusBgNotify = (msg: string) => {
        Notify.text(msg, { color: '#ad0000', background: '#ffe1e1' })
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
    const timeNotify = (msg: string) => {
        Notify.text(msg, { duration: 1000 })
    }
    const positionNotify = (msg: string) => {
        Notify.text(msg, { position: 'bottom' })
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




## API
    
### Props
    
| 字段       | 说明                                                  | 类型          | 默认值   |
|------------|-------------------------------------------------------|---------------|----------|
| type       | 提示的信息类型（primary，success  ，danger，warning） | string        | `danger` |
| message    | 展示文案，支持通过\n换行                              | boolean       | `false`    |
| duration   | 展示时长(ms)，值为 0 时，notify 不会消失              | string        | `3000`     |
| color      | 字体颜色                                              | string        | -       |
| background | 背景颜色                                              | string        | -       |
| className | 自定义类名                                            | string \| number | `1`        |
| position  | 自定义位置 (top, bottom)                                         | string | `top`        |

### Events

| 事件名 | 说明         | 回调参数 |
|--------|--------------|----------|
| onClick  | 点击事件回调 | 无       |
| onClosed | 关闭事件回调 | 无       |


## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 默認值 |
| --- | --- |
| --nutui-notify-text-color | `$white` |
| --nutui-notify-padding | `12px 0` |
| --nutui-notify-font-size | `14px` |
| --nutui-notify-height | `44px` |
| --nutui-notify-line-height | `auto` |
| --nutui-notify-danger-background-color | `rgba(250, 50, 25, 1)` |
