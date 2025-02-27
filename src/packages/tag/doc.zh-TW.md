# Tag 標簽

用於標記和分類的標簽。

## 引入

```tsx
import { Tag } from '@nutui/nutui-react'
```

## 示例代碼

### 基礎用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 樣式風格

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 自定義顏色

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 圖文

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

## Tag

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| type | 標簽類型 | `primary` \| `default` \| `info` \| `success` \| `danger` \| `warning` | `default` |
| background | 標簽顏色 | `string` | `-` |
| color | 文本顏色，優先級高於color屬性 | `string` | `white` |
| plain | 是否為空心樣式 | `boolean` | `false` |
| round | 是否為圓角樣式 | `boolean` | `false` |
| mark | 是否為標記樣式 | `boolean` | `false` |
| closeable | 是否為可關閉標簽 | `boolean` | `false` |
| closeIcon | 關閉按鈕 | `ReactNode` | `null` |
| onClick | 點擊事件 | `(e: MouseEvent<HTMLDivElement>) => void` | `-` |
| onClose | 關閉事件 | `(e?: any) => void` | `-` |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-tag-padding | padding 值 | `0 2px` |
| \--nutui-tag-font-size | 字號 | `10px` |
| \--nutui-tag-border-radius | 圓角 | `2px` |
| \--nutui-tag-height | 高度 | `14px` |
| \--nutui-tag-color | 字色 | `#ffffff` |
| \--nutui-tag-border-width | 邊寬 | `1px` |
| \--nutui-tag-background-color | 背景色 | `$color-title` |
| \--nutui-tag-primary-background-color | 主色背景色 | `$color-primary-gradient-1` |
| \--nutui-tag-success-background-color | 成功背景色 | `#4fc08d` |
| \--nutui-tag-info-background-color | 信息背景色 | `$color-info` |
| \--nutui-tag-warning-background-color | 警告背景色 | `#f3812e` |
| \--nutui-tag-danger-background-color | 危險背景色 | `$color-primary` |
| \--nutui-tag-round-border-radius | round模式下的圓角 | `8px` |
| \--nutui-tag-mark-border-radius | mark模式下的圓角 | `0 8px 8px 0` |

## 貢獻記錄

### Issues

> 更多已解決問題請查看 [Issues](https://github.com/jdf2e/nutui-react/issues?q=is%3Aissue%20state%3Aclosed%20Tag)

### Component Logs

- 💡 📖 docs: 文档构建出现未闭合标签的错误提示 `v2.6.22`
- 💡 🏡 chore(tag): css样式变量修复 ([#2279](https://github.com/jdf2e/nutui-react/pull/2279)) @Alex-huxiyang `v2.6.6`
- 💡 📖 docs(tag):修复demo描述错误 ([#2204](https://github.com/jdf2e/nutui-react/pull/2204)) @jianhuagao `v2.6.2`
- 🐛 fix(tag): taro 下自定义icon无法展示 ([#2088](https://github.com/jdf2e/nutui-react/pull/2088)) @eiinu `v2.5.0`
- 💡 🛠 refactor(docs): 文档支持通过标签使用已有的 demo 代码 ([#1950](https://github.com/jdf2e/nutui-react/pull/1950)) @Alex.huxiyang `v2.3.12`

> 更多版本更新記錄請查看 [Releases](https://github.com/jdf2e/nutui-react//releases?q=tag&expanded=true)
