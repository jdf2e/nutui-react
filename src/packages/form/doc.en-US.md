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

## Contribution

### Issues

- [[FR]: 你们的Native版本怎么不维护了？ 还缺少很多基础组件类似Form表单](https://github.com/jdf2e/nutui-react/issues/2942)
- [可以增加个在form里面对日历组件的使用方法吗，rules=[{required:true}]这种，还有目前只有重置全部表单，可以添加对单个item重置状态吗](https://github.com/jdf2e/nutui-react/issues/1948)
- [nutui-react-taro@2.7.2 FormItem的值如果是对象（如 {label:是，value:1} ），会自动重置成 {}](https://github.com/jdf2e/nutui-react/issues/2870)
- [[FR]: Form 表单组件Form.Item不支持复杂类型的字段](https://github.com/jdf2e/nutui-react/issues/2947)
- [[FR]: Form增加对象结构](https://github.com/jdf2e/nutui-react/issues/2650)

> View more [Issues](https://api.github.com/repos/jdf2e/nutui-react/issues?q=is%3Aissue+state%3Aclosed+label%3AForm)

### Component Logs

- ✨ feat(form): resetFields 增加 namepath 参数，用于重置指定的字段 ([#2953](https://github.com/jdf2e/nutui-react/pull/2953)) `v2.7.7`
- ✨ feat(form): add useWatch ([#2932](https://github.com/jdf2e/nutui-react/pull/2932)) `v2.7.7`
- 🐛 fix(form): 修复 formitem 的值如果是对象会自动重置为空对象的问题 ([#2952](https://github.com/jdf2e/nutui-react/pull/2952)) `v2.7.7`
- 🐛 fix(form): item label 未对齐 ([#2931](https://github.com/jdf2e/nutui-react/pull/2931)) `v2.7.6`
- 🐛 fix(form): 分割线未生效 ([#2927](https://github.com/jdf2e/nutui-react/pull/2927)) `v2.7.6`

> View more [Releases](https://api.github.com/repos/jdf2e/nutui-react/releases?q=form&expanded=true)
