import React from 'react'
import Demo1 from './demos/h5/demo1'
import Demo2 from './demos/h5/demo2'
import Demo3 from './demos/h5/demo3'
import Demo4 from './demos/h5/demo4'
import Demo5 from './demos/h5/demo5'

const FixedNavDemo = () => {
  return (
    <>
      <div className="demo">
        <Demo1 />
        <Demo2 />
        <Demo3 />
        <Demo4 />
        {/* <!-- 配合 Drag 支持拖拽 ，小程序暂不支持 --> */}
        <Demo5 />
      </div>
    </>
  )
}

export default FixedNavDemo
