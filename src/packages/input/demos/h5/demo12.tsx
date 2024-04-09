import React from 'react'
import { Input } from '@nutui/nutui-react'
import Toast from '@/packages/toast'

const Demo12 = () => {
  return (
    <>
      <Input placeholder="事件" onClick={() => Toast.show('onClick')} />
    </>
  )
}
export default Demo12
