# Address

## Intro

Load on demand Load the  Icon、Popup、Elevator dependent component

## Install
```tsx
import { Address } from '@nutui/nutui-react';
```

## Demo
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
          visible={normal}
          province={province}
          city={city}
          country={country}
          town={town}
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
          visible={normal}
          defaultValue={[1, 7, 3]}
          province={province}
          city={city}
          country={country}
          town={town}
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
          visible={normal2}
          type="custom2"
          province={province}
          city={city}
          country={country}
          town={town}
          height="270px"
          onChange={onChange}
          onClose={close}
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
  const [existList, setExistAddress] = useState([
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
          visible={exist}
          type="exist"
          existList={existList}
          onChange={onChange}
          onClose={close}
          custom={false}
          onSelect={selected}
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
    selectIcon: <HeartFill color="red" />,
    defaultIcon: <Heart1 />,
    closeIcon: <Close />,
    backIcon: <Left />,
  })

  const [existList, setExistAddress] = useState([
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
          visible={customImg}
          type="exist"
          existList={existList}
          onChange={onChange}
          onClose={close}
          custom={false}
          onSelect={selected}
          defaultIcon={icon.defaultIcon}
          selectIcon={icon.selectIcon}
          closeIcon={icon.closeIcon}
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
    selectIcon: <HeartFill color="red" />,
    defaultIcon: <Heart1 />,
    closeIcon: <Close />,
    backIcon: <Left />,
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
  const [existList, setExistAddress] = useState([
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
          visible={other}
          type="exist"
          existList={existList}
          province={province}
          city={city}
          country={country}
          town={town}
          backIcon={icon.backIcon}
          onChange={onChange}
          onClose={close}
          onSelect={selected}
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


## Address

### Props

| Property | Description               | Type       | Default  |
|----- | ----- |------------| -----  |
| visible | Whether to open address | `string`     | - |
| defaultValue`v1.2.3` | Default address value | `string[] \ | number[]` | `[]` |
| type | Choose type: exist/custom/custom2  | `string`     | `custom` |
| province | Province data | `Array`      | `[]` |
| city | City data | `Array`      | `[]` |
| country | Country data | `Array`      | `[]` |
| town | Town data | `Array`      | `[]` |
| height | Popup height | `string \| number` | `200px` |
| existList | Exist address list data | `Array`      | `[]` |
| defaultIcon | Exist address default icon | `ReactNode`       | - |
| selectIcon | Exist address selected icon | `ReactNode`     | - |
| closeIcon | Custom close button icon | `ReactNode`     | - |
| backIcon | Custom back button icon | `ReactNode`     | - |
| custom | Whether to change custom address | `boolean`    | `true` |
| onChange | Emitted when to selected custom address | `(cal: ChangeCallBack) => void` | `-` |
| onSelect |  Emitted when to selected exist address  |` (prevExistAdd: AddressList, item: AddressList, copyExistAdd: AddressList[] ) => void` |`-` |
| onClose | Emitted when to close  | `(cal: CloseCallBack) => void` |`-` |
| onCancel  |Emitted when to close mask | `(cal: ChangeCallBack) => void` |`-` |
| onSwitch  | Click to select another address or custom address to select the upper left corner of the return button triggered | `(cal: { type: string }) => void` | `-` |


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

| Name | Description | Default Value |
| --- | --- |--- |
| --nutui-address-tab-line-background | tab line background| `linear-gradient(90deg,$primary-color 0%,$primary-color-end 100%) !default` |
