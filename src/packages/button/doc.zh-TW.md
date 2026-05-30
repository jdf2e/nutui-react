# Button 按鈕

接收用戶的點擊或觸摸操作，觸發對應的功能或指令。幫助用戶完成提交、確認、取消、跳轉、刪除等關鍵行為，是最基礎、最直接的交互入口。

## 引入

```tsx
import { Button } from '@nutui/nutui-react'
```

## 示例代碼

### 按鈕類型

按鈕支持 `default`、`primary`、`info`、`warning`、`danger`、`success` 六種類型，默認為 `default`。

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 填充模式

按鈕支援 `solid`、 `outline`、 `dashed`、`none`四種類型，預設為 `solid`。

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 圖標按鈕

透過 `icon` 屬性來設定按鈕圖標，並提供`rightIcon`屬性使圖標在右側顯示。

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 禁用狀態

通過 `disabled` 屬性來禁用按鈕，禁用狀態下按鈕不可點擊。

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 按鈕形狀

通過 `shape` 屬性設置按鈕形狀，支持圓形、方形按鈕，默認為圓形。

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### 加載狀態

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### 按鈕尺寸

支持外部開源的語義化尺寸 `xlarge`、 `large`、`normal`、`small`、`mini`，以及京東內部設計規範的數字尺寸體系 `48`、`44`、`40`、`36`、`32`、`28`、`24`，默認為 `normal`。

| 尺寸類別 | 京東內部數字尺寸 | 外部開源語義尺寸 | 高度 (Height) | 內邊距 (Padding) | 字號 (Font-Size) | 適用場景說明 |
| --- | --- | --- | --- | --- | --- | --- |
| 特定大按鈕 | `48` | `xlarge` | 48px | 0 16px | 15px | 頁面底部吸底操作 |
| 頁面主按鈕 | `44` | **(無)** | 44px | 0 16px | 15px | 頁面級主要提交、確認操作 |
| 區塊主按鈕 | `40` | `large` | 40px | 0 16px | 15px | 頁面局部區塊內的主要操作 |
| 常規按鈕 | `36` | **(無)** | 36px | 0 12px | 14px | 常規列表或表單使用 |
| 默認按鈕 | `32` | `normal` | 32px | 0 12px | 12px | 默認的基礎組件操作 |
| 次級按鈕 | `28` | `small` | 28px | 0 8px | 12px | 頁面內的次級輔助操作或標籤 |
| 極小按鈕 | `24` | `mini` | 24px | 0 8px | 11px | 極小空間內的特殊操作 |

> [!NOTE]
> `xlarge`、`large`、`normal`、`small`、`mini` 屬於外部開源組件庫通用的語義化尺寸。數字體系尺寸旨在精準貼合京東內部最新的 V16 設計規範，兩者在底層互相兼容並完美複用。

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### 塊級元素

按鈕在默認情況下為行內塊級元素，通過 `block` 屬性可以將按鈕的元素類型設置為塊級元素，常用來實現通欄按鈕。

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

### 自定義顏色

通過 color 屬性可以自定義按鈕的顏色。

:::demo

<CodeBlock src='h5/demo9.tsx'></CodeBlock>

:::

## Button

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| type | 按鈕的樣式 | `default` \| `primary` \| `warning` \| `danger` \| `success` \| `info` \| `golden` | `default` |
| size | 按鈕的尺寸 | `normal` \| `xlarge` \| `large` \| `small` \| `mini` \| `48` \| `44` \| `40` \| `36` \| `32` \| `28` \| `24` | `normal` |
| shape | 按鈕的形狀 | `square` \| `round` | `round` |
| color | 按鈕顏色，支援傳入 linear-gradient 漸層色, outline 和 dashed 模式下設定的是 color，其他情況設定的是background，建議使用CSS變數實現的顏色配置 | `string` | `-` |
| fill | 填充模式 | `solid` \| `outline` \| `dashed` \| `none` | `solid` |
| disabled | 是否禁用按鈕 | `boolean` | `false` |
| block | 是否為塊級元素 | `boolean` | `false` |
| icon | 按鈕圖標 | `ReactNode` | `-` |
| rightIcon | 右侧按鈕图标 | `ReactNode` | `-` |
| loading | 按鈕loading狀態 | `boolean` | `false` |
| nativeType | 按鈕原始类型 | `submit` \| `reset` \| `button` | `button` |
| onClick | 點擊按鈕時觸發 | `(e: MouseEvent<HTMLButtonElement>) => void` | `-` |

## 主題定製

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-button-border-radius | 按鈕的圓角設置 | `$button-border-radius` |
| \--nutui-button-border-width | 按鈕的邊框寬度 | `1px` |
| \--nutui-button-normal-padding | size normal時的padding值 | `0px 12px` |
| \--nutui-button-default-height | type 為 default 的按鈕的高度 | `32px` |
| \--nutui-button-default-color | type 為 default 的按鈕的文本色 | `$color-title` |
| \--nutui-button-default-background-color | type 為 default 的按鈕的背景色 | `transparent` |
| \--nutui-button-default-border-color | type 為 default 的按鈕的邊框色 | `$color-text` |
| \--nutui-button-default-disabled | type 為 default 的按鈕的禁用色 | `$color-text-disabled` |
| \--nutui-button-default-disabled-color | type 為 default 的按鈕的禁用文本色 | `$color-text-help` |
| \--nutui-button-default-padding | type 為 default 的按鈕的內邊距 | `0 12px` |
| \--nutui-button-default-font-size | type 為 default 的按鈕的字號 | `$font-size-s` |
| \--nutui-button-xlarge-height | size 為 xlarge 的按鈕的高度 | `48px` |
| \--nutui-button-xlarge-font-size | size 為 lxarge 的按鈕的字號 | `$font-size-xl` |
| \--nutui-button-xlarge-border-radius | size 為 xlarge 的按鈕的圓角 | `$button-xlarge-border-radius` |
| \--nutui-button-large-height | size 為 large 的按鈕的高度 | `40px` |
| \--nutui-button-large-font-size | size 為 large 的按鈕的字號 | `$font-size-base` |
| \--nutui-button-large-border-radius | size 為 large 的按鈕的圓角 | `$button-large-border-radius` |
| \--nutui-button-small-padding | size 為 small 的按鈕的內邊距 | `0 8px` |
| \--nutui-button-small-height | size 為 small 的按鈕的高度 | `28px` |
| \--nutui-button-small-font-size | size 為 small 的按鈕的字號 | `$font-size-s` |
| \--nutui-button-small-border-radius | size 為 small 的按鈕的圓角 | `$button-small-border-radius` |
| \--nutui-button-mini-padding | size 為 mini 的按鈕的內邊距 | `0 8px` |
| \--nutui-button-mini-height | size 為 mini 的按鈕的高度 | `24px` |
| \--nutui-button-mini-font-size | size 為 mini 的按鈕的字號 | `$font-size-xs` |
| \--nutui-button-mini-border-radius | size 為 mini 的按鈕的圓角 | `$button-mini-border-radius` |
| \--nutui-button-text-icon-margin | 帶 icon按鈕的文本的邊距 | `4px` |

<Contribution name="Button" />
