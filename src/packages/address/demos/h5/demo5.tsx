import React, { useState } from 'react'
import { Address, Cell } from '@nutui/nutui-react'
import { Heart } from '@nutui/icons-react'

const Demo5 = () => {
  const [text, setText] = useState('请选择地址')
  const [icon, setIcon] = useState({
    selectIcon: <Heart color="red" />,
    defaultIcon: <Heart />,
    closeIcon: <Heart />,
  })
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
  const [visible, setVisible] = useState(false)
  const [existList] = useState([
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
  const [customTitle] = useState('选择已有地址')
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

  const selectedFour = (data: AddressList) => {
    const { provinceName, cityName, countyName, townName, addressDetail } =
      data as AddressResult
    if (provinceName) {
      setText(provinceName + cityName + countyName + townName + addressDetail)
    }
  }

  const onSwitch = (val: { type: string }) => {
    if (val.type === 'custom') {
      console.log('点击了“选择其他地址”按钮')
    } else {
      console.log('点击了自定义地址左上角的返回按钮')
    }
  }

  return (
    <>
      <Cell
        title="选择地址"
        description={text}
        onClick={() => setVisible(true)}
      />
      <Address
        visible={visible}
        type="exist"
        existList={existList}
        title={customTitle}
        options={optionsDemo5}
        format={convertConfigDemo5}
        closeIcon={icon.closeIcon}
        custom="选择其他地址"
        onExistSelect={selectedFour}
        onSwitch={onSwitch}
        onChange={(value, params) => {
          setText(value.join(''))
        }}
        onClose={() => setVisible(false)}
      />
    </>
  )
}
export default Demo5
