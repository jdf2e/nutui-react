import React from 'react'
import {
  Button,
  Form,
  Input,
  InputNumber,
  TextArea,
} from '@nutui/nutui-react-taro'
import { FormItemRuleWithoutValidator } from '@/packages/formitem/types'

const Demo1 = () => {
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
          align="center"
          required
          label="字段A"
          name="username"
          rules={[
            { max: 5, message: '字段A不能超过5个字' },
            { required: true, message: '请输入字段A' },
            {
              validator: (
                ruleCfg: FormItemRuleWithoutValidator,
                value: string
              ) => {
                return value?.length > 5
              },
            },
          ]}
        >
          <Input
            className="nut-input-text"
            placeholder="请输入字段A"
            type="text"
          />
        </Form.Item>
        <Form.Item
          label="字段D"
          name="address"
          rules={[
            { max: 15, message: '字段D不能超过15个字' },
            { required: true, message: '请输入字段D' },
          ]}
        >
          <TextArea placeholder="请输入字段D" maxLength={100} />
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

export default Demo1
