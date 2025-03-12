import React, { useState } from 'react'
import { Notify, Cell } from '@nutui/nutui-react-taro'
import { Reload } from '@nutui/icons-react-taro'

const Demo4 = () => {
  const [customShow, SetCustomShow] = useState(false)
  return (
    <>
      <Notify
        visible={customShow}
        style={{
          '--nutui-notify-text-color': '#FFFFFF',
          '--nutui-notify-background-color': '#ff0f23',
        }}
        leftIcon={<Reload color="#FFFFFF" />}
        onClose={() => {
          SetCustomShow(false)
        }}
      >
        自定义样式
      </Notify>
      <Cell
        title="自定义样式"
        onClick={() => {
          SetCustomShow(true)
        }}
      />
    </>
  )
}
export default Demo4
