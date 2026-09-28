import React, { useState } from 'react'
import { ActionSheet, Cell } from '@nutui/nutui-react'
import { Gift } from '@nutui/icons-react'

const Demo1 = () => {
  const [val, setVal] = useState('')
  const [isVisible, setIsVisible] = useState(false)
  const [val2, setVal2] = useState('')
  const [isVisible2, setIsVisible2] = useState(false)
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
  const iconOptions = [
    { name: '文案内容', icon: <Gift width={14} height={14} /> },
    { name: '文案内容', icon: <Gift width={14} height={14} /> },
    { name: '文案内容', icon: <Gift width={14} height={14} /> },
  ]

  const handleSelect = (item: any) => {
    setVal(item.name)
    setIsVisible(false)
  }

  const handleSelect2 = (item: any) => {
    setVal2(item.name)
    setIsVisible2(false)
  }

  return (
    <>
      <Cell onClick={() => setIsVisible(!isVisible)}>
        <span>基础用法</span>
        <div style={{ marginInlineStart: '10px', color: '#999' }}>{val}</div>
      </Cell>
      <ActionSheet
        title="标题"
        visible={isVisible}
        options={options}
        onSelect={handleSelect}
        onCancel={() => setIsVisible(false)}
      />
      <Cell onClick={() => setIsVisible2(!isVisible2)}>
        <span>图标列表</span>
        <div style={{ marginInlineStart: '10px', color: '#999' }}>{val2}</div>
      </Cell>
      <ActionSheet
        title="标题"
        visible={isVisible2}
        options={iconOptions}
        onSelect={handleSelect2}
        onCancel={() => setIsVisible2(false)}
      />
    </>
  )
}
export default Demo1
