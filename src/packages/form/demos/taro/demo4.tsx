import React from 'react'
import Taro from '@tarojs/taro'
import {
  Form,
  Input,
  Button,
  type FormItemRuleWithoutValidator,
} from '@nutui/nutui-react-taro'

const Demo4 = () => {
  const submitFailed = (error: any) => {
    Taro.showToast({ title: JSON.stringify(error), icon: 'error' })
  }

  const submitSucceed = (values: any) => {
    Taro.showToast({ title: JSON.stringify(values), icon: 'success' })
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
          label="字段A"
          name="username"
          rules={[{ required: true, message: '请输入字段A' }]}
          initialValue="ZhangSan"
        >
          <Input placeholder="请输入字段A" type="text" />
        </Form.Item>
        <Form.Item
          label="字段B"
          name="age"
          initialValue={18}
          rules={[
            { required: true, message: '请输入字段B' },
            { validator: customValidator, message: '必须输入数字' },
            { validator: valueRangeValidator, message: '必须输入0-200区间' },
          ]}
        >
          <Input placeholder="请输入字段B，必须数字且0-200区间" type="number" />
        </Form.Item>
      </Form>
    </>
  )
}

export default Demo4
