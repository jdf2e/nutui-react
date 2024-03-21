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
        style={{ padding: '30px 50px' }}
        onClose={() => {
          setShowBasic(false)
        }}
      >
        正文
      </Popup>
    </>
  )
}
export default Demo1
