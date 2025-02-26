# Drag 拖拽

实现可拖拽的任意元素

## 引入

```tsx
import { Drag } from '@nutui/nutui-react-taro'
```

## 示例代码

### 基础用法

:::demo

<CodeBlock src='taro/demo1.tsx'></CodeBlock>

:::

### 限制拖拽方向

:::demo

<CodeBlock src='taro/demo2.tsx'></CodeBlock>

:::

### 自动吸边

:::demo

<CodeBlock src='taro/demo3.tsx'></CodeBlock>

:::

### 限制拖拽边界

:::demo

<CodeBlock src='taro/demo4.tsx'></CodeBlock>

:::

## Drag

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| attract | 是否开启自动吸边 | `boolean` | `false` |
| direction | 拖拽元素的拖拽方向限制 | `x` \| `y` \| `all` | `all` |
| boundary | 拖拽元素的拖拽边界 | `Object` | `{top: 0, left: 0, right: 0, bottom: 0}` |
| onDragStart | 开始拖拽元素 | `() => void` | `-` |
| onDrag | 拖拽元素 | `(state: { offset: [x: number, y: number] }) => void` | `-` |
| onDragEnd | 停止拖拽元素 | `(state: { offset: [x: number, y: number] }) => void` | `-` |

## 贡献记录

### Issues

- Drag 微信小程序运行报错 TypeError: \_a2.getBoundingClientRect is not a function [#2738](https://github.com/jdf2e/nutui-react/issues/2738)

> 更多已解决问题请查看 [Issues](https://api.github.com/repos/jdf2e/nutui-react/issues?q=is%3Aissue+state%3Aclosed+label%3ADrag)

### Component Logs

- ✨ feat(drag): add the ability to support onDrag, onDragStart, onDragEnd callbacks ([#2418](https://github.com/jdf2e/nutui-react/pull/2418)) @Alex-huxiyang `v2.6.13`
- 🐛 fix(fixednav): 可拖拽元素样式缺失 ([#2391](https://github.com/jdf2e/nutui-react/pull/2391)) @oasis-cloud `v2.6.11`
- 🐛 解决Drag组件拖拽后会在原地留一个遮挡元素问题+解决weapp/taro-h5多个demo拖拽位置不正确问题 ([#2330](https://github.com/jdf2e/nutui-react/pull/2330)) @irisSong `v2.6.9`
- 🐛 fix(drag): demo拆解与规范 ([#2163](https://github.com/jdf2e/nutui-react/pull/2163)) @eiinu `v2.6.0`
- 🐛 change drag demo radius value of button ([#1701](https://github.com/jdf2e/nutui-react/pull/1701)) @xiaoyatong `v2.3.0`

> 更多版本更新记录请查看 [Releases](https://api.github.com/repos/jdf2e/nutui-react/releases?q=drag&expanded=true)
