import React, { useState } from 'react'
import { Button, CircleProgress, Cell } from '@nutui/nutui-react-taro'

const Demo6 = () => {
  const [percent, setPercent] = useState(20)

  const setReduceVal = () => {
    if (percent - 10 <= 0) {
      setPercent(0)
      return
    }
    setPercent(percent - 10)
  }
  const setAddVal = () => {
    if (percent >= 100) {
      return
    }
    setPercent(percent + 10)
  }

  return (
    <>
      <Cell style={{ justifyContent: 'center' }}>
        <CircleProgress percent={percent}>{percent}%</CircleProgress>
      </Cell>
      <Cell
        className="demo-btn"
        radius="0 0 6px 6px"
        style={{ justifyContent: 'center' }}
      >
        <Button type="primary" size="small" onClick={setReduceVal}>
          减少
        </Button>
        <Button type="primary" size="small" onClick={setAddVal}>
          增加
        </Button>
      </Cell>
    </>
  )
}
export default Demo6
