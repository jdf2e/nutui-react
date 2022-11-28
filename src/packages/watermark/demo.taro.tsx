import React from 'react'
import { useTranslate } from '@/sites/assets/locale/taro'
import { WaterMark } from '@/packages/nutui.react.taro'

const WaterMarkDemo = () => {
  return (
    <>
      <div className="demo">
        <h2>基础用法</h2>
        <WaterMark></WaterMark>
      </div>
    </>
  )
}

export default WaterMarkDemo
