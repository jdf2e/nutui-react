# Empty

Placeholder prompt when empty

## Import

```tsx
import { Empty } from '@nutui/nutui-react'
```

## Demo

### Full

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Half

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### Partial

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### Picture type, 8 built-in

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### Custom image size

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### Custom image

> If you are inner user in JD, you can get the image links from us for default types.

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### Custom bottom buttons

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

## Empty

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| image | Image type, supports incoming image URLs | `ReactNode` | `-` |
| imageSize | Image size, the unit of number type is px | `number` \| `string` | `-` |
| title | Title below the image | `ReactNode` | `-` |
| description | Description below the image | `ReactNode` | `-` |
| size | Component size per JD APP V11.0 empty-state spec | `full` \| `half` \| `partial` | `half` |
| status | Built-in illustration type mapped to design scenarios | `network` \| `comment` \| `search` \| `shop` \| `address` \| `order` \| `favor` \| `cart` | `network` |
| actions | Actions list; fields align with Button, including `onClick` | `EmptyAction[]` | `[]` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

**Common**

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-empty-padding | Component padding | `20px` |
| \--nutui-empty-background-color | Background color | `$color-background-overlay` |
| \--nutui-empty-title-color | Title color | `$color-title` (`#11141A`) |
| \--nutui-empty-description-color | Description color | `$color-text-help` (`#8D9199`) |

**`full`**

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-empty-full-padding-top | Top spacing | `160px` |
| \--nutui-empty-full-image-size | Image size | `160px` |
| \--nutui-empty-full-title-font-size | Title font size | `$font-size-md` |
| \--nutui-empty-full-title-line-height | Title line height | `$line-height-xxl` |
| \--nutui-empty-full-description-font-size | Description font size | `$font-size-base` |
| \--nutui-empty-full-description-line-height | Description line height | `22px` |
| \--nutui-empty-full-actions-margin-top | Actions margin top | `8px` |

**`half`**

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-empty-half-image-size | Image size | `80px` |
| \--nutui-empty-half-title-font-size | Title font size | `$font-size-s` |
| \--nutui-empty-half-title-line-height | Title line height | `22px` |
| \--nutui-empty-half-description-font-size | Description font size | `$font-size-m` |
| \--nutui-empty-half-description-line-height | Description line height | `$line-height-2xl` |
| \--nutui-empty-half-actions-margin-top | Actions margin top | `8px` |

**`partial`**

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-empty-partial-padding | Container padding | `0 16px` |
| \--nutui-empty-partial-image-size | Image size | `32px` |
| \--nutui-empty-partial-content-gap | Gap between image and text | `8px` |
| \--nutui-empty-partial-description-font-size | Text font size | `$font-size-m` |
| \--nutui-empty-partial-description-line-height | Text line height | `32px` |

> v4 removed legacy variables such as `--nutui-empty-image-size` and `--nutui-empty-image-small-size`. Use the per-size variables above.

<Contribution name="Empty" />
