# Popover 气泡弹出框

点击或在元素上悬停鼠标，弹出气泡卡片浮层。

## 引入

```tsx
import { Popover } from '@nutui/nutui-react'
```

## 示例代码

### 气泡类型

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 选项配置

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 自定义内容+颜色

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 位置自定义：多条数据

通过 location 属性来控制气泡的弹出位置。可选值

> 注意：这里在 3.x 版本上发生了变化，参考 type 文件中的 `FullPosition` 类型。

```
top           # 顶部中间位置
left          # 左侧中间位置
right         # 右侧中间位置
bottom        # 底部中间位置
top-left      # 顶部左侧位置
top-right     # 顶部右侧位置
left-top      # 左侧上方位置
left-bottom   # 左侧下方位置
right-top     # 右侧上方位置
right-bottom  # 右侧下方位置
bottom-left   # 底部左侧位置
bottom-right  # 底部右侧位置
```

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 位置自定义：单条数据

通过 location 属性来控制气泡的弹出位置。

> 注意：这里在 3.x 版本上发生了变化，参考 type 文件中的 `FullPosition` 类型。

:::demo

<CodeBlock src='h5/demo4-1.tsx'></CodeBlock>

:::

### 自定义目标元素

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### 置于可滚动容器中

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### 容器设置 position: fixed

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

## Popover

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 气泡类型，`status` 状态型（图标+文案+关闭），`description` 说明型（仅文案） | `status` \| `description` | `status` |
| list | 选项列表 | `PopoverList[]` | `[]` |
| visible | 是否展示气泡弹出层 | `boolean` | `false` |
| theme | 主题风格，默认 `dark` 为设计规范深色气泡；`light` 为明亮风格（白底深字） | `light` \| `dark` | `dark` |
| location | 弹出位置，里面具体的参数值可以参考上面的位置自定义例子 | `FullPosition` | `bottom` |
| offset | 出现位置的偏移量 | `string[]` \| `number[]` | `[0, 8]` |
| arrowOffset | 小箭头的偏移量 | `number` | `20` |
| showArrow | 是否显示小箭头 | `boolean` | `true` |
| closeOnActionClick | 是否在点击选项后关闭 | `boolean` | `true` |
| closeOnOutsideClick | 是否在点击外部元素后关闭菜单 | `boolean` | `true` |
| autoShow | 是否自动弹出，需配合 `onOpen` 更新 `visible` | `boolean` | `false` |
| duration | 自动关闭时长（ms），`0` 表示不自动关闭 | `number` | `0` |
| targetId | 自定义目标元素 id | `string` | `-` |
| onClick | 点击切换 popover 展示状态 | `() => void` | `() => {}` |
| onSelect | 点击选项时触发 | `(item: PopoverList, index: number) => void` | `(item, index) => {}` |
| onOpen | 点击菜单时触发 | `() => void` | `() => {}` |
| onClose | 关闭菜单时触发 | `() => void` | `() => {}` |

```
此外，还支持Popup组件的overlayStyle、overlayClassName、overlay、closeOnOverlayClick属性。
```

### PopoverList 数据结构

PopoverList 属性是一个由对象构成的数组，数组中的每个对象配置一列，对象可以包含以下值：

| 键名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| key | 选项 key 值 | `string` | `-` |
| name | 选项文字 | `string` | `-` |
| icon | 参考 Icon 组件 | `ReactNode` | `-` |
| disabled | 是否为禁用状态 | `boolean` | `false` |
| className | 为对应选项添加额外的类名 | `string` | `-` |
| action | 为对应选项添加方法 | `{ icon?: React.ReactNode; onClick?: (e: any) => void }` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-popover-border-radius | popover 内容区的圆角 | `6px` |
| \--nutui-popover-font-size | popover 内容区的字号 | `12px` |
| \--nutui-popover-text-color | 文案颜色 | `$color-primary-text` |
| \--nutui-popover-content-background-color | 内容区背景色 | `$color-mask` |
| \--nutui-popover-divider-color | 多选项之间的分割线颜色 | `rgba(255, 255, 255, 0.12)` |
| \--nutui-popover-disable-color | 选项禁用的颜色 | `$color-text-disabled` |
| \--nutui-popover-padding-horizontal | 内容区水平内边距 | `8px` |
| \--nutui-popover-padding-vertical | 内容区垂直内边距 | `6px` |
| \--nutui-popover-height | 气泡高度 | `28px` |
| \--nutui-popover-icon-size | 图标尺寸 | `12px` |
| \--nutui-popover-icon-color | 图标颜色（80% 透明度） | `rgba(255, 255, 255, 0.8)` |
| \--nutui-popover-status-max-width | 状态型最大宽度 | `240px` |
| \--nutui-popover-description-max-width | 说明型最大宽度 | `208px` |
| \--nutui-popover-action-hotspot-size | 关闭按钮触控热区尺寸 | `36px` |
| \--nutui-popover-light-content-background-color | 明亮风格背景色 | `#ffffff` |
| \--nutui-popover-light-text-color | 明亮风格文案颜色 | `$color-mask` |
| \--nutui-popover-light-icon-color | 明亮风格图标颜色（80% 透明度） | `rgba(17, 20, 26, 0.8)` |
| \--nutui-popover-light-divider-color | 明亮风格分割线颜色 | `$color-border` |
| \--nutui-popover-padding | 兼容旧版水平内边距变量 | `8px` |
| \--nutui-popover-item-width | 兼容旧版选项宽度，等同状态型最大宽度 | `240px` |

<Contribution name="Popover" />
