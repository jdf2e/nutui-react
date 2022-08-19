#  Address 地址

### 介紹

地址選擇


### 安裝
``` javascript
import { Address } from '@nutui/nutui-react';
```

## 代碼示例
### 選擇自定義地址

:::demo
```tsx
import  React,{useState} from "react";
import { Address, Cell ,Popup} from '@nutui/nutui-react';

const App = () => {
  const [text, setText] = useState('請選擇地址')
  const [normal,setNormal] = useState(false)
  const [province, setProvince] = useState([
      { id: 1, name: '北京', title: 'B' },
      { id: 2, name: '廣西', title: 'G' },
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
            { id: 7, name: '朝陽區', title: 'C' },
            { id: 8, name: '崇文區', title: 'C' },
            { id: 9, name: '昌平區', title: 'C' },
            { id: 6, name: '石景山區', title: 'S' },
            { id: 3, name: '八裏莊街道', title: 'B' },
            { id: 10, name: '北苑', title: 'B' },
          ])
          break;
        case 'country':
          setCountry([
            { id: 3, name: '八裏莊街道', title: 'B' },
            { id: 9, name: '北苑', title: 'B' },
            { id: 4, name: '常營鄉', title: 'C' },
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
      <Cell title="選擇地址" desc={text}  onClick={()=>setNormal(true)} />
      <Address
          modelValue={normal}
          province={province}
          city={city}
          country={country}
          town={town}
          customAddressTitle="請選擇所在地區"
          onChange={onChange}
          onClose={close}
       />
    </>
  );
};
export default App;
```
:::

### 選中省市區

如果想選中某個省市區，需要在 modelSelect 中按照 province、city、country、town 的順序配置想要展示的地區 id 值，併且保證有能查詢到對應的省市區數據即可。

:::demo
```tsx
import  React,{useState} from "react";
import { Address, Cell ,Popup} from '@nutui/nutui-react';

const App = () => {
  const [text, setText] = useState('請選擇地址')
  const [normal,setNormal] = useState(false)
  const [province, setProvince] = useState([
      { id: 1, name: '北京', title: 'B' },
      { id: 2, name: '廣西', title: 'G' },
      { id: 3, name: '江西', title: 'J' },
      { id: 4, name: '四川', title: 'S' },
      { id: 5, name: '浙江', title: 'Z' },
  ])

  const [city, setCity] = useState([
    { id: 7, name: '朝陽區', title: 'C' },
    { id: 8, name: '崇文區', title: 'C' },
    { id: 9, name: '昌平區', title: 'C' },
    { id: 6, name: '石景山區', title: 'S' },
    { id: 3, name: '八裏莊街道', title: 'B' },
    { id: 10, name: '北苑', title: 'B' },
  ])

  const [country, setCountry] = useState([
    { id: 3, name: '八裏莊街道', title: 'B' },
    { id: 9, name: '北苑', title: 'B' },
    { id: 4, name: '常營鄉', title: 'C' },
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
      <Cell title="選擇地址" desc={text}  onClick={()=>setNormal(true)} />
      <Address
          modelValue={normal}
          modelSelect={[1, 7, 3]}
          province={province}
          city={city}
          country={country}
          town={town}
          customAddressTitle="請選擇所在地區"
          onChange={onChange}
          onClose={close}
       />
    </>
  );
};
export default App;
```
:::
### 選擇自定義地址2

:::demo
```tsx

import  React,{useState} from "react";
import { Address, Cell ,Popup} from '@nutui/nutui-react';

const App = () => {
  const [text, setText] = useState('請選擇地址')
  const [normal2,setNormal2] = useState(false)
  const [province, setProvince] = useState([
      { id: 1, name: '北京', title: 'B' },
      { id: 2, name: '廣西', title: 'G' },
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
            { id: 7, name: '朝陽區', title: 'C' },
            { id: 8, name: '崇文區', title: 'C' },
            { id: 9, name: '昌平區', title: 'C' },
            { id: 6, name: '石景山區', title: 'S' },
            { id: 3, name: '八裏莊街道', title: 'B' },
            { id: 9, name: '北苑', title: 'B' },
          ])
          break;
        case 'country':
          setCountry([
            { id: 3, name: '八裏莊街道', title: 'B' },
            { id: 9, name: '北苑', title: 'B' },
            { id: 4, name: '常營鄉', title: 'C' },
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
      <Cell title="選擇地址" desc={text}  onClick={()=>setNormal2(true)} />
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
          customAddressTitle="請選擇所在地區"
       />
    </>
  );
};
export default App;

```
:::
### 選擇已有地址


:::demo
```tsx
import  React,{useState} from "react";
import { Address, Cell ,Popup} from '@nutui/nutui-react';

const App = () => {
  const [text, setText] = useState('請選擇地址')
  const [exist,setExist] = useState(false)
  const [existAddress, setExistAddress] = useState([
      {
        id: 1,
        addressDetail: '',
        cityName: '次渠鎮',
        countyName: '通州區',
        provinceName: '北京市',
        selectedAddress: true,
        townName: '',
        name: '探探魚',
        phone: '182****1718',
      },
      {
        id: 2,
        addressDetail: '',
        cityName: '釣魚島全區',
        countyName: '',
        provinceName: '釣魚島',
        selectedAddress: false,
        townName: '',
        name: '探探魚',
        phone: '182****1718',
      },
      {
        id: 3,
        addressDetail: '京東大廈',
        cityName: '大興區',
        countyName: '科創十一街18號院',
        provinceName: '北京市',
        selectedAddress: false,
        townName: '',
        name: '探探魚',
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
      <Cell title="選擇地址" desc={text}  onClick={()=>setExist(true)} />
      <Address
          modelValue={exist}
          type="exist"
          existAddress={existAddress}
          onChange={onChange}
          onClose={close}
          isShowCustomAddress={false}
          onSelected={selected}
          existAddressTitle="配送至"
       />
    </>
  );
};
export default App;

```
:::
### 自定義圖標

:::demo
```tsx
import  React,{useState} from "react";
import { Address, Cell ,Popup} from '@nutui/nutui-react';

const App = () => {
  const [text, setText] = useState('請選擇地址')
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
        cityName: '次渠鎮',
        countyName: '通州區',
        provinceName: '北京市',
        selectedAddress: true,
        townName: '',
        name: '探探魚',
        phone: '182****1718',
      },
      {
        id: 2,
        addressDetail: '',
        cityName: '釣魚島全區',
        countyName: '',
        provinceName: '釣魚島',
        selectedAddress: false,
        townName: '',
        name: '探探魚',
        phone: '182****1718',
      },
      {
        id: 3,
        addressDetail: '京東大廈',
        cityName: '大興區',
        countyName: '科創十一街18號院',
        provinceName: '北京市',
        selectedAddress: false,
        townName: '',
        name: '探探魚',
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
      <Cell title="選擇地址" desc={text}  onClick={()=>setCustomImg(true)} />
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

### 自定義地址與已有地址切換

:::demo
```tsx
import  React,{useState} from "react";
import { Address, Cell ,Popup} from '@nutui/nutui-react';

const App = () => {
  const [text, setText] = useState('請選擇地址')
  const [other,setOther] = useState(false)
  const [icon, setIcon] = useState({
      selectedIcon: 'heart-fill',
      defaultIcon: 'heart1',
      closeBtnIcon: 'close',
      backBtnIcon: 'left',
  })
  const [province, setProvince] = useState([
      { id: 1, name: '北京', title: 'B' },
      { id: 2, name: '廣西', title: 'G' },
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
        cityName: '次渠鎮',
        countyName: '通州區',
        provinceName: '北京市',
        selectedAddress: true,
        townName: '',
        name: '探探魚',
        phone: '182****1718',
      },
      {
        id: 2,
        addressDetail: '',
        cityName: '釣魚島全區',
        countyName: '',
        provinceName: '釣魚島',
        selectedAddress: false,
        townName: '',
        name: '探探魚',
        phone: '182****1718',
      },
      {
        id: 3,
        addressDetail: '京東大廈',
        cityName: '大興區',
        countyName: '科創十一街18號院',
        provinceName: '北京市',
        selectedAddress: false,
        townName: '',
        name: '探探魚',
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
            { id: 7, name: '朝陽區', title: 'C' },
            { id: 8, name: '崇文區', title: 'C' },
            { id: 9, name: '昌平區', title: 'C' },
            { id: 6, name: '石景山區', title: 'S' },
            { id: 3, name: '八裏莊街道', title: 'B' },
            { id: 9, name: '北苑', title: 'B' },
          ])
          break;
        case 'country':
          setCountry([
            { id: 3, name: '八裏莊街道', title: 'B' },
            { id: 9, name: '北苑', title: 'B' },
            { id: 4, name: '常營鄉', title: 'C' },
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
        console.log('點擊了“選擇其他地址”按鈕')
      } else {
        console.log('點擊了自定義地址左上角的返回按鈕')
      }
  }

  const closeMask = (val) => {
      console.log('關閉彈層', val)
  }
  return (
    <>
      <Cell title="選擇地址" desc={text}  onClick={()=>setOther(true)} />
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
          customAndExistTitle="選擇其他地址"
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

| 字段 | 說明 | 類型 | 默認值 |
|----- | ----- | ----- | -----  |
| modelValue | 是否打開地址選擇 | String | '' |
| modelSelect`v1.2.3` | 設置默認選中地址 | String\|Number[] | [] |
| type | 地址選擇類型 exist/custom/custom2  | String | 'custom' |
| province | 省，每個省的對象中，必須有 name 字段，如果類型選擇 custom2，必須指定 title 字段為首字母 | Array | [] |
| city | 市，每個市的對象中，必須有 name 字段，如果類型選擇 custom2，必須指定 title 字段為首字母 | Array | [] |
| country | 縣，每個縣的對象中，必須有 name 字段，如果類型選擇 custom2，必須指定 title 字段為首字母 | Array | [] |
| town | 鄉/鎮，每個鄉/鎮的對象中，必須有 name 字段，如果類型選擇 custom2，必須指定 title 字段為首字母 | Array | [] |
| height | 彈層中內容容器的高度，僅在type="custom2"時有效 | String、Number | '200px' |
| existAddress | 已存在地址列錶，每個地址對象中，必傳值provinceName、cityName、countyName、townName、addressDetail、selectedAddress（字段解釋見下） | Array | [] |
| defaultIcon | 已有地址列錶默認圖標，type=‘exist’ 時生效 | String | '' |
| selectedIcon | 已有地址列錶選中圖標，type=‘exist’ 時生效 | String | '' |
| closeBtnIcon | 自定義關閉彈框按鈕圖標 | string | - |
| backBtnIcon | 自定義地址與已有地址切換時，自定義返回的按鈕圖標 | String | - |
| isShowCustomAddress | 是否可以切換自定義地址選擇，type=‘exist’ 時生效 | Boolean | true |
| customAddressTitle  | 自定義地址選擇文案，type='custom' 時生效 | String | '請選擇所在地區' |
| existAddressTitle| 已有地址文案 ，type=‘exist’ 時生效| String | '配送至' |
| customAndExistTitle| 自定義地址與已有地址切換按鈕文案 ，type=‘exist’ 時生效| String | '選擇其他地址' |


  * provinceName 省的名字
  * cityName 市的名字
  * countyName 縣的名字
  * townName 鄉/鎮的名字
  * addressDetail 具體地址
  * selectedAddress 字段用於判斷當前地址列錶的選中項。

## Event
| 字段 | 說明 | 回調參數 |
|----- | ----- | -----  |
| onChange | 自定義選擇地址時，選擇地區時觸發 |  參考 onChange |
| onSelected | 選擇已有地址列錶時觸發 | 參考 selected |
| onClose | 地址選擇彈框關閉時觸發 | 參考 close |
| closeMask |點擊遮罩層或點擊右上角叉號關閉時觸發 | {closeWay:'mask'/'cross'} |
| switchModule | 點擊‘選擇其他地址’或自定義地址選擇左上角返回按鈕觸發 | {type:'exist'/'custom'/'custom2'} |


## change 回調參數
| 參數 | 說明 | 可能值  |
|----- | ----- | ----- |
| custom | 當前點擊的行政區域  |  province(省) / city(市) / country(縣) / town(鄉) |
| next | 當前點擊的行政區域的下一級 | province(省) / city(市) / country(縣) / town(鄉) |
| value | 當前點擊的行政區域的值（返回傳入的值） | {} |

## selected 回調參數
| 參數 | 說明 | 可能值  |
|----- | ----- | ----- |
| 第一個參數（prevExistAdd） |  選擇前選中的地址 |  {} |
| 第二個參數（nowExistAdd） |  當前選中的地址 |  {} |
| 第三個參數（arr） |  選擇完之後的已有地址列錶（selectedAddress 值發生改變） |  {} |

## close 回調參數
| 參數 | 說明 | 可能值 |
|----- | ----- | ----- |
| type | 地址選擇類型 exist/custom/custom2  |  exist/custom/custom2 |
| data | 選擇地址的值,custom 時，addressStr 為選擇的地址組合 | {}  |
    