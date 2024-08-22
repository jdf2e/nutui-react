# Animate

Add animation effects to child elements

## Import

```tsx
import { Animate } from '@nutui/nutui-react'
```

## Demo

### Clicking to trigger

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Loop animation

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

## Animate

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| type | For animation type, see the description of type value below | `AnimateType` | `shake` |
| action | Triggering method,'initial' initialization execution; ' Click'-- Click to execute | `initial` \| `click` | `initial` |
| loop | Whether to execute circularly. True： loop execution; False： execute once | `boolean` | `false` |
| onClick | Triggered when an element is clicked | `event: Event` | `-` |

### AnimateType value description

| Order | Type name | Description |
| --- | --- | --- |
| 1 | shake | shake，It is recommended that loop be true |
| 2 | ripple | ripple |
| 3 | breath | breath，It is recommended that loop be true |
| 4 | float | float，It is recommended that loop be true |
| 5 | slide-right | From right to left |
| 6 | slide-left | From left to right |
| 7 | slide-top | From top to bottom |
| 8 | slide-bottom | From bottom to top |
| 9 | jump | jump，It is recommended that loop be true |
| 10 | twinkle | twinkle，It is recommended that loop be true |
| 11 | flicker | Polish button，It is recommended that loop be true |
