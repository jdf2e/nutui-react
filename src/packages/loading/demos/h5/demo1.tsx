import React from 'react'
import { Cell, Loading } from '@nutui/nutui-react'
import data from '@nutui/nutui-react/dist/es/lottie/animation/light/loading.json'

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
        <Loading direction="vertical" type="lottie" jsonData={data} />
      </Cell>
      <Cell>
        <Loading
          direction="vertical"
          type="lottie"
          jsonData={data}
          lottieProps={{ autoplay: false, loop: false }}
        >
          正在奋力加载中，感谢您的等待
        </Loading>
      </Cell>
    </>
  )
}
export default Demo1
