import React, { useState } from 'react'
import { Heart1, HeartFill, Left, Close } from '@nutui/icons-react'
import { useTranslate } from '../../sites/assets/locale'
import { Address } from './address'
import Cell from '@/packages/cell'

interface CalBack {
  next: string
  value: string | RegionData
  custom: string
  selectedRegion: any
}
interface RegionData {
  name?: string
  [key: string]: any
}
interface CalResult {
  type: string
  data: any
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
  country: RegionData[]
  town: RegionData[]
}

interface T {
  [props: string]: string
}

const AddressDemo = () => {
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
    },
  })
  const [province, setProvince] = useState([
    { id: 1, name: '北京', title: 'B' },
    { id: 2, name: '广西', title: 'G' },
    { id: 3, name: '江西', title: 'J' },
    { id: 4, name: '四川', title: 'S' },
    { id: 5, name: '浙江', title: 'Z' },
  ])

  const addressData: any = {
    province: [
      { id: 1, name: '北京', title: 'B' },
      { id: 2, name: '广西', title: 'G' },
      { id: 3, name: '江西', title: 'J' },
      { id: 4, name: '四川', title: 'S' },
      { id: 5, name: '浙江', title: 'Z' },
    ],
    city: [
      { id: 7, name: '朝阳区', title: 'C' },
      { id: 8, name: '崇文区', title: 'C' },
      { id: 9, name: '昌平区', title: 'C' },
      { id: 6, name: '石景山区', title: 'S' },
      { id: 3, name: '八里庄街道', title: 'B' },
      { id: 10, name: '北苑', title: 'B' },
    ],
    country: [
      { id: 3, name: '八里庄街道', title: 'B' },
      { id: 9, name: '北苑', title: 'B' },
      { id: 4, name: '常营乡', title: 'C' },
    ],
    town: [],
  }

  const [city, setCity] = useState<any>([])

  const [country, setCountry] = useState<any>([])

  const [town, setTown] = useState<any>([])

  const [text, setText] = useState<any>({
    one: translated.title,
    two: translated.title,
    three: translated.title,
    four: translated.title,
    five: translated.title,
    six: translated.title,
  })

  const [address, setAddress] = useState({
    province,
    city,
    country,
    town,
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
    selectIcon: <HeartFill color="red" />,
    defaultIcon: <Heart1 />,
    closeIcon: <Close />,
    backIcon: <Left />,
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

  const [existList3, setExistList3] = useState([
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

  const [existList4, setExistList4] = useState([
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
      [tag]: !(showPopup as any)[tag],
    })
  }

  const onChange = (cal: any, tag: string) => {
    console.log('onchange', cal, tag)
    if (tag === 'normal2' || tag === 'select') {
      if (cal.next === 'town') {
        setShowPopup({
          ...showPopup,
          [tag]: false,
        })
      }
    } else {
      setTimeout(() => {
        switch (cal.next) {
          case 'city':
            setCity([
              { id: 7, name: '朝阳区', title: 'C' },
              { id: 8, name: '崇文区', title: 'C' },
              { id: 9, name: '昌平区', title: 'C' },
              { id: 6, name: '石景山区', title: 'S' },
              { id: 3, name: '八里庄街道', title: 'B' },
              { id: 10, name: '北苑', title: 'B' },
            ])
            break
          case 'country':
            setCountry([
              { id: 3, name: '八里庄街道', title: 'B' },
              { id: 9, name: '北苑', title: 'B' },
              { id: 4, name: '常营乡', title: 'C' },
            ])
            break
          default:
            setShowPopup({
              ...showPopup,
              [tag]: false,
            })
            console.log('default address', showPopup, !(showPopup as any)[tag])
        }
      }, 200)
    }
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
      console.log('点击了自定义地址左上角的返回按钮')
    }
  }

  const close1 = (val: CalResult) => {
    if ((val.data as AddressResult).addressStr) {
      setText({
        ...text,
        one: (val.data as AddressResult).addressStr,
      })
    }

    setShowPopup({
      ...showPopup,
      normal: false,
    })
  }

  const close5 = (val: CalResult) => {
    if ((val.data as AddressResult).addressStr) {
      setText({
        ...text,
        five: (val.data as AddressResult).addressStr,
      })
    }

    setShowPopup({
      ...showPopup,
      normal2: false,
    })
  }

  const close6 = (val: CalResult) => {
    if ((val.data as AddressResult).addressStr) {
      setText({
        ...text,
        six: (val.data as AddressResult).addressStr,
      })
    }

    setShowPopup({
      ...showPopup,
      select: false,
    })
  }

  return (
    <>
      <div className="demo">
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
        <h2>{translated.customAddress2}</h2>
        <Cell
          title={translated.title}
          description={text.five}
          onClick={() => showAddress('normal2')}
        />
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

        <Address
          visible={showPopup.normal}
          province={province}
          city={city}
          country={country}
          town={town}
          title={translated.title}
          onChange={(cal) => onChange(cal, 'normal')}
          onClose={close1}
        />

        <Address
          visible={showPopup.select}
          defaultValue={[1, 7, 3]}
          province={addressData.province}
          city={addressData.city}
          country={addressData.country}
          town={addressData.town}
          onChange={(cal) => onChange(cal, 'select')}
          onClose={close6}
        />

        <Address
          visible={showPopup.normal2}
          type="custom2"
          defaultValue={[1, 7, 3]}
          province={addressData.province}
          city={addressData.city}
          country={addressData.country}
          town={addressData.town}
          height="270px"
          onChange={(cal) => onChange(cal, 'normal2')}
          onClose={close5}
        />

        <Address
          visible={showPopup.exist}
          type="exist"
          existList={existList2}
          onSelect={selectedTwo}
          title={translated.delivery}
        />

        <Address
          visible={showPopup.customImg}
          type="exist"
          existList={existList3}
          onSelect={selectedThree}
          defaultIcon={icon.defaultIcon}
          selectIcon={icon.selectIcon}
          closeIcon={icon.closeIcon}
        />

        <Address
          visible={showPopup.other}
          type="exist"
          existList={existList4}
          province={province}
          city={city}
          country={country}
          town={town}
          title={customeTitle}
          backIcon={icon.backIcon}
          custom={translated.other}
          onSelect={selectedFour}
          onSwitch={onSwitch}
          onChange={(cal) => onChange(cal, 'other')}
        />
      </div>
    </>
  )
}

export default AddressDemo
