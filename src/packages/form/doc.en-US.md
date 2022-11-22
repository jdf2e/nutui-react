# Form

### Intro

It is used for data entry and verification. It supports input box, radio box, check box and other types.

### Install

```javascript
import { Form } from '@nutui/nutui-react'
```

### Basic Usage
:::demo
```
<Form>
  <Form.Item label='Name' name="username">
    <Input
      className="nut-input-text"
      placeholder='Please enter your name'
      type="text"
    />
  </Form.Item>
  <Form.Item label='Remark' name="remark">
    <TextArea placeholder='Please enter remarks' />
  </Form.Item>
</Form>
```
:::

### Top Align

:::demo
```
<Form labelPosition="Top">
  <Form.Item label='Name' name="username">
    <Input
      className="nut-input-text"
      placeholder='Please enter your name'
      type="text"
    />
  </Form.Item>
  <Form.Item label='Remark' name="remark">
    <TextArea placeholder='Please enter remarks' />
  </Form.Item>
</Form>
```
:::

### Validate Form
:::demo
```
<Form
  onFinish={(obj) => submitSucceed(obj)}
  onFinishFailed={(error) => submitFailed(error)}
>
  <Form.Item label='Name' name="username">
    <Input
      className="nut-input-text"
      placeholder='Please enter your name'
      type="text"
    />
  </Form.Item>
  <Form.Item label='Age' name="age">
    <Input placeholder='Please enter age' type="number" />
  </Form.Item>
  <Form.Item label='Tel' name="tel">
    <Input placeholder='Please enter tel number' type="number" />
  </Form.Item>
  <Form.Item label='Address' name="address">
    <Input placeholder='Please enter address' type="text" />
  </Form.Item>
  <Cell>
    <input type="submit" value='Submit' />
  </Cell>
</Form>
```
:::

### Form Type

:::demo
```
<Form
  onFinish={(obj) => submitSucceed(obj)}
  onFinishFailed={(error) => submitFailed(error)}
>
  <Form.Item label='Switch' name="switch">
    <Switch />
  </Form.Item>
  <Form.Item label='Checkbox' name="checkbox">
    <Checkbox
      textPosition="right"
      label='Checkbox'
      checked={false}
    />
  </Form.Item>
  <Form.Item label='Radio' name="radiogroup">
    <Radio.RadioGroup>
      <Radio value="1">Value1</Radio>
      <Radio value="2">Value2</Radio>
      <Radio value="3">Value3</Radio>
    </Radio.RadioGroup>
  </Form.Item>
  <Form.Item label='Rate' name="rate">
    <Rate modelValue={0} />
  </Form.Item>
  <Form.Item label='Range' name="range">
    <Range modelValue={0} max={10} min={-10} />
  </Form.Item>
  <Cell>
    <input type="submit" value='Submit' />
  </Cell>
</Form>
```
:::
## API

### Form Props

| Attribute        | Description | TYPE   | DEFAULT |
|-------------|--------------------------|--------|--------|
| labelPosition | label's position，the default value is Right，can be Top、Left、Right | string |        |
| starPositon | the position of the red asterisk next to the label of the required filed ，the default is Left，can be Left、Right | string |        |

### Form Events

| Event   | Description | Arguments |
|----------|-------------------|---------------|
| onFinish | validated succeed  | form data |
| onFinishFailed | validated failed | error message |

### Form.Item Props

| Attribute | Description | TYPE | DEFAULT  |
|-----------|-------------|------------------|---------|
| required | Is it a required field | boolean | `false` |
| name | the field of the form field is required when the form verification function is used | string | - |
| labelWidth | The width of the form item label. The default unit is `px` | number \| string | `90px`  |
| errorMessageAlign | Error prompt text alignment. The optional values are `center` and `right`  | string           | `left`  |

### Form.Item Rule Data Structure

Use the `rules` attribute of Form.Item to define verification rules. The optional attributes are as follows:

| Attribute      | Description                   | TYPE |
|-----------|------------------------|----------|
| required  | Is it a required field       | boolean |
| message   | Error prompt copy           | string |

### Form Instance Methods

| Name           | Description | Attribute | Callback  |
|-------------------|-----------------------------|-----|---------|
| submit | the function of submit the form | - | Promise |
