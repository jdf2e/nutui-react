import React from 'react'
import { Progress, Cell } from '@nutui/nutui-react'
import { Checked, Tips } from '@nutui/icons-react'

const Demo6 = () => {
  return (
    <>
      <Cell>
        <Progress percent={30} color="blue" animated />
      </Cell>
      <Cell align="center">
        <Progress percent={100} />
        <Checked color="green" style={{ margin: '0 5px' }} />
      </Cell>
      <Cell align="center">
        <Progress percent={100} color="#AAFF00" strokeWidth="15" />
        <Tips color="red" style={{ margin: '0 5px' }} />
      </Cell>
    </>
  )
}
export default Demo6
