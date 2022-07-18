# Signature 签名

### 介绍

基于 Canvas 的签名组件

### 安装

```javascript
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
        <Signature confirm={confirm} clear={clear} />
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
            confirm={confirm}
            clear={clear}
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

## API

### Props

| 参数           | 说明                           | 类型   | 默认值                                              |
| -------------- | ------------------------------ | ------ | --------------------------------------------------- |
| custom-class   | 自定义 class                   | String | -                                                   |
| line-width     | 线条的宽度                     | Number | 3                                                   |
| stroke-style   | 绘图笔触颜色                   | String | '#000'                                              |
| type           | 图片格式                       | String | 'png'                                               |
| un-support-tpl | 不支持 Canvas 情况下的展示文案 | String | '对不起，当前浏览器不支持 Canvas，无法使用本控件！' |

## Event

| 字段    | 说明                         | 回调参数                         |
| ------- | ---------------------------- | -------------------------------- |
| confirm | 点击确认按钮触发事件回调函数 | canvas 和签名图片展示的 data URI |
| clear   | 点击重签按钮触发事件回调函数 | 无                               |
