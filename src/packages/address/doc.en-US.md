# Address

## Intro

Load on demand Load the Icon、Popup、Elevator dependent component

## Install

```tsx
import { Address } from '@nutui/nutui-react';
```

## Demo

### Choose Custom Address

:::demo

```tsx
import React, { useState } from "react";
import { Address, Cell, Popup } from '@nutui/nutui-react';

const App = () => {
  const [text, setText] = useState('Choose Address')
  const [optionsDemo1] = useState([
    {
      value: 'ZheJiang',
      text: 'ZheJiang',
      children: [
        {
          value: 'HangZhou',
          text: 'HangZhou',
          disabled: true,
          children: [
            { value: 'XiHu', text: 'XiHu', disabled: true },
            { value: 'YuHang', text: 'YuHang' },
          ],
        },
        {
          value: 'WenZhou',
          text: 'WenZhou',
          children: [
            { value: 'LuCheng', text: 'LuCheng' },
            { value: 'OuHai', text: 'OuHai' },
          ],
        },
      ],
    },
    {
      value: 'HuNan',
      text: 'HuNan',
      disabled: true,
      children: [
        {
          value: 'ChangSha',
          text: 'ChangSha',
          disabled: true,
          children: [
            { value: 'XiHu', text: 'XiHu' },
            { value: 'YuHang', text: 'YuHang' },
          ],
        },
        {
          value: 'WenZhou',
          text: 'WenZhou',
          children: [
            { value: 'LuCheng', text: 'LuCheng' },
            { value: 'OuHai', text: 'OuHai' },
          ],
        },
      ],
    },
    {
      value: 'FuJian',
      text: 'FuJian',
      children: [
        {
          value: 'FuZhou',
          text: 'FuZhou',
          children: [
            { value: 'GuLou', text: 'GuLou' },
            { value: 'TaiJiang', text: 'TaiJiang' },
          ],
        },
      ],
    },
  ])
  const [visible, setVisible] = useState(false)

  return (
    <>
      <Cell title="Choose Address" description={text}  onClick={() => setVisible(true)} />
        <Address
          visible={visible}
          options={optionsDemo1}
          title="Choose Address"
          onChange={(value, params) => {
            setText(value)
          }}
          onClose={() => setVisible(false)}
        />
    </>
  );
};
export default App;
```

:::

### Choose City

If you want to select a province, you need to set the region ID in the order of province City county town in the model-value, and ensure that the data of the corresponding province can be queried

:::demo

```tsx
import  React,{useState} from "react";
import { Address, Cell ,Popup} from '@nutui/nutui-react';

const App = () => {
  const [text, setText] = useState('Choose Address')
  const [visible, setVisible] = useState(false)
  const [value2] = useState(['FuJian', 'FuZhou', 'TaiJiang'])
  const [optionsDemo2] = useState([
    {
      value1: 'ZheJiang',
      text1: 'ZheJiang',
      items: [
        {
          value1: 'HangZhou',
          text1: 'HangZhou',
          disabled: true,
          items: [
            { value1: 'XiHu', text1: 'XiHu', disabled: true },
            { value1: 'YuHang', text1: 'YuHang' },
          ],
        },
        {
          value1: 'WenZhou',
          text1: 'WenZhou',
          items: [
            { value1: 'LuCheng', text1: 'LuCheng' },
            { value1: 'OuHai', text1: 'OuHai' },
          ],
        },
      ],
    },
    {
      value1: 'HuNan',
      text1: 'HuNan',
      disabled: true,
      items: [
        {
          value1: 'ChangSha',
          text1: 'ChangSha',
          disabled: true,
          items: [
            { value1: 'XiHu', text1: 'XiHu' },
            { value1: 'YuHang', text1: 'YuHang' },
          ],
        },
        {
          value1: 'WenZhou',
          text1: 'WenZhou',
          items: [
            { value1: 'LuCheng', text1: 'LuCheng' },
            { value1: 'OuHai', text1: 'OuHai' },
          ],
        },
      ],
    },
    {
      value1: 'FuJian',
      text1: 'FuJian',
      items: [
        {
          value1: 'FuZhou',
          text1: 'FuZhou',
          items: [
            { value1: 'GuLou', text1: 'GuLou' },
            { value1: 'TaiJiang', text1: 'TaiJiang' },
          ],
        },
      ],
    },
  ])

  return (
    <>
      <Cell title="Choose Address" description={text}  onClick={() => setVisible(true)} />
      <Address
        visible={visible}
        defaultValue={value2}
        options={optionsDemo2}
        optionKey={{
          textKey: 'text1',
          valueKey: 'value1',
          childrenKey: 'items',
        }}
        onChange={(value, params) => {
          setText(value)
        }}
        onClose={() => setVisible(false)}
      />
    </>
  );
};
export default App;
```

:::

### Choose Custom Address2

:::demo

:::

### Choose Exist Address

:::demo

```tsx
import React, { useState } from "react";
import { Address, Cell, Popup } from '@nutui/nutui-react';

const App = () => {
  const [text, setText] = useState('Choose Address')
  const [visible, setVisible] = useState(false)
  const [existList, setExistAddress] = useState([
    {
      id: 1,
      addressDetail: '',
      cityName: 'CiQu',
      countyName: 'TongZhou',
      provinceName: 'BeiJing',
      selectedAddress: true,
      townName: '',
      name: 'Wang1',
      phone: '182****1718',
    },
    {
      id: 2,
      addressDetail: '',
      cityName: 'QuanZhou',
      countyName: '',
      provinceName: 'FuZhou',
      selectedAddress: false,
      townName: '',
      name: 'Wang2',
      phone: '182****1718',
    },
    {
      id: 3,
      addressDetail: 'JD',
      cityName: 'Da Xing',
      countyName: 'KeChuang',
      provinceName: 'BeiJing',
      selectedAddress: false,
      townName: '',
      name: 'Wang3',
      phone: '182****1718',
    },
  ])

  const selectedTwo = (data: AddressList) => {
    const { provinceName, cityName, countyName, townName, addressDetail } =
      data as AddressResult
    if (provinceName) {
      setText(provinceName + cityName + countyName + townName + addressDetail)
    }
  }

  return (
    <>
      <Cell title="Choose Address" description={text}  onClick={() => setVisible(true)} />
        <Address
          visible={visible}
          type="exist"
          existList={existList}
          onExistSelect={selectedTwo}
          title="Delivery"
          onClose={() => setVisible(false)}
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
import React, { useState } from "react";
import { Address, Cell, Popup } from '@nutui/nutui-react';
import { Heart } from '@nutui/icons-react';

const App = () => {
  const [text, setText] = useState('Choose Address')
  const [icon, setIcon] = useState({
    selectIcon: <Heart color="red" />,
    defaultIcon: <Heart />,
    closeIcon: <Heart />,
  })

  const [visible, setVisible] = useState(false)
  const [existList, setExistAddress] = useState([
    {
      id: 1,
      addressDetail: '',
      cityName: 'CiQu',
      countyName: 'TongZhou',
      provinceName: 'BeiJing',
      selectedAddress: true,
      townName: '',
      name: 'Wang1',
      phone: '182****1718',
    },
    {
      id: 2,
      addressDetail: '',
      cityName: 'QuanZhou',
      countyName: '',
      provinceName: 'FuZhou',
      selectedAddress: false,
      townName: '',
      name: 'Wang2',
      phone: '182****1718',
    },
    {
      id: 3,
      addressDetail: 'JD',
      cityName: 'Da Xing',
      countyName: 'KeChuang',
      provinceName: 'BeiJing',
      selectedAddress: false,
      townName: '',
      name: 'Wang3',
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
      <Cell title="Choose Address" description={text}  onClick={() => setVisible(true)} />
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
import { Heart } from '@nutui/icons-react';

const App = () => {
  const [text, setText] = useState('Choose Address')
  const [icon, setIcon] = useState({
    selectIcon: <Heart color="red" />,
    defaultIcon: <Heart />,
    closeIcon: <Heart />,
  })
  const [visible, setVisible] = useState(false)
  const [existList, setExistAddress] = useState([
    {
      id: 1,
      addressDetail: '',
      cityName: 'CiQu',
      countyName: 'TongZhou',
      provinceName: 'BeiJing',
      selectedAddress: true,
      townName: '',
      name: 'Wang1',
      phone: '182****1718',
    },
    {
      id: 2,
      addressDetail: '',
      cityName: 'QuanZhou',
      countyName: '',
      provinceName: 'FuZhou',
      selectedAddress: false,
      townName: '',
      name: 'Wang2',
      phone: '182****1718',
    },
    {
      id: 3,
      addressDetail: 'JD',
      cityName: 'Da Xing',
      countyName: 'KeChuang',
      provinceName: 'BeiJing',
      selectedAddress: false,
      townName: '',
      name: 'Wang3',
      phone: '182****1718',
    },
  ])

  const [optionsDemo5] = useState([
    { value: 'BeiJing', text: 'BeiJing', id: 1, pidd: null },
    { value: 'ChaoYang', text: 'ChaoYang', id: 11, pidd: 1 },
    { value: 'YiZhuang', text: 'YiZhuang', id: 111, pidd: 11 },
    { value: 'GuangDong', text: 'GuangDong', id: 2, pidd: null },
    { value: 'GuangZhou', text: 'GuangZhou', id: 21, pidd: 2 },
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

  const onSwitch = (val) => {
      if (val.type === 'custom') {
        console.log('click the button')
      } else {
        console.log('click the back icon')
      }
  }

  return (
    <>
      <Cell title="Choose Address" description={text}  onClick={() => setVisible(true)} />
      <Address
        visible={showPopup.other}
        type="exist"
        existList={existList4}
        title={customeTitle}
        options={optionsDemo5}
        format={convertConfigDemo5}
        backIcon={icon.backIcon}
        custom="Choose other address"
        onExistSelect={selectedFour}
        onSwitch={onSwitch}
        onChange={(value, params) => {
          setText(value)
        }}
        onClose={() => setVisible(false)}
      />
    </>
  );
};
export default App;

```

:::

## Address

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| visible | Whether to open address | `boolean` | `-` |
| defaultVisible | Initial open/close state of the address selection | `boolean` | - |
| type | Choose type: exist/custom | `string` | `custom` |
| existList | Exist address list data | `Array` | `[]` |
| defaultIcon | Exist address default icon | `ReactNode` | `-` |
| selectIcon | Exist address selected icon | `ReactNode` | `-` |
| closeIcon | Custom close button icon | `ReactNode` | `-` |
| backIcon | Custom back button icon | `ReactNode` | `-` |
| custom | Whether to change custom address | `boolean` \| `string` | `true` |
| onExistSelect | Emitted when to selected exist address | `(data: AddressList) => void` | `-` |
| onSwitch | Click to select another address or custom address to select the upper left corner of the return button triggered | `(data: { type: string }) => void` | `-` |
| onClose | Fired when the component is closed | `-` | `-` |

### Ref

You can get the Address instance and call instance methods through ref.

| Method | Description | Parameter |
| ----- | ----- | -- |
| open | Open address selection | `-` |
| close | Close address selection | `-` |

More properties in Cascader.