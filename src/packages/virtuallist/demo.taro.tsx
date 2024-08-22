import React, { useState } from 'react'
import Taro from '@tarojs/taro'
import { Cell, Radio } from '@nutui/nutui-react-taro'
import { useTranslate } from '@/sites/assets/locale/taro'
import Header from '@/sites/components/header'

import Demo1 from './demos/taro/demo1'
import Demo2 from './demos/taro/demo2'

const VirtualListDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      text1: '垂直等高',
      text2: '垂直不等高',
    },
    'zh-TW': {
      text1: '縱向等高',
      text2: '縱向不等高',
    },
    'en-US': {
      text1: 'Vertical equal height',
      text2: 'Vertical unequal height',
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
      default:
        return <Demo2 />
    }
  }
  return (
    <>
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <Cell.Group>
          <Cell>
            <Radio.Group
              value={val}
              onChange={handleChange}
              direction="horizontal"
            >
              <Radio value={1}>{translated.text1}</Radio>
              <Radio value={2}>{translated.text2}</Radio>
            </Radio.Group>
          </Cell>
        </Cell.Group>
        <div style={{ height: '500px' }}>{showNode()}</div>
      </div>
    </>
  )
}

export default VirtualListDemo
