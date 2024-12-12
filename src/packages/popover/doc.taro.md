# Popover 气泡弹出框

点击或在元素上悬停鼠标，弹出气泡卡片浮层。

## 引入

```tsx
import { Popover } from '@nutui/nutui-react'
```

## 示例代码

### 基础用法

:::demo

<CodeBlock src='taro/demo1.tsx'></CodeBlock>

:::

### 选项配置

:::demo

<CodeBlock src='taro/demo2.tsx'></CodeBlock>

:::

### 自定义内容

:::demo

<CodeBlock src='taro/demo3.tsx'></CodeBlock>

:::

### 位置自定义：多条数据

通过 location 属性来控制气泡的弹出位置。可选值

```
top           # 顶部中间位置
left          # 左侧中间位置
right         # 右侧中间位置
bottom        # 底部中间位置
top-start     # 顶部左侧位置
top-end       # 顶部右侧位置
left-start    # 左侧上方位置
left-end      # 左侧下方位置
right-start   # 右侧上方位置
right-end     # 右侧下方位置
bottom-start  # 底部左侧位置
bottom-end    # 底部右侧位置
```

:::demo

<CodeBlock src='taro/demo4.tsx'></CodeBlock>

:::

### 位置自定义：单条数据

通过 location 属性来控制气泡的弹出位置。可选值

```
top           # 顶部中间位置
left          # 左侧中间位置
right         # 右侧中间位置
bottom        # 底部中间位置
top-start     # 顶部左侧位置
top-end       # 顶部右侧位置
bottom-start  # 底部左侧位置
bottom-end    # 底部右侧位置
```

:::demo

<CodeBlock src='taro/demo4-1.tsx'></CodeBlock>

:::

### 自定义目标元素

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### 自定义目标元素

:::demo

<CodeBlock src='taro/demo5.tsx'></CodeBlock>

:::

### 自定义颜色

:::demo

<CodeBlock src='taro/demo6.tsx'></CodeBlock>

:::

## Popover

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| list | 选项列表 | `PopoverList[]` | `[]` |
| visible | 是否展示气泡弹出层 | `boolean` | `false` |
| location | 弹出位置，里面具体的参数值可以参考上面的位置自定义例子 | `string` | `bottom` |
| offset | 出现位置的偏移量 | `string[]` \| `number[]` | `[0, 12]` |
| showArrow | 是否显示小箭头 | `boolean` | `true` |
| closeOnActionClick | 是否在点击选项后关闭 | `boolean` | `true` |
| closeOnOutsideClick | 是否在点击外部元素后关闭菜单 | `boolean` | `true` |
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
| \--nutui-popover-border-radius | popover 内容区的 border 的圆角值 | `8px` |
| \--nutui-popover-font-size | popover 内容区的 font-size 值 | `12px` |
| \--nutui-popover-text-color | 选项区的文字颜色 | `$color-title` |
| \--nutui-popover-content-background-color | 选项区的背景颜色 | `$white` |
| \--nutui-popover-hover-background-color | 手指点击菜单选项选中的背景颜色 | `#fff` |
| \--nutui-popover-hover-text-color | 手指点击菜单选项选中的文字颜色 | `#1a1a1a` |
| \--nutui-popover-border-color | top、bottom、left 和 right 的箭头颜色 | `$white` |
| \--nutui-popover-divider-color | 选项区的底部 border 颜色 | `$color-border` |
| \--nutui-popover-disable-color | 选项禁用的颜色 | `$color-text-disabled` |
| \--nutui-popover-menu-item-padding | 选项区菜单每一项的 padding 值 | `8px` |
| \--nutui-popover-menu-item-width | 选项区菜单每一项宽度值，超过宽度值后，会折行展示，保障信息的完整性 | `160px` |
