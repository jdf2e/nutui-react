# Layout 佈局

用於快速進行佈局

## 引入

```tsx
import { Row, Col } from '@nutui/nutui-react'
```

## 示例代碼

### 基礎佈局

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 分欄間隔

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### Flex佈局

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

## Row

### props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| type | 佈局方式，可選值為flex | `string` | `-` |
| gutter | 列元素之間的間距（單位為px） | `string` \| `number` | `0` |
| justify | Flex 主軸對齊方式，可選值為 start end center space-around space-between | `string` | `start` |
| align | Flex 交叉軸對齊方式，可選值為 flex-start center flex-end | `string` | `flex-start` |
| wrap | Flex是否換行，可選值為 nowrap wrap reverse | `string` | `nowrap` |
| onClick | Fired when clicked | `event: MouseEvent, type: 'row' \| 'col'` | `-` |

## Col

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| span | 列元素寬度（共分為24份，例如設置一行3個，那麽span值為8） | `string` \| `number` | `24` |
| offset | 列元素偏移距離 | `string` \| `number` | `0` |
| onClick | 點擊時觸發 | `event: MouseEvent, type: 'row' \| 'col'` | `-` |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-col-default-margin-bottom | col 組件的下邊距 | `15px` |

## 貢獻記錄

### Issues

> 更多已解決問題請查看 [Issues](https://github.com/jdf2e/nutui-react/issues?q=is%3Aissue%20state%3Aclosed%20Layout)

### Component Logs

- 🐛 fix(layout): demo拆解与规范 & 修复脚本在不同操作系统的正则匹配出错 ([#2016](https://github.com/jdf2e/nutui-react/pull/2016)) @Alex-huxiyang `v2.4.1`
- 💡 📖 docs(layout): 文档可读性优化 ([#1904](https://github.com/jdf2e/nutui-react/pull/1904)) @Alex.huxiyang `v2.3.9`
- 💡 📖 docs: 修改布局文档相关 @hanyuxinting `v2.0.0-alpha.17`
- 💡 📖 docs: 文档走查及问题修复-基础&布局组件([#1117](https://github.com/jdf2e/nutui-react/pull/1117)) @Eiinu `v2.0.0-alpha.17`

> 更多版本更新記錄請查看 [Releases](https://github.com/jdf2e/nutui-react//releases?q=layout&expanded=true)
