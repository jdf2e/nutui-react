# Audio

Used for audio playback

## Import

```tsx
import { Audio } from '@nutui/nutui-react'
```

## Demo

### Basic Usage

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Progress Mode

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### Custom Mode

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### Control Mode

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

## Audio

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| src | Voice resource link | `string` | `-` |
| muted | Whether it is mute | `boolean` | `false` |
| autoPlay | Whether to play automatically | `boolean` | `false` |
| loop | Whether to circulate | `boolean` | `false` |
| preload | Whether the pronunciation is pre -loaded | `none` \| `metadata` \| `auto` | `auto` |
| type | Display form, optional value：controls、panel、progress、icon、none | `string` | `progress` |
| onBack | Voice will be retreated, type = progress takes effect | `(event：HTMLAudioElement) => void` | `-` |
| onForward | Voice fast -moving back, type = progress | `(event：HTMLAudioElement) => void` | `-` |
| onPause | Suspension | `(event：SyntheticEvent<HTMLAudioElement>) => void` | `-` |
| onEnd | The voice playback is complete, loop=false takes effect | `(event：SyntheticEvent<HTMLAudioElement>) => void` | `-` |
| onMute | Mute | `(event：HTMLAudioElement) => void` | `-` |
| onCanPlay | Can be triggered when the media can be played | `(event：SyntheticEvent<HTMLAudioElement>) => void` | `-` |

## Contribution

### Issues

> View more [Issues](https://github.com/jdf2e/nutui-react/issues?q=is%3Aissue%20state%3Aclosed%20Audio)

### Component Logs

- 🐛 usecallback to fix render too many times, button,animatingnumbers,avatar,audio; and fix avatargroup when length > maxsize ([#2628](https://github.com/jdf2e/nutui-react/pull/2628)) `v2.6.22`
- 🐛 fix(audio): demo拆解与规范 ([#2111](https://github.com/jdf2e/nutui-react/pull/2111)) @Alex-huxiyang `v2.5.0`

> View more [Releases](https://github.com/jdf2e/nutui-react//releases?q=audio&expanded=true)
