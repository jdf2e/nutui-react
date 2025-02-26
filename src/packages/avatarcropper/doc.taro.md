# AvatarCropper 头像裁剪

用来对头像进行裁剪生成一张新的图片。

## 引入

```tsx
import { AvatarCropper } from '@nutui/nutui-react-taro'
```

## 示例代码

### 基础用法

中间直接使用avatar组件，裁剪后图片内容会被替换为新的。

:::demo

<CodeBlock src='taro/demo1.tsx'></CodeBlock>

:::

### 裁剪区域toolbar插槽

自定义裁剪区域工具栏，toolbar-position控制工具栏位置

:::demo

<CodeBlock src='taro/demo2.tsx'></CodeBlock>

:::

### 圆形裁剪

设置裁剪展示的形状，裁剪后还是方形的，需要在展示的地方设置圆角

:::demo

<CodeBlock src='taro/demo3.tsx'></CodeBlock>

:::

## AvatarCropper

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| maxZoom | 最大缩放倍数 | `number` | `3` |
| space | 裁剪区域两边预留的间隙 | `number` | `10` |
| editText | 中间的文字内容 | `ReactNode \| string` | `编辑` |
| size-type | 所选的图片的尺寸： 可选值：`original` `compressed` | `Array` | `['original', 'compressed']` |
| source-type | 选择图片的来源： 可选值：`album` `camera` | `Array` | `['album', 'camera']` |
| toolbar | 自定义裁剪区域工具栏 | `ReactNode[]` | `[<Button type="danger" key="cancel">取消</Button>, <Button type="info" key="reset">重置</Button>,<Button type="warning" key="rotate">旋转</Button>,<Button type="success" key="confirm">确认</Button>]` |
| toolbarPosition | 裁剪区域工具栏位置,可选值为：`top` `bottom` | `string` | `bottom` |
| shape | 裁剪形状,可选值为：`square` `round` | `string` | `square` |
| onConfirm | 裁剪后点击确认触发 | `(url: string) => void` | `-` |
| onCancel | 点击取消触发 | `-` | `-` |

## 贡献记录

### Issues

> 更多已解决问题请查看 [Issues](https://api.github.com/repos/jdf2e/nutui-react/issues?q=is%3Aissue+state%3Aclosed+label%3AAvatarCropper)

### Component Logs

- 🐛 fix(avatarcropper): multi-language support ([#2666](https://github.com/jdf2e/nutui-react/pull/2666)) `v2.7.0`
- 🐛 fix(avatarcropper): 报错 ([#2364](https://github.com/jdf2e/nutui-react/pull/2364)) @Alex-huxiyang `v2.6.12`
- 🐛 fix(avatarcropper): demo拆解与规范 ([#2103](https://github.com/jdf2e/nutui-react/pull/2103)) @eiinu `v2.5.0`
- ✨ feat(avatarcropper): 新增属性shape，可设置裁剪样式为圆形 ([#1842](https://github.com/jdf2e/nutui-react/pull/1842)) @Marvin Gui `v2.3.5`
- 🐛 fix(avatarcropper): fix cannot display when it is development at taro ([#1840](https://github.com/jdf2e/nutui-react/pull/1840)) @xiaoyatong `v2.3.5`

> 更多版本更新记录请查看 [Releases](https://api.github.com/repos/jdf2e/nutui-react/releases?q=avatarcropper&expanded=true)
