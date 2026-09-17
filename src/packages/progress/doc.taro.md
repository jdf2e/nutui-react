# Progress 进度条

展示操作或任务的当前进度。

## 引入

```tsx
import { Progress } from '@nutui/nutui-react-taro'
```

## 示例代码

### 基础用法

:::demo

<CodeBlock src='taro/demo1.tsx'></CodeBlock>

:::

### 设置颜色与宽度

:::demo

<CodeBlock src='taro/demo2.tsx'></CodeBlock>

:::

### 显示百分比

:::demo

<CodeBlock src='taro/demo3.tsx'></CodeBlock>

:::

### 自定义显示内容

:::demo

<CodeBlock src='taro/demo4.tsx'></CodeBlock>

:::

### 自定义尺寸

:::demo

<CodeBlock src='taro/demo5.tsx'></CodeBlock>

:::

### 状态显示

:::demo

<CodeBlock src='taro/demo6.tsx'></CodeBlock>

:::

### 动态改变

:::demo

<CodeBlock src='taro/demo7.tsx'></CodeBlock>

:::

### 延迟加载数据

:::demo

<CodeBlock src='taro/demo8.tsx'></CodeBlock>

:::

### 设置动画时长与播放方式

:::demo
<CodeBlock src='taro/demo9.tsx'></CodeBlock>
:::

### 视频进度条

用于视频播放器等沉浸式场景。默认色值：轨道 `rgba(255,255,255,0.1)`、已填充 `rgba(255,255,255,0.7)`、滑块 `#FFFFFF`。演示包含三种状态：默认（静态，弱化显示）、视频暂停（中等强度，配合播放 icon）、拖动（突出显示、滑块变大）。

:::demo

<CodeBlock src='taro/demo10.tsx'></CodeBlock>

:::

> Taro 端注意事项：
>
> - 小程序端仅支持 touch 事件驱动交互。
> - 所有尺寸走 `rpx`，可通过 [ConfigProvider](#/zh-CN/component/configprovider) 缩放。

## Progress

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| percent | 百分比 | `number` | `0` |
| color | 进度条线条颜色 | `string` | `linear-gradient(135deg, #FF0F23 0%, #fa6419 100%)` |
| background | 进度条背景颜色 | `string` | `#f3f3f3` |
| strokeWidth | 进度条宽度 | `string` | `-` |
| showText | 是否显示文字内容 | `boolean` | `false` |
| animated | 是否展示动画效果 | `boolean` | `false` |
| lazy | 每次进入可视区展示进度条动画 | `boolean` | `false` |
| delay | 延迟数据加载时长，单位 ms | `number` | `0` |
| borderRadius | 进度条圆角大小 | `string` | `0` |
| fontSize | 进度文字大小 | `string` | `12px` |
| activeMode | 动画播放方式 | `forwards \| backwards` | `forwards` |
| duration | 动画完成时间（单位：毫秒） | `number` | `30` |
| ariaLabel | 无障碍标签 | `string` | `-` |
| onActiveEnd | 动画完成后的回调函数 | `() => void` | `-` |
| mode | 进度条形态，`video` 时启用视频播放器样式 | `default \| video` | `default` |
| status | 视频模式下的外部状态（`static` 静态 / `paused` 暂停） | `static \| paused` | `static` |
| draggable | 视频模式下是否允许拖动改变进度 | `boolean` | `false` |
| showThumb | 视频模式下是否显示可拖动滑块 | `boolean` | `true` |
| pausedIcon | `status='paused'` 时展示的播放/暂停图标 | `ReactNode` | `-` |
| min | 进度值最小值 | `number` | `0` |
| max | 进度值最大值 | `number` | `100` |
| step | 拖动步长 | `number` | `-` |
| onChange | 拖动/点击改变进度回调 | `(value: number) => void` | `-` |
| onDragStart | 拖动开始回调 | `(value: number) => void` | `-` |
| onDragging | 拖动进行中回调 | `(value: number) => void` | `-` |
| onDragEnd | 拖动结束回调 | `(value: number) => void` | `-` |

> 注：`mode='video'` 时 `color / background / strokeWidth` 属性不生效，请通过下方的 CSS 变量或 `pausedIcon` 插槽定制外观。

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-progress-height | 进度条宽度 | `10px` |
| \--nutui-progress-border-radius | 进度条边框圆角 | `12px` |
| \--nutui-progress-color | 进度条颜色 | `linear-gradient(135deg, #FF0F23 0%, #fa6419 100%)` |
| \--nutui-progress-background | 进度条背景色 | `#f3f3f3` |
| \--nutui-progress-text-color | 文本颜色 | `$color-text-help` |
| \--nutui-progress-text-padding | 文本内边距 | `0 5px` |
| \--nutui-progress-text-font-size | 文本字体大小 | `13px` |
| \--nutui-progress-text-position-top | 文本定位 top | `-4px` |
| \--nutui-progress-text-position-bottom | 文本定位 bottom | `-4px` |
| \--nutui-progress-text-border-radius | 文本边框圆角 | `5px` |
| \--nutui-progress-text-background | 文本背景颜色 | `$progress-color` |
| \--nutui-progress-video-track-color | 视频模式轨道底色 | `rgba(255, 255, 255, 0.2)` |
| \--nutui-progress-video-fill-color | 视频模式已填充色 | `rgba(255, 255, 255, 0.7)` |
| \--nutui-progress-video-thumb-color | 视频模式滑块颜色 | `#ffffff` |
| \--nutui-progress-video-height | 视频模式轨道高度 | `1px` |
| \--nutui-progress-video-active-height | 拖动态轨道高度 | `8px` |
| \--nutui-progress-video-paused-height | 暂停态轨道高度 | `3px` |
| \--nutui-progress-video-thumb-width | 视频模式滑块宽度 | `2px` |
| \--nutui-progress-video-thumb-height | 视频模式滑块高度 | `1px` |
| \--nutui-progress-video-thumb-radius | 视频模式滑块圆角 | `0.5px` |
| \--nutui-progress-video-thumb-active-width | 拖动态滑块宽度 | `6px` |
| \--nutui-progress-video-thumb-active-height | 拖动态滑块高度 | `12px` |
| \--nutui-progress-video-thumb-active-radius | 拖动态滑块圆角 | `3px` |
| \--nutui-progress-video-thumb-paused-width | 暂停态滑块宽度 | `6px` |
| \--nutui-progress-video-thumb-paused-height | 暂停态滑块高度 | `3px` |
| \--nutui-progress-video-thumb-paused-radius | 暂停态滑块圆角 | `1.5px` |
| \--nutui-progress-video-opacity-static | 默认（静态）态整体透明度 | `0.6` |
| \--nutui-progress-video-opacity-paused | 暂停态整体透明度 | `0.85` |

<Contribution name="Progress" />
