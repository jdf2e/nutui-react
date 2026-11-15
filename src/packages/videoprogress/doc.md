# VideoProgress 视频进度条

用于视频播放器场景的进度条组件，支持手势拖拽寻道、播放/暂停状态指示与自定义图标。

## 引入

```tsx
import { VideoProgress } from '@nutui/nutui-react'
```

## 示例代码

### 基础用法 (静态播放)

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 暂停状态与自定义图标

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 手势拖拽寻道

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

## VideoProgress

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| percent | 进度百分比 (0-100) | `number` | `0` |
| status | 播放状态: `static` 播放中, `paused` 暂停 | `static` \| `paused` | `static` |
| draggable | 是否允许拖动滑块调整进度 | `boolean` | `false` |
| showThumb | 是否显示滑块 | `boolean` | `true` |
| pausedIcon | 暂停状态下展示在滑块中央的自定义图标 | `ReactNode` | `-` |
| min | 进度最小值 | `number` | `0` |
| max | 进度最大值 | `number` | `100` |
| step | 拖动步长 | `number` | `-` |
| onChange | 进度值变化时的回调 (拖动中连续触发) | `(percent: number) => void` | `-` |
| onDragStart | 拖动开始回调 | `(percent: number) => void` | `-` |
| onDragging | 拖动中回调 | `(percent: number) => void` | `-` |
| onDragEnd | 拖动结束回调 | `(percent: number) => void` | `-` |
| ariaLabel | 无障碍标签 | `string` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-progress-video-track-color | 轨道底色 | `rgba(255, 255, 255, 0.2)` |
| \--nutui-progress-video-fill-color | 已填充色 | `rgba(255, 255, 255, 0.7)` |
| \--nutui-progress-video-thumb-color | 滑块颜色 | `#ffffff` |
| \--nutui-progress-video-height | 轨道高度 | `1px` |
| \--nutui-progress-video-active-height | 拖动态轨道高度 | `8px` |
| \--nutui-progress-video-paused-height | 暂停态轨道高度 | `3px` |
| \--nutui-progress-video-thumb-width | 滑块宽度 | `2px` |
| \--nutui-progress-video-thumb-height | 滑块高度 | `1px` |
| \--nutui-progress-video-thumb-radius | 滑块圆角 | `0.5px` |
| \--nutui-progress-video-thumb-active-width | 拖动态滑块宽度 | `6px` |
| \--nutui-progress-video-thumb-active-height | 拖动态滑块高度 | `12px` |
| \--nutui-progress-video-thumb-active-radius | 拖动态滑块圆角 | `3px` |
| \--nutui-progress-video-thumb-paused-width | 暂停态滑块宽度 | `6px` |
| \--nutui-progress-video-thumb-paused-height | 暂停态滑块高度 | `3px` |
| \--nutui-progress-video-thumb-paused-radius | 暂停态滑块圆角 | `1.5px` |
| \--nutui-progress-video-opacity-static | 默认（静态）态整体透明度 | `0.6` |
| \--nutui-progress-video-opacity-paused | 暂停态整体透明度 | `0.85` |
| \--nutui-progress-video-container-height | 容器触控响应区高度 | `68px` |
