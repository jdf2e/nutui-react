# Audio 音频播放器

用于音频播放

## 引入

```tsx
import { Audio } from '@nutui/nutui-react'
```

## 示例代码

### 基础用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 进度条播放

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 自定义

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 控件播放

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

## Audio

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| src | 语音资源链接 | `string` | `-` |
| muted | 是否静音 | `boolean` | `false` |
| autoPlay | 是否自动播放 | `boolean` | `false` |
| loop | 是否循环播放 | `boolean` | `false` |
| preload | 是否预加载语音 | `none` \| `metadata` \| `auto` | `auto` |
| type | 展示形式，可选值：controls 控制面板 progress 进度条 icon 图标 none 自定义 | `string` | `progress` |
| onBack | 语音快退回调，type = progress 时生效 | `(event：HTMLAudioElement) => void` | `-` |
| onForward | 语音快进回调，type = progress 时生效 | `(event：HTMLAudioElement) => void` | `-` |
| onPause | 暂停回调 | `(event：SyntheticEvent<HTMLAudioElement>) => void` | `-` |
| onEnd | 语音播放完成，loop = false 时生效 | `(event：SyntheticEvent<HTMLAudioElement>) => void` | `-` |
| onMute | 静音回调 | `(event：HTMLAudioElement) => void` | `-` |
| onCanPlay | 可以播放媒体时触发 | `(event：SyntheticEvent<HTMLAudioElement>) => void` | `-` |
