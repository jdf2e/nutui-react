# Switch

Used to open or close the options.

## Import

```tsx
import { Switch } from '@nutui/nutui-react'
```

## Demo

### Uncontrolled

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Controlled

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### disabled status

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### Support text

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### Support Icon

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### onChange event

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### Custom color

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

## Switch

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| defaultChecked | Switch status, uncontrolled | `boolean` | `false` |
| checked | Switch status, controlled | `boolean` | `false` |
| disabled | Disabled | `boolean` | `false` |
| activeText | Text description when opening | `ReactNode` | `-` |
| inactiveText | Text description when closed | `ReactNode` | `-` |
| onChange | Trigger when switching switches | `onChange:(value: boolean, event: Event)` | `-` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-switch-active-background-color | Switch on status background color | `$color-primary` |
| \--nutui-switch-inactive-background-color | Switch off status background color | `$color-text-disabled` |
| \--nutui-switch-active-disabled-background-color | Switch toggle on the background color disabled | `$color-primary-disabled-special` |
| \--nutui-switch-inactive-disabled-background-color | Turn off the background color disabled | `$color-background` |
| \--nutui-switch-inactive-line-bg-color | Switch Off Internal Button Line Color | `#ffffff` |
| \--nutui-switch-width | Switch Width | `46px` |
| \--nutui-switch-height | Switch height | `28px` |
| \--nutui-switch-line-height | Switch line height | `28px` |
| \--nutui-switch-border-radius | Switch rounded corner size | `$radius-circle` |
| \--nutui-switch-border-width | Switch border width | `2px` |
| \--nutui-switch-inside-border-radius | Switch internal button rounded corner size | `$radius-full` |
| \--nutui-switch-inside-box-shadow | Switch Internal Button Shadow | `0px 2px 6px 0px rgba(0, 0, 0, 0.4)` |
| \--nutui-switch-label-text-color | Switch internal text color | `$color-primary-text` |
| \--nutui-switch-label-font-size | Switch internal text size | `$font-size-s` |
| \--nutui-switch-inactive-disabled-label-text-color | Turn off and disable internal text color | `$color-text-disabled` |
