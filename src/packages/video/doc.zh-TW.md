# Video 視頻播放器

原生video實現的視頻播放器

## 引入

```tsx
import { Video } from '@nutui/nutui-react'
```

## 示例代碼

### 基礎用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 自動播放

autoplay 屬性設置視頻自動播放

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 初始化靜音

muted屬性設置視頻初始化靜音

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 視頻封面海報設置

poster 屬性設置視頻海報

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 行內播放

playsinline 屬性設置移動端視頻行內播放，阻止新打開頁面播放（兼容 ios，兼容部分安卓機）

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### 視頻背景圖

當設置視頻為背景圖時需要將 muted 靜音、 disabled 禁止操作、loop 循環播放、autoplay 自動播放設置為 true，移動端需要設置 playsinline 行內展示

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### 視頻切換

當視頻地址發生變化時，重置視頻

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

## Video

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| source | 視頻地址和類型設置 | `object` | `{type: {}, src: ''}` |
| options | 控制視頻播放屬性 | `object` | `-` |
| options.autoplay | 是否自動播放 | `boolean` | `false` |
| options.poster | 海報設置 | `string` | `-` |
| options.loop | 是否循環播放 | `boolean` | `false` |
| options.controls | 是否展示操作欄 | `boolean` | `true` |
| options.muted | 是否靜音 | `boolean` | `false` |
| options.playsinline | 是否設置為行內播放元素（解決安卓兼容問題） | `boolean` | `false` |
| onPlay | 播放 | `(element: HTMLVideoElement) => void` | `-` |
| onPause | 暫停 | `(element: HTMLVideoElement) => void` | `-` |
| onPlayEnd | 播放完成回調 | `(element: HTMLVideoElement) => void` | `-` |

### Ref

| 方法名 | 說明 | 參數 |
| --- | --- | --- |
| play | 播放 | `-` |
| pause | 暫停 | `-` |
