import React, { useState } from 'react'
import { Cell, Dialog, Image } from '@nutui/nutui-react-taro'

const Demo8 = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <Cell
        title="顶部带插图"
        onClick={() => {
          setVisible(true)
        }}
      />
      <Dialog
        className="test-dialog"
        title="顶部带插图"
        visible={visible}
        header={
          <div style={{ height: '166px' }}>
            <Image
              src="https://img13.360buyimg.com/imagetools/jfs/t1/219330/27/30033/11784/6544af3fF5c0fd98f/64c41bb05ef09189.png"
              mode="aspectFit"
            />
          </div>
        }
        onConfirm={() => setVisible(false)}
        onCancel={() => setVisible(false)}
      >
        支持函数调用和组件调用两种方式。
      </Dialog>
    </>
  )
}
export default Demo8
