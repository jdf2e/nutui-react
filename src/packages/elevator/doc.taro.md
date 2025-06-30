# Elevator 电梯楼层

用于列表快速定位以及索引的显示

## 引入

```tsx
import { Elevator } from '@nutui/nutui-react-taro'
```

## 示例代码

### 基础用法

:::demo

<CodeBlock src='taro/demo1.tsx'></CodeBlock>

:::

### 自定义索引

:::demo

<CodeBlock src='taro/demo2.tsx'></CodeBlock>

:::

### 不展示右侧导航

:::demo

<CodeBlock src='taro/demo3.tsx'></CodeBlock>

:::

### 吸顶索引

:::demo

<CodeBlock src='taro/demo4.tsx'></CodeBlock>

:::

### 自定义内容

:::demo

<CodeBlock src='taro/demo5.tsx'></CodeBlock>

:::

## Elevator

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 当前选中的值 | `{id: number \| string, name: string}` | - |
| defaultValue | 默认选中的值，受控 | `{id: number \| string, name: string}` | - |
| mode | 电梯结构展示模式 | `horizontal` \| `vertical` | `horizontal` |
| height | 电梯区域的高度 | `number` \| `string` | `200px` |
| floorKey | 索引 key 值 | `string` | `title` |
| list | 索引列表 | `Array（item 需包含 id、name 属性, name 支持传入 html 结构）` | `[{id: 0, name: ''}]` |
| sticky | 索引是否吸顶 | `boolean` | `false` |
| showKeys | 展示右侧导航 | `boolean` | `true` |
| spaceHeight | 右侧锚点的上下间距 | `number` | `18` |
| onItemClick | 点击内容 | `onItemClick:(key: string, item: { id: number, name: string })=>void` | `false` |
| onIndexClick | 点击索引 | `onIndexClick:(key: string)=>void` | `false` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-elevator-list-bg-color | 楼层区域背景颜色 | `$white` |
| \--nutui-elevator-list-font-size | 楼层区域列表项字体大小 | `$font-size-base` |
| \--nutui-elevator-list-color | 楼层区域列表项字体颜色 | `$color-title` |
| \--nutui-elevator-list-item-padding | 楼层区域列表项内边距 | `0 36px 0 20px` |
| \--nutui-elevator-list-item-name-height | 楼层区域列表项高度 | `34px` |
| \--nutui-elevator-list-item-code-font-size | 楼层区域列表项标题字体大小 | `$font-size-base` |
| \--nutui-elevator-list-item-code-color | 楼层区域列表项标题颜色 | `$color-text-help` |
| \--nutui-elevator-list-item-code-font-weight | 楼层区域列表项标题字体粗细 | `$font-weight-bold` |
| \--nutui-elevator-list-item-code-height | 楼层区域列表项标题高度 | `34px` |
| \--nutui-elevator-list-item-code-border-bottom | 楼层区域列表项标题下边框宽度 | `1px solid $color-border` |
| \--nutui-elevator-list-item-code-current-bg-color | 电梯提示背景颜色 | `$color-text-disabled` |
| \--nutui-elevator-list-item-code-current-border-radius | 电梯提示圆角 | `50%` |
| \--nutui-elevator-list-item-code-current-width | 电梯提示宽度 | `45px` |
| \--nutui-elevator-list-item-code-current-height | 电梯提示高度 | `45px` |
| \--nutui-elevator-list-item-code-current-right | 电梯提示定位后右边缘位置 | `60px` |
| \--nutui-elevator-list-item-code-current-top | 电梯提示定位后top边缘位置 | `50%` |
| \--nutui-elevator-bars-right | 电梯楼层定位后右边缘位置 | `16px` |
| \--nutui-elevator-bars-top | 电梯楼层定位后顶部边缘位置 | `50%` |
| \--nutui-elevator-bars-transform | 电梯楼层定位后滑动距离 | `translateY(-50%)` |
| \--nutui-elevator-bars-active-color | 电梯楼层文字颜色 | `$white` |
| \--nutui-elevator-bars-color | 电梯楼层高亮文字颜色 | `$color-text-help` |
| \--nutui-elevator-bars-z-index | 电梯楼层层级 | `1` |
| \--nutui-elevator-bars-font-size | 电梯楼层标识项字体大小 | `$font-size-xxs` |
| \--nutui-elevator-list-fixed-color | 吸顶楼层文字颜色 | `$color-primary` |
| \--nutui-elevator-list-fixed-bg-color | 吸顶楼层背景颜色 | `$white` |
| \--nutui-elevator-list-fixed-box-shadow | 吸顶楼层阴影 | `0 0 10px #eee` |

<Contribution name="Elevator" />
