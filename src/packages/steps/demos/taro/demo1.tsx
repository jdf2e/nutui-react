import React, { useState } from 'react'
import { Steps, Step, Button } from '@nutui/nutui-react-taro'
import pxTransform from '@/utils/px-transform'

const Demo1 = () => {
  const [val, setVal] = useState(1)
  return (
    <>
      <Steps value={val}>
        <Step value={1} title="步骤一" />
        <Step value={2} title="步骤二" />
        <Step value={3} title="步骤三" />
      </Steps>

      <Button
        type="danger"
        onClick={() => setVal((val % 3) + 1)}
        style={{ marginLeft: pxTransform(30) }}
      >
        Next
      </Button>
    </>
  )
}
export default Demo1
