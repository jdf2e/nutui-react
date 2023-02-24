#  Collapse 折疊面板

### 介紹

將內容放置在多個折疊面板中，點擊面板標題可展開或收縮內容。

### 安裝

```ts
// react
import { Collapse,CollapseItem } from 'nutui-react'

```


## 代碼演示

### 基礎用法

:::demo
```jsx
import  React from "react";
import { Collapse,CollapseItem } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
    <Collapse activeName={['1', '2']} icon="arrow-down" iconSize="16" iconColor="#999">
      <CollapseItem title="標題1" name="1">
        Nutui-React 是一套擁有京東風格的輕量級的 React 組件庫
      </CollapseItem>
      <CollapseItem title="標題2" name="2">
        在產品的功能、體驗、易用性和靈活性等各個方面做了全面的升級！
      </CollapseItem>
      <CollapseItem title="標題3" name="3" disabled>
        全面使用 TypeScipt
      </CollapseItem>
    </Collapse>
    </>
  );
};
export default App;
```
:::
### 無icon樣式，綁定點擊事件

:::demo
```tsx
import React, { useState } from 'react'
import { Collapse ,CollapseItem} from '@nutui/nutui-react'

const App = () => {
  const changeEnv = (isOpen: boolean, name: string) => {
    console.log(isOpen, name)
  }
  return (  
  <Collapse activeName={['1', '2']} change={(isOpen, name) => changeEnv(isOpen, name)}>
    <CollapseItem title="標題1" name="1">
      Nutui-React 是一套擁有京東風格的輕量級的 React 組件庫
    </CollapseItem>
    <CollapseItem title="標題2" name="2">
      在產品的功能、體驗、易用性和靈活性等各個方面做了全面的升級！
    </CollapseItem>
    <CollapseItem title="標題3" name="3">
      全面使用 TypeScipt
    </CollapseItem>
  </Collapse>
  )
}
export default App;
```
:::

### 手風琴模式

:::demo
```tsx
import React from 'react'
import { Collapse ,CollapseItem} from '@nutui/nutui-react'

const App = () => {
  return (  
  <Collapse activeName={['1']} accordion icon="arrow-down">
    <CollapseItem title="標題1" name="1" subTitle="文本内容">
      Nutui-React 是一套擁有京東風格的輕量級的 React 組件庫
    </CollapseItem>
    <CollapseItem title="標題2" name="2">
      在產品的功能、體驗、易用性和靈活性等各個方面做了全面的升級！
    </CollapseItem>
    <CollapseItem title="標題3" name="3">
      全面使用 TypeScipt
    </CollapseItem>
  </Collapse>
  )
}
export default App;
```
:::
### 自定义折叠图标

:::demo
```jsx
import React from 'react'
import { Collapse ,CollapseItem} from '@nutui/nutui-react'

const App = () => {
  return (  
  <Collapse activeName={['1']} accordion icon="arrow-right2" rotate={90}>
    <CollapseItem title="标题1" name="1" icon="arrow-down">
      Nutui-React 是一套擁有京東風格的輕量級的 React 組件庫
    </CollapseItem>
    <CollapseItem title="标题2" name="2" icon="arrow-down">
      在產品的功能、體驗、易用性和靈活性等各個方面做了全面的升級！
    </CollapseItem>
    <CollapseItem title="标题3" name="3" icon="arrow-down">
      全面使用 TypeScipt
    </CollapseItem>
  </Collapse>
  )
}
export default App;
```
:::
### 自定義title圖標

:::demo
```jsx
import React from 'react'
import { Collapse ,CollapseItem} from '@nutui/nutui-react'

const App = () => {
  return (  
    <Collapse activeName={['1']} accordion icon="arrow-down">
      <CollapseItem
        title="标题1"
        name="1"
        titleIcon="checked"
        titleIconSize="16"
        titleIconColor="red"
        titleIconPosition="left"
      >
       Nutui-React 是一套擁有京東風格的輕量級的 React 組件庫
      </CollapseItem>
      <CollapseItem
        title="标题2"
        name="2"
        titleIcon="heart-fill"
        titleIconColor="red"
        titleIconPosition="right"
      >
        在產品的功能、體驗、易用性和靈活性等各個方面做了全面的升級！
      </CollapseItem>
      <CollapseItem title="标题3" name="3" icon="arrow-down">
        全面使用 TypeScipt
      </CollapseItem>
    </Collapse>
  )
}
export default App;
```
:::
### 動態改變數據

:::demo
```jsx
import React, { useState } from 'react'
import { Collapse ,CollapseItem,Button} from '@nutui/nutui-react'

const App = () => {
  const [currIndex, setCurrIndex] = useState(2)
  const [domData, setDomData] = useState([
    {
      title: '標題1',
      name: '1',
      data: 'Nutui-React 是一套擁有京東風格的輕量級的 React 組件庫',
    },
    {
      title: '標題12',
      name: '2',
      data: 'Nutui-React 是一套擁有京東風格的輕量級的 React 組件庫',
    },
    {
      title: '標題13',
      name: '3',
      data: 'Nutui-React 是一套擁有京東風格的輕量級的 React 組件庫',
    },
  ])
  const changeEnv = (isOpen: boolean, name: string) => {
    console.log(isOpen, name)
  }
  const changeData = () => {
    const newData = [
      {
        title: '標題21',
        name: '1',
        data: '在產品的功能、體驗、易用性和靈活性等各個方面做了全面的升級！',
      },
      {
        title: '標題22',
        name: '2',
        data: '在產品的功能、體驗、易用性和靈活性等各個方面做了全面的升級！',
      },
      {
        title: '標題23',
        name: '3',
        data: '在產品的功能、體驗、易用性和靈活性等各個方面做了全面的升級！',
      },
    ]
    setDomData(newData)
    setCurrIndex(3)
  }
  return (
    <>
    <Collapse activeName={currIndex} accordion>
      {domData.map((item, index) => {
        return (
          <CollapseItem title={item.title} name={item.name} key={index}>
            {item.data}
          </CollapseItem>
        )
      })}
    </Collapse>
    <Button type="primary" size="small" onClick={() => changeNewData()}>
          改变数据
        </Button>
        <Button type="info" size="small" onClick={() => changeOldData()}>
          还原数据
        </Button>
    </>
  )
}
  export default App;
```
:::


## API

### Collapse Prop

| 參數         | 說明                              | 類型   | 默認值         |
|--------------|----------------------------------|--------|------------------|
| activeName   |當前展開面板的 name               | 手風琴模式：string/number 非手風琴模式：(string/number)[] | - |
| accordion    | 是否開啟手風琴模式                | boolean | false  |
| icon         | 圖標鏈接/或使用 NutUI 的 icon      | String | -                |
| iconSize     | 圖標大小                          | String      | '16px' |
| iconColor    | 圖標顏色                          | String | ''              |
| rotate       | 點擊折疊和展開的旋轉角度,在自定義圖標模式下生效| string/number | 180 |


### CollapseItem Prop

| 參數         | 說明                             | 類型   |  默認值           |
|--------------|----------------------------------|--------|------------------|
| name   | 唯一標識符，必填                         |string \ number | - |
| title    | 標題欄左側內容                   | string | ''  |
| disabled    | 標題欄是否禁用                 | boolean | false  |
| subTitle    | 標題欄副標題             | string | ''  |
| titleIcon    | 標題圖標鏈接/或使用 NutUI 的 icon             | string | ''  |
| titleIconColor    |標題圖標顏色          | string | ''  |
| titleIconSize    | 標題圖標大小        | string | ''  |
| titleIconPosition    | 標題圖標位置             | string | ''  |



### Events

| 事件名 | 說明           | 回調參數     |
|--------|----------------|--------------|
| change`廢棄`  | 切換面板時觸發 | isOpen:是否打開狀態；name：當前點擊的name值 |
| onChange `v1.3.8` | 切換面板時觸發 | isOpen:是否打開狀態；name：當前點擊的name值 |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 默認值 |
| --- | --- |
| --nutui-collapse-item-padding`v1.4.8` | `  13px 36px 13px 26px` |
| --nutui-collapse-item-font-size`v1.4.8` | `  $font-size-2` |
| --nutui-collapse-item-line-height`v1.4.8` | `  24px` |
| --nutui-collapse-item-color`v1.4.8` | ` #666666` |
| --nutui-collapse-item-disabled-color`v1.4.8` | `  #c8c9cc` |
| --nutui-collapse-item-icon-color`v1.4.8` | `  #666666` |
| --nutui-collapse-item-icon-margin-right`v1.4.8` | `  5px` |
| --nutui-collapse-item-icon-margin-left`v1.4.8` | `  5px` |
| --nutui-collapse-item-sub-title-color`v1.4.8` | `  #666666` |
| --nutui-collapse-wrapper-content-background-color`v1.4.8` | `  $white` |
| --nutui-collapse-wrapper-content-color`v1.4.8` | `  #666666` |
| --nutui-collapse-wrapper-content-font-size`v1.4.8` | `  $font-size-2` |
| --nutui-collapse-wrapper-content-line-height`v1.4.8` | `  1.5` |
| --nutui-collapse-wrapper-content-padding`v1.4.8` | `  12px 26px` |
| --nutui-collapse-wrapper-empty-content-padding`v1.4.8` | `  0 26px` |
