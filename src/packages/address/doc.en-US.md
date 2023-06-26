# Address

## Intro

Load on demand Load the  Icon、Popup、Elevator dependent component

## Install
```tsx
import { Address } from '@nutui/nutui-react';
```

### Choose Custom Address

:::demo
```tsx
import  React,{useState} from "react";
import { Address, Cell ,Popup} from '@nutui/nutui-react';

const App = () => {
  const [text, setText] = useState('Choose Address')
  const [normal,setNormal] = useState(false)
  const [province, setProvince] = useState([
      { id: 1, name: '北京', title: 'B' },
      { id: 2, name: '广西', title: 'G' },
      { id: 3, name: '江西', title: 'J' },
      { id: 4, name: '四川', title: 'S' },
      { id: 5, name: '浙江', title: 'Z' },
  ])

  const [city, setCity] = useState([])

  const [country, setCountry] = useState([])
  const [town, setTown] = useState([])

  const [address, setAddress] = useState({
    province,
    city,
    country,
    town,
  })

  const onChange = (cal) => {
    const name = address[cal.next]
    setTimeout(()=>{
      switch (cal.next){
        case 'city':
          setCity([
            { id: 7, name: '朝阳区', title: 'C' },
            { id: 8, name: '崇文区', title: 'C' },
            { id: 9, name: '昌平区', title: 'C' },
            { id: 6, name: '石景山区', title: 'S' },
            { id: 3, name: '八里庄街道', title: 'B' },
            { id: 10, name: '北苑', title: 'B' },
          ])
          break;
        case 'country':
          setCountry([
            { id: 3, name: '八里庄街道', title: 'B' },
            { id: 9, name: '北苑', title: 'B' },
            { id: 4, name: '常营乡', title: 'C' },
          ])
          break;
        default:
          setNormal(false)
      }
    },200)
  }
  const close = (val) => {
      console.log(val)
      setNormal(false)

      if ((val.data as AddressResult).addressStr) {
        setText((val.data as AddressResult).addressStr,)
      }
  }
  return (
    <>
      <Cell title="Choose Address" description={text}  onClick={()=>setNormal(true)} />
      <Address
          modelValue={normal}
          province={province}
          city={city}
          country={country}
          town={town}
          customAddressTitle="Choose Address"
          onChange={onChange}
          onClose={close}
       />
    </>
  );
};
export default App;
```
:::

### Choose City

If you want to select a province, you need to set the region ID in the order of province City country town in the model-value, and ensure that the data of the corresponding province can be queried

:::demo
```tsx
import  React,{useState} from "react";
import { Address, Cell ,Popup} from '@nutui/nutui-react';

const App = () => {
  const [text, setText] = useState('Choose City')
  const [normal,setNormal] = useState(false)
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
    { id: 10, name: '北苑', title: 'B' },
  ])

  const [country, setCountry] = useState([
    { id: 3, name: '八里庄街道', title: 'B' },
    { id: 9, name: '北苑', title: 'B' },
    { id: 4, name: '常营乡', title: 'C' },
  ])
  const [town, setTown] = useState([])

  const [address, setAddress] = useState({
    province,
    city,
    country,
    town,
  })

  const onChange = (cal) => {
    const name = address[cal.next]

    if(cal.next === 'town') setNormal(false)
  }
  const close = (val) => {
      console.log(val)
      setNormal(false)

      if ((val.data as AddressResult).addressStr) {
        setText((val.data as AddressResult).addressStr,)
      }
  }
  return (
    <>
      <Cell title="Choose Address" description={text}  onClick={()=>setNormal(true)} />
      <Address
          modelValue={normal}
          modelSelect={[1, 7, 3]}
          province={province}
          city={city}
          country={country}
          town={town}
          customAddressTitle="Choose Address"
          onChange={onChange}
          onClose={close}
       />
    </>
  );
};
export default App;
```
:::
### Choose Custom Address2

:::demo
```tsx
import  React,{useState} from "react";
import { Address, Cell ,Popup} from '@nutui/nutui-react';

const App = () => {
  const [text, setText] = useState('Choose Address')
  const [normal2,setNormal2] = useState(false)
  const [province, setProvince] = useState([
      { id: 1, name: '北京', title: 'B' },
      { id: 2, name: '广西', title: 'G' },
      { id: 3, name: '江西', title: 'J' },
      { id: 4, name: '四川', title: 'S' },
      { id: 5, name: '浙江', title: 'Z' },
  ])

  const [city, setCity] = useState([])

  const [country, setCountry] = useState([])
  const [town, setTown] = useState([])
  const [address, setAddress] = useState({
    province,
    city,
    country,
    town,
  })

  const onChange = (cal) => {
    setTimeout(()=>{
      switch (cal.next){
        case 'city':
          setCity([
            { id: 7, name: '朝阳区', title: 'C' },
            { id: 8, name: '崇文区', title: 'C' },
            { id: 9, name: '昌平区', title: 'C' },
            { id: 6, name: '石景山区', title: 'S' },
            { id: 3, name: '八里庄街道', title: 'B' },
            { id: 9, name: '北苑', title: 'B' },
          ])
          break;
        case 'country':
          setCountry([
            { id: 3, name: '八里庄街道', title: 'B' },
            { id: 9, name: '北苑', title: 'B' },
            { id: 4, name: '常营乡', title: 'C' },
          ])
          break;
        default:
          setNormal2(false)
      }
    },200)
  }
  const close = (val) => {
      setNormal2(false)
      if ((val.data as AddressResult).addressStr) {
        setText((val.data as AddressResult).addressStr,)
      }
  }
  return (
    <>
      <Cell title="Choose Address" description={text}  onClick={()=>setNormal2(true)} />
      <Address
          modelValue={normal2}
          type="custom2"
          province={province}
          city={city}
          country={country}
          town={town}
          height="270px"
          onChange={onChange}
          onClose={close}
          customAddressTitle="Choose Address"
       />
    </>
  );
};
export default App;

```
:::
### Choose Exist Address


:::demo
```tsx
import  React,{useState} from "react";
import { Address, Cell ,Popup} from '@nutui/nutui-react';

const App = () => {
  const [text, setText] = useState('Choose Address')
  const [exist,setExist] = useState(false)
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

  const selected = (prevExistAdd: AddressList, nowExistAdd: RegionData, arr: AddressList[]) => {
      console.log(prevExistAdd,nowExistAdd)
  }

  const onChange = (cal) => {
      const name = address[cal.next]
      if (name.length < 1) {
        setExist(false)
      }
  }
  const close = (val) => {
      const { provinceName, cityName, countyName, townName, addressDetail } = val.data as AddressResult
      if (provinceName) {
        setText(provinceName + cityName + countyName + townName + addressDetail)
      }
      setExist(false)
  }
  return (
    <>
      <Cell title="Choose Address" description={text}  onClick={()=>setExist(true)} />
      <Address
          modelValue={exist}
          type="exist"
          existAddress={existAddress}
          onChange={onChange}
          onClose={close}
          isShowCustomAddress={false}
          onSelected={selected}
          existAddressTitle="Delivery To"
       />
    </>
  );
};
export default App;

```
:::
### Custom Icon

:::demo
```tsx
import  React,{useState} from "react";
import { Address, Cell ,Popup} from '@nutui/nutui-react';
import { Heart1, HeartFill, Left, Close } from '@nutui/icons-react';

const App = () => {
  const [text, setText] = useState('Choose Address')
  const [customImg,setCustomImg] = useState(false)
  const [icon, setIcon] = useState({
    selectedIcon: <HeartFill color="red" />,
    defaultIcon: <Heart1 />,
    closeBtnIcon: <Close />,
    backBtnIcon: <Left />,
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

  const selected = (prevExistAdd: AddressList, nowExistAdd: RegionData, arr: AddressList[]) => {
      console.log(prevExistAdd,nowExistAdd)
      
  }

  const onChange = (cal) => {
      const name = address[cal.next]
      if (name.length < 1) {
        setCustomImg(false)
      }
  }
  const close = (val) => {
      console.log(val)
      setCustomImg(false)
      const { provinceName, cityName, countyName, townName, addressDetail } =  val.data as AddressResult
      if (provinceName) {
          setText(provinceName + cityName + countyName + townName + addressDetail)
        }
  }
  return (
    <>
      <Cell title="Choose Address" description={text}  onClick={()=>setCustomImg(true)} />
      <Address
          modelValue={customImg}
          type="exist"
          existAddress={existAddress}
          onChange={onChange}
          onClose={close}
          isShowCustomAddress={false}
          onSelected={selected}
          defaultIcon={icon.defaultIcon}
          selectedIcon={icon.selectedIcon}
          closeBtnIcon={icon.closeBtnIcon}
       />
    </>
  );
};
export default App;

```
:::

### Custom Or Exist

:::demo
```tsx
import  React,{useState} from "react";
import { Address, Cell ,Popup} from '@nutui/nutui-react';
import { Heart1, HeartFill, Left, Close } from '@nutui/icons-react';

const App = () => {
  const [text, setText] = useState('Choose Address')
  const [other,setOther] = useState(false)
  const [icon, setIcon] = useState({
    selectedIcon: <HeartFill color="red" />,
    defaultIcon: <Heart1 />,
    closeBtnIcon: <Close />,
    backBtnIcon: <Left />,
  })
  const [province, setProvince] = useState([
      { id: 1, name: '北京', title: 'B' },
      { id: 2, name: '广西', title: 'G' },
      { id: 3, name: '江西', title: 'J' },
      { id: 4, name: '四川', title: 'S' },
      { id: 5, name: '浙江', title: 'Z' },
  ])

  const [city, setCity] = useState([])

  const [country, setCountry] = useState([])
  const [town, setTown] = useState([])
  const [address, setAddress] = useState({
    province,
    city,
    country,
    town,
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

  const selected = (prevExistAdd: AddressList, nowExistAdd: RegionData, arr: AddressList[]) => {
      console.log(prevExistAdd,nowExistAdd)
  }

  const onChange = (cal) => {
     
    setTimeout(()=>{
      switch (cal.next){
        case 'city':
          setCity([
            { id: 7, name: '朝阳区', title: 'C' },
            { id: 8, name: '崇文区', title: 'C' },
            { id: 9, name: '昌平区', title: 'C' },
            { id: 6, name: '石景山区', title: 'S' },
            { id: 3, name: '八里庄街道', title: 'B' },
            { id: 9, name: '北苑', title: 'B' },
          ])
          break;
        case 'country':
          setCountry([
            { id: 3, name: '八里庄街道', title: 'B' },
            { id: 9, name: '北苑', title: 'B' },
            { id: 4, name: '常营乡', title: 'C' },
          ])
          break;
        default:
          setOther(false)
      }
    },200)
  }
  const close = (val) => {
      setOther(false)
      if (val.type === 'exist') {
        const { provinceName, cityName, countyName, townName, addressDetail } = val.data as AddressResult
        if (provinceName) {
          setText(provinceName + cityName + countyName + townName + addressDetail)
        }
      } else if ((val.data as AddressResult).addressStr) {
          setText((val.data as AddressResult).addressStr)
        }
  }
  const onSwitch = (val) => {
      if (val.type === 'custom') {
        console.log('点击了“选择其他地址”按钮')
      } else {
        console.log('点击了自定义地址左上角的返回按钮')
      }
  }

  const onCancel = (val) => {
      console.log('关闭弹层', val)
  }
  return (
    <>
      <Cell title="Choose Address" description={text}  onClick={()=>setOther(true)} />
      <Address
          modelValue={other}
          type="exist"
          existAddress={existAddress}
          province={province}
          city={city}
          country={country}
          town={town}
          backBtnIcon={icon.backBtnIcon}
          onChange={onChange}
          onClose={close}
          onSelected={selected}
          customAndExistTitle="Choose Other Address"
          onSwitch={onSwitch}
          onCancel={onCancel}
       />
    </>
  );
};
export default App;

```
:::


# API

| Property | Description               | Type       | Default  |
|----- | ----- |------------| -----  |
| modelValue | Whether to open address | string     | - |
| modelSelect`v1.2.3` | Default address value | string[] \ | number[] | `[]` |
| type | Choose type: exist/custom/custom2  | string     | `custom` |
| province | Province data | Array      | `[]` |
| city | City data | Array      | `[]` |
| country | Country data | Array      | `[]` |
| town | Town data | Array      | `[]` |
| height | Popup height | string \   | number | `200px` |
| existAddress | Exist address list data | Array      | `[]` |
| defaultIcon | Exist address default icon | ReactNode       | - |
| selectedIcon | Exist address selected icon | ReactNode     | - |
| closeBtnIcon | Custom close button icon | ReactNode     | - |
| backBtnIcon | Custom back button icon | ReactNode     | - |
| isShowCustomAddress | Whether to change custom address | boolean    | `true` |
| customAddressTitle  | Custom address title | string     | `Select Region` |
| existAddressTitle|  Exist address title | string     | `Delivery To` |
| customAndExistTitle| Custom address and existing address switch button copywriting | string     | `Choose Another Address` |


## Event
| Property | Description               | Arguments   |
|----- | ----- | -----  |
| onChange | Emitted when to selected custom address |  reference onChange |
| onSelected |  Emitted when to selected exist address  | reference selected
| onClose | Emitted when to close  | reference close |
| onCancel `v2.0.0` |Emitted when to close mask | `closeWay:'mask' \| 'cross'` |
| onSwitch `v2.0.0` | Click to select another address or custom address to select the upper left corner of the return button triggered | `type:'exist' \| 'custom' \| 'custom2'` |


## change 回调参数
| Property | Description               | Options   |
|----- | ----- | ----- |
| custom | The administrative region currently clicked  |  `province` \| `city` \| `country` \| `town` |
| next | The next level of the administrative region currently clicked | `province` \| `city` \| `country` \| `town` |
| value | The value of the currently clicked administrative region | `{}` |

## selected 
| Property | Description               | Options   |
|----- | ----- | ----- |
| First Option（prevExistAdd） |  Select the previously selected address |  `{}` |
| Second Option（nowExistAdd） |  Currently selected address |  `{}` |
| Third Option（arr） |  After selecting the existing address list |  `{}` |

## close 
| Property | Description               | Options   |
|----- | ----- | ----- 
| type | Selected Type  |  `exist` \| `custom` \| `custom2` |
| data | Selected Data | `{}` |
    

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| --nutui-address-icon-color | `$primary-color` |
| --nutui-address-header-title-font-size | `18px` |
| --nutui-address-header-title-color | `#262626` |
| --nutui-address-region-tab-font-size | `13px` |
| --nutui-address-region-tab-color | `#1d1e1e` |
| --nutui-address-region-tab-active-item-font-weight | `bold` |
| --nutui-address-region-tab-line-border-radius | `0` |
| --nutui-address-region-tab-line-opacity | `1` |
| --nutui-address-region-item-color | `#333` |
| --nutui-address-region-item-font-size | `$font-size-1` |
| --nutui-address-item-margin-right | `9px` |
| --nutui-addresslist-bg | `#fff` |
| --nutui-addresslist-border | `#f0f0f0` |
| --nutui-addresslist-font-color | `#333333` |
| --nutui-addresslist-font-size | `16px` |
| --nutui-addresslist-mask-bg | `rgba(0, 0, 0, 0.4)` |
| --nutui-addresslist-addr-font-color | `#666666` |
| --nutui-addresslist-addr-font-size | `12px` |
| --nutui-addresslist-set-bg | `#f5a623` |
| --nutui-addresslist-del-bg | `#e1251b` |
| --nutui-addresslist-contnts-contact-default | `$primary-color` |
| --nutui-addresslist-contnts-contact-color | `$white` |
