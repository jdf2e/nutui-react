import React, { useState } from 'react'
import { Steps, Step, Button } from '@nutui/nutui-react-taro'

const Demo2 = () => {
  const [val, setVal] = useState(1)
  const handleStep = () => {
    const newVal = (val % 3) + 1
    setVal(newVal)
  }
  const handleClickStep = (value: number) => {
    console.log(value)
  }
  return (
    <>
      <Steps value={val} dot onStepClick={handleClickStep}>
        <Step value={1} />
        <Step value={2} />
        <Step value={3} />
      </Steps>
      <div style={{ marginTop: '10px', textAlign: 'center' }}>
        <Button type="danger" onClick={() => handleStep()}>
          下一步
        </Button>
      </div>
    </>
  )
}
export default Demo2
