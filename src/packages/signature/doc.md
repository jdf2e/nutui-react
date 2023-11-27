# Signature 签名

## 介绍

基于 Canvas 的签名组件

## 安装

```tsx
import { Signature } from '@nutui/nutui-react'
```

## 代码演示

### 基础用法

:::demo

```tsx
import  React from "react";
import { Signature} from '@nutui/nutui-react';

const App = () => {
    const confirm = (canvas: HTMLCanvasElement, data: string) => {
      const img = document.createElement('img')
      img.src = data
      const demo = document.querySelector('.demo') as HTMLElement
      demo.appendChild(img)
    }
    const clear = () => {
      const img = document.querySelector('.demo img')
      if (img) {
        img.remove()
      }
    }
    const demoStyles: React.CSSProperties = { margin: '1em 0' }
    return (
    <>
        <Signature onConfirm={confirm} onClear={clear} />
        <p className="demo-tips demo" style={demoStyles}>
            Tips: 点击确认按钮,下方显示签名图片
        </p>
    </>
    );
};
export default App;
```

:::

### 修改颜色和签字粗细

:::demo

```tsx
import  React from "react";
import { Signature} from '@nutui/nutui-react';

const App = () => {
    const confirm = (canvas: HTMLCanvasElement, data: string) => {
    const img = document.createElement('img')
    img.src = data
    const demo = document.querySelector('.demo') as HTMLElement
    demo.appendChild(img)
    }
    const clear = () => {
    const img = document.querySelector('.demo img')
    if (img) {
        img.remove()
    }
    }
    const demoStyles: React.CSSProperties = { margin: '1em 0' }
    return (
    <>
        <Signature
            lineWidth={4}
            strokeStyle="green"
            onConfirm={confirm}
            onClear={clear}
         />
        <p className="demo-tips demo" style={demoStyles}>
            Tips: 点击确认按钮,下方显示签名图片
        </p>
    </>
    );
};
export default App;
```

:::

## Signature

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| lineWidth | 线条的宽度 | `number` | `3` |
| strokeStyle | 绘图笔触颜色 | `string` | `#000` |
| type | 图片格式 | `string` | `png` |
| unsupported | 不支持 Canvas 情况下的展示文案 | `ReactNode` | `对不起，当前浏览器不支持 Canvas，无法使用本控件！` |
| onConfirm | 点击确认按钮触发事件回调函数 | `onConfirm: (canvas: HTMLCanvasElement, dataurl: string) => void` | `-` |
| onClear | 点击重签按钮触发事件回调函数 | `onClear: () => void` | `-` |

### Ref

| 属性 | 说明 | 类型 |
| --- | --- | --- |
| confirm | 确认签字 | `() => void` |
| clear | 清除签字 | `() => void` |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-signature-border-height | 签名区域高度 | `10rem` |
| \--nutui-signature-border-color | 签名边框颜色 | `$gray9` |
| \--nutui-signature-border-width | 签名边框宽度 | `1px` |
| \--nutui-signature-background-color | 签名背景颜色 | `$gray6` |
| \--nutui-signature-font-size | 签名文字字号 | `$font-size-base` |