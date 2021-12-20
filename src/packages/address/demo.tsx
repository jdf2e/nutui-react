import React, { useState } from 'react'
import { Address } from './address'
import Cell from '@/packages/cell'

interface CalBack {
  next: string
  value: string
  custom: string
}
interface RegionData {
  name: string
  [key: string]: any
}
interface CalResult {
  type: string
  data: AddressResult
}
interface AddressList {
  id?: string | number
  provinceName: string
  cityName: string
  countyName: string
  townName: string
  addressDetail: string
  selectedAddress: boolean
}
interface AddressResult extends AddressList {
  addressIdStr: string
  addressStr: string
  province: RegionData[]
  city: RegionData[]
  country: RegionData[]
  town: RegionData[]
}

const AddressDemo = () => {
  const [province, setProvince] = useState([
    { id: 1, name: '北京', title: 'B' },
    { id: 2, name: '广西', title: 'G' },
    { id: 3, name: '江西', title: 'J' },
    { id: 4, name: '四川', title: 'S' },
    { id: 5, name: '浙江', title: 'Z' },
  ])

  const [city, setCity] = useState([
    { id: 7, name: '朝阳区', title: 'C' },
    { id: 8, name: '崇文区', title: 'C' },
    { id: 9, name: '昌平区', title: 'C' },
    { id: 6, name: '石景山区', title: 'S' },
    { id: 3, name: '八里庄街道', title: 'B' },
    { id: 9, name: '北苑', title: 'B' },
  ])

  const [country, setCountry] = useState([
    { id: 3, name: '八里庄街道', title: 'B' },
    { id: 9, name: '北苑', title: 'B' },
    { id: 4, name: '常营乡', title: 'C' },
  ])

  const [town, setTown] = useState([])

  const [text, setText] = useState({
    one: '请选择地址',
    two: '请选择地址',
    three: '请选择地址',
    four: '请选择地址',
    five: '请选择地址',
  })

  const [address, setAddress] = useState({
    province: province,
    city: city,
    country: country,
    town: town,
  })

  const [showPopup, setShowPopup] = useState({
    normal: false,
    normal2: false,
    exist: false,
    customImg: false,
    other: false,
  })

  const [icon, setIcon] = useState({
    selectedIcon: 'heart-fill',
    defaultIcon: 'heart1',
    closeBtnIcon: 'close',
    backBtnIcon: 'left',
  })

  const [existAddress, setExistAddress] = useState([
    {
      id: 1,
      addressDetail: '',
      cityName: '次渠镇',
      countyName: '通州区',
      provinceName: '北京市',
      selectedAddress: true,
      townName: '',
      name: '探探鱼',
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
      name: '探探鱼',
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
      name: '探探鱼',
      phone: '182****1718',
    },
  ])

  const showAddress = (tag: string) => {
    setShowPopup({
      ...showPopup,
      [tag]: !(showPopup as any)[tag],
    })
  }

  const onChange = (cal: CalBack, tag: string) => {
    console.log('change')
    const name = (address as any)[cal.next]
    if (name.length < 1) {
      setShowPopup({
        ...showPopup,
        [tag]: false,
      })
    }
  }

  const selected = (prevExistAdd: AddressList, nowExistAdd: RegionData, arr: AddressList[]) => {
    console.log('选择')
  }

  const switchModule = (val: CalResult) => {
    if (val.type == 'custom') {
      console.log('点击了“选择其他地址”按钮')
    } else {
      console.log('点击了自定义地址左上角的返回按钮')
    }
  }

  const closeMask = (val: CalResult) => {
    console.log('关闭弹层', val)
  }

  const close1 = (val: CalResult) => {
    if (val.data.addressStr) {
      setText({
        ...text,
        one: val.data.addressStr,
      })
    }

    setShowPopup({
      ...showPopup,
      normal: false,
    })
  }

  const close2 = (val: CalResult) => {
    if (val.type == 'exist') {
      const { provinceName, cityName, countyName, townName, addressDetail } = val.data
      if (provinceName) {
        setText({
          ...text,
          two: provinceName + cityName + countyName + townName + addressDetail,
        })
      }
    } else {
      if (val.data.addressStr) {
        setText({
          ...text,
          two: val.data.addressStr,
        })
      }
    }

    setShowPopup({
      ...showPopup,
      exist: false,
    })
  }

  const close3 = (val: CalResult) => {
    if (val.type == 'exist') {
      const { provinceName, cityName, countyName, townName, addressDetail } = val.data
      if (provinceName) {
        setText({
          ...text,
          three: provinceName + cityName + countyName + townName + addressDetail,
        })
      }
    } else {
      if (val.data.addressStr) {
        setText({
          ...text,
          three: val.data.addressStr,
        })
      }
    }

    setShowPopup({
      ...showPopup,
      customImg: false,
    })
  }

  const close4 = (val: CalResult) => {
    if (val.type == 'exist') {
      const { provinceName, cityName, countyName, townName, addressDetail } = val.data
      if (provinceName) {
        setText({
          ...text,
          four: provinceName + cityName + countyName + townName + addressDetail,
        })
      }
    } else {
      if (val.data.addressStr) {
        setText({
          ...text,
          four: val.data.addressStr,
        })
      }
    }

    setShowPopup({
      ...showPopup,
      other: false,
    })
  }

  const close5 = (val: CalResult) => {
    if (val.data.addressStr) {
      setText({
        ...text,
        five: val.data.addressStr,
      })
    }

    setShowPopup({
      ...showPopup,
      normal2: false,
    })
  }

  return (
    <>
      <div className="demo">
        <h2>选择自定义地址</h2>
        <Cell title={`选择地址`} desc={text.one} onClick={() => showAddress('normal')}></Cell>
        <h2>选择自定义地址2</h2>
        <Cell title="选择地址" desc={text.five} onClick={() => showAddress('normal2')}></Cell>
        <h2>选择已有地址</h2>
        <Cell title="选择地址" desc={text.two} onClick={() => showAddress('exist')}></Cell>
        <h2>自定义图标</h2>
        <Cell title="选择地址" desc={text.three} onClick={() => showAddress('customImg')}></Cell>
        <h2>自定义地址与已有地址切换</h2>
        <Cell title="选择地址" desc={text.four} onClick={() => showAddress('other')}></Cell>

        <Address
          modelValue={showPopup.normal}
          province={province}
          city={city}
          country={country}
          town={town}
          customAddressTitle="请选择所在地区"
          onChange={(cal) => onChange(cal, 'normal')}
          close={close1}
        ></Address>

        <Address
          modelValue={showPopup.normal2}
          type="custom2"
          province={province}
          city={city}
          country={country}
          town={town}
          height="270px"
          onChange={(cal) => onChange(cal, 'normal2')}
          close={close5}
          customAddressTitle="请选择所在地区"
        ></Address>

        <Address
          modelValue={showPopup.exist}
          type="exist"
          existAddress={existAddress}
          onChange={(cal) => onChange(cal, 'exist')}
          close={close2}
          isShowCustomAddress={false}
          selected={selected}
          existAddressTitle="配送至"
        ></Address>

        <Address
          modelValue={showPopup.customImg}
          type="exist"
          existAddress={existAddress}
          onChange={(cal) => onChange(cal, 'customImg')}
          close={close3}
          isShowCustomAddress={false}
          selected={selected}
          defaultIcon={icon.defaultIcon}
          selectedIcon={icon.selectedIcon}
          closeBtnIcon={icon.closeBtnIcon}
        ></Address>

        <Address
          modelValue={showPopup.other}
          type="exist"
          existAddress={existAddress}
          province={province}
          city={city}
          country={country}
          town={town}
          backBtnIcon={icon.backBtnIcon}
          onChange={(cal) => onChange(cal, 'other')}
          close={close4}
          selected={selected}
          customAndExistTitle="选择其他地址"
          switchModule={switchModule}
          closeMask={closeMask}
        ></Address>
      </div>
    </>
  )
}

export default AddressDemo
