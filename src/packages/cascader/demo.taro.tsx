import React, { useState, useEffect } from 'react'
import Taro from '@tarojs/taro'
import { useTranslate } from '@/sites/assets/locale/taro'
import { Cascader, Cell, ConfigProvider } from '@/packages/nutui.react.taro'
import Header from '@/sites/components/header'

interface T {
  basic: string
  title1: string
  title2: string
  title3: string
  title4: string
  title5: string
  addressTip: string
  addressTip1: string
}

const customTheme = {
  nutuiCascaderItemHeight: '48px',
  nutuiCascaderItemMargin: '0 10px',
  nutuiCascaderItemPadding: '10px',
  nutuiCascaderItemBorderBottom: '1px solid #F0F0F0',
  nutuiTabsTitlesItemActiveColor: '#3768FA',
  nutuiTabsHorizontalTabLineColor: '#3768FA',
}
const CascaderDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      basic: '基础用法',
      title1: '自定义属性名称',
      title2: '动态加载',
      title3: '部分数据动态加载',
      title4: '自动转换',
      title5: '自定义样式',
      addressTip: '选择地址',
      addressTip1: '请选择地址',
    },
    'zh-TW': {
      basic: '基础用法',
      title1: '自定義屬性名稱',
      title2: '動態加載',
      title3: '部分數據動態加載',
      title4: '自動轉換',
      title5: '自定義样式',
      addressTip: '選擇地址',
      addressTip1: '請選擇地址',
    },
    'en-US': {
      basic: 'Basic Usage',
      title1: 'Custom attribute name',
      title2: 'Async loading',
      title3: 'Async loading of partial data',
      title4: 'Automatic data conversion',
      title5: 'Customize CSS',
      addressTip: 'Select address',
      addressTip1: 'Please select an address',
    },
  })

  const [isVisibleDemo1, setIsVisibleDemo1] = useState(false)
  const [isVisibleDemo2, setIsVisibleDemo2] = useState(false)
  const [isVisibleDemo3, setIsVisibleDemo3] = useState(false)
  const [isVisibleDemo4, setIsVisibleDemo4] = useState(false)
  const [isVisibleDemo5, setIsVisibleDemo5] = useState(false)
  const [isVisibleDemo6, setIsVisibleDemo6] = useState(false)

  const [text, setText] = useState({
    desc1: translated.addressTip1,
    desc2: '福建福州台江区',
    desc3: 'A0A12A23A32',
    desc4: translated.addressTip1,
    desc5: '广东省广州市',
    desc6: translated.addressTip1,
  })
  useEffect(() => {
    setText({
      ...text,
      desc1: translated.addressTip1,
      desc4: translated.addressTip1,
      desc6: translated.addressTip1,
    })
  }, [translated])
  const [value1, setValue1] = useState([])
  const [value2, setValue2] = useState(['福建', '福州', '台江区'])
  const [value3, setValue3] = useState(['A0', 'A12', 'A23', 'A32'])
  const [value4, setValue4] = useState([])
  const [value5, setValue5] = useState(['广东省', '广州市'])
  const [value6, setValue6] = useState([])
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
  const [optionsDemo4] = useState([
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
  const [optionsDemo5] = useState([
    { value: '北京', text: '北京', id: 1, pidd: null },
    { value: '朝阳区', text: '朝阳区', id: 11, pidd: 1 },
    { value: '亦庄', text: '亦庄', id: 111, pidd: 11 },
    { value: '广东省', text: '广东省', id: 2, pidd: null },
    { value: '广州市', text: '广州市', id: 21, pidd: 2 },
  ])
  const [convertConfigDemo5] = useState({
    topId: null,
    idKey: 'id',
    pidKey: 'pidd',
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
    console.log('change2', value, path)
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
  const change6 = (value: any, path: any) => {
    console.log('onChange', value, path)
    setText({
      ...text,
      desc6: value,
    })
    setValue6(value)
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
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <h2>{translated.basic}</h2>
        <Cell
          title={translated.addressTip}
          description={text.desc1}
          onClick={() => {
            setIsVisibleDemo1(true)
          }}
        />
        <Cascader
          popupProps={{
            className: 'cascader-popup',
          }}
          visible={isVisibleDemo1}
          value={value1}
          title={translated.addressTip}
          options={optionsDemo1}
          closeable
          onClose={() => {
            setIsVisibleDemo1(false)
          }}
          onChange={change1}
        />
        <h2>{translated.title1}</h2>
        <Cell
          title={translated.addressTip}
          description={text.desc2}
          onClick={() => {
            setIsVisibleDemo2(true)
          }}
        />
        <Cascader
          visible={isVisibleDemo2}
          defaultValue={value2}
          title={translated.addressTip}
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
        <h2>{translated.title2}</h2>
        <Cell
          title={translated.addressTip}
          description={text.desc3}
          onClick={() => {
            setIsVisibleDemo3(true)
          }}
        />
        <Cascader
          visible={isVisibleDemo3}
          defaultValue={value3}
          title={translated.addressTip}
          closeable
          onClose={() => {
            setIsVisibleDemo3(false)
          }}
          onChange={change3}
          lazy
          onLoad={lazyLoadDemo3}
        />
        <h2>{translated.title3}</h2>
        <Cell
          title={translated.addressTip}
          description={text.desc4}
          onClick={() => {
            setIsVisibleDemo4(true)
          }}
        />
        <Cascader
          visible={isVisibleDemo4}
          defaultValue={value4}
          title={translated.addressTip}
          options={optionsDemo4}
          closeable
          onClose={() => {
            setIsVisibleDemo4(false)
          }}
          onChange={change4}
          lazy
          onLoad={lazyLoadDemo4}
        />
        <h2>{translated.title4}</h2>
        <Cell
          title={translated.addressTip}
          description={text.desc5}
          onClick={() => {
            setIsVisibleDemo5(true)
          }}
        />
        <Cascader
          visible={isVisibleDemo5}
          defaultValue={value5}
          title={translated.addressTip}
          options={optionsDemo5}
          format={convertConfigDemo5}
          closeable
          onClose={() => {
            setIsVisibleDemo5(false)
          }}
          onChange={change5}
        />
        <h2>{translated.title5}</h2>
        <Cell
          title={translated.addressTip}
          description={text.desc6}
          onClick={() => {
            setIsVisibleDemo6(true)
          }}
        />
        <ConfigProvider theme={customTheme}>
          <Cascader
            visible={isVisibleDemo6}
            activeColor="#3768FA"
            defaultValue={value6}
            title={translated.addressTip}
            options={optionsDemo1}
            closeable
            activeIcon="star"
            onClose={() => {
              setIsVisibleDemo6(false)
            }}
            onChange={change6}
            onPathChange={onPathChange}
          />{' '}
        </ConfigProvider>
      </div>
    </>
  )
}

export default CascaderDemo
