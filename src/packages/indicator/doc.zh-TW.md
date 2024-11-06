# Indicator 指示器

顯示一個任務或流程的進度，常用於開通流程。

## 引入

```tsx
import { Indicator } from '@nutui/nutui-react'
```

## 示例代碼

### 基礎用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 自定義節點

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 自定義顏色大小

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 豎向展示

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

## Indicator

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| current | 當前步驟 | `number` | `0` |
| total | 步驟長度 | `number` | `3` |
| direction | 展示方向，默認為水平方向 | `horizontal` \| `vertical` | `horizontal` |

## 主題定製

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-indicator-color | 指示器焦點時色值 | `$color-primary` |
| \--nutui-indicator-dot-color | 指示器默認色值 | `$color-text-disabled` |
| \--nutui-indicator-dot-size | 指示器尺寸 | `5px` |
| \--nutui-indicator-dot-active-size | 指示器焦點時尺寸 | `15px` |
| \--nutui-indicator-border-radius | 指示器焦點時的border值 | `3px` |
| \--nutui-indicator-dot-margin | 指示器橫向時的margin值 | `4px` |
