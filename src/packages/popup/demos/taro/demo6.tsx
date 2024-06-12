import React, { useState } from 'react'
import { Text } from '@tarojs/components'
import { Popup, Cell } from '@nutui/nutui-react-taro'

const Demo5 = () => {
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
        <Text>body</Text>
      </Popup>
    </>
  )
}
export default Demo5
