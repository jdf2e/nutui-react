# Address

### Intro

Load on demand Load the  Icon、Popup、Elevator dependent component

### Install
``` javascript
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
      <Cell title="Choose Address" desc={text}  onClick={()=>setNormal(true)} />
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

    if(cal.next == 'town') setNormal(false)
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
      <Cell title="Choose Address" desc={text}  onClick={()=>setNormal(true)} />
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
      <Cell title="Choose Address" desc={text}  onClick={()=>setNormal2(true)} />
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
      <Cell title="Choose Address" desc={text}  onClick={()=>setExist(true)} />
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

const App = () => {
  const [text, setText] = useState('Choose Address')
  const [customImg,setCustomImg] = useState(false)
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
      <Cell title="Choose Address" desc={text}  onClick={()=>setCustomImg(true)} />
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

const App = () => {
  const [text, setText] = useState('Choose Address')
  const [other,setOther] = useState(false)
  const [icon, setIcon] = useState({
      selectedIcon: 'heart-fill',
      defaultIcon: 'heart1',
      closeBtnIcon: 'close',
      backBtnIcon: 'left',
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
      if (val.type == 'exist') {
        const { provinceName, cityName, countyName, townName, addressDetail } = val.data as AddressResult
        if (provinceName) {
          setText(provinceName + cityName + countyName + townName + addressDetail)
        }
      } else if ((val.data as AddressResult).addressStr) {
          setText((val.data as AddressResult).addressStr)
        }
  }
  const switchModule = (val) => {
      if (val.type == 'custom') {
        console.log('点击了“选择其他地址”按钮')
      } else {
        console.log('点击了自定义地址左上角的返回按钮')
      }
  }

  const closeMask = (val) => {
      console.log('关闭弹层', val)
  }
  return (
    <>
      <Cell title="Choose Address" desc={text}  onClick={()=>setOther(true)} />
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
          switchModule={switchModule}
          closeMask={closeMask}
       />
    </>
  );
};
export default App;

```
:::


# API

| Attribute            | Description               | Type   | Default  |
|----- | ----- | ----- | -----  |
| modelValue | Whether to open address | String | '' |
| modelSelect`v1.2.3` | Default address value | String\|Number[] | [] |
| type | Choose type: exist/custom/custom2  | String | 'custom' |
| province | Province data | Array | [] |
| city | City data | Array | [] |
| country | Country data | Array | [] |
| town | Town data | Array | [] |
| height | Popup height | String、Number | '200px' |
| existAddress | Exist address list data | Array | [] |
| defaultIcon | Exist address default icon | String | '' |
| selectedIcon | Exist address selected icon | String | '' |
| closeBtnIcon | Custom close button icon | string | - |
| backBtnIcon | Custom back button icon | String | - |
| isShowCustomAddress | Whether to change custom address | Boolean | true |
| customAddressTitle  | Custom address title | String | 'Select Region' |
| existAddressTitle|  Exist address title | String | 'Delivery To'
| customAndExistTitle| Custom address and existing address switch button copywriting | String | 'Choose Another Address'


## Event
| Attribute            | Description               | Arguments   |
|----- | ----- | -----  |
| onChange | Emitted when to selected custom address |  reference onChange |
| onSelected |  Emitted when to selected exist address  | reference selected
| onClose | Emitted when to close  | reference close
| closeMask |Emitted when to close mask | {closeWay:'mask'/'cross'} |
| switchModule | Click to select another address or custom address to select the upper left corner of the return button triggered | {type:'exist'/'custom'/'custom2'}


## change 回调参数
| Attribute            | Description               | Options   |
|----- | ----- | ----- 
| custom | The administrative region currently clicked  |  province / city / country / town
| next | The next level of the administrative region currently clicked | province / city / country / town
| value | The value of the currently clicked administrative region | {}

## selected 
| Attribute            | Description               | Options   |
|----- | ----- | ----- 
| First Option（prevExistAdd） |  Select the previously selected address |  {}
| Second Option（nowExistAdd） |  Currently selected address |  {}
| Third Option（arr） |  After selecting the existing address list |  {}

## close 
| Attribute            | Description               | Options   |
|----- | ----- | ----- 
| type | Selected Type  |  exist/custom/custom2
| data | Selected Data | {} 
    