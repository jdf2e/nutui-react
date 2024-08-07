# Audio 音頻播放器

用於音頻播放

## 引入

```tsx
import { Audio } from '@nutui/nutui-react'
```

## 示例代碼

### 基礎用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 進度條播放

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 自定義

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 控件播放

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

## Audio

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| src | 語音資源鏈接 | `string` | `-` |
| muted | 是否靜音 | `boolean` | `false` |
| autoPlay | 是否自動播放 | `boolean` | `false` |
| loop | 是否循環播放 | `boolean` | `false` |
| preload | 是否預加載語音 | `none` \| `metadata` \| `auto` | `auto` |
| type | 展示形式，可選值：controls 控制面闆 progress 進度條 icon 圖標 none 自定義 | `string` | `progress` |
| onBack | 語音快退回調，type = progress 時生效 | `(event：HTMLAudioElement) => void` | `-` |
| onForward | 語音快進回調，type = progress 時生效 | `(event：HTMLAudioElement) => void` | `-` |
| onPause | 暫停回調 | `(event：HTMLAudioElement) => void` | `-` |
| onEnd | 語音播放完成，loop = false 時生效 | `(event：HTMLAudioElement) => void` | `-` |
| onMute | 靜音回調 | `(event：HTMLAudioElement) => void` | `-` |
| onCanPlay | 可以播放媒體時觸發 | `(event：HTMLAudioElement) => void` | `-` |
