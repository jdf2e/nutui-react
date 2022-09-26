import React from 'react'
import { Rate } from './rate'
import Cell from '@/packages/cell'

const RateDemo = () => {
  const onChange = (val: any) => {
    alert(val)
  }
  return (
    <>
      <div className="demo">
        <h2>基础用法</h2>
        <Cell>
          <Rate modelValue={3} />
        </Cell>
        <h2>半星</h2>

        <Cell>
          <Rate allowHalf modelValue="3.5" />
        </Cell>

        <h2>自定义 icon </h2>
        <Cell>
          <Rate
            checkedIcon="heart-fill1"
            uncheckedIcon="heart"
            modelValue="3"
          />
        </Cell>

        <h2>自定义数量</h2>
        <Cell>
          <Rate count="6" modelValue="3" />
        </Cell>

        <h2>最少选中数量（支持半星）</h2>
        <Cell>
          <Rate
            modelValue="2"
            minimizeValue={3}
            onChange={(num) => console.log(num)}
          />
        </Cell>

        <h2>自定义颜色</h2>
        <Cell>
          <Rate activeColor="#FFC800" modelValue="3" />
        </Cell>

        <h2>禁用状态</h2>
        <Cell>
          <Rate disabled modelValue="3" />
        </Cell>

        <h2>只读状态</h2>
        <Cell>
          <Rate modelValue="3" readonly />
        </Cell>

        <h2>绑定事件</h2>
        <Cell>
          <Rate modelValue="3" onChange={onChange} />
        </Cell>

        <h2>自定义尺寸 35px</h2>
        <Cell>
          <Rate modelValue="3" iconSize="35" />
        </Cell>
      </div>
    </>
  )
}

export default RateDemo
