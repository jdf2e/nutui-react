import React, { useState } from 'react'
import { SearchBar, Cell } from '@nutui/nutui-react'

const Demo7 = () => {
  const [value, setValue] = useState('')
  return (
    <>
      <Cell style={{ flexDirection: 'column' }}>
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
      </Cell>
    </>
  )
}
export default Demo7
