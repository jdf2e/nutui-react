#  Pagination

### Intro
    
When the amount of data is too much, use pagination to separate the data.
    
### Install
``` javascript
// react
import { Pagination } from '@nutui/nutui-react';
```    

### Basic Usage

When the current page number is bound by modelValue, the component is in a controlled state, and the paging display depends on the incoming modelValue, which is generally used with onChange.
When it does not need to be controlled, the current page number can be specified through defaultCurrentPage

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
      total="25"
      pageSize="5"
      onChange={pageChange1}
    />
  )
}
export default App;
```
:::
### Simple mode
Pagination can be switched to simple mode with simple mode attribute, and pagination cann't display specific page buttons.
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

### Show ellipses 
The ellipses button will display after with force-ellipses attribute, click it can jump quickly.
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
      total="125"
      itemSize="3"
      ellipse
      onChange={pageChange3}
    />
  )
}
export default App;
```
:::
### Custom Button
Pass in a custom method through itemRender, parameters: { number: "page number", text: "page text", active: "active page" }
:::demo
``` tsx
import React, { useState } from 'react'
import { Pagination} from '@nutui/nutui-react'; 
import { Left, Right } from '@nutui/icons-react';

const App = () => {
  const [currentPage4, setCurrentPage4] = useState(1)
  const pageChange4 = (v: any) => {
    const c = v
    setCurrentPage4(c)
  }
  const itemRender = (page: any) => {
    return <div>{page.number === 3 ? 'hot' : page.text}</div>
  }
  return (
    <Pagination
      modelValue={currentPage4}
      total="500"
      itemSize="5"
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
    
## API
    
### Props
    
| Attribute           | Description                             | Type                      | Default            |
| -------------- | -------------------------------- | ------------------------- | ----------------- |
| modelValue     | current page number                         | number                    | -                 |
| defaultValue   | default page number                         | number                    | `1`                 |
| mode           | Display mode, optional values are: `multi`,`simple` | string                    | `multi`             |
| prev       | Customize previous page button content             | string \| ReactNode | `Previous`            |
| next       | Customize next page button content             | string \| ReactNode | `Next`             |
| pageCount      | total pages                           | string \| number          | Incoming/calculating based on page count |
| total     | total                         | string \| number          | `0`                 |
| pageSize   | records per page                       | string \| number          | `10`                |
| itemSize   | number of pages displayed                   | string \| number          | `5`                 |
| ellipse  | Whether to show ellipsis                   | boolean                   | `false`             |
| itemRender | Used to customize page number content             | (page) => ReactNode | -                 |
    
### Events
    
| Event | Description           | Arguments |
| -------- | -------------- | -------- |
| onChange |  when the page number changes | `value`    |


## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| --nutui-pagination-color | `$primary-color` |
| --nutui-pagination-font-size | `$font-size-2` |
| --nutui-pagination-item-border-color | `#e4e7eb` |
| --nutui-pagination-disable-color | `$disable-color` |
| --nutui-pagination-disable-background-color | `#f7f8fa` |
| --nutui-pagination-item-border-width | `1px` |
| --nutui-pagination-item-border-radius | `2px` |
| --nutui-pagination-prev-next-padding | `0 11px` |
