import React, { useState } from 'react'
import { ActionSheet, Cell, Image } from '@nutui/nutui-react'

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
          <Image
            src="https://img20.360buyimg.com/img/jfs/t1/298387/38/1291/2642/68106cb8Fa0bc75fe/91a0135a25729d88.png"
            width={20}
            height={20}
            style={{ marginRight: 8 }}
          />
          加密呼叫（86）18888888888
        </div>
        <div style={itemStyle}>
          <Image
            src="https://img11.360buyimg.com/img/jfs/t1/270315/26/29639/1865/68106d4cFc40d2a06/ddffb93564a1f495.png"
            width={20}
            height={20}
            style={{ marginRight: 8 }}
          />
          在线客服
        </div>
      </ActionSheet>
    </>
  )
}
export default Demo
