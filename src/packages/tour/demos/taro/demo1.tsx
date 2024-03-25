import React, { useState } from 'react'
import { Cell, Switch, Tour } from '@nutui/nutui-react-taro'

const Demo1 = () => {
  const [showTour, setShowTour] = useState(false)

  const closeTour = () => {
    setShowTour(false)
  }

  const steps = [
    {
      content: '70+ 高质量组件，覆盖移动端主流场景',
      target: 'target1',
    },
  ]

  return (
    <>
      <Cell
        title="点击试试"
        extra={
          <Switch
            id="target1"
            onChange={() => {
              setShowTour(true)
            }}
          />
        }
      />
      <Tour
        className="nut-custom-tour nut-customword-tour"
        visible={showTour}
        onClose={closeTour}
        list={steps}
        type="tile"
        location="bottom-end"
      />
    </>
  )
}
export default Demo1
