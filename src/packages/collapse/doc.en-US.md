# Collapse 折叠面板

Place the content in multiple folded panels, and click the panel title to expand or shrink the content.

## Import

```tsx
import { Collapse } from 'nutui-react'
```

## Code demonstration

### Basic Usage

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 受控方式

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### No icon style

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### accordion Mode

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### Custom collapse Icon

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### Custom title & extra

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### Change Data

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

## Collapse

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| defaultActiveName | Default active name, uncontrolled | `Array<string>` \| `string` | `-` |
| activeName | Of the currently expanded panel name, controlled | `Array<string>` \| `string` | `-` |
| accordion | Whether to turn on accordion mode | `boolean` | `false` |
| rotate | Click the rotation angle of collapse and expansion to take effect in the custom icon mode | `string` \| `number` | `180` |
| expandIcon | Icon | `ReactNode` | `-` |

## Collapse.Item

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| name | unique identifier, required | `string` | `-` |
| title | the content on the left side of the title bar supports slot incoming (props incoming has higher priority) | `ReactNode` | `-` |
| disabled | whether the title bar is disabled | `boolean` | `false` |
| extra | extra of title bar, support slot incoming (props incoming has higher priority) | `ReactNode` | `-` |
| rotate | Click the rotation angle of collapse and expansion to take effect in the custom icon mode | `string` \| `number` | `180` |
| expandIcon | Icon | `ReactNode` | `-` |
| onChange | Triggered when the panel is switched | `(activeName, name, status) => void` | `-` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-collapse-item-padding | padding | `13px 26px` |
| \--nutui-collapse-item-font-size | fontSize | `$font-size-base` |
| \--nutui-collapse-item-line-height | lineHeight | `24px` |
| \--nutui-collapse-item-color | font color | `#666666` |
| \--nutui-collapse-item-disabled-color | disabled color | `$color-text-disabled` |
| \--nutui-collapse-item-extra-color | Extra font color | `#666666` |
| \--nutui-collapse-item-border-bottom | Item borderBottom | `none` |
| \--nutui-collapse-item-header-border-bottom | Item header borderBottom | `1px solid $color-border` |
| \--nutui-collapse-wrapper-content-background-color | background | `$white` |
| \--nutui-collapse-wrapper-content-color | content font color | `#666666` |
| \--nutui-collapse-wrapper-content-font-size | content fontSize | `$font-size-base` |
| \--nutui-collapse-wrapper-content-line-height | content lineHeight | `1.5` |
| \--nutui-collapse-wrapper-content-padding | content padding | `12px 26px` |
