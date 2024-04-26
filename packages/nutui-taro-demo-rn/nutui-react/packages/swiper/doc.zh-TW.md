# Swiper 輪播

## 介紹

常用於一組圖片或卡片輪播，當內容空間不足時，可以用走馬燈的形式進行收納，進行輪播展現。

## 安裝

```tsx
import { Swiper } from '@nutui/nutui-react';
```

## 代碼演示

### 基礎用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 異步加載

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::


### 自定義大小

`width` 自定義輪播大小 

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 自定義分頁指示器

`indicator` 錶示自定義指示器

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 手動切換

可通過 `ref`調用 `prev`,`next` 進行切換

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### 垂直方嚮

`direction` 自定義輪播方嚮

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### 水平居中展示

`center` 代錶可居中，同時必須傳 `width`

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### 垂直居中展示

`center` 代錶可居中，同時必須傳 `height`

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

### 一屏多個數據時

`center` 代表可居中，同时必须传 `height`

:::demo

<CodeBlock src='h5/demo9.tsx'></CodeBlock>

:::

## Swiper

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| width | 輪播卡片的寬度 | `number` \| `string` | `-` |
| height | 輪播卡片的高度 | `number` \| `string` | `-` |
| direction | 輪播方嚮 | `horizontal` \| `vertical` | `horizontal` |
| indicator | 分頁指示器是否展示，可傳入自定義的 HTML 結構 | `ReactNode` | `false` |
| loop | 是否循環輪播 | `boolean` | `true` |
| duration | 動畫時長（單位是ms） | `number` \| `string` | `500` |
| autoPlay | 自動輪播時長，0錶示不會自動輪播 | `number` \| `string` | `0` |
| defaultValue | 初始化索引值 | `number` \| `string` | `0` |
| touchable | 是否可觸摸滑動 | `boolean` | `true` |
| preventDefault | 滑動過程中是否禁用默認事件 | `boolean` | `true` |
| stopPropagation | 滑動過程中是否禁止冒泡 | `boolean` | `true` |
| center | 是否居中展示，必須傳對應的`width` 和 `height` | `boolean` | `false` |
| onChange | 卡片切換後的回調 | `(current: number) => void` | `-` |

### Ref

| 屬性 | 說明 | 類型 |
| --- | --- | --- |
| prev | 切換到上一頁 | `()=>void` |
| next | 切換到下一頁 | `()=>void` |
| to | 切換到指定輪播 | `(index: number)=>void` |
| resize | 外層元素大小或組件顯示狀態變化時，可以調用此方法來觸發重繪 | `()=>void` |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-swiper-pagination-bottom | 分頁器距離底部的距離 | `12px` |