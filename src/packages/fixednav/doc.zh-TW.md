# FixedNav 懸浮導航

懸浮收齊體驗交互，用於快捷導航

## 引入

```tsx
import { FixedNav } from '@nutui/nutui-react'
```

## 示例代碼

### 基礎用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 左側效果

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 取消背景遮罩

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 自定義使用

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 支持拖拽

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

## FixedNav

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| visible | 是否打開 | `boolean` | `false` |
| list | 懸浮列錶內容數據 | `Array` | `[]` |
| activeText | 收起列錶按鈕文案 | `string` | `收起導航` |
| inactiveText | 展開列錶按鈕文案 | `string` | `快速導航` |
| type | 導航方嚮 | `left` \| `right` | `right` |
| overlay | 展開時是否顯示遮罩 | `boolean` | `true` |
| position | fixed 垂直位置 | `object` | `{top: 'auto', bottom: 'auto'}` |
| content | 自定義按鈕 | `ReactNode` | `-` |
| onChange | 展開收起按鈕回調 | `value: boolean` | `-` |
| onSelect | 選擇之後觸發 | `item, event: MouseEvent` | `-` |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-fixednav-background-color | 背景顏色 | `$white` |
| \--nutui-fixednav-color | 字體顏色 | `$color-title` |
| \--nutui-fixednav-button-background | button 的背景顏色 | `$color-primary-gradient-1` |
| \--nutui-fixednav-index | zIndex | `201` |
| \--nutui-fixednav-item-active-color | 激活顏色 | `$color-primary` |
