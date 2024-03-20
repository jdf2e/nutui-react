import React, { useState } from 'react'
import { Input, Cell, Button } from '@nutui/nutui-react-taro'

const Demo7 = () => {
  const [keyword, setKeyword] = useState('')
  return (
    <Cell
      style={{ alignItems: 'center' }}
      title={
        <Input
          placeholder="受控下的清除"
          value={keyword}
          onChange={setKeyword}
        />
      }
      extra={
        <Button
          type="primary"
          size="small"
          onClick={() => {
            setKeyword('')
          }}
        >
          点我清除
        </Button>
      }
    />
  )
}
export default Demo7
