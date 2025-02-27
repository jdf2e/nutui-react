# TimeSelect 配送時間

用於配送時間選擇

## 引入

```tsx
import { TimeSelect } from '@nutui/nutui-react'
```

## 示例代碼

### 基礎用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 自定義數據 key

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 支持多選

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 自定義使用場景

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

## TimeSelect

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| visible | 是否顯示彈層 | `boolean` | `false` |
| title | 彈層標題 | `ReactNode` | `取件時間` |
| multiple | 是否支持多選 | `boolean` | `false` |
| defaultValue | 默認選中的值，非受控 | `DateType[]` | `-` |
| options | 數據 | `DateType[]` | `-` |
| optionKey | 配置數據中的關鍵字, `valueKey`, `textKey`, `childrenKey` | `{valueKey: 'value', textKey: 'text', childrenKey: 'children'}` | `-` |
| onSelect | 關閉遮罩之後的回調 | `(value: DateType[]) => void` | `-` |
| onDateChange | 點擊左欄時的回調 | `(date: DateType, value: DateType[]) => void` | `-` |
| onTimeChange | 點擊右側選項時的回調 | `(time: TimeType, value: DateType[]) => void` | `-` |

### DateType

以下字段為默認值，會被 optionKey 的配置替換。

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| value | 唯一標識符， 必填 | `string` | `-` |
| text | 左側顯示的文本， 必填 | `string` | `-` |
| children | 對應右側的選項列錶， 必填 | `TimeType[]` | `-` |

### TimeType

以下字段為默認值，會被 optionKey 的配置替換。

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| value | 唯一標識符， 必填 | `string` | `-` |
| text | 右側顯示的選項內容， 必填 | `string` | `-` |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-timeselect-date-width | date 宽度 | `140px` |
| \--nutui-timeselect-date-height | date 高度 | `40px` |
| \--nutui-timeselect-date-active-color | date 激活字体颜色 | `$color-title` |
| \--nutui-timeselect-time-width | time 宽度 | `100px` |
| \--nutui-timeselect-time-height | time 高度 | `50px` |
| \--nutui-timeselect-time-margin | time 外边距 | `0 10px 10px 0` |
| \--nutui-timeselect-time-background | time 背景 | `$color-background` |

## 貢獻記錄

### Issues

> 更多已解決問題請查看 [Issues](https://github.com/jdf2e/nutui-react/issues?q=is%3Aissue%20state%3Aclosed%20TimeSelect)

### Component Logs

- 🐛 fix(timeselect): demo拆解与规范 ([#2087](https://github.com/jdf2e/nutui-react/pull/2087)) @Alex-huxiyang `v2.5.0`
- 💡 🛠 refactor(timeselect): 优化结构,简化css变量 ([#1732](https://github.com/jdf2e/nutui-react/pull/1732)) @xiaoyatong `v2.3.0`
- 💡 🛠 refactor: TimeSelect ([#1088](https://github.com/jdf2e/nutui-react/pull/1088)) @Eiinu `v2.0.0-alpha.15`

> 更多版本更新記錄請查看 [Releases](https://github.com/jdf2e/nutui-react//releases?q=timeselect&expanded=true)
