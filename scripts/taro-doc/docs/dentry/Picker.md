---
sidebar_class_name: hasIcon
---

# Picker 选择器

:::info 兼容性
仅支持H5及小程序，JDRN、鸿蒙端待支持
:::

提供多个选项集合供用户选择其中一项。

## 引入

```tsx
import { Picker } from '@dongdesign/ui'
```

## 示例代码

### 基础用法

```tsx
import React, { useState } from 'react'
import { Picker, Cell } from '@nutui/nutui-react-taro'

interface PickerOption {
  text: string | number
  value: string | number
  disabled?: boolean
  children?: PickerOption[]
  className?: string | number
}

const Demo1 = () => {
  const [visible, setVisible] = useState(false)
  const [baseDesc, setBaseDesc] = useState('')
  const listData1 = [
    [
      { value: 1, text: '南京市' },
      { value: 2, text: '无锡市' },
      { value: 3, text: '海北藏族自治区' },
      { value: 4, text: '北京市' },
      { value: 5, text: '连云港市' },
      { value: 8, text: '大庆市' },
      { value: 9, text: '绥化市' },
      { value: 10, text: '潍坊市' },
      { value: 12, text: '乌鲁木齐市' },
    ],
  ]
  const changePicker = (list: any[], option: any, columnIndex: number) => {
    console.log(columnIndex, option)
  }
  const confirmPicker = (
    options: PickerOption[],
    values: (string | number)[]
  ) => {
    let description = ''
    options.forEach((option: any) => {
      description += ` ${option.text}`
    })
    setBaseDesc(description)
  }
  return (
    <>
      <Cell
        title="请选择城市"
        description={baseDesc}
        onClick={() => setVisible(!visible)}
      />
      <Picker
        title="请选择城市"
        visible={visible}
        options={listData1}
        onConfirm={(list, values) => confirmPicker(list, values)}
        onClose={() => setVisible(false)}
        onChange={changePicker}
      />
    </>
  )
}
export default Demo1
```

### 默认选中项

```tsx
import React, { useState } from 'react'
import { Picker, Cell } from '@nutui/nutui-react-taro'

interface PickerOption {
  text: string | number
  value: string | number
  disabled?: boolean
  children?: PickerOption[]
  className?: string | number
}
const Demo2 = () => {
  const [visible, setVisible] = useState(false)
  const [baseDefault, setbaseDefault] = useState('')
  const [defaultValue] = useState([2])

  const listData1 = [
    [
      { value: 1, text: '南京市' },
      { value: 2, text: '无锡市' },
      { value: 3, text: '海北藏族自治区' },
      { value: 4, text: '北京市' },
      { value: 5, text: '连云港市' },
      { value: 8, text: '大庆市' },
      { value: 9, text: '绥化市' },
      { value: 10, text: '潍坊市' },
      { value: 12, text: '乌鲁木齐市' },
    ],
  ]
  const confirmPicker = (
    options: PickerOption[],
    values: (string | number)[]
  ) => {
    let description = ''
    options.forEach((option: any) => {
      description += ` ${option.text}`
    })
    setbaseDefault(description)
  }
  return (
    <>
      <Cell
        title="请选择城市"
        description={baseDefault}
        onClick={() => setVisible(!visible)}
      />
      <Picker
        title="请选择城市"
        visible={visible}
        options={listData1}
        defaultValue={defaultValue}
        onConfirm={(list, values) => confirmPicker(list, values)}
        onClose={() => setVisible(false)}
      />
    </>
  )
}
export default Demo2
```

### 受控

```tsx
import React, { useState } from 'react'
import { Picker, Cell } from '@nutui/nutui-react-taro'

interface PickerOption {
  text: string | number
  value: string | number
  disabled?: boolean
  children?: PickerOption[]
  className?: string | number
}
const Demo3 = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [baseDesc, setBaseDesc] = useState('')
  const [val, setVal] = useState<Array<number | string>>([])
  const options = [
    [
      { value: 1, text: '南京市' },
      { value: 2, text: '无锡市' },
      { value: 3, text: '海北藏族自治区' },
      { value: 4, text: '北京市' },
      { value: 5, text: '连云港市' },
      { value: 8, text: '大庆市' },
      { value: 9, text: '绥化市' },
      { value: 10, text: '潍坊市' },
      { value: 12, text: '乌鲁木齐市' },
    ],
  ]
  const confirmPicker = (
    options: PickerOption[],
    values: (string | number)[]
  ) => {
    let description = ''
    options.forEach((option: any) => {
      description += ` ${option.text}`
    })
    setBaseDesc(description)
  }
  return (
    <>
      <Cell
        title="请选择城市"
        description={baseDesc}
        onClick={() => setIsVisible(!isVisible)}
      />
      <Picker
        title="请选择城市"
        visible={isVisible}
        value={val}
        options={options}
        onConfirm={(list, values) => {
          confirmPicker(list, values)
          setVal(values)
        }}
        onClose={() => {
          setIsVisible(false)
        }}
      />
    </>
  )
}
export default Demo3
```

### 多列样式

```tsx
import React, { useState } from 'react'
import { Picker, Cell } from '@nutui/nutui-react-taro'

interface PickerOption {
  text: string | number
  value: string | number
  disabled?: boolean
  children?: PickerOption[]
  className?: string | number
}
const Demo4 = () => {
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
  const confirmPicker = (
    options: PickerOption[],
    values: (string | number)[]
  ) => {
    let description = ''
    options.forEach((option: any) => {
      description += ` ${option.text}`
    })
    setMutilDesc(description)
  }
  const changePicker = (options: any[], values: any, columnIndex: number) => {
    console.log('picker onChange', columnIndex, values, options)
  }
  return (
    <>
      <Cell
        title="多列用法"
        description={mutilDesc}
        onClick={() => setIsVisible2(!isVisible2)}
      />
      <Picker
        visible={isVisible2}
        options={listData2}
        onClose={() => setIsVisible2(false)}
        defaultValue={['Wednesday']}
        onChange={changePicker}
        onConfirm={(list, values) => confirmPicker(list, values)}
      />
    </>
  )
}
export default Demo4
```

### 平铺展示

通过设置 `threeDimensional` 取消 3D 展示效果，并且通过设置 `duration` 可以控制快速滚动的时长。

```tsx
import React, { useState } from 'react'
import { Picker, Cell } from '@nutui/nutui-react-taro'

interface PickerOption {
  text: string | number
  value: string | number
  disabled?: boolean
  children?: PickerOption[]
  className?: string | number
}
const Demo5 = () => {
  const [tileDesc, settileDesc] = useState('')
  const [isVisible, setIsVisible] = useState(false)

  const listData1 = [
    [
      { value: 1, text: '南京市' },
      { value: 2, text: '无锡市' },
      { value: 3, text: '海北藏族自治区' },
      { value: 4, text: '北京市' },
      { value: 5, text: '连云港市' },
      { value: 8, text: '大庆市' },
      { value: 9, text: '绥化市' },
      { value: 10, text: '潍坊市' },
      { value: 12, text: '乌鲁木齐市' },
    ],
  ]

  const confirmPicker = (
    options: PickerOption[],
    values: (string | number)[]
  ) => {
    let description = ''
    options.forEach((option: any) => {
      description += ` ${option.text}`
    })
    settileDesc(description)
    setIsVisible(false)
  }
  const changePicker = (options: any[], values: any, columnIndex: number) => {
    console.log('picker onChange', columnIndex, values, options)
  }
  return (
    <>
      <Cell
        title="请选择城市"
        description={tileDesc}
        onClick={() => setIsVisible(!isVisible)}
      />
      <Picker
        visible={isVisible}
        options={listData1}
        onConfirm={(list, values) => confirmPicker(list, values)}
        defaultValue={[2]}
        threeDimensional={false}
        duration={1000}
        onClose={() => setIsVisible(false)}
        onChange={changePicker}
      />
    </>
  )
}
export default Demo5
```

### 多级联动

```tsx
import React, { useState } from 'react'
import { Picker, Cell } from '@nutui/nutui-react-taro'

interface PickerOption {
  text: string | number
  value: string | number
  disabled?: boolean
  children?: PickerOption[]
  className?: string | number
}
const Demo6 = () => {
  const [isVisible, setIsVisible] = useState(false)
  const customCityData = [
    {
      value: 1,
      text: '北京',
      children: [
        {
          value: 1,
          text: '朝阳区',
        },
        {
          value: 2,
          text: '海淀区',
        },
        {
          value: 3,
          text: '大兴区',
        },
        {
          value: 4,
          text: '东城区',
        },
        {
          value: 5,
          text: '西城区',
        },
        {
          value: 6,
          text: '丰台区',
        },
      ],
    },
    {
      value: 2,
      text: '上海',
      children: [
        {
          value: 1,
          text: '黄埔区',
        },
        {
          value: 2,
          text: '长宁区',
        },
        {
          value: 3,
          text: '普陀区',
        },
        {
          value: 4,
          text: '杨浦区',
        },
        {
          value: 5,
          text: '浦东新区',
        },
      ],
    },
  ]
  const [asyncData] = useState([
    {
      value: 1,
      text: '北京市',
      children: [
        { value: 1, text: '朝阳区' },
        { value: 2, text: '海淀区' },
        { value: 3, text: '大兴区' },
        { value: 4, text: '东城区' },
        { value: 5, text: '西城区' },
        { value: 6, text: '丰台区' },
      ],
    },
    {
      value: 2,
      text: '上海市',
      children: [],
    },
  ])
  const [cityCustom, setCityCustom] = useState('')

  const setChooseValueCustom = (
    options: PickerOption[],
    values: (string | number)[]
  ) => {
    const str = options.map((item) => item.text).join('-')
    setCityCustom(str)
  }
  return (
    <>
      <Cell
        title="多级联动"
        description={cityCustom}
        onClick={() => setIsVisible(!isVisible)}
      />

      <Picker
        visible={isVisible}
        options={customCityData}
        onClose={() => setIsVisible(false)}
        onConfirm={(list, values) => setChooseValueCustom(list, values)}
        onChange={(
          options: PickerOption[],
          value: (string | number)[],
          columnIndex: number
        ) => console.log(asyncData, '多级联动', columnIndex, value, options)}
      />
    </>
  )
}
export default Demo6
```

### 异步获取

```tsx
import React, { useState } from 'react'
import { Picker, Cell } from '@nutui/nutui-react-taro'

interface PickerOption {
  text: string | number
  value: string | number
  disabled?: boolean
  children?: PickerOption[]
  className?: string | number
}
const Demo7 = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [asyncDesc, setasyncDesc] = useState('')
  const [asyncData, setAsyncData] = useState([
    {
      value: 1,
      text: '北京市',
      children: [
        { value: 1, text: '朝阳区' },
        { value: 2, text: '海淀区' },
        { value: 3, text: '大兴区' },
        { value: 4, text: '东城区' },
        { value: 5, text: '西城区' },
        { value: 6, text: '丰台区' },
      ],
    },
    {
      value: 2,
      text: '上海市',
      children: [],
    },
  ])
  const updateChooseValueCustmer = (
    options: PickerOption[],
    values: (string | number)[],
    columnIndex: number
  ) => {
    console.log('updateChooseValueCustmer', columnIndex, values, options)
    if (columnIndex === 0 && values[0] === 2) {
      setTimeout(() => {
        if (asyncData[1].children.length === 0) {
          asyncData[1].children = [
            {
              value: 1,
              text: '黄埔区',
            },
            {
              value: 2,
              text: '长宁区',
            },
            {
              value: 3,
              text: '普陀区',
            },
            {
              value: 4,
              text: '杨浦区',
            },
            {
              value: 5,
              text: '浦东新区',
            },
          ]
          setAsyncData([...asyncData])
        }
      }, 100)
    }
  }
  const setAsyncConfirm = (
    options: PickerOption[],
    values: (string | number)[]
  ) => {
    const str = options.map((item) => item.text).join('-')
    setasyncDesc(str)
  }

  return (
    <>
      <Cell
        title="请选择城市"
        description={asyncDesc}
        onClick={() => setIsVisible(!isVisible)}
      />
      <Picker
        visible={isVisible}
        options={asyncData}
        onClose={() => setIsVisible(false)}
        onConfirm={(list, values) => setAsyncConfirm(list, values)}
        onChange={(
          selectedOptions: PickerOption[],
          selectedValue: (string | number)[],
          columnIndex: number
        ) =>
          updateChooseValueCustmer(selectedOptions, selectedValue, columnIndex)
        }
      />
    </>
  )
}
export default Demo7
```

### 自定义主题

```tsx
import React, { useState } from 'react'
import { Picker, Cell, ConfigProvider } from '@nutui/nutui-react-taro'

interface PickerOption {
  text: string | number
  value: string | number
  disabled?: boolean
  children?: PickerOption[]
  className?: string | number
}
const Demo8 = () => {
  const [isVisible, setIsVisible] = useState(false)
  const options = [
    [
      { value: 1, text: '南京市' },
      { value: 2, text: '无锡市' },
      { value: 3, text: '海北藏族自治区' },
      { value: 4, text: '北京市' },
      { value: 5, text: '连云港市' },
      { value: 8, text: '大庆市' },
      { value: 9, text: '绥化市' },
      { value: 10, text: '潍坊市' },
      { value: 12, text: '乌鲁木齐市' },
    ],
  ]

  const [baseDesc, setBaseDesc] = useState('')

  const confirmPicker = (
    options: PickerOption[],
    values: (string | number)[]
  ) => {
    console.log('demo 确定', options, values)
    let description = ''
    options.forEach((option: any) => {
      description += ` ${option.text}`
    })
    setBaseDesc(description)
    setIsVisible(false)
  }

  return (
    <>
      <Cell
        title="请选择城市"
        description={baseDesc}
        onClick={() => setIsVisible(!isVisible)}
      />
      <ConfigProvider
        theme={{
          nutuiPickerItemHeight: '48px',
          nutuiPickerItemActiveLineBorder:
            '1px dashed var(--nutui-color-primary)',
          nutuiPickerItemTextColor: 'var(--nutui-color-primary)',
        }}
      >
        <Picker
          title="请选择城市"
          visible={isVisible}
          options={options}
          onConfirm={(list, values) => confirmPicker(list, values)}
          onClose={() => {
            setIsVisible(false)
            console.log('onclose')
          }}
        />
      </ConfigProvider>
    </>
  )
}
export default Demo8
```

## Picker

### Props

| 属性 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| visible | 是否可见 | `boolean` | `false` |
| title | 设置标题 | `string` | `-` |
| options | 列表数据 | `Array` | `[]` |
| value | 选中值，受控 | `Array` | `[]` |
| defaultValue | 默认选中 | `Array` | `[]` |
| threeDimensional | 是否开启3D效果 | `boolean` | `true` |
| duration | 快速滑动时惯性滚动的时长，单位 ms | `string` \| `number` | `1000` |
| popupProps | 透传popup属性 | `object` | `-` |
| closeOnOverlayClick | 是否点击遮罩关闭 | `boolean` | `true` |
| onConfirm | 点击确认按钮时候回调 | `(options, value) => void` | `-` |
| onChange | 每一列值变更时调用 | `(options, value) => void` | `-` |
| onCancel | 点击取消按钮时触发 | `() => void` | `-` |
| onClose | 确定和取消时，都触发 | `(options, value) => void` | `-` |
| afterClose | 联动时，关闭时回调 | `(options, value) => void` | `-` |

### options 数据结构

| 属性 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| text | 选项的文字内容 | `string` \| `number` | `-` |
| value | 选项对应的值，且唯一 | `string` \| `number` | `-` |
| children | 用于级联选项 | `Array` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| :--- | :--- | :--- |
| \--nutui-picker-title-cancel-color | 取消文案的色值 | `$text-color` |
| \--nutui-picker-title-cancel-font-size | 取消字号 | `14px` |
| \--nutui-picker-title-ok-color | 確認文案的色值 | `$color-primary` |
| \--nutui-picker-title-ok-font-size | 确认字号 | `14px` |
| \--nutui-picker-list-height | 面板高度 | `252px` |
| \--nutui-picker-item-height | 面板每一条数据高度 | `36px` |
| \--nutui-picker-item-text-color | 面板每一条数据的字色 | `$color-title` |
| \--nutui-picker-item-text-font-size | 面板每条数据字号 | `14px` |
| \--nutui-picker-item-active-line-border | 面板当前选中的border值 | `1px solid #d8d8d8` |
