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
| \--nutui-toast-inner-padding | the padding value of toast content | `13px 16px` |
| \--nutui-toast-inner-bg-color | the background color of toast content | `$color-mask` |
| \--nutui-toast-inner-border-radius | the border-radius value of toast content | `$radius-xl` |
| \--nutui-toast-inner-text-align | the text alignment of toast | `center` |

## Contribution

### Issues

- [在taro4版本中用函数方式调用toast和Dialog等没有反应也不出弹出](https://github.com/jdf2e/nutui-react/issues/2584)

> View more [Issues](https://github.com/jdf2e/nutui-react/issues?q=is%3Aissue%20state%3Aclosed%20Toast)

### Component Logs

- 💡 📖 docs(toast): 修复文档中的函数式例子 ([#2957](https://github.com/jdf2e/nutui-react/pull/2957)) `v2.7.7`
- 🐛 fix(toast): load dependent CSS ([#2776](https://github.com/jdf2e/nutui-react/pull/2776)) `v2.7.1`
- 🐛 fix(Toast): demo拆解与规范 ([#2073](https://github.com/jdf2e/nutui-react/pull/2073)) @OrdinarySF `v2.5.1`
- 🐛 fix(toast): add deprecated prop msg ([#1999](https://github.com/jdf2e/nutui-react/pull/1999)) @Eiinu `v2.4.0`
- 🐛 fix(toast): 变更 taro下的属性 msg 为 content，增加 taro 下 demo ([#1994](https://github.com/jdf2e/nutui-react/pull/1994)) @xiaoyatong `v2.4.0`

> View more [Releases](https://github.com/jdf2e/nutui-react//releases?q=toast&expanded=true)
