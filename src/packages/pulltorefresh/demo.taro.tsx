import React, { useState } from 'react'
import { PullToRefresh, Cell, Toast } from '@/packages/nutui.react.taro'

const PullToRefreshDemo = () => {
  const [list] = useState([1, 2, 3, 4, 5, 6, 7])
  return (
    <>
      <div className="demo">
        <h2>基础用法</h2>
        <PullToRefresh
          onRefresh={() =>
            new Promise((resolve) => {
              Toast.text('😊')
              resolve('done')
            })
          }
        >
          {list.map((item) => (
            <Cell key={item}>{item}</Cell>
          ))}
        </PullToRefresh>
      </div>
    </>
  )
}

export default PullToRefreshDemo
