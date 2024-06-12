import React, { useState } from 'react'
import { Popup, Cell } from '@nutui/nutui-react-taro'

const Demo1 = () => {
  const [showBasic, setShowBasic] = useState(false)
  return (
    <>
      <Cell
        title="展示弹出层"
        onClick={() => {
          setShowBasic(true)
        }}
      />
      <Popup
        visible={showBasic}
        onClose={() => {
          setShowBasic(false)
        }}
      />
    </>
  )
}
export default Demo1
