import React from 'react'
import Taro from '@tarojs/taro'
import { Form, Input, Radio } from '@nutui/nutui-react-taro'

const Demo5 = () => {
  const submitFailed = (error: any) => {
    Taro.showToast({ title: JSON.stringify(error), icon: 'error' })
  }

  const submitSucceed = (values: any) => {
    Taro.showToast({ title: JSON.stringify(values), icon: 'success' })
  }

  const [form] = Form.useForm()
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
          label="字段A"
          name="username"
          rules={[{ required: true, message: '请输入字段A' }]}
        >
          <Input placeholder="请输入字段A" type="text" />
        </Form.Item>
        <Form.Item label="标注" name="note">
          <Input placeholder="请输入标注" type="string" />
        </Form.Item>
        <Form.Item label="字段E" name="gender">
          <Radio.Group onChange={onMenuChange}>
            <Radio value="male">A</Radio>
            <Radio value="female">B</Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
    </>
  )
}

export default Demo5
