import React, { useState } from 'react'
import { Cell, Cascader, ConfigProvider } from '@nutui/nutui-react'

const customTheme = {
  nutuiCascaderItemHeight: '48px',
  nutuiCascaderItemMargin: '0 10px',
  nutuiCascaderItemPadding: '10px',
  nutuiCascaderItemBorderBottom: '1px solid #F0F0F0',
  nutuiTabsTitlesItemActiveColor: '#3768FA',
  nutuiTabsTabLineColor: '#3768FA',
}

const Demo6 = () => {
  const [isVisibleDemo6, setIsVisibleDemo6] = useState(false)
  const [value6, setValue6] = useState([])
  const [optionsDemo6] = useState([
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
  const change6 = (value: any, path: any) => {
    console.log('onChange', value, path)
    setValue6(value)
  }
  const onPathChange = (value: any, path: any) => {
    console.log('onPathChange', value, path)
  }

  return (
    <>
      <Cell
        title="选择地址"
        description={value6.length ? value6 : '请选择地址'}
        onClick={() => {
          setIsVisibleDemo6(true)
        }}
      />
      <ConfigProvider theme={customTheme}>
        <Cascader
          visible={isVisibleDemo6}
          activeColor="#3768FA"
          defaultValue={value6}
          title="选择地址"
          options={optionsDemo6}
          closeable
          activeIcon="star"
          onClose={() => {
            setIsVisibleDemo6(false)
          }}
          onChange={change6}
          onPathChange={onPathChange}
        />{' '}
      </ConfigProvider>
    </>
  )
}
export default Demo6
