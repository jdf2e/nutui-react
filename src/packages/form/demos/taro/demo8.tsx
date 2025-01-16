import React from 'react'
import { Button, Form, Input, Radio, Space } from '@nutui/nutui-react-taro'

type FieldType = { account?: string; loginMethod?: 'mobile' | 'email' }

const Demo8 = () => {
  const [form] = Form.useForm()
  const account = Form.useWatch('account', form)
  const loginMethod = Form.useWatch('loginMethod', form)

  return (
    <Form
      form={form}
      initialValues={{ loginMethod: 'mobile', account: '123' }}
      footer={
        <>
          <div
            style={{
              width: '100%',
            }}
          >
            <div
              style={{
                fontSize: '12px',
                textAlign: 'center',
                marginBottom: '20px',
              }}
            >
              你将使用{loginMethod === 'mobile' ? '手机号' : '电子邮箱'}
              {account}登录
            </div>
            <Button block type="primary" size="large" nativeType="submit">
              提交
            </Button>
          </div>
        </>
      }
    >
      <Form.Item name="loginMethod" label="登录方式">
        <Radio.Group>
          <Space>
            <Radio value="mobile">手机号</Radio>
            <Radio value="email">电子邮箱</Radio>
          </Space>
        </Radio.Group>
      </Form.Item>

      <>
        {loginMethod === 'mobile' && (
          <Form.Item name="account" label="手机号">
            <Input placeholder="请输入手机号" />
          </Form.Item>
        )}
        {loginMethod === 'email' && (
          <Form.Item name="account" label="电子邮箱">
            <Input placeholder="请输入邮箱" />
          </Form.Item>
        )}
      </>
    </Form>
  )
}

export default Demo8
