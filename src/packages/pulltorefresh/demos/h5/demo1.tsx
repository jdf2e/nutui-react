import React, { useState } from 'react'
import { Lottie, PullToRefresh, Toast } from '@nutui/nutui-react'
import lightPull from '@/packages/lottie/animation/light/pulltorefresh.json'

const Demo1 = () => {
  const [list] = useState([1, 2, 3, 4, 5, 6, 7])
  return (
    <>
      <PullToRefresh
        onRefresh={() =>
          new Promise((resolve) => {
            Toast.show('😊')
            resolve('done')
          })
        }
        renderIcon={(status) => {
          return (
            <>
              <Lottie source={lightPull} style={{ width: 132, height: 26 }} />
            </>
          )
        }}
      >
        {list.map((item) => (
          <div
            style={{
              textAlign: 'center',
              height: '50px',
              lineHeight: '50px',
            }}
            key={item}
          >
            {item}
          </div>
        ))}
      </PullToRefresh>
    </>
  )
}

export default Demo1
