# Toast 吐司

### 介绍

用于轻提示。

### 安装

```javascript
import { Toast } from '@nutui/nutui-react';
```

## 代码演示

### 基础用法

#### 文字提示

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

#### 标题提示

:::demo

```tsx
import  React, {useState} from "react";
import { Toast, Cell } from '@nutui/nutui-react';

const App = () => {
    const titleToast = (msg: string) => {
        Toast.text(msg,{title:'标题提示'})
    }
    return (
        <>
        <Cell
          title="Toast 标题提示"
          isLink
          click={(
            event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
          ) => titleToast('Toast 标题提示')}
        />
        </>
    )
}
export default App
```
:::
#### 成功提示

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


#### 失败提示

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


#### 警告提示

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


#### 加载提示

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



#### 展示时长设置

:::demo

```tsx
import  React, {useState} from "react";
import { Toast, Cell, Button } from '@nutui/nutui-react';

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
            title="Toast 不消失"
            isLink
            click={(
                event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
            ) => {Toast.text('Toast 不消失', { duration: 0 })}}
            />
            <Button
            style={{ margin: 8 }}
            type="primary"
            shape="round"
            onClick={() => {
                Toast.hide()
            }}
            >隐藏Toast</Button>
        </>
    )
}
export default App
```
:::

#### Toast自定义底部高度

:::demo

```tsx
import  React, {useState} from "react";
import { Toast, Cell } from '@nutui/nutui-react';

const App = () => {
    const toastBottom = (msg: string) => {
        Toast.text(msg, {
            center: false,
            bottom: '10%',
        })
    }
    return (
        <Cell
        title='Toast 自定义底部高度'
        isLink
        click={(
            event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
        ) => toastBottom('自定义距离')}
        />
    )
}
export default App
```
:::


#### 加载Loading带透明罩

:::demo

```tsx
import  React, {useState} from "react";
import { Toast, Cell } from '@nutui/nutui-react';

const App = () => {
    const iconToast = (msg: string) => {
        Toast.loading(msg, {
        cover: true, // 是否展示透明遮罩层
        coverColor: 'rgba(0, 0, 0, 0)', // 遮罩颜色设定
        closeOnClickOverlay: true, // 点击遮罩可关闭
        onClose: () => {
            console.log('closeToast')
        },
        })
    }
    return (
        <>
            <Cell
            title="Loading状态透明遮罩"
            isLink
            click={(
                event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
            ) => iconToast('加载状态透明遮罩')}
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
| duration            | 展示时长（秒）<br>值为 0 时，toast 不会自动消失      | Number        | 2       |
| title `v1.3.0`            | 标题      | string        | -            |
| center              | 是否展示在页面中部（为false时展示在底部）                   | Boolean  | true   |
| bottom              | 距页面底部的距离（像素），option.center为false时生效        | Number   | 30     |
| textAlignCenter     | 多行文案是否居中                         | Boolean       | true          |
| bgColor             | 背景颜色（透明度）                                   | String        | "rgba(0, 0, 0, 0.8)"    |
| customClass         | 自定义类名                                            | String        | ""        |
| icon                | 自定义图标，**支持图片链接或base64格式**              | String        | ""           |
| iconSize `v1.3.0`               | 自定义图标尺寸              | String        | 20          |
| size                | 文案尺寸，**small**/**base**/**large**三选一           | String        | "base"         |
| cover               | 是否显示遮罩层                                          | Boolean       | false |
| coverColor          | 遮罩层颜色，默认透明                                   | String        | "rgba(0,0,0,0)"    |
| loadingRotate       | loading图标是否旋转，仅对loading类型生效                   | Boolean       | true          |
| onClose             | 关闭时触发的事件                                      | function      | null            |
| closeOnClickOverlay | 是否在点击遮罩层后关闭提示                         | Boolean       | false     |

