import React, { useState } from 'react'
import { Input, Cell } from '@nutui/nutui-react'
import { Eye, Marshalling } from '@nutui/icons-react'

const Demo9 = () => {
  const [inputType, setInputType] = useState('password')
  return (
    <Cell style={{ display: 'block' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          background: '#f0f2f7',
          padding: '0 10px',
        }}
      >
        <Input type={inputType} placeholder="请输入密码" />
        <div
          className="right"
          onClick={() =>
            setInputType(inputType === 'text' ? 'password' : 'text')
          }
        >
          {inputType === 'text' ? (
            <Eye color="var(--nutui-gray-7)" />
          ) : (
            <Marshalling color="var(--nutui-gray-7)" />
          )}
        </div>
      </div>
    </Cell>
  )
}
export default Demo9
