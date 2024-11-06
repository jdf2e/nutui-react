import React, { useState } from 'react'
import { Popup, Cell } from '@nutui/nutui-react-taro'

const Demo6 = () => {
  const [showMountNode, setShowMountNode] = useState(false)

  return (
    <>
      <Cell
        title="指定节点挂载"
        onClick={() => {
          setShowMountNode(true)
        }}
      />
      <Popup
        visible={showMountNode}
        style={{ padding: '30px 50px' }}
        portal={document.body}
        onClose={() => {
          setShowMountNode(false)
        }}
      >
        body
      </Popup>
    </>
  )
}
export default Demo6
