import React from 'react'
import { Progress, Cell } from '@nutui/nutui-react-taro'
import { Checked, Tips } from '@nutui/icons-react-taro'
import { harmonyAndRn } from '@/utils/platform-taro'

const Demo6 = () => {
  return (
    <>
      <Cell>
        <Progress
          percent={30}
          color={
            harmonyAndRn()
              ? 'blue'
              : 'linear-gradient(270deg, rgba(18,126,255,1) 0%,rgba(32,147,255,1) 32.815625%,rgba(13,242,204,1) 100%)'
          }
          animated
        />
      </Cell>
      <Cell align="center">
        <Progress percent={100} />
        {!harmonyAndRn() && (
          <Checked color="green" style={{ margin: '0 5px' }} />
        )}
      </Cell>
      <Cell align="center">
        <Progress percent={100} color="#AAFF00" strokeWidth="15" />
        {!harmonyAndRn() && (
          <Tips
            color={
              harmonyAndRn()
                ? 'red'
                : 'linear-gradient(90deg, rgba(180,236,81,1) 0%,rgba(66,147,33,1) 100%)'
            }
            style={{ margin: '0 5px' }}
          />
        )}
      </Cell>
    </>
  )
}
export default Demo6
