import React, { useState } from 'react'
import { Cell, Dialog } from '@nutui/nutui-react'

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
        <>
          <div>
            文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容
          </div>
          <div
            style={{
              height: '96px',
              borderRadius: '8px',
              marginTop: '13px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#F8F8F8',
              color: '#BFBFBF',
            }}
          >
            自定义内容区域
          </div>
        </>
      </Dialog>
    </>
  )
}
export default Demo7
