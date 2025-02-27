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

## Contribution

### Issues

> View more [Issues](https://github.com/jdf2e/nutui-react/issues?q=is%3Aissue%20state%3Aclosed%20Animate)

### Component Logs

- 💡 zap: perf: animate ([#2969](https://github.com/jdf2e/nutui-react/pull/2969)) `v2.7.8`
- 🐛 fix(animate): demo拆解与规范 ([#2085](https://github.com/jdf2e/nutui-react/pull/2085)) @eiinu `v2.5.0`
- 💡 animatenumbers number css ([#1681](https://github.com/jdf2e/nutui-react/pull/1681)) @xiaoyatong `v2.3.0`

> View more [Releases](https://github.com/jdf2e/nutui-react//releases?q=animate&expanded=true)
