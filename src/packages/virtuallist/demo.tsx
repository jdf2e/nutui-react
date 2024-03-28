import React, { useState } from 'react'
import Radio from '@/packages/radio'
import Cell from '@/packages/cell'
import { useTranslate } from '../../sites/assets/locale'

import Demo1 from './demos/h5/demo1'
import Demo2 from './demos/h5/demo2'
import Demo3 from './demos/h5/demo3'
import Demo4 from './demos/h5/demo4'

const style = `
.nut-virtualList-box::-webkit-scrollbar {
  width: 0px;
  height: 0px;
}
`

const VirtualListDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      text1: '垂直等高',
      text2: '垂直不等高',
      text3: '水平等宽',
      text4: '水平不等宽',
    },
    'zh-TW': {
      text1: '縱向等高',
      text2: '縱向不等高',
      text3: '水平等寬',
      text4: '水平不等寬',
    },
    'en-US': {
      text1: 'Vertical equal height',
      text2: 'Vertical unequal height',
      text3: 'Horizontal equal width',
      text4: 'Horizontal unequal width',
    },
  })
  const [val, setVal] = useState(1)
  const handleChange = (v: string | number) => {
    setVal(v as number)
  }
  const showNode = () => {
    switch (val) {
      case 1:
        return <Demo1 />
      case 2:
        return <Demo2 />
      case 3:
        return <Demo3 />
      default:
        return <Demo4 />
    }
  }
  return (
    <>
      <style>{style}</style>
      <div className="demo">
        <Cell.Group>
          <Cell>
            <Radio.Group
              value={val}
              onChange={handleChange}
              direction="horizontal"
            >
              <Radio value={1}>{translated.text1}</Radio>
              <Radio value={2}>{translated.text2}</Radio>
              <Radio value={3}>{translated.text3}</Radio>
              <Radio value={4}>{translated.text4}</Radio>
            </Radio.Group>
          </Cell>
        </Cell.Group>
        <div>{showNode()}</div>
      </div>
    </>
  )
}

export default VirtualListDemo
