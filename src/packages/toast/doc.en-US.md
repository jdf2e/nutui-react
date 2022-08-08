# Toast 吐司

### 介绍

用于轻提示。

### 安装

```javascript
import { Toast } from '@nutui/nutui-react';
```

## 代码演示

### 基础用法

文字提示

:::demo

```tsx
import  React, {useState} from "react";
import { Toast, Cell } from '@nutui/nutui-react';

const App = () => {
    const textToast = (msg: string) => {
        Toast.text(msg)
    }
    return (
        <>
        <Cell
          title="Text文字提示"
          isLink
          click={(
            event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
          ) => textToast('网络失败，请稍后再试~')}
        />
        </>
    )
}
export default App
```
:::

成功提示

:::demo

```tsx
import  React, {useState} from "react";
import { Toast, Cell } from '@nutui/nutui-react';

const App = () => {
    const successToast = (msg: string) => {
        Toast.success(msg)
    }
    return (
        <>
        <Cell
          title="Success 成功提示"
          isLink
          click={(
            event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
          ) => successToast('成功提示')}
        />
        </>
    )
}
export default App
```
:::


失败提示

:::demo

```tsx
import  React, {useState} from "react";
import { Toast, Cell } from '@nutui/nutui-react';

const App = () => {
    const errorToast = (msg: string) => {
        Toast.fail(msg)
    }
    return (
        <>
        <Cell
          title="Error 失败提示"
          isLink
          click={(
            event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
          ) => errorToast('失败提示')}
        />
        </>
    )
}
export default App
```
:::


警告提示

:::demo

```tsx
import  React, {useState} from "react";
import { Toast, Cell } from '@nutui/nutui-react';

const App = () => {
    const warningToast = (msg: string) => {
        Toast.warn(msg)
    }
    return (
        <>
            <Cell
            title=" Warning 警告提示"
            isLink
            click={(
                event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
            ) => warningToast('警告提示')}
            />
        </>
    )
}
export default App
```
:::


加载提示

:::demo

```tsx
import  React, {useState} from "react";
import { Toast, Cell } from '@nutui/nutui-react';

const App = () => {
    const loadingToast = (msg: string) => {
        Toast.loading(msg)
    }
    return (
        <>
            <Cell
            title=" Loading 加载提示"
            isLink
            click={(
                event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
            ) => loadingToast('加载中')}
            />
        </>
    )
}
export default App
```
:::


展示时长设置

:::demo

```tsx
import  React, {useState} from "react";
import { Toast, Cell } from '@nutui/nutui-react';

const App = () => {
    const duringToast = (msg: string) => {
        Toast.text(msg, { duration: 10 })
    }
    return (
        <>
            <Cell
            title="设置展示时长为10秒提示"
            isLink
            click={(
                event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
            ) => duringToast('设置展示时长为10秒')}
            />
            <Cell
            title="关闭正在显示的toast"
            isLink
            click={(
                event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
            ) => Toast.hide()}
            />
        </>
    )
}
export default App
```
:::


自定义 icon 图标

:::demo

```tsx
import  React, {useState} from "react";
import { Toast, Cell } from '@nutui/nutui-react';

const App = () => {
    const iconToast = (msg: string) => {
        Toast.customIcon(msg, {
        duration: 0, // duration为0则一直展示
        icon: 'JD',
        id: '',
        center: true, // toast是否居中展示
        type: 'text',
        customClass: '', // 自定义样式名
        bottom: 30, // toast不居中时距离底部位置
        size: 'base', // 设置字体大小，默认base,可选large\small\base
        textAlignCenter: true, // 文字是否居中显示,true为居中，false为left
        bgColor: 'rgba(0, 0, 0, .8)',
        cover: true, // 是否展示透明遮罩层
        coverColor: 'rgba(0, 0, 0, 0.4)', // 遮罩颜色设定
        closeOnClickOverlay: true, // 点击遮罩可关闭
        onClose: () => {
            console.log('closeToast')
        },
        })
    }
    return (
        <>
            <Cell
            title="传入icon组件中的'JD'图标"
            isLink
            click={(
                event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
            ) => iconToast('设置icon为JD')}
            />
        </>
    )
}
export default App
```
:::



## API

| 方法名        | 说明                       | 参数            | 返回值     |
| ---------- | ------------------------ | --------------- | ---------- |
| Toast.text                | 展示文字提示    |  message｜ options | toast 实例(message支持传入HTML) |
| Toast.success             | 展示成功提示       | message｜ options| toast 实例 |
| Toast.fail                | 展示失败提示     | message｜ options| toast 实例 |
| Toast.warn                | 展示警告提示        | message｜ options | toast 实例 |
| Toast.hide                | 关闭提示          | force:boolean   | void       |
| Toast.loading             | 展示加载提示       | message｜ options | toast 实例 |

### Props

| 字段                | 说明              | 类型          | 默认值                        |
| ------------------- | -------------- | ------------- | ----------------------------- |
| id                  | 标识符，相同者共用一个实例<br>loading类型默认使用一个实例，其他类型默认不共用 | String/Number | -                             |
| duration            | 展示时长（毫秒）<br>值为 0 时，toast 不会自动消失      | Number        | 2000                          |
| center              | 是否展示在页面中部（为false时展示在底部）                                     | Boolean       | true                          |
| bottom              | 距页面底部的距离（像素），option.center为false时生效                          | Number       | 30                          |
| textAlignCenter     | 多行文案是否居中                                                              | Boolean       | true                          |
| bgColor             | 背景颜色（透明度）                                                            | String        | "rgba(0, 0, 0, 0.8)"       |
| customClass         | 自定义类名                                            | String        | ""                            |
| icon                | 自定义图标，**支持图片链接或base64格式**              | String        | ""                            |
| size                | 文案尺寸，**small**/**base**/**large**三选一                                                  | String        | "base"                        |
| cover               | 是否显示遮罩层                                          | Boolean       | false |
| coverColor          | 遮罩层颜色，默认透明                                                          | String        | "rgba(0,0,0,0)"               |
| loadingRotate       | loading图标是否旋转，仅对loading类型生效                                      | Boolean       | true                          |
| onClose             | 关闭时触发的事件                                                              | function      | null                          |
| closeOnClickOverlay | 是否在点击遮罩层后关闭提示                                                    | Boolean       | false                         |

