import React from 'react'
import { Loading, Cell, Lottie } from '@nutui/nutui-react'
import lightLoading from '@nutui/nutui-react/dist/es/lottie/animation/light/loading.json'

const Demo9 = () => {
  const WrapperStyle = {
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#11141A05',
  }

  const WrapperTextStyle = {
    height: 18,
    padding: 0,
  }

  const lottie = (
    <Lottie source={lightLoading} style={{ width: 40, height: 40 }} />
  )

  return (
    <>
      <Cell>
        <Loading
          style={WrapperStyle}
          icon={lottie}
          direction="vertical"
          textStyle={WrapperTextStyle}
        >
          内容加载中
        </Loading>
      </Cell>
    </>
  )
}
export default Demo9
