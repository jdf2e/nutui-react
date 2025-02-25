import React, { useEffect, useState } from 'react'
import { Cascader, Cell, CascaderOption } from '@nutui/nutui-react-taro'

const Demo7 = () => {
  const [visible, setVisible] = useState(false)
  const [value, setValue] = useState<string[]>([])
  const [options, setOptions] = useState<CascaderOption[]>([])
  const onChange = (value: any, path: any) => {
    console.log('onchange', value, path)
    setValue(value)
  }
  useEffect(() => {
    setTimeout(() => {
      setValue(['浙江', '温州', '鹿城区'])
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
    }, 300)
  }, [])
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
        popupProps={{
          className: 'cascader-popup',
        }}
        visible={visible}
        defaultValue={value}
        title="选择地址"
        options={options}
        closeable
        onClose={() => {
          setVisible(false)
        }}
        onChange={onChange}
        onPathChange={(value, path) => {
          console.log(value, path)
        }}
      />
    </>
  )
}
export default Demo7
