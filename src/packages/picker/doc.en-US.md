#  Picker

### Intro

The picker component is usually used with Popup Component.

### Install
```ts
import { Picker } from '@nutui/nutui-react';
```


### Basic Usage

:::demo
```tsx
import  React, { useState  } from "react";
import { Picker,Cell } from '@nutui/nutui-react';

const App = () => {
  const [isVisible1, setIsVisible1] = useState(false)
  const [baseDesc, setBaseDesc] = useState('')
  const listData1 = [
    [
      { value: 1, text: 'NanJing',},
      { value: 2, text: 'WuXi',},
      { value: 3, text: 'ZangZu',},
      { value: 4, text: 'BeiJing',},
      { value: 5, text: 'LianYunGang',},
      { value: 6, text: 'ZheJiang',},
      { value: 7, text: 'JiangSu',},
      { value: 8, text: 'DaQing',},
      { value: 9, text: 'SuiHua',},
      { value: 10,text: 'WeiFang',},
      { value: 11,text: 'Please Choose',},
      { value: 12,text: 'Urumqi Municipality'},
    ],
  ]
  const changePicker = (columnIndex: number, option: any, list: any[]) => {
    console.log(columnIndex, option)
  }
  const confirmPicker = (values: (string | number)[],options: PickerOption[]) => {
    let desc = ''
    options.forEach((option: any) => {
      desc += option.text
    })
    setBaseDesc(desc)
  }
  return ( 
    <>   
      <Cell title="Choose City" desc={baseDesc} onClick={() => setIsVisible1(!isVisible1)}/>
      <Picker
        isVisible={isVisible1}
        listData={listData1}
        onConfirm={(values, list) => confirmPicker(values, list)}
        onClose={() => setIsVisible1(false)}
        onChange={changePicker}
       />
    </>
  );
};  
export default App;

```
:::


### Default Index

:::demo
```tsx
import  React, { useState  } from "react";
import { Picker,Cell } from '@nutui/nutui-react';

const App = () => {
  const [isVisible1, setIsVisible1] = useState(false)
  const [baseDefault, setbaseDefault] = useState('')
  const listData1 = [
    [
      { value: 1, text: 'NanJing',},
      { value: 2, text: 'WuXi',},
      { value: 3, text: 'ZangZu',},
      { value: 4, text: 'BeiJing',},
      { value: 5, text: 'LianYunGang',},
      { value: 6, text: 'ZheJiang',},
      { value: 7, text: 'JiangSu',},
      { value: 8, text: 'DaQing',},
      { value: 9, text: 'SuiHua',},
      { value: 10,text: 'WeiFang',},
      { value: 11,text: 'Please Choose',},
      { value: 12,text: 'Urumqi Municipality'},
    ],
  ]
  const confirmPicker = (values: (string | number)[],options: PickerOption[]) => {
    let desc = ''
    options.forEach((option: any) => {
      desc += option.text
    })
    setbaseDefault(desc)
  }
  return ( 
    <>   
      <Cell title="Choose City" desc={baseDefault} onClick={() => setIsVisible1(!isVisible1)}/>
      <Picker
        isVisible={isVisible1}
        listData={listData1}
        onConfirm={(values, list) => confirmPicker(values, list)}
        onClose={() => setIsVisible1(false)}
       />
    </>
  );
};  
export default App;

```
:::

### Multiple Columns

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
      { text: 'Monday', value: 'Monday' },
      { text: 'Tuesday', value: 'Tuesday' },
      { text: 'Wednesday', value: 'Wednesday' },
      { text: 'Thursday', value: 'Thursday' },
      { text: 'Friday', value: 'Friday' },
    ],
    // 第二列
    [
      { text: 'Morning', value: 'Morning' },
      { text: 'Afternoon', value: 'Afternoon' },
      { text: 'Evening', value: 'Evening' },
    ],
  ]
  const confirmPicker = (values: (string | number)[],options: PickerOption[]) => {
    let desc = ''
    options.forEach((option: any) => {
      desc += option.text
    })
    setbaseDefault(desc)
  }
  return ( 
    <>   
    <Cell title="Multiple Columns" desc={mutilDesc} onClick={() => setIsVisible2(!isVisible2)} />
    <Picker
      isVisible={isVisible2}
      listData={listData2}
      onClose={() => setIsVisible2(false)}
      defaultValueData={['Wednesday']}
      onConfirm={(values, list) => confirmPicker(values, list)}
     />
    </>
  );
};  
export default App;

```
:::

### Tile

:::demo
```tsx
import  React, { useState  } from "react";
import { Picker,Cell } from '@nutui/nutui-react';

const App = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [tileDesc, settileDesc] = useState('')
  const listData = [
    [
      { value: 1, text: 'NanJing',},
      { value: 2, text: 'WuXi',},
      { value: 3, text: 'ZangZu',},
      { value: 4, text: 'BeiJing',},
      { value: 5, text: 'LianYunGang',},
      { value: 6, text: 'ZheJiang',},
      { value: 7, text: 'JiangSu',},
      { value: 8, text: 'DaQing',},
      { value: 9, text: 'SuiHua',},
      { value: 10,text: 'WeiFang',},
      { value: 11,text: 'Please Choose',},
      { value: 12,text: 'Urumqi Municipality'},
    ],
  ]
  const confirmPicker = (values: (string | number)[],options: PickerOption[]) => {
    let desc = ''
    options.forEach((option: any) => {
      desc += option.text
    })
    settileDesc(desc)
  }
  return ( 
    <>   
      <Cell title="Choose City" desc={settileDesc} onClick={() => setIsVisible(!isVisible)}/>
      <Picker
        isVisible={isVisible}
        listData={listData}
        threeDimensional={false}
        onConfirm={(values, list) => confirmPicker(values, list)}
        onClose={() => setIsVisible(false)}
       />
    </>
  );
};  
export default App;

```
:::
### Cascade

:::demo
```tsx
import  React, { useState  } from "react";
import { Picker,Cell } from '@nutui/nutui-react';


const App = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [cityCustmer, setCityCustmer] = useState('')
  const [custmerCityData, setCustmerCityData] = useState([
    {
      value: 1,
      text: 'BeiJing',
      children: [
        { value: 1, text: 'ChaoYang',},
        { value: 2, text: 'HaiDian',},
        { value: 3, text: 'DaXing',},
        { value: 4, text: 'DongCheng',},
        { value: 5, text: 'XiCheng',},
        { value: 6, text: 'FengTai',},
      ],
    },
    {
      value: 2,
      text: 'ShangHai',
      children: [
        { value: 1, text: 'HuangPu',},
        { value: 2, text: 'ChangNing',},
        { value: 3, text: 'PuTuo',},
        { value: 4, text: 'YangPu',},
        { value: 5, text: 'PuDong',},
      ],
    },
  ])

  const setChooseValueCustmer = (values: (string | number)[],chooseData: PickerOption[]) => {
    const str = chooseData.map((item) => item.text).join('-')
    setCityCustmer(str)
  }
 
  return ( 
    <>   
      <Cell title="Cascade" desc={cityCustmer} onClick={() => setIsVisible(!isVisible)}/>
      <Picker
        isVisible={isVisible}
        listData={custmerCityData}
        onClose={() => setIsVisible(false)}
        onConfirm={(values, list: PickerOption[]) =>
          setChooseValueCustmer(values, list)
        }
        onChange={(index: number, value: PickerOption, list: any[]) =>
          console.log('选择用户')
        }
       />
    </>
  );
};  
export default App;

```
:::

### Async

:::demo
```tsx
import  React, { useState  } from "react";
import { Picker,Cell } from '@nutui/nutui-react';

const App = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [asyncDesc, setasyncDesc] = useState('')
  const [asyncData, setCustmerCityData] = useState([
    {
      value: 1,
      text: 'BeiJing',
      children: [
        { value: 1, text: 'ChaoYang',},
        { value: 2, text: 'HaiDian',},
        { value: 3, text: 'DaXing',},
        { value: 4, text: 'DongCheng',},
        { value: 5, text: 'XiCheng',},
        { value: 6, text: 'FengTai',},
      ],
    },
    {
      value: 2,
      text: 'ShangHai',
      children: [],
    },
  ])

  const setAsyncConfirm = (values: (string | number)[],chooseData: PickerOption[]) => {
    const str = chooseData.map((item) => item.text).join('-')
    setasyncDesc(str)
  }

  const updateChooseValueCustmer = ( columnIndex: number, option: PickerOption) => {
    if (columnIndex === 0 && option.value === 2) {
      setTimeout(() => {
        if(asyncData[1].children.length === 0){
          asyncData[1].children = [
            { value: 1, text: 'HuangPu',},
            { value: 2, text: 'ChangNing',},
            { value: 3, text: 'PuTuo',},
            { value: 4, text: 'YangPu',},
            { value: 5, text: 'PuDong',}]
            
            setAsyncData([...asyncData])
        }
      }, 100)
    }
  }
 
  return ( 
    <>   
      <Cell title="Choose City" desc={asyncDesc} onClick={() => setIsVisible(!isVisible)}/>
      <Picker
        isVisible={isVisible}
        listData={asyncData}
        onClose={() => setIsVisible(false)}
        onConfirm={(values, list: PickerOption[]) =>
          setAsyncConfirm(values, list)
        }
        onChange={(columnIndex: number, option: PickerOption) =>
          updateChooseValueCustmer(columnIndex, option)
        }
       />
    </>
  );
};  
export default App;

```
:::


## API

### Props

| Attribute         | Description                             | Type   | Default           |
| ----- | ----- | ----- | ----- |
| isVisible | Is Show  | Boolean | false
| title | Toolbar title | String | null
| listData |  Columns data | Array | []
| defaultValueData | Default Index  | Array | []
| threeDimensional          | Turn on 3D effects                | Boolean  | true   |


## listData 
| Attribute         | Description                             | Type   | Default           |
|--------------|----------------------------------|--------|------------------|
| text        | Text of column               | String|Number |               |
| value          | Value of column              | String|Number |            |
| children         | Cascader Option               | Array | -                |


## Events

| Event | Description           | Arguments     |
|-----          | ----- | ----- |
| onConfirm     | Emitted when click confirm button. | { selectedValue, selectedOptions } |
| onChange      | Emitted when current option changed. | { columnIndex, selectedValue, selectedOptions } |
| onCloseUpdate | Emitted when cascade changed.   | selectedValue |
| onClose       | Emitted when click close button. | { selectedValue, selectedOptions }  |
