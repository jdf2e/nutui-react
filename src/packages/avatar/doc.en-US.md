# Avatar

Avatars can be used to represent people or objects. It supports images, Icons, or letters.

## Import

```tsx
import { Avatar } from '@nutui/nutui-react'
```

## Demo

### Basic usage

Support three sizes：small、normal、large

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Shape

Support two shapes：square、round

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### Type

Support three types：picture、icon、letter

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### Custom colors and background colors

Icon and letter types can have custom colors and background colors

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### Avatar with badge

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### Avatar group display

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### Avatar group to control hierarchy direction

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### Click on the avatar to trigger the event

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

### list

:::demo

<CodeBlock src='h5/demo9.tsx'></CodeBlock>

:::

## Avatar

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| size | The size of the avatar | `large` \| `normal` \| `small` \| `numbers` | `-` |
| shape | The shape of avatar | `round` \| `square` | `round` |
| background | The colors of Icon and letter types | `string` | `#eee` |
| color | The background colors of Icon and letter types | `string` | `#666` |
| fit | The fill mode of the image | `contain` \| `cover` \| `fill` \| `none` \| `scale-down` \| `cover` | `-` |
| src | The address of the image for an image avatar or image element | `string` | `-` |
| alt | This attribute defines the alternative text describing the image | `string` | `-` |
| icon | Custom icon type for an icon avatar | `ReactNode` | `-` |
| onClick | Emitted when cell is clicked | `(e: MouseEvent<HTMLDivElement>) => void` | `-` |
| onError | Handler when img load error | `() => void` | `-` |

## Avatar.Group

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| max | Max avatars to show | `string` \| `number` | `-` |
| maxContent | When the number of avatars exceeds, a avatar folding element will appear，The content of this element can be ...、more、+N。 | `string` | `-` |
| size | The size of the avatar，supports direct input of numbers | `large` \| `normal` \| `small` | `-` |
| shape | The shape of avatar | `string` \| `round` | `-` |
| maxBackground | The colors of Icon and letter types | `string` | `#eee` |
| maxColor | The background colors of Icon and letter types | `string` | `#666` |
| gap | Distance between avatars | `string` | `-8` |
| level | Hierarchy direction between avatar group | `left` \| `right` | `left` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default Value |
| --- | --- | --- |
| \--nutui-avatar-square | The rounded corners of square avatars | `5px` |
| \--nutui-avatar-large-width | The width of the large avatar | `60px` |
| \--nutui-avatar-large-height | The height of the large avatar | `60px` |
| \--nutui-avatar-small-width | Small avatar width | `32px` |
| \--nutui-avatar-small-height | The height of small avatars | `32px` |
| \--nutui-avatar-normal-width | The width of a normal size avatar | `40px` |
| \--nutui-avatar-normal-height | Height of normal size avatar | `40px` |

## Contribution

### Issues

> View more [Issues](https://api.github.com/repos/jdf2e/nutui-react/issues?q=is%3Aissue+state%3Aclosed+label%3AAvatar)

### Component Logs

- 🐛 fix(avatarcropper): multi-language support ([#2666](https://github.com/jdf2e/nutui-react/pull/2666)) `v2.7.0`
- 🐛 usecallback to fix render too many times, button,animatingnumbers,avatar,audio; and fix avatargroup when length > maxsize ([#2628](https://github.com/jdf2e/nutui-react/pull/2628)) `v2.6.22`
- 🐛 fix(avatarcropper): 报错 ([#2364](https://github.com/jdf2e/nutui-react/pull/2364)) @Alex-huxiyang `v2.6.12`
- 🐛 fix(avatarcropper): demo拆解与规范 ([#2103](https://github.com/jdf2e/nutui-react/pull/2103)) @eiinu `v2.5.0`
- 🐛 fix(avatar): demo规范与调整 ([#2071](https://github.com/jdf2e/nutui-react/pull/2071)) @Alex-huxiyang `v2.4.2`

> View more [Releases](https://api.github.com/repos/jdf2e/nutui-react/releases?q=avatar&expanded=true)
