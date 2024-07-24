import React, { useState } from 'react'
import { Cascader, Cell } from '@nutui/nutui-react-taro'

const Demo2 = () => {
  const [isVisibleDemo2, setIsVisibleDemo2] = useState(false)
  const [value2, setValue2] = useState(['福建', '福州', '台江区'])
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
            { value1: '芙蓉区', text1: '芙蓉区' },
            { value1: '岳麓区', text1: '岳麓区' },
          ],
        },
        {
          value1: '岳阳',
          text1: '岳阳',
          children: [
            { value1: '岳阳楼区', text1: '岳阳楼区' },
            { value1: '云溪区', text1: '云溪区' },
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
  const change2 = (value: any, path: any) => {
    console.log('onChange', value, path)
    setValue2(value)
  }

  return (
    <>
      <Cell
        title="选择地址"
        description={value2.length ? value2 : '请选择地址'}
        onClick={() => {
          setIsVisibleDemo2(true)
        }}
      />
      <Cascader
        visible={isVisibleDemo2}
        defaultValue={value2}
        title="选择地址"
        options={optionsDemo2}
        optionKey={{
          textKey: 'text1',
          valueKey: 'value1',
          childrenKey: 'items',
        }}
        closeable
        onClose={() => {
          setIsVisibleDemo2(false)
        }}
        onChange={change2}
      />
    </>
  )
}
export default Demo2
