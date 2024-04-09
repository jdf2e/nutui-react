import React, { useState } from 'react'
import { Cascader, Cell } from '@nutui/nutui-react-taro'

const Demo4 = () => {
  const [isVisibleDemo4, setIsVisibleDemo4] = useState(false)
  const [value4, setValue4] = useState([])
  const [optionsDemo4] = useState([
    { value: 'A0', text: 'A0' },
    {
      value: 'B0',
      text: 'B0',
      children: [
        { value: 'B11', text: 'B11', leaf: true },
        { value: 'B12', text: 'B12' },
      ],
    },
    { value: 'C0', text: 'C0' },
  ])

  const lazyLoadDemo4 = (node: any, resolve: (children: any) => void) => {
    setTimeout(() => {
      const { value, level } = node
      const text = value.substring(0, 1)
      const value1 = `${text}${level + 1}1`
      const value2 = `${text}${level + 1}2`
      resolve([
        { value: value1, text: value1, leaf: level >= 2 },
        { value: value2, text: value2, leaf: level >= 1 },
      ])
    }, 500)
  }
  const change4 = (value: any, path: any) => {
    console.log('onChange', value, path)
    setValue4(value)
  }

  return (
    <>
      <Cell
        title="选择地址"
        description={value4.length ? value4 : '请选择地址'}
        onClick={() => {
          setIsVisibleDemo4(true)
        }}
      />
      <Cascader
        visible={isVisibleDemo4}
        defaultValue={value4}
        title="选择地址"
        options={optionsDemo4}
        closeable
        onClose={() => {
          setIsVisibleDemo4(false)
        }}
        onChange={change4}
        lazy
        onLoad={lazyLoadDemo4}
      />
    </>
  )
}
export default Demo4
