import React, { useEffect, useState } from 'react'
import { Cascader, Cell, CascaderOption } from '@nutui/nutui-react-taro'

const Demo1 = () => {
  const [visible, setVisible] = useState(false)
  const [value, setValue] = useState([])
  const [options, setOptions] = useState<CascaderOption[]>([])
  const onChange = (value: any, path: any) => {
    setValue(value)
  }
  useEffect(() => {
    setTimeout(() => {
      setOptions([
        {
          value: 'ZheJiang',
          text: '浙江',
          children: [
            {
              value: 'HangZhou',
              text: '杭州',
              disabled: true,
              children: [
                { value: 'XiHu', text: '西湖区', disabled: true },
                { value: 'YuHang', text: '余杭区' },
              ],
            },
            {
              value: 'WenZhou',
              text: '温州',
              children: [
                { value: 'LuCheng', text: '鹿城区' },
                { value: 'OuHai', text: '瓯海区' },
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
        value={value}
        title="选择地址"
        options={options}
        closeable
        onClose={() => {
          setVisible(false)
        }}
        onChange={onChange}
      />
    </>
  )
}
export default Demo1
