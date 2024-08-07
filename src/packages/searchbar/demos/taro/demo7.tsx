import React, { useState } from 'react'
import { SearchBar } from '@nutui/nutui-react-taro'

const Demo7 = () => {
  const [value, setValue] = useState('')
  return (
    <>
      <SearchBar onChange={(val: string) => setValue(val)} maxLength={10} />
      <div
        style={{
          height: '40px',
          lineHeight: '40px',
          color: '#666',
          fontSize: '14px',
        }}
      >
        {value}
      </div>
    </>
  )
}
export default Demo7
