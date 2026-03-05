# QuickEnter

## Intro

QuickEnter component, a shortcut navigation list popping up from the bottom.

## Install

```tsx
import { QuickEnter } from '@nutui/nutui-react'
```

## Demo

### Basic Usage

```tsx
import React, { useState } from 'react'
import { QuickEnter, Cell, Toast } from '@nutui/nutui-react'
import {
  Message,
  Home,
  Search,
  Cart,
  Edit,
  Shop,
  Del,
} from '@nutui/icons-react'

const Demo = () => {
  const [visible, setVisible] = useState(false)
  const options = [
    { title: 'Message', icon: <Message /> },
    { title: 'Home', icon: <Home /> },
    { title: 'Search', icon: <Search /> },
    { title: 'Cart', icon: <Cart /> },
    { title: 'Feedback', icon: <Edit /> },
    { title: 'Often Buy', icon: <Shop /> },
    { title: 'Order Trash', icon: <Del /> },
  ]

  const onChange = (item: any) => {
    Toast.show(`Clicked: ${item.title}`)
  }

  return (
    <>
      <Cell title="Show QuickEnter" onClick={() => setVisible(true)} />
      <QuickEnter
        visible={visible}
        options={options}
        onClose={() => setVisible(false)}
        onChange={onChange}
      />
    </>
  )
}
export default Demo
```

### Scrollable

```tsx
import React, { useState } from 'react'
import { QuickEnter, Cell } from '@nutui/nutui-react'
import {
  Message,
  Home,
  Search,
  Cart,
  Edit,
  Shop,
  Del,
  Star,
  Heart,
  Location,
} from '@nutui/icons-react'

const Demo = () => {
  const [visible, setVisible] = useState(false)
  const options = [
    { title: 'Message', icon: <Message />, badge: 8 },
    { title: 'Home', icon: <Home /> },
    { title: 'Search', icon: <Search /> },
    { title: 'Cart', icon: <Cart /> },
    { title: 'Feedback', icon: <Edit /> },
    { title: 'Often Buy', icon: <Shop /> },
    { title: 'Order Trash', icon: <Del /> },
    { title: 'Star', icon: <Star /> },
    { title: 'Heart', icon: <Heart /> },
    { title: 'Location', icon: <Location /> },
  ]

  return (
    <>
      <Cell title="Scrollable (10 items)" onClick={() => setVisible(true)} />
      <QuickEnter
        visible={visible}
        options={options}
        onClose={() => setVisible(false)}
      />
    </>
  )
}
export default Demo
```

### Custom Close Icon

```tsx
import React, { useState } from 'react'
import { QuickEnter, Cell } from '@nutui/nutui-react'
import { Message, Home, Search, Cart, ArrowUp } from '@nutui/icons-react'

const Demo = () => {
  const [visible, setVisible] = useState(false)
  const options = [
    { title: 'Message', icon: <Message />, badge: 8 },
    { title: 'Home', icon: <Home /> },
    { title: 'Search', icon: <Search /> },
    { title: 'Cart', icon: <Cart /> },
  ]

  return (
    <>
      <Cell title="Custom Close Icon" onClick={() => setVisible(true)} />
      <QuickEnter
        visible={visible}
        options={options}
        style={{ '--nutui-quickenter-bg-color': '#fff' }}
        closeIcon={<ArrowUp width={12} height={12} />}
        onClose={() => setVisible(false)}
      />
    </>
  )
}
export default Demo
```

## API

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| visible | Whether is visible | `boolean` | `false` |
| title | Title | `ReactNode` | `快捷入口` |
| options | Option list | `QuickEnterOption[]` | `[]` |
| closeIcon | Custom close icon | `ReactNode` | `-` |
| popupProps | Passed to Popup component | `PopupProps` | `{}` |
| closeOnOverlayClick | Whether to close on overlay click | `boolean` | `true` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| onClose | Emitted when closed | `-` |
| onChange | Emitted when option is clicked | `item: QuickEnterOption, index: number` |

### QuickEnterOption Data Structure

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| title | Option title | `string` | `-` |
| icon | Option icon | `ReactNode` | `-` |
| type | Option type | `string` | `-` |
| url | Jump url | `string` | `-` |

## Theme Customization

### Style Variables

The component provides the following CSS variables for style customization, please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default |
| --- | --- |
| --nutui-quickenter-bg-color | `$f5f5f5` |
| --nutui-quickenter-max-height | `256px` |
| --nutui-quickenter-title-font-size | `$font-size-base` |
| --nutui-quickenter-title-color | `$color-title` |
| --nutui-quickenter-item-title-font-size | `$font-size-s` |
| --nutui-quickenter-item-title-color | `$color-title` |
| --nutui-quickenter-item-icon-bg-color | `$white` |
| --nutui-quickenter-item-icon-color | `$color-title` |
| --nutui-quickenter-close-icon-size | `12px` |
| --nutui-quickenter-close-icon-color | `#808080` |
