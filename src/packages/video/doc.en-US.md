# Video

Video player implemented by native video

## Import

```tsx
import { Video } from '@nutui/nutui-react'
```

## Demo

### Basic Usage

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Auto play

autoplay Property to set video autoplay

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### Initialize mute

The muted property sets the initial mute of the video

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### Video cover poster settings

The poster property sets the video poster

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### play inline

The playsinline property sets the mobile terminal video to play in line and prevents the newly opened page from playing (compatible with IOS and some Android machines)

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### Set video as background

When setting the video as the background image, it is necessary to set muted, disabled, operation prohibited, loop, loop and autoplay to true, and the mobile terminal needs to set playinline for in-line display

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### Video switching

Reset the video when the video address changes

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

## Video

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| source | Video url and type settings | `object` | `{type: {}, src: ''}` |
| options | Control video playback properties | `object` | `-` |
| options.autoplay | Auto play | `boolean` | `false` |
| options.poster | Poster settings | `string` | `-` |
| options.loop | Poster loop | `boolean` | `false` |
| options.controls | Show operation control | `boolean` | `true` |
| options.muted | Mute | `boolean` | `false` |
| options.playsinline | Whether to set as inline playback element (solve Android compatibility problem) | `boolean` | `false` |
| onPlay | play event | `(element: HTMLVideoElement) => void` | `-` |
| onPause | pause event | `(element: HTMLVideoElement) => void` | `-` |
| onPlayEnd | Playback completion callback | `(element: HTMLVideoElement) => void` | `-` |

### Ref

| Name | Description | Arguments |
| --- | --- | --- |
| play | play | `-` |
| pause | pause | `-` |
