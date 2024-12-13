import React from 'react'
import { Loading, Cell } from '@nutui/nutui-react-taro'
import data from '../../lottie/animation/light/demo.json'

const Demo1 = () => {
  return (
    <>
      <Cell>
        <Loading type="circular" />
        <Loading type="spinner" />
      </Cell>
      <Cell>
        <Loading direction="vertical" type="lottie" jsonData={data}>
          正在奋力加载中，感谢您的等待
        </Loading>
      </Cell>
      <Cell>
        <Loading
          direction="vertical"
          type="lottie"
          jsonData={data}
          lottieProps={{ autoplay: true, loop: true }}
        >
          正在奋力加载中，感谢您的等待
        </Loading>
      </Cell>
    </>
  )
}
export default Demo1
