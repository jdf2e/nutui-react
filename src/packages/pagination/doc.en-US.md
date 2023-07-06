# Pagination

## Intro

When the amount of data is too much, use pagination to separate the data.

## Install

```tsx
import { Pagination } from '@nutui/nutui-react';
```

## Demo

### Basic Usage

When the current page number is bound by `value`, the component is in a controlled state, and the paging display depends on the incoming `value`, which is generally used with `onChange`. When it does not need to be controlled, the current page number can be specified through `defaultValue`

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

### Simple mode

Pagination can be switched to simple mode with simple mode attribute, and pagination cann't display specific page buttons.

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

### Show ellipses

The ellipses button will display after with force-ellipses attribute, click it can jump quickly 

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

### Custom Button

Pass in a custom method through itemRender, parameters: { number: "page number", text: "page text", active: "active page" } 


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

### Uncontrolled Mode

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

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| value | current page number, controlled value | `number` | `-` |
| defaultValue | default page number, uncontrolled value | `number` | `1` |
| mode | Display mode  | `multi` \| `simple` | `multi` |
| prev | Customize previous page button content | `ReactNode` | `Previous` |
| next | Customize next page button content | `ReactNode` | `Next` |
| total | total | `number` | `50` |
| pageSize | records per page | `number` | `10` |
| itemSize | number of pages displayed | `number` | `5` |
| ellipse | Whether to show ellipsis | `boolean` | `false` |
| itemRender | Used to customize page number content | `(page: {number, text}) => ReactNode` | `-` |
| onChange | when the page number changes | `(value) => void` | `-` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-pagination-color | font color  |  `$primary-color` |
| \--nutui-pagination-font-size | font size | `$font-size-2` |
| \--nutui-pagination-item-border-color | border color  | `$gray9` |
| \--nutui-pagination-disable-color | disable color | `$disable-color` |
| \--nutui-pagination-disable-background-color | disable background color | `$gray10` |
| \--nutui-pagination-item-border-width | border width | `1px` |
| \--nutui-pagination-item-border-radius | border radius  | `2px` |
| \--nutui-pagination-prev-next-padding | padding  | `0 11px` |