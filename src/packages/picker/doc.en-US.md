# Picker

## Intro

The picker component is usually used with Popup Component.

## Install

```tsx
import { Picker } from '@nutui/nutui-react';
```

## Demo

### Basic Usage

:::demo

```tsx
import  React, { useState  } from "react";
import { Picker,Cell } from '@nutui/nutui-react';

const App = () => {
  const [visible, setVisible] = useState(false)
  const [baseDesc, setBaseDesc] = useState('')
  const listData1 = [
    [
      { value: 1, text: 'NanJing',},
      { value: 2, text: 'WuXi',},
      { value: 3, text: 'ZangZu',},
      { value: 4, text: 'BeiJing',},
      { value: 5, text: 'LianYunGang',},
      { value: 8, text: 'DaQing',},
      { value: 9, text: 'SuiHua',},
      { value: 10,text: 'WeiFang',},
      { value: 12,text: 'Urumqi Municipality'},
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
      <Cell title="Choose City" description={baseDesc} onClick={() => setVisible(!visible)}/>
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

### Default Index

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
      { value: 1, text: 'NanJing',},
      { value: 2, text: 'WuXi',},
      { value: 3, text: 'ZangZu',},
      { value: 4, text: 'BeiJing',},
      { value: 5, text: 'LianYunGang',},
      { value: 8, text: 'DaQing',},
      { value: 9, text: 'SuiHua',},
      { value: 10,text: 'WeiFang',},
      { value: 12,text: 'Urumqi Municipality'},
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
      <Cell title="Choose City" description={baseDefault} onClick={() => setVisible(!visible)}/>
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
  const confirmPicker = (options: PickerOption[], values: (string | number)[]) => {
    let description = ''
    options.forEach((option: any) => {
      description += option.text
    })
    setbaseDefault(description)
  }
  return ( 
    <>   
    <Cell title="Multiple Columns" description={mutilDesc} onClick={() => setIsVisible2(!isVisible2)} />
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

### Tile

:::demo

```tsx
import  React, { useState  } from "react";
import { Picker,Cell } from '@nutui/nutui-react';

const App = () => {
  const [visible, setIsVisible] = useState(false)
  const [tileDesc, settileDesc] = useState('')
  const options = [
    [
      { value: 1, text: 'NanJing',},
      { value: 2, text: 'WuXi',},
      { value: 3, text: 'ZangZu',},
      { value: 4, text: 'BeiJing',},
      { value: 5, text: 'LianYunGang',},
      { value: 8, text: 'DaQing',},
      { value: 9, text: 'SuiHua',},
      { value: 10,text: 'WeiFang',},
      { value: 12,text: 'Urumqi Municipality'},
    ],
  ]
  const confirmPicker = (values: (string | number)[],options: PickerOption[]) => {
    let description = ''
    options.forEach((option: any) => {
      description += option.text
    })
    settileDesc(description)
  }
  return ( 
    <>   
      <Cell title="Choose City" description={settileDesc} onClick={() => setIsVisible(!visible)}/>
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

### Cascade

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
      <Cell title="Cascade" description={cityCustmer} onClick={() => setIsVisible(!visible)}/>
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

### Async

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
      <Cell title="Choose City" description={asyncDesc} onClick={() => setIsVisible(!visible)}/>
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

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| visible | Is Show | `boolean` | `false` |
| title | Toolbar title | `string` | `-` |
| options | Columns data | `Array` | `[]` |
| value | Controlled Value | `Array` | `[]` |
| defaultValue | Default Index | `Array` | `[]` |
| threeDimensional | Turn on 3D effects | `boolean` | `true` |
| duration | move animation duration, ms | `string`  \|  `number` | `1000` |
| popupProps | popup props | `object` | `-` |
| onConfirm | Emitted when click confirm button. | `(options, value) => void` | `-` |
| onChange | Emitted when current option changed. | `(options, value) => void` | `-` |
| onClose | Emitted when click close button. | `(options, value) => void` | `-` |
| afterClose | Emitted when cascade changed. | `(options, value) => void` | `-` |

### options

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| text | Text of column | `string`  \|  `number` | `-` |
| value | Value of column | `string`  \|  `number` | `-` |
| children | Cascader Option | `Array` | `-` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-picker-bar-cancel-color | picker bar cancel color | `#808080` |
| \--nutui-picker-bar-ok-color | picker bar confirm color | `$primary-color` |
| \--nutui-picker-bar-cancel-font-size | picker bar cancel font size | `14px` |
| \--nutui-picker-bar-ok-font-size | picker bar confirm font size | `14px` |
| \--nutui-picker-bar-button-padding | picker bar button padding | `0 15px` |
| \--nutui-picker-bar-title-font-size | picker bar title font size | `16px` |
| \--nutui-picker-bar-title-color | picker bar title color | `$title-color` |
| \--nutui-picker-bar-title-font-weight | picker bar title font weight | `normal` |
| \--nutui-picker-list-height | picker pannel list height | `252px` |
| \--nutui-picker-item-height | picker pannel item height | `36px` |
| \--nutui-picker-item-text-color | picker pannel item text color | `$title-color` |
| \--nutui-picker-item-active-text-color | picker pannel item active text color | `inherit` |
| \--nutui-picker-item-text-font-size | picker pannel item text font size | `14px` |
| \--nutui-picker-item-active-line-border | picker pannel item active line border | `1px solid #d8d8d8` |
| \--nutui-picker-mask-bg-img | picker pannel mask background image | `linear-gradient(180deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.4)),linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.4))` |