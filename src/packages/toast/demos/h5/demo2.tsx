import React, { useState } from 'react'
import { Toast, Cell, Button } from '@nutui/nutui-react'

const Demo2 = () => {
  const duringToast = (msg: string) => {
    Toast.show({
      content: msg,
      duration: 10,
    })
  }

  const permanentToast = (msg: string) => {
    Toast.show({
      content: msg,
      duration: 0,
    })
  }

  const [neverDisappear, setNeverDisappear] = useState(false)

  const hideToastStyle: React.CSSProperties = neverDisappear
    ? {
        position: 'fixed',
        top: '53%',
        left: '35%',
        zIndex: 9999,
      }
    : {}

  return (
    <>
      <Cell
        title="展示时长为10秒"
        onClick={(
          event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
        ) => duringToast('展示时长为10秒')}
      />
      <Cell
        title="Toast 不消失"
        onClick={(
          event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
        ) => {
          setNeverDisappear(true)
          permanentToast('Toast 不消失')
        }}
      />
      <div style={hideToastStyle}>
        <Button
          style={{ margin: 8 }}
          type="primary"
          shape="round"
          onClick={() => {
            setNeverDisappear(false)
            Toast.clear()
          }}
        >
          隐藏Toast
        </Button>
      </div>
    </>
  )
}
export default Demo2
