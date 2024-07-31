---
sidebar_class_name: hasIcon
---

# Signature 签名

:::info 兼容性
仅支持H5及小程序，JDRN、鸿蒙端待支持
:::

基于 Canvas 的签名组件

## 引入

```tsx
import { Signature } from '@dongdesign/ui'
```

## 示例代码

### 基础用法

```tsx
import React, { useRef } from 'react'
import { Signature, Button } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'

const Demo1 = () => {
  const confirm = (dataurl: string, isSigned?: boolean) => {
    if (isSigned) {
      console.log('图片地址', dataurl)
    } else {
      console.log('抱歉，没有签名哦~')
    }
  }
  const clear = () => {
    console.log('清除事件')
  }
  const signatureRef = useRef<any>(null)
  return (
    <>
      <Signature onConfirm={confirm} onClear={clear} ref={signatureRef} />
      <View className="demo-btn">
        <Button
          type="default"
          size="small"
          style={{ margin: 8 }}
          onClick={() => {
            signatureRef.current?.clear()
          }}
        >
          重签
        </Button>
        <Button
          type="primary"
          size="small"
          onClick={() => {
            signatureRef.current?.confirm()
          }}
        >
          确认
        </Button>
      </View>
      <p className="demo-tips demo1">Tips: 点击确认按钮,下方显示签名图片</p>
    </>
  )
}
export default Demo1
```

### 修改颜色和签字粗细

```tsx
import React, { useRef } from 'react'
import { Signature, Button } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'

const Demo2 = () => {
  const confirm = (dataurl: string) => {
    console.log('图片地址', dataurl)
  }
  const clear = () => {
    console.log('清除事件')
  }
  const signatureRef1 = useRef<any>(null)
  return (
    <>
      <Signature
        lineWidth={4}
        strokeStyle="green"
        onConfirm={confirm}
        onClear={clear}
        canvasId="testCanvas"
        ref={signatureRef1}
      />
      <View className="demo-btn">
        <Button
          size="small"
          style={{ margin: 8 }}
          onClick={() => {
            signatureRef1.current?.clear()
          }}
        >
          重签
        </Button>
        <Button
          type="primary"
          size="small"
          onClick={() => {
            signatureRef1.current?.confirm()
          }}
        >
          确认
        </Button>
      </View>
      <p className="demo-tips demo2">Tips: 点击确认按钮,下方显示签名图片</p>
    </>
  )
}
export default Demo2
```

## Signature

### Props

| 属性 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| lineWidth | 线条的宽度 | `number` | `3` |
| strokeStyle | 绘图笔触颜色 | `string` | `#000` |
| type | 图片格式 | `string` | `png` |
| unsupported | 不支持 Canvas 情况下的展示文案 | `ReactNode` | `对不起，当前浏览器不支持 Canvas，无法使用本控件！` |
| onConfirm | 点击确认按钮触发事件回调函数 | `onConfirm: (dataurl: string, isSigned?: boolean) => void` | `-` |
| onClear | 点击重签按钮触发事件回调函数 | `onClear: () => void` | `-` |

### Ref

| 属性 | 说明 | 类型 |
| :--- | :--- | :--- |
| confirm | 确认签字 | `() => void` |
| clear | 清除签字 | `() => void` |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| :--- | :--- | :--- |
| \--nutui-signature-border-height | 签名区域高度 | `10rem` |
| \--nutui-signature-border-color | 签名边框颜色 | `$color-border` |
| \--nutui-signature-border-width | 签名边框宽度 | `1px` |
| \--nutui-signature-background-color | 签名背景颜色 | `$white` |
| \--nutui-signature-font-size | 签名文字字号 | `$font-size-base` |
