# MovableArea 可移动区域

MoveableView 用于创建可移动区域的组件，可在其中放置其他元素并进行拖拽操作。

## 类型

```tsx
ComponentType<MovableAreaProps>
```

## 示例代码

```tsx
class App extends Components {
  render() {
    return (
      <MovableArea style='height: 200px; width: 200px; background: red;'>
        <MovableView style='height: 50px; width: 50px; background: blue;' direction='all'>
          旅行的意义
        </MovableView>
      </MovableArea>
    )
  }
}
```

## MovableAreaProps

| 属性      | 类型      | 默认值  | 必填 | 说明                                                                                            |
| :-------- | :-------- | :------ | :--- | :---------------------------------------------------------------------------------------------- |
| scaleArea | `boolean` | `false` | 否   | 当里面的 movable-view 设置为支持双指缩放时，设置此值可将缩放手势生效区域修改为整个 movable-area |

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
