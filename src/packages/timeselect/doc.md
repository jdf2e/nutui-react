# TimeSelect 配送时间

用于配送时间选择

## 引入

```tsx
import { TimeSelect } from '@nutui/nutui-react'
```

## 示例代码

### 基础用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 自定义数据 key

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 支持多选

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 自定义使用场景

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

## TimeSelect

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| visible | 是否显示弹层 | `boolean` | `false` |
| title | 弹层标题 | `ReactNode` | `取件时间` |
| multiple | 是否支持多选 | `boolean` | `false` |
| defaultValue | 默认选中的值，非受控 | `DateType[]` | `-` |
| options | 数据 | `DateType[]` | `-` |
| optionKey | 配置数据中的关键字, `valueKey`, `textKey`, `childrenKey` | `{valueKey: 'value', textKey: 'text', childrenKey: 'children'}` | `-` |
| onSelect | 关闭遮罩之后的回调 | `(value: DateType[]) => void` | `-` |
| onDateChange | 点击左栏时的回调 | `(date: DateType, value: DateType[]) => void` | `-` |
| onTimeChange | 点击右侧选项时的回调 | `(time: TimeType, value: DateType[]) => void` | `-` |

### DateType

以下字段为默认值，会被 optionKey 的配置替换。

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 唯一标识符， 必填 | `string` | `-` |
| text | 左侧显示的文本， 必填 | `string` | `-` |
| children | 对应右侧的选项列表， 必填 | `TimeType[]` | `-` |

### TimeType

以下字段为默认值，会被 optionKey 的配置替换。

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 唯一标识符， 必填 | `string` | `-` |
| text | 右侧显示的选项内容， 必填 | `string` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-timeselect-date-width | date 宽度 | `140px` |
| \--nutui-timeselect-date-height | date 高度 | `40px` |
| \--nutui-timeselect-date-active-color | date 激活字体颜色 | `$color-title` |
| \--nutui-timeselect-time-width | time 宽度 | `100px` |
| \--nutui-timeselect-time-height | time 高度 | `50px` |
| \--nutui-timeselect-time-margin | time 外边距 | `0 10px 10px 0` |
| \--nutui-timeselect-time-background | time 背景 | `$color-background` |

## 贡献记录

### Issues

> 更多已解决问题请查看 [Issues](https://api.github.com/repos/jdf2e/nutui-react/issues?q=is%3Aissue+state%3Aclosed+label%3ATimeSelect)

### Component Logs

- 🐛 fix(timeselect): demo拆解与规范 ([#2087](https://github.com/jdf2e/nutui-react/pull/2087)) @Alex-huxiyang `v2.5.0`
- 💡 🛠 refactor(timeselect): 优化结构,简化css变量 ([#1732](https://github.com/jdf2e/nutui-react/pull/1732)) @xiaoyatong `v2.3.0`
- 💡 🛠 refactor: TimeSelect ([#1088](https://github.com/jdf2e/nutui-react/pull/1088)) @Eiinu `v2.0.0-alpha.15`

> 更多版本更新记录请查看 [Releases](https://api.github.com/repos/jdf2e/nutui-react/releases?q=timeselect&expanded=true)
