# Popup 弹出层

弹出层容器，用于展示弹窗、信息提示等内容

## 引入

```tsx
import { Popup } from '@nutui/nutui-react-taro'
```

## 示例代码

### 基础用法

`visible` 控制显示/隐藏

:::demo

<CodeBlock src='taro/demo1.tsx'></CodeBlock>

:::

### 弹出位置

:::demo

<CodeBlock src='taro/demo2.tsx'></CodeBlock>

:::

### 关闭图标

:::demo

<CodeBlock src='taro/demo3.tsx'></CodeBlock>

:::

### 阻塞关闭

:::demo

<CodeBlock src='taro/demo4.tsx'></CodeBlock>

:::

### 圆角弹框

:::demo

<CodeBlock src='taro/demo5.tsx'></CodeBlock>

:::

<!-- ### 指定节点挂载

:::demo

<CodeBlock src='taro/demo6.tsx'></CodeBlock>

::: -->

### 多层堆叠

:::demo

<CodeBlock src='taro/demo7.tsx'></CodeBlock>

:::

### 禁止滚动穿透

> 2.3.0 版本更新，仅适用于 H5 与微信小程序

使用这类全局遮罩类型的组件时，滑动组件可能会出现底层页面一起滑动的问题。

开启 lockScroll 可以阻止 Popup 的背景遮罩层的滚动穿透问题，已默认开启。

使用 Taro 提供的 catchMove 可以阻止 Popup 的内容区域的滚动穿透问题，但会导致其本身无法滑动。

如果需要内容支持溢出滚动，则需要包裹一层 ScrollView 组件。

:::demo

<CodeBlock src='taro/demo8.tsx'></CodeBlock>

:::

## Popup

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| visible | 当前组件是否显示 | `boolean` | `false` |
| zIndex | 遮罩层级 | `string` \| `number` | `2000` |
| duration | 遮罩动画时长，单位毫秒 | `number` | `300` |
| overlayClassName | 自定义遮罩类名 | `string` | `-` |
| overlayStyle | 自定义遮罩样式 | `CSSProperties` | `-` |
| lockScroll | 背景是否锁定 | `boolean` | `true` |
| overlay | 是否显示遮罩 | `boolean` | `true` |
| closeOnOverlayClick | 是否点击遮罩关闭 | `boolean` | `true` |
| position | 弹出位置 | `top` \| `bottom` \| `left` \| `right` \| `center` | `center` |
| transition | 动画名 | `string` | `-` |
| closeable | 是否显示关闭按钮 | `boolean` | `false` |
| closeIconPosition | 关闭按钮位置 | `top-left` \| `top-right` \| `bottom-left` \| `bottom-right` | `top-right` |
| closeIcon | 自定义 Icon | `ReactNode` | `close` |
| left | 标题左侧部分 | `ReactNode` | `-` |
| title | 标题中间部分 | `ReactNode` | `-` |
| description | 子标题/描述部分 | `ReactNode` | `-` |
| destroyOnClose | 组件不可见时，卸载内容 | `boolean` | `false` |
| round | 是否显示圆角 | `boolean` | `false` |
| portal | 指定节点挂载 | `HTMLElement` \| `(() => HTMLElement)` | null` | `null` |
| onClick | 点击弹框时触发 | `event: MouseEvent` | `-` |
| onCloseIconClick | 点击关闭图标时触发 | `event: MouseEvent` | `-` |
| onOpen | 打开弹框时触发 | `-` | `-` |
| onClose | 关闭弹框时触发 | `-` | `-` |
| afterShow | 继承于`Overlay`, 遮罩打开动画结束时触发 | `event: HTMLElement` | `-` |
| afterClose | 继承于`Overlay`, 遮罩关闭动画结束时触发 | `event: HTMLElement` | `-` |
| onOverlayClick | 点击遮罩触发 | `event: MouseEvent` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-popup-border-radius | 弹框的圆角值 | `24px` |
| \--nutui-popup-icon-size | 弹框关闭按钮的大小 | `18px` |
| \--nutui-popup-title-padding | 标题栏的padding值 | `16px` |
| \--nutui-popup-title-font-size | 标题栏的字号 | `18px` |
| \--nutui-popup-description-font-size | 子标题/描述栏的字号 | `10px` |
| \--nutui-popup-title-height | 标题栏的高度 | `50px` |
| \--nutui-popup-title-border-bottom | 标题栏底部边框 | `0` |
| \--nutui-popup-animation-duration | 弹框动画的延时 | `0.3s` |

## FAQ

在 iOS 下，有时候 `lockScroll` 可能不生效，此刻在打开 `popup` 时，可将宿主页面的样式增加 `overflow: hidden;`，关闭弹层时，再重置样式。
