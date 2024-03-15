/*
 * @Author: yeyu98
 * @Date: 2024-03-15 12:26:16
 * @LastEditors: yeyu98
 * @LastEditTime: 2024-03-15 12:34:43
 * @Description:
 */
import React, { useState } from 'react'
import { Input } from '@nutui/nutui-react'

const Demo3 = () => {
  const [val, setVal] = useState('NutUI React')
  return (
    <>
      <Input
        value={val}
        onChange={(val) => setVal(val)}
        placeholder="请输入文本"
      />
    </>
  )
}
export default Demo3
