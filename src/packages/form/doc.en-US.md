# Form

### Intro

It is used for data entry and verification. It supports input box, radio box, check box and other types.

### Install

```javascript
import { Form } from '@nutui/nutui-react'
```

### Basic Usage
:::demo
```tsx
import  React from "react";
import { Form, Input, TextArea } from '@nutui/nutui-react';
const App = () => {
  return (
    <>
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
    </>
  )
}
export default App;
```
:::

### Top Align

:::demo
```tsx
import  React from "react";
import { Form, Input, TextArea } from '@nutui/nutui-react';
const App = () => (
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
)

export default App;
```
:::

### Validate Form
:::demo
```tsx
import  React from "react";
import { Form, Input, Cell } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
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
    </>
  )
}

export default App;
```
:::

### InitialValue Validate Type
:::demo

```tsx
import  React from "react";
import { Form, Input, Cell } from '@nutui/nutui-react';

const App = () => {
  // 函数校验
  const customValidator = (rule: FormItemRuleWithoutValidator, value: string) => {
    return /^\d+$/.test(value)
  }

  const valueRangeValidator = (rule: FormItemRuleWithoutValidator, value: string) => {
    return /^(\d{1,2}|1\d{2}|200)$/.test(value)
  }
  return (
    <>
      <Form
        onFinish={(obj) => submitSucceed(obj)}
        onFinishFailed={(error) => submitFailed(error)}
      >
        <Form.Item label='Name' name="username" rules={[{ required: true, message: 'Please enter your name' }]}>
          <Input
            className="nut-input-text"
            placeholder='Please enter your name'
            type="text"
          />
        </Form.Item>
        <Form.Item label='Age' name="age" rules={[
          { required: true, message: 'Please enter age' },
          { validator: customValidator, message: 'must enter number' },
          { validator: valueRangeValidator, message: '0-200 range must be entered' },
        ]}>
          <Input placeholder='Please enter the age, it must be a number and the range is 0-200' type="number" />
        </Form.Item>
        <Form.Item label='Tel' name="tel" rules={[{ required: true, message: 'please enter tel' }]}>
          <Input placeholder='please enter tel' type="number" />
        </Form.Item>
        <Form.Item label='Address' name="address" rules={[{ required: true, message: 'Please enter address' }]}>
          <Input placeholder='Please enter address' type="text" />
        </Form.Item>
        <Cell>
          <input type="submit" value='Submit' />
          <input type="reset" style={{ marginLeft: '15px' }}
            value="Reset notification status"
          />
        </Cell>
      </Form>
    </>
  )
}

export default App;
```
:::

### Interact with form data fields via Form.useForm
:::demo

```tsx
import  React from "react";
import { Form, Input, Cell } from '@nutui/nutui-react';

const App = () => {
  const [form] = Form.useForm()
  const onMenuChange = (value: string | number | boolean) => {
    switch (value) {
      case 'male':
        form.setFieldsValue({ note: 'Hi, man!' })
        break
      case 'female':
        form.setFieldsValue({ note: 'Hi, lady!' })
        break
      case 'other':
        form.setFieldsValue({ note: 'Hi there!' })
        break
      default:
    }
  }
  return (
    <>
      <Form
        form={form}
        onFinish={(obj) => submitSucceed(obj)}
        onFinishFailed={(error) => submitFailed(error)}
      >
        <Form.Item label="Note" name="note">
          <Input placeholder="please input note" type="string" />
        </Form.Item>
        <Form.Item label={translated.radiogroup} name="radiogroup">
          <Radio.RadioGroup onChange={onMenuChange}>
            <Radio value="male">male</Radio>
            <Radio value="female">female</Radio>
            <Radio value="other">other</Radio>
          </Radio.RadioGroup>
        </Form.Item>
        <Cell>
          <input type="submit" value={translated.submit} />
        </Cell>
      </Form>
    </>
  )
}

export default App;
```
:::
### Form Type

:::demo
```tsx
import  React from "react";
import { Form, Input, Cell, Switch, Checkbox, Radio, Rate, Range } from '@nutui/nutui-react';


const App = () => {
  return (
    <>
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
    </>
  )
}

export default App;
```
:::
## API

### Form Props

| Attribute        | Description | TYPE   | DEFAULT |
|-------------|--------------------------|--------|--------|
| form`v1.4.8` | The form control instance created by Form.useForm() will be created automatically if not provided | FormInstance |        |
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
| initialValue`v1.4.7` | Set child element default value                  | string           | -  |

### Form.Item Rule Data Structure

Use the `rules` attribute of Form.Item to define verification rules. The optional attributes are as follows:

| Attribute      | Description                   | TYPE |
|-----------|------------------------|----------|
| required  | Is it a required field       | boolean |
| message   | Error prompt copy           | string |

### Form Instance Methods

Form.useForm() creates a Form instance, which is used to manage all data states.

| Name           | Description | Attribute | Callback  |
|-------------------|-----------------------------|-----|---------|
| getFieldValue | Get the value of the corresponding field name | - | (name: NamePath) => any |
| setFieldsValue | Set the value of the form | - | (values) => void |
| resetFields`1.4.8` | Reset form prompt state | - | () => void |
| submit | the function of submit the form | - | Promise |


## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| --nutui-form-item-error-line-color | `  $required-color` |
| --nutui-form-item-required-color | `  $required-color` |
| --nutui-form-item-error-message-color | `  $required-color` |
| --nutui-form-item-label-font-size | `  14px` |
| --nutui-form-item-label-width | ` 90px` |
| --nutui-form-item-label-margin-right | `  10px` |
| --nutui-form-item-label-text-align | `  left` |
| --nutui-form-item-required-margin-right | `  4px` |
| --nutui-form-item-body-font-size | ` 14px` |
| --nutui-form-item-body-slots-text-align | `  left` |
| --nutui-form-item-body-input-text-align | `  left` |
| --nutui-form-item-tip-font-size | ` 10px` |
| --nutui-form-item-tip-text-align | ` left` |
