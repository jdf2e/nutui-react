# Dialog 对话框

模态对话框，在浮层中显示，引导用户进行相关操作，常用于消息提示、消息确认，或在当前页面内完成特定的交互操作。

弹出框组件支持函数调用和组件调用两种方式。

## 引入

```tsx
import { Dialog } from '@nutui/nutui-react'
```

## 示例代码

### 函数式调用

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

## 以下为标签式使用

### 基础用法

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### footer区域定制

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 点击取消时，拦截

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 确认按钮loading效果

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### 带关闭按钮

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### 自定义内容区域

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### 顶部带插图

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

## Dialog

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| visible | 对话框是否可见 | `boolean` | `-` |
| header | 自定义页头，传入 null 则不显示 | `ReactNode` | `-` |
| title | 标题 | `ReactNode` | `-` |
| content | 对话框的内容，适用于函数式调用 | `ReactNode` | `-` |
| footer | 自定义页脚，传入 null 则不显示 | `ReactNode` | `-` |
| confirmText | 确认按钮文案 | `ReactNode` | `确定` |
| cancelText | 取消按钮文案 | `ReactNode` | `取消` |
| overlay | 是否展示遮罩 | `boolean` | `true` |
| hideConfirmButton | 是否隐藏确定按钮 | `boolean` | `false` |
| hideCancelButton | 是否隐藏取消按钮 | `boolean` | `false` |
| disableConfirmButton | 禁用确定按钮 | `boolean` | `false` |
| closeIcon | 关闭按钮 | `boolean` \| `ReactNode` | `false` |
| closeIconPosition | 关闭按钮位置 | `top-left` \| `top-right` \| `bottom` | `top-right` |
| closeOnOverlayClick | 点击蒙层是否关闭对话框 | `boolean` | `true` |
| footerDirection | 使用横纵方向 可选值 horizontal、vertical | `string` | `horizontal` |
| lockScroll | 背景是否锁定 | `boolean` | `true` |
| beforeCancel | 取消前回调，点击取消时触发 | `() => boolean` | `-` |
| beforeClose | 关闭前回调 | `() => boolean` | `-` |
| onConfirm | 确定按钮回调 | `(e?: MouseEvent) => Promise \| void` | `-` |
| onCancel | 取消按钮回调 | `() => void` | `-` |
| onClose | 关闭回调，任何情况关闭弹窗都会触发 | `() => void` | `-` |
| onClick | 点击自身回调 | `() => void` | `-` |
| onOverlayClick | 点击蒙层触发 | `() => void` | `-` |

对于**指令式**创建出来的 Dialog，**并不会感知父组件的重渲染和其中 state 的更新**，因此下面这种写法是错误的：

```tsx
import React from 'react'
import { Dialog, Input, Button } from '@nutui/nutui-react'

export default function App() {
  const [captcha, setCaptcha] = useState<string>('')
  const showCaptcha = () => {
    return Dialog.confirm({
      content: (
        <Input
          placeholder="请输入验证码"
          value={captcha} // App 中 captcha 的更新是不会传递到 Dialog 中的
          onChange={(v) => {
            setCaptcha(v)
          }}
        />
      ),
    })
  }
  return (
    <div>
      <Button onClick={showCaptcha}>Show</Button>
    </div>
  )
}
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-dialog-z-index | 对话框的z-index | `$mask-content-z-index` |
| \--nutui-dialog-width | 对话框宽度 | `295px` |
| \--nutui-dialog-padding | 对话框padding | `24px` |
| \--nutui-dialog-min-height | 对话框最小高度 | `156px` |
| \--nutui-dialog-border-radius | 对话框圆角 | `16px` |
| \--nutui-dialog-content-margin | 对话框内容 margin | `5px 0 24px 0` |
| \--nutui-dialog-content-max-height | 对话框内容最大高度 | `268px` |
| \--nutui-dialog-content-line-height | 对话框内容行高 | `20px` |
| \--nutui-dialog-content-text-align | 对话框内容文本对齐方式 | `left` |
| \--nutui-dialog-header-font-size | 对话框标题字体大小 | `$font-size-large` |
| \--nutui-dialog-header-font-weight | 对话框标题字重 | `normal` |
| \--nutui-dialog-footer-justify-content | 对话框底部按钮排布 | `space-around` |
| \--nutui-dialog-footer-button-min-width | 对话框底部按钮最小宽度 | `117px` |
| \--nutui-dialog-footer-cancel-margin-right | 对话框取消按钮的margin-right | `12px` |
| \--nutui-dialog-footer-ok-max-width | 对话框确认按钮的最大宽度 | `128px` |
| \--nutui-dialog-vertical-footer-ok-margin-top | 对话框底部按钮纵向排布时的margin值 | `5px` |
| \--nutui-dialog-close-width | 对话框关闭按钮的宽度 | `18px` |
| \--nutui-dialog-close-height | 对话框关闭按钮的高度 | `18px` |
| \--nutui-dialog-close-color | 对话框关闭按钮的颜色 | `#8c8c8c` |
| \--nutui-dialog-close-top | 对话框关闭按钮的top值 | `16px` |
| \--nutui-dialog-close-left | 对话框关闭按钮的left值 | `16px` |
| \--nutui-dialog-close-right | 对话框关闭按钮的right值 | `16px` |
