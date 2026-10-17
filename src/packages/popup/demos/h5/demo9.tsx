import React, { useState } from 'react'
import { Popup, Cell, Button } from '@nutui/nutui-react'

const Demo8 = () => {
  const [showTop, setShowTop] = useState(false)

  return (
    <>
      <Cell
        title="顶部占位"
        onClick={() => {
          setShowTop(true)
        }}
      />
      <Popup
        visible={showTop}
        title="我是标题"
        description="我是描述"
        position="bottom"
        closeable
        top={
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100px',
              backgroundColor: '#fff',
              borderRadius: '12px 12px 0 0',
            }}
          >
            <p>这里是 top 属性渲染的内容</p>
            <Button
              size="small"
              type="primary"
              onClick={() => setShowTop(false)}
            >
              关闭
            </Button>
          </div>
        }
        onClose={() => {
          setShowTop(false)
        }}
      >
        <div style={{ padding: '30px 20px' }}>Popup 内容</div>
      </Popup>
    </>
  )
}
export default Demo8
