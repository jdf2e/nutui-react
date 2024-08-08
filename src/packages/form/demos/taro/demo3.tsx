import React from 'react'
import {
  Form,
  Input,
  TextArea,
  Button,
  type FormInstance,
} from '@nutui/nutui-react-taro'

const Demo3 = () => {
  return (
    <>
      <Form
        divider
        labelPosition="right"
        footer={
          <>
            <Button nativeType="submit" block type="primary">
              提交
            </Button>
          </>
        }
      >
        <Form.Item label="字段A" name="username" rules={[{ required: true }]}>
          <Input placeholder="请输入字段A" type="text" />
        </Form.Item>
        <Form.Item shouldUpdate noStyle>
          {({ getFieldValue }: FormInstance) => {
            const value = getFieldValue('username')
            if (!value) return null
            return (
              <Form.Item label="字段D" name="age" rules={[{ required: true }]}>
                <TextArea placeholder="字段D" maxLength={100} />
              </Form.Item>
            )
          }}
        </Form.Item>
      </Form>
    </>
  )
}

export default Demo3
