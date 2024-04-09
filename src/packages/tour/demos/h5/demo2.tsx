import React, { useState } from 'react'
import { Cell, Switch, Tour } from '@nutui/nutui-react'

const Demo2 = () => {
  const [showTour, setShowTour] = useState(false)

  const closeTour = () => {
    setShowTour(false)
  }

  const steps = [
    {
      content: '70+ 高质量组件，覆盖移动端主流场景',
      target: 'target2',
    },
  ]

  return (
    <>
      <Cell
        title="点击试试"
        extra={
          <Switch
            id="target2"
            onChange={() => {
              setShowTour(true)
            }}
          />
        }
      />
      <Tour
        className="nut-custom-tour nut-customword-tour nut-customstyle-tour"
        visible={showTour}
        onClose={closeTour}
        list={steps}
        type="tile"
        location="bottom-end"
        style={{
          '--nutui-popover-content-background-color': 'rgb(255, 0, 0)',
          '--nutui-popover-text-color': 'rgb(255, 255, 255)',
          '--nutui-popover-border-color': 'rgb(255, 0, 0)',
        }}
        offset={[0, 0]}
        maskWidth={50}
        maskHeight={50}
      />
    </>
  )
}
export default Demo2
