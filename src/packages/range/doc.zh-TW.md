# Range 區間選擇器

滑動輸入條，用於在給定的範圍內選擇一個值。

## 引入

```tsx
import { Range } from '@nutui/nutui-react'
```

## 示例代碼

### 基礎用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 受控方式

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 自定義描述

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 雙滑塊

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 指定範圍

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### 設置步長

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### 隱藏範圍

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### 隱藏標簽

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

### 禁用

:::demo

<CodeBlock src='h5/demo9.tsx'></CodeBlock>

:::

### 自定義樣式

:::demo

<CodeBlock src='h5/demo10.tsx'></CodeBlock>

:::

### 自定義按鈕

:::demo

<CodeBlock src='h5/demo11.tsx'></CodeBlock>

:::

### 垂直方嚮

:::demo

<CodeBlock src='h5/demo12.tsx'></CodeBlock>

:::

### 刻度標記

:::demo

<CodeBlock src='h5/demo13.tsx'></CodeBlock>

:::

## Range

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| defaultValue | 默認進度百分比，非受控 | `number` \| `number[]` | `0` |
| value | 當前進度百分比，受控 | `number` \| `number[]` | `0` |
| range | 是否開啟雙滑塊模式 | `boolean` | `false` |
| max | 最大值 | `number` | `100` |
| min | 最小值 | `number` | `0` |
| maxDescription | 最大值描述，傳 `null` 錶示隱藏 | `ReactNode` | `-` |
| minDescription | 最小值描述，傳 `null` 錶示隱藏 | `ReactNode` | `-` |
| currentDescription | 當前值描述，傳 `null` 錶示隱藏 | `((value) => ReactNode)` \| `null` | `-` |
| step | 步長 | `number` | `1` |
| disabled | 是否禁用滑塊 | `boolean` | `false` |
| vertical | 是否豎嚮展示 | `boolean` | `false` |
| marks | 刻度標示 | `Object{key: number}` | `{}` |
| button | 自定義滑動按鈕 | `ReactNode` | `-` |
| onChange | 進度實時變化，通常在受控方式中與 value 一起使用 | `(value) => void` | `-` |
| onStart | 開始拖動時觸發 | `-` | `-` |
| onEnd | 結束拖動時觸發 | `(value) => void` | `-` |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-range-color | 字體顏色 | `$color-title` |
| \--nutui-range-margin | 進度條外邊距 | `15px` |
| \--nutui-range-height | 進度條的寬度 | `4px` |
| \--nutui-range-active-color | 激活顏色 | `$color-primary` |
| \--nutui-range-inactive-color | 未激活顏色 | `#fa958c` |
| \--nutui-range-button-background | 按鈕背景 | `$white` |
| \--nutui-range-button-width | 按鈕寬度 | `24px` |
| \--nutui-range-button-height | 按鈕高度 | `24px` |
| \--nutui-range-button-border | 按鈕邊框 | `1px solid $color-primary` |

## 貢獻記錄

### Issues

> 更多已解決問題請查看 [Issues](https://github.com/jdf2e/nutui-react/issues?q=is%3Aissue%20state%3Aclosed%20Range)

### Component Logs

- 🐛 fix(range): usememo ([#2638](https://github.com/jdf2e/nutui-react/pull/2638)) `v2.6.22`
- 🐛 fix(range): refactor & lint fixed ([#2637](https://github.com/jdf2e/nutui-react/pull/2637)) `v2.6.22`
- 🐛 fix(range): demo拆解与规范 ([#2139](https://github.com/jdf2e/nutui-react/pull/2139)) @ShuchenEason `v2.5.1`
- 🐛 fix(range): touchmove 回调中 rect 获取失败时终止 ([#2029](https://github.com/jdf2e/nutui-react/pull/2029)) @eiinu `v2.4.1`
- ✨ feat(rtl): support progress & range ([#1961](https://github.com/jdf2e/nutui-react/pull/1961)) @Eiinu `v2.3.12`

> 更多版本更新記錄請查看 [Releases](https://github.com/jdf2e/nutui-react//releases?q=range&expanded=true)
