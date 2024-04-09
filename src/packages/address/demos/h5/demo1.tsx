import React, { useState } from 'react'
import { Address, Cell } from '@nutui/nutui-react'

const Demo1 = () => {
  const [text, setText] = useState<string>('选择地址')
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
  const [visible, setVisible] = useState(false)

  return (
    <>
      <Cell
        title="选择自定义地址"
        description={text}
        onClick={() => setVisible(true)}
      />
      <Address
        visible={visible}
        options={optionsDemo1}
        title="选择地址"
        onChange={(value) => {
          setText(value.join(''))
        }}
        onClose={() => setVisible(false)}
      />
    </>
  )
}
export default Demo1
