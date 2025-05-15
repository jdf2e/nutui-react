import React, { useEffect, useState } from 'react'
import {
  Cell,
  Cascader,
  ConfigProvider,
  CascaderOption,
} from '@nutui/nutui-react-taro'

const customTheme = {
  nutuiCascaderItemHeight: '48px',
  nutuiCascaderItemMargin: '0 10px',
  nutuiCascaderItemPadding: '10px',
  nutuiCascaderItemBorderBottom: '1px solid #F0F0F0',
  nutuiTabsTitlesItemActiveColor: '#3768FA',
  nutuiTabsTabLineColor: '#3768FA',
}

const Demo6 = () => {
  const [visible, setVisible] = useState(false)
  const [value, setValue] = useState<string[]>(['浙江', '温州', '鹿城区'])
  const [options, setOptions] = useState<CascaderOption[]>([])
  useEffect(() => {
    setTimeout(() => {
      setOptions([
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
    }, 300)
  }, [])
  const onChange = (value: any, path: any) => {
    setValue(value)
  }
  const onPathChange = (value: any, path: any) => {
    console.log('onPathChange', value, path)
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
      <ConfigProvider theme={customTheme}>
        <Cascader
          visible={visible}
          activeColor="#3768FA"
          value={value}
          title="选择地址"
          options={options}
          closeable
          activeIcon="star"
          onClose={() => {
            setVisible(false)
          }}
          onChange={onChange}
          onPathChange={onPathChange}
        />
      </ConfigProvider>
    </>
  )
}
export default Demo6
