import React, { useState } from 'react'
import { Category } from '@nutui/icons-react-taro'
import { Loading, Button, Cell, Overlay } from '@/packages/nutui.react.taro'

const LoadingDemo = () => {
  const [visible, setVisible] = useState(false)

  const WrapperStyle = {
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  }

  function showOverlay() {
    setVisible(true)
    setTimeout(() => {
      setVisible(false)
    }, 2000)
  }

  return (
    <>
      <div className="demo">
        <h2>基础用法</h2>
        <Cell>
          <Loading type="circular" />
          <Loading type="spinner" />
        </Cell>
        <h2>自定义颜色</h2>
        <Cell>
          <Loading type="circular" color="#fa2c19" />
          <Loading type="spinner" color="#396aca" />
        </Cell>
        <h2>自定义大小</h2>
        <Cell>
          <Loading type="circular" size="20" />
          <Loading type="spinner" size={40} />
        </Cell>
        <h2>带文字</h2>
        <Cell>
          <Loading>加载中</Loading>
        </Cell>
        <h2>带文字(竖向排列)</h2>
        <Cell>
          <Loading vertical>加载中</Loading>
        </Cell>
        <h2>自定义文字颜色和大小</h2>
        <Cell>
          <Loading textColor="#396aca">加载中</Loading>
          <Loading textSize="20">加载中</Loading>
        </Cell>
        <h2>自定义图标</h2>
        <Cell>
          <Loading
            vertical
            icon={<Category width="30" height="30" color="red" />}
          />
        </Cell>
        <h2>与遮罩层结合</h2>
        <Cell>
          <Button type="success" onClick={() => showOverlay()}>
            遮罩层loading(两秒后关闭)
          </Button>
        </Cell>
      </div>
      <Overlay visible={visible}>
        <div className="wrapper" style={WrapperStyle}>
          <Loading vertical>加载中</Loading>
        </div>
      </Overlay>
    </>
  )
}

export default LoadingDemo
