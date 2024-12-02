import React, { useState } from 'react'
import { Cell, Dialog } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'

const Demo7 = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <Cell
        title="自定义内容区域"
        onClick={() => {
          setVisible(true)
        }}
      />
      <Dialog
        className="test-dialog"
        title="自定义内容区域"
        visible={visible}
        onConfirm={() => setVisible(false)}
        onCancel={() => setVisible(false)}
      >
        <View>
          文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容
        </View>
        <View
          style={{
            height: '96px',
            borderRadius: '8px',
            marginTop: '13px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#F7F8FC',
            color: '#C2C4CC',
          }}
        >
          自定义内容区域
        </View>
      </Dialog>
    </>
  )
}
export default Demo7
