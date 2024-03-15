import React from 'react'
import { Input, Button } from '@nutui/nutui-react-taro'
import { Tips } from '@nutui/icons-react-taro'

const Demo10 = () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          background: '#fff',
          padding: '0 10px',
        }}
      >
        <Tips />
        <Input placeholder="请输入短信验证码" />
        <div
          className="right"
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <Button type="primary" size="small">
            获取验证码
          </Button>
        </div>
      </div>
    </>
  )
}
export default Demo10
