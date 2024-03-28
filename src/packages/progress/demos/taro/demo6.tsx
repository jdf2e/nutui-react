import React from 'react'
import { Progress, Cell } from '@nutui/nutui-react-taro'
import { Checked, Tips } from '@nutui/icons-react-taro'

const Demo6 = () => {
  return (
    <>
      <Cell>
        <Progress
          percent={30}
          color="linear-gradient(270deg, rgba(18,126,255,1) 0%,rgba(32,147,255,1) 32.815625%,rgba(13,242,204,1) 100%)"
          animated
        />
      </Cell>
      <Cell align="center">
        <Progress percent={100} />
        <Checked color="green" style={{ margin: '0 5px' }} />
      </Cell>
      <Cell align="center">
        <Progress
          percent={100}
          color="linear-gradient(90deg, rgba(180,236,81,1) 0%,rgba(66,147,33,1) 100%)"
          strokeWidth="15"
        />
        <Tips color="red" style={{ margin: '0 5px' }} />
      </Cell>
    </>
  )
}
export default Demo6
