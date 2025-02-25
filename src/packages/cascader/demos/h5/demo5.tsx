import React, { useEffect, useState } from 'react'
import { Cascader, CascaderOption, Cell } from '@nutui/nutui-react'

const Demo5 = () => {
  const [visible, setVisible] = useState(false)
  const [value, setValue] = useState<string[]>([])
  const [options, setOptions] = useState<CascaderOption[]>([])
  const format = {
    topId: null,
    idKey: 'id',
    pidKey: 'pidd',
  }

  useEffect(() => {
    setTimeout(() => {
      setValue(['广东省', '广州市'])
      setOptions([
        { value: '北京', text: '北京', id: 1, pidd: null },
        { value: '通州区', text: '通州区', id: 11, pidd: 1, sortKey: 2 },
        { value: '大兴区', text: '大兴区', id: 12, pidd: 1, sortKey: 1 },
        { value: '经海路', text: '经海路', id: 111, pidd: 12, sortKey: 2 },
        { value: '黄亦路', text: '黄亦路', id: 112, pidd: 12, sortKey: 1 },
        { value: '广东省', text: '广东省', id: 2, pidd: null },
        { value: '广州市', text: '广州市', id: 21, pidd: 2 },
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
        value={value}
        title="选择地址"
        options={options}
        format={format}
        closeable
        onClose={() => {
          setVisible(false)
        }}
        onChange={onChange}
      />
    </>
  )
}
export default Demo5
