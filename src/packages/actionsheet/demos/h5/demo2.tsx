import React, { useState } from 'react'
import { ActionSheet, Cell } from '@nutui/nutui-react'

const Demo = () => {
  const [val, setVal] = useState('')
  const [isVisible, setIsVisible] = useState(false)
  const options = [
    {
      name: '分享给朋友',
    },
    {
      name: '添加到收藏夹',
    },
  ]

  const handleSelect = (item: any) => {
    setVal(item.name)
    setIsVisible(false)
  }

  return (
    <>
      <Cell onClick={() => setIsVisible(!isVisible)}>
        <span>展示标题</span>
        <div style={{ marginInlineStart: '10px', color: '#999' }}>{val}</div>
      </Cell>
      <ActionSheet
        title="标题"
        visible={isVisible}
        options={options}
        onSelect={handleSelect}
        onCancel={() => setIsVisible(false)}
        cancelText="取消"
      />
    </>
  )
}
export default Demo
