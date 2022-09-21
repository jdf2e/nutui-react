# Cascader 級聯選擇

### 介紹

級聯選擇器，用於多層級數據的選擇，典型場景為省市區選擇。

### 安裝

```js
import { Cascader, Tabs, TabPane } from '@nutui/nutui-react';
```

## 代碼演示
### 基礎用法

傳入`options`列表。
:::demo
```jsx
import  React from "react";
import { Cascader, Tabs, TabPane } from '@nutui/nutui-react';

const App = () => {
  const [isVisibleDemo1, setIsVisibleDemo1] = useState(false)
  const [value1, setValue1] = useState([])
  const [optionsDemo1, setOptionsDemo1] = useState([
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
  const change1 = (value: any, path: any) => {
    console.log('onChange', value, path)
    setValue1(value)
  }
  const onPathChange = (value: any, path: any) => {
    console.log('onPathChange', value, path)
  }

  return (
    <>
    <Cell
      title="选择地址"
      desc={value1 || '请选择地址'}
      onClick={()=>{
        setIsVisibleDemo1(true)
      }}
     />
    <Cascader
      visible={isVisibleDemo1}
      value={value1}
      title="地址选择"
      options={optionsDemo1}
      closeable
      onClose={()=>{setIsVisibleDemo1(false)}}
      onChange={change1}
      onPathChange={onPathChange}
    />
    </>
  );
};
export default App;
```
:::

### 自定義屬性名稱

可通過`textKey`、`valueKey`、`childrenKey`指定屬性名。

:::demo
```jsx
import  React from "react";
import { Cascader, Tabs, TabPane } from '@nutui/nutui-react';

const App = () => {
  const [isVisibleDemo2, setIsVisibleDemo2] = useState(false)
  const [value2, setValue2] = useState(['福建', '福州', '台江区'])
  const [optionsDemo2, setOptionsDemo2] = useState([
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
  const change2 = (value, path) => {
    console.log('onChange', value, path)
    setValue2(value)
  }
  const onPathChange = (value, path) => {
    console.log('onPathChange', value, path)
  }

  return (
    <>
    <Cell
      title="选择地址"
      desc={value2 || '请选择地址'}
      onClick={()=>{
        setIsVisibleDemo2(true)
      }}
     />
    <Cascader
      visible={isVisibleDemo2}
      value={value2}
      title="地址选择"
      options={optionsDemo2}
      textKey="text1"
      valueKey="value1"
      childrenKey="items"
      closeable
      onClose={()=>{setIsVisibleDemo2(false)}}
      onChange={change2}
      onPathChange={onPathChange}
    />
    </>
  );
};
export default App;
```
:::

### 動態加載

使用`lazy`標識是否需要動態獲取數據，此時不傳`options`代表所有數據都需要通過`lazyLoad`加載，首次加載通過`root`屬性區分，當遇到非葉子節點時會調用`lazyLoad`方法，參數為當前節點和`resolve`方法，註意`resolve`方法必須調用，不傳子節點時會被當做葉子節點處理。

:::demo
```jsx
import  React from "react";
import { Cascader, Tabs, TabPane } from '@nutui/nutui-react';

const App = () => {
  const [isVisibleDemo3, setIsVisibleDemo3] = useState(false)
  const [value3, setValue3] = useState(['A0', 'A12', 'A23', 'A32'])

  const lazyLoadDemo3 = (node: any, resolve: (children: any) => void) => {
    setTimeout(() => {
      if (node.root) {
        resolve([
          { value: 'A0', text: 'A0' },
          { value: 'B0', text: 'B0' },
          { value: 'C0', text: 'C0' }
        ]);
      } else {
        const { value, level } = node;
        const text = value.substring(0, 1);
        const value1 = `${text}${level + 1}1`;
        const value2 = `${text}${level + 1}2`;
        const value3 = `${text}${level + 1}3`;
        resolve([
          { value: value1, text: value1, leaf: level >= 6 },
          { value: value2, text: value2, leaf: level >= 6 },
          { value: value3, text: value3, leaf: level >= 6 }
        ]);
      }
    }, 2000);
  }
  const change3 = (value, path) => {
    console.log('onChange', value, path)
    setValue3(value)
  }
  const onPathChange = (value, path) => {
    console.log('onPathChange', value, path)
  }
  return (
    <>
    <Cell
      title="选择地址"
      desc={value3 || '请选择地址'}
      onClick={()=>{
        setIsVisibleDemo3(true)
      }}
     />
    <Cascader
      visible={isVisibleDemo3}
      value={value3}
      title="地址选择"
      closeable
      onClose={()=>{setIsVisibleDemo3(false)}}
      onChange={change3}
      onPathChange={onPathChange}
      lazy
      lazyLoad={lazyLoadDemo3}
    />
    </>
  );
};
export default App;
```
:::


### 部分數據動態加載

:::demo
```jsx
import  React from "react";
import { Cascader, Tabs, TabPane } from '@nutui/nutui-react';

const App = () => {
  const [isVisibleDemo4, setIsVisibleDemo4] = useState(false)
  const [value4, setValue4] = useState([])
  const [optionsDemo4, setOptionsDemo4] = useState([
    { value: 'A0', text: 'A0' },
    {
      value: 'B0',
      text: 'B0',
      children: [
        { value: 'B11', text: 'B11', leaf: true },
        { value: 'B12', text: 'B12' }
      ]
    },
    { value: 'C0', text: 'C0' }
  ])

  const lazyLoadDemo4 = (node: any, resolve: (children: any) => void) => {
    setTimeout(() => {
      const { value, level } = node;
      const text = value.substring(0, 1);
      const value1 = `${text}${level + 1}1`;
      const value2 = `${text}${level + 1}2`;
      resolve([
        { value: value1, text: value1, leaf: level >= 2 },
        { value: value2, text: value2, leaf: level >= 1 }
      ]);
    }, 500);
  }
  const change4 = (value, path) => {
    console.log('onChange', value, path)
    setValue4(value)
  }
  const onPathChange = (value, path) => {
    console.log('onPathChange', value, path)
  }

  return (
    <>
    <Cell
      title="选择地址"
      desc={value4 || '请选择地址'}
      onClick={()=>{
        setIsVisibleDemo4(true)
      }}
     />
    <Cascader
      visible={isVisibleDemo4}
      value={value4}
      title="地址选择"
      options={optionsDemo4}
      closeable
      onClose={()=>{setIsVisibleDemo4(false)}}
      onChange={change4}
      onPathChange={onPathChange}
      lazy
      lazyLoad={lazyLoadDemo4}
    />
    </>
  );
};
export default App;
```
:::

### 自動轉換

如果你的數據為可轉換為樹形結構的扁平結構時，可以通過`convertConfig`告訴組件需要進行自動轉換，`convertConfig`接受4個參數，`topId`為頂層節點的父級id，`idKey`為節點唯一id，`pidKey`為指向父節點id的屬性名，存在`sortKey`將根據指定字段調用Array.prototype.sort()進行同層排序。

:::demo
```jsx
import  React from "react";
import { Cascader, Tabs, TabPane } from '@nutui/nutui-react';

const App = () => {
  const [isVisibleDemo5, setIsVisibleDemo5] = useState(false)
  const [value5, setValue5] = useState(['广东省', '广州市'])
  const [optionsDemo5, setOptionsDemo5] = useState([
    { value: '北京', text: '北京', id: 1, pid: null },
    { value: '朝阳区', text: '朝阳区', id: 11, pid: 1 },
    { value: '亦庄', text: '亦庄', id: 111, pid: 11 },
    { value: '广东省', text: '广东省', id: 2, pid: null },
    { value: '广州市', text: '广州市', id: 21, pid: 2 }
  ])
  const [convertConfigDemo5, setConvertConfigDemo5] = useState({
    topId: null,
    idKey: 'id',
    pidKey: 'pid',
    sortKey: ''
  })
  const change5 = (value, path) => {
    console.log('onChange', value, path)
    setValue5(value)
  }
  const onPathChange = (value, path) => {
    console.log('onPathChange', value, path)
  }

  return (
    <>
    <Cell
      title="选择地址"
      desc={value5 || '请选择地址'}
      onClick={()=>{
        setIsVisibleDemo5(true)
      }}
     />
    <Cascader
      visible={isVisibleDemo5}
      value={value5}
      title="地址选择"
      options={optionsDemo5}
      convertConfig={convertConfigDemo5}
      closeable
      onClose={()=>{setIsVisibleDemo5(false)}}
      onChange={change5}
      onPathChange={onPathChange}
    />
    </>
  );
};
export default App;
```
:::

## API

### Props

| 屬性           | 說明                                            | 類型     | 默認值 |
| ------------- | ---------------------------------------------- | -------- | ------ |
| value         | 選中值                                          | Array    | -      |
| options       | 級聯數據                                         | Array    | -      |
| visible       | 級聯顯示隱藏狀態                                  | Boolean  | false  |
| lazy          | 是否開啟動態加載                                  | Boolean  | false  |
| lazyLoad      | 動態加載回調，開啟動態加載時生效                   | Function | -      |
| valueKey      | 自定義`options`結構中`value`的字段               | String   | -      |
| textKey       | 自定義`options`結構中`text`的字段                | String   | -      |
| childrenKey   | 自定義`options`結構中`children`的字段            | String   | -      |
| convertConfig | 當options為可轉換為樹形結構的扁平結構時，配置轉換規則 | Object   | -      |
| title          | 標題 | String   | ''      |
| closeIconPosition | 取消按鈕位置，繼承 Popup 組件 | String   | "top-right"      |
| close-icon | 自定義關閉按鈕，繼承 Popup 組件 | String   | "close"     |
| closeable | 是否顯示關閉按鈕，繼承 Popup 組件 | Boolean   | true     |

### Events

| 事件名      | 說明             | 回調參數           |
| ---------- | --------------- | ------------------ |
| onChange     | 選中值改變時觸發   | (value, pathNodes) |
| onPathChange | 選中項改變時觸發   | (pathNodes)        |
