import React from 'react'
import {
  Form,
  Button,
  Input,
  Toast,
  type FormItemRuleWithoutValidator,
} from '@nutui/nutui-react'

const Demo2 = () => {
  const submitFailed = (error: any) => {
    Toast.show({ content: JSON.stringify(error), icon: 'fail' })
  }

  const submitSucceed = (values: any) => {
    Toast.show({ content: JSON.stringify(values), icon: 'success' })
  }

  // 函数校验
  const customValidator = (
    rule: FormItemRuleWithoutValidator,
    value: string
  ) => {
    return /^\d+$/.test(value)
  }

  const valueRangeValidator = (
    rule: FormItemRuleWithoutValidator,
    value: string
  ) => {
    return /^(\d{1,2}|1\d{2}|200)$/.test(value)
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
              提交
            </Button>
            <Button nativeType="reset" style={{ marginLeft: '20px' }}>
              重置
            </Button>
          </div>
        }
      >
        <Form.Item
          label="字段A"
          name="username"
          rules={[{ required: true, message: '请输入字段A' }]}
        >
          <Input placeholder="请输入字段A" type="text" />
        </Form.Item>
        <Form.Item
          label="字段B"
          name="age"
          rules={[
            { required: true, message: '请输入字段B' },
            { validator: customValidator, message: '必须输入数字' },
            { validator: valueRangeValidator, message: '必须输入0-200区间' },
          ]}
        >
          <Input placeholder="请输入字段B，必须数字且0-200区间" type="text" />
        </Form.Item>
        <Form.Item
          label="字段C"
          name="tel"
          rules={[{ max: 13, message: '请输入字段C' }]}
        >
          <Input placeholder="字段C格式不正确" type="number" />
        </Form.Item>
        <Form.Item
          label="字段D"
          name="address"
          rules={[{ required: true, message: '请输入字段D' }]}
        >
          <Input placeholder="请输入字段D" type="text" />
        </Form.Item>
      </Form>
    </>
  )
}

export default Demo2
