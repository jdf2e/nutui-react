import React from 'react'
import { Cell, Lottie } from '@nutui/nutui-react'
import data from '../../animation/light/loading.json'

const Demo1 = () => {
  return (
    <>
      <Cell>
        <Lottie source={data} />
      </Cell>
    </>
  )
}
export default Demo1
