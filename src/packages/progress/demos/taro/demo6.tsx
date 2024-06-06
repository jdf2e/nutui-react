import React from 'react'
import { Progress, Cell } from '@nutui/nutui-react-taro'
import Taro from '@tarojs/taro'
import { Checked, Tips } from '@nutui/icons-react-taro'

const Demo6 = () => {
  return (
    <>
      <Cell>
        <Progress percent={30} color="blue" animated />
      </Cell>
      <Cell align="center">
        <Progress percent={100} />
        {!['HARMONY', 'RN'].includes(Taro.getEnv()) && (
          <Checked color="green" style={{ margin: '0 5px' }} />
        )}
      </Cell>
      <Cell align="center">
        <Progress percent={100} color="#AAFF00" strokeWidth="15" />
        {!['HARMONY', 'RN'].includes(Taro.getEnv()) && (
          <Tips color="red" style={{ margin: '0 5px' }} />
        )}
      </Cell>
    </>
  )
}
export default Demo6
