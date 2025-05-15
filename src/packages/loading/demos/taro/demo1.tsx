import React from 'react'
import { Loading, Cell, Lottie } from '@nutui/nutui-react-taro'
import lightLoading from '@nutui/nutui-react-taro/dist/es/lottie/animation/light/loading.json'

const Demo1 = () => {
  return (
    <>
      <Cell>
        <Loading type="circular" />
        <Loading type="spinner" />
      </Cell>
      <Cell>
        <Loading
          icon={
            <>
              <Lottie source={lightLoading} style={{ width: 56, height: 56 }} />
            </>
          }
        />
      </Cell>
    </>
  )
}
export default Demo1
