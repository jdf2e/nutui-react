import React from 'react'
import { Input, Toast } from '@nutui/nutui-react-taro'

const Demo9 = () => {
  return (
    <>
      <Input placeholder="事件" onClick={() => Toast.show('onClick')} />
    </>
  )
}
export default Demo9
