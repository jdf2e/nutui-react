# Dialog 對話框

模態對話框，在浮層中顯示，引導用戶進行相關操作，常用於消息提示、消息確認，或在當前頁面內完成特定的交互操作。

彈出框組件支持函數調用和組件調用兩種方式。

## 引入

```tsx
import { Dialog } from '@nutui/nutui-react'
```

## 示例代碼

### 函數式調用

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

## 以下為標籤式使用

### 基礎用法

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### footer區域定製

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 點擊取消時，攔截

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 確認按鈕loading效果

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### 帶關閉按鈕

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### 自定義內容區域

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### 頂部帶插圖

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

## Dialog

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| visible | 對話框是否可見 | `boolean` | `-` |
| header | 自定義頁頭，傳入 null 則不顯示 | `ReactNode` | `-` |
| title | 標題 | `ReactNode` | `-` |
| content | 對話框的內容，適用於函數式調用 | `ReactNode` | `-` |
| footer | 自定義頁腳，傳入 null 則不顯示 | `ReactNode` | `-` |
| confirmText | 確認按鈕文案 | `ReactNode` | `確定` |
| cancelText | 取消按鈕文案 | `ReactNode` | `取消` |
| overlay | 是否展示遮罩 | `boolean` | `true` |
| hideConfirmButton | 是否隱藏確定按鈕 | `boolean` | `false` |
| hideCancelButton | 是否隱藏取消按鈕 | `boolean` | `false` |
| disableConfirmButton | 禁用確定按鈕 | `boolean` | `false` |
| closeIcon | 關閉按鈕 | `boolean` \| `ReactNode` | `false` |
| closeIconPosition | 關閉按鈕位置 | `top-left` \| `top-right` \| `bottom` | `top-right` |
| closeOnOverlayClick | 點擊蒙層是否關閉對話框 | `boolean` | `true` |
| footerDirection | 使用橫縱方向 可選值 horizontal、vertical | `string` | `horizontal` |
| lockScroll | 背景是否鎖定 | `boolean` | `true` |
| beforeCancel | 取消前回調，點擊取消時觸發 | `() => boolean` | `-` |
| beforeClose | 關閉前回調 | `() => boolean` | `-` |
| onConfirm | 確定按鈕回調 | `(e?: MouseEvent) => Promise \| void` | `-` |
| onCancel | 取消按鈕回調 | `() => void` | `-` |
| onClose | 關閉回調，任何情況關閉彈窗都會觸發 | `() => void` | `-` |
| onClick | 點擊自身回調 | `() => void` | `-` |
| onOverlayClick | 點擊蒙層觸發 | `() => void` | `-` |

對於**指令式**創建出來的 Dialog，**並不會感知父組件的重渲染和其中 state 的更新**，因此下面這種寫法是錯誤的：

```tsx
import React from 'react'
import { Dialog, Input, Button } from '@nutui/nutui-react'

export default function App() {
  const [captcha, setCaptcha] = useState<string>('')
  const showCaptcha = () => {
    return Dialog.confirm({
      content: (
        <Input
          placeholder="請輸入驗證碼"
          value={captcha} // App 中 captcha 的更新是不會傳遞到 Dialog 中的
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

## 主題定製

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-dialog-z-index | 對話框的z-index | `$mask-content-z-index` |
| \--nutui-dialog-width | 對話框寬度 | `295px` |
| \--nutui-dialog-padding | 對話框padding | `24px` |
| \--nutui-dialog-min-height | 對話框最小高度 | `156px` |
| \--nutui-dialog-border-radius | 對話框圓角 | `16px` |
| \--nutui-dialog-content-margin | 對話框內容 margin | `5px 0 24px 0` |
| \--nutui-dialog-content-max-height | 對話框內容最大高度 | `268px` |
| \--nutui-dialog-content-line-height | 對話框內容行高 | `20px` |
| \--nutui-dialog-content-text-align | 對話框內容文本對齊方式 | `left` |
| \--nutui-dialog-header-font-size | 對話框標題字體大小 | `$font-size-large` |
| \--nutui-dialog-header-font-weight | 對話框標題字重 | `normal` |
| \--nutui-dialog-footer-justify-content | 對話框底部按鈕排布 | `space-around` |
| \--nutui-dialog-footer-button-min-width | 對話框底部按鈕最小寬度 | `117px` |
| \--nutui-dialog-footer-cancel-margin-right | 對話框取消按鈕的margin-right | `12px` |
| \--nutui-dialog-footer-ok-max-width | 對話框確認按鈕的最大寬度 | `128px` |
| \--nutui-dialog-vertical-footer-ok-margin-top | 對話框底部按鈕縱向排布時的margin值 | `5px` |
| \--nutui-dialog-close-width | 對話框關閉按鈕的寬度 | `18px` |
| \--nutui-dialog-close-height | 對話框關閉按鈕的高度 | `18px` |
| \--nutui-dialog-close-color | 對話框關閉按鈕的顏色 | `#8c8c8c` |
| \--nutui-dialog-close-top | 對話框關閉按鈕的top值 | `16px` |
| \--nutui-dialog-close-left | 對話框關閉按鈕的left值 | `16px` |
| \--nutui-dialog-close-right | 對話框關閉按鈕的right值 | `16px` |
