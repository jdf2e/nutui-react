# Toast

For light tips.

## Import

```tsx
import { Toast } from '@nutui/nutui-react'
```

## Demo

### Usage

#### Text

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Set Display Duration

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### Custom Bottom Height

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### Loading with non-transparent cover

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### Word Break

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

## Toast

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| content | Toast content | `React.ReactNode` | `-` |
| duration | Toast duration(s), won't disappear if value is 0 | `number` | `2` |
| position | Vertical position of toast | `top` \| `center` \| `bottom` | `center` |
| title | title | `string` | `-` |
| icon | Toast icon | `success` \| `fail` \| `loading` \| `warn` \| `React.ReactNode` | `-` |
| size | Text Size | `small` \| `base` \| `large` | `base` |
| contentClassName | Toast content class name | `string` | `-` |
| contentStyle | Toast content style | `React.CSSProperties` | `-` |
| closeOnOverlayClick | Whether to close when overlay is clicked | `boolean` | `false` |
| lockScroll | Whether the background is locked | `boolean` | `false` |
| wordBreak | Word Break Mode | `normal \| break-all \| break-word ` | `break-all` |
| onClose | Callback function after close | `() => void` | `null` |

`Toast` only supports Imperative calls.

You can also pass in a string directly, and `Toast.show` will automatically use it as `content`.

Toast.config global configuration：

```js
Toast.config({ className: 'demo', contentClassName: 'content-demo' })
```

### Ref

| Property | Description | Parameters |
| --- | --- | --- |
| clear | Turn off `Toast` in all displays. | `-` |
| config | Methods for global configuration | `ToastProps` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-toast-title-font-size | the title font-size of toast | `16px` |
| \--nutui-toast-text-font-size | the content font-size of toast | `14px` |
| \--nutui-toast-font-color | the text color of toast | `#fff` |
| \--nutui-toast-inner-top | the custom height of content | `50%` |
| \--nutui-toast-inner-padding | the padding value of toast content | `24px 30px` |
| \--nutui-toast-inner-bg-color | the background color of toast content | `$color-mask` |
| \--nutui-toast-inner-border-radius | the border-radius value of toast content | `12px` |
| \--nutui-toast-inner-text-align | the text alignment of toast | `center` |
