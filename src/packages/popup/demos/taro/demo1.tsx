import React, { useState } from 'react'
import { Popup, Cell } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'

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
        <View style={{ height: '200px', overflowY: 'scroll' }}>
          {Array.from({ length: 20 })
            .fill('')
            .map((_, i) => (
              <Cell key={i}>
                <View>正文</View>
              </Cell>
            ))}
        </View>
      </Popup>
    </>
  )
}
export default Demo1
