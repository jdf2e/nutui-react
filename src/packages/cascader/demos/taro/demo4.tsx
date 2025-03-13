import React, { useEffect, useState } from 'react'
import { Cascader, Cell, CascaderOption } from '@nutui/nutui-react-taro'

const Demo4 = () => {
  const [visible, setVisible] = useState(false)
  const [value, setValue] = useState([])
  const [options, setOptions] = useState<CascaderOption[]>([])
  useEffect(() => {
    setTimeout(() => {
      setOptions([
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
    }, 300)
  }, [])

  const lazyLoadDemo4 = async (
    node: any,
    level: number
  ): Promise<CascaderOption[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const { value } = node
        const text = value.substring(0, 1)
        const value1 = `${text}${level + 1}1`
        const value2 = `${text}${level + 1}2`
        resolve([
          { value: value1, text: value1, leaf: level >= 2 },
          { value: value2, text: value2, leaf: level >= 1 },
        ])
      }, 500)
    })
  }
  const change4 = (value: any, path: any) => {
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
        options={options}
        closeable
        onClose={() => {
          setVisible(false)
        }}
        onChange={change4}
        onLoad={lazyLoadDemo4}
      />
    </>
  )
}
export default Demo4
