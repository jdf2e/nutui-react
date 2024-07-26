# Tabs 選項卡切換

常用於平級區域大塊內容的的收納和展現，支持內嵌標簽形式和渲染循環數據形式

## 引入

```tsx
import { Tabs } from '@nutui/nutui-react'
```

## 示例代碼

### 基礎用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 基礎用法-微笑曲線

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 基礎用法-簡約模式

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 基礎用法-卡片模式

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 基礎用法-按鈕模式

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### 基礎用法-分割線模式

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### Title左對齊

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### 左對齊-卡片模式

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

### 左對齊-按鈕模式

:::demo

<CodeBlock src='h5/demo9.tsx'></CodeBlock>

:::

### 左對齊-分割線模式

:::demo

<CodeBlock src='h5/demo10.tsx'></CodeBlock>

:::

### 通過 value 匹配

:::demo

<CodeBlock src='h5/demo11.tsx'></CodeBlock>

:::

### 滑動切換

:::demo

<CodeBlock src='h5/demo12.tsx'></CodeBlock>

:::

### CSS 粘性布局

通過設置tab的style 例如：`tabStyle={{ position: 'sticky', top: '0px', zIndex: 11 }}` ，來實現Css的粘性布局，註意：在微信小程序裏組件外層元素不能存在 overflow 為 `hidden`、`auto`、`scroll`的設置。

:::demo

<CodeBlock src='h5/demo13.tsx'></CodeBlock>

:::

### Tabpane 自動高度

自動高度。設置為 true 時，nut-tabs 和 nut-tabs\_\_content 會隨著當前 nut-tabpane 的高度而發生變化。

:::demo

<CodeBlock src='h5/demo14.tsx'></CodeBlock>

:::

### 數據異步渲染 3s

:::demo

<CodeBlock src='h5/demo15.tsx'></CodeBlock>

:::

### 數量多,滾動操作

:::demo

<CodeBlock src='h5/demo16.tsx'></CodeBlock>

:::

### 數量多,滾動操作2

:::demo

<CodeBlock src='h5/demo17.tsx'></CodeBlock>

:::

### 左右布局

:::demo

<CodeBlock src='h5/demo18.tsx'></CodeBlock>

:::

### 左右布局-微笑曲線

:::demo

<CodeBlock src='h5/demo19.tsx'></CodeBlock>

:::

### 嵌套布局

:::demo

<CodeBlock src='h5/demo20.tsx'></CodeBlock>

:::

### 嵌套布局2

:::demo

<CodeBlock src='h5/demo21.tsx'></CodeBlock>

:::

### Title 字體尺寸：20px 12px

:::demo

<CodeBlock src='h5/demo22.tsx'></CodeBlock>

:::

### 自定義標簽欄

:::demo

<CodeBlock src='h5/demo23.tsx'></CodeBlock>

:::

## Tabs

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| value | 當前激活 tab 面板的值 | `number` \| `string` | `0` |
| defaultValue | 初始化激活 tab 的值 | `number` \| `string` | `0` |
| activeColor | 標簽選中色 | `string` | `#1a1a1a` |
| direction | 使用橫縱方向 | `horizontal` \| `vertical` | `horizontal` |
| activeType | 選中底部展示樣式 可選值 `line`、`smile`、`simple`、`card`、`button`、`divider` | `line` \| `smile` \| `simple` \| `card` \| `button`\| `divider` | `line` |
| duration | 切換動畫時長,單位 ms 0 代表無動畫 | `number` \| `string` | `300` |
| title | 自定義導航區域 | `() => JSX.Element[]` | `-` |
| align | 標題對齊方式 | `left` \| `right` | `-` |
| autoHeight | 自動高度。設置為 true 時，nut-tabs 和 nut-tabs\_\_content 會隨著當前 nut-tabpane 的高度而發生變化。 | `boolean` | `false` |
| tabStyle | 標簽欄樣式 | `CSSProperties` | `{}` |
| onClick | 點擊標簽時觸發 | `(index: string \| number) => void` | `-` |
| onChange | 當前激活的標簽改變時觸發 | `(index: string \| number) => void` | `-` |

## Tabs.Tabpane

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
| \--nutui-tabs-titles-height | 水平方向標題的高度 | `44px` |
| \--nutui-tabs-titles-background-color | Tab 標題的背景色 | `$color-background` |
| \--nutui-tabs-title-gap | Tab 標題的左右 margin | `0px` |
| \--nutui-tabs-titles-font-size | Tab 標題的字號 | `$font-size-base` |
| \--nutui-tabs-titles-item-min-width | 水平方向標題的最小寬度 | `50px` |
| \--nutui-tabs-titles-item-color | Tab 標題的字色 | `$color-title` |
| \--nutui-tabs-titles-item-active-color | Tab 選中標題的字色 | `$color-primary` |
| \--nutui-tabs-titles-item-active-font-weight | Tab 選中標題的字重 | `$font-weight-bold` |
| \--nutui-tabs-titles-item-active-font-size | Tab 選中標題的字號 | `$font-size-large` |
| \--nutui-tabs-titles-item-active-background-color | 水平方向激活選項卡標題的背景色 | `$color-background-overlay` |
| \--nutui-tabs-tab-line-width | 水平方向激活選項卡線條的寬度 | `12px` |
| \--nutui-tabs-tab-line-height | 水平方向激活選項卡線條的高度 | `2px` |
| \--nutui-tabs-tab-line-color | 水平方向線條顏色 | `$color-primary` |
| \--nutui-tabs-line-bottom | 水平方向線條距離 | `15%` |
| \--nutui-tabs-line-border-radius | 水平方向線的圓角 | `2px` |
| \--nutui-tabs-tab-line-opacity | 水平方向線的透明度 | `1` |
| \--nutui-tabs-vertical-titles-width | 垂直方向標題的寬度 | `100px` |
| \--nutui-tabs-vertical-titles-item-height | 垂直方向標題的高度 | `40px` |
| \--nutui-tabs-vertical-tab-line-color | 垂直方向線條顏色 | `linear-gradient(180deg, $color-primary 0%, rgba(#fa2c19, 0.15) 100%)` |
| \--nutui-tabs-vertical-tab-line-width | 垂直方向標題線條的寬度 | `3px` |
| \--nutui-tabs-vertical-tab-line-height | 垂直方向標題線條的高度 | `12px` |
| \--nutui-tabs-tabpane-padding | Tabpane 的內邊距 | `24px 20px` |
| \--nutui-tabs-tabpane-backgroundColor | Tabpane 的背景色 | `#fff` |
