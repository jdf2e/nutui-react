import React from 'react'
import { Cell, Lottie } from '@nutui/nutui-react-taro'
import darkLoading from '@nutui/nutui-react-taro/dist/es/lottie/animation/dark/loading.json'
import darkGlobal from '@nutui/nutui-react-taro/dist/es/lottie/animation/dark/global.json'
import darkPull from '@nutui/nutui-react-taro/dist/es/lottie/animation/dark/pulltorefresh.json'

const Demo2 = () => {
  return (
    <>
      <Cell style={{ background: 'rgba(20, 20, 20, 0.4)' }}>
        <Lottie source={darkLoading} style={{ width: 56, height: 56 }} />
      </Cell>
      <Cell style={{ background: '#fff' }}>
        <Lottie source={darkGlobal} style={{ width: 56, height: 56 }} />
      </Cell>
      <Cell style={{ background: '#fff' }}>
        <Lottie source={darkPull} style={{ width: 132, height: 26 }} />
      </Cell>
    </>
  )
}
export default Demo2
