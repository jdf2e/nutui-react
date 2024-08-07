# Menu 菜單

嚮下彈出的菜單列錶

## 引入

```tsx
import { Menu } from '@nutui/nutui-react'
```

## 示例代碼

### 基礎用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 受控

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 自定義菜單內容

使用實例上的 toggle 方法可以手動關閉彈框。

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 一行兩列

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 自定義選中態顏色

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### 自定義圖標

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### 嚮上展開

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### 禁用菜單

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

## Menu

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| activeColor | 選項的選中態圖標顏色 | `string` | `#F2270C` |
| closeOnOverlayClick | 是否在點擊遮罩層後關閉菜單 | `boolean` | `true` |
| lockScroll | 背景是否鎖定 | `boolean` | `true` |
| scrollFixed | 滾動後是否固定，可設置固定位置 | `boolean` \| `string` \| `number` | `true` |
| icon | 自定義標題圖標 | `React.ReactNode` | `-` |
| onOpen | menu 展开触发 | `(index: number, from: 'NORMAL' \| 'REF') => void` | `-` |
| onClose | menu 关闭触发 | `(index: number, from: 'NORMAL' \| 'REF') => void` | `-` |

## Menu.Item

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| title | 菜單項標題 | `string` | `當前選中項文字` |
| titleIcon | 菜單項 icon | `React.ReactNode` | `ArrowUp/ArrowDown` |
| options | 選項數組 | `array` | `-` |
| disabled | 是否禁用菜單 | `boolean` | `false` |
| columns | 可以設置一行展示多少列 options | `number` | `1` |
| closeOnClickAway | 点击空白处关闭菜单 | `boolean` | `true` |
| icon | 自定義選項圖標 | `React.ReactNode` | `Check` |
| direction | 菜單展開方嚮，可選值為up | `string` | `down` |
| onChange | 選擇 option 之後觸發 | `(event: any) => void` | `-` |

### Ref

| 事件名 | 說明 | 回調參數 |
| --- | --- | --- |
| toggle | 切換菜單展示狀態，傳 true 為顯示，false 為隱藏，不傳參為取反 | `show?: boolean` |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-menu-scroll-fixed-top | fix 狀態的頂部距離 | `0` |
| \--nutui-menu-scroll-fixed-z-index | fix 狀態的z-index | `$mask-z-index` |
| \--nutui-menu-bar-line-height | menu標題欄的行高 | `48px` |
| \--nutui-menu-bar-opened-z-index | 打開狀態的 z-index | `2001` |
| \--nutui-menu-bar-box-shadow | 菜單標題欄的陰影 | `0 2px 12px rgba(89, 89, 89, 0.12)` |
| \--nutui-menu-title-padding | 標題的內邊距 | `8px` |
| \--nutui-menu-title-font-size | 標題的字號 | `$font-size-base` |
| \--nutui-menu-title-color | 標題的顏色 | `$color-title` |
| \--nutui-menu-container-z-index | 菜單選項容器的zindex | `1000` |
| \--nutui-menu-content-padding | 菜單選項容器的內邊距 | `12px 24px` |
| \--nutui-menu-content-max-height | 菜單選項容器的最大高度 | `214px` |
| \--nutui-menu-content-background-color | 菜單選項容器的背景色 | `$white` |
| \--nutui-menu-item-active-color | 打開狀態的顏色 | `$color-primary` |
| \--nutui-menu-item-active-font-weight | 選中狀態的字重 | `$font-weight-bold` |
| \--nutui-menu-item-disabled-color | 禁用狀態的顏色 | `$color-text-disabled` |
| \--nutui-menu-item-padding | 菜單選項的內邊距 | `12px 0` |
| \--nutui-menu-item-icon-margin | 菜單選項文本與icon的距離 | `8px` |
