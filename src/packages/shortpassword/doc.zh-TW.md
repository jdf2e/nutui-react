# ShortPassword 短密碼

短密碼輸入框，可用於輸入密碼、短信驗證碼等

## 引入

```tsx
import { ShortPassword } from '@nutui/nutui-react'
```

## 示例代碼

### 基礎用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 顯示明文

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 顯示按鈕組

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 自定義密碼長度4

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 忘記密碼提示語事件回調

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### 自動聚焦

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

## ShortPassword

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| value | 密碼字符串 | `string` | `-` |
| visible | 是否展示短密碼框 | `boolean` | `false` |
| plain | 是否展示明文 | `boolean` | `false` |
| title | 標題 | `ReactNode` | `請輸入密碼` |
| description | 密碼框描述 | `ReactNode` | `您使用了虛擬資產，請進行驗證` |
| tips | 提示語 | `ReactNode` | `忘記密碼` |
| hideFooter | 是否隱藏底部按鈕 | `boolean` | `true` |
| length | 密碼長度，取值為4~6 | `number` | `6` |
| error | 錯誤信息提示 | `ReactNode` | `-` |
| autoFocus | 自動聚焦 | `boolean` | `false` |
| onChange | 輸入密碼時觸發事件 | `(value) => void` | `-` |
| onConfirm | 點擊確認時觸發事件 | `(value) => void` | `-` |
| onCancel | 點擊取消時觸發事件 | `() => void` | `-` |
| onClose | 點擊關閉圖標和遮罩時觸發事件 | `() => void` | `-` |
| onTips | 點擊忘記密碼時觸發事件 | `() => void` | `-` |
| onComplete | 輸入完成的回調 | `(value) => void` | `-` |
| onFocus | 輸入框聚焦 | `() => void` | `-` |

## 主題定製

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-shortpassword-background-color | 背景顏色 | `rgba(245, 245, 245, 1)` |
| \--nutui-shortpassword-border-color | 邊框顏色 | `#ddd` |
| \--nutui-shortpassword-error | 錯誤提示字體顏色 | `$color-primary` |
| \--nutui-shortpassword-forget | 忘記密碼字體顏色 | `rgba(128, 128, 128, 1)` |
