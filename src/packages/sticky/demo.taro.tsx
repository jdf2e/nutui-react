import React from 'react'
import { useTranslate } from '@/sites/assets/locale/taro'
import { Sticky } from '@/packages/nutui.react.taro'

const StickyDemo = () => {
  return (
    <>
      <div className="demo">
        <h2>基础用法</h2>
        <Sticky></Sticky>
      </div>
    </>
  )
}

export default StickyDemo
