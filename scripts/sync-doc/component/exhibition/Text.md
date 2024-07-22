# Text 文本

用于显示文本内容的组件。

## 类型

```tsx
ComponentType<TextProps>
```

## 示例代码

```tsx
export default class PageView extends Component {
  state = {
    contents: [],
    contentsLen: 0,
  }

  add = () => {
    this.setState((prev) => {
      const cot = prev.contents.slice()
      cot.push({ text: 'hello world' })
      return {
        contents: cot,
        contentsLen: cot.length,
      }
    })
  }

  remove = () => {
    this.setState((prev) => {
      const cot = prev.contents.slice()
      cot.pop()
      return {
        contents: cot,
        contentsLen: cot.length,
      }
    })
  }

  render() {
    return (
      <View className='container'>
        {this.state.contents.map((item, index) => (
          <Text key={index}>{item.text}</Text>
        ))}
        <Button className='btn-max-w button_style' plain type='default' onClick={this.add}>
          add line
        </Button>
        <Button
          className='btn-max-w button_style'
          plain
          type='default'
          disabled={this.state.contentsLen ? false : true}
          onClick={this.remove}>
          remove line
        </Button>
      </View>
    )
  }
}
```

## TextProps

| 属性          | 类型           | 默认值  | 必填 | 说明                                                                  |
| :------------ | :------------- | :------ | :--- | :-------------------------------------------------------------------- |
| selectable    | `boolean`      | `false` | 否   | 文本是否可选                                                          |
| userSelect    | `boolean`      | `false` | 否   | 文本是否可选，该属性会使文本节点显示为 inline-block                   |
| space         | `keyof TSpace` |         | 否   | 显示连续空格                                                          |
| decode        | `boolean`      | `false` | 否   | 是否解码                                                              |
| numberOfLines | `number`       |         | 否   | 多行省略，值须大于等于 1，表现同 css 的 -webkit-line-clamp 属性一致。 |
| maxLines      | `number`       |         | 否   | 限制文本最大行数                                                      |

### TSpace

space 的合法值

| 属性 | 说明                   |
| :--- | :--------------------- |
| ensp | 中文字符空格一半大小   |
| emsp | 中文字符空格大小       |
| nbsp | 根据字体设置的空格大小 |

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