# Radio 單選按鈕

用於在一組備選項中進行單選

## 引入

```tsx
import { Radio } from '@nutui/nutui-react'
```

## 示例代碼

### 基礎用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Group 模式下禁用某一項

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### Group 模式下禁用全部選項

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### Group 模式下禁用某一項

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### Group 模式下禁用全部選項

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

## 水準使用

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

## 自定義尺寸

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

## 自定義圖標

建議 `icon` `activeIcon` 一起修改

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

## 自定義圖標，通過Group實現列表形式

建議 `icon` `activeIcon` 一起修改

:::demo

<CodeBlock src='h5/demo9.tsx'></CodeBlock>

:::

## 觸發事件

:::demo

<CodeBlock src='h5/demo10.tsx'></CodeBlock>

:::

## 配置 options 渲染單選按鈕

:::demo

<CodeBlock src='h5/demo11.tsx'></CodeBlock>

:::

## 設置形狀

:::demo

<CodeBlock src='h5/demo12.tsx'></CodeBlock>

:::

## Radio

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| checked | 指定當前是否選中 | `boolean` | `-` |
| defaultChecked | 初始是否選中 | `boolean` | `-` |
| disabled | 是否禁用選擇 | `boolean` | `false` |
| value | 攜帶的標識值，用於 Group 模式 | `string` \| `number` | `-` |
| labelPosition | 文本所在的位置 | `left` \| `right` | `right` |
| icon | <a href="#/icon">圖標名稱</a>，選中前(建議和`activeIcon`一起修改) | `ReactNode` | `'CheckNormal'` |
| activeIcon | <a href="#/icon">圖標名稱</a>，選中後(建議和`icon`一起修改) | `ReactNode` | `'CheckChecked'` |
| shape | 形狀 | `button` \| `round` | `round` |
| onChange | 選中態變化時觸發 | `(checked: boolean) => void` | `-` |

## Radio.Group

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| value | 當前選中項的標識符 | `string` \| `number` | `-` |
| labelPosition | 文本所在的位置 | `left` \| `right` | `right` |
| disabled | 是否禁用 | `boolean` | `false` |
| shape | 形状 | `button` \| `round` | `-` |
| direction | 使用橫縱方嚮 | `horizontal` \| `vertical` | `vertical` |
| options | 配置 options 渲染單選按鈕 | `Array<{ label: string value: string disabled?: boolean }>` | `-` |
| onChange | 值變化時觸發 | `(value: string \| number) => void` | `-` |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-radio-icon-font-size | icon字號 | `18px` |
| \--nutui-radio-label-font-size | 字號 | `14px` |
| \--nutui-radio-label-color | 字體顏色 | `$color-title` |
| \--nutui-radio-label-margin-left | label 的左外邊距 | `6px` |
| \--nutui-radio-button-font-size | shape為button的字號 | `12px` |
| \--nutui-radio-button-color | 字體顏色 | `$color-text` |
| \--nutui-radio-button-background | shape為button的背景色 | `$color-background` |
| \--nutui-radio-button-active-border | shape為button選中態的邊框 | `1px solid $color-primary` |
| \--nutui-radio-button-padding | shape為button的內邊距 | `5px 18px` |
| \--nutui-radio-button-border-radius | shape為button的圓角 | `15px` |
| \--nutui-radiogroup-radio-margin | Group模式下每個 radio 的外邊距 | `0 20px 5px 0` |
| \--nutui-radiogroup-radio-label-margin | Group模式下每個 radio 中的 label 外邊距 | `0 5px 0 5px` |
