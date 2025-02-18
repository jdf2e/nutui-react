import React from 'react'
import { Cell, Lottie } from '@nutui/nutui-react-taro'
import lightLoading from '@nutui/nutui-react-taro/dist/es/lottie/animation/light/loading.json'
import lightGlobal from '@nutui/nutui-react-taro/dist/es/lottie/animation/light/global.json'
import lightPull from '@nutui/nutui-react-taro/dist/es/lottie/animation/light/pulltorefresh.json'

const Demo1 = () => {
  return (
    <>
      <Cell style={{ background: 'rgba(0, 0, 0, 0.4)' }}>
        <Lottie source={lightLoading} style={{ width: 56, height: 56 }} />
      </Cell>
      <Cell style={{ background: 'rgba(0, 0, 0, 0.06)' }}>
        <Lottie source={lightGlobal} style={{ width: 56, height: 56 }} />
      </Cell>
      <Cell style={{ background: '#fff' }}>
        <Lottie source={lightPull} style={{ width: 132, height: 26 }} />
      </Cell>
    </>
  )
}
export default Demo1
