# Address 地址

## 介紹

地址選擇，在2.0中，地址改用級聯組件實現。截止當前版本，只支持級聯，不支持級聯+電梯模式，開發中。

## 安裝

```tsx
import { Address } from '@nutui/nutui-react';
```

## 代碼演示

### 選擇自定義地址

:::demo

```tsx
import React, { useState } from "react";
import { Address, Cell, Popup } from '@nutui/nutui-react';

const App = () => {
  const [text, setText] = useState('請選擇地址')
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
            { value: '西湖區', text: '西湖區', disabled: true },
            { value: '余杭區', text: '余杭區' },
          ],
        },
        {
          value: '溫州',
          text: '溫州',
          children: [
            { value: '鹿城區', text: '鹿城區' },
            { value: '甌海區', text: '甌海區' },
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
          value: '長沙',
          text: '長沙',
          disabled: true,
          children: [
            { value: '西湖區', text: '西湖區' },
            { value: '余杭區', text: '余杭區' },
          ],
        },
        {
          value: '溫州',
          text: '溫州',
          children: [
            { value: '鹿城區', text: '鹿城區' },
            { value: '甌海區', text: '甌海區' },
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
            { value: '鼓樓區', text: '鼓樓區' },
            { value: '臺江區', text: '臺江區' },
          ],
        },
      ],
    },
  ])
  const [visible, setVisible] = useState(false)

  return (
    <>
      <Cell title="選擇地址" description={text}  onClick={() => setVisible(true)} />
        <Address
          visible={visible}
          options={optionsDemo1}
          title="選擇地址"
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

### 選中省市區

如果想選中某個省市區，同級聯組件。

:::demo

```tsx
import React, { useState } from "react";
import { Address, Cell, Popup } from '@nutui/nutui-react';

const App = () => {
  const [text, setText] = useState('請選擇地址')
  const [visible, setVisible] = useState(false)
  const [value2] = useState(['福建', '福州', '臺江區'])
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
            { value1: '西湖區', text1: '西湖區', disabled: true },
            { value1: '余杭區', text1: '余杭區' },
          ],
        },
        {
          value1: '溫州',
          text1: '溫州',
          items: [
            { value1: '鹿城區', text1: '鹿城區' },
            { value1: '甌海區', text1: '甌海區' },
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
          value1: '長沙',
          text1: '長沙',
          disabled: true,
          items: [
            { value1: '西湖區', text1: '西湖區' },
            { value1: '余杭區', text1: '余杭區' },
          ],
        },
        {
          value1: '溫州',
          text1: '溫州',
          items: [
            { value1: '鹿城區', text1: '鹿城區' },
            { value1: '甌海區', text1: '甌海區' },
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
            { value1: '鼓樓區', text1: '鼓樓區' },
            { value1: '臺江區', text1: '臺江區' },
          ],
        },
      ],
    },
  ])

  return (
    <>
      <Cell title="選擇地址" description={text}  onClick={() => setVisible(true)} />
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

### 選擇已有地址

:::demo

```tsx
import React, { useState } from "react";
import { Address, Cell, Popup } from '@nutui/nutui-react';

const App = () => {
  const [text, setText] = useState('請選擇地址')
  const [visible, setVisible] = useState(false)
  const [existList, setExistAddress] = useState([
    {
      id: 1,
      addressDetail: '',
      cityName: '次渠鎮',
      countyName: '通州區',
      provinceName: '北京市',
      selectedAddress: true,
      townName: '',
      name: '探探魚1',
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
      name: '探探魚2',
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
      name: '探探魚3',
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
      <Cell title="選擇地址" description={text}  onClick={() => setVisible(true)} />
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

### 自定義圖標

:::demo

```tsx
import React, { useState } from "react";
import { Address, Cell, Popup } from '@nutui/nutui-react';
import { Heart } from '@nutui/icons-react';

const App = () => {
  const [text, setText] = useState('請選擇地址')
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
      cityName: '次渠鎮',
      countyName: '通州區',
      provinceName: '北京市',
      selectedAddress: true,
      townName: '',
      name: '探探魚1',
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
      name: '探探魚2',
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
      name: '探探魚3',
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
      <Cell title="選擇地址" description={text}  onClick={() => setVisible(true)} />
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

### 自定義地址與已有地址切換

:::demo

```tsx
import React, { useState } from "react";
import { Address, Cell, Popup } from '@nutui/nutui-react';
import { Heart } from '@nutui/icons-react';

const App = () => {
  const [text, setText] = useState('請選擇地址')
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
      cityName: '次渠鎮',
      countyName: '通州區',
      provinceName: '北京市',
      selectedAddress: true,
      townName: '',
      name: '探探魚1',
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
      name: '探探魚2',
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
      name: '探探魚3',
      phone: '182****1718',
    },
  ])

  const [optionsDemo5] = useState([
    { value: '北京', text: '北京', id: 1, pidd: null },
    { value: '朝陽區', text: '朝陽區', id: 11, pidd: 1 },
    { value: '亦莊', text: '亦莊', id: 111, pidd: 11 },
    { value: '廣東省', text: '廣東省', id: 2, pidd: null },
    { value: '廣州市', text: '廣州市', id: 21, pidd: 2 },
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
        console.log('點擊了“選擇其他地址”按鈕')
      } else {
        console.log('點擊了自定義地址左上角的返回按鈕')
      }
  }

  return (
    <>
      <Cell title="選擇地址" description={text}  onClick={() => setVisible(true)} />
      <Address
        visible={showPopup.other}
        type="exist"
        existList={existList4}
        title={customeTitle}
        options={optionsDemo5}
        format={convertConfigDemo5}
        backIcon={icon.backIcon}
        custom="選擇其他地址"
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

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| visible | 是否打開地址選擇 | `boolean` | `-` |
| defaultVisible | 初始地址選擇打開/關閉狀態 | `boolean` | - |
| type | 地址選擇類型 exist/custom | `string` | `custom` |
| existList | 已存在地址列錶，每個地址對象中，必傳值provinceName、cityName、countyName、townName、addressDetail、selectedAddress（字段解釋見下） | `Array` | `[]` |
| defaultIcon | 已有地址列錶默認圖標，type='exist' 時生效 | `ReactNode` | `-` |
| selectIcon | 已有地址列錶選中圖標，type='exist' 時生效 | `ReactNode` | `-` |
| closeIcon | 自定義關閉彈框按鈕圖標 | `ReactNode` | `-` |
| backIcon | 自定義地址與已有地址切換時，自定義返回的按鈕圖標 | `ReactNode` | `-` |
| custom | 是否可以切換自定義地址選擇，type='exist' 時生效 | `boolean` \| `string` | `true` |
| onExistSelect | 選擇已有地址列錶時觸發 | `(data: AddressList) => void` | `-` |
| onSwitch | 點擊'選擇其他地址'或自定義地址選擇左上角返回按鈕觸發 | `(data: { type: string }) => void` | `-` |
| onClose | 關閉彈框時觸發 | `-` | `-` |

### Ref

透過 ref 可以獲取到 Address 實例並調用實例方法。

| 方法名 | 說明 | 參數 |
| ---- | ---- | ---- |
| open | 打開地址選擇 | `-` |
| close | 關閉地址選擇 | `-` |

更多參數可參考 `Cascader` 組件。