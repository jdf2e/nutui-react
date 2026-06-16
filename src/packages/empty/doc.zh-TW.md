# Empty組件

空狀態時的占位提示

## 引入

```tsx
import { Empty } from '@nutui/nutui-react'
```

## 示例代碼

### 全屏 full

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 半屏 half

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 局部 partial

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 圖片類型，內置 8 個

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 自定義圖片大小

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### 自定義圖片

> 如果您是京東站內相關項目的開發，我們特意為您提供了一繫列的缺省狀態的圖片鏈接，您可通過內部群獲取。

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### 自定義底部按鈕

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

## Empty

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| image | 圖片,支持傳入圖片 URL | `ReactNode` | `-` |
| imageSize | 圖片大小，number 類型單位為 px | `number` \| `string` | `-` |
| title | 圖片下方的標題 | `ReactNode` | `-` |
| description | 圖片下方的描述文字 | `ReactNode` | `-` |
| size | 組件尺寸，對齊 JD APP V11.0 缺省狀態規範 | `full` \| `half` \| `partial` | `half` |
| status | 內置缺省插圖類型，與設計稿業務場景一一對應 | `network` \| `comment` \| `search` \| `shop` \| `address` \| `order` \| `favor` \| `cart` | `network` |
| actions | 操作按鈕列表，項內字段同 Button，支持 `onClick` | `EmptyAction[]` | `[]` |

## 主題定製

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

**通用**

| 名稱 | 説明 | 默認值 |
| --- | --- | --- |
| \--nutui-empty-padding | 組件內邊距 | `20px` |
| \--nutui-empty-background-color | 背景色 | `$color-background-overlay` |
| \--nutui-empty-title-color | 標題顏色 | `$color-title`（`#11141A`） |
| \--nutui-empty-description-color | 描述顏色 | `$color-text-help`（`#8D9199`） |

**全屏 `full`**

| 名稱 | 説明 | 默認值 |
| --- | --- | --- |
| \--nutui-empty-full-padding-top | 頂部間距 | `160px` |
| \--nutui-empty-full-image-size | 插圖尺寸 | `160px` |
| \--nutui-empty-full-title-font-size | 標題字號 | `$font-size-md` |
| \--nutui-empty-full-title-line-height | 標題行高 | `$line-height-xxl` |
| \--nutui-empty-full-description-font-size | 描述字號 | `$font-size-base` |
| \--nutui-empty-full-description-line-height | 描述行高 | `22px` |
| \--nutui-empty-full-actions-margin-top | 操作區上邊距 | `8px` |

**半屏 `half`**

| 名稱 | 説明 | 默認值 |
| --- | --- | --- |
| \--nutui-empty-half-image-size | 插圖尺寸 | `80px` |
| \--nutui-empty-half-title-font-size | 標題字號 | `$font-size-s` |
| \--nutui-empty-half-title-line-height | 標題行高 | `22px` |
| \--nutui-empty-half-description-font-size | 描述字號 | `$font-size-m` |
| \--nutui-empty-half-description-line-height | 描述行高 | `$line-height-2xl` |
| \--nutui-empty-half-actions-margin-top | 操作區上邊距 | `8px` |

**局部 `partial`**

| 名稱 | 説明 | 默認值 |
| --- | --- | --- |
| \--nutui-empty-partial-padding | 容器內邊距 | `0 16px` |
| \--nutui-empty-partial-image-size | 插圖尺寸 | `32px` |
| \--nutui-empty-partial-content-gap | 圖與文案間距 | `8px` |
| \--nutui-empty-partial-description-font-size | 文案字號 | `$font-size-m` |
| \--nutui-empty-partial-description-line-height | 文案行高 | `32px` |

> v4 已移除 `--nutui-empty-image-size`、`--nutui-empty-image-small-size` 等 v3 變量，請按 `size` 使用上表對應變量。

<Contribution name="Empty" />
