import React, { useState } from 'react'
import { ActionSheet, Cell } from '@nutui/nutui-react'

const Demo2 = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [val, setVal] = useState('')
  const options = [
    {
      name: '权限设置',
    },
    {
      name: '重命名',
    },
    {
      name: '删除',
    },
  ]
  const handleSelect = (item: any) => {
    setVal(item.name)
    setIsVisible(false)
  }
  return (
    <>
      <Cell onClick={() => setIsVisible(!isVisible)}>
        <span>展示取消按钮</span>
        <div style={{ marginInlineStart: '10px', color: '#999' }}>{val}</div>
      </Cell>

      <ActionSheet
        visible={isVisible}
        cancelText="取消"
        options={options}
        onSelect={handleSelect}
        onCancel={() => setIsVisible(false)}
      />
    </>
  )
}
export default Demo2
