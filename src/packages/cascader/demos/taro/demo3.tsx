import React, { useState } from 'react'
import { Cascader, Cell } from '@nutui/nutui-react-taro'

const Demo3 = () => {
  const [isVisibleDemo3, setIsVisibleDemo3] = useState(false)
  const [value3, setValue3] = useState(['A0', 'A12', 'A23', 'A32'])

  const lazyLoadDemo3 = (node: any, resolve: (children: any) => void) => {
    setTimeout(() => {
      if (node.root) {
        resolve([
          { value: 'A0', text: 'A0' },
          { value: 'B0', text: 'B0' },
          { value: 'C0', text: 'C0' },
        ])
      } else {
        const { value, level } = node
        const text = value.substring(0, 1)
        const value1 = `${text}${level + 1}1`
        const value2 = `${text}${level + 1}2`
        const value3 = `${text}${level + 1}3`
        resolve([
          { value: value1, text: value1, leaf: level >= 6 },
          { value: value2, text: value2, leaf: level >= 6 },
          { value: value3, text: value3, leaf: level >= 6 },
        ])
      }
    }, 2000)
  }
  const change3 = (value: any, path: any) => {
    console.log('onChange', value, path)
    setValue3(value)
  }
  return (
    <>
      <Cell
        title="选择地址"
        description={value3.length ? value3 : '请选择地址'}
        onClick={() => {
          setIsVisibleDemo3(true)
        }}
      />
      <Cascader
        visible={isVisibleDemo3}
        defaultValue={value3}
        title="选择地址"
        closeable
        onClose={() => {
          setIsVisibleDemo3(false)
        }}
        onChange={change3}
        lazy
        onLoad={lazyLoadDemo3}
      />
    </>
  )
}
export default Demo3
