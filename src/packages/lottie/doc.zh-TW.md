# Lottie 動畫

載入 Lottie 動畫

### 引入

```tsx
import { Lottie } from '@nutui/nutui-react-taro'
```

## 示例代碼

### 基礎用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

## Lottie

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| source | 包含导出动画数据的 JSON 对象 | `Object` | `circular` |
| loop | loading图标和文字的排列方式 | `boolean \| number` | `horizontal` |
| autoPlay | 动画将在加载后立即播放 | `boolean` | `-` |
| initialSegment | 第一个值是初始帧，第二个值是最终帧。如果设置了该值，动画将从此时间位置开始 | `[number, number]` | `-` |
| speed | 播放速度 | `number` | `1` |

### Ref

透過 ref 可以取得 Lottie 實例並呼叫實例方法。

| 方法名 | 說明 | 參數 |
| --- | --- | --- |

