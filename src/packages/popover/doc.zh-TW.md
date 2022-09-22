# Popover 氣泡彈出框

### 介紹

點擊或在元素上懸停鼠標，彈出氣泡卡片浮層。

### 安裝

``` javascript
import { Popover } from '@nutui/nutui-react';
```

### 代碼實例

### 基本用法
Popover 支持明朗和暗黑兩種風格，默認為明朗風格，將 theme 屬性設置為 dark 可切換為暗黑風格。

:::demo
```tsx

import  React, { useState, useRef  } from "react";
import { Popover,Button,Icon } from '@nutui/nutui-react';

const App = () => {
  const [lightTheme, setLightTheme] = useState(false)
  const [darkTheme, setDarkTheme] = useState(false)
  const itemList = [
    {name: 'option1'},
    {name: 'option2'},
    {name: 'option3'},
  ]
  return (
    <>
      <Popover 
        visible={lightTheme} 
        onClick={()=>{lightTheme ? setLightTheme(false) : setLightTheme(true)}} 
        list={itemList}>
        <Button type="primary" shape="square">明朗風格</Button>
      </Popover>
      <Popover 
        visible={darkTheme} 
        theme="dark" 
        onClick={()=>{darkTheme ? setDarkTheme(false) : setDarkTheme(true)}} 
        list={itemList}>
        <Button type="primary" shape="square">暗黑風格</Button>
      </Popover>
    </>
  )
};

export default App;
```
:::

### 選項配置

:::demo
```tsx
import  React, { useState, useRef  } from "react";
import { Popover,Button,Icon } from '@nutui/nutui-react';

const App = () => {
  const [showIcon, setShowIcon] = useState(false)
  const [disableAction, setDisableAction] = useState(false)
  const iconItemList= [
    {name: 'option1',icon: 'my2'},
    {name: 'option2',icon: 'cart2'},
    {name: 'option3',icon: 'location2'}
  ];
  const itemListDisabled=[
    {name: 'option1',disabled: true},
    {name: 'option2', disabled: true},
    {name: 'option3'}
  ];

  return (
    <>
      <Popover
        visible={showIcon} 
        theme="dark" 
        onClick={()=>{showIcon ? setShowIcon(false) : setShowIcon(true)}} 
        list={iconItemList}>
        <Button type="primary" shape="square">展示圖標</Button>
      </Popover>
      <Popover 
        visible={disableAction} 
        onClick={()=>{disableAction ? setDisableAction(false) : setDisableAction(true)}} 
        list={itemListDisabled}>
        <Button type="primary" shape="square">禁用選項</Button>
      </Popover>
    </>
  );
};

export default App;
```
:::

### 自定義內容

:::demo
```tsx
import  React, { useState, useRef  } from "react";
import { Popover,Button, Icon } from '@nutui/nutui-react';

const App = () => {
  const [customized, setCustomized] = useState(false)
  const selfContent= [
    {
      name: 'service',
      desc: 'option1'
    },
    {
      name: 'notice',
      desc: 'option2'
    },
    {
      name: 'location',
      desc: 'option3'
    },
    {
      name: 'category',
      desc: 'option4'
    },
    {
      name: 'scan2',
      desc: 'option5'
    },
    {
      name: 'message',
      desc: 'option6'
    }
  ];

  return (
    <>
      <Popover 
        visible={customized} 
        onClick={()=>{customized ? setCustomized(false) : setCustomized(true)}}>
        <Button type="primary" shape="square">自定義內容</Button>
        {
          customized ? 
          <div className="self-content" style={selfContentStyle}>
          {
            selfContent.map((item: any)=>{
              return <div className="self-content-item" style={selfContentItem} key={item.name}>
                <Icon name={item.name} size="15" />
                <div className="self-content-desc" style={selfContentDesc}>{ item.desc }</div>
              </div>
            })
          }
        </div> : ''
        }
      </Popover>
    </>
  )
}

export default App;
```
:::

### 位置自定義

通過 location 屬性來控製氣泡的彈出位置。可選值
```
top           # 頂部中間位置
left          # 左側中間位置
right         # 右側中間位置
bottom        # 底部中間位置
```
自 `v1.3.0` 起新增
```
top-start     # 頂部左側位置
top-end       # 頂部右側位置 
left-start    # 左側上方位置
left-end      # 左側下方位置
right-start   # 右側上方位置
right-end     # 右側下方位置
bottom-start  # 底部左側位置
bottom-end    # 底部右側位置
```

:::demo
```tsx
  import  React, { useState, useRef  } from "react";
  import { Popover,Button } from '@nutui/nutui-react';

const App = () => {
  const [topLocation, setTopLocation] = useState(false)
  const [rightLocation, setRightLocation] = useState(false)
  const [leftLocation, setLeftLocation] = useState(false)
  const iconItemList= [
    {name: 'option1',icon: 'my2'},
    {name: 'option2',icon: 'cart2'},
    {name: 'option3',icon: 'location2'}
  ];

  return (
    <>
      <Popover  
        visible={topLocation} 
        location="top" 
        theme="dark" 
        onClick={()=>{topLocation ? setTopLocation(false) : setTopLocation(true)}} 
        list={iconItemList}>
        <Button type="primary" shape="square">向上彈出</Button>
      </Popover>
    </>
  )
}
  
export default App;
```
:::

## API

### Props

| 字段            | 說明                            | 類型     | 默認值      |
|----------------|---------------------------------|---------|------------|
| list          | 選項列表                          | List[]   | []        |
| visible      | 是否展示氣泡彈出層                 | boolean  | false     |
| theme          | 主題風格，可選值為 dark            | string   | `light`   |
| location       | 彈出位置  | string   | `bottom`  |
| offset `v1.3.0`       | 出現位置的偏移量  | number   | 20  |

### List 數據結構  

List 屬性是一個由對象構成的數組，數組中的每個對象配置一列，對象可以包含以下值：

| 鍵名            | 說明                 | 類型      | 默認值  |
|----------------|----------------------|----------|--------|
| name           | 選項文字               | string   | -      |
| icon           | nut-icon 圖標名稱      | string   | -      |
| disabled       | 是否為禁用狀態          | boolean  | false  | 

### Events

| 名稱    | 說明         |
|---------|--------------|
| onClick | 點擊菜單時觸發 |
| onChoose | 點擊選項時觸發 |



