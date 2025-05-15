# Cascader 级联选择

级联选择器，用于多层级数据的选择，典型场景为省市区选择。

## 引入

```tsx
import { Cascader } from '@nutui/nutui-react'
```

## 示例代码

### 基础用法

传入`options`列表

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 基础用法-非受控

传入`options`列表

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### 自定义属性名称

可通过`optionKey` 指定属性名。

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 动态加载

`lazy` 属性表示开启数据的自动加载，Cascader 内部通过 `value` 和 `onLoad` 实现了自动加载数据的逻辑。`lazy` 属性必须和 `onLoad` 属性同时设置。
`onLoad`方法返回的数据类型为 `CascaderOption[]`

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 部分数据动态加载

部分数据动态加载是指已经设置了初始的 `options`，例如，首先获取了用户当前地址的数据，并赋值给 `options`，用户切换省份或地区的数据加载则通过 `onLoad` 方法实现。
**无需设置 `lazy` 属性。**

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 自动转换

如果你的数据为可转换为树形结构的扁平结构时，可以通过`format`告诉组件需要进行自动转换，`format`接受4个参数，`topId`为顶层节点的父级id，`idKey`为节点唯一id，`pidKey`为指向父节点id的属性名，存在`sortKey`将根据指定字段调用 Array.prototype.sort()进行同层排序。

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### 自定义样式

使用configprovider 完成自定义设置。

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

## Cascader

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 选中值，受控 | `(number \| string)[]` | `-` |
| defaultValue | 默认选中值 | `(number \| string)[]` | `-` |
| options | 级联数据 | `Array` | `-` |
| popup | 是否弹窗状态展示 | `boolean` | `true` |
| visible | 级联显示隐藏状态 | `boolean` | `false` |
| activeColor | 选中激活颜色 | `string` | `-` |
| activeIcon | 标记选中的Icon | `string` | `ReactNode` |
| lazy | 是否开启动态加载 | `boolean` | `false` |
| optionKey | 自定义`options`中的关键字，valueKey、textKey、childrenKey | `object` | `{valueKey: 'value', textKey: 'text', childrenKey: 'children'}` |
| format | 当options为可转换为树形结构的扁平结构时，配置转换规则 | `object` | `-` |
| title | 标题 | `string` | `-` |
| closeIconPosition | 取消按钮位置，继承 Popup 组件 | `string` | `top-right` |
| closeIcon | 自定义关闭按钮，继承 Popup 组件 | `ReactNode` | `close` |
| closeable | 是否显示关闭按钮，继承 Popup 组件 | `boolean` | `true` |
| onLoad | 动态加载回调，开启动态加载时生效 | `(node: any) => void` | `-` |
| onChange | 选中值改变时触发 | `(value: CascaderValue, pathNodes?: any) => void` | `-` |
| onPathChange | 选中项改变时触发 | `(value: CascaderValue, pathNodes: any) => void` | `-` |

### Ref

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| open | 显示 Cascader | `() => void` |
| close | 关闭 Cascader | `() => void` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-cascader-font-size | 级联总字号 | `$font-size-base` |
| \--nutui-cascader-pane-height | 级联面板高度 | `342px` |
| \--nutui-cascader-tabs-item-padding | 级联tabs的标题部分的padding 值 | `0 10px` |
| \--nutui-cascader-item-height | 级联数据每一条的高度 | `40px` |
| \--nutui-cascader-item-padding | 级联数据每一条的padding值 | `10px 20px` |
| \--nutui-cascader-item-margin | 级联数据每一条的margin值 | `0px` |
| \--nutui-cascader-item-border-bottom | 级联数据每一条的底部边框 | `0px solid #ddd` |
| \--nutui-cascader-item-color | 级联数据每一条的色值 | `$color-title` |
| \--nutui-cascader-item-font-size | 级联数据每一条的字号 | `$font-size-base` |
| \--nutui-cascader-item-active-color | 级联数据每一条的选中色值 | `$color-primary` |

<Contribution name="Cascader" />
