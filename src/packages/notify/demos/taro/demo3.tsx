import React, { useState } from 'react'
import { Notify, Cell } from '@nutui/nutui-react-taro'

const Demo3 = () => {
  const [customShow, SetCustomShow] = useState(false)
  return (
    <>
      <Notify
        className="customer"
        visible={customShow}
        style={{
          '--nutui-notify-text-color': '#ad0000',
          '--nutui-notify-base-background-color': '#ffe1e1',
        }}
        onClose={() => {
          SetCustomShow(false)
        }}
      >
        自定义背景色和字体颜色
      </Notify>
      <Cell
        title="自定义背景色和字体颜色"
        onClick={(event: React.MouseEvent) => {
          SetCustomShow(true)
        }}
      />
    </>
  )
}
export default Demo3
