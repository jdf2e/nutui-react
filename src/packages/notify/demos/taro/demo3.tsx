import React, { useState } from 'react'
import { Notify, Cell } from '@nutui/nutui-react-taro'
import { Reload } from '@nutui/icons-react-taro'

const Demo3 = () => {
  const [showNotify, setShowNotify] = useState(false)
  const [content] = useState('请求失败，请重新刷新')
  return (
    <>
      <Notify
        visible={showNotify}
        leftIcon={<Reload />}
        closeable
        onClose={() => {
          setShowNotify(false)
        }}
      >
        {content}
      </Notify>
      <Cell
        title="支持关闭"
        onClick={() => {
          setShowNotify(true)
        }}
      />
    </>
  )
}
export default Demo3
