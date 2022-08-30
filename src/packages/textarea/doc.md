# TextArea 文本域

### 介绍

文本框内输入或编辑文字，支持限制输入数量。

### 安装

```javascript

import { TextArea } from '@nutui/nutui-react';

```

## 代码演示

### 基础用法

:::demo

```tsx
import  React, {useState} from "react";
import { TextArea } from '@nutui/nutui-react';

const App = () => {
    const [value1, updateValue1] = useState('')
    const change = (value: any, event: Event) => {
        updateValue1(value)
    }
    return (
        <>
           <TextArea
            defaultValue={value1}
            className="text-1"
            style={{ fontSize: '12px' }}
            onChange={(value, event) => {
                change(value, event)
            }}
            onBlur={() => {
                console.log('blur')
            }}
            onFocus={() => {
                console.log('focus')
            }}
            />
        </>
    )
};
export default App
```
:::

### 显示字数统计

:::demo

```tsx
import  React, {useState} from "react";
import { TextArea } from '@nutui/nutui-react';

const App = () => {
    const [value2, updateValue2] = useState('')
    return (
        <>
            <TextArea defaultValue={value2} limitShow maxlength="20" />
        </>
    )
};
export default App
```
:::

### 高度自定义，拉伸

:::demo

```tsx
import  React, {useState} from "react";
import { TextArea } from '@nutui/nutui-react';

const App = () => {
    const [value3, updateValue3] = useState('')
    return (
        <>
            <TextArea defaultValue={value3} rows="1" autosize />
        </>
    )
};
export default App
```
:::

### 只读、禁用

:::demo

```tsx
import  React, {useState} from "react";
import { TextArea } from '@nutui/nutui-react';

const App = () => {
    return (
        <>
            <TextArea readonly defaultValue="textarea只读状态" />
            <TextArea disabled defaultValue="textarea禁用状态" limitShow maxlength="20" />
        </>
    )
};
export default App
```
:::

### 文本位置

:::demo

```tsx
import  React, {useState} from "react";
import { TextArea } from '@nutui/nutui-react';

const App = () => {
    return (
        <>
            <TextArea defaultValue="文本居右" textAlign="right" />
        </>
    )
};
export default App
```
:::

## API

### Props

| 参数         | 说明                                              | 类型           | 默认值         |
| ------------ | ------------------------------------------------- | -------------- | -------------- |
| defaultValue | 初始默认值，支持双向绑定                          | String         | -              |
| placeholder  | 设置占位提示文字                                  | String         | `'请输入内容'` |
| maxlength    | 限制最长输入字符                                  | String、Number | -              |
| rows         | textarea 的高度                                   | String、Number | `2`            |
| limitShow    | textarea 是否展示输入字符。须配合`max-length`使用 | Boolean        | `false`        |
| autosize     | 高度是否可拉伸                                    | Boolean        | `false`        |
| textAlign    | 文本位置,可选值`left`,`center`,`right`            | String         | `left`         |
| readonly     | 只读属性                                          | Boolean        | `false`        |
| disabled     | 禁用属性                                          | Boolean        | `false`        |

### Events

| 名称                 | 说明           | 回调参数 |
|--------------------| -------------- | -------- |
| change`v1.2.0（废弃）` | 输入内容时触发 | val      |
| focus`v1.2.0（废弃）`             | 聚焦时触发     | val      |
| blur`v1.2.0（废弃）`             | 失焦时触发     | val      |
| onChange           | 输入内容时触发 | val      |
| onFocus            | 聚焦时触发     | val      |
| onBlur             | 失焦时触发     | val      |
