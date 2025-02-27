# Button 按鈕

按鈕用於觸發一個操作，如提交表單。

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

支持 'xlarge'、 `large`、`normal`、`small`、`mini` 尺寸，默認為 `normal`。

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
| type | 按鈕的樣式 | `default` \| `primary` \| `warning` \| `danger` \| `success` \| `info` | `default` |
| size | 按鈕的尺寸 | `normal` \| `xlarge` \| `large` \| `small` \| `mini` | `normal` |
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
| \--nutui-button-border-radius | 按鈕的圓角設定 | `8px` |
| \--nutui-button-border-width | 按鈕的邊框寬度 | `1px` |
| \--nutui-button-normal-padding | size normal時的padding值 | `0px 12px` |
| \--nutui-button-default-height | type 為 default 的按鈕的高度 | `32px` |
| \--nutui-button-default-color | type 為 default 的按鈕的文字色 | `$color-title` |
| \--nutui-button-default-background-color | type 為 default 的按鈕的背景色 | `transparent` |
| \--nutui-button-default-border-color | type 為 default 的按鈕的邊框色 | `$color-text` |
| \--nutui-button-default-disabled | type 為 default 的按鈕的禁用色 | `$color-text-disabled` |
| \--nutui-button-default-disabled-color | type 為 default 的按鈕的停用文字色 | `$color-text-help` |
| \--nutui-button-default-padding | type 為 default 的按鈕的內邊距 | `0 12px` |
| \--nutui-button-default-font-size | type 為 default 的按鈕的字號 | `$font-size-s` |
| \--nutui-button-large-height | size 為 large 的按鈕的高度 | `40px` |
| \--nutui-button-large-font-size | size 為 large 的按鈕的字號 | `$font-size-base` |
| \--nutui-button-large-border-radius | size 為 large 的按鈕的圓角 | `12px` |
| \--nutui-button-small-padding | size 為 small 的按鈕的內邊距 | `0 8px` |
| \--nutui-button-small-height | size 為 small 的按鈕的高度 | `28px` |
| \--nutui-button-small-font-size | size 為 small 的按鈕的字號 | `$font-size-s` |
| \--nutui-button-small-border-radius | size 為 small 的按鈕的圓角 | `8px` |
| \--nutui-button-mini-padding | size 為 mini 的按鈕的內邊距 | `0 8px` |
| \--nutui-button-mini-height | size 為 mini 的按鈕的高度 | `24px` |
| \--nutui-button-mini-font-size | size 為 mini 的按鈕的字號 | `$font-size-xs` |
| \--nutui-button-mini-border-radius | size 為 mini 的按鈕的圓角 | `6px` |
| \--nutui-button-text-icon-margin | 有 icon按鈕的文字的邊距 | `4px` |

## 貢獻記錄

### Issues

> 更多已解決問題請查看 [Issues](https://api.github.com/repos/jdf2e/nutui-react/issues?q=is%3Aissue+state%3Aclosed+label%3AButton)

### Component Logs

- 🐛 支持 button block ([#2853](https://github.com/jdf2e/nutui-react/pull/2853)) `v2.7.3`
- 🐛 usecallback to fix render too many times, button,animatingnumbers,avatar,audio; and fix avatargroup when length > maxsize ([#2628](https://github.com/jdf2e/nutui-react/pull/2628)) `v2.6.22`
- ✨ feat(button): 新增 button 原始类型属性 ([#2195](https://github.com/jdf2e/nutui-react/pull/2195)) @Jiankian `v2.6.8`
- ✨ feat(button): 增加xlarge,按钮内图标大小追随按钮当前字号 ([#2037](https://github.com/jdf2e/nutui-react/pull/2037)) @xiaoyatong `v2.4.1`
- 💡 🌈 style(button): jmapp style ([#2019](https://github.com/jdf2e/nutui-react/pull/2019)) @zhehu1 `v2.4.1`

> 更多版本更新記錄請查看 [Releases](https://api.github.com/repos/jdf2e/nutui-react/releases?q=button&expanded=true)
