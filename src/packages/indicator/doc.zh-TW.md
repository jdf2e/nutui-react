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

### 白色

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### 類型

支持三種類型：錨點指示器（anchor，2-6頁）、滑動指示器（slide，2-11頁）、雙屏指示器（dualScreen，固定2頁）。

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

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

### 定位佈局

支持將指示器放置在內容模塊外部或內部的不同位置。內部定位（inside-\*）時需要父容器設置 `position: relative`。

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

## Indicator

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| current | 目前頁 | `number` | `0` |
| total | 總頁數 | `number` | `2` |
| direction | 方向，預設為水平方向 | `horizontal` \| `vertical` | `horizontal` |
| color | 顏色 | `primary` \| `default` | `primary` |
| type | 互動類型 | `anchor` \| `slide`\| `dualScreen` | `anchor` |
| placement | 定位佈局 | `outside` \| `inside-top-right` \| `inside-bottom-center` \| `inside-bottom-left` | `-` |

## 主題定製

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-indicator-color | 指示器焦點時色值 | `$color-primary` |
| \--nutui-indicator-dot-color | 指示器默認色值 | `$color-border` |
| \--nutui-indicator-dot-size | 指示器尺寸 | `4px` |
| \--nutui-indicator-dot-active-size | 指示器焦點時尺寸 | `8px` |
| \--nutui-indicator-border-radius | 指示器焦點時的border值 | `$radius-xxs` |
| \--nutui-indicator-dot-margin | 指示器橫向時的margin值 | `$spacing-xxs` |
| \--nutui-indicator-dot-border | 指示器內描邊 | `0.33px solid $color-border` |
| \--nutui-indicator-dot-inactive-color | 指示器非焦點時的填充色 | `var(--nutui-color-background-component, #f0f2f7)` |
| \--nutui-indicator-track-width | 滑動指示器軌道寬度 | `24px` |
| \--nutui-indicator-slider-width | 滑動指示器滑塊寬度 | `8px` |
| \--nutui-indicator-dual-screen-inactive-width | 雙屏指示器非焦點時寬度 | `16px` |
| \--nutui-indicator-placement-gap | 定位佈局與內容的間距 | `8px` |
| \--nutui-indicator-placement-safe-gap | 外部定位時與下方模塊的安全間距 | `12px` |

<Contribution name="Indicator" />
