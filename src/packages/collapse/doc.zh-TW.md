# Collapse 摺疊面闆

將內容放置在多個摺疊面闆中，點擊面闆標題可展開或收縮內容。

## 引入

```tsx
import { Collapse } from 'nutui-react'
```

## 示例代碼

### 基礎用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 受控方式

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 無icon樣式，綁定點擊事件

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 手風琴模式

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 自定義摺疊圖標

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### 自定義 title 與 extra

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### 動態改變數據

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

## Collapse

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| defaultActiveName | 默認展開面闆的 name，非受控 | `Array<string>` \| `string` | `-` |
| activeName | 當前展開面闆的 name，受控 | `Array<string>` \| `string` | `-` |
| accordion | 是否開啟手風琴模式 | `boolean` | `false` |
| rotate | 點擊摺疊和展開的旋轉角度,在自定義圖標模式下生效 | `string` \| `number` | `180` |
| expandIcon | 自定義展開圖標 | `ReactNode` | `-` |

## Collapse.Item

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| name | 唯一標識符，必填 | `string` | `-` |
| title | 標題欄左側內容 | `ReactNode` | `-` |
| disabled | 標題欄是否禁用 | `boolean` | `false` |
| extra | 標題欄副標題 | `ReactNode` | `-` |
| rotate | 點擊摺疊和展開的旋轉角度,在自定義圖標模式下生效 | `string` \| `number` | `180` |
| expandIcon | 自定義展開圖標 | `ReactNode` | `-` |
| onChange | 切換面闆時觸發 | `(activeName, name, status) => void` | `-` |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-collapse-item-padding | 內邊距 | `13px 26px` |
| \--nutui-collapse-item-font-size | 字體大小 | `$font-size-base` |
| \--nutui-collapse-item-line-height | 行高 | `24px` |
| \--nutui-collapse-item-color | 字體顏色 | `#666666` |
| \--nutui-collapse-item-disabled-color | 禁用顏色 | `$color-text-disabled` |
| \--nutui-collapse-item-extra-color | Extra 字體顏色 | `#666666` |
| \--nutui-collapse-item-border-bottom | Item 底部邊框 | `none` |
| \--nutui-collapse-item-header-border-bottom | Item header 底部邊框 | `1px solid $color-border` |
| \--nutui-collapse-wrapper-content-background-color | 背景顏色 | `$white` |
| \--nutui-collapse-wrapper-content-color | 內容字體顏色 | `#666666` |
| \--nutui-collapse-wrapper-content-font-size | 內容字體大小 | `$font-size-base` |
| \--nutui-collapse-wrapper-content-line-height | 內容行高 | `1.5` |
| \--nutui-collapse-wrapper-content-padding | 內容內邊距 | `12px 26px` |
