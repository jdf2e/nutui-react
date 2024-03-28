import React, { useState } from 'react'
import { Cell, Tour } from '@nutui/nutui-react-taro'

const Demo3 = () => {
  const [showTour, setShowTour] = useState(false)

  const closeTour = () => {
    setShowTour(false)
  }

  const steps = [
    {
      content: '支持一套代码同时开发多端小程序+H5',
      target: 'target3',
      popoverOffset: [40, 12],
      arrowOffset: -36,
    },
  ]

  return (
    <>
      <Cell
        title="点击试试"
        onClick={() => {
          setShowTour(true)
        }}
        extra={
          <div className="tour-demo-img">
            <img
              id="target3"
              src="https://img14.360buyimg.com/imagetools/jfs/t1/167902/2/8762/791358/603742d7E9b4275e3/e09d8f9a8bf4c0ef.png"
              alt=""
            />
            <img
              src="https://img10.360buyimg.com/imagetools/jfs/t1/31842/40/20385/1762/63998e3eE594254bb/98ff51da635ead4a.png"
              alt=""
            />
            <img
              src="https://storage.360buyimg.com/imgtools/e067cd5b69-07c864c0-dd02-11ed-8b2c-d7f58b17086a.png"
              alt=""
            />
          </div>
        }
      />
      <Tour
        className="nut-custom-tour nut-customword-tour"
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
        offset={[8, 8]}
      />
    </>
  )
}
export default Demo3
