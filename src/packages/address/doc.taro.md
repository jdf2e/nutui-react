# Address 地址

## 介绍

地址选择

## 安装

```tsx
import { Address } from '@nutui/nutui-react-taro';
```

## 代码演示

### 选择自定义地址

:::demo

```tsx
import React, { useState } from "react";
import { Address, Cell, Popup } from '@nutui/nutui-react-taro';

const App = () => {
  const [text, setText] = useState('请选择地址')
  const [optionsDemo1] = useState([
    {
      value: '浙江',
      text: '浙江',
      children: [
        {
          value: '杭州',
          text: '杭州',
          disabled: true,
          children: [
            { value: '西湖区', text: '西湖区', disabled: true },
            { value: '余杭区', text: '余杭区' },
          ],
        },
        {
          value: '温州',
          text: '温州',
          children: [
            { value: '鹿城区', text: '鹿城区' },
            { value: '瓯海区', text: '瓯海区' },
          ],
        },
      ],
    },
    {
      value: '湖南',
      text: '湖南',
      disabled: true,
      children: [
        {
          value: '长沙',
          text: '长沙',
          disabled: true,
          children: [
            { value: '西湖区', text: '西湖区' },
            { value: '余杭区', text: '余杭区' },
          ],
        },
        {
          value: '温州',
          text: '温州',
          children: [
            { value: '鹿城区', text: '鹿城区' },
            { value: '瓯海区', text: '瓯海区' },
          ],
        },
      ],
    },
    {
      value: '福建',
      text: '福建',
      children: [
        {
          value: '福州',
          text: '福州',
          children: [
            { value: '鼓楼区', text: '鼓楼区' },
            { value: '台江区', text: '台江区' },
          ],
        },
      ],
    },
  ])
  const [visible, setVisible] = useState(false)

  return (
    <>
      <Cell title="选择地址" description={text}  onClick={() => setVisible(true)} />
        <Address
          visible={visible}
          options={optionsDemo1}
          title="选择地址"
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

### 选中省市区

如果想选中某个省市区，同级联组件。

:::demo

```tsx
import React, { useState } from "react";
import { Address, Cell, Popup } from '@nutui/nutui-react-taro';

const App = () => {
  const [text, setText] = useState('请选择地址')
  const [visible, setVisible] = useState(false)
  const [value2] = useState(['福建', '福州', '台江区'])
    const [optionsDemo2] = useState([
    {
      value1: '浙江',
      text1: '浙江',
      items: [
        {
          value1: '杭州',
          text1: '杭州',
          disabled: true,
          items: [
            { value1: '西湖区', text1: '西湖区', disabled: true },
            { value1: '余杭区', text1: '余杭区' },
          ],
        },
        {
          value1: '温州',
          text1: '温州',
          items: [
            { value1: '鹿城区', text1: '鹿城区' },
            { value1: '瓯海区', text1: '瓯海区' },
          ],
        },
      ],
    },
    {
      value1: '湖南',
      text1: '湖南',
      disabled: true,
      items: [
        {
          value1: '长沙',
          text1: '长沙',
          disabled: true,
          items: [
            { value1: '西湖区', text1: '西湖区' },
            { value1: '余杭区', text1: '余杭区' },
          ],
        },
        {
          value1: '温州',
          text1: '温州',
          items: [
            { value1: '鹿城区', text1: '鹿城区' },
            { value1: '瓯海区', text1: '瓯海区' },
          ],
        },
      ],
    },
    {
      value1: '福建',
      text1: '福建',
      items: [
        {
          value1: '福州',
          text1: '福州',
          items: [
            { value1: '鼓楼区', text1: '鼓楼区' },
            { value1: '台江区', text1: '台江区' },
          ],
        },
      ],
    },
  ])

  return (
    <>
      <Cell title="选择地址" description={text}  onClick={() => setVisible(true)} />
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

### 选择已有地址

:::demo

```tsx
import React, { useState } from "react";
import { Address, Cell, Popup } from '@nutui/nutui-react-taro';

const App = () => {
  const [text, setText] = useState('请选择地址')
  const [visible, setVisible] = useState(false)
  const [existList, setExistAddress] = useState([
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

  const selectedTwo = (data: AddressList) => {
    const { provinceName, cityName, countyName, townName, addressDetail } =
      data as AddressResult
    if (provinceName) {
      setText(provinceName + cityName + countyName + townName + addressDetail)
    }
  }

  return (
    <>
      <Cell title="选择地址" description={text}  onClick={() => setVisible(true)} />
        <Address
          visible={visible}
          type="exist"
          existList={existList}
          onExistSelect={selectedTwo}
          title="配送"
          onClose={() => setVisible(false)}
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
import { Address, Cell, Popup } from '@nutui/nutui-react-taro';
import { Heart } from '@nutui/icons-react-taro';

const App = () => {
  const [text, setText] = useState('请选择地址')
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
      <Cell title="选择地址" description={text}  onClick={() => setVisible(true)} />
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

### 自定义地址与已有地址切换

:::demo

```tsx
import React, { useState } from "react";
import { Address, Cell, Popup } from '@nutui/nutui-react-taro';
import { Heart } from '@nutui/icons-react-taro';

const App = () => {
  const [text, setText] = useState('请选择地址')
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

  const onSwitch = (val) => {
      if (val.type === 'custom') {
        console.log('点击了“选择其他地址”按钮')
      } else {
        console.log('点击了自定义地址左上角的返回按钮')
      }
  }

  return (
    <>
      <Cell title="选择地址" description={text}  onClick={() => setVisible(true)} />
      <Address
        visible={showPopup.other}
        type="exist"
        existList={existList4}
        title={customeTitle}
        options={optionsDemo5}
        format={convertConfigDemo5}
        backIcon={icon.backIcon}
        custom="选择其他地址"
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

### 非受控模式

:::demo

```tsx
import React, { useState, useRef } from "react";
import { Address, Cell } from '@nutui/nutui-react';

const App = () => {
  const addressRef = useRef<any>(null)
  const [text, setText] = useState('请选择地址')

  const [optionsDemo] = useState([
    {
      value: '浙江',
      text: '浙江',
      children: [
        {
          value: '杭州',
          text: '杭州',
          disabled: true,
          children: [
            { value: '西湖区', text: '西湖区', disabled: true },
            { value: '余杭区', text: '余杭区' },
          ],
        },
        {
          value: '温州',
          text: '温州',
          children: [
            { value: '鹿城区', text: '鹿城区' },
            { value: '瓯海区', text: '瓯海区' },
          ],
        },
      ],
    },
    {
      value: '湖南',
      text: '湖南',
      disabled: true,
      children: [
        {
          value: '长沙',
          text: '长沙',
          disabled: true,
          children: [
            { value: '西湖区', text: '西湖区' },
            { value: '余杭区', text: '余杭区' },
          ],
        },
        {
          value: '温州',
          text: '温州',
          children: [
            { value: '鹿城区', text: '鹿城区' },
            { value: '瓯海区', text: '瓯海区' },
          ],
        },
      ],
    },
    {
      value: '福建',
      text: '福建',
      children: [
        {
          value: '福州',
          text: '福州',
          children: [
            { value: '鼓楼区', text: '鼓楼区' },
            { value: '台江区', text: '台江区' },
          ],
        },
      ],
    },
  ])

  return (
    <>
      <Cell title="选择地址" description={text}  onClick={() => addressRef.current?.open()} />
      <Address
        ref={addressRef}
          defaultVisible={false}
          options={optionsDemo}
          title="选择地址"
          onChange={(value, params) => {
            setText(value)
          }}
          onClose={() => addressRef.current?.close()}
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
| --- | --- | --- | --- |
| visible | 是否打开地址选择 | `boolean` | `-` |
| defaultVisible | 初始地址选择打开/关闭状态 | `boolean` | `-` |
| type | 地址选择类型 exist/custom | `string` | `custom` |
| existList | 已存在地址列表，每个地址对象中，必传值provinceName、cityName、countyName、townName、addressDetail、selectedAddress（字段解释见下） | `Array` | `[]` |
| defaultIcon | 已有地址列表默认图标，type='exist' 时生效 | `ReactNode` | `-` |
| selectIcon | 已有地址列表选中图标，type='exist' 时生效 | `ReactNode` | `-` |
| closeIcon | 自定义关闭弹框按钮图标 | `ReactNode` | `-` |
| backIcon | 自定义地址与已有地址切换时，自定义返回的按钮图标 | `ReactNode` | `-` |
| custom | 是否可以切换自定义地址选择，type='exist' 时生效 | `boolean` \| `string` | `true` |
| onExistSelect | 选择已有地址列表时触发 | `(data: AddressList) => void` | `-` |
| onSwitch | 点击'选择其他地址'或自定义地址选择左上角返回按钮触发 | `(data: { type: string }) => void` | `-` |
| onClose | 关闭弹框时触发 | `-` | `-` |

### Ref

通过 ref 可以获取到 Address 实例并调用实例方法。

| 方法名 | 说明 | 参数 |
| ----- | ----- | -- |
| open | 打开地址选择 | `-` |
| close | 关闭地址选择 | `-` |

更多参数可参考 `Cascader` 组件。