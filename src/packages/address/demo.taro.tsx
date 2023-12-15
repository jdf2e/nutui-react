import React, { useState, useRef } from 'react'
import Taro from '@tarojs/taro'
import { Heart } from '@nutui/icons-react-taro'
import { Address, Cell } from '@/packages/nutui.react.taro'
import Header from '@/sites/components/header'
import { useTranslate } from '@/sites/assets/locale/taro'

interface RegionData {
  name?: string
  [key: string]: any
}
interface AddressList {
  id?: string | number
  provinceName: string
  cityName: string
  countyName: string
  townName: string
  addressDetail: string
  selectedAddress: boolean
  name?: string
  phone?: string
}
interface AddressResult extends AddressList {
  addressIdStr: string
  addressStr: string
  province: RegionData[]
  city: RegionData[]
  county: RegionData[]
  town: RegionData[]
}

interface T {
  [props: string]: string
}
const AddressDemo = () => {
  const addressRef = useRef<any>(null)

  const [translated] = useTranslate<T>({
    'zh-CN': {
      basic: '基础用法',
      title: '选择地址',
      customAddress: '选择自定义地址',
      selectCity: '选中省市区',
      customAddress2: '选择自定义地址2',
      existList: '选择已有地址',
      icon: '自定义图标',
      change: '自定义地址与已有地址切换',
      delivery: '配送',
      other: '选择其他地址',
      uncontrolled: '非受控方式',
    },
    'zh-TW': {
      basic: '基础用法',
      title: '選擇地址',
      customAddress: '選擇自定義地址',
      selectCity: '選中省市區',
      customAddress2: '選擇自定義地址2',
      existList: '選擇已有地址',
      icon: '自定義圖標',
      change: '自定義地址與已有地址切換',
      delivery: '配送',
      other: '選擇其他地址',
      uncontrolled: '非受控方式',
    },
    'en-US': {
      basic: 'Basic Usage',
      title: 'Choose Address',
      customAddress: 'Choose Custom Address',
      selectCity: 'Choose City',
      customAddress2: 'Choose Custom Address2',
      existList: 'Choose Exist Address',
      icon: 'Custom Icon',
      change: 'Custom Or Exist',
      delivery: 'Delivery',
      other: 'Choose Other Address',
      uncontrolled: 'Uncontrolled',
    },
  })

  const [value2] = useState(['福建', '福州', '台江区'])

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
    {
      value: '河北',
      text: '河北',
      children: [],
    },
    {
      value: '上海',
      text: '上海',
      children: [],
    },
    {
      value: '新疆',
      text: '新疆',
      children: [],
    },
    {
      value: '广东',
      text: '广东',
      children: [],
    },
    {
      value: '广西',
      text: '广西',
      children: [],
    },
    {
      value: '辽宁',
      text: '辽宁',
      children: [],
    },
    {
      value: '山西',
      text: '山西',
      children: [],
    },
    {
      value: '黑龙江',
      text: '黑龙江',
      children: [],
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
  const [text, setText] = useState<any>({
    one: translated.title,
    two: translated.title,
    three: translated.title,
    four: translated.title,
    five: translated.title,
    six: translated.title,
    seven: translated.title,
  })

  const [showPopup, setShowPopup] = useState({
    normal: false,
    normal2: false,
    exist: false,
    customImg: false,
    other: false,
    select: false,
  })

  const [icon, setIcon] = useState({
    selectIcon: <Heart color="red" />,
    defaultIcon: <Heart />,
    closeIcon: <Heart />,
  })

  const [existList2, setExistList2] = useState([
    {
      id: 1,
      addressDetail: '',
      cityName: '次渠镇',
      countyName: '通州区',
      provinceName: '北京市',
      selectedAddress: true,
      townName: '',
      name: '探探鱼1',
      phone: '182****1718',
    },
    {
      id: 2,
      addressDetail: '',
      cityName: '钓鱼岛全区',
      countyName: '',
      provinceName: '钓鱼岛',
      selectedAddress: false,
      townName: '',
      name: '探探鱼2',
      phone: '182****1718',
    },
    {
      id: 3,
      addressDetail: '京东大厦',
      cityName: '大兴区',
      countyName: '科创十一街18号院',
      provinceName: '北京市',
      selectedAddress: false,
      townName: '',
      name: '探探鱼3',
      phone: '182****1718',
    },
  ])

  const [existList3] = useState([
    {
      id: 10,
      addressDetail: '',
      cityName: '次渠镇',
      countyName: '通州区',
      provinceName: '北京市',
      selectedAddress: true,
      townName: '',
      name: '探探鱼10',
      phone: '182****1718',
    },
    {
      id: 20,
      addressDetail: '',
      cityName: '钓鱼岛全区',
      countyName: '',
      provinceName: '钓鱼岛',
      selectedAddress: false,
      townName: '',
      name: '探探鱼20',
      phone: '182****1718',
    },
    {
      id: 30,
      addressDetail: '京东大厦',
      cityName: '大兴区',
      countyName: '科创十一街18号院',
      provinceName: '北京市',
      selectedAddress: false,
      townName: '',
      name: '探探鱼30',
      phone: '182****1718',
    },
  ])

  const [existList4] = useState([
    {
      id: 100,
      addressDetail: '',
      cityName: '次渠镇',
      countyName: '通州区',
      provinceName: '北京市',
      selectedAddress: true,
      townName: '',
      name: '探探鱼100',
      phone: '182****1718',
    },
    {
      id: 200,
      addressDetail: '',
      cityName: '钓鱼岛全区',
      countyName: '',
      provinceName: '钓鱼岛',
      selectedAddress: false,
      townName: '',
      name: '探探鱼200',
      phone: '182****1718',
    },
    {
      id: 300,
      addressDetail: '京东大厦',
      cityName: '大兴区',
      countyName: '科创十一街18号院',
      provinceName: '北京市',
      selectedAddress: false,
      townName: '',
      name: '探探鱼300',
      phone: '182****1718',
    },
  ])

  const showAddress = (tag: string) => {
    setShowPopup({
      ...showPopup,
      [tag]: true,
    })
  }

  const closeAddress = (tag: string) => {
    setShowPopup({
      ...showPopup,
      [tag]: false,
    })
  }

  const selectedTwo = (data: AddressList) => {
    console.log('选择2', data)
    const { provinceName, cityName, countyName, townName, addressDetail } =
      data as AddressResult
    if (provinceName) {
      setText({
        ...text,
        two: provinceName + cityName + countyName + townName + addressDetail,
      })
    }
  }

  const selectedThree = (data: AddressList) => {
    console.log('选择3', data)
    const { provinceName, cityName, countyName, townName, addressDetail } =
      data as AddressResult
    if (provinceName) {
      setText({
        ...text,
        three: provinceName + cityName + countyName + townName + addressDetail,
      })
    }
  }

  const selectedFour = (data: AddressList) => {
    console.log('选择4', data)
    const { provinceName, cityName, countyName, townName, addressDetail } =
      data as AddressResult
    if (provinceName) {
      setText({
        ...text,
        four: provinceName + cityName + countyName + townName + addressDetail,
      })
    }
  }
  const [customeTitle, setCustomTitle] = useState('选择已有地址')

  const onSwitch = (val: { type: string }) => {
    if (val.type === 'custom') {
      setCustomTitle('选择已有地址')
      console.log('点击了“选择其他地址”按钮')
    } else {
      setCustomTitle('重新选择地址')
      console.log('点击了自定义地址左上角的返回按钮', showPopup.other)
    }
  }

  const change1 = (value: any, path: any, type: string) => {
    console.log('change1', value, path)
    setText({
      ...text,
      [type]: value,
    })
  }

  return (
    <>
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <h2>{translated.title}</h2>
        <Cell
          title={translated.customAddress}
          description={text.one}
          onClick={() => showAddress('normal')}
        />
        <h2>{translated.selectCity}</h2>
        <Cell
          title={translated.title}
          description={text.six}
          onClick={() => showAddress('select')}
        />
        {/* <h2>{translated.customAddress2}</h2>
        <Cell
          title={translated.title}
          description={text.five}
          onClick={() => showAddress('normal2')}
        /> */}
        <h2>{translated.existList}</h2>
        <Cell
          title={translated.title}
          description={text.two}
          onClick={() => showAddress('exist')}
        />
        <h2>{translated.icon}</h2>
        <Cell
          title={translated.title}
          description={text.three}
          onClick={() => showAddress('customImg')}
        />
        <h2>{translated.change}</h2>
        <Cell
          title={translated.title}
          description={text.four}
          onClick={() => showAddress('other')}
        />
        <h2>{translated.uncontrolled}</h2>
        <Cell
          title={translated.title}
          description={text.seven}
          onClick={() => addressRef.current?.open()}
        />

        <Address
          visible={showPopup.normal}
          options={optionsDemo1}
          closeIcon={icon.closeIcon}
          title={translated.title}
          onChange={(value, params) => {
            change1(value, params, 'one')
          }}
          onClose={() => closeAddress('normal')}
        />

        <Address
          visible={showPopup.select}
          defaultValue={value2}
          options={optionsDemo2}
          optionKey={{
            textKey: 'text1',
            valueKey: 'value1',
            childrenKey: 'items',
          }}
          onChange={(value, params) => {
            change1(value, params, 'six')
          }}
          onClose={() => closeAddress('select')}
        />

        <Address
          visible={showPopup.normal2}
          type="custom2"
          defaultValue={[1, 7, 3]}
          height="270px"
          onChange={(value, params) => {
            change1(value, params, 'five')
          }}
          onClose={() => closeAddress('normal2')}
        />

        <Address
          visible={showPopup.exist}
          type="exist"
          existList={existList2}
          onExistSelect={selectedTwo}
          title={translated.delivery}
          onClose={() => closeAddress('exist')}
        />

        <Address
          visible={showPopup.customImg}
          type="exist"
          existList={existList3}
          onExistSelect={selectedThree}
          defaultIcon={icon.defaultIcon}
          selectIcon={icon.selectIcon}
          onClose={() => closeAddress('customImg')}
        />

        <Address
          visible={showPopup.other}
          type="exist"
          existList={existList4}
          title={customeTitle}
          options={optionsDemo5}
          format={convertConfigDemo5}
          custom={translated.other}
          onExistSelect={selectedFour}
          onSwitch={onSwitch}
          onChange={(value, params) => {
            change1(value, params, 'four')
          }}
          onClose={() => closeAddress('other')}
        />

        <Address
          ref={addressRef}
          defaultVisible={false}
          options={optionsDemo1}
          title={translated.title}
          onChange={(value, params) => {
            change1(value, params, 'one')
          }}
          onClose={() => addressRef.current?.close()}
        />
      </div>
    </>
  )
}

export default AddressDemo
