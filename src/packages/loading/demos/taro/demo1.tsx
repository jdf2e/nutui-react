import React from 'react'
import { Cell, Loading } from '@nutui/nutui-react-taro'
import data from '@nutui/nutui-react-taro/dist/es/lottie/animation/light/loading.json'

const Demo1 = () => {
  return (
    <>
      <Cell>
        <Loading type="circular" />
      </Cell>
      <Cell>
        <Loading type="spinner" />
      </Cell>
      <Cell>
        <Loading
          direction="vertical"
          type="lottie"
          jsonData={data}
          lottieProps={{ style: { width: 56, height: 56 } }}
        />
      </Cell>
      <Cell>
        <Loading
          direction="vertical"
          type="lottie"
          jsonData={data}
          lottieProps={{
            autoPlay: false,
            loop: false,
            style: { width: 56, height: 56 },
          }}
        >
          正在奋力加载中，感谢您的等待
        </Loading>
      </Cell>
    </>
  )
}
export default Demo1
