# Cascader 级联选择

### 介绍

级联选择器，用于多层级数据的选择，典型场景为省市区选择。

### 安装

```js
import { Cascader, Tabs, TabPane } from '@nutui/nutui-react';
```

## 代码演示
### 基础用法

传入`options`列表。
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

### 自定义属性名称

可通过`textKey`、`valueKey`、`childrenKey`指定属性名。

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

### 动态加载

使用`lazy`标识是否需要动态获取数据，此时不传`options`代表所有数据都需要通过`lazyLoad`加载，首次加载通过`root`属性区分，当遇到非叶子节点时会调用`lazyLoad`方法，参数为当前节点和`resolve`方法，注意`resolve`方法必须调用，不传子节点时会被当做叶子节点处理。

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


### 部分数据动态加载

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

### 自动转换

如果你的数据为可转换为树形结构的扁平结构时，可以通过`convertConfig`告诉组件需要进行自动转换，`convertConfig`接受4个参数，`topId`为顶层节点的父级id，`idKey`为节点唯一id，`pidKey`为指向父节点id的属性名，存在`sortKey`将根据指定字段调用Array.prototype.sort()进行同层排序。

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

| 参数           | 说明                                            | 类型     | 默认值 |
| ------------- | ---------------------------------------------- | -------- | ------ |
| value         | 选中值                                          | Array    | -      |
| options       | 级联数据                                         | Array    | -      |
| poppable      | 是否弹窗状态展示                                  | Boolean  | true   |
| visible       | 级联显示隐藏状态                                  | Boolean  | false  |
| lazy          | 是否开启动态加载                                  | Boolean  | false  |
| lazyLoad      | 动态加载回调，开启动态加载时生效                   | Function | -      |
| valueKey      | 自定义`options`结构中`value`的字段               | String   | -      |
| textKey       | 自定义`options`结构中`text`的字段                | String   | -      |
| childrenKey   | 自定义`options`结构中`children`的字段            | String   | -      |
| convertConfig | 当options为可转换为树形结构的扁平结构时，配置转换规则 | Object   | -      |
| title          | 标题 | String   | ''      |
| closeIconPosition | 取消按钮位置，继承 Popup 组件 | String   | "top-right"      |
| close-icon | 自定义关闭按钮，继承 Popup 组件 | String   | "close"     |
| closeable | 是否显示关闭按钮，继承 Popup 组件 | Boolean   | true     |

### Events

| 事件名     | 说明             | 回调参数           |
| ---------- | ---------------- | ------------------ |
| onChange     | 选中值改变时触发 | (value, pathNodes) |
| onPathChange | 选中项改变时触发 | (pathNodes)        |
