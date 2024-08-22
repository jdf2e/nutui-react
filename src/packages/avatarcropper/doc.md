# AvatarCropper 头像剪切

用来对头像进行剪切生成一张新的图片。

## 引入

```tsx
import { AvatarCropper } from '@nutui/nutui-react'
```

## 示例代码

### 基础用法

中间直接使用avatar组件，裁剪后图片内容会被替换为新的。

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 裁剪区域toolbar插槽

自定义裁剪区域工具栏，toolbar-position控制工具栏位置

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 圆形裁剪

设置裁剪展示的形状，裁剪后还是方形的，需要在展示的地方设置圆角

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

## AvatarCropper

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| maxZoom | 最大缩放倍数 | `number` | `3` |
| space | 裁剪区域两边预留的间隙 | `number` | `10` |
| editText | 中间的文字内容 | `ReactNode \| string` | `编辑` |
| toolbar | 自定义裁剪区域工具栏 | `ReactNode[]` | `[<Button type="danger" key="cancel">取消</Button>, <Button type="info" key="reset">重置</Button>,<Button type="warning" key="rotate">旋转</Button>,<Button type="success" key="confirm">确认</Button>]` |
| toolbarPosition | 裁剪区域工具栏位置,可选值为：`top` `bottom` | `string` | `bottom` |
| shape | 裁剪形状,可选值为：`square` `round` | `string` | `square` |
| onConfirm | 裁剪后点击确认触发 | `(url: string) => void` | `-` |
| onCancel | 点击取消触发 | `-` | `-` |
