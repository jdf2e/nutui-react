import React from 'react'
import { Input } from '@nutui/nutui-react'
import { Close } from '@nutui/icons-react'

const Demo6 = () => {
  return (
    <>
      <Input clearable placeholder="显示清除图标" />
      <Input clearable clearIcon={<Close />} placeholder="显示清除图标" />
    </>
  )
}
export default Demo6
