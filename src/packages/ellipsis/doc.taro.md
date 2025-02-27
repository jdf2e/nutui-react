# Ellipsis组件

展示空间不足时，隐去部分内容并用“...”替代。

## 引入

```tsx
import { Ellipsis } from '@nutui/nutui-react-taro'
```

## 示例代码

### 头部省略

:::demo

<CodeBlock src='taro/demo1.tsx'></CodeBlock>

:::

### 尾部省略

:::demo

<CodeBlock src='taro/demo2.tsx'></CodeBlock>

:::

### 中间省略

:::demo

<CodeBlock src='taro/demo3.tsx'></CodeBlock>

:::

### 多行省略

:::demo

<CodeBlock src='taro/demo4.tsx'></CodeBlock>

:::

### 展开收起

:::demo

<CodeBlock src='taro/demo5.tsx'></CodeBlock>

:::

### 自定义宽度

:::demo

<CodeBlock src='taro/demo6.tsx'></CodeBlock>

:::

## Ellipsis

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| content | 文本内容 | `string` | `-` |
| direction | 省略位置 | `start` \| `end` \| `middle` | `end` |
| rows | 展示几行 | `number` | `1` |
| expandText | 展开操作的文案 | `string` | `-` |
| collapseText | 收起操作的文案 | `string` | `-` |
| symbol | 省略的符号 | `string` | `...` |
| lineHeight | 容器的行高 | `string` \| `number` | `20` |
| onClick | 文本点击时触发 | `() => void` | `-` |
| onChange | 点击展开收起时触发 | `(type: string) => void` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-ellipsis-expand-collapse-color | 展示和收起的按钮颜色 | `#3460fa` |

## 贡献记录

### Issues

> 更多已解决问题请查看 [Issues](https://github.com/jdf2e/nutui-react/issues?q=is%3Aissue%20state%3Aclosed%20Ellipsis)

### Component Logs

- 🐛 fix(ellipsis): 部分场景下的ref报错 ([#2200](https://github.com/jdf2e/nutui-react/pull/2200)) @Alex-huxiyang `v2.6.2`
- ✨ feat(ellipsis): rtl ([#2128](https://github.com/jdf2e/nutui-react/pull/2128)) @irisSong `v2.5.1`
- 🐛 fix(Ellipsis): 修复小程序环境下给Ellipsis设置字号后工作不正常的问题 ([#2078](https://github.com/jdf2e/nutui-react/pull/2078)) @FPG-Alan `v2.5.0`
- 🐛 fix(ellipsis): 修复设置行数超过内容高度时只显示一行内容的问题 ([#2028](https://github.com/jdf2e/nutui-react/pull/2028)) @boiboif `v2.4.1`
- 🐛 fix(ellipsis): 修复小程序文本省略问题 ([#1888](https://github.com/jdf2e/nutui-react/pull/1888)) @Eiinu `v2.3.8`

> 更多版本更新记录请查看 [Releases](https://github.com/jdf2e/nutui-react//releases?q=ellipsis&expanded=true)
