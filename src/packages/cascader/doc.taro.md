# Cascader 级联选择

级联选择器，用于多层级数据的选择，典型场景为省市区选择。

## 引入

```tsx
import { Cascader } from '@nutui/nutui-react-taro'
```

## 示例代码

### 基础用法

传入`options`列表

:::demo

<CodeBlock src='taro/demo1.tsx'></CodeBlock>

:::

### 自定义属性名称

可通过`textKey`、`valueKey`、`childrenKey`指定属性名。

:::demo

<CodeBlock src='taro/demo2.tsx'></CodeBlock>

:::

### 动态加载

使用`lazy`标识是否需要动态获取数据，此时不传`options`代表所有数据都需要通过`onLoad`加载，首次加载通过`root`属性区分，当遇到非叶子节点时会调用`onLoad`方法，参数为当前节点和`resolve`方法，注意`resolve`方法必须调用，不传子节点时会被当做叶子节点处理。

:::demo

<CodeBlock src='taro/demo3.tsx'></CodeBlock>

:::

### 部分数据动态加载

:::demo

<CodeBlock src='taro/demo4.tsx'></CodeBlock>

:::

### 自动转换

如果你的数据为可转换为树形结构的扁平结构时，可以通过`format`告诉组件需要进行自动转换，`format`接受4个参数，`topId`为顶层节点的父级id，`idKey`为节点唯一id，`pidKey`为指向父节点id的属性名，存在`sortKey`将根据指定字段调用Array.prototype.sort()进行同层排序。

:::demo

<CodeBlock src='taro/demo5.tsx'></CodeBlock>

:::

### 自定义样式

使用configprovider 完成自定义设置

:::demo

<CodeBlock src='taro/demo6.tsx'></CodeBlock>

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
| format | 当options为可转换为树形结构的扁平结构时，配置转换规则 | `Object` | `-` |
| title | 标题 | `string` | `-` |
| closeIconPosition | 取消按钮位置，继承 Popup 组件 | `string` | `top-right` |
| closeIcon | 自定义关闭按钮，继承 Popup 组件 | `ReactNode` | `close` |
| closeable | 是否显示关闭按钮，继承 Popup 组件 | `boolean` | `true` |
| onLoad | 动态加载回调，开启动态加载时生效 | `(node: any, resolve: any) => void` | `-` |
| onChange | 选中值改变时触发 | `(value: CascaderValue, params?: any) => void` | `-` |
| onPathChange | 选中项改变时触发 | `(value: CascaderValue, params: any) => void` | `-` |

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
