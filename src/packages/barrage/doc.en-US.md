# Barrage

It is used for the rotation display of words and phrases, which is suitable for video or other similar needs.

## Import

```tsx
import { Barrage } from '@nutui/nutui-react'
```

## Demo

### Basic usage

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

## Barrage

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| list | Barrage list data | `Array<string>` | `[]` |
| interval | The time interval between the occurrence of each barrage in the visual area | `number` | `500` |
| duration | Rolling time of each barrage | `number` | `3000` |
| rows | The number of bullet screen lines is displayed in several lines | `number` | `1` |
| gapY | Vertical distance of barrage | `number` | `10` |
| loop | Loop play | `boolean` | `true` |

### Ref

| Event | Description | Arguments |
| --- | --- | --- |
| add | Add data | `(word: string) => void` |

## Contribution

### Issues

> View more [Issues](https://github.com/jdf2e/nutui-react/issues?q=is%3Aissue%20state%3Aclosed%20Barrage)

### Component Logs

- 🐛 修改jd小程序高版本弹幕不滚动问题 ([#2612](https://github.com/jdf2e/nutui-react/pull/2612)) `v2.6.21`
- 🐛 fix(barrage): 简化demo ([#2100](https://github.com/jdf2e/nutui-react/pull/2100)) @xiaoyatong `v2.5.0`
- 🐛 fix(barrage): demo拆解与规范 ([#2098](https://github.com/jdf2e/nutui-react/pull/2098)) @joyfully-W `v2.5.0`
- 🐛 fix(barrage): 解决新增弹幕重叠问题+不同宽度弹幕滚动速度不一致问题+重构taro版本 ([#1942](https://github.com/jdf2e/nutui-react/pull/1942)) @songsong `v2.3.10`
- 🐛 日历close样式，可自定义样式；修改弹幕样式；更名CircleClose为Failure、Issue 为 Tips ([#1648](https://github.com/jdf2e/nutui-react/pull/1648)) @xiaoyatong `v2.1.0`

> View more [Releases](https://github.com/jdf2e/nutui-react//releases?q=barrage&expanded=true)
