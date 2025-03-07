# Form 表单

用于数据录入、校验，支持输入框、单选框、复选框等类型。

## 引入

```tsx
import { Form } from '@nutui/nutui-react'
```

## 示例代码

### 基础用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 表单校验

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 关联展示

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 带有初始值表单校验

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### Form.useForm 对表单数据域进行交互

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### 校验触发时机

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### useWatch

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

### 表单类型

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

## Form

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| form | 经 Form.useForm() 创建的 form 控制实例，不提供时会自动创建 | `FormInstance` | `-` |
| footer | 表单底部区域，一般放置确认和重置按钮 | `ReactNode` | `null` |
| initialValues | 表单初始值 | `any` | `-` |
| name | 表单名称 | `any` | `-` |
| labelPosition | 表单项 label 的位置 | `top` \| `left` \| `right` | `right` |
| starPosition | 必填表单项 label 的红色星标位置 | `left` \| `right` | `left` |
| validateTrigger | 统一设置字段触发验证的时机 | `string` \| `string[]` \| `false` | `onChange` |
| disabled | 是否禁用 | `boolean` | `false` |
| onFinish | 校验成功后触发 | `(values: any) => void` | `-` |
| onFinishFailed | 任一表单项被校验失败后触发 | `(values: any, errorFields: any) => void` | `-` |

## Form.Item

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| required | 必填表单项 label 的红色星标,仅用于控制样式 | `boolean` | `false` |
| name | 在使用表单校验功能的情况下，该属性是必填的 | `string` | `-` |
| label | 标签名 | `ReactNode` | `-` |
| errorMessageAlign | 错误提示文案对齐方式 | `center` \| `right` \| `left` | `left` |
| initialValue | 设置子元素默认值 | `any` | `-` |
| noStyle | 不使用样式，只使用字段管理 | `boolean` | `false` |
| shouldUpdate | 更新逻辑 | `boolean` | `false` |
| trigger | 设置收集字段值变更的时机 | `string` | `-` |
| align | 对齐方式 | `flex-start` \| `center` \| `flex-end` | `flex-start` |
| valuePropName | 子节点的值的属性，如 Checkbox 的是 'checked' | `string` | `-` |
| getValueFromEvent | 设置如何将 event 的值转换成字段值 | `(...args: any) => any` | `-` |
| validateTrigger | 统一设置字段触发验证的时机 | `string \| string[]` | `onChange` |
| onClick | 点击事件并收集子组件 Ref | `(event: React.MouseEvent, componentRef: React.MutableRefObject<any>) => void` | `-` |

### Form.Item Rule

规则校验处理基于[async-validator](https://github.com/yiminghe/async-validator) 更多规则配置可查看 async-validator 文档。 使用 Form.Item 的`rules`属性可以定义校验规则，可选属性如下:

| 属性 | 说明 | 类型 |
| --- | --- | --- |
| required | 是否为必选字段 | `boolean` |
| message | 错误提示文案 | `string` |
| len | string 类型时为字符串长度；number 类型时为确定数字； array 类型时为数组长度 | `number` |
| max | 必须设置 type：string 类型为字符串最大长度；number 类型时为最大值；array 类型时为数组最大长度 | `number` |
| min | 必须设置 type：string 类型为字符串最小长度；number 类型时为最小值；array 类型时为数组最小长度 | `number` |
| pattern | 正则表达式匹配 | `RegExp` |
| transform | 将字段值转换成目标值后进行校验 | `(value) => any` |
| validator | 自定义校验，接收 Promise 作为返回值 | `(rule, value) => Promise` |

### FormInstance

`Form.useForm()`创建 Form 实例，用于管理所有数据状态。

| 属性 | 说明 | 类型 |
| --- | --- | --- |
| getFieldValue | 获取对应字段名的值 | `(name: NamePath) => any` |
| getFieldsValue | 获取一组字段名对应的值，会按照对应结构返回。默认返回现存字段值，当调用 getFieldsValue(true) 时返回所有值 | `(name: NamePath \| boolean) => any` |
| setFieldsValue | 设置表单的值（该值将直接传入 form store 中。如果你不希望传入对象被修改，请克隆后传入） | `(values) => void` |
| setFieldValue | 设置对应字段名的值 | `<T>(name: NamePath, value: T) => void` |
| resetFields | 重置表单提示状态 | `(namePaths?: NamePath[]) => void` |
| submit | 提交表单进行校验的方法 | `Promise` |

`Form.useWatch()`此方法将监视指定的输入并返回其值。它对于呈现输入值和确定根据条件呈现的内容很有用。

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-form-item-error-line-color | 错误信息边框颜色 | `$color-primary` |
| \--nutui-form-item-required-color | 必选标识的字体颜色 | `$color-primary` |
| \--nutui-form-item-error-message-color | 错误信息的文本颜色 | `$color-primary` |
| \--nutui-form-item-label-font-size | label 字号 | `14px` |
| \--nutui-form-item-label-width | label 宽度 | `90px` |
| \--nutui-form-item-label-margin-right | label 右外边距 | `10px` |
| \--nutui-form-item-label-text-align | label 文本对齐方式 | `left` |
| \--nutui-form-item-required-margin-right | label 必选的右外边距 | `4px` |
| \--nutui-form-item-body-font-size | 表单容器的字号 | `14px` |
| \--nutui-form-item-body-slots-text-align | 表单项文本对齐方式 | `left` |
| \--nutui-form-item-body-input-text-align | 表单项输入框的文本对齐方式 | `left` |
| \--nutui-form-item-tip-font-size | 错误信息的字号 | `10px` |
| \--nutui-form-item-tip-text-align | 错误信息的文本对齐方式 | `left` |
