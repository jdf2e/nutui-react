import React, { useState } from 'react'
import { Steps, Step, Button } from '@nutui/nutui-react-taro'

const Demo2 = () => {
  const [val, setVal] = useState(1)
  return (
    <>
      <Steps value={val} dot onStepClick={() => setVal((val % 3) + 1)}>
        <Step value={1} />
        <Step value={2} />
        <Step value={3} />
      </Steps>
      <Button type="danger" onClick={() => setVal((val % 3) + 1)}>
        Next
      </Button>
    </>
  )
}
export default Demo2
