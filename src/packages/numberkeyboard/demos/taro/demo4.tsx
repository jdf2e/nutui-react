import React, { useState } from 'react'
import { Cell, NumberKeyboard } from '@nutui/nutui-react-taro'

const Demo4 = () => {
  const [visible, setVisible] = useState(false)
  const onChange = (number: string) => {
    console.log(`输入：${number}`)
  }
  const onDelete = () => {
    console.log('删除')
  }
  return (
    <>
      <Cell title="带标题栏键盘" onClick={() => setVisible(true)} />
      <NumberKeyboard
        visible={visible}
        title="标题"
        rightActions={<span>Done</span>}
        custom={['.']}
        onChange={onChange}
        onDelete={onDelete}
        onClose={() => setVisible(false)}
      />
    </>
  )
}
export default Demo4
