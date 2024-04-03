import React from 'react'
import { Form, Input, TextArea, type FormInstance } from '@nutui/nutui-react'

const Demo3 = () => {
  return (
    <>
      <Form divider labelPosition="right">
        <Form.Item label="字段A" name="username">
          <Input placeholder="请输入字段A" type="text" />
        </Form.Item>
        <Form.Item label="字段D" name="address" shouldUpdate noStyle>
          {({ getFieldValue }: FormInstance) => {
            const value = getFieldValue('username')
            if (!value) return null
            return <TextArea placeholder="字段D" maxLength={100} />
          }}
        </Form.Item>
      </Form>
    </>
  )
}

export default Demo3
