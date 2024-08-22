import React, { useState } from 'react'
import { Loading, Cell, Button, Overlay } from '@nutui/nutui-react'

const Demo8 = () => {
  const [visible, setVisible] = useState(false)

  const WrapperStyle = {
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  }

  const showOverlay = () => {
    setVisible(true)
    setTimeout(() => {
      setVisible(false)
    }, 2000)
  }

  return (
    <>
      <Cell>
        <Button type="success" onClick={() => showOverlay()}>
          遮罩层loading(两秒后关闭)
        </Button>
      </Cell>
      <Overlay visible={visible}>
        <div className="wrapper" style={WrapperStyle}>
          <Loading direction="vertical">加载中</Loading>
        </div>
      </Overlay>
    </>
  )
}
export default Demo8
