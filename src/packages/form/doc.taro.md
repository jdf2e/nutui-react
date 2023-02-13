# Form 表单

### 介绍

用于数据录入、校验，支持输入框、单选框、复选框等类型。

### 安装
```javascript
import { Form } from '@nutui/nutui-react-taro'
```

### 基础用法
:::demo
```
import  React from "react";
import { Form, Input, TextArea } from '@nutui/nutui-react-taro';

const App = () => {
  return (
    <>
       <Form>
        <Form.Item label='姓名' name="username">
          <Input
            className="nut-input-text"
            placeholder='请输入姓名'
            type="text"
          />
        </Form.Item>
        <Form.Item label='备注' name="remark">
          <TextArea placeholder='请输入备注' />
        </Form.Item>
      </Form>
    </>
  )
}

export default App;
```
:::

### 顶部对齐

:::demo
```
import  React from "react";
import { Form, Input, TextArea } from '@nutui/nutui-react-taro';


const App = () => {
  return (
    <>
      <Form labelPosition="Top">
        <Form.Item label='姓名' name="username">
          <Input
            className="nut-input-text"
            placeholder='请输入姓名'
            type="text"
          />
        </Form.Item>
        <Form.Item label='备注' name="remark">
          <TextArea placeholder='请输入备注' />
        </Form.Item>
      </Form>
    </>
  )
}

export default App;

```
:::

### 表单校验
:::demo
```
import  React from "react";
import { Form, Input, Cell } from '@nutui/nutui-react-taro';


const App = () => {
  return (
    <>
      <Form
        onFinish={(obj) => submitSucceed(obj)}
        onFinishFailed={(error) => submitFailed(error)}
      >
        <Form.Item label='姓名' name="username">
          <Input
            className="nut-input-text"
            placeholder='请输入姓名'
            type="text"
          />
        </Form.Item>
        <Form.Item label='年龄' name="age">
          <Input placeholder='请填写年龄' type="number" />
        </Form.Item>
        <Form.Item label='联系电话' name="tel">
          <Input placeholder='请填写联系电话' type="number" />
        </Form.Item>
        <Form.Item label='地址' name="address">
          <Input placeholder='请填写地址' type="text" />
        </Form.Item>
        <Cell>
          <input type="submit" value='提交' />
        </Cell>
      </Form>
    </>
  )
}


export default App;
```
:::

### 表单类型
:::demo
```
import  React from "react";
import { Form, Input, Cell, Switch, Checkbox, Radio, Rate, Range } from '@nutui/nutui-react-taro';


const App = () => {
  return (
    <>
      <Form
        onFinish={(obj) => submitSucceed(obj)}
        onFinishFailed={(error) => submitFailed(error)}
      >
        <Form.Item label='开关' name="switch">
          <Switch />
        </Form.Item>
        <Form.Item label='复选框' name="checkbox">
          <Checkbox
            textPosition="right"
            label='复选框'
            checked={false}
          />
        </Form.Item>
        <Form.Item label='单选按钮' name="radiogroup">
          <Radio.RadioGroup>
            <Radio value="1">选项1</Radio>
            <Radio value="2">选项2</Radio>
            <Radio value="3">选项3</Radio>
          </Radio.RadioGroup>
        </Form.Item>
        <Form.Item label='评分' name="rate">
          <Rate modelValue={0} />
        </Form.Item>
        <Form.Item label='滑块' name="range">
          <Range modelValue={0} max={10} min={-10} />
        </Form.Item>
        <Cell>
          <input type="submit" value='提交' />
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

| 参数        | 说明                                 | 类型   | 默认值 |
|-------------|--------------------------------------|--------|--------|
| labelPosition | 表单项 label 的位置，默认 Right，可设置为 Top、Left、Right | string |        |
| starPositon | 必填表单项 label 的红色星标位置，默认 Left，可设置为 Left、Right | string |        |

### Form Events

| 事件名   | 说明                       | 回调参数                                                   |
|----------|-------------------|---------------------------------------|
| onFinish | 校验成功后触发 | 表单数据 |
| onFinishFailed | 任一表单项被校验失败后触发 | 被校验的表单项 prop 值，校验是否通过，错误消息（如果存在） |

### Form.Item Props

| 参数                | 说明                         | 类型             | 默认值  |
|---------------------|--------------------------------|------------------|---------|
| required            | 必填表单项 label 的红色星标 | boolean          | `false` |
| name                | 在使用表单校验功能的情况下，该属性是必填的 | string           | -       |
| labelWidth         | 表单项 label 宽度，默认单位为`px` | number \| string | `90px`  |
| errorMessageAlign | 错误提示文案对齐方式，可选值为 `center` `right`                  | string           | `left`  |

### Form.Item Rule 数据结构

使用 Form.Item 的`rules`属性可以定义校验规则，可选属性如下:

| 键名      | 说明                   | 类型 |
|-----------|------------------------|----------|
| required  | 是否为必选字段       | boolean |
| message   | 错误提示文案           | string |

### Form 实例 Methods

| 方法名            | 说明 | 参数 | 返回值  |
|-------------------|-----------------------------|-----|---------|
| submit | 提交表单进行校验的方法 | - | Promise |


## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 默认值 |
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
