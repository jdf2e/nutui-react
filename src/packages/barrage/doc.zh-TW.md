# Barrage 彈幕

用於話語和詞組的輪播展示，適用於視頻中或其他類似需求中。

## 引入

```tsx
import { Barrage } from '@nutui/nutui-react'
```

## 示例代碼

### 基礎用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

## Barrage

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| list | 彈幕列錶數據 | `Array<string>` | `[]` |
| interval | 可視區域內每個彈幕出現的時間間隔 | `number` | `500` |
| duration | 每個彈幕的滾動時間 | `number` | `3000` |
| rows | 彈幕行數，分幾行展示 | `number` | `1` |
| gapY | 彈幕垂直距離 | `number` | `10` |
| loop | 是否循環播放 | `boolean` | `true` |

### Ref

| 屬性 | 說明 | 類型 |
| --- | --- | --- |
| add | 添加數據 | `(word: string) => void` |

## 貢獻記錄

### Issues

> 更多已解決問題請查看 [Issues](https://github.com/jdf2e/nutui-react/issues?q=is%3Aissue%20state%3Aclosed%20Barrage)

### Component Logs

- 🐛 修改jd小程序高版本弹幕不滚动问题 ([#2612](https://github.com/jdf2e/nutui-react/pull/2612)) `v2.6.21`
- 🐛 fix(barrage): 简化demo ([#2100](https://github.com/jdf2e/nutui-react/pull/2100)) @xiaoyatong `v2.5.0`
- 🐛 fix(barrage): demo拆解与规范 ([#2098](https://github.com/jdf2e/nutui-react/pull/2098)) @joyfully-W `v2.5.0`
- 🐛 fix(barrage): 解决新增弹幕重叠问题+不同宽度弹幕滚动速度不一致问题+重构taro版本 ([#1942](https://github.com/jdf2e/nutui-react/pull/1942)) @songsong `v2.3.10`
- 🐛 日历close样式，可自定义样式；修改弹幕样式；更名CircleClose为Failure、Issue 为 Tips ([#1648](https://github.com/jdf2e/nutui-react/pull/1648)) @xiaoyatong `v2.1.0`

> 更多版本更新記錄請查看 [Releases](https://github.com/jdf2e/nutui-react//releases?q=barrage&expanded=true)
