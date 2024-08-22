import React, { useState } from 'react'
import { Address, Cell } from '@nutui/nutui-react'
import { Heart } from '@nutui/icons-react'

const Demo4 = () => {
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

  const selectedThree = (data: AddressList) => {
    const { provinceName, cityName, countyName, townName, addressDetail } =
      data as AddressResult
    if (provinceName) {
      setText(provinceName + cityName + countyName + townName + addressDetail)
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
        onExistSelect={selectedThree}
        defaultIcon={icon.defaultIcon}
        selectIcon={icon.selectIcon}
        onClose={() => setVisible(false)}
      />
    </>
  )
}
export default Demo4
