# Toast 吐司

用于轻提示。

## 引入

```tsx
import { Toast } from '@nutui/nutui-react'
```

## 基础用法

### 文字提示

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

## 展示时长设置

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

## Toast自定义底部高度

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

## 加载Loading带透明罩

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

## 换行截断方式

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

## Toast

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| content | 消息文本内容 | `React.ReactNode` | `-` |
| duration | 展示时长（秒），值为 0 时，toast 不会自动消失 | `number` | `2` |
| title | 标题 | `string` | `-` |
| position | toast展示位置 | `top` \| `center` \| `bottom` | `center` |
| contentClassName | 自定义内容区类名 | `string` | `-` |
| contentStyle | 自定义内容区样式 | `React.CSSProperties` | `-` |
| icon | 自定义图标 | `success` \| `fail` \| `loading` \| `warn` \| `React.ReactNode` | `-` |
| size | 文案尺寸，三选一 | `small` \| `base` \| `large` | `base` |
| closeOnOverlayClick | 是否在点击遮罩层后关闭提示 | `boolean` | `false` |
| lockScroll | 背景是否锁定 | `boolean` | `false` |
| wordBreak | 换行截断方式 | `normal \| break-all \| break-word ` | `break-all` |
| onClose | 关闭时触发的事件 | `() => void` | `() => void` |

`Toast`只支持指令式调用

如果传入的参数是字符串类型，`Toast.show`会自动把它作为`content`

Toast.config 全局配置：

```js
Toast.config({ className: 'demo', contentClassName: 'content-demo' })
```

### Ref

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| clear | 关闭所有显示中的`Toast` | `-` |
| config | `Toast`全局配置 | `ToastProps` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-toast-title-font-size | `toast`标题文字大小 | `16px` |
| \--nutui-toast-text-font-size | `toast`内容文字大小 | `14px` |
| \--nutui-toast-font-color | `toast`文字颜色 | `#fff` |
| \--nutui-toast-inner-top | `toast`内容区自定义高度 | `50%` |
| \--nutui-toast-inner-padding | `toast`内容区padding值 | `24px 30px` |
| \--nutui-toast-inner-bg-color | `toast`内容区背景色 | `$color-mask` |
| \--nutui-toast-inner-border-radius | `toast`内容区圆角值 | `12px` |
| \--nutui-toast-inner-text-align | `toast`内容区文本对齐方式 | `center` |
