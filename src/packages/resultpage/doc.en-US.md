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

## ResultPage

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| title | title | `ReactNode` | `-` |
| description | Description, up to two lines displayed | `ReactNode` | `-` |
| status | Status type | `success` \| `error` \| `warning` \| `info` \| `waiting` | `info` |
| icon | Custom `icon` | `ReactNode` | `-` |
| actions | Actions of operation | `Array` | `[]` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-resultpage-width | Content area width | `240px` |
| \--nutui-resultpage-icon-size | Width and height of icon | `36px` |
| \--nutui-resultpage-icon-margin-bottom | margin-bottom value of the icon | `12px` |
| \--resultpage-title-margin-bottom | The margin-top value of the title | `12px` |
| \--nutui-resultpage-title-font-size | The font size of the title | `$font-size-xl` |
| \---nutui-resultpage-title-color | The text color of the title | `$color-title` |
| \--nutui-resultpage-description-font-size | Describe the font size | `$font-size-base` |
| \--nutui-resultpage-description-color | Describe the text color | `$color-text` |
| \--nutui-resultpage-description-line-height | Describe the line height | `20px` |
| \--nutui-resultpage-actions-margin-topt | The margin-top value of the operation area | `16px` |
