#  Picker 选择器

### 介绍

提供多个选项集合供用户选择其中一项。

### 安装
```ts
import { Picker } from '@nutui/nutui-react';
```


## 代码演示

### 基础用法

:::demo
```tsx
import  React, { useState  } from "react";
import { Picker,Cell } from '@nutui/nutui-react';

const App = () => {
  const [isVisible1, setIsVisible1] = useState(false)
  const [baseDesc, setBaseDesc] = useState('')
  const listData1 = [
    [
      { value: 1, text: '南京市',},
      { value: 2, text: '无锡市',},
      { value: 3, text: '海北藏族自治区',},
      { value: 4, text: '北京市',},
      { value: 5, text: '连云港市',},
      { value: 6, text: '浙江市',},
      { value: 7, text: '江苏市',},
      { value: 8, text: '大庆市',},
      { value: 9, text: '绥化市',},
      { value: 10,text: '潍坊市',},
      { value: 11,text: '请按市',},
      { value: 12,text: '乌鲁木齐市'},
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
      <Cell title="请选择城市" desc={baseDesc} onClick={() => setIsVisible1(!isVisible1)}/>
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


### 默认选中项

:::demo
```tsx
import  React, { useState  } from "react";
import { Picker,Cell } from '@nutui/nutui-react';

const App = () => {
  const [isVisible1, setIsVisible1] = useState(false)
  const [baseDefault, setbaseDefault] = useState('')
  const listData1 = [
    [
      { value: 1, text: '南京市',},
      { value: 2, text: '无锡市',},
      { value: 3, text: '海北藏族自治区',},
      { value: 4, text: '北京市',},
      { value: 5, text: '连云港市',},
      { value: 6, text: '浙江市',},
      { value: 7, text: '江苏市',},
      { value: 8, text: '大庆市',},
      { value: 9, text: '绥化市',},
      { value: 10,text: '潍坊市',},
      { value: 11,text: '请按市',},
      { value: 12,text: '乌鲁木齐市'},
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
      <Cell title="请选择城市" desc={baseDefault} onClick={() => setIsVisible1(!isVisible1)}/>
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
  const confirmPicker = (values: (string | number)[],options: PickerOption[]) => {
    let desc = ''
    options.forEach((option: any) => {
      desc += option.text
    })
    setbaseDefault(desc)
  }
  return ( 
    <>   
    <Cell title="多列用法" desc={mutilDesc} onClick={() => setIsVisible2(!isVisible2)} />
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

### 平铺展示

通过设置 `threeDimensional` 取消 3D 展示效果

:::demo
```tsx
import  React, { useState  } from "react";
import { Picker,Cell } from '@nutui/nutui-react';

const App = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [tileDesc, settileDesc] = useState('')
  const listData = [
    [
      { value: 1, text: '南京市',},
      { value: 2, text: '无锡市',},
      { value: 3, text: '海北藏族自治区',},
      { value: 4, text: '北京市',},
      { value: 5, text: '连云港市',},
      { value: 6, text: '浙江市',},
      { value: 7, text: '江苏市',},
      { value: 8, text: '大庆市',},
      { value: 9, text: '绥化市',},
      { value: 10,text: '潍坊市',},
      { value: 11,text: '请按市',},
      { value: 12,text: '乌鲁木齐市'},
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
      <Cell title="请选择城市" desc={settileDesc} onClick={() => setIsVisible(!isVisible)}/>
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
### 多级联动

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
      text: '北京',
      children: [
        { value: 1, text: '朝阳区',},
        { value: 2, text: '海淀区',},
        { value: 3, text: '大兴区',},
        { value: 4, text: '东城区',},
        { value: 5, text: '西城区',},
        { value: 6, text: '丰台区',},
      ],
    },
    {
      value: 2,
      text: '上海',
      children: [
        { value: 1, text: '黄浦区',},
        { value: 2, text: '长宁区',},
        { value: 3, text: '普陀区',},
        { value: 4, text: '杨浦区',},
        { value: 5, text: '浦东新区',},
      ],
    },
  ])

  const setChooseValueCustmer = (values: (string | number)[],chooseData: PickerOption[]) => {
    const str = chooseData.map((item) => item.text).join('-')
    setCityCustmer(str)
  }
 
  return ( 
    <>   
      <Cell title="多级联动" desc={cityCustmer} onClick={() => setIsVisible(!isVisible)}/>
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

### 动态获取

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
      text: '北京',
      children: [
        { value: 1, text: '朝阳区',},
        { value: 2, text: '海淀区',},
        { value: 3, text: '大兴区',},
        { value: 4, text: '东城区',},
        { value: 5, text: '西城区',},
        { value: 6, text: '丰台区',},
      ],
    },
    {
      value: 2,
      text: '上海',
      children: [],
    },
  ])

  const setAsyncConfirm = (values: (string | number)[],chooseData: PickerOption[]) => {
    const str = chooseData.map((item) => item.text).join('-')
    setasyncDesc(str)
  }

  const updateChooseValueCustmer = (columnIndex: number, option: PickerOption) => {
    if (columnIndex === 0) {
      const { value, text } = option
      setTimeout(() => {
        const resItems = APIData.find((item) => item.value === value)
        if (resItems && resItems.children.length) {
          setAsyncData(custmerCityData)
        }
      }, 100)
    }
  }
 
  return ( 
    <>   
      <Cell title="请选择城市" desc={asyncDesc} onClick={() => setIsVisible(!isVisible)}/>
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

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| isVisible | 是否可见 | Boolean | false
| title | 设置标题 | String | null
| listData | 列表数据 | Array | []
| defaultValueData | 默认选中 | Array | []

## Events

| 字段 | 说明 | 回调参数 
|----- | ----- | ----- 
| onConfirm | 点击确认按钮时候回调 | 返回选中值
| onChoose | 每一列值变更时调用 | 依次返回this、改变的列数，改变值，当前选中值
| onCloseUpdate | 联动时，关闭时回调 | 依次返回this、当前选中值
| onClose | 关闭时触发 | -
