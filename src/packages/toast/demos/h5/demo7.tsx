import React from 'react'
import { Toast, Cell, Button } from '@nutui/nutui-react'

const Demo7 = () => {
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

  return (
    <>
      <Cell
        title="设置展示时长为10秒提示"
        onClick={(
          event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
        ) => duringToast('设置展示时长为10秒')}
      />
      <Cell
        title="Toast 不消失"
        onClick={(
          event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
        ) => permanentToast('Toast 不消失')}
      />
      <Button
        style={{ margin: 8 }}
        type="primary"
        shape="round"
        onClick={() => {
          Toast.clear()
        }}
      >
        隐藏Toast
      </Button>
    </>
  )
}
export default Demo7
