# Label 标签

标识，用于显示静态文本内容的组件。

使用 for 属性找到对应的 id，或者将控件放在该标签下，当点击时，就会触发对应的控件。 for 优先级高于内部控件，内部有多个控件的时候默认触发第一个控件。 目前可以绑定的控件有：button, checkbox, radio, switch。

## 类型

```tsx
ComponentType<LabelProps>
```

## 示例代码

```tsx
class App extends Components {
  render() {
    return (
      <RadioGroup>
        <Label className='example-body__label' for='1' key='1'>
          <Radio value='USA'>USA</Radio>
        </Label>
        <Label className='example-body__label' for='2' key='2'>
          <Radio value='CHN' checked>
            CHN
          </Radio>
        </Label>
      </RadioGroup>
    )
  }
}
```

## LabelProps

| 属性 | 类型     | 必填 | 说明          |
| :--- | :------- | :--- | :------------ |
| for  | `string` | 否   | 绑定控件的 id |

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
