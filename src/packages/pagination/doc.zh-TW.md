#  Pagination 分頁

### 介紹
    
當數據量較多時，採用分頁的形式分隔長列表。
    
### 安裝
``` javascript
// react
import { Pagination } from '@nutui/nutui-react';

```    

### 基礎用法
通過modelValue來綁定當前頁碼時，組件為受控狀態，分頁顯示取決於傳入的modelValue，一般搭配onChange使用。
不需要受控時，可通過defaultCurrentPage指定當前頁碼
:::demo
``` tsx
import React, { useState } from 'react'
import { Pagination } from '@nutui/nutui-react';

const App = () => {
  const [currentPage1, setCurrentPage1] = useState(1)
  const pageChange1 = (v: any) => {
    const c = v
    setCurrentPage1(c)
  }
  return (
    <Pagination
      modelValue={currentPage1}
      totalItems="25"
      itemsPerPage="5"
      onChange={pageChange1}
    />
  )
}
export default App;
```
:::
### 簡單模式
將 mode 設置為 "simple" 來切換到簡單模式，此時分頁器不會展示具體的頁碼按鈕。
:::demo
``` tsx
import React, { useState } from 'react'
import { Pagination } from '@nutui/nutui-react';

const App = () => {
  const [currentPage2, setCurrentPage2] = useState(1)
  const pageChange2 = (v: any) => {
    const c = v
    setCurrentPage2(c)
  }
  return (
    <Pagination
      modelValue={currentPage2} 
      pageCount={12} 
      mode="simple" 
      onChange={pageChange2} 
    />
  )
}
export default App;
```
:::

### 顯示省略號
設置 force-ellipses 後會展示省略號按鈕，點擊後可以快速跳轉。
:::demo
``` tsx
import React, { useState } from 'react'
import { Pagination } from '@nutui/nutui-react';

const App = () => {
  const [currentPage3, setCurrentPage3] = useState(1)
  const pageChange3 = (v: any) => {
    const c = v
    setCurrentPage3(c)
  }
  return (
    <Pagination
      modelValue={currentPage3}
      totalItems="125"
      showPageSize="3"
      forceEllipses
      onChange={pageChange3}
    />
  )
}
export default App;
```
:::
### 自定義按鈕
通過pageNodeRender傳入自定義方法，入參數為page:{ number:頁數, text:"文本", active:"選中狀態" }
:::demo
``` tsx
import React, { useState } from 'react'
import { Pagination,Icon } from '@nutui/nutui-react';

const App = () => {
  const [currentPage4, setCurrentPage4] = useState(1)
  const pageChange4 = (v: any) => {
    const c = v
    setCurrentPage4(c)
  }
  const pageNodeRender = (page: any) => {
    return <div>{page.number === 3 ? 'hot' : page.text}</div>
  }
  return (
    <Pagination
      modelValue={currentPage4}
      totalItems="500"
      showPageSize="5"
      onChange={pageChange4}
      pageNodeRender={pageNodeRender} 
      prevText={<Icon name="left"/>} 
      nextText={<Icon name="right"/>}
    />
  )
}
export default App;
```
:::
    
## API
    
### Props
    
| 屬性 | 說明 | 類型 | 預設值           |
| -------------- | -------------------------------- | ------------------------- | ----------------- |
| modelValue     | 當前頁碼                         | Number                    | -                 |
| defaultValue   | 當前頁碼                         | Number                    | 1                 |
| mode           | 顯示模式,可選值為：multi，simple  | String                    | multi             |
| prevText       | 自定義上一頁按鈕內容             | String \| React.ReactNode | 上一頁            |
| nextText       | 自定義下一頁按鈕內容             | String \| React.ReactNode | 下一頁            |
| pageCount      | 總頁數                           | String \| Number          | 傳入/根據頁數計算 |
| totalItems     | 總記錄數                         | String \| Number          | 0                 |
| itemsPerPage   | 每頁記錄數                       | String \| Number          | 10                |
| showPageSize   | 顯示的頁碼個數                   | String \| Number          | 5                 |
| forceEllipses  | 是否顯示省略號                   | Boolean                   | false             |
| pageNodeRender | 用於自定義頁碼的結構             | (page) => React.ReactNode | -                 |
    
### Events
    
| 事件名稱 | 說明 | 回調參數     |
| -------- | -------------- | -------- |
| onChange | 页码改变时触发 | value    |


## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 默認值 |
| --- | --- |
| --nutui-pagination-color | ` $primary-color` |
| --nutui-pagination-font-size | ` $font-size-2` |
| --nutui-pagination-item-border-color | `  #e4e7eb` |
| --nutui-pagination-disable-color | `  $disable-color` |
| --nutui-pagination-disable-background-color | `  #f7f8fa` |
| --nutui-pagination-item-border-width | `  1px` |
| --nutui-pagination-item-border-radius | `  2px` |
| --nutui-pagination-prev-next-padding | `  0 11px` |
