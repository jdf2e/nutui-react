# Form 表單

## 介紹

用於數據錄入、校驗，支持輸入框、單選框、複選框等類型。

## 安裝

```javascript
import { Form } from '@nutui/nutui-react'
```

## 代碼演示

### 基礎用法

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
              提交
            </Button>
          </>
        }
      >
        <Form.Item
          required
          rules={[{ required: true, message: '姓名不能為空' }]}
          label="姓名"
          name="username"
        >
          <Input
            className="nut-input-text"
            placeholder="請輸入姓名"
            type="text"
          />
        </Form.Item>
        <Form.Item label="地址" name="address">
          <TextArea placeholder="請輸入地址" maxLength={100} />
        </Form.Item>
        <Form.Item
          label="數量"
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

### 表單校驗

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
              提交
            </Button>
            <Button nativeType="reset" style={{ marginLeft: '20px' }}>
              重置
            </Button>
          </div>
        }
      >
        <Form.Item
          label="姓名"
          name="username"
          rules={[{ required: true, message: "請輸入姓名" }]}
        >
          <Input placeholder="請輸入姓名" type="text" />
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
          label="电话"
          name="tel"
          rules={[{ required: true, message: "请输入联系电话" }]}
        >
          <Input placeholder="电话格式不正确" type="number" />
        </Form.Item>
        <Form.Item
          label="地址"
          name="address"
          rules={[{ required: true, message: "請輸入地址" }]}
        >
          <Input placeholder="請輸入地址" type="text" />
        </Form.Item>
      </Form>
    </>
  )
}

export default App;
```

:::

### 帶有初始值表單校驗

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
              提交
            </Button>
            <Button nativeType="reset" style={{ marginLeft: '20px' }}>
              重置
            </Button>
          </div>
        }
      >
        <Form.Item
          label="姓名"
          name="username"
          rules={[{ required: true, message: "請輸入姓名" }]}
          initialValue="ZhangSan"
        >
          <Input placeholder="請輸入姓名" type="text" />
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

### Form.useForm 對錶單數據域進行交互

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
          label="姓名"
          name="username"
          rules={[{ required: true, message: "請輸入姓名" }]}
        >
          <Input placeholder="請輸入姓名" type="text" />
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

### 表單類型

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
        footer={
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            <Button nativeType="submit" type="primary">
              提交
            </Button>
            <Button nativeType="reset" style={{ marginLeft: '20px' }}>
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
              return value.length
                ? pickerOptions.filter((po) => po.value === value[0])[0]?.text
                : 'select'
            }}
          </Picker>
        </Form.Item>
        <Form.Item
          label="Uploader"
          name="files"
          initialValue={[
            {
              name: '文件文件文件1.png',
              url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
              status: 'success',
              message: '上传成功',
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

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| form | 經 Form.useForm() 創建的 form 控制實例，不提供時會自動創建 | `FormInstance` | `-` |
| footer | 表單底部區域，一般放置確認和重置按鈕 | `ReactNode` | `null` |
| initialValues | 表單初始值 | `any` | `-` |
| name | 表單名稱 | `any` | `\` |
| labelPosition | 表單項 label 的位置 | `'top'\| 'left'|'right'` | `right` |
| starPosition | 必填表單項 label 的紅色星標位置 | `'left'\| 'right'` | `left` |
| onFinish | 校驗成功後觸發 | `(values: any) => void` | `-` |
| onFinishFailed | 任一表單項被校驗失敗後觸發 | `(values: any, errorFields: any) => void` | `-` |

## Form.Item

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| required | 必填表單項 label 的紅色星標,僅用於控製樣式 | `boolean` | `false` |
| name | 在使用表單校驗功能的情況下，該屬性是必填的 | `string` | `-` |
| labelWidth | 表單項 label 寬度，默認單位為`px` | `number \` | `string` |
| errorMessageAlign | 錯誤提示文案對齊方式 | \`\`'center'| 'right'\` | \`'left'\`\` |
| initialValue | 設置子元素默認值 | `any` | `-` |
| trigger | 設置收集字段值變更的時機 | `string` | `-` |
| valuePropName | 子節點的值的屬性，如 Checkbox 的是 'checked' | `string` | `-` |
| getValueFromEvent | 設置如何將 event 的值轉換成字段值 | `(...args: any) => any` | `-` |
| onClick | 點擊事件並收集子組件 Ref | `(event: React.MouseEvent, componentRef: React.MutableRefObject&lt;any>) =&gt; void` | `-` |

### Form.Item Rule

規則校驗處理基於[async-validator](https://github.com/yiminghe/async-validator) 更多規則配置可查看 async-validator 文檔。 使用 Form.Item 的`rules`屬性可以定義校驗規則，可選屬性如下:

| 屬性 | 說明 | 類型 |
| --- | --- | --- |
| required | 是否為必選字段 | `boolean` |
| message | 錯誤提示文案 | `string` |
| len | string 类型时为字符串长度；number 类型时为确定数字； array 类型时为数组长度 | `number` |
| max | 必须设置 type：string 类型为字符串最大长度；number 类型时为最大值；array 类型时为数组最大长度 | `number` |
| min | 必须设置 type：string 类型为字符串最小长度；number 类型时为最小值；array 类型时为数组最小长度 | `number` |
| pattern | 正则表达式匹配 | `number` |
| pattern | 正则表达式匹配 | `RegExp` |
| transform | 将字段值转换成目标值后进行校验 | `(value) => any` |
| validator | 自定义校验，接收 Promise 作为返回值 | `(rule, value) => Promise` |

### FormInstance

Form.useForm()創建 Form 實例，用於管理所有數據狀態。

| 屬性 | 說明 | 參數 | 返回值 |
| --- | --- | --- | --- |
| getFieldValue | 獲取對應字段名的值 | \- | (name: NamePath) => any |
| setFieldsValue | 設置表單的值 | \- | (values) => void |
| resetFields | 重置表單提示狀態 | \- | () => void |
| submit | 提交表單進行校驗的方法 | \- | Promise |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-form-item-error-line-color | 錯誤信息邊框顏色 | `$required-color` |
| \--nutui-form-item-required-color | 必選標識的字體顏色 | `$required-color` |
| \--nutui-form-item-error-message-color | 錯誤信息的文本顏色 | `$required-color` |
| \--nutui-form-item-label-font-size | label 字號 | `14px` |
| \--nutui-form-item-label-width | label 寬度 | `90px` |
| \--nutui-form-item-label-margin-right | label 右外邊距 | `10px` |
| \--nutui-form-item-label-text-align | label 文本對齊方式 | `left` |
| \--nutui-form-item-required-margin-right | label 必選的右外邊距 | `4px` |
| \--nutui-form-item-body-font-size | 表單容器的字號 | `14px` |
| \--nutui-form-item-body-slots-text-align | 表單項文本對齊方式 | `left` |
| \--nutui-form-item-body-input-text-align | 表單項輸入框的文本對齊方式 | `left` |
| \--nutui-form-item-tip-font-size | 錯誤信息的字號 | `10px` |
| \--nutui-form-item-tip-text-align | 錯誤信息的文本對齊方式 | `left` |