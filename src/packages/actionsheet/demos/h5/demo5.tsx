import React, { useState } from 'react'
import { ActionSheet, Cell } from '@nutui/nutui-react'
import { Dongdong, Message } from '@nutui/icons-react'

const Demo = () => {
  const [isVisible, setIsVisible] = useState(false)
  const itemStyle = { display: 'flex', alignItems: 'center', height: 52 }
  return (
    <>
      <Cell onClick={() => setIsVisible(!isVisible)}>
        <span>自定义内容1</span>
      </Cell>
      <ActionSheet
        visible={isVisible}
        cancelText="取消"
        onSelect={() => {
          setIsVisible(false)
        }}
        onCancel={() => setIsVisible(false)}
      >
        <div style={{ ...itemStyle, borderBottom: '0.5px solid #c2c4cc' }}>
          <Dongdong width={20} height={20} style={{ marginRight: 8 }} />
          加密呼叫（86）18888888888
        </div>
        <div style={itemStyle}>
          <Message width={20} height={20} style={{ marginRight: 8 }} />
          在线客服
        </div>
      </ActionSheet>
    </>
  )
}
export default Demo
