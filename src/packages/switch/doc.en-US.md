# Switch

duction

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

### onChange event

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### Custom color

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### Support text

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

## Switch

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| defaultChecked | Switch status, uncontrolled | `boolean` | `false` |
| checked | Switch status, controlled | `boolean` | `false` |
| disabled | Disabled | `boolean` | `false` |
| activeText | Text description when opening | `string` | `-` |
| inactiveText | Text description when closed | `string` | `-` |
| onChange | Trigger when switching switches | `onChange:(value: boolean, event: Event)` | `-` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-switch-close-background-color | Switch off state background color | `$color-text-disabled` |
| \--nutui-switch-open-background-color | Switch on background color | `$color-primary` |
| \--nutui-switch-close-disabled-background-color | Switch off state's disabled background color | `rgba(0, 0, 0, 0.06)` |
| \--nutui-switch-open-disabled-background-color | Switch on state's disabled background color | `$color-primary-disabled` |
| \--nutui-switch-width | Switch width | `36px` |
| \--nutui-switch-height | Switch height | `21px` |
| \--nutui-switch-line-height | Switch line height | `21px` |
| \--nutui-switch-border-radius | Switch border radius | `21px` |
| \--nutui-switch-inside-width | Width of button inside switch | `13px` |
| \--nutui-switch-inside-height | Switch internal button height | `13px` |
| \--nutui-switch-inside-open-transform | Position of internal button in switch on state | `translateX(146%)` |
| \--nutui-switch-inside-close-transform | Switch off state internal button position | `translateX(30%)` |
| \--nutui-switch-close-line-bg-color | Switch off state inner button line color | `#f0f0f0` |
