# SafeArea 安全区

在全面屏下提供自适应的边距调整。当网页被全屏展示时，可借助安全区实现自动适配。

## 引入

```tsx
import { SafeArea } from '@nutui/nutui-react-taro'
```

## 示例代码

### 基础用法

:::demo

<CodeBlock src='taro/demo1.tsx'></CodeBlock>

:::

## SafeArea

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| position | 安全区的位置 | `'top' \| 'bottom'` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-safe-area-multiple | 显示的倍数 | `1` |

## 贡献记录

### Issues

> 更多已解决问题请查看 [Issues](https://api.github.com/repos/jdf2e/nutui-react/issues?q=is%3Aissue+state%3Aclosed+label%3ASafeArea)

### Component Logs

- 🐛 safearea for ac ([#2293](https://github.com/jdf2e/nutui-react/pull/2293)) @xiaoyatong `v2.6.8`
- ✨ feat(safearea): 新增安全区组件 ([#1642](https://github.com/jdf2e/nutui-react/pull/1642)) @oasis-cloud `v2.1.0`

> 更多版本更新记录请查看 [Releases](https://api.github.com/repos/jdf2e/nutui-react/releases?q=safearea&expanded=true)
