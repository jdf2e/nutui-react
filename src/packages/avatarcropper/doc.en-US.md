# AvatarCropper Head cropping

## introduce

Used to cut the profile picture to create a new image.

## install

```tsx
import { AvatarCropper } from '@nutui/nutui-react'
```

## Code demonstration

### Grammar and Usage

Use the avatar component directly in the middle, and the image content will be replaced with the new one after cropping.

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Clipping region toolbar slots

Customize the clipping area toolbar, and toolbar-position controls the toolbar position

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### Roll Finger Cutting

Set the shape of the crop display, which is still square after the crop, and need to set rounded corners in the display place

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

## AvatarCropper

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| max-zoom | Maximum zoom | `number` | `3` |
| space | The gap reserved on both sides of the clipping area | `number` | `20` |
| edit-text | The text content in the middle | `ReactNode \| string` | `编辑` |
| toolbar | Customize the clipping area toolbar, after setting this content | `ReactNode[]` | `[<Button type="danger" key="cancel">取消</Button>, <Button type="info" key="reset">重置</Button>,<Button type="warning" key="rotate">旋转</Button>,<Button type="success" key="confirm">确认</Button>]` |
| toolbar-position | Location of the toolbar in the clipping area. The optional value is：`top` `bottom` | `string` | `bottom` |
| shape | Crop shape, optional value is：`square` `round` | `string` | `square` |
| onConfirm | Click Confirm to trigger after cropping | `(url: string) => void` | `-` |
| onCancel | Click cancel trigger | `-` | `-` |

## Contribution

### Issues

> View more [Issues](https://api.github.com/repos/jdf2e/nutui-react/issues?q=is%3Aissue+state%3Aclosed+label%3AAvatarCropper)

### Component Logs

- 🐛 fix(avatarcropper): multi-language support ([#2666](https://github.com/jdf2e/nutui-react/pull/2666)) `v2.7.0`
- 🐛 fix(avatarcropper): 报错 ([#2364](https://github.com/jdf2e/nutui-react/pull/2364)) @Alex-huxiyang `v2.6.12`
- 🐛 fix(avatarcropper): demo拆解与规范 ([#2103](https://github.com/jdf2e/nutui-react/pull/2103)) @eiinu `v2.5.0`
- ✨ feat(avatarcropper): 新增属性shape，可设置裁剪样式为圆形 ([#1842](https://github.com/jdf2e/nutui-react/pull/1842)) @Marvin Gui `v2.3.5`
- 🐛 fix(avatarcropper): fix cannot display when it is development at taro ([#1840](https://github.com/jdf2e/nutui-react/pull/1840)) @xiaoyatong `v2.3.5`

> View more [Releases](https://api.github.com/repos/jdf2e/nutui-react/releases?q=avatarcropper&expanded=true)
