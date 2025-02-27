# Drag 拖拽

實現可拖拽的任意元素

## 引入

```tsx
import { Drag } from '@nutui/nutui-react'
```

## 示例代碼

### 基礎用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 限製拖拽方向

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 自動吸邊

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 限製拖拽邊界

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

## Drag

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| attract | 是否開啟自動吸邊 | `boolean` | `false` |
| direction | 拖拽元素的拖拽方向限製 | `x` \| `y` \| `all` | `all` |
| boundary | 拖拽元素的拖拽邊界 | `Object` | `{top: 0, left: 0, right: 0, bottom: 0}` |
| onDragStart | 開始拖拽元素 | `() => void` | `-` |
| onDrag | 拖拽元素 | `(state: { offset: [x: number, y: number] }) => void` | `-` |
| onDragEnd | 停止拖拽元素 | `(state: { offset: [x: number, y: number] }) => void` | `-` |

## 貢獻記錄

### Issues

- [Drag 微信小程序运行报错 TypeError: \_a2.getBoundingClientRect is not a function](https://github.com/jdf2e/nutui-react/issues/2738)

> 更多已解決問題請查看 [Issues](https://github.com/jdf2e/nutui-react/issues?q=is%3Aissue%20state%3Aclosed%20Drag)

### Component Logs

- ✨ feat(drag): add the ability to support onDrag, onDragStart, onDragEnd callbacks ([#2418](https://github.com/jdf2e/nutui-react/pull/2418)) @Alex-huxiyang `v2.6.13`
- 🐛 解决Drag组件拖拽后会在原地留一个遮挡元素问题+解决weapp/taro-h5多个demo拖拽位置不正确问题 ([#2330](https://github.com/jdf2e/nutui-react/pull/2330)) @irisSong `v2.6.9`
- 🐛 fix(drag): demo拆解与规范 ([#2163](https://github.com/jdf2e/nutui-react/pull/2163)) @eiinu `v2.6.0`
- 🐛 change drag demo radius value of button ([#1701](https://github.com/jdf2e/nutui-react/pull/1701)) @xiaoyatong `v2.3.0`

> 更多版本更新記錄請查看 [Releases](https://github.com/jdf2e/nutui-react//releases?q=drag&expanded=true)
