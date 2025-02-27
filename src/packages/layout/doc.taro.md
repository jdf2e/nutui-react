# Layout 布局

用于快速进行布局

## 引入

```tsx
import { Row, Col } from '@nutui/nutui-react-taro'
```

## 示例代码

### 基础布局

:::demo

<CodeBlock src='taro/demo1.tsx'></CodeBlock>

:::

### 分栏间隔

:::demo

<CodeBlock src='taro/demo2.tsx'></CodeBlock>

:::

### Flex布局

:::demo

<CodeBlock src='taro/demo3.tsx'></CodeBlock>

:::

## Row

### props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 布局方式，可选值为flex | `string` | `-` |
| gutter | 列元素之间的间距（单位为px） | `string` \| `number` | `0` |
| justify | Flex 主轴对齐方式，可选值为 start end center space-around space-between | `string` | `start` |
| align | Flex 交叉轴对齐方式，可选值为 flex-start center flex-end | `string` | `flex-start` |
| wrap | Flex是否换行，可选值为 nowrap wrap reverse | `string` | `nowrap` |
| onClick | Fired when clicked | `event: MouseEvent, type: 'row' \| 'col'` | `-` |

## Col

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| span | 列元素宽度（共分为24份，例如设置一行3个，那么span值为8） | `string` \| `number` | `24` |
| offset | 列元素偏移距离 | `string` \| `number` | `0` |
| onClick | 点击时触发 | `event: MouseEvent, type: 'row' \| 'col'` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-col-default-margin-bottom | col 组件的下边距 | `15px` |

## 贡献记录

### Issues

> 更多已解决问题请查看 [Issues](https://github.com/jdf2e/nutui-react/issues?q=is%3Aissue%20state%3Aclosed%20Layout)

### Component Logs

- 🐛 fix(layout): demo拆解与规范 & 修复脚本在不同操作系统的正则匹配出错 ([#2016](https://github.com/jdf2e/nutui-react/pull/2016)) @Alex-huxiyang `v2.4.1`
- 💡 📖 docs(layout): 文档可读性优化 ([#1904](https://github.com/jdf2e/nutui-react/pull/1904)) @Alex.huxiyang `v2.3.9`
- 💡 📖 docs: 修改布局文档相关 @hanyuxinting `v2.0.0-alpha.17`
- 💡 📖 docs: 文档走查及问题修复-基础&布局组件([#1117](https://github.com/jdf2e/nutui-react/pull/1117)) @Eiinu `v2.0.0-alpha.17`

> 更多版本更新记录请查看 [Releases](https://github.com/jdf2e/nutui-react//releases?q=layout&expanded=true)
