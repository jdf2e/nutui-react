# Barrage 弹幕

用于话语和词组的轮播展示，适用于视频中或其他类似需求中。

## 引入

```tsx
import { Barrage } from '@nutui/nutui-react-taro'
```

## 示例代码

### 基础用法

:::demo

<CodeBlock src='taro/demo1.tsx'></CodeBlock>

:::

## Barrage

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| list | 弹幕列表数据 | `Array<string>` | `[]` |
| interval | 可视区域内每个弹幕出现的时间间隔 | `number` | `500` |
| duration | 每个弹幕的滚动时间 | `number` | `3000` |
| rows | 弹幕行数，分几行展示 | `number` | `1` |
| gapY | 弹幕垂直距离 | `number` | `10` |
| loop | 是否循环播放 | `boolean` | `true` |

### Ref

| 属性 | 说明 | 类型 |
| --- | --- | --- |
| add | 添加数据 | `(word: string) => void` |
