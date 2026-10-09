import React, { useState } from 'react'
import { Cell, Dialog } from '@nutui/nutui-react-taro'
import { Star } from '@nutui/icons-react-taro'

const Demo9 = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <Cell title="标题图标和副标题" onClick={() => setVisible(true)} />
      <Dialog
        title="温馨提示"
        titleIcon={<Star />}
        subtitle="这是副标题内容"
        visible={visible}
        onConfirm={() => setVisible(false)}
        onCancel={() => setVisible(false)}
      >
        支持通过 titleIcon 设置标题前置图标，通过 subtitle 设置副标题。
      </Dialog>
    </>
  )
}
export default Demo9
