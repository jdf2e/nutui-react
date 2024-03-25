import React from 'react'
import { Input, Button } from '@nutui/nutui-react'
import { Tips } from '@nutui/icons-react'

const Demo13 = () => {
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
        <Tips color="var(--nutui-gray-7)" />
        <Input
          placeholder="请输入短信验证码"
          style={{ '--nutui-input-padding': '10px' }}
        />
        <div className="right">
          <Button type="primary" size="small">
            获取验证码
          </Button>
        </div>
      </div>
    </>
  )
}
export default Demo13
