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

### 縱嚮模式：自定義右側圖標，動態變更滾動內容

:::demo

<CodeBlock src='h5/demo11.tsx'></CodeBlock>

:::

### 信息標與操作按鈕

:::demo

<CodeBlock src='h5/demo12.tsx'></CodeBlock>

:::

### 自定義配圖

:::demo

<CodeBlock src='h5/demo14.tsx'></CodeBlock>

:::

### 自動關閉

:::demo

<CodeBlock src='h5/demo13.tsx'></CodeBlock>

:::

## NoticeBar

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| align | 佈局方式, 值為`center`時，不支持滾動 | `left` \| `center` | `left` |
| direction | 滾動的方嚮，可選 horizontal、vertical | `string` | `horizontal` |
| content | 提示的信息 | `string` | `-` |
| description | 副文本內容，顯示在主文本下方 | `ReactNode` | `-` |
| tag | 信息標圖標，顯示在文案右側，尺寸 12×12 | `ReactNode` | `-` |
| action | 操作按鈕區域，支持弱行動（文字鏈接）和強行動（按鈕），最大寬度 99px | `ReactNode` | `-` |
| closeable | 是否啟用關閉模式 | `boolean` | `false` |
| autoClose | 自動關閉延時（毫秒），0 或不傳為手動關閉 | `number` | `0` |
| leftIcon | 左邊的 icon，closeable 模式下默認為空 | `ReactNode` | `-` |
| rightIcon | 右邊的 icon，在 closeable 模式下默認為 `<MaskClose />` | `ReactNode` | `-` |
| right | ~~已廢棄，建議使用 action 替代~~ 右邊自定義區域，僅用於 direction='horizontal' 模式 | `ReactNode` | `-` |
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
| \--nutui-noticebar-height | 高度 | `40px` |
| \--nutui-noticebar-background | 背景色 | `$color-background-overlay` |
| \--nutui-noticebar-color | 文字色 | `$color-title` |
| \--nutui-noticebar-icon-color | 圖標色 | `$color-primary` |
| \--nutui-noticebar-font-size | 字號 | `$font-size-base` |
| \--nutui-noticebar-line-height | 行高 | `20px` |
| \--nutui-noticebar-box-padding | padding值 | `2px 8px` |
| \--nutui-noticebar-border-radius | 圓角 | `0` |
| \--nutui-noticebar-wrap-padding | 多行展示的padding值 | `9px 8px` |
| \--nutui-noticebar-icon-gap | icon、text間距 | `6px` |
| \--nutui-noticebar-left-icon-width | 左側icon的寬度和高度的設定 | `24px` |
| \--nutui-noticebar-left-icon-wrap-width | 雙行模式下icon的寬度和高度 | `32px` |
| \--nutui-noticebar-right-icon-width | 右側icon的寬度和高度的設定 | `16px` |
| \--nutui-noticebar-close-size | 關閉按鈕尺寸 | `20px` |
| \--nutui-noticebar-tag-size | 信息標尺寸 | `12px` |
| \--nutui-noticebar-tag-gap | 信息標與文本間距 | `4px` |
| \--nutui-noticebar-action-max-width | 操作按鈕最大寬度 | `99px` |
| \--nutui-noticebar-action-gap | 操作按鈕與文本間距 | `12px` |
| \--nutui-noticebar-action-font-size | 操作按鈕字號 | `$font-size-xs` |
| \--nutui-noticebar-description-font-size | 副文本字號 | `11px` |
| \--nutui-noticebar-description-color | 副文本顏色 | `#666` |
| \--nutui-noticebar-description-line-height | 副文本行高 | `16px` |
| \--nutui-noticebar-left-icon-border-radius | 左側圖標圓角 | `4px` |
| \--nutui-noticebar-close-color | 關閉按鈕顏色 | `$color-text-help` |
| \--nutui-noticebar-close-icon-size | 關閉圖標尺寸 | `10px` |

<Contribution name="NoticeBar" />
