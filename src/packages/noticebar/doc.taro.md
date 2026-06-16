# NoticeBar 公告栏

用于循环播放展示一组消息通知。

## 引入

```tsx
import { NoticeBar } from '@nutui/nutui-react-taro'
```

## 示例代码

### 基础用法

:::demo

<CodeBlock src='taro/demo1.tsx'></CodeBlock>

:::

### 居中布局，不支持滚动

:::demo

<CodeBlock src='taro/demo2.tsx'></CodeBlock>

:::

### 滚动播放

通知栏的内容长度溢出时会自动开启滚动播放，可通过 scrollable 属性可以控制该行为

:::demo

<CodeBlock src='taro/demo3.tsx'></CodeBlock>

:::

### 关闭模式

:::demo

<CodeBlock src='taro/demo4.tsx'></CodeBlock>

:::

### 多行展示

文字较长时，可以通过设置 wrap 属性来开启多行展示。默认为不滚动，可以通过设置 scrollable 控制为滚动。

:::demo

<CodeBlock src='taro/demo5.tsx'></CodeBlock>

:::

### 自定义右侧内容

增加自定义右侧区域，区分rightIcon，更灵活配置。

:::demo

<CodeBlock src='taro/demo6.tsx'></CodeBlock>

:::

### 自定义主题

:::demo

<CodeBlock src='taro/demo7.tsx'></CodeBlock>

:::

### 垂直滚动

:::demo

<CodeBlock src='taro/demo8.tsx'></CodeBlock>

:::

### 纵向模式：自定义左侧图标

:::demo

<CodeBlock src='taro/demo9.tsx'></CodeBlock>

:::

### 纵向模式：自定义滚动内容

:::demo

<CodeBlock src='taro/demo10.tsx'></CodeBlock>

:::

### 纵向模式：自定义右侧图标，动态变更滚动内容

:::demo

<CodeBlock src='taro/demo11.tsx'></CodeBlock>

:::

### 信息标与操作按钮

:::demo

<CodeBlock src='taro/demo12.tsx'></CodeBlock>

:::

### 自定义配图

:::demo

<CodeBlock src='taro/demo14.tsx'></CodeBlock>

:::

### 自动关闭

:::demo

<CodeBlock src='taro/demo13.tsx'></CodeBlock>

:::

## NoticeBar

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| align | 布局方式, 值为`center`时，不支持滚动 | `left` \| `center` | `left` |
| direction | 滚动的方向，可选 horizontal、vertical | `string` | `horizontal` |
| content | 提示的信息 | `string` | `-` |
| description | 副文本内容，显示在主文本下方 | `ReactNode` | `-` |
| tag | 信息标图标，显示在文案右侧，尺寸 12×12 | `ReactNode` | `-` |
| action | 操作按钮区域，支持弱行动（文字链接）和强行动（按钮），最大宽度 99px | `ReactNode` | `-` |
| closeable | 是否启用关闭模式 | `boolean` | `false` |
| autoClose | 自动关闭延时（毫秒），0 或不传为手动关闭 | `number` | `0` |
| leftIcon | 左边的 icon，closeable 模式下默认为空 | `ReactNode` | `-` |
| rightIcon | closeable 模式下，默认为 `<MaskClose />` | `ReactNode` | `-` |
| right | ~~已废弃，建议使用 action 替代~~ 右边自定义区域，仅用于 direction='horizontal' 模式 | `ReactNode` | `-` |
| delay | 延时多少秒 | `string` \| `number` | `1` |
| scrollable | 是否可以滚动 | `boolean` | `true` |
| speed | 滚动速率 (px/s) | `number` | `50` |
| wrap | 是否开启文本换行 | `boolean` | `false` |
| onClick | 外层点击事件回调 | `(event: any) => void` | `-` |
| onClose | 关闭通知栏时触发 | `(event: any) => void` | `-` |
| onItemClick | 垂直滚动多条数据时，点击当前展示的信息时触发 | `(event: any, value: any) => void` | `-` |

### Props（direction=vertical）

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| list | 纵向滚动数据列表 | `Array` | `[]` |
| speed | 滚动的速度 | `number` | `50` |
| duration | 停留时间(毫秒) | `number` | `1000` |
| height | 每一个滚动列的高度(px) | `number` | `40` |
| closeable | 是否启用右侧关闭图标，可以通过 rightIcon 自定义图标 | `boolean` | `false` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-noticebar-height | 高度 | `40px` |
| \--nutui-noticebar-background | 背景色 | `$color-background-overlay` |
| \--nutui-noticebar-color | 文字色 | `$color-title` |
| \--nutui-noticebar-icon-color | 图标色 | `$color-primary` |
| \--nutui-noticebar-font-size | 字号 | `$font-size-base` |
| \--nutui-noticebar-line-height | 行高 | `20px` |
| \--nutui-noticebar-box-padding | padding值 | `2px 8px` |
| \--nutui-noticebar-border-radius | 圆角 | `0` |
| \--nutui-noticebar-wrap-padding | 多行展示的padding值 | `9px 8px` |
| \--nutui-noticebar-icon-gap | icon、text间距 | `6px` |
| \--nutui-noticebar-left-icon-width | 左侧icon的宽度和高度的设定 | `24px` |
| \--nutui-noticebar-left-icon-wrap-width | 双行模式下icon的宽度和高度 | `32px` |
| \--nutui-noticebar-right-icon-width | 右侧icon的宽度和高度的设定 | `16px` |
| \--nutui-noticebar-close-size | 关闭按钮尺寸 | `20px` |
| \--nutui-noticebar-tag-size | 信息标尺寸 | `12px` |
| \--nutui-noticebar-tag-gap | 信息标与文本间距 | `4px` |
| \--nutui-noticebar-action-max-width | 操作按钮最大宽度 | `99px` |
| \--nutui-noticebar-action-gap | 操作按钮与文本间距 | `12px` |
| \--nutui-noticebar-action-font-size | 操作按钮字号 | `$font-size-xs` |
| \--nutui-noticebar-description-font-size | 副文本字号 | `11px` |
| \--nutui-noticebar-description-color | 副文本颜色 | `#666` |
| \--nutui-noticebar-description-line-height | 副文本行高 | `16px` |
| \--nutui-noticebar-left-icon-border-radius | 左侧图标圆角 | `4px` |
| \--nutui-noticebar-close-color | 关闭按钮颜色 | `$color-text-help` |
| \--nutui-noticebar-close-icon-size | 关闭图标尺寸 | `10px` |

<Contribution name="NoticeBar" />
