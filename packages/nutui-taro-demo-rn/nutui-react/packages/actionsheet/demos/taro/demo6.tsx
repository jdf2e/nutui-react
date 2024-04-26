import React, { useState } from 'react'
import { ActionSheet, Cell } from '@nutui/nutui-react-taro'

const Demo6 = () => {
  const [isVisible, setIsVisible] = useState(false)
  const options: Record<string, string | boolean>[] = [
    {
      title: '权限设置',
    },
    {
      title: '重命名',
    },
    {
      title: '删除',
      disabled: true,
    },
  ]
  const optionKey = {
    name: 'title',
  }
  return (
    <>
      <Cell onClick={() => setIsVisible(!isVisible)}>
        <span>自定义key</span>
      </Cell>
      <ActionSheet
        visible={isVisible}
        cancelText="取消"
        optionKey={optionKey}
        options={options}
        onSelect={() => {
          setIsVisible(false)
        }}
        onCancel={() => setIsVisible(false)}
      />
    </>
  )
}
export default Demo6
