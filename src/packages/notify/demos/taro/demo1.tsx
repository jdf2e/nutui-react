import React, { useState } from 'react'
import { Notify, Cell } from '@nutui/nutui-react-taro'
import { Reload } from '@nutui/icons-react-taro'

const Demo1 = () => {
  const [showNotify, setShowNotify] = useState(false)
  const [content] = useState('请求失败，请重试刷新')
  return (
    <>
      <Notify
        visible={showNotify}
        leftIcon={<Reload />}
        onClose={() => {
          setShowNotify(false)
        }}
      >
        {content}
      </Notify>
      <Cell
        title="基础用法"
        onClick={() => {
          setShowNotify(true)
        }}
      />
    </>
  )
}
export default Demo1
