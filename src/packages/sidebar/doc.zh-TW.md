# SideBar組件

用於側邊內容選擇和切換

## 引入

```tsx
import { SideBar } from '@nutui/nutui-react'
```

## 示例代碼

### 基礎用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 禁用選項

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 根據value匹配

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 多個標題

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 設置滾動動畫時長

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

## SideBar

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| value | 當前激活的`item`的key | `string \| number` | `-` |
| defaultValue | 未設置value時，`item`的key的默認值 | `string \| number` | `-` |
| contentDuration | 內容滾動動畫時長 | `number` | `0` |
| sidebarDuration | 側欄滾動動畫時長 | `number` | `0` |
| onClick | 點擊標簽時觸發 | `(index: string \| number) => void` | `-` |
| onChange | 當前激活的標簽改變時觸發 | `(index: string \| number) => void` | `-` |

## SideBar.Item

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| title | 標題 | `string` | `-` |
| value | 標簽 Key , 匹配的標識符, 默認為索引值 | `string` \| `number` | `-` |
| disabled | 是否禁用標簽 | `boolean` | `false` |

## 主題定製

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-sidebar-background-color | 側邊欄導航背景色 | `$color-background` |
| \--nutui-sidebar-border-radius | 側邊欄的圓角 | `0` |
| \--nutui-sidebar-width | 側邊欄寬度 | `104px` |
| \--nutui-sidebar-max-width | 側邊欄最大寬度 | `128px` |
| \--nutui-sidebar-title-height | 側邊欄標題高度 | `52px` |
| \--nutui-sidebar-inactive-font-size | 普通狀態下的字體大小 | `$font-size-base` |
| \--nutui-sidebar-active-font-size | 激活狀態下的字體大小 | `$font-size-l` |
| \--nutui-sidebar-active-font-weight | 激活狀態下的字重 | `$font-weight-bold` |
| \--nutui-sidebar-active-color | 激活狀態下的字體顏色 | `$color-primary` |
| \--nutui-sidebar-item-background | 內容區域的背景色 | `$white` |
| \--nutui-sidebar-item-padding | 內容區域的內邊距 | `24px 20px` |
