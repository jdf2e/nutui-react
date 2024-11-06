import React, { useState } from 'react'
import { Popup, Cell, Dialog } from '@nutui/nutui-react'

const Demo7 = () => {
  const [showMutiple, setShowMutiple] = useState(false)
  const [showMutipleInner, setShowMutipleInner] = useState(false)
  const [showDialog, setShowDialog] = useState(false)

  return (
    <>
      <Cell
        title="多层堆叠"
        onClick={() => {
          setShowMutiple(true)
        }}
      />
      <Popup
        visible={showMutiple}
        style={{ padding: '30px 50px' }}
        onClose={() => {
          setShowMutiple(false)
        }}
      >
        <span
          onClick={() => {
            setShowMutipleInner(true)
          }}
        >
          Click It
        </span>
      </Popup>
      <Popup
        visible={showMutipleInner}
        style={{ padding: '40px 50px' }}
        overlayStyle={{ backgroundColor: 'transparent' }}
        onClose={() => {
          setShowMutipleInner(false)
        }}
      >
        <span
          onClick={() => {
            setShowMutipleInner(false)
          }}
        >
          close
        </span>
      </Popup>

      <Cell
        title="PopUp + Dialog"
        onClick={() => {
          setShowDialog(true)
        }}
      />

      <Popup
        closeable
        visible={showDialog}
        style={{ height: '100%' }}
        position="bottom"
        onClose={() => {
          setShowDialog(false)
        }}
      >
        <Cell
          title="打开 Dialog"
          style={{ margin: '20% 20px', width: '80%' }}
          onClick={() =>
            Dialog.alert({
              title: '提示',
              content: '支持函数调用和组件调用两种方式。',
              hideCancelButton: true,
              confirmText: '确认',
            })
          }
        />
      </Popup>
    </>
  )
}
export default Demo7
