#  Pagination

### Intro
    
When the amount of data is too much, use pagination to separate the data.
    
### Install
``` javascript
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
      totalItems="25"
      itemsPerPage="5"
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
### Custom Button
Pass in a custom method through pageNodeRender, parameters: { number: "page number", text: "page text", active: "active page" }
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
    
| Attribute           | Description                             | Type                      | Default            |
| -------------- | -------------------------------- | ------------------------- | ----------------- |
| modelValue     | current page number                         | Number                    | -                 |
| defaultValue   | default page number                         | Number                    | 1                 |
| mode           | Display mode, optional values are: `multi`,`simple` | String                    | multi             |
| prevText       | Customize previous page button content             | String \| React.ReactNode | Previous            |
| nextText       | Customize next page button content             | String \| React.ReactNode | Next             |
| pageCount      | total pages                           | String \| Number          | Incoming/calculating based on page count |
| totalItems     | total                         | String \| Number          | 0                 |
| itemsPerPage   | records per page                       | String \| Number          | 10                |
| showPageSize   | number of pages displayed                   | String \| Number          | 5                 |
| forceEllipses  | Whether to show ellipsis                   | Boolean                   | false             |
| pageNodeRender | Used to customize page number content             | (page) => React.ReactNode | -                 |
    
### Events
    
| Event | Description           | Arguments |
| -------- | -------------- | -------- |
| onChange |  when the page number changes | value    |
