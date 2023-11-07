# Dialog 对话框

## 介绍

模态对话框，在浮层中显示，引导用户进行相关操作，常用于消息提示、消息确认，或在当前页面内完成特定的交互操作。

弹出框组件支持函数调用和组件调用两种方式。

## 安装

```tsx
import { Dialog } from '@nutui/nutui-react'
```

## 代码演示

### 函数式调用

:::demo

```tsx
import React from "react";
import { Cell,Dialog } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Cell title="基础弹框" onClick={() => {
          Dialog.alert({
            className: 'dialog-func',
            title: '基础弹框',
            content: '支持函数调用和组件调用两种方式。',
          });
        }} />
      <Cell title="无标题弹框、不锁背景滚动" onClick={() => {
          Dialog.alert({
            content: '无标题弹框',
            confirmText: '确认',
            cancelText: '取消',
            lockScroll: false
          });
        }} 
      />
      <Cell title="提示弹框" onClick={() => {
          Dialog.alert({
              title: '提示',
              content: '支持函数调用和组件调用两种方式。',
              hideCancelButton: true,
              confirmText: '确认'
          });
        }} 
      />
      <Cell title="底部按钮 垂直布局 使用" onClick={() => {
          Dialog.alert({
            title: '提示',
            content: '支持函数调用和组件调用两种方式。',
            footerDirection: 'vertical',
            confirmText: '确认',
            cancelText: '取消',
          });
        }} 
      />
      <Cell title="打开弹框 3s 后调用关闭方法" onClick={() => {
          const dialog = Dialog.confirm({
            content: '打开弹框 3s 后调用关闭方法',
            confirmText: '确认',
            cancelText: '取消',
          });
          setTimeout(() => {
            dialog.close()
          }, 3000);
        }} 
      />
      <Cell title="打开弹框 3s 后调用关闭方法" onClick={() => {
          const dialog = Dialog.confirm({
            content: '打开弹框 3s 后调用关闭方法',
          });
          setTimeout(() => {
            dialog.update({
              content: '打开弹框 3s 后调用关闭方法 我是更新',
            })
          }, 3000);
        }} 
      />
    </>
  )
}
export default App;
```

:::

### 标签式使用

:::demo

```tsx
import React, {useState} from "react";
import { Cell,Dialog } from '@nutui/nutui-react';

const App = () => {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  return (
    <>
    <Cell title="基础弹框" onClick={() => setVisible1(true)} />
    <Dialog 
      title="标签式使用"
      visible={visible1}
      onConfirm={() => setVisible1(false)}
      onCancel={() => setVisible1(false)}
    >
      如果需要在弹窗内嵌入组件或其他自定义内容，可以使用组件调用的方式。
    </Dialog>
    <Cell title="底部按钮 垂直布局 使用" onClick={() => setVisible2(true)} />
    <Dialog 
      title="标签式使用"
      visible={visible2}
      footerDirection='vertical'
      onConfirm={() => setVisible2(false)}
      onCancel={() => setVisible2(false)}
    >
      如果需要在弹窗内嵌入组件或其他自定义内容，可以使用组件调用的方式。
    </Dialog>
    <Cell title="底部 Footer 为 Button 时，点击遮罩不关闭" onClick={() => setVisible2(true)} />
    <Dialog 
      title="底部 Footer 为 Button 时，点击遮罩不关闭"
      visible={visible2}
      lockScroll={false}
      footerDirection='vertical'
      closeOnOverlayClick={false}
      onConfirm={() => setVisible2(false)}
      onCancel={() => setVisible2(false)}
    >
      如果需要在弹窗内嵌入组件或其他自定义内容，可以使用组件调用的方式。
    </Dialog>
    <Cell title="无底部 Footer 区域" onClick={() => setVisible2(true)} />
    <Dialog 
      title="无底部 Footer 区域"
      visible={visible2}
      footer={null}
      onClose={() => {
        setVisible2(false)
      }}
    >
      如果需要在弹窗内嵌入组件或其他自定义内容，可以使用组件调用的方式。
    </Dialog>
    <Cell title="点击取消时，拦截" onClick={() => setVisible3(true)} />
    <Dialog 
      title="点击取消时，拦截"
      visible={visible3}
      closeOnOverlayClick={false}
      beforeCancel={() => {
        console.log('stop close')
        return false
      }}
      onClose={() => {
        setVisible3(false)
      }}
    >
      如果需要在弹窗内嵌入组件或其他自定义内容，可以使用组件调用的方式。
    </Dialog>
    </>
  )
}
export default App;
```

:::

## Dialog

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| visible | 对话框是否可见 | `boolean` | `-` |
| title | 标题 | `ReactNode` | `-` |
| content | 对话框的内容，适用于函数式调用 | `ReactNode` | `-` |
| footer | 自定义页脚，传入 null 则不显示 | `ReactNode` | `-` |
| confirmText | 确认按钮文案 | `ReactNode` | `确定` |
| cancelText | 取消按钮文案 | `ReactNode` | `取消` |
| overlay | 是否展示遮罩 | `boolean` | `true` |
| hideConfirmButton | 是否隐藏确定按钮 | `boolean` | `false` |
| hideCancelButton | 是否隐藏取消按钮 | `boolean` | `false` |
| disableConfirmButton | 禁用确定按钮 | `boolean` | `false` |
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
  const [captcha, setCaptcha] = useState<string>("");
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
      )
    });
  };
  return (
    <div>
      <Button onClick={showCaptcha}>Show</Button>
    </div>
  );
}
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-dialog-width | 对话框宽度 | `296px` |
| \--nutui-dialog-header-font-weight | 对话框标题字重 | `normal` |
| \--nutui-dialog-header-color | 对话框标题字色 | `rgba(38, 38, 38, 1)` |
| \--nutui-dialog-footer-justify-content | 对话框底部按钮排布 | `space-around` |
| \--nutui-dialog-min-height | 对话框最小高度 | `156px` |
| \--nutui-dialog-padding | 对话框padding | `28px 24px 16px 24px` |
| \--nutui-dialog-header-height | 对话框标题高度 | `20px` |
| \--nutui-dialog-content-margin | 对话框内容 margin | `20px 0` |
| \--nutui-dialog-content-max-height | 对话框内容最大高度 | `268px` |
| \--nutui-dialog-content-line-height | 对话框内容行高 | `16px` |
| \--nutui-dialog-overlay-background-color | 对话框蒙层背景色 | `$mask-color` |
| \--nutui-dialog-outer-z-index | 对话框的z-index | `$mask-content-z-index` |
| \--nutui-dialog-outer-border-radius | 对话框圆角 | `20px` |
| \--nutui-dialog-vertical-footer-ok-margin-top | 对话框底部按钮纵向排布时的margin值 | `10px` |
| \--nutui-dialog-footer-button-min-width | 对话框底部按钮最小宽度 | `100px` |
| \--nutui-dialog-footer-cancel-margin-right | 对话框取消按钮的margin-right | `20px` |
| \--nutui-dialog-footer-ok-max-width | 对话框确认按钮的最大宽度 | `128px` |