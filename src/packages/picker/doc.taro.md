# Picker 选择器

## 介绍

提供多个选项集合供用户选择其中一项。

## 安装

```tsx
import { Picker } from '@nutui/nutui-react-taro';
```

## 代码演示

### 基础用法

:::demo

```tsx
import  React, { useState  } from "react";
import { Picker,Cell } from '@nutui/nutui-react-taro';

const App = () => {
  const [visible, setVisible] = useState(false)
  const [baseDesc, setBaseDesc] = useState('')
  const listData1 = [
    [
      { value: 1, text: '南京市',},
      { value: 2, text: '无锡市',},
      { value: 3, text: '海北藏族自治区',},
      { value: 4, text: '北京市',},
      { value: 5, text: '连云港市',},
      { value: 8, text: '大庆市',},
      { value: 9, text: '绥化市',},
      { value: 10,text: '潍坊市',},
      { value: 12,text: '乌鲁木齐市'},
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
      <Cell title="请选择城市" description={baseDesc} onClick={() => setVisible(!visible)}/>
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
import { Picker, Cell } from '@nutui/nutui-react-taro';

const App = () => {
  const [visible, setVisible] = useState(false)
  const [baseDefault, setbaseDefault] = useState('')
  const [defaultValue, setDefaultValue] = useState([2])
  const listData1 = [
    [
      { value: 1, text: '南京市',},
      { value: 2, text: '无锡市',},
      { value: 3, text: '海北藏族自治区',},
      { value: 4, text: '北京市',},
      { value: 5, text: '连云港市',},
      { value: 8, text: '大庆市',},
      { value: 9, text: '绥化市',},
      { value: 10,text: '潍坊市',},
      { value: 12,text: '乌鲁木齐市'},
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
      <Cell title="请选择城市" description={baseDefault} onClick={() => setVisible(!visible)}/>
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
import { Picker,Cell } from '@nutui/nutui-react-taro';

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

### 平铺展示

通过设置 `threeDimensional` 取消 3D 展示效果，并且通过设置 `duration` 可以控制快速滚动的时长。

:::demo

```tsx
import  React, { useState  } from "react";
import { Picker,Cell } from '@nutui/nutui-react-taro';

const App = () => {
  const [visible, setIsVisible] = useState(false)
  const [tileDesc, settileDesc] = useState('')
  const options = [
    [
      { value: 1, text: '南京市',},
      { value: 2, text: '无锡市',},
      { value: 3, text: '海北藏族自治区',},
      { value: 4, text: '北京市',},
      { value: 5, text: '连云港市',},
      { value: 8, text: '大庆市',},
      { value: 9, text: '绥化市',},
      { value: 10,text: '潍坊市',},
      { value: 12,text: '乌鲁木齐市'},
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
      <Cell title="请选择城市" description={settileDesc} onClick={() => setIsVisible(!visible)}/>
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

### 多级联动

:::demo

```tsx
import  React, { useState  } from "react";
import { Picker,Cell } from '@nutui/nutui-react-taro';

const App = () => {
  const [visible, setIsVisible] = useState(false)
  const [cityCustmer, setCityCustmer] = useState('')
  const [custmerCityData, setCustmerCityData] = useState([
    {
      value: 1,
      text: '北京市',
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
      text: '上海市',
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
      <Cell title="多级联动" description={cityCustmer} onClick={() => setIsVisible(!visible)}/>
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
              '选择用户',
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

### 动态获取

:::demo

```tsx
import  React, { useState  } from "react";
import { Picker,Cell } from '@nutui/nutui-react-taro';

const App = () => {
  const [visible, setIsVisible] = useState(false)
  const [asyncDesc, setasyncDesc] = useState('')
  const [asyncData, setCustmerCityData] = useState([
    {
      value: 1,
      text: '北京市',
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
            { value: 1, text: '黄浦区',},
            { value: 2, text: '长宁区',},
            { value: 3, text: '普陀区',},
            { value: 4, text: '杨浦区',},
            { value: 5, text: '浦东新区',}]
            
            setAsyncData([...asyncData])
        }
      }, 100)
    }
  }
 
  return ( 
    <>   
      <Cell title="请选择城市" description={asyncDesc} onClick={() => setIsVisible(!visible)}/>
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

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| visible | 是否可见 | `boolean` | `false` |
| title | 设置标题 | `string` | `-` |
| options | 列表数据 | `Array` | `[]` |
| value | 选中值，受控 | `Array` | `[]` |
| defaultValue | 默认选中 | `Array` | `[]` |
| threeDimensional | 是否开启3D效果 | `boolean` | `true` |
| duration | 快速滑动时惯性滚动的时长，单位 ms | `string`  \|  `number` | `1000` |
| popupProps | 透传popup属性 | `object` | `-` |
| onConfirm | 点击确认按钮时候回调 | `(options, value) => void` | `-` |
| onChange | 每一列值变更时调用 | `(options, value) => void` | `-` |
| onClose | 关闭时触发 | `(options, value) => void` | `-` |
| afterClose | 联动时，关闭时回调 | `(options, value) => void` | `-` |

### options 数据结构

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| text | 选项的文字内容 | `string`  \|  `number` | `-` |
| value | 选项对应的值，且唯一 | `string`  \|  `number` | `-` |
| children | 用于级联选项 | `Array` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-picker-bar-cancel-color | 取消文案的色值 | `#808080` |
| \--nutui-picker-bar-ok-color | 确认文案的色值 | `$primary-color` |
| \--nutui-picker-bar-cancel-font-size | 取消字号 | `14px` |
| \--nutui-picker-bar-ok-font-size | 确认字号 | `14px` |
| \--nutui-picker-bar-button-padding | 取消和确认的padding值 | `0 15px` |
| \--nutui-picker-bar-title-font-size | 标题字号 | `16px` |
| \--nutui-picker-bar-title-color | 标题色值 | `$title-color` |
| \--nutui-picker-bar-title-font-weight | 标题字重 | `normal` |
| \--nutui-picker-list-height | 面板高度 | `252px` |
| \--nutui-picker-item-height | 面板每一条数据高度 | `36px` |
| \--nutui-picker-item-text-color | 面板每一条数据的字色 | `$title-color` |
| \--nutui-picker-item-active-text-color | 面板当前选中数据的字色 | `inherit` |
| \--nutui-picker-item-text-font-size | 面板每条数据字号 | `14px` |
| \--nutui-picker-item-active-line-border | 面板当前选中的border值 | `1px solid #d8d8d8` |
| \--nutui-picker-mask-bg-img | 面板数据区域的遮罩层背景 | `linear-gradient(180deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.4)),linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.4))` |