import React, { useState, useEffect } from 'react'
import { useTranslate } from '../../sites/assets/locale'
import { Cascader } from './cascader.taro'
import { Cell } from '../cell/cell.taro'

interface T {
  basic: string
  title1: string
  title2: string
  title3: string
  title4: string
  addressTip: string
  addressTip1: string
}

const CascaderDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      basic: '基本用法',
      title1: '自定义属性名称',
      title2: '动态加载',
      title3: '部分数据动态加载',
      title4: '自动转换',
      addressTip: '选择地址',
      addressTip1: '请选择地址',
    },
    'zh-TW': {
      basic: '基本用法',
      title1: '自定義屬性名稱',
      title2: '動態加載',
      title3: '部分數據動態加載',
      title4: '自動轉換',
      addressTip: '選擇地址',
      addressTip1: '請選擇地址',
    },
    'en-US': {
      basic: 'Basic Usage',
      title1: 'Custom attribute name',
      title2: 'Async loading',
      title3: 'Async loading of partial data',
      title4: 'Automatic data conversion',
      addressTip: 'Select address',
      addressTip1: 'Please select an address',
    },
  })

  const [isVisibleDemo1, setIsVisibleDemo1] = useState(false)
  const [isVisibleDemo2, setIsVisibleDemo2] = useState(false)
  const [isVisibleDemo3, setIsVisibleDemo3] = useState(false)
  const [isVisibleDemo4, setIsVisibleDemo4] = useState(false)
  const [isVisibleDemo5, setIsVisibleDemo5] = useState(false)

  const [text, setText] = useState({
    desc1: translated.addressTip1,
    desc2: '福建福州台江区',
    desc3: 'A0A12A23A32',
    desc4: translated.addressTip1,
    desc5: '广东省广州市',
  })
  useEffect(() => {
    setText({
      ...text,
      desc1: translated.addressTip1,
      desc4: translated.addressTip1,
    })
  }, [translated])
  const [value1, setValue1] = useState([])
  const [value2, setValue2] = useState(['福建', '福州', '台江区'])
  const [value3, setValue3] = useState(['A0', 'A12', 'A23', 'A32'])
  const [value4, setValue4] = useState([])
  const [value5, setValue5] = useState(['广东省', '广州市'])
  const [optionsDemo1, setOptionsDemo1] = useState([
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
  const [optionsDemo2, setOptionsDemo2] = useState([
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
  const [optionsDemo4, setOptionsDemo4] = useState([
    { value: 'A0', text: 'A0' },
    {
      value: 'B0',
      text: 'B0',
      children: [
        { value: 'B11', text: 'B11', leaf: true },
        { value: 'B12', text: 'B12' },
      ],
    },
    { value: 'C0', text: 'C0' },
  ])
  const [optionsDemo5, setOptionsDemo5] = useState([
    { value: '北京', text: '北京', id: 1, pid: null },
    { value: '朝阳区', text: '朝阳区', id: 11, pid: 1 },
    { value: '亦庄', text: '亦庄', id: 111, pid: 11 },
    { value: '广东省', text: '广东省', id: 2, pid: null },
    { value: '广州市', text: '广州市', id: 21, pid: 2 },
  ])
  const [convertConfigDemo5, setConvertConfigDemo5] = useState({
    topId: null,
    idKey: 'id',
    pidKey: 'pid',
    sortKey: '',
  })

  const change1 = (value: any, path: any) => {
    console.log('onChange', value, path)
    setText({
      ...text,
      desc1: value,
    })
    setValue1(value)
  }
  const change2 = (value: any, path: any) => {
    console.log('onChange', value, path)
    setText({
      ...text,
      desc2: value,
    })
    setValue2(value)
  }
  const change3 = (value: any, path: any) => {
    console.log('onChange', value, path)
    setText({
      ...text,
      desc3: value,
    })
    setValue3(value)
  }
  const change4 = (value: any, path: any) => {
    console.log('onChange', value, path)
    setText({
      ...text,
      desc4: value,
    })
    setValue4(value)
  }
  const change5 = (value: any, path: any) => {
    console.log('onChange', value, path)
    setText({
      ...text,
      desc5: value,
    })
    setValue5(value)
  }
  const onPathChange = (value: any, path: any) => {
    console.log('onPathChange', value, path)
  }

  const lazyLoadDemo3 = (node: any, resolve: (children: any) => void) => {
    setTimeout(() => {
      if (node.root) {
        resolve([
          { value: 'A0', text: 'A0' },
          { value: 'B0', text: 'B0' },
          { value: 'C0', text: 'C0' },
        ])
      } else {
        const { value, level } = node
        const text = value.substring(0, 1)
        const value1 = `${text}${level + 1}1`
        const value2 = `${text}${level + 1}2`
        const value3 = `${text}${level + 1}3`
        resolve([
          { value: value1, text: value1, leaf: level >= 6 },
          { value: value2, text: value2, leaf: level >= 6 },
          { value: value3, text: value3, leaf: level >= 6 },
        ])
      }
    }, 2000)
  }

  const lazyLoadDemo4 = (node: any, resolve: (children: any) => void) => {
    setTimeout(() => {
      const { value, level } = node
      const text = value.substring(0, 1)
      const value1 = `${text}${level + 1}1`
      const value2 = `${text}${level + 1}2`
      resolve([
        { value: value1, text: value1, leaf: level >= 2 },
        { value: value2, text: value2, leaf: level >= 1 },
      ])
    }, 500)
  }

  return (
    <>
      <div className="demo">
        <h2>{translated.basic}</h2>
        <Cell
          title={translated.addressTip}
          desc={text.desc1}
          onClick={() => {
            setIsVisibleDemo1(true)
          }}
        />
        <Cascader
          visible={isVisibleDemo1}
          value={value1}
          title={translated.addressTip}
          options={optionsDemo1}
          closeable
          onClose={() => {
            setIsVisibleDemo1(false)
          }}
          onChange={change1}
          onPathChange={onPathChange}
        />
        <h2>{translated.title1}</h2>
        <Cell
          title={translated.addressTip}
          desc={text.desc2}
          onClick={() => {
            setIsVisibleDemo2(true)
          }}
        />
        <Cascader
          visible={isVisibleDemo2}
          value={value2}
          title={translated.addressTip}
          options={optionsDemo2}
          textKey="text1"
          valueKey="value1"
          childrenKey="items"
          closeable
          onClose={() => {
            setIsVisibleDemo2(false)
          }}
          onChange={change2}
          onPathChange={onPathChange}
        />
        <h2>{translated.title2}</h2>
        <Cell
          title={translated.addressTip}
          desc={text.desc3}
          onClick={() => {
            setIsVisibleDemo3(true)
          }}
        />
        <Cascader
          visible={isVisibleDemo3}
          value={value3}
          title={translated.addressTip}
          closeable
          onClose={() => {
            setIsVisibleDemo3(false)
          }}
          onChange={change3}
          onPathChange={onPathChange}
          lazy
          lazyLoad={lazyLoadDemo3}
        />
        <h2>{translated.title3}</h2>
        <Cell
          title={translated.addressTip}
          desc={text.desc4}
          onClick={() => {
            setIsVisibleDemo4(true)
          }}
        />
        <Cascader
          visible={isVisibleDemo4}
          value={value4}
          title={translated.addressTip}
          options={optionsDemo4}
          closeable
          onClose={() => {
            setIsVisibleDemo4(false)
          }}
          onChange={change4}
          onPathChange={onPathChange}
          lazy
          lazyLoad={lazyLoadDemo4}
        />
        <h2>{translated.title4}</h2>
        <Cell
          title={translated.addressTip}
          desc={text.desc5}
          onClick={() => {
            setIsVisibleDemo5(true)
          }}
        />
        <Cascader
          visible={isVisibleDemo5}
          value={value5}
          title={translated.addressTip}
          options={optionsDemo5}
          convertConfig={convertConfigDemo5}
          closeable
          onClose={() => {
            setIsVisibleDemo5(false)
          }}
          onChange={change5}
          onPathChange={onPathChange}
        />
      </div>
    </>
  )
}

export default CascaderDemo
