import React, { useState } from 'react'
import { SearchBar } from '@nutui/nutui-react';

const Demo7 = () => {
  const [value, setValue] = useState('')
  const change = (val: string, e: Event) => {
    setValue(val)
  }
  return <>
    <SearchBar
      onChange={(val: string, e: Event) => change(val, e)}
      maxLength={10}
    />
    value：{value}
  </>
}
export default Demo7;