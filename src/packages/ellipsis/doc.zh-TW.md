# Ellipsis組件

展示空間不足時，隱去部分內容併用“...”替代。

## 引入

```tsx
import { Ellipsis } from '@nutui/nutui-react'
```

## 示例代碼

### 頭部省略

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 尾部省略

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 中間省略

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 多行省略

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 展開收起

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

## Ellipsis

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| content | 文本內容 | `string` | `-` |
| direction | 省略位置 | `start` \| `end` \| `middle` | `end` |
| rows | 展示幾行 | `number` | `1` |
| expandText | 展開操作的文案 | `string` | `-` |
| collapseText | 收起操作的文案 | `string` | `-` |
| symbol | 省略的符號 | `string` | `...` |
| lineHeight | 容器的行高 | `string` \| `number` | `20` |
| onClick | 文本點擊是觸發 | `() => void` | `-` |
| onChange | 點擊展開收起時觸發 | `(type: string) => void` | `-` |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-ellipsis-expand-collapse-color | 展示和收起的按鈕顏色 | `#3460fa` |

## 貢獻記錄

### Issues

> 更多已解決問題請查看 [Issues](https://github.com/jdf2e/nutui-react/issues?q=is%3Aissue%20state%3Aclosed%20Ellipsis)

### Component Logs

- 🐛 fix(ellipsis): 部分场景下的ref报错 ([#2200](https://github.com/jdf2e/nutui-react/pull/2200)) @Alex-huxiyang `v2.6.2`
- ✨ feat(ellipsis): rtl ([#2128](https://github.com/jdf2e/nutui-react/pull/2128)) @irisSong `v2.5.1`
- 🐛 fix(Ellipsis): 修复小程序环境下给Ellipsis设置字号后工作不正常的问题 ([#2078](https://github.com/jdf2e/nutui-react/pull/2078)) @FPG-Alan `v2.5.0`
- 🐛 fix(ellipsis): 修复设置行数超过内容高度时只显示一行内容的问题 ([#2028](https://github.com/jdf2e/nutui-react/pull/2028)) @boiboif `v2.4.1`
- 🐛 fix(ellipsis): 修复小程序文本省略问题 ([#1888](https://github.com/jdf2e/nutui-react/pull/1888)) @Eiinu `v2.3.8`

> 更多版本更新記錄請查看 [Releases](https://github.com/jdf2e/nutui-react//releases?q=ellipsis&expanded=true)
