# Form

## Intro

It is used for data entry and verification, and supports input boxes, radio boxes, check boxes and other types.

## Install

```tsx
import { Form } from '@nutui/nutui-react'
```

## Demo

### Basic Usage

:::demo

```tsx
import React from "react";
import { Form, Button, InputNumber, Input, TextArea } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Form
        labelPosition="right"
        footer={
          <>
            <Button nativeType="submit" block type="primary">
              Submit
            </Button>
          </>
        }
      >
        <Form.Item
          required
          label="name"
          name="username"
          rules={[
            { max: 5, message: 'Name cannot exceed 5 characters' },
            { required: true, message: 'Please enter your name' },
          ]}
        >
          <Input
            className="nut-input-text"
            placeholder="Please type in your name"
            type="text"
          />
        </Form.Item>
        <Form.Item
          label="address"
          name="address"
          rules={[
            { max: 15, message: 'The address should not exceed 15 characters' },
            { required: true, message: 'Please enter your address' },
          ]}
        >
          <TextArea placeholder="please enter address" maxLength={100} />
        </Form.Item>
        <Form.Item
          label="count"
          name="num"
          getValueFromEvent={(...args) => args[0]}
        >
          <InputNumber />
        </Form.Item>
      </Form>
    </>
  )
}

export default App;
```

:::

### Form validation

:::demo

```tsx
import React from "react";
import { Form, Button, Input, TextArea } from '@nutui/nutui-react';


const App = () => {
  const submitFailed = (error: any) => {
    Toast.show({ content: JSON.stringify(error), icon: 'fail' })
  }

  const submitSucceed = (values: any) => {
    Toast.show({ content: JSON.stringify(values), icon: 'success' })
  }
  return (
    <>
      <Form
        divider
        labelPosition="left"
        onFinish={(values) => submitSucceed(values)}
        onFinishFailed={(values, errors) => submitFailed(errors)}
        footer={
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            <Button nativeType="submit" type="primary">
              submit
            </Button>
            <Button nativeType="reset" style={{ marginLeft: '20px' }}>
              reset
            </Button>
          </div>
        }
      >
        <Form.Item
          label="name"
          name="username"
          rules={[{ required: true, message: "Please type in your name" }]}
        >
          <Input placeholder="Please type in your name" type="text" />
        </Form.Item>
        <Form.Item
          label="age"
          name="age"
          rules={[
            { required: true, message: "Please enter age" },
            { validator: customValidator, message: "number must be entered" },
            {
              validator: valueRangeValidator,
              message: "0-200 range must be entered"
            },
          ]}
        >
          <Input placeholder="Please enter age，0-200 range must be entered"
                 type="text" />
        </Form.Item>
        <Form.Item
          label="telephone"
          name="tel"
          rules={[{ max: 13, message: "Please type your phone number" }]}
        >
          <Input placeholder="The phone format is incorrect" type="number" />
        </Form.Item>
        <Form.Item
          label="address"
          name="address"
          rules={[{ required: true, message: "please enter address" }]}
        >
          <Input placeholder="please enter address" type="text" />
        </Form.Item>
      </Form>
    </>
  )
}

export default App;
```

:::

### with initial value form validation

:::demo

```tsx
import React from "react";
import { Form, Input, Cell, Button } from '@nutui/nutui-react';

const App = () => {
  const submitFailed = (error: any) => {
    Toast.show({ content: JSON.stringify(error), icon: 'fail' })
  }

  const submitSucceed = (values: any) => {
    Toast.show({ content: JSON.stringify(values), icon: 'success' })
  }
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
        initialValues={{ username: 'LiSi', age: 20 }}
        onFinish={(values) => submitSucceed(values)}
        onFinishFailed={(values, errors) => submitFailed(errors)}
        footer={
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            <Button nativeType="submit" type="primary">
              submit
            </Button>
            <Button nativeType="reset" style={{ marginLeft: '20px' }}>
              reset
            </Button>
          </div>
        }
      >
        <Form.Item
          label="name"
          name="username"
          rules={[{ required: true, message: "Please type in your name" }]}
          initialValue="ZhangSan"
        >
          <Input placeholder="Please type in your name" type="text" />
        </Form.Item>
        <Form.Item label="age" name="age" initialValue={18} rules={[
          { required: true, message: "Please enter age" },
          { validator: customValidator, message: "number must be entered" },
          {
            validator: valueRangeValidator,
            message: "0-200 range must be entered"
          },
        ]}>
          <Input
            placeholder="Please enter age，0-200 range must be entered"
            type="number"
          />
        </Form.Item>
      </Form>
    </>
  )
}

export default App;
```

:::

### Form.useForm interacts with form data fields

:::demo

```tsx
import React from "react";
import { Form, Input, Radio, Cell } from '@nutui/nutui-react';

const App = () => {
  const submitFailed = (error: any) => {
    Toast.show({ content: JSON.stringify(error), icon: 'fail' })
  }

  const submitSucceed = (values: any) => {
    Toast.show({ content: JSON.stringify(values), icon: 'success' })
  }
  const onMenuChange = (value: string | number | boolean) => {
    switch (value) {
      case 'male':
        form.setFieldsValue({ note: '👨' })
        break
      case 'female':
        form.setFieldsValue({ note: '👩' })
        break
      default:
    }
  }
  return (
    <>
      <Form
        form={form}
        onFinish={(values) => submitSucceed(values)}
        onFinishFailed={(values, errors) => submitFailed(errors)}
      >
        <Form.Item
          label="name"
          name="username"
          rules={[{ required: true, message: "Please type in your name" }]}
        >
          <Input placeholder="Please type in your name" type="text" />
        </Form.Item>
        <Form.Item label="tag" name="note">
          <Input placeholder="Please enter a label" type="string" />
        </Form.Item>
        <Form.Item label="gender" name="gender">
          <Radio.Group onChange={onMenuChange}>
            <Radio value="male">male</Radio>
            <Radio value="female">female</Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
    </>
  )
}

export default App;
```

:::

### form type

:::demo

```tsx
import React from "react";
import {
  Form,
  Input,
  Cell,
  Switch,
  Checkbox,
  Radio,
  Picker,
  Uploader,
  Button,
  Rate,
  Range,
  Toast
} from '@nutui/nutui-react';
import { Right } from '@nutui/icons-react';

const App = () => {
  const submitFailed = (error: any) => {
    Toast.show({ content: JSON.stringify(error), icon: 'fail' })
  }

  const submitSucceed = (values: any) => {
    Toast.show({ content: JSON.stringify(values), icon: 'success' })
  }
  return (
    <>
      <Form
        style={{ '--nutui-form-item-label-width': '120px' }}
        footer={
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            <Button nativeType="submit" type="primary">
              submit
            </Button>
            <Button nativeType="reset" style={{ marginLeft: '20px' }}>
              reset
            </Button>
          </div>
        }
        onFinish={(values) => submitSucceed(values)}
        onFinishFailed={(values, errors) => submitFailed(errors)}
      >
        <Form.Item label="Input" name="form_input">
          <Input placeholder="placeholder" />
        </Form.Item>
        <Form.Item label="Switch" name="switch">
          <Switch />
        </Form.Item>
        <Form.Item label="Checkbox" name="checkbox">
          <Checkbox labelPosition="right" label="Option 1" />
        </Form.Item>
        <Form.Item label="Check Group" name="checkbox_group">
          <Checkbox.Group>
            <Checkbox labelPosition="right" label="Option 1" value={1} />
            <Checkbox labelPosition="right" label="Option 2" value={2} />
          </Checkbox.Group>
        </Form.Item>
        <Form.Item label="Radio" name="radio">
          <Radio value="1">Radio 1</Radio>
        </Form.Item>
        <Form.Item label="Radio Group" name="radio_group">
          <Radio.Group>
            <Radio value="1">Radio 1</Radio>
            <Radio value="2">Radio 2</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Rate" name="rate">
          <Rate defaultValue={0} />
        </Form.Item>
        <Form.Item label="Range" name="range">
          <Range max={10} min={-10} />
        </Form.Item>
        <Form.Item
          label="Picker"
          name="picker"
          trigger="onConfirm"
          getValueFromEvent={(...args) => args[1]}
          onClick={(event, ref: any) => {
            ref.open()
          }}
        >
          <Picker options={[pickerOptions]}>
            {(value: any) => {
              return (
                <Cell
                  style={{
                    padding: 0,
                    '--nutui-cell-divider-border-bottom': '0',
                  }}
                  className="nutui-cell--clickable"
                  title={
                    value.length
                      ? pickerOptions.filter((po) => po.value === value[0])[0]
                        ?.text
                      : 'Please select'
                  }
                  extra={<Right />}
                  align="center"
                />
              )
            }}
          </Picker>
        </Form.Item>
        <Form.Item
          label="Uploader"
          name="files"
          initialValue={[
            {
              name: 'file1.png',
              url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
              status: 'success',
              message: 'uploaded successfully',
              type: 'image',
              uid: '122',
            },
          ]}
        >
          <Uploader
            url="https://my-json-server.typicode.com/linrufeng/demo/posts" />
        </Form.Item>
      </Form>
    </>
  )
}


export default App;
```

:::

## Form

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| form | Form control instance created by Form.useForm(), if not provided, it will be created automatically | `FormInstance` | `-` |
| footer | The bottom area of the form, where confirmation and reset buttons are usually placed | `ReactNode` | `null` |
| initialValues | form initial values | `any` | `-` |
| name | form name | `any` | `-` |
| labelPosition | The position of the form item label | `top` \| `left` \| `right` | `right` |
| starPosition | The red star position of the required form item label |  `left` \| `right` | `left` |
| onFinish | Triggered after verification is successful | `(values: any) => void` | `-` |
| onFinishFailed | Triggered when any form item fails validation | `(values: any, errorFields: any) => void` | `-` |

## Form.Item

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| required | The red star of the required form item label, only used to control the style | `boolean` | `false` |
| name | In the case of using the form validation function, this attribute is required | `string` | `-` |
| label | Label name | `ReactNode` | `-` |
| errorMessageAlign | Error text alignment | `center` \| `right` \| `left` | `left` |
| initialValue | set the default value of child elements | `any` | `-` |
| trigger | Set the timing to collect field value changes | `string` | `-` |
| valuePropName | The property of the value of the child node, such as 'checked' for Checkbox | `string` | `-` |
| getValueFromEvent | Set how to convert event value to field value | `(...args: any) => any` | `-` |
| validateTrigger | When to validate the value of children node | `string \| string[]` | `onChange` |
| onClick | Click event and collect child component Ref | `(event: React.MouseEvent, componentRef: React.MutableRefObject<any>) => void` | `-` |

### Form.Item Rule

The rule validation process is based on [async-validator](https://github.com/yiminghe/async-validator). For more rule configurations, please refer to the async-validator documentation. Use the `rules` attribute of Form.Item to define validation rules, the optional attributes are as follows:

| Property | Description | Type |
| --- | --- | --- |
| required | whether it is a required field | `boolean` |
| message | error message text | `string` |
| len | String length for string type; definite number for number type; array length for array type | `number` |
| max | type must be set: the string type is the maximum length of the string; the number type is the maximum value; the array type is the maximum length of the array | `number` |
| min | type must be set: the string type is the minimum length of the string; the number type is the minimum value; the array type is the minimum length of the array | `number` |
| pattern | regular expression match | `number` |
| pattern | regular expression match | `RegExp` |
| transform | Convert the field value to the target value and perform validation | `(value) => any` |
| validator | custom validation, accept Promise as return value | `(rule, value) => Promise` |

### FormInstance

Form.useForm() creates a Form instance, which is used to manage all data states.

| Property | Description | Type |
| --- | --- | --- |
| getFieldValue | Get the value of the corresponding field name | `(name: NamePath) => any` |
| getFieldsValue | Get values by a set of field names. Return according to the corresponding structure. Default return mounted field value, but you can use getFieldsValue(true) to get all values | `(name: NamePath \| boolean) => any` |
| setFieldsValue | set field values | `(values) => void` |
| resetFields | Reset form prompt state | `() => void` |
| submit | method to submit a form for validation | `Promise` |

## Theming

### CSS Variables

The component provides the following CSS Variables, which can be used for custom styles, please refer to [ConfigProvider Component](#/zh-CN/component/configprovider) for usage.

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-form-item-error-line-color | Error message border color | `$required-color` |
| \--nutui-form-item-required-color | font color of required logo | `$required-color` |
| \--nutui-form-item-error-message-color | text color of error message | `$required-color` |
| \--nutui-form-item-label-font-size | label font size | `14px` |
| \--nutui-form-item-label-width | label width | `90px` |
| \--nutui-form-item-label-margin-right | label right margin | `10px` |
| \--nutui-form-item-label-text-align | label text alignment | `left` |
| \--nutui-form-item-required-margin-right | Required right margin for label | `4px` |
| \--nutui-form-item-body-font-size | Font size of form container | `14px` |
| \--nutui-form-item-body-slots-text-align | Form item text alignment | `left` |
| \--nutui-form-item-body-input-text-align | Text alignment of form item input box | `left` |
| \--nutui-form-item-tip-font-size | Font size for error messages | `10px` |
| \--nutui-form-item-tip-text-align | Text alignment for error messages | `left` |