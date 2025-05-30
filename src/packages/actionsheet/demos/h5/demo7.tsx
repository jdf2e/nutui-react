import React, { useState } from 'react'
import { ActionSheet, Cell } from '@nutui/nutui-react'

const Demo = () => {
  const [isVisible, setIsVisible] = useState(false)
  const options: Record<string, string | boolean>[] = [
    {
      title: '分享给朋友',
    },
    {
      title: '添加到收藏夹',
    },
    {
      title: '复制商品链接',
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
export default Demo
