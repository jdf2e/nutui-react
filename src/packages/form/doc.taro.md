# Form 表单

## 介绍

用于数据录入、校验，支持输入框、单选框、复选框等类型。

## 安装

```tsx
import { Form } from '@nutui/nutui-react-taro'
```

## 代码演示

### 基础用法

:::demo

```tsx
import React from "react";
import {
  Form,
  Button,
  InputNumber,
  Input,
  TextArea
} from '@nutui/nutui-react-taro';

const App = () => {
  return (
    <>
      <Form
        labelPosition="right"
        footer={
          <>
            <Button formType="submit" block type="primary">
              提交
            </Button>
          </>
        }
      >
        <Form.Item
          required
          label="姓名"
          name="username"
          rules={[
            { max: 5, message: '姓名不能超过5个字' },
            { required: true, message: '请输入姓名' },
          ]}
        >
          <Input
            className="nut-input-text"
            placeholder="请输入姓名"
            type="text"
          />
        </Form.Item>
        <Form.Item
          label="地址"
          name="address"
          rules={[
            { max: 15, message: '地址不能超过15个字' },
            { required: true, message: '请输入地址' },
          ]}
        >
          <TextArea placeholder="请输入地址" maxLength={100} />
        </Form.Item>
        <Form.Item
          label="数量"
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

### 表单校验

:::demo

```tsx
import React from "react";
import { Form, Button, Input, TextArea } from '@nutui/nutui-react-taro';


const App = () => {
  const submitFailed = (error: any) => {
    Taro.showToast({ title: JSON.stringify(error), icon: 'error' })
  }

  const submitSucceed = (values: any) => {
    Taro.showToast({ title: JSON.stringify(values), icon: 'success' })
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
            <Button formType="submit" type="primary">
              提交
            </Button>
            <Button formType="reset" style={{ marginLeft: '20px' }}>
              重置
            </Button>
          </div>
        }
      >
        <Form.Item
          label="姓名"
          name="username"
          rules={[{ required: true, message: "请输入姓名" }]}
        >
          <Input placeholder="请输入姓名" type="text" />
        </Form.Item>
        <Form.Item
          label="年龄"
          name="age"
          rules={[
            { required: true, message: "请输入年龄" },
            { validator: customValidator, message: "必须输入数字" },
            { validator: valueRangeValidator, message: "必须输入0-200区间" },
          ]}
        >
          <Input placeholder="请输入年龄，必须数字且0-200区间" type="text" />
        </Form.Item>
        <Form.Item
          label="联系电话"
          name="tel"
          rules={[{ max: 13, message: "请输入联系电话" }]}
        >
          <Input placeholder="电话格式不正确" type="number" />
        </Form.Item>
        <Form.Item
          label="地址"
          name="address"
          rules={[{ required: true, message: "请输入地址" }]}
        >
          <Input placeholder="请输入地址" type="text" />
        </Form.Item>
      </Form>
    </>
  )
}

export default App;
```

:::

### 带有初始值表单校验

:::demo

```tsx
import React from "react";
import { Form, Input, Cell, Button } from '@nutui/nutui-react-taro';

const App = () => {
  const submitFailed = (error: any) => {
    Taro.showToast({ title: JSON.stringify(error), icon: 'error' })
  }

  const submitSucceed = (values: any) => {
    Taro.showToast({ title: JSON.stringify(values), icon: 'success' })
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
            <Button formType="submit" type="primary">
              提交
            </Button>
            <Button formType="reset" style={{ marginLeft: '20px' }}>
              重置
            </Button>
          </div>
        }
      >
        <Form.Item
          label="姓名"
          name="username"
          rules={[{ required: true, message: "请输入姓名" }]}
          initialValue="ZhangSan"
        >
          <Input placeholder="请输入姓名" type="text" />
        </Form.Item>
        <Form.Item label="年龄" name="age" initialValue={18} rules={[
          { required: true, message: "请输入年龄" },
          { validator: customValidator, message: "必须输入数字" },
          { validator: valueRangeValidator, message: "必须输入0-200区间" },
        ]}>
          <Input
            placeholder="请输入年龄，必须数字且0-200区间"
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

### Form.useForm 对表单数据域进行交互

:::demo

```tsx
import React from "react";
import { Form, Input, Radio, Cell } from '@nutui/nutui-react-taro';

const App = () => {
  const submitFailed = (error: any) => {
    Taro.showToast({ title: JSON.stringify(error), icon: 'error' })
  }

  const submitSucceed = (values: any) => {
    Taro.showToast({ title: JSON.stringify(values), icon: 'success' })
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
          label="姓名"
          name="username"
          rules={[{ required: true, message: "请输入姓名" }]}
        >
          <Input placeholder="请输入姓名" type="text" />
        </Form.Item>
        <Form.Item label="标注" name="note">
          <Input placeholder="请输入标注" type="string" />
        </Form.Item>
        <Form.Item label="性别" name="gender">
          <Radio.Group onChange={onMenuChange}>
            <Radio value="male">男性</Radio>
            <Radio value="female">女性</Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
    </>
  )
}

export default App;
```

:::

### 表单类型

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
} from '@nutui/nutui-react-taro';
import { Right } from '@nutui/icons-react-taro';

const App = () => {
  const submitFailed = (error: any) => {
    Taro.showToast({ title: JSON.stringify(error), icon: 'error' })
  }

  const submitSucceed = (values: any) => {
    Taro.showToast({ title: JSON.stringify(values), icon: 'success' })
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
            <Button formType="submit" type="primary">
              提交
            </Button>
            <Button formType="reset" style={{ marginLeft: '20px' }}>
              重置
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
              message: 'success',
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

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| form | 经 Form.useForm() 创建的 form 控制实例，不提供时会自动创建 | `FormInstance` | `-` |
| footer | 表单底部区域，一般放置确认和重置按钮 | `ReactNode` | `null` |
| initialValues | 表单初始值 | `any` | `-` |
| name | 表单名称 | `any` | `-` |
| labelPosition | 表单项 label 的位置 | \`\`'top'| 'left'\` | \`'right'\`\` |
| starPosition | 必填表单项 label 的红色星标位置 |  `left` \| `right` | `left` |
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
| trigger | 设置收集字段值变更的时机 | `string` | `-` |
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

Form.useForm()创建 Form 实例，用于管理所有数据状态。

| 属性 | 说明 | 类型 |
| --- | --- | --- |
| getFieldValue | 获取对应字段名的值 | `(name: NamePath) => any` |
| getFieldsValue | 获取一组字段名对应的值，会按照对应结构返回。默认返回现存字段值，当调用 getFieldsValue(true) 时返回所有值 | `(name: NamePath \| boolean) => any` |
| setFieldsValue | 设置表单的值 | `(values) => void` |
| resetFields | 重置表单提示状态 | `() => void` |
| submit | 提交表单进行校验的方法 | `Promise` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-form-item-error-line-color | 错误信息边框颜色 | `$required-color` |
| \--nutui-form-item-required-color | 必选标识的字体颜色 | `$required-color` |
| \--nutui-form-item-error-message-color | 错误信息的文本颜色 | `$required-color` |
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