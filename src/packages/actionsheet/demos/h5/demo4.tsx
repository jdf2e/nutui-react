import React, { useState } from 'react'
import { ActionSheet, Cell } from '@nutui/nutui-react'

const Demo4 = () => {
  const [isVisible, setIsVisible] = useState(false)
  const optionsThree: Record<string, string | boolean>[] = [
    {
      name: '着色选项',
      danger: true,
    },
    {
      name: '禁用选项',
      disabled: true,
    },
  ]
  return (
    <>
      <Cell onClick={() => setIsVisible(!isVisible)}>
        <span>选项状态</span>
      </Cell>
      <ActionSheet
        visible={isVisible}
        cancelText="取消"
        options={optionsThree}
        onSelect={() => {
          setIsVisible(false)
        }}
        onCancel={() => setIsVisible(false)}
      />
    </>
  )
}
export default Demo4
