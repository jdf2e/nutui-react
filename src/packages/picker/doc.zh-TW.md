# Picker

## 介紹

提供多個選項集合供用戶選擇其中一項。

## 安裝

```tsx
import { Picker } from '@nutui/nutui-react';
```

## 代碼演示

### 基礎用法

:::demo

```tsx
import  React, { useState  } from "react";
import { Picker,Cell } from '@nutui/nutui-react';

const App = () => {
  const [visible, setVisible] = useState(false)
  const [baseDesc, setBaseDesc] = useState('')
  const listData1 = [
    [
      { value: 1, text: '南京市',},
      { value: 2, text: '無錫市',},
      { value: 3, text: '海北藏族自治區',},
      { value: 4, text: '北京市',},
      { value: 5, text: '連雲港市',},
      { value: 8, text: '大慶市',},
      { value: 9, text: '綏化市',},
      { value: 10,text: '濰坊市',},
      { value: 12,text: '烏魯木齊市'},
    ],
  ]
  const changePicker = (list: any[], option: any, columnIndex: number) => {
    console.log(columnIndex, option)
  }
  const confirmPicker = (options: PickerOption[], values: (string | number)[]) => {
    let description = ''
    options.forEach((option: any) => {
      description += option.text
    })
    setBaseDesc(description)
  }
  return ( 
    <>   
      <Cell title="請選擇城市" description={baseDesc} onClick={() => setVisible(!visible)}/>
      <Picker
        visible={visible}
        options={listData1}
        onConfirm={(list, values) => confirmPicker(list, values)}
        onClose={() => setVisible(false)}
        onChange={changePicker}
       />
    </>
  );
};  
export default App;
```

:::

### 默认选中项

:::demo

```tsx
import  React, { useState  } from "react";
import { Picker,Cell } from '@nutui/nutui-react';

const App = () => {
  const [visible, setVisible] = useState(false)
  const [baseDefault, setbaseDefault] = useState('')
  const [defaultValue, setDefaultValue] = useState([2])
  const listData1 = [
    [
      { value: 1, text: '南京市',},
      { value: 2, text: '無錫市',},
      { value: 3, text: '海北藏族自治區',},
      { value: 4, text: '北京市',},
      { value: 5, text: '連雲港市',},
      { value: 8, text: '大慶市',},
      { value: 9, text: '綏化市',},
      { value: 10,text: '濰坊市',},
      { value: 12,text: '烏魯木齊市'},
    ],
  ]
  const confirmPicker = (options: PickerOption[], values: (string | number)[]) => {
    let description = ''
    options.forEach((option: any) => {
      description += option.text
    })
    setbaseDefault(description)
  }
  return ( 
    <>   
      <Cell title="請選擇城市" description={baseDefault} onClick={() => setVisible(!visible)}/>
      <Picker
        visible={visible}
        options={listData1}
        defaultValue={defaultValue}
        onConfirm={(list, values) => confirmPicker(list, values)}
        onClose={() => setVisible(false)}
       />
    </>
  );
};  
export default App;
```

:::

### 多列用法

:::demo

```tsx
import  React, { useState  } from "react";
import { Picker,Cell } from '@nutui/nutui-react';

const App = () => {
  const [isVisible2, setIsVisible2] = useState(false)
  const [mutilDesc, setMutilDesc] = useState('')
  const listData2 = [
    // 第一列
    [
      { text: '周一', value: 'Monday' },
      { text: '周二', value: 'Tuesday' },
      { text: '周三', value: 'Wednesday' },
      { text: '周四', value: 'Thursday' },
      { text: '周五', value: 'Friday' },
    ],
    // 第二列
    [
      { text: '上午', value: 'Morning' },
      { text: '下午', value: 'Afternoon' },
      { text: '晚上', value: 'Evening' },
    ],
  ]
  const confirmPicker = (options: PickerOption[], values: (string | number)[]) => {
    let description = ''
    options.forEach((option: any) => {
      description += option.text
    })
    setbaseDefault(description)
  }
  return ( 
    <>   
    <Cell title="多列用法" description={mutilDesc} onClick={() => setIsVisible2(!isVisible2)} />
    <Picker
      visible={isVisible2}
      options={listData2}
      onClose={() => setIsVisible2(false)}
      defaultValue={['Wednesday']}
      onConfirm={(list, values) => confirmPicker(list, values)}
     />
    </>
  );
};  
export default App;
```

:::

### 平鋪展示

通過設定 `threeDimensional` 取消 3D 展示效果，併且通過設定 `duration` 可以控制快速滾動的時長。

:::demo

```tsx
import  React, { useState  } from "react";
import { Picker,Cell } from '@nutui/nutui-react';

const App = () => {
  const [visible, setIsVisible] = useState(false)
  const [tileDesc, settileDesc] = useState('')
  const options = [
    [
      { value: 1, text: '南京市',},
      { value: 2, text: '無錫市',},
      { value: 3, text: '海北藏族自治區',},
      { value: 4, text: '北京市',},
      { value: 5, text: '連雲港市',},
      { value: 8, text: '大慶市',},
      { value: 9, text: '綏化市',},
      { value: 10,text: '濰坊市',},
      { value: 12,text: '烏魯木齊市'},
    ],
  ]
  const confirmPicker = (options: PickerOption[], values: (string | number)[]) => {
    let description = ''
    options.forEach((option: any) => {
      description += option.text
    })
    settileDesc(description)
  }
  return ( 
    <>   
      <Cell title="請選擇城市" description={settileDesc} onClick={() => setIsVisible(!visible)}/>
      <Picker
        visible={visible}
        options={options}
        threeDimensional={false}
        duration={1000}
        onConfirm={(list, values) => confirmPicker(list, values)}
        onClose={() => setIsVisible(false)}
       />
    </>
  );
};  
export default App;
```

:::

### 多級聯動

:::demo

```tsx
import  React, { useState  } from "react";
import { Picker,Cell } from '@nutui/nutui-react';

const App = () => {
  const [visible, setIsVisible] = useState(false)
  const [cityCustmer, setCityCustmer] = useState('')
  const [custmerCityData, setCustmerCityData] = useState([
    {
      value: 1,
      text: '北京市',
      children: [
        { value: 1, text: '朝陽區',},
        { value: 2, text: '海澱區',},
        { value: 3, text: '大興區',},
        { value: 4, text: '東城區',},
        { value: 5, text: '西城區',},
        { value: 6, text: '豐臺區',},
      ],
    },
    {
      value: 2,
      text: '上海市',
      children: [
        { value: 1, text: '黃浦區',},
        { value: 2, text: '長寧區',},
        { value: 3, text: '普陀區',},
        { value: 4, text: '楊浦區',},
        { value: 5, text: '浦東新區',},
      ],
    },
  ])
  const setChooseValueCustmer = (values: (string | number)[],chooseData: PickerOption[]) => {
    const str = chooseData.map((item) => item.text).join('-')
    setCityCustmer(str)
  }
 
  return ( 
    <>   
      <Cell title="多級聯動" description={cityCustmer} onClick={() => setIsVisible(!visible)}/>
      <Picker
        visible={visible}
        options={custmerCityData}
        onClose={() => setIsVisible(false)}
        onConfirm={(list, values) => setChooseValueCustmer(list, values)}
          onChange={(
            options: PickerOption[],
            value: (string | number)[],
            columnIndex: number
          ) =>
            console.log(
              asyncData,
              '多級聯動',
              columnIndex,
              value,
              options
            )
          }
       />
    </>
  );
};  
export default App;
```

:::

### 動態獲取

:::demo

```tsx
import  React, { useState  } from "react";
import { Picker,Cell } from '@nutui/nutui-react';

const App = () => {
  const [visible, setIsVisible] = useState(false)
  const [asyncDesc, setasyncDesc] = useState('')
  const [asyncData, setCustmerCityData] = useState([
    {
      value: 1,
      text: '北京市',
      children: [
        { value: 1, text: '朝陽區',},
        { value: 2, text: '海澱區',},
        { value: 3, text: '大興區',},
        { value: 4, text: '東城區',},
        { value: 5, text: '西城區',},
        { value: 6, text: '豐臺區',},
      ],
    },
    {
      value: 2,
      text: '上海市',
      children: [],
    },
  ])
  const setAsyncConfirm = (
    options: PickerOption[],
    values: (string | number)[]
  ) => {
    const str = options.map((item) => item.text).join('-')
    setasyncDesc(str)
  }
  const updateChooseValueCustmer = (
    options: PickerOption[],
    values: (string | number)[],
    columnIndex: number
  ) => {
    if (columnIndex === 0 && values[0] === 2) {
      setTimeout(() => {
        if(asyncData[1].children.length === 0){
          asyncData[1].children = [
          { value: 1, text: '黃浦區',},
          { value: 2, text: '長寧區',},
          { value: 3, text: '普陀區',},
          { value: 4, text: '楊浦區',},
          { value: 5, text: '浦東新區',}]
            
            setAsyncData([...asyncData])
        }
      }, 100)
    }
  }
 
  return ( 
    <>   
      <Cell title="請選擇城市" description={asyncDesc} onClick={() => setIsVisible(!visible)}/>
      <Picker
        visible={visible}
        options={asyncData}
        onClose={() => setIsVisible(false)}
        onConfirm={(list, values) => setAsyncConfirm(list, values)}
          onChange={(
            selectedOptions: PickerOption[],
            selectedValue: (string | number)[],
            columnIndex: number
          ) =>
            updateChooseValueCustmer(
              selectedOptions,
              selectedValue,
              columnIndex
            )
          }
       />
    </>
  );
};  
export default App;
```

:::

## Picker

### Props

| 屬性 | 說明 | 類型 | 預設值 |
| --- | --- | --- | --- |
| visible | 是否可見 | `boolean` | `false` |
| title | 設定標題 | `string` | `-` |
| options | 列錶數據 | `Array` | `[]` |
| value | 选中值，受控 | `Array` | `[]` |
| defaultValue | 預設選中 | `Array` | `[]` |
| threeDimensional | 是否開啟3D效果 | `boolean` | `true` |
| duration | 快速滑動時慣性滾動的時長，單位 ms | `string`  \|  `number` | `1000` |
| popupProps | 透传popup属性 | `object` | `-` |
| onConfirm | 點選確認按鈕時候回調 | `(options, value) => void` | `-` |
| onChange | 每一列值變更時調用 | `(options, value) => void` | `-` |
| onClose | 關閉時觸發 | `(options, value) => void` | `-` |
| afterClose | 聯動時，關閉時回調 | `(options, value) => void` | `-` |

### options 數據結構

| 屬性 | 說明 | 類型 | 預設值 |
| --- | --- | --- | --- |
| text | 選項的文字內容 | `string`  \|  `number` | `-` |
| value | 選項對應的值，且唯一 | `string`  \|  `number` | `-` |
| children | 用於級聯選項 | `Array` | `-` |

## 主題定制

### 樣式變數

組件提供了下列 CSS 變數，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 預設值 |
| --- | --- | --- |
| \--nutui-picker-bar-cancel-color | 取消文案的色值 | `#808080` |
| \--nutui-picker-bar-ok-color | 確認文案的色值 | `$primary-color` |
| \--nutui-picker-bar-cancel-font-size | 取消字號 | `14px` |
| \--nutui-picker-bar-ok-font-size | 確認字號 | `14px` |
| \--nutui-picker-bar-button-padding | 取消和確認的padding值 | `0 15px` |
| \--nutui-picker-bar-title-font-size | 標題字號 | `16px` |
| \--nutui-picker-bar-title-color | 標題色值 | `$title-color` |
| \--nutui-picker-bar-title-font-weight | 標題字重 | `normal` |
| \--nutui-picker-list-height | 面闆高度 | `252px` |
| \--nutui-picker-item-height | 面闆每一條數據高度 | `36px` |
| \--nutui-picker-item-text-color | 面闆每一條數據的字色 | `$title-color` |
| \--nutui-picker-item-active-text-color | 面闆當前選中數據的字色 | `inherit` |
| \--nutui-picker-item-text-font-size | 面闆每條數據字號 | `14px` |
| \--nutui-picker-item-active-line-border | 面闆當前選中的border值 | `1px solid #d8d8d8` |
| \--nutui-picker-mask-bg-img | 面闆數據區域的遮罩層背景 | `linear-gradient(180deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.4)),linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.4))` |