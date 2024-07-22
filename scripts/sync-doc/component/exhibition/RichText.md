# RichText 富文本

用于显示富文本内容的组件。

## 类型

```tsx
ComponentType<RichTextProps>
```

## 示例代码

```tsx
class App extends Components {
  state = {
    nodes: [
      {
        name: 'div',
        attrs: {
          class: 'div_class',
          style: 'line-height: 60px; color: red;',
        },
        children: [
          {
            type: 'text',
            text: 'Hello World!',
          },
        ],
      },
    ],
  }
  render() {
    return <RichText nodes={this.state.nodes} />
  }
}
```

## RichTextProps

| 属性             | 类型                  | 默认值                                                              | 必填 | 说明                                                                                                                                                                     |
| :--------------- | :-------------------- | :------------------------------------------------------------------ | :--- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| userSelect       | `boolean`             | `false`                                                             | 否   | 文本是否可选，该属性会使节点显示为 block                                                                                                                                 |
| nodes            | `Nodes`               |                                                                     | 否   | 节点列表/ HTML String                                                                                                                                                    |
| space            | `keyof TSpace`        |                                                                     | 否   | 显示连续空格                                                                                                                                                             |
| selectable       | `string`              | `false（基础库 3.150.1 以前版本）true（基础库 3.150.1 及以后版本）` | 否   | 富文本是否可以长按选中，可用于复制，粘贴，长按搜索等场景                                                                                                                 |
| imageMenuPrevent | `string`              | `false`                                                             | 否   | 阻止长按图片时弹起默认菜单（将该属性设置为 image-menu-prevent 或 image-menu-prevent="true"），只在初始化时有效，不能动态变更；若不想阻止弹起默认菜单，则不需要设置此属性 |
| preview          | `string`              |                                                                     | 否   | 富文本中的图片是否可点击预览。在不设置的情况下，若 rich-text 未监听点击事件，则默认开启。未显示设置 preview 时会进行点击默认预览判断，建议显示设置 preview               |
| onTap            | `CommonEventFunction` |                                                                     | 否   | 触摸。                                                                                                                                                                   |
| onTouchstart     | `CommonEventFunction` |                                                                     | 否   | 触摸动作开始。                                                                                                                                                           |
| onTouchmove      | `CommonEventFunction` |                                                                     | 否   | 触摸移动事件。                                                                                                                                                           |
| onTouchcancel    | `CommonEventFunction` |                                                                     | 否   | 触摸动作被打断。                                                                                                                                                         |
| onTouchend       | `CommonEventFunction` |                                                                     | 否   | 触摸动作结束。                                                                                                                                                           |
| onLongtap        | `CommonEventFunction` |                                                                     | 否   | 触摸后，超过 500ms 再离开。                                                                                                                                              |

### TSpace

space 的合法值

| 属性 | 说明                   |
| :--- | :--------------------- |
| ensp | 中文字符空格一半大小   |
| emsp | 中文字符空格大小       |
| nbsp | 根据字体设置的空格大小 |

### Text

文本节点

| 属性 | 类型     | 默认值 | 说明       | 备注            |
| :--- | :------- | :----- | :--------- | :-------------- |
| type | `"text"` |        | 文本类型   |                 |
| text | `string` | `""`   | 文本字符串 | `支持 entities` |

### HTMLElement

元素节点，默认为元素节点
全局支持 class 和 style 属性，不支持 id 属性。

| 属性     | 类型     | 必填 | 说明       | 备注                                       |
| :------- | :------- | :--- | :--------- | :----------------------------------------- |
| type     | `"node"` | 否   | HTML 类型  |                                            |
| name     | `string` | 是   | 标签名     | `支持部分受信任的 HTML 节点`               |
| attrs    | `Object` | 否   | 属性       | `支持部分受信任的属性，遵循 Pascal 命名法` |
| children | `Nodes`  | 否   | 子节点列表 | `结构和 nodes 一致`                        |

## Nodes

节点类型

> 现支持两种节点，通过 type 来区分，分别是元素节点和文本节点，默认是元素节点，在富文本区域里显示的 HTML 节点 元素节点：type = node\*

### 类型

```tsx
(Text | HTMLElement)[] | string
```
<!-- 
## Props 与 API 支持度

| 属性 | H5  | Harmony | React Native | 微信小程序 | 京东小程序 |
| :--: | :-: | :-----: | :----------: | :--------: | :--------: |
|  -   | ✔️  |   ✔️    |      ✔️      |     ✔️     |     ✔️     |
|  -   | ✔️  |   ✔️    |      ✔️      |     ✔️     |     ✔️     |
|  -   | ✔️  |   ✔️    |      ✔️      |     ✔️     |     ✔️     |
|  -   | ✔️  |   ✔️    |      ✔️      |     ✔️     |     ✔️     |
|  -   | ✔️  |   ✔️    |      ✔️      |     ✔️     |     ✔️     |
|  -   | ✔️  |   ✔️    |      ✔️      |     ✔️     |     ✔️     |
-->