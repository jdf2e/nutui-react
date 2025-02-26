# Video 视频播放器

借助 Taro Video 标签实现的视频播放器，可以透传使用 Taro Video 的属性。

## 引入

```tsx
import { Video } from '@nutui/nutui-react-taro'
```

## 示例代码

### 基础用法

:::demo

<CodeBlock src='taro/demo1.tsx'></CodeBlock>

:::

### 自动播放

autoplay 属性设置视频自动播放

:::demo

<CodeBlock src='taro/demo2.tsx'></CodeBlock>

:::

### 初始化静音

muted属性设置视频初始化静音

:::demo

<CodeBlock src='taro/demo3.tsx'></CodeBlock>

:::

### 视频封面海报设置

poster 属性设置视频海报

:::demo

<CodeBlock src='taro/demo4.tsx'></CodeBlock>

:::

### 行内播放

playsinline 属性设置移动端视频行内播放，阻止新打开页面播放（兼容 ios，兼容部分安卓机）

:::demo

<CodeBlock src='taro/demo5.tsx'></CodeBlock>

:::

### 视频背景图

当设置视频为背景图时需要将 muted 静音、 disabled 禁止操作、loop 循环播放、autoplay 自动播放设置为 true，移动端需要设置 playsinline 行内展示

:::demo

<CodeBlock src='taro/demo6.tsx'></CodeBlock>

:::

### 视频切换

当视频地址发生变化时，重置视频

:::demo

<CodeBlock src='taro/demo7.tsx'></CodeBlock>

:::

## Video

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| source | 视频地址和类型设置 | `object` | `{type: {}, src: ''}` |
| options | 控制视频播放属性 | `object` | `-` |
| options.autoplay | 是否自动播放 | `boolean` | `false` |
| options.poster | 海报设置 | `string` | `-` |
| options.loop | 是否循环播放 | `boolean` | `false` |
| options.controls | 是否展示操作栏 | `boolean` | `true` |
| options.muted | 是否静音 | `boolean` | `false` |
| options.playsinline | 是否设置为行内播放元素（解决安卓兼容问题） | `boolean` | `false` |
| onPlay | 播放 | `(event: BaseEventOrig<any>) => void` | `-` |
| onPause | 暂停 | `(event: BaseEventOrig<any>) => void` | `-` |
| onPlayEnd | 播放完成回调 | `(event: BaseEventOrig<any>) => void` | `-` |

## 贡献记录

### Issues

> 更多已解决问题请查看 [Issues](https://api.github.com/repos/jdf2e/nutui-react/issues?q=is%3Aissue+state%3Aclosed+label%3AVideo)

### Component Logs

- ✨ feat(Video): web h5 下支持 ref 调用 ([#2852](https://github.com/jdf2e/nutui-react/pull/2852)) `v2.7.3`
- 🐛 fix(video): demo拆解与规范 ([#2104](https://github.com/jdf2e/nutui-react/pull/2104)) @eiinu `v2.5.0`
- ✨ feat(video): support passing through attributes for Taro Video ([#1890](https://github.com/jdf2e/nutui-react/pull/1890)) @xiaoyatong `v2.3.8`
- ✨ uploader taro h5 支持 video ([#1605](https://github.com/jdf2e/nutui-react/pull/1605)) @xiaoyatong `v2.1.0`
- 💡 🛠 refactor: video ([#1034](https://github.com/jdf2e/nutui-react/pull/1034)) @junjun666 `v2.0.0-alpha.13`

> 更多版本更新记录请查看 [Releases](https://api.github.com/repos/jdf2e/nutui-react/releases?q=video&expanded=true)
