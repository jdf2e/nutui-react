import React from 'react'
import { CircleProgress } from '@nutui/nutui-react'

const Demo5 = () => {
  return (
    <>
      <CircleProgress percent={50} radius={60}>
        <>
          <div>3000</div>
          <div style={{ fontSize: '12px', color: 'var(--nutui-black-10)' }}>
            步
          </div>
        </>
      </CircleProgress>
    </>
  )
}
export default Demo5
