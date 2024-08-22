# Elevator 電梯樓層

用於列表快速定位以及索引的顯示

## 引入

```tsx
import { Elevator } from '@nutui/nutui-react'
```

## 示例代碼

### 基礎用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 自定義索引

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 不展示右側導航

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 吸頂索引

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 自定義內容

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

## Elevator

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| height | 電梯區域的高度 | `number` \| `string` | `200px` |
| floorKey | 索引 key 值 | `string` | `title` |
| list | 索引列表 | `Array（item 需包含 id、name 屬性, name 支持傳入 html 結構）` | `[{id: 0, name: ''}]` |
| sticky | 索引是否吸頂 | `boolean` | `false` |
| showKeys | 展示右側導航 | `boolean` | `true` |
| spaceHeight | 右側錨點的上下間距 | `number` | `23` |
| titleHeight | 左側索引的高度 | `number` | `35` |
| onItemClick | 點擊內容 | `onItemClick:(key: string, item: { id: number, name: string })=>void` | `false` |
| onIndexClick | 點擊索引 | `onIndexClick:(key: string)=>void` | `false` |

## 主題定製

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-elevator-list-bg-color | 樓層區域背景顏色 | `$white` |
| \--nutui-elevator-list-font-size | 樓層區域列表項字體大小 | `$font-size-small` |
| \--nutui-elevator-list-color | 樓層區域列表項字體顏色 | `$color-title` |
| \--nutui-elevator-list-item-padding | 樓層區域列表項內邊距 | `0 20px` |
| \--nutui-elevator-list-item-name-height | 樓層區域列表項高度 | `30px` |
| \--nutui-elevator-list-item-name-line-height | 樓層區域列表項行高 | `30px` |
| \--nutui-elevator-list-item-code-font-size | 樓層區域列表項標題字體大小 | `$font-size-base` |
| \--nutui-elevator-list-item-code-color | 樓層區域列表項標題顏色 | `$color-title` |
| \--nutui-elevator-list-item-code-font-weight | 樓層區域列表項標題字體粗細 | `$font-weight-bold` |
| \--nutui-elevator-list-item-code-height | 樓層區域列表項標題高度 | `35px` |
| \--nutui-elevator-list-item-code-line-height | 樓層區域列表項標題行高 | `35px` |
| \--nutui-elevator-list-item-code-border-bottom | 樓層區域列表項標題下邊框寬度 | `1px solid $color-border` |
| \--nutui-elevator-list-item-code-background-color | 樓層區域列表項標題背景色 | `inherit` |
| \--nutui-elevator-list-item-code-current-bg-color | 電梯提示背景顏色 | `#fff` |
| \--nutui-elevator-list-item-code-current-border-radius | 電梯提示圓角 | `50%` |
| \--nutui-elevator-list-item-code-current-width | 電梯提示寬度 | `45px` |
| \--nutui-elevator-list-item-code-current-height | 電梯提示高度 | `45px` |
| \--nutui-elevator-list-item-code-current-line-height | 電梯提示行高 | `45px` |
| \--nutui-elevator-list-item-code-current-right | 電梯提示定位後右邊緣位置 | `60px` |
| \--nutui-elevator-list-item-code-current-top | 電梯提示定位後top邊緣位置 | `50%` |
| \--nutui-elevator-list-item-code-current-text-align | 電梯提示文字對齊方式 | `center` |
| \--nutui-elevator-bars-right | 電梯樓層定位後右邊緣位置 | `10px` |
| \--nutui-elevator-bars-top | 電梯樓層定位後頂部邊緣位置 | `50%` |
| \--nutui-elevator-bars-transform | 電梯樓層定位後滑動距離 | `translateY(-50%)` |
| \--nutui-elevator-bars-padding | 電梯樓層內邊距 | `15px 0` |
| \--nutui-elevator-bars-background-color | 電梯樓層背景顏色 | `#eeeff2` |
| \--nutui-elevator-bars-border-radius | 電梯樓層圓角大小 | `6px` |
| \--nutui-elevator-bars-active-color | 電梯樓層高亮文字顏色 | `$color-primary` |
| \--nutui-elevator-bars-z-index | 電梯樓層層級 | `1` |
| \--nutui-elevator-bars-inner-item-padding | 電梯樓層標識項內邊距 | `3px` |
| \--nutui-elevator-bars-font-size | 電梯樓層標識項字體大小 | `10px` |
| \--nutui-elevator-list-fixed-color | 吸頂樓層文字顏色 | `$color-primary` |
| \--nutui-elevator-list-fixed-bg-color | 吸頂樓層背景顏色 | `$white` |
| \--nutui-elevator-list-fixed-box-shadow | 吸頂樓層陰影 | `0 0 10px #eee` |
