import React, { useState } from 'react'
import { Cell, Switch, Tour, Divider } from '@nutui/nutui-react'

const Demo4 = () => {
  const [showTour, setShowTour] = useState(false)

  const closeTour = () => {
    setShowTour(false)
  }

  const steps = [
    {
      target: 'target4',
    },
  ]

  return (
    <>
      <Cell
        title="点击试试"
        extra={
          <Switch
            id="target4"
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
        offset={[8, 8]}
        closeOnOverlayClick={false}
      >
        <div className="tour-demo-custom-content">
          <div>nutui-react 2.x 已经发布</div>
          <Divider direction="vertical" />
          <div
            onClick={() => {
              setShowTour(false)
            }}
          >
            知道了
          </div>
        </div>
      </Tour>
    </>
  )
}
export default Demo4
