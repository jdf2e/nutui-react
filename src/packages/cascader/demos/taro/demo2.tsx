import React, { useEffect, useState } from 'react'
import { Cascader, CascaderOption, Cell } from '@nutui/nutui-react-taro'

const Demo2 = () => {
  const [visible, setVisible] = useState(false)
  const [value, setValue] = useState(['ZheJiang', 'WenZhou', 'OuHai'])
  const [options, setOptions] = useState<CascaderOption[]>([])
  useEffect(() => {
    setTimeout(() => {
      setOptions([
        {
          value1: 'ZheJiang',
          text1: '浙江',
          items: [
            {
              value1: 'HangZhou',
              text1: '杭州',
              disabled: true,
              items: [
                { value1: 'XiHu', text1: '西湖区', disabled: true },
                { value1: 'YuHang', text1: '余杭区' },
              ],
            },
            {
              value1: 'WenZhou',
              text1: '温州',
              items: [
                { value1: 'LuCheng', text1: '鹿城区' },
                { value1: 'OuHai', text1: '瓯海区' },
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
    }, 300)
  }, [])
  const onChange = (value: any, path: any) => {
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
        optionKey={{
          textKey: 'text1',
          valueKey: 'value1',
          childrenKey: 'items',
        }}
        closeable
        onClose={() => {
          setVisible(false)
        }}
        onChange={onChange}
      />
    </>
  )
}
export default Demo2
