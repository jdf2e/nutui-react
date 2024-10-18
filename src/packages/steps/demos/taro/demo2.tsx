import React, { useState } from 'react'
import { Steps, Step, Button } from '@nutui/nutui-react-taro'
import pxTransform from '@/utils/px-transform'

const Demo2 = () => {
  const [val, setVal] = useState(1)
  return (
    <>
      <Steps value={val} dot onStepClick={(v) => setVal(v)}>
        <Step value={1} />
        <Step value={2} />
        <Step value={3} />
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
export default Demo2
