#  Picker 

### 介紹

提供多個選項集合供用戶選擇其中一項。

### 安裝
```ts
// react
import { Picker } from '@nutui/nutui-react';

```


## 代碼演示

### 基礎用法

:::demo
```tsx
import  React, { useState, useRef  } from "react";
import { Picker,Cell } from '@nutui/nutui-react';

interface pickerRefState {
  updateChooseValue: (index: number, value: string, cacheValueData: any[]) => void
}
const App = () => {
  const [isVisible1, setIsVisible1] = useState(false)
  const pickerRef1 = useRef<pickerRefState>(null)
  const listData1 = [
    [
      {
        label: 1,
        value: '南京市',
      },
      {
        label: 2,
        value: '無錫市',
      },
      {
        label: 3,
        value: '海北藏族自治區',
      },
      {
        label: 4,
        value: '北京市',
      },
      {
        label: 5,
        value: '連雲港市',
      },
      {
        label: 6,
        value: '浙江市',
      },
      {
        label: 7,
        value: '江蘇市',
      },
      {
        label: 8,
        value: '大慶市',
      },
      {
        label: 9,
        value: '綏化市',
      },
      {
        label: 10,
        value: '濰坊市',
      },
      {
        label: 11,
        value: '請按市',
      },
      {
        label: 12,
        value: '烏魯木齊市',
      },
    ],
  ]
  return ( 
    <>   
      <Cell isLink onClick={() => setIsVisible1(!isVisible1)}>
        <span>
          <label>基礎用法</label>
        </span>
      </Cell>
      <Picker
        isVisible={isVisible1}
        listData={listData1}
        onClose={() => setIsVisible1(false)}
        defaultValueData={[]}
        ref={pickerRef1}
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
import  React, { useState, useRef  } from "react";
import { Picker,Cell } from '@nutui/nutui-react';

interface pickerRefState {
  updateChooseValue: (index: number, value: string, cacheValueData: any[]) => void
}
const App = () => {
  const [isVisible2, setIsVisible2] = useState(false)
  const pickerRef2 = useRef<pickerRefState>(null)
  const listData2 = [
    ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    ['上午', '下午', '晚上'],
  ]
  return ( 
    <>   
    <Cell isLink onClick={() => setIsVisible2(!isVisible2)}>
      <span>
        <label>多列用法</label>
      </span>
    </Cell>
    <Picker
      isVisible={isVisible2}
      listData={listData2}
      onClose={() => setIsVisible2(false)}
      defaultValueData={['周四', '下午']}
      onConfirm={(list: any[]) => console.log('多列用法選中項：', list)}
      ref={pickerRef2}
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
import  React, { useState, useRef  } from "react";
import { Picker,Cell } from '@nutui/nutui-react';

interface pickerRefState {
  updateChooseValue: (index: number, value: string, cacheValueData: any[]) => void
}
const App = () => {
  const [isVisible3, setIsVisible3] = useState(false)
  const [cityCustmer, setCityCustmer] = useState('')
  const pickerRef3 = useRef<pickerRefState>(null)
  const APIData = [
    {
      label: 1,
      array: [
        {
          label: 1,
          value: '朝陽區',
        },
        {
          label: 2,
          value: '海澱區',
        },
        {
          label: 3,
          value: '大興區',
        },
        {
          label: 4,
          value: '東城區',
        },
        {
          label: 5,
          value: '西城區',
        },
        {
          label: 6,
          value: '豐臺區',
        },
      ],
    },
    {
      label: 2,
      array: [
        {
          label: 1,
          value: '黃浦區',
        },
        {
          label: 2,
          value: '長寧區',
        },
        {
          label: 3,
          value: '普陀區',
        },
        {
          label: 4,
          value: '楊浦區',
        },
        {
          label: 5,
          value: '浦東新區',
        },
      ],
    },
  ]
  
  const [custmerCityData, setCustmerCityData] = useState([
    [
      {
        label: 1,
        value: '北京',
      },
      {
        label: 2,
        value: '上海',
      },
    ],
  ])

  const setChooseValueCustmer = (chooseData: any[]) => {
    const str = chooseData.map((item) => item.value).join('-')
    setCityCustmer(str)
    console.log('多級聯動用法選中項：', str)
  }

  const closeUpdateChooseValueCustmer = (chooseData: any[], ref) => {
    // 此處模擬查詢API，如果數據緩存了不需要再重新請求
    setTimeout(() => {
      const { label, value } = chooseData[0]
      const resItems = APIData.find((item) => item.label == label)
      if (resItems && resItems.array.length) {
        setCustmerCityData((data) => {
          const result = [...data]
          result[1] = resItems?.array || []
          return result
        })

        // 復原位置
        ref.current?.updateChooseValue(0, chooseData[0])
        ref.current?.updateChooseValue(1, chooseData[1])
      }
    }, 100)
  }

  const updateChooseValueCustmer = (index: number, resValue: IResValue, cacheValueData: any[]) => {
    // 本demo為二級聯動，所以限制只有首列變動的時候觸發事件
    if (index === 0) {
      // 此處模擬查詢API，如果數據緩存了不需要再重新請求
      const { label, value } = resValue
      setTimeout(() => {
        const resItems = APIData.find((item) => item.label == label)
        if (resItems && resItems.array.length) {
          let cityData: any[] = []
          setCustmerCityData((data) => {
            const result = [...data]
            result[1] = resItems?.array || []
            cityData = [...result]
            return result
          })
          setTimeout(() => {
            // 更新第二列位置
            pickerRef3.current?.updateChooseValue(index + 1, cityData[1]?.[0], cacheValueData)
          }, 200)
        }
      }, 100)
    }
  }
  return ( 
    <>   
      <Cell isLink onClick={() => setIsVisible3(!isVisible3)}>
        <span>
          <label>
            多級聯動
            <span>{cityCustmer}</span>
          </label>
        </span>
      </Cell>
      <Picker
        isVisible={isVisible3}
        listData={custmerCityData}
        onClose={() => setIsVisible3(false)}
        defaultValueData={[]}
        onConfirm={(list: any[]) => setChooseValueCustmer(list)}
        onChoose={(index: number, value: IResValue, list: any[]) =>
          updateChooseValueCustmer(index, value, list)
        }
        onCloseUpdate={(list: any[]) => closeUpdateChooseValueCustmer(list, pickerRef3)}
        ref={pickerRef3}
       />
    </>
  );
};  
export default App;

```
:::


## API

### Props

| 字段 | 說明 | 類型 | 默認值
|----- | ----- | ----- | ----- 
| isVisible | 是否可見 | Boolean | false
| title | 設置標題 | String | null
| listData | 列錶數據 | Array | []
| defaultValueData | 默認選中 | Array | []

## Events

| 字段 | 說明 | 回調參數 
|----- | ----- | ----- 
| onConfirm | 點擊確認按鈕時候回調 | 返回選中值
| onChoose | 每一列值變更時調用 | 依次返回this、改變的列數，改變值，當前選中值
| onCloseUpdate | 聯動時，關閉時回調 | 依次返回this、當前選中值
| onClose | 關閉時觸發 | -


## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 默認值 |
| --- | --- |
| --nutui-picker-cancel-color | ` #808080` |
| --nutui-picker-ok-color | ` $primary-color` |
| --nutui-picker-bar-cancel-font-size | `  14px` |
| --nutui-picker-bar-ok-font-size | ` 14px` |
| --nutui-picker-bar-button-padding | `  0 15px` |
| --nutui-picker-bar-title-font-size | `  16px` |
| --nutui-picker-bar-title-color | `  $title-color` |
| --nutui-picker-bar-title-font-weight | `  normal` |
| --nutui-picker-list-height`v1.4.9` | ` 252px` |
| --nutui-picker-item-height | ` 36px` |
| --nutui-picker-item-text-color | `  $title-color` |
| --nutui-picker-item-active-text-color | `  inherit` |
| --nutui-picker-item-text-font-size | `  14px` |
| --nutui-picker-item-active-line-border | `  1px solid #d8d8d8` |
| --nutui-picker-columns-item-color | `  $title-color` |
| --nutui-picker-mask-bg-img`v1.4.9` | `  linear-gradient(180deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.4)),linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.4))` |
