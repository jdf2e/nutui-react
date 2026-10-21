import React from 'react'
import { Input, Cell } from '@nutui/nutui-react'
import Toast from '@/packages/toast'

const Demo12 = () => {
  return (
    <Cell style={{ display: 'block' }}>
      <Input placeholder="事件" onClick={() => Toast.show('onClick')} />
    </Cell>
  )
}
export default Demo12
