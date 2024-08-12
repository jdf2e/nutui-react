# NoticeBar 公告欄

用於循環播放展示一組消息通知。

## 引入

```tsx
import { NoticeBar } from '@nutui/nutui-react'
```

## 示例代碼

### 基礎用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 居中佈局，不支持滾動

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 滾動播放

通知欄的內容長度溢出時會自動開啟滾動播放，可通過 scrollable 屬性可以控制該行為

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 關閉模式

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 多行展示

文字較長時，可以通過設置 wrap 屬性來開啟多行展示。默認為不滾動，可以通過設置 scrollable 控制為滾動。

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### 自定義右側內容

增加自定義右側區域，區分rightIcon，更靈活配置。

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### 自定義主題

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### 垂直滾動

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

### 縱嚮模式：自定義左側圖標

:::demo

<CodeBlock src='h5/demo9.tsx'></CodeBlock>

:::

### 縱嚮模式：自定義滾動內容

:::demo

<CodeBlock src='h5/demo10.tsx'></CodeBlock>

:::

### 縱嚮模式：自定義右側圖標

:::demo

<CodeBlock src='h5/demo11.tsx'></CodeBlock>

:::

## NoticeBar

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| align | 佈局方式, 值為`center`時，不支持滾動 | `left` \| `center` | `left` |
| direction | 滾動的方嚮，可選 horizontal、vertical | `string` | `horizontal` |
| content | 提示的信息 | `string` | `-` |
| closeable | 是否啟用關閉模式 | `boolean` | `false` |
| leftIcon | 左邊的 icon，closeable 模式下默認為空 | `ReactNode` | `-` |
| rightIcon | 右邊的 icon，在 closeable 模式下默認為 `<Close />` | `ReactNode` | `-` |
| right | 區別於rightIcon，為右邊自定義區域，僅用於 direction='horizontal' 模式 | `ReactNode` | `-` |
| delay | 延時多少秒 | `string` \| `number` | `1` |
| scrollable | 是否可以滾動 | `boolean` | `true` |
| speed | 滾動速率 (px/s) | `number` | `50` |
| wrap | 是否開啟文本換行 | `boolean` | `false` |
| onClick | 外層點擊事件回調 | `(event: any) => void` | `-` |
| onClose | 關閉通知欄時觸發 | `(event: any) => void` | `-` |
| onItemClick | 垂直滾動多條數據時，點擊當前展示的信息時觸發 | `(event: any, value: any) => void` | `-` |

### Props（direction=vertical）

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| list | 縱嚮滾動數據列錶 | `Array` | `[]` |
| speed | 滾動的速度 | `number` | `50` |
| duration | 停留時間(毫秒) | `number` | `1000` |
| height | 每一個滾動列的高度(px) | `number` | `40` |
| closeable | 是否啟用右側關閉圖標，可以通過 rightIcon 自定義圖標 | `boolean` | `false` |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-noticebar-height | 高度 | `36px` |
| \--nutui-noticebar-background | 背景色 | `rgba(251, 248, 220, 1)` |
| \--nutui-noticebar-color | 文字色 | `#d9500b` |
| \--nutui-noticebar-font-size | 字號 | `$font-size-small` |
| \--nutui-noticebar-line-height | 行高 | `24px` |
| \--nutui-noticebar-box-padding | padding值 | `0 16px` |
| \--nutui-noticebar-border-radius | 圓角 | `0` |
| \--nutui-noticebar-wrap-padding | 多行展示的padding值 | `8px 16px` |
| \--nutui-noticebar-icon-gap | icon、text間距 | `4px` |
| \--nutui-noticebar-left-icon-width | 左側icon的寬度和高度的設定 | `16px` |
| \--nutui-noticebar-right-icon-width | 右側icon的寬度和高度的設定 | `16px` |
