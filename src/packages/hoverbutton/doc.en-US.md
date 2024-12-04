# HoverButton

## Introduction

Several functional buttons, typically appearing at the bottom right corner of a page, are floating and fixed in position, not offset by page scrolling; Icons can be replaced according to actual functionality.

## Installation

```tsx
import { HoverButton } from '@nutui/nutui-react-taro'
```

## Code Demonstration

### Basic Usage

:::demo

<CodeBlock src='taro/demo1.tsx'></CodeBlock>

:::

### Multiple Buttons

:::demo

<CodeBlock src='taro/demo2.tsx'></CodeBlock>

:::

### With Bottom Navigation Bar

:::demo

<CodeBlock src='taro/demo3.tsx'></CodeBlock>

:::

### Custom Level

:::demo

<CodeBlock src='taro/demo4.tsx'></CodeBlock>

:::

### Custom Node

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

## HoverButton

### Props

| Property | Description | Type | Default Value |
| --- | --- | --- | --- |
| zIndex | Set component page level | `number` | `10` |
| tabbarHeight | Bottom navigation bar height (excluding safe area height) | `number` | `-` |
| icon | Set button icon | `ReactNode` | `-` |
| onClick | Button click event trigger | `Function` | `-` |

## HoverButton.Item

### Props

| Property | Description | Type | Default Value |
| --- | --- | --- | --- |
| icon | Set button icon | `ReactNode` | `-` |
| onClick | Button click event trigger | `Function` | `-` |

## Theme Customization

### Style Variables

The component provides the following CSS variables that can be used for custom styling, please refer to [ConfigProvider component](#/zh-CN/component/configprovider) for usage.

| Name | Description | Default Value |
| --- | --- | --- |
| \--nutui-hoverbutton-spacing | Button vertical spacing | `16px` |
| \--nutui-hoverbutton-position-bottom | Button area distance from the bottom of the screen | `48px` |
| \--nutui-hoverbutton-position-right | Button area distance from the right side of the screen | `16px` |
| \--nutui-hoverbutton-item-border-color | Button border color | `rgba(0, 0, 0, 0.06)` |
| \--nutui-hoverbutton-item-background | Button normal background color | `#FFFFFF` |
| \--nutui-hoverbutton-item-background-active | Button active background color | `#F6F6F6` |
| \--nutui-hoverbutton-item-icon-color | Icon normal color | `#1A1A1A` |
| \--nutui-hoverbutton-item-icon-color-active | Icon active color | `#595959` |
