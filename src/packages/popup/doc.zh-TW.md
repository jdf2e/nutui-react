# Popup 彈出層

彈出層容器，用於展示彈窗、信息提示等內容

## 引入

```tsx
import { Popup } from '@nutui/nutui-react'
```

## 示例代碼

### 基礎用法

`visible` 控製顯示/隱藏

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 彈出位置

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 關閉圖標

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 阻塞關閉

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 圓角彈框

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### 指定節點掛載

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### 多層堆疊

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

## Popup

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| visible | 當前組件是否顯示 | `boolean` | `false` |
| zIndex | 遮罩層級 | `string` \| `number` | `2000` |
| duration | 遮罩動畫時長，單位秒 | `number` | `0.3` |
| overlayClassName | 自定義遮罩類名 | `string` | `-` |
| overlayStyle | 自定義遮罩樣式 | `CSSProperties` | `-` |
| lockScroll | 背景是否鎖定，strict 用於支援 iOS12 | `boolean\|strict` | `true` |
| overlay | 是否顯示遮罩 | `boolean` | `true` |
| closeOnOverlayClick | 是否點擊遮罩關閉 | `boolean` | `true` |
| position | 彈出位置（top,bottom,left,right,center） | `string` | `center` |
| transition | 動畫名 | `string` | `-` |
| closeable | 是否顯示關閉按鈕 | `boolean` | `false` |
| closeIconPosition | 關閉按鈕位置（top-left,top-right,bottom-left,bottom-right） | `string` | `top-right` |
| closeIcon | 自定義 Icon | `ReactNode` | `close` |
| left | 标题左侧部分 | `ReactNode` | `-` |
| title | 标题中间部分 | `ReactNode` | `-` |
| description | 子標題/描述部分 | `ReactNode` | `-` |
| destroyOnClose | 组件不可见时，卸载内容 | `boolean` | `false` |
| round | 是否顯示圓角 | `boolean` | `false` |
| portal | 指定節點掛載 | `HTMLElement` \| `(() => HTMLElement)` | null` | `null` |
| onClick | 點擊彈框時觸發 | `event: MouseEvent` | `-` |
| onCloseIconClick | 點擊關閉圖標時觸發 | `event: MouseEvent` | `-` |
| onOpen | 打開彈框時觸發 | `-` | `-` |
| onClose | 關閉彈框時觸發 | `-` | `-` |
| afterShow | 继承于`Overlay`, 遮罩打開動畫結束時觸發 | `event: HTMLElement` | `-` |
| afterClose | 继承于`Overlay`, 遮罩關閉動畫結束時觸發 | `event: HTMLElement` | `-` |
| onOverlayClick | 點擊遮罩觸發 | `event: MouseEvent` | `-` |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-popup-border-radius | 彈框的圓角值 | `24px` |
| \--nutui-popup-icon-size | 彈框關閉按鈕的大小 | `18px` |
| \--nutui-popup-title-padding | 標題欄的padding值 | `16px` |
| \--nutui-popup-title-font-size | 標題欄的字號 | `18px` |
| \--nutui-popup-subtitle-font-size | 子標題欄的字號 | `10px` |
| \--nutui-popup-title-height | 標題欄的高度 | `50px` |
| \--nutui-popup-title-border-bottom | 標題欄底部邊框 | `0` |
| \--nutui-popup-animation-duration | 彈框動畫的延時 | `0.3s` |
