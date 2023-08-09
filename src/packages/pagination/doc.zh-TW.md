# Pagination 分頁

## 介紹

當數據量較多時，採用分頁的形式分隔長列錶。

## 安裝

```tsx
import { Pagination } from '@nutui/nutui-react';
```

## 代碼演示

### 基礎用法

通過 value 來綁定當前頁碼時，組件為受控狀態，分頁顯示取決於傳入的 value ，一般搭配 onChange 使用。 不需要受控時，可通過 defaultValue 指定當前頁碼 

:::demo

```tsx
import React, { useState } from 'react'
import { Pagination } from '@nutui/nutui-react';

const App = () => {
  const [currentPage1, setCurrentPage1] = useState(1)
  const pageChange1 = (v: number) => {
    const c = v
    setCurrentPage1(c)
  }
  return (
    <Pagination
      value={currentPage1}
      total={25}
      pageSize={5}
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

```tsx
import React, { useState } from 'react'
import { Pagination } from '@nutui/nutui-react';

const App = () => {
  const [currentPage2, setCurrentPage2] = useState(1)
  const pageChange2 = (v: number) => {
    const c = v
    setCurrentPage2(c)
  }
  return (
    <Pagination
      value={currentPage2}
      total={12}
      pageSize={1}
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

```tsx
import React, { useState } from 'react'
import { Pagination } from '@nutui/nutui-react';

const App = () => {
  const [currentPage3, setCurrentPage3] = useState(1)
  const pageChange3 = (v: number) => {
    const c = v
    setCurrentPage3(c)
  }
  return (
    <Pagination
      value={currentPage3}
      total={125}
      itemSize={2}
      ellipse
      onChange={pageChange3}
    />
  )
}
export default App;
```

:::

### 自定義按鈕

通過itemRender傳入自定義方法，入參數為page:{ number:頁數, text:"文本", active:"選中狀態" } 

:::demo

```tsx
import React, { useState } from 'react'
import { Pagination} from '@nutui/nutui-react'; 
import { Left, Right } from '@nutui/icons-react';

const App = () => {
  const [currentPage4, setCurrentPage4] = useState(1)
  const pageChange4 = (v: number) => {
    const c = v
    setCurrentPage4(c)
  }
  const itemRender = (page: any) => {
    return <div>{page.number === 3 ? 'hot' : page.text}</div>
  }
  return (
    <Pagination
      value={currentPage4}
      total={500}
      itemSize={5}
      onChange={pageChange4}
      itemRender={itemRender} 
      prev={<Left />}
      next={<Right />}
    />
  )
}
export default App;
```

:::

### 非受控方式

:::demo

```tsx
import React, { useState } from 'react'
import { Pagination } from '@nutui/nutui-react'; 

const App = () => {
  const pageChange5 = (v: number) => {
    console.log(v)
  }
  return (
    <Pagination
      defaultValue={15}
      total={500}
      pageSize={10}
      itemSize={3}
      onChange={pageChange5}
    />
  )
}
export default App;
```

:::

## Pagination

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| value | 當前頁碼，受控值，與 onChange 搭配使用 | `number` | `-` |
| defaultValue | 默認頁碼，非受控 | `number` | `1` |
| mode | 顯示模式 | `multi` \| `simple` | `multi` |
| prev | 自定義上一頁按鈕內容 | `ReactNode` | `上一頁` |
| next | 自定義下一頁按鈕內容 | `ReactNode` | `下一頁` |
| total | 總記錄數 | `number` | `50` |
| pageSize | 每頁記錄數 | `number` | `10` |
| itemSize | 顯示的頁碼個數 | `number` | `5` |
| ellipse | 是否顯示省略號 | `boolean` | `false` |
| itemRender | 用於自定義頁碼的結構 | `(page: {number, text}) => ReactNode` | `-` |
| onChange | 頁碼改變時觸發 | `(value) => void` | `-` |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-pagination-color | 頁碼字色 |  `$color-primary` |
| \--nutui-pagination-font-size | 頁碼字號 | `$font-size` |
| \--nutui-pagination-item-border-color | 邊框顏色 | `$color-border` |
| \--nutui-pagination-disable-color | 不可用色 | `$color-text-disable` |
| \--nutui-pagination-disable-background-color | 不可用背景色 | `$color-text-disable` |
| \--nutui-pagination-item-border-width | 邊框寬度 | `1px` |
| \--nutui-pagination-item-border-radius | 邊框圓角 | `2px` |
| \--nutui-pagination-prev-next-padding | padding 值 | `0 11px` |