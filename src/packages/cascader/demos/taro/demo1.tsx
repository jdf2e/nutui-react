import React, { useState } from 'react'
import { Cascader, Cell } from '@nutui/nutui-react-taro'

const Demo1 = () => {
  const [isVisibleDemo1, setIsVisibleDemo1] = useState(false)
  const [value1, setValue1] = useState([])
  const [optionsDemo1] = useState([
    {
      value: '浙江',
      text: '浙江',
      children: [
        {
          value: '杭州',
          text: '杭州',
          disabled: true,
          children: [
            { value: '西湖区', text: '西湖区', disabled: true },
            { value: '余杭区', text: '余杭区' },
          ],
        },
        {
          value: '温州',
          text: '温州',
          children: [
            { value: '鹿城区', text: '鹿城区' },
            { value: '瓯海区', text: '瓯海区' },
          ],
        },
      ],
    },
    {
      value: '湖南',
      text: '湖南',
      disabled: true,
      children: [
        {
          value: '长沙',
          text: '长沙',
          disabled: true,
          children: [
            { value: '芙蓉区', text: '芙蓉区' },
            { value: '岳麓区', text: '岳麓区' },
          ],
        },
        {
          value: '岳阳',
          text: '岳阳',
          children: [
            { value: '岳阳楼区', text: '岳阳楼区' },
            { value: '云溪区', text: '云溪区' },
          ],
        },
      ],
    },
    {
      value: '福建',
      text: '福建',
      children: [
        {
          value: '福州',
          text: '福州',
          children: [
            { value: '鼓楼区', text: '鼓楼区' },
            { value: '台江区', text: '台江区' },
          ],
        },
      ],
    },
  ])
  const change1 = (value: any, path: any) => {
    console.log('onChange', value, path)
    setValue1(value)
  }

  return (
    <>
      <Cell
        title="选择地址"
        description={value1.length ? value1 : '请选择地址'}
        onClick={() => {
          setIsVisibleDemo1(true)
        }}
      />
      <Cascader
        popupProps={{
          className: 'cascader-popup',
        }}
        visible={isVisibleDemo1}
        value={value1}
        title="选择地址"
        options={optionsDemo1}
        closeable
        onClose={() => {
          setIsVisibleDemo1(false)
        }}
        onChange={change1}
      />
    </>
  )
}
export default Demo1
