# ActionSheet 动作面板

从底部弹出的动作菜单面板。

## 引入

```tsx
import { ActionSheet } from '@nutui/nutui-react-taro'
```

## 示例代码

### 基础用法

:::demo

<CodeBlock src='taro/demo1.tsx'></CodeBlock>

:::

### 展示取消按钮

:::demo

<CodeBlock src='taro/demo2.tsx'></CodeBlock>

:::

### 展示描述信息

:::demo

<CodeBlock src='taro/demo3.tsx'></CodeBlock>

:::

### 选项状态

:::demo

<CodeBlock src='taro/demo4.tsx'></CodeBlock>

:::

### 自定义内容

:::demo

<CodeBlock src='taro/demo5.tsx'></CodeBlock>

:::

### 自定义key

:::demo

<CodeBlock src='taro/demo6.tsx'></CodeBlock>

:::

## ActionSheet

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| visible | 遮罩层可见 | `boolean` | `false` |
| title | 设置列表面板标题 | `string` | `-` |
| description | 设置列表面板副标题/描述 | `string` | `-` |
| options | 列表项 | `Array` | `[]` |
| optionKey | 列表项的自定义设置 | `{ [key: string]: string }` | `-` |
| cancelText | 取消文案 | `string` | `取消` |
| onSelect | 选择之后触发 | `(item: any, index: number) => void` | `-` |
| onCancel | 点击取消文案时触发 | `() => void` | `-` |

### options

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 列表项的标题key值 | `string` | `-` |
| description | 列表项的描述key值 | `string` | `-` |
| danger | 高亮颜色 | `string` | `$color-primary` |
| disabled | 禁用状态 | `string` | `$disabled-color` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-actionsheet-background-color | 背景色 | `$color-background-overlay` |
| \--nutui-actionsheet-border-radius | 列表和取消按钮圆角 | `0` |
| \--nutui-actionsheet-border-color | 标题和取消位置的border色值 | `#f6f6f6` |
| \--nutui-actionsheet-item-text-align | 列表项的文字对齐方式 | `center` |
| \--nutui-actionsheet-item-border-bottom | 列表项的底部border | `none` |
| \--nutui-actionsheet-item-line-height | 列表项行高 | `24px` |
| \--nutui-actionsheet-item-color | 列表项字色 | `$color-title` |
| \--nutui-actionsheet-item-danger | 列表项danger字色 | `$color-primary` |

## 贡献记录

### Issues

> 更多已解决问题请查看 [Issues](https://github.com/jdf2e/nutui-react/issues?q=is%3Aissue%20state%3Aclosed%20ActionSheet)

### Component Logs

- 🐛 ActionSheet 增加安全区处理 ([#2286](https://github.com/jdf2e/nutui-react/pull/2286)) @xiaoyatong `v2.6.7`
- 🐛 fix(actionsheet): 去掉无意义的 padding，popup 已不再暴露 ([#2285](https://github.com/jdf2e/nutui-react/pull/2285)) @xiaoyatong `v2.6.7`
- 🐛 fix(actionsheet): demo拆解与规范 ([#2124](https://github.com/jdf2e/nutui-react/pull/2124)) @ZissyW `v2.5.1`
- 🐛 fix(actionsheet): 关闭弹窗后内容显示在页面，优化 popup 相关属性传递 ([#1954](https://github.com/jdf2e/nutui-react/pull/1954)) @onlyling `v2.3.11`
- 💡 🛠 refactor: actionSheet ([#1053](https://github.com/jdf2e/nutui-react/pull/1053)) @xiaoyatong `v2.0.0-alpha.12`

> 更多版本更新记录请查看 [Releases](https://github.com/jdf2e/nutui-react//releases?q=actionsheet&expanded=true)
