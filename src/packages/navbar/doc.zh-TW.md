# Navbar 頭部導航

提供導航功能。

## 引入

```tsx
import { NavBar } from '@nutui/nutui-react'
```

## 示例代碼

### iOS26以下/安卓鴻蒙

#### 標題型

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

#### 導航型

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### iOS26以上

#### 標題型

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

#### 導航型

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

## Navbar

### Props

| 属性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| right | 右側內容 | `ReactNode` | `-` |
| left | 左側內容，渲染在返回區域的右側 | `ReactNode` | `-` |
| back | 返回區域的文字 | `ReactNode` | `-` |
| title | 標題 | `ReactNode` | `-` |
| subBar | 二級樓層內容，渲染在標題行下方 | `ReactNode` | `-` |
| fixed | 是否固定 | `boolean` | `false` |
| safeAreaInsetTop | 是否適配安全區 | `boolean` | `false` |
| placeholder | 固定在頂部時，是否在標簽位置生成一個等高的佔位元素 | `boolean` | `false` |
| zIndex | 導航欄層級 | `number` \| `string` | `10` |
| onBackClick | 點擊返回區域後的回調 | `onBackClick:(event: Event)=>void` | `false` |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-navbar-width | 頭部導航的寬度 | `100%` |
| \--nutui-navbar-height | 頭部導航的高度 | `44px` |
| \--nutui-navbar-padding | 頭部導航的內邊距 | `4px 8px` |
| \--nutui-navbar-subbar-padding | 頭部導航二級樓層的內邊距 | `8px 0` |
| \--nutui-navbar-side-maxwidth | 頭部導航左右內容區的寬度 | `108px` |
| \--nutui-navbar-side-padding | 頭部導航左右內容區的內邊距 | `8px` |
| \--nutui-navbar-background | 頭部導航的背景顏色 | `transparent` |
| \--nutui-navbar-box-shadow | 頭部導航的陰影 | `none` |
| \--nutui-navbar-color | 頭部導航的字體顏色 | `$color-title` |
| \--nutui-navbar-font-size | 頭部導航的字體大小 | `$font-size-base` |
| \--nutui-navbar-title-font-size | 頭部導航標題的字體大小 | `$font-size-xl` |
| \--nutui-navbar-title-font-weight | 頭部導航標題的字體粗細 | `$font-weight-bold` |
| \--nutui-navbar-title-font-color | 頭部導航標題的字體顏色 | `$color-title` |

<Contribution name="NavBar" />
