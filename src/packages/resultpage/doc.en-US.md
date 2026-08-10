# ResultPage

## Intro

Feedback the operation results to the user in the form of a page

## Install

```tsx
import { ResultPage } from '@nutui/nutui-react'
```

## Demo

### Basic usage

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Modify status

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### No Title

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### Single Button

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### No Button

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### Inside Popup

For half-sheet popup scenarios with vertically centered content.

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### Inside Dialog

For dialog scenarios.

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

## ResultPage

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| title | title | `ReactNode` | `-` |
| description | Description, up to two lines displayed | `ReactNode` | `-` |
| status | Status type | `success` \| `error` \| `warning` \| `info` \| `waiting` | `info` |
| icon | Custom icon | `ReactNode` | `-` |
| actions | Bottom action buttons | `ResultPageAction[]` | `[]` |

### ResultPageAction

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| text | Button label | `ReactNode` | `-` |
| type | Button type | `UIType` | `default` |
| size | Button size | `UISize` | `large` |
| fill | Fill mode | `UIFill` | `outline` |
| disabled | Disabled state | `boolean` | `false` |
| onClick | Click handler | `() => void` | `-` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-resultpage-width | Content area width | `240px` |
| \--nutui-resultpage-icon-size | Icon size | `36px` |
| \--nutui-resultpage-icon-margin-bottom | Space below icon | `4px` |
| \--nutui-resultpage-title-margin-bottom | Space below title | `4px` |
| \--nutui-resultpage-title-font-size | Title font size | `16px` |
| \--nutui-resultpage-title-line-height | Title line height | `24px` |
| \--nutui-resultpage-title-color | Title color | `$color-title` |
| \--nutui-resultpage-description-font-size | Description font size | `14px` |
| \--nutui-resultpage-description-color | Description color | `$color-text` |
| \--nutui-resultpage-description-line-height | Description line height | `22px` |
| \--nutui-resultpage-actions-margin-top | Space above actions | `12px` |

<Contribution name="ResultPage" />
