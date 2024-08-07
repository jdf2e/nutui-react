# Avatar 頭像

用來代錶用戶或事物，支持圖片、圖標或字符展示。

## 引入

```tsx
import { Avatar } from '@nutui/nutui-react'
```

## 示例代碼

### 基礎用法

支持三種尺寸：small、normal、large

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 頭像形狀

支持兩種形狀：square、round

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 頭像類型

支持三種類型：圖片、Icon 以及字符

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 自定義顏色及背景色

Icon 和字符型可以自定義圖標顏色及背景色

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 帶徽標的頭像

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### 頭像組合展現

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### 組合頭像可控制層級方嚮

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### 點擊頭像觸發事件

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

### 列表展示

:::demo

<CodeBlock src='h5/demo9.tsx'></CodeBlock>

:::

## Avatar

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| size | 設置頭像的大小 | `large` \| `normal` \| `small` \| `numbers` | `-` |
| shape | 設置頭像的形狀 | `round` \| `square` | `round` |
| background | 設置 Icon、字符類型頭像的背景色 | `string` | `#eee` |
| color | 設置 Icon、字符類型頭像的顏色 | `string` | `#666` |
| fit | 圖片填充模式 | `contain` \| `cover` \| `fill` \| `none` \| `scale-down` \| `cover` | `-` |
| src | 設置圖片類型頭像的地址 | `string` | `-` |
| alt | 設置圖片類型頭像無法顯示時的替代文本 | `string` | `-` |
| icon | 設置 Icon 類型頭像圖標 | `ReactNode` | `-` |
| onClick | 點擊頭像觸發事件 | `(e: MouseEvent) => void` | `-` |
| onError | 圖片加載失敗的事件 | `() => void` | `-` |

## Avatar.Group

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| max | 顯示的最大頭像個數 | `string` \| `number` | `-` |
| maxContent | 頭像數量超出時，會出現一個頭像摺疊元素。該元素內容可為...、more、+N。 | `string` | `-` |
| size | 設置頭像的大小，可選值為：large、normal、small，支持直接輸入數字 | `large` \| `normal` \| `small` | `-` |
| shape | 設置頭像的形狀 | `string` \| `round` | `-` |
| maxBackground | 設置 Icon、字符類型頭像的背景色 | `string` | `#eee` |
| maxColor | 設置 Icon、字符類型頭像的顏色 | `string` | `#666` |
| gap | 設置頭像之間的間距 | `string` | `-8` |
| level | 頭像之間的層級關繫，可選值為：left、right | `left` \| `right` | `left` |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-avatar-square | 正方形頭像的圓角弧度 | `5px` |
| \--nutui-avatar-large-width | 大尺寸頭像的寬度 | `60px` |
| \--nutui-avatar-large-height | 大尺寸頭像的高度 | `60px` |
| \--nutui-avatar-small-width | 小尺寸頭像的寬度 | `32px` |
| \--nutui-avatar-small-height | 小尺寸頭像的高度 | `32px` |
| \--nutui-avatar-normal-width | 正常尺寸頭像的寬度 | `40px` |
| \--nutui-avatar-normal-height | 正常尺寸頭像的高度 | `40px` |
