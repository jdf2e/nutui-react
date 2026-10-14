# CountDown 倒计时

用于实时展示倒计时数值，支持毫秒精度。

## 引入

```tsx
import { CountDown } from '@nutui/nutui-react-taro'
```

## 示例代码

### 基础用法

:::demo

<CodeBlock src='taro/demo1.tsx'></CodeBlock>

:::

### 剩余时间用法

:::demo

<CodeBlock src='taro/demo2.tsx'></CodeBlock>

:::

### 自定义格式

:::demo

<CodeBlock src='taro/demo3.tsx'></CodeBlock>

:::

### 百毫秒 / 毫秒级渲染

:::demo

<CodeBlock src='taro/demo4.tsx'></CodeBlock>

:::

### 以服务端的时间为准

:::demo

<CodeBlock src='taro/demo5.tsx'></CodeBlock>

:::

### 异步更新结束时间

:::demo

<CodeBlock src='taro/demo6.tsx'></CodeBlock>

:::

### 控制开始和暂停的倒计时

:::demo

<CodeBlock src='taro/demo7.tsx'></CodeBlock>

:::

### 自定义展示

:::demo

<CodeBlock src='taro/demo8.tsx'></CodeBlock>

:::

### 手动控制

通过 ref 获取到组件实例后，可以调用 start、pause、reset 方法。在使用手动控制时，通过 time 属性实现倒计时总时长，单位为毫秒。startTime、endTime 属性失效。

:::demo

<CodeBlock src='taro/demo9.tsx'></CodeBlock>

:::

## CountDown

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 展示类型 | `default`\|`primary`\|`text` | `default` |
| startTime | 开始时间 | `number` | `Date.now()` |
| endTime | 结束时间 | `number` | `Date.now()` |
| remainingTime | 剩余时间，单位是毫秒 | `number` | `0` |
| paused | 是否暂停 | `boolean` | `false` |
| format | 时间格式 | `string` | `HH:mm:ss` |
| refreshInterval | 刷新步长（毫秒）；传入则按该值取整节流，不传则按 format 最细单位 | `number` | `-` |
| autoStart | 是否自动开始倒计时 | `boolean` | `true` |
| time | 倒计时显示时间，单位是毫秒。autoStart 为 false 时生效 | `number` | `0` |
| destroy | 销毁实例 | `boolean` | `false` |
| onEnd | 倒计时结束时回调函数 | `无` | `-` |
| onPaused | 暂停倒计时回调函数 | `onPaused: (restTime: number) => void` | `-` |
| onRestart | 重新开始倒计时回调函数 | `onRestart: (restTime: number) => void` | `-` |
| onUpdate | 自定义展示内容时，实时更新倒计时数据回调函数 | `onUpdate: (restTime: any) => void` | `-` |

### format 格式

| 格式 | 说明 |
| --- | --- |
| DD | 天数 |
| HH | 小时 |
| mm | 分钟 |
| ss | 秒数 |
| i | 百毫秒（1位，0–9）；与 `ss` 连写如 `ss.i` 时同块展示（如 `30.5`） |
| S | 毫秒（1位） |
| SS | 毫秒（2位） |
| SSS | 毫秒（3位） |

### 推荐格式（文档约定，组件不强制按时长自动切换）

`format` 仍完全自定义。以下为设计规范推荐，按剩余时长自行选择：

| 剩余时长 | 推荐 format | 说明 |
| --- | --- | --- |
| ≥ 1 天 | `DD天HH:mm:ss` | 建议 `type="text"`（文本标） |
| 1～24 小时 | `HH:mm:ss` 或 `HH:mm:ss.i` | 面性/线性标均可 |
| < 1 小时 | `mm:ss` 或 `mm:ss.i` | 面性/线性标均可 |

百毫秒（`i`）仅建议在 24 小时内、强促销等场景使用；展示为 1 位数字（由 RAF 驱动刷新）。

### Ref

| 属性 | 说明 | 类型 |
| --- | --- | --- |
| start | 开始倒计时 | `() => void` |
| pause | 暂停倒计时 | `() => void` |
| reset | 重设倒计时，若 auto-start 为 true，重设后会自动开始倒计时 | `() => void` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-countdown-display | 倒计时的布局方式 | `flex` |
| \--nutui-countdown-color | 倒计时的文字颜色 | `$color-primary` |
| \--nutui-countdown-font-size | 倒计时字体大小（非 text） | `11px` |
| \--nutui-countdown-font-size-text | `type="text"` 时字体大小 | `10px` |
| \--nutui-countdown-font-weight | 倒计时的字体粗细 | `400` |
| \--nutui-countdown-width | 倒计时的时间区域最小宽度 | `16px` |
| \--nutui-countdown-number-ssi-min-width | `ss.i` 同块（含百毫秒）最小宽度；仅 default / primary，text 不限制 | `25px` |
| \--nutui-countdown-height | 倒计时的时间区域高度（含边框） | `16px` |
| \--nutui-countdown-number-padding | 倒计时的时间区域 padding | `1px` |
| \--nutui-countdown-number-border-width | 数字块 `::after` 物理描边宽度（再 `scale(1/3)`，视觉约 0.33px） | `1px` |
| \--nutui-countdown-number-margin | 倒计时的时间区域margin | `0 1px` |
| \--nutui-countdown-number-border-radius | 倒计时的时间区域圆角大小 | `2px` |
| \--nutui-countdown-number-color | 倒计时的时间区域的文字颜色 | `$color-primary` |
| \--nutui-countdown-background-color | 倒计时的时间区域的背景颜色 | `$color-background-overlay` |
| \--nutui-countdown-number-border-color | 空心（线性）数字块边框色 | `$color-primary-disabled-special` |
| \--nutui-countdown-number-primary-color | type为`primary`时，倒计时的时间区域的文字颜色 | `$color-primary-text` |
| \--nutui-countdown-primary-background-color | type为`primary`时，倒计时的时间区域的背景颜色 | `$color-primary` |
| \--nutui-countdown-primary-border-color | type为`primary`时，倒计时的时间区域的边框颜色颜色 | `$color-primary` |

<Contribution name="CountDown" />
