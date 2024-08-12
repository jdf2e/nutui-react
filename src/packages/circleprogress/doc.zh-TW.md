# CircleProgress 環形進度條

展示操作或任務的當前進度。

## 引入

```tsx
import { CircleProgress } from '@nutui/nutui-react'
```

## 示例代碼

### 基礎用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 環形進度條自定義樣式

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 環形進度條自定義顏色(支持漸變色)

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 環形進度條自定義大小

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 環形進度條自定義內容

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### 動態改變環形進度條的進度

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

## CircleProgress

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| percent | 百分比 | `number` \| `string` | `必傳項，無默認值` |
| strokeWidth | 圓弧的寬度 | `number` \| `string` | `5` |
| radius | 半徑 | `number` \| `string` | `50` |
| color | 圓環進度條顏色，傳入對象格式可以定義漸變色 | `object \| string` | `-` |
| background | 圓環軌道顏色 | `string` | `#d9d9d9` |
| strokeLinecap | 圓環進度條端點形狀 | `butt` \| `round` \| `square` \| `inherit` | `round` |
| clockwise | 是否順時針展示 | `boolean` | `true` |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-circleprogress-primary-color | 環形進度條填充部分的顏色 | `$color-primary` |
| \--nutui-circleprogress-path-color | 環形進度條軌道的顏色 | `#e5e9f2` |
| \--nutui-circleprogress-text-color | 環形進度條軌道內容區的顏色 | `$color-title` |
| \--nutui-circleprogress-text-size | 環形進度條軌道內容區的大小 | `$font-size-large` |
