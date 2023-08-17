# Dialog 對話框

## 介紹

模態對話框，在浮層中顯示，引導用戶進行相關操作，常用於消息提示、消息確認，或在當前頁面內完成特定的交互操作。 彈出框組件支持函數調用和組件調用兩種方式。

## 安裝

```tsx
import { Dialog } from '@nutui/nutui-react'
```

## 代碼演示

### 函數式調用

:::demo

```tsx
import React from "react";
import { Cell,Dialog } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Cell title="基礎彈框" onClick={() => {
        Dialog.alert({
            title: '基礎彈框',
            content: '支持函數調用和組件調用兩種方式。',
        });
        }} />
      <Cell title="無標題彈框" onClick={() => {
            Dialog.alert({
            content: '無標題彈框',
            confirmText: '確認',
            cancelText: '取消',
            lockScroll: false
        });
        }} />
      <Cell title="提示彈框" onClick={() => {
        Dialog.alert({
            title: '溫馨提示',
            content: '支持函數調用和組件調用兩種方式。',
            hideCancelButton: true,
            confirmText: '確認'
        });
        }} />
      <Cell title="底部按鈕 垂直調用" onClick={() => {
        Dialog.alert({
            title: '溫馨提示',
            content: '支持函數調用和組件調用兩種方式。',
            footerDirection: 'vertical',
            confirmText: '確認',
            cancelText: '取消',
        });
        }} 
      />
      <Cell title="打开弹框 3s 后调用关闭方法" onClick={() => {
          const dialog = Dialog.confirm({
            content: '打开弹框 3s 后调用关闭方法',
            confirmText: '確認',
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
  return (
    <>
    <Cell title="基礎彈框" onClick={() => setVisible1(true)} />
    <Dialog 
        title="标签式使用"
        visible={visible1}
        onConfirm={() => setVisible1(false)}
        onCancel={() => setVisible1(false)}
    >
        如果需要在彈窗內嵌入組件或其他自定義內容，可以使用組件調用的方式。
    </Dialog>
    <Cell title="底部按鈕 垂直調用" onClick={() => setVisible2(true)} />
    <Dialog 
        title="标签式使用"
        visible={visible2}
        footerDirection='vertical'
        onConfirm={() => setVisible2(false)}
        onCancel={() => setVisible2(false)}
    >
        如果需要在彈窗內嵌入組件或其他自定義內容，可以使用組件調用的方式。
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
      如果需要在彈窗內嵌入組件或其他自定義內容，可以使用組件調用的方式。
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
      如果需要在彈窗內嵌入組件或其他自定義內容，可以使用組件調用的方式。
    </Dialog>
    </>
  )
}
export default App;
```

:::

## Dialog

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| visible | 對話框是否可見 | `boolean` | `-` |
| title | 標題 | `ReactNode` | `-` |
| content | 對話框的內容，適用於函數式調用 | `ReactNode` | `-` |
| footer | 自定義頁腳，傳入 null 則不顯示 | `ReactNode` | `-` |
| confirmText | 確認按鈕文案 | `ReactNode` | `確定` |
| cancelText | 取消按鈕文案 | `ReactNode` | `取消` |
| overlay | 是否展示遮罩 | `boolean` | `true` |
| hideConfirmButton | 是否隱藏確定按鈕 | `boolean` | `false` |
| hideCancelButton | 是否隱藏取消按鈕 | `boolean` | `false` |
| disableConfirmButton | 禁用確定按鈕 | `boolean` | `false` |
| closeOnOverlayClick | 點擊蒙層是否關閉對話框 | `boolean` | `true` |
| footerDirection | 使用橫縱方向 可選值 horizontal、vertical | `string` | `horizontal` |
| lockScroll | 背景是否鎖定 | `boolean` | `true` |
| beforeCancel | 取消前回调，点击取消时触发 | `() => boolean` | `-` |
| beforeClose | 关闭前回调 | `() => boolean` | `-` |
| onConfirm | 確定按鈕回調 | `(e?: MouseEvent) => Promise \| void` | `-` |
| onCancel | 取消按鈕回調 | `() => void` | `-` |
| onClose | 關閉回調，任何情況關閉彈窗都會觸發 | `() => void` | `-` |
| onClick | 點擊自身回調 | `() => void` | `-` |
| onOverlayClick | 點擊蒙層触发 | `() => void` | `-` |


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

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-dialog-width | 對話框寬度 | `296px` |
| \--nutui-dialog-header-font-weight | 對話框標題字重 | `normal` |
| \--nutui-dialog-header-color | 對話框標題字色 | `rgba(38, 38, 38, 1)` |
| \--nutui-dialog-footer-justify-content | 對話框底部按鈕排布 | `space-around` |
| \--nutui-dialog-min-height | 對話框最小高度 | `156px` |
| \--nutui-dialog-padding | 對話框padding | `28px 24px 16px 24px` |
| \--nutui-dialog-header-height | 對話框標題高度 | `20px` |
| \--nutui-dialog-content-margin | 對話框內容 margin | `20px 0` |
| \--nutui-dialog-content-max-height | 對話框內容最大高度 | `268px` |
| \--nutui-dialog-content-line-height | 對話框內容行高 | `16px` |
| \--nutui-dialog-overlay-background-color | 對話框蒙層背景色 | `$mask-color` |
| \--nutui-dialog-outer-z-index | 對話框的z-index | `$mask-content-z-index` |
| \--nutui-dialog-outer-border-radius | 對話框圓角 | `20px` |
| \--nutui-dialog-vertical-footer-ok-margin-top | 對話框底部按鈕縱向排布時的margin值 | `10px` |
| \--nutui-dialog-footer-button-min-width | 對話框底部按鈕最小寬度 | `100px` |
| \--nutui-dialog-footer-cancel-margin-right | 對話框取消按鈕的margin-right | `20px` |
| \--nutui-dialog-footer-ok-max-width | 對話框確認按鈕的最大寬度 | `128px` |