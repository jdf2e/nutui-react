import React from 'react'
import { Rate } from './rate'

const RateDemo = () => {
  const onChange = (val: any) => {
    alert(val)
  }
  return (
    <>
      <div className="demo">
        <h2>基础用法</h2>
        <Rate modelValue={3} />
        <h2>半星</h2>
        <Rate allowHalf modelValue="3.5" />

        <h2>自定义 icon </h2>
        <Rate checkedIcon="heart-fill1" uncheckedIcon="heart" modelValue="3" />

        <h2>自定义数量</h2>
        <Rate count="6" modelValue="3" />

        <h2>最少选中数量（支持半星）</h2>
        <Rate
          modelValue="2"
          minimizeValue={3}
          onChange={(num) => console.log(num)}
        />

        <h2>自定义颜色</h2>
        <Rate activeColor="#FFC800" modelValue="3" />

        <h2>禁用状态</h2>
        <Rate disabled modelValue="3" />

        <h2>只读状态</h2>
        <Rate modelValue="3" readonly />

        <h2>绑定事件</h2>
        <Rate modelValue="3" onChange={onChange} />

        <h2>自定义尺寸 35px</h2>
        <Rate modelValue="3" iconSize="35" />
      </div>
    </>
  )
}

export default RateDemo
