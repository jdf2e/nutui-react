# Address 地址

## 介绍

地址选择

## 安装

```tsx
import { Address } from '@nutui/nutui-react';
```

## 代码演示

### 选择自定义地址

:::demo

```tsx
import React, { useState } from "react";
import { Address, Cell, Popup } from '@nutui/nutui-react';

const App = () => {
  const [text, setText] = useState('请选择地址')
  const [normal, setNormal] = useState(false)
  const [province, setProvince] = useState([
    { id: 1, name: '北京', title: 'B' },
    { id: 2, name: '广西', title: 'G' },
    { id: 3, name: '江西', title: 'J' },
    { id: 4, name: '四川', title: 'S' },
    { id: 5, name: '浙江', title: 'Z' },
  ])

  const [city, setCity] = useState([])

  const [county, setCountry] = useState([])
  const [town, setTown] = useState([])

  const [address, setAddress] = useState({
    province,
    city,
    county,
    town,
  })

  const onChange = (cal) => {
    const name = address[cal.next]
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
          break;
        case 'county':
          setCountry([
            { id: 3, name: '八里庄街道', title: 'B' },
            { id: 9, name: '北苑', title: 'B' },
            { id: 4, name: '常营乡', title: 'C' },
          ])
          break;
        default:
          setNormal(false)
      }
    }, 200)
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
      <Cell title="选择地址" description={text}  onClick={()=>setNormal(true)} />
      <Address
        visible={normal}
        province={province}
        city={city}
        county={county}
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

### 选中省市区

如果想选中某个省市区，需要在 defaultValue 中按照 province、city、county、town 的顺序配置想要展示的地区 id
值，并且保证有能查询到对应的省市区数据即可。

:::demo

```tsx
import React, { useState } from "react";
import { Address, Cell, Popup } from '@nutui/nutui-react';

const App = () => {
  const [text, setText] = useState('请选择地址')
  const [normal, setNormal] = useState(false)
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

  const [county, setCountry] = useState([
    { id: 3, name: '八里庄街道', title: 'B' },
    { id: 9, name: '北苑', title: 'B' },
    { id: 4, name: '常营乡', title: 'C' },
  ])
  const [town, setTown] = useState([])

  const [address, setAddress] = useState({
    province,
    city,
    county,
    town,
  })

  const onChange = (cal) => {
    const name = address[cal.next]

    if (cal.next === 'town') setNormal(false)
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
      <Cell title="选择地址" description={text}  onClick={()=>setNormal(true)} />
      <Address
        visible={normal}
        defaultValue={[1, 7, 3]}
        province={province}
        city={city}
        county={county}
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

### 选择自定义地址2

:::demo

```tsx
import React, { useState } from "react";
import { Address, Cell, Popup } from '@nutui/nutui-react';

const App = () => {
  const [text, setText] = useState('请选择地址')
  const [normal2, setNormal2] = useState(false)
  const [province, setProvince] = useState([
    { id: 1, name: '北京', title: 'B' },
    { id: 2, name: '广西', title: 'G' },
    { id: 3, name: '江西', title: 'J' },
    { id: 4, name: '四川', title: 'S' },
    { id: 5, name: '浙江', title: 'Z' },
  ])

  const [city, setCity] = useState([])

  const [county, setCountry] = useState([])
  const [town, setTown] = useState([])
  const [address, setAddress] = useState({
    province,
    city,
    county,
    town,
  })

  const onChange = (cal) => {
    setTimeout(() => {
      switch (cal.next) {
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
        case 'county':
          setCountry([
            { id: 3, name: '八里庄街道', title: 'B' },
            { id: 9, name: '北苑', title: 'B' },
            { id: 4, name: '常营乡', title: 'C' },
          ])
          break;
        default:
          setNormal2(false)
      }
    }, 200)
  }
  const close = (val) => {
    setNormal2(false)
    if ((val.data as AddressResult).addressStr) {
      setText((val.data as AddressResult).addressStr,)
    }
  }
  return (
    <>
      <Cell title="选择地址" description={text}  onClick={()=>setNormal2(true)} />
      <Address
        visible={normal2}
        type="custom2"
        province={province}
        city={city}
        county={county}
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

### 选择已有地址

:::demo

```tsx
import React, { useState } from "react";
import { Address, Cell, Popup } from '@nutui/nutui-react';

const App = () => {
  const [text, setText] = useState('请选择地址')
  const [exist, setExist] = useState(false)
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
    console.log(prevExistAdd, nowExistAdd)
  }

  const onChange = (cal) => {
    const name = address[cal.next]
    if (name.length < 1) {
      setExist(false)
    }
  }
  const close = (val) => {
    const {
      provinceName,
      cityName,
      countyName,
      townName,
      addressDetail
    } = val.data as AddressResult
    if (provinceName) {
      setText(provinceName + cityName + countyName + townName + addressDetail)
    }
    setExist(false)
  }
  return (
    <>
      <Cell title="选择地址" description={text}  onClick={()=>setExist(true)} />
      <Address
        visible={exist}
        type="exist"
        existList={existList}
        onChange={onChange}
        onClose={close}
        custom={false}
        onSelect={selected}
        existAddressTitle="配送至"
      />
    </>
  );
};
export default App;

```

:::

### 自定义图标

:::demo

```tsx
import React, { useState } from "react";
import { Address, Cell, Popup } from '@nutui/nutui-react';
import { Heart1, HeartFill, Left, Close } from '@nutui/icons-react';

const App = () => {
  const [text, setText] = useState('请选择地址')
  const [customImg, setCustomImg] = useState(false)
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
    console.log(prevExistAdd, nowExistAdd)

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
    const {
      provinceName,
      cityName,
      countyName,
      townName,
      addressDetail
    } = val.data as AddressResult
    if (provinceName) {
      setText(provinceName + cityName + countyName + townName + addressDetail)
    }
  }
  return (
    <>
      <Cell title="选择地址" description={text}  onClick={()=>setCustomImg(true)} />
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

### 自定义地址与已有地址切换

:::demo

```tsx
import React, { useState } from "react";
import { Address, Cell, Popup } from '@nutui/nutui-react';
import { Heart1, HeartFill, Left, Close } from '@nutui/icons-react';

const App = () => {
  const [text, setText] = useState('请选择地址')
  const [other, setOther] = useState(false)
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

  const [county, setCountry] = useState([])
  const [town, setTown] = useState([])
  const [address, setAddress] = useState({
    province,
    city,
    county,
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
    console.log(prevExistAdd, nowExistAdd)
  }

  const onChange = (cal) => {

    setTimeout(() => {
      switch (cal.next) {
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
        case 'county':
          setCountry([
            { id: 3, name: '八里庄街道', title: 'B' },
            { id: 9, name: '北苑', title: 'B' },
            { id: 4, name: '常营乡', title: 'C' },
          ])
          break;
        default:
          setOther(false)
      }
    }, 200)
  }
  const close = (val) => {
    setOther(false)
    if (val.type === 'exist') {
      const {
        provinceName,
        cityName,
        countyName,
        townName,
        addressDetail
      } = val.data as AddressResult
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
      <Cell title="选择地址" description={text}  onClick={()=>setOther(true)} />
      <Address
          visible={other}
          type="exist"
          existList={existList}
          province={province}
          city={city}
          county={county}
          town={town}
          backIcon={icon.backIcon}
          onChange={onChange}
          onClose={close}
          onSelect={selected}
          customAndExistTitle="选择其他地址"
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

| 属性 | 说明 | 类型 | 默认值 |
|----- | ----- | ----- | -----  |
| visible | 是否打开地址选择 | `string` | - |
| defaultValue | 设置默认选中地址 | `string[] \| number[]` | `[]` |
| type | 地址选择类型 exist/custom/custom2  | string | `custom` |
| province | 省，每个省的对象中，必须有 name 字段，如果类型选择 custom2，必须指定 title 字段为首字母 | `Array` | `[]` |
| city | 市，每个市的对象中，必须有 name 字段，如果类型选择 custom2，必须指定 title 字段为首字母 | `Array` | `[]` |
| county | 县，每个县的对象中，必须有 name 字段，如果类型选择 custom2，必须指定 title 字段为首字母 | `Array` | `[]` |
| town | 乡/镇，每个乡/镇的对象中，必须有 name 字段，如果类型选择 custom2，必须指定 title 字段为首字母 | `Array` | `[]` |
| height | 弹层中内容容器的高度，仅在type="custom2"时有效 | string \| number | `200px` |
| existList | 已存在地址列表，每个地址对象中，必传值provinceName、cityName、countyName、townName、addressDetail、selectedAddress（字段解释见下） | `Array` | `[]` |
| defaultIcon | 已有地址列表默认图标，type='exist' 时生效 | ReactNode | - |
| selectIcon | 已有地址列表选中图标，type='exist' 时生效 | ReactNode | - |
| closeIcon | 自定义关闭弹框按钮图标 | ReactNode | - |
| backIcon | 自定义地址与已有地址切换时，自定义返回的按钮图标 | ReactNode | - |
| custom | 是否可以切换自定义地址选择，type='exist' 时生效 | `boolean|string` | `true` |
| title  | 标题 | string | `请选择地址` |
| onChange | 自定义选择地址时，选择地区时触发  | `(cal: ChangeCallBack) => void` | `-` |
| onSelect | 选择已有地址列表时触发 | ` (prevExistAdd: AddressList, item: AddressList, copyExistAdd: AddressList[] ) => void` |`-` |
| onClose | 地址选择弹框关闭时触发 |  `(cal: CloseCallBack) => void` |`-` |
| onCancel  |点击遮罩层或点击右上角叉号关闭时触发 | `(cal: ChangeCallBack) => void` |`-` |
| onSwitch  | 点击'选择其他地址'或自定义地址选择左上角返回按钮触发 | `(cal: { type: string }) => void` | `-` |

## change 回调参数

| 属性 | 说明 | 可能值  |
|----- | ----- | ----- |
| custom | 当前点击的行政区域  |  `province`(省) \| `city`(市) \| `county`(县) \| `town`(乡) |
| next | 当前点击的行政区域的下一级 | `province`(省) \| `city`(市) \| `county`(县) \| `town`(乡) |
| value | 当前点击的行政区域的值（返回传入的值） | `{}` |

## selected 回调参数

| 属性 | 说明 | 可能值  |
|----- | ----- | ----- |
| 第一个参数（prevExistAdd） |  选择前选中的地址 |  `{}` |
| 第二个参数（nowExistAdd） |  当前选中的地址 |  `{}` |
| 第三个参数（arr） |  选择完之后的已有地址列表（selectedAddress 值发生改变） |  `{}` |

## close 回调参数

| 属性 | 说明 | 可能值 |
|----- | ----- | ----- |
| type | 地址选择类型 exist/custom/custom2  |  `exist` \| `custom` \| `custom2` |
| data | 选择地址的值,custom 时，addressStr 为选择的地址组合 | `{}`  |

## 主题定制

### 样式变量

组件提供了下列 CSS
变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- |--- |
| --nutui-address-tab-line-background | tab 下划线的背景色| `linear-gradient(90deg,$primary-color 0%,$primary-color-end 100%) !default` |