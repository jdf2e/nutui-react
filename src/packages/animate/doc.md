# Animate 动画/动效

给子元素添加动画效果

## 引入

```tsx
import { Animate } from '@nutui/nutui-react'
```

## 示例代码

### 点击触发

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 循环动画

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

## Animate

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 动画类型，见下方type值说明 | `AnimateType` | `shake` |
| action | 触发方式，'initial'初始化执行; 'click'点击执行 | `initial` \| `click` | `initial` |
| loop | 是否循环执行。true循环执行;false执行一次 | `boolean` | `false` |
| onClick | 点击元素时触发 | `event: Event` | `-` |

### AnimateType值说明

| 序号 | 参数名称 | 参数说明 |
| --- | --- | --- |
| 1 | shake | 抖动，建议loop为true |
| 2 | ripple | 不循环则是放大后缩小，循环则是心跳 |
| 3 | breath | 呼吸灯，建议loop为true |
| 4 | float | 漂浮，建议loop为true |
| 5 | slide-right | 由右向左划入 |
| 6 | slide-left | 由左向右划入 |
| 7 | slide-top | 由上至下划入 |
| 8 | slide-bottom | 由下至上划入 |
| 9 | jump | 跳跃，建议loop为true |
| 10 | twinkle | 水波，建议loop为true |
| 11 | flicker | 擦亮按钮，建议loop为true |

## 贡献记录

### Issues

> 更多已解决问题请查看 [Issues](https://api.github.com/repos/jdf2e/nutui-react/issues?q=is%3Aissue+state%3Aclosed+label%3AAnimate)

### Component Logs

- 💡 zap: perf: animate ([#2969](https://github.com/jdf2e/nutui-react/pull/2969)) `v2.7.8`
- 🐛 fix(animate): demo拆解与规范 ([#2085](https://github.com/jdf2e/nutui-react/pull/2085)) @eiinu `v2.5.0`
- 💡 animatenumbers number css ([#1681](https://github.com/jdf2e/nutui-react/pull/1681)) @xiaoyatong `v2.3.0`

> 更多版本更新记录请查看 [Releases](https://api.github.com/repos/jdf2e/nutui-react/releases?q=animate&expanded=true)
