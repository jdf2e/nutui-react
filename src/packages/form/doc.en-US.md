# Form

It is used for data entry and verification, and supports input boxes, radio boxes, check boxes and other types.

## Import

```tsx
import { Form } from '@nutui/nutui-react'
```

## Demo

### Basic Usage

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Form validation

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### Related Display

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### with initial value form validation

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### Form.useForm interacts with form data fields

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### Validate Trigger

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### useWatch

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

### Form Type

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

## Form

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| form | Form control instance created by Form.useForm(), if not provided, it will be created automatically | `FormInstance` | `-` |
| footer | The bottom area of the form, where confirmation and reset buttons are usually placed | `ReactNode` | `null` |
| initialValues | form initial values | `any` | `-` |
| noStyle | Do not use styles, only use field management | `boolean` | `false` |
| shouldUpdate | Update logic | `boolean` | `false` |
| name | form name | `any` | `-` |
| labelPosition | The position of the form item label | `top` \| `left` \| `right` | `right` |
| starPosition | The red star position of the required form item label | `left` \| `right` | `left` |
| disabled | Disable all form fields | `boolean` | `false` |
| validateTrigger | uniformly set the timing for fields to trigger validation | `string` \| `string[]`\| `false` | `onChange` |
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
| align | Alignment | `flex-start` \| `center` \| `flex-end` | `flex-start` |
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

`Form.useForm()` creates a Form instance, which is used to manage all data states.

| Property | Description | Type |
| --- | --- | --- |
| getFieldValue | Get the value of the corresponding field name | `(name: NamePath) => any` |
| getFieldsValue | Get values by a set of field names. Return according to the corresponding structure. Default return mounted field value, but you can use getFieldsValue(true) to get all values | `(name: NamePath \| boolean) => any` |
| setFieldsValue | Set the value of the form (the value will be passed directly to the form store. If you do not want the object passed in to be modified, please copy it and pass it in) | `(values) => void` |
| setFieldValue | Set the value of the corresponding field name | `<T>(name: NamePath, value: T) => void` |
| resetFields | Reset form prompt state | `(namePaths?: NamePath[]) => void` |
| submit | method to submit a form for validation | `Promise` |

`Form.useWatch()`, this method will watch specified inputs and return their values. It is useful to render input value and for determining what to render by condition.

## Theming

### CSS Variables

The component provides the following CSS Variables, which can be used for custom styles, please refer to [ConfigProvider Component](#/zh-CN/component/configprovider) for usage.

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-form-item-error-line-color | Error message border color | `$color-primary` |
| \--nutui-form-item-required-color | font color of required logo | `$color-primary` |
| \--nutui-form-item-error-message-color | text color of error message | `$color-primary` |
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
