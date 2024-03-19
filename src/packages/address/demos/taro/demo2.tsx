import React, { useState } from 'react'
import { Address, Cell } from '@nutui/nutui-react-taro'

const Demo2 = () => {
  const [text, setText] = useState('请选择地址')
  const [visible, setVisible] = useState(false)
  const [value2] = useState(['福建', '福州', '台江区'])
  const [optionsDemo2] = useState([
    {
      value1: '浙江',
      text1: '浙江',
      items: [
        {
          value1: '杭州',
          text1: '杭州',
          disabled: true,
          items: [
            { value1: '西湖区', text1: '西湖区', disabled: true },
            { value1: '余杭区', text1: '余杭区' },
          ],
        },
        {
          value1: '温州',
          text1: '温州',
          items: [
            { value1: '鹿城区', text1: '鹿城区' },
            { value1: '瓯海区', text1: '瓯海区' },
          ],
        },
      ],
    },
    {
      value1: '湖南',
      text1: '湖南',
      disabled: true,
      items: [
        {
          value1: '长沙',
          text1: '长沙',
          disabled: true,
          items: [
            { value1: '西湖区', text1: '西湖区' },
            { value1: '余杭区', text1: '余杭区' },
          ],
        },
        {
          value1: '温州',
          text1: '温州',
          items: [
            { value1: '鹿城区', text1: '鹿城区' },
            { value1: '瓯海区', text1: '瓯海区' },
          ],
        },
      ],
    },
    {
      value1: '福建',
      text1: '福建',
      items: [
        {
          value1: '福州',
          text1: '福州',
          items: [
            { value1: '鼓楼区', text1: '鼓楼区' },
            { value1: '台江区', text1: '台江区' },
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
        onClick={() => setVisible(true)}
      />
      <Address
        visible={visible}
        defaultValue={value2}
        options={optionsDemo2}
        optionKey={{
          textKey: 'text1',
          valueKey: 'value1',
          childrenKey: 'items',
        }}
        onChange={(value, params) => {
          setText(value.join(''))
        }}
        onClose={() => setVisible(false)}
      />
    </>
  )
}
export default Demo2
