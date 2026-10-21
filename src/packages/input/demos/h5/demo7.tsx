import React from 'react'
import { Input, Cell } from '@nutui/nutui-react'
import Form from '@/packages/form'

const Demo7 = () => {
  return (
    <Cell style={{ display: 'block' }}>
      <Form>
        <Form.Item
          label="文本"
          name="username"
          style={{ background: '#f0f2f7' }}
        >
          <Input
            className="nut-input-text"
            placeholder="请输入文本"
            type="text"
            onChange={(val) => {
              console.log('change value:', val)
            }}
            inputStyle={{ background: '#f0f2f7' }}
          />
        </Form.Item>
      </Form>
    </Cell>
  )
}
export default Demo7
