import React from 'react'
import { useTranslate } from '@/sites/assets/locale/taro'
import { PullToRefresh } from '@/packages/nutui.react.taro'

const PullToRefreshDemo = () => {
  return (
    <>
      <div className="demo">
        <h2>基础用法</h2>
        <PullToRefresh></PullToRefresh>
      </div>
    </>
  )
}

export default PullToRefreshDemo
