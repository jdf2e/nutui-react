import React from 'react'
import { Progress, Cell } from '@nutui/nutui-react-taro'
import { Checked, Tips } from '@nutui/icons-react-taro'
import { harmonyAndRn } from '@/utils/platform-taro'

const Demo6 = () => {
  return (
    <>
      <Cell>
        <Progress percent={30} color="blue" animated />
      </Cell>
      <Cell align="center">
        <Progress percent={100} />
        {!harmonyAndRn() && (
          <Checked color="green" style={{ margin: '0 5px' }} />
        )}
      </Cell>
      <Cell align="center">
        <Progress percent={100} color="#AAFF00" strokeWidth="15" />
        {!harmonyAndRn() && <Tips color="red" style={{ margin: '0 5px' }} />}
      </Cell>
    </>
  )
}
export default Demo6
