# Tour

#

A bubble component used to guide the user through the product's capabilities.

## Import

```tsx
import { Tour } from '@nutui/nutui-react'
```

## Demo

### Basic Usage

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Custom Style

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### Custom Offset

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### Custom Content

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### Steps

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

## Tour

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| visible | Whether to display the boot eject layer | `boolean` | `false` |
| type | Tour type | `step` \| `tile` | `step` |
| list | Boot Step Content | `TourList[]` | `-` |
| offset | The offset of the hollow mask relative to the target element | `number[]` | `[8, 10]` |
| location | Location of popover[location](https://nutui.jd.com/h5/react/2x/#/zh-CN/component/popover) | `string` | `bottom` |
| next | Next step text | `ReactNode` | `''` |
| prev | Next step text | `ReactNode` | `''` |
| complete | Complete text | `ReactNode` | `''` |
| mask | Whether to display cutout mask | `boolean` | `true` |
| maskWidth | Width of hollow mask | `number` \| `string` | `''` |
| maskHeight | Hollow mask height | `number` \| `string` | `''` |
| closeOnOverlayClick | Whether to close when clicking overlay,[closeOnClickOverlay](https://nutui.jd.com/h5/react/2x/#/zh-CN/component/popover) | `boolean` | `true` |
| showPrev | Whether to show prev button | `boolean` | `true` |
| title | Whether to show title bar | `ReactNode` | `''` |
| onClose | Emit when popover close | `(e: MouseEvent<HTMLDivElement>) => void` | `-` |
| onChange | Emit when step change | `(value: number) => void` | `-` |

### TourList

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| target | target dom | `Element` \| `string` | `-` |
| content | popover content | `string` | `-` |
| location | Location of popover | `string` | `-` |
| popoverOffset | Offset of popopver | `number[]` | `-` |
| arrowOffset | Offset of arrow | `number` | `-` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-tour-mask-border-radius | The border-radius value of the mask layer | `10px` |
| \--nutui-tour-content-min-width | The min-width value of the content area | `200px` |
| \--nutui-tour-content-padding | The padding value of the content area | `10px 12px` |
| \--nutui-tour-content-inner-margin | The margin value inside the content area | `10px 0px` |
| \--nutui-tour-content-inner-font-size | The font-size value inside the content area | `14px` |
| \--nutui-tour-content-bottom-margin-top | margin-top value at the bottom of the content area | `10px` |
| \--nutui-tour-content-bottom-btn-margin-left | The margin-left value of the button at the bottom of the content area | `4px` |
| \--nutui-tour-content-bottom-btn-padding | The padding value of the button at the bottom of the content area | `2px 4px` |
| \--nutui-tour-content-bottom-btn-font-size | The font-size value of the button at the bottom of the content area | `12px` |
| \--nutui-tour-content-bottom-btn-border-radius | The border-radius value of the button at the bottom of the content area | `4px` |

## Contribution

### Issues

> View more [Issues](https://api.github.com/repos/jdf2e/nutui-react/issues?q=is%3Aissue+state%3Aclosed+label%3ATour)

### Component Logs

- 🐛 fix(overlay): tour position offset in tour.taro ([#2631](https://github.com/jdf2e/nutui-react/pull/2631)) `v2.6.23`
- 🐛 fix(tour): demo拆解与规范 ([#2130](https://github.com/jdf2e/nutui-react/pull/2130)) @Alex-huxiyang `v2.5.1`
- 💡 📖 docs(tour): fix tour demo ([#1759](https://github.com/jdf2e/nutui-react/pull/1759)) @xiaoyatong `v2.3.0`
- ✨ 新增 tour 引导组件 ([#1279](https://github.com/jdf2e/nutui-react/pull/1279)) @junjun666 `v2.0.11`

> View more [Releases](https://api.github.com/repos/jdf2e/nutui-react/releases?q=tour&expanded=true)
