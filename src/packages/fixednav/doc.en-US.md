# FixedNav hover navigation

Hovering and collecting experience interaction for quick navigation

## Import

```tsx
import { FixedNav } from '@nutui/nutui-react'
```

## Code

### Basic Usage

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Left side effect

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 取消背景遮罩

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### Custom use

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### Support drag and drop

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

## FixedNav

### Props

| Field | Description | Type | Default Value |
| --- | --- | --- | --- |
| visible | whether to open | `boolean` | `false` |
| list | Floating list content data | `Array` | `[]` |
| activeText | Collapse list button text | `string` | `Collapse navigation` |
| inactiveText | Expand List Button Text | `string` | `Quick Navigation` |
| type | navigation direction | `left` \| `right` | `right` |
| overlay | Whether to show the mask when expanding | `boolean` | `true` |
| position | fixed vertical position | `object` | `{top: 'auto', bottom: 'auto'}` |
| content | custom button | `ReactNode` | `-` |
| onChange | expand/collapse button callback | `value: boolean` | `-` |
| onSelect | Fired after selection | `item, event: MouseEvent}` | `-` |

## Theme

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-fixednav-background-color | background color | `$white` |
| \--nutui-fixednav-color | font color | `$color-title` |
| \--nutui-fixednav-button-background | button background | `$color-primary-gradient-1` |
| \--nutui-fixednav-index | zIndex | `201` |
| \--nutui-fixednav-item-active-color | active color | `$color-primary` |

## Contribution

### Issues

> View more [Issues](https://github.com/jdf2e/nutui-react/issues?q=is%3Aissue%20state%3Aclosed%20FixedNav)

### Component Logs

- 🐛 fix(fixednav): 可拖拽元素样式缺失 ([#2391](https://github.com/jdf2e/nutui-react/pull/2391)) @oasis-cloud `v2.6.11`
- 🐛 fix(fixedNav): demo拆解与规范 ([#2048](https://github.com/jdf2e/nutui-react/pull/2048)) @Alex-huxiyang `v2.4.2`
- ✨ feat(fixednav): add the list icon for ReactNode ([#1786](https://github.com/jdf2e/nutui-react/pull/1786)) @sunsunmonkey `v2.3.2`
- 💡 🛠 refactor: 类型文件统一为 types，增加 fixednavitem 类型 ([#1789](https://github.com/jdf2e/nutui-react/pull/1789)) @oasis-cloud `v2.3.2`
- 💡 style(fixednav): 废弃 bem 规范, 修订 css 变量 ([#1702](https://github.com/jdf2e/nutui-react/pull/1702)) @xiaoyatong `v2.3.0`

> View more [Releases](https://github.com/jdf2e/nutui-react//releases?q=fixednav&expanded=true)
