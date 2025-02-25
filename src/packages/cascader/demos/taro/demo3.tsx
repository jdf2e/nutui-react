import React, { useState } from 'react'
import { Cascader, CascaderOption, Cell } from '@nutui/nutui-react-taro'

const Demo3 = () => {
  const [visible, setVisible] = useState(false)
  const [value, setValue] = useState(['A11', 'A21', 'A31', 'A41'])

  const loadCascaderItemData = (
    node: CascaderOption,
    level: number
  ): Promise<CascaderOption[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const { value } = node
        const text = value?.toString().substring(0, 1)
        const value1 = `${text}${level + 1}1`
        const value2 = `${text}${level + 1}2`
        resolve([
          { value: value1, text: value1, leaf: level >= 2 },
          { value: value2, text: value2, leaf: level >= 2 },
        ])
      }, 500)
    })
  }
  const onChange = (value: any, path: any) => {
    setValue(value)
  }

  return (
    <>
      <Cell
        title="选择地址"
        description={value.length ? value.join(',') : '请选择地址'}
        onClick={() => {
          setVisible(true)
        }}
      />
      <Cascader
        visible={visible}
        defaultValue={value}
        title="选择地址"
        closeable
        onClose={() => {
          setVisible(false)
        }}
        onChange={onChange}
        lazy
        onLoad={loadCascaderItemData}
      />
    </>
  )
}
export default Demo3
