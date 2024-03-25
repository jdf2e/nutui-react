import React, { useState } from 'react'
import { Steps, Step, Button } from '@nutui/nutui-react'

const Demo1 = () => {
  const [val, setVal] = useState(1)
  const handleStep = () => {
    const newVal = (val % 3) + 1
    setVal(newVal)
  }
  return (
    <>
      <Steps value={val}>
        <Step value={1} title="步骤一" />
        <Step value={2} title="步骤二" />
        <Step value={3} title="步骤三" />
      </Steps>
      <div style={{ marginTop: '10px', textAlign: 'center' }}>
        <Button type="danger" onClick={() => handleStep()}>
          下一步
        </Button>
      </div>
    </>
  )
}
export default Demo1
