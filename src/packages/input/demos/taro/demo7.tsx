import React, { useState } from 'react'
import { Input, Cell, Button } from '@nutui/nutui-react-taro'

const Demo7 = () => {
  const [keyword, setKeyword] = useState('')
  return (
    <Cell
      title={
        <Input
          placeholder="受控下的清除"
          value={keyword}
          onChange={setKeyword}
        />
      }
      extra={
        <Button
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
