import React from 'react'
import { Form, Input } from '@nutui/nutui-react'

const Demo6 = () => {
  return (
    <>
      <Form>
        <Form.Item
          label="字段A"
          name="username"
          required
          validateTrigger="onBlur"
          rules={[{ required: true, message: '请输入字段A' }]}
        >
          <Input placeholder="请输入字段A" type="text" />
        </Form.Item>
      </Form>
    </>
  )
}

export default Demo6
