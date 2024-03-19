import React, { useState, useRef } from 'react'
import { Address, Cell } from '@nutui/nutui-react-taro'

const Demo6 = () => {
  const addressRef = useRef<any>(null)
  const [text, setText] = useState('请选择地址')

  const [optionsDemo] = useState([
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
            { value: '西湖区', text: '西湖区' },
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

  return (
    <>
      <Cell
        title="选择地址"
        description={text}
        onClick={() => addressRef.current?.open()}
      />
      <Address
        ref={addressRef}
        defaultVisible={false}
        options={optionsDemo}
        title="选择地址"
        onChange={(value, params) => {
          setText(value.join(''))
        }}
        onClose={() => addressRef.current?.close()}
      />
    </>
  )
}
export default Demo6
