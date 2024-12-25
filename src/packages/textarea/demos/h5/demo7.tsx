import React from 'react'
import { TextArea } from '@nutui/nutui-react'

const Demo7 = () => {
  return (
    <>
      <TextArea
        disabled
        defaultValue="textarea禁用状态"
        showCount
        type="container"
        maxLength={20}
      />
    </>
  )
}
export default Demo7
