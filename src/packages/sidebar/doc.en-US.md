# SideBar component

Used for side content selection and switching

## Introduction

```tsx
import { SideBar } from '@nutui/nutui-react'
```

## Sample code

### Basic usage

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Disable option

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### Match based on value

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### Multiple titles

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### Set the scroll animation duration

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

## SideBar

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| value | The key of the currently activated `item` | `string \| number` | `-` |
| defaultValue | When value is not set, the default value of the key of `item` | `string \| number` | `-` |
| contentDuration | content scroll animation duration | `number` | `0` |
| sidebarDuration | Sidebar scroll animation duration | `number` | `0` |
| onClick | Triggered when the label is clicked | `(index: string \| number) => void` | `-` |
| onChange | Triggered when the currently active label changes | `(index: string \| number) => void` | `-` |

## SideBar.Item

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| title | title | `string` | `-` |
| value | tag Key, matched identifier, defaults to index value | `string` \| `number` | `-` |
| disabled | Whether to disable the label | `boolean` | `false` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-sidebar-background-color | Sidebar navigation background color | `$color-background` |
| \--nutui-sidebar-border-radius | Rounded corners of the sidebar | `0` |
| \--nutui-sidebar-width | Sidebar width | `104px` |
| \--nutui-sidebar-max-width | Sidebar max width | `128px` |
| \--nutui-sidebar-title-height | Sidebar title height | `52px` |
| \--nutui-sidebar-inactive-font-size | Font size in normal state | `$font-size-base` |
| \--nutui-sidebar-active-font-size | Font size in active state | `$font-size-l` |
| \--nutui-sidebar-active-font-weight | Font weight in active state | `$font-weight-bold` |
| \--nutui-sidebar-active-color | Font color in active state | `$color-primary` |
| \--nutui-sidebar-item-background | The background color of the content area | `$white` |
| \--nutui-sidebar-item-padding | Padding of the content area | `24px 20px` |
