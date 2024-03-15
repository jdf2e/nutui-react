import React from 'react'
import { Input, Button } from '@nutui/nutui-react'
import { Tips } from '@nutui/icons-react'

const Demo9 = () => {
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
        <div className="right">
          <Button type="primary" size="small">
            获取验证码
          </Button>
        </div>
      </div>
    </>
  )
}
export default Demo9
