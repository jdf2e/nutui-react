# SideNavBar组件

For content selection and switching

## Import

```tsx
import { SideNavBar, SubSideNavBar, SideNavBarItem } from '@nutui/nutui-react'
```

## Demo

### Basic Usage

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Navigation Nesting (Up To Three Levels Recommended)

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

## SideNavBar

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| visible | whether the component is visible | `boolean` | `false` |
| title | overall title | `string` | `-` |
| width | mask width in percentage | `string` | `80%` |
| position | popup position | `left` \| `right` | `left` |
| indent | indent width | `number` | `20` |
| onClose | Triggered when the mask is closed | `-` | `-` |

## SubSideNavBar

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| value | unique identifier for navigation | `string` \| `number` | `-` |
| title | overall title | `string` | `-` |
| open | whether the navigation is expanded by default | `boolean` | `true` |
| onClick | Navigation click | `({title: string, value: string \| number, isShow: boolean}) => void` | `-` |

## SideNavBarItem

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| value | unique identifier for navigation | `string` \| `number` | `-` |
| title | overall title | `string` | `-` |
| onClick | Navigation click | `({title: string, value: string \| number}) => void` | `-` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-sidenavbar-content-bg-color | sidebar navigation background color | `$white` |
| \--nutui-sidenavbar-item-height | The height of each item in the sidebar | `40px` |
| \--nutui-sidenavbar-title-padding | padding for title | `10px 8px 10px 20px` |
| \--nutui-sidenavbar-title-background | The background color of the title | `$color-background` |
| \--nutui-sidenavbar-title-color | The font color of the title | `$color-title` |
| \--nutui-sidenavbar-sub-title-padding | Padding of subtitle | `10px 8px 10px 35px` |
| \--nutui-sidenavbar-sub-title-background | Subtitle background color | `$color-background-sunken` |
| \--nutui-sidenavbar-sub-title-color | Subtitle font color | `$color-title` |
| \--nutui-sidenavbar-sub-list-background | option list background color | `$color-background-sunken` |
| \--nutui-sidenavbar-sub-list-color | option list font color | `$color-title` |
