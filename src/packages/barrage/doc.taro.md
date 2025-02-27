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

## 贡献记录

### Issues

> 更多已解决问题请查看 [Issues](https://github.com/jdf2e/nutui-react/issues?q=is%3Aissue%20state%3Aclosed%20Barrage)

### Component Logs

- 🐛 修改jd小程序高版本弹幕不滚动问题 ([#2612](https://github.com/jdf2e/nutui-react/pull/2612)) `v2.6.21`
- 🐛 fix(barrage): 简化demo ([#2100](https://github.com/jdf2e/nutui-react/pull/2100)) @xiaoyatong `v2.5.0`
- 🐛 fix(barrage): demo拆解与规范 ([#2098](https://github.com/jdf2e/nutui-react/pull/2098)) @joyfully-W `v2.5.0`
- 🐛 fix(barrage): 解决新增弹幕重叠问题+不同宽度弹幕滚动速度不一致问题+重构taro版本 ([#1942](https://github.com/jdf2e/nutui-react/pull/1942)) @songsong `v2.3.10`
- 🐛 日历close样式，可自定义样式；修改弹幕样式；更名CircleClose为Failure、Issue 为 Tips ([#1648](https://github.com/jdf2e/nutui-react/pull/1648)) @xiaoyatong `v2.1.0`

> 更多版本更新记录请查看 [Releases](https://github.com/jdf2e/nutui-react//releases?q=barrage&expanded=true)
