import React from 'react'
import { Cell } from '@nutui/nutui-react-taro'
import { Lottie } from '../../web'
import data from '../../animation/light/demo.json'

const Demo1 = () => {
  return (
    <>
      <Cell>
        <Lottie source={data} autoPlay loop style={{ width: 56, height: 56 }} />
      </Cell>
    </>
  )
}
export default Demo1
