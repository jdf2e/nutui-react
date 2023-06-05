# Card

## Intro

Used to display product pictures, prices and other information.

## Install

```js
// react
import { Card, Price, Tag } from '@nutui/nutui-react'
```

## Demo

### Basic Usage

:::demo

```ts
import React from 'react'
import { Card, Price, Tag } from '@nutui/nutui-react'

const App = () => {
  const state = {
    src: '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
    title: 'title',
    price: '388',
    vipPrice: '378',
    shopDescription: 'description',
    delivery: 'delivery',
    shopName: 'shopName>',
  }
  return (
    <Card
      src={state.src}
      title={state.title}
      price={state.price}
      vipPrice={state.vipPrice}
      shopDescription={state.shopDescription}
      delivery={state.delivery}
      shopName={state.shopName}
    ></Card>
  )
}
export default App
```

:::

### Custom prolist

:::demo

```ts
import React from 'react'
import { Card, Price, Tag } from '@nutui/nutui-react'

const App = () => {
  const state = {
    src: '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
    title: 'title',
    price: '388',
    vipPrice: '378',
    shopDescription: 'description',
    delivery: 'delivery',
    shopName: 'shopName>',
  }
  const wordStyles = {
    padding: '0 5px',
    borderRadius: '1px',
    fontSize: '10px',
    height: '15px',
    lineHeight: '15px',
    color: '#999',
    backgroundColor: '#f2f2f7',
    marginRight: '5px',
  }
  return (
    <Card
      src={state.src}
      title={state.title}
      price={state.price}
      vipPrice={state.vipPrice}
      shopDescription={state.shopDescription}
      delivery={state.delivery}
      shopName={state.shopName}
      description={
        <div
          className="search_prolist_attr"
          style={{
            display: 'inline-flex',
            margin: '3px 0 1px',
            height: '15px',
          }}
        >
          {['tag', 'tag', 'tag'].map((item) => {
            return (
              <span style={wordStyles} className="word" key={item}>
                {item}
              </span>
            )
          })}
        </div>
      }
    ></Card>
  )
}
export default App
```

:::

### Price after custom tag

:::demo

```ts
import React from 'react'
import { Card, Price, Tag } from '@nutui/nutui-react'

const App = () => {
  const state = {
    src: '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
    title: 'title',
    price: '388',
    vipPrice: '378',
    shopDescription: 'description',
    delivery: 'delivery',
    shopName: 'shopName>',
  }
  const tagStyles = {
    display: 'inline-block',
    verticalAlign: 'middle',
    marginRight: '5px',
    marginLeft: '2px',
    height: '14px',
  }
  return (
    <Card
      src={state.src}
      title={state.title}
      price={state.price}
      vipPrice={state.vipPrice}
      shopDescription={state.shopDescription}
      delivery={state.delivery}
      shopName={state.shopName}
      priceTag={
        <img
          style={tagStyles}
          src="https://img11.360buyimg.com/jdphoto/s58x28_jfs/t9451/359/415622649/15318/b0943e5d/59a78495N3bd2a9f8.png"
          alt=""
        />
      }
    ></Card>
  )
}
export default App
```

:::

### Custom Content

:::demo

```ts
import React from 'react'
import { Card, Price, Tag } from '@nutui/nutui-react'

const App = () => {
  const state = {
    src: '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
    title: 'title',
    price: '388',
    vipPrice: '378',
    shopDescription: 'description',
    delivery: 'delivery',
    shopName: 'shopName>',
  }
  return (
    <Card
      src={state.src}
      title={state.title}
      price={state.price}
      vipPrice={state.vipPrice}
      shopDescription={state.shopDescription}
      delivery={state.delivery}
      shopName={state.shopName}
      tag={<div>Custom Content</div>}
    ></Card>
  )
}
export default App
```

:::

### Customize bottom right content

:::demo

```ts
import React from 'react'
import { Card, Price, Tag } from '@nutui/nutui-react'

const App = () => {
  const state = {
    src: '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
    title: 'title',
    price: '388',
    vipPrice: '378',
    shopDescription: 'description',
    delivery: 'delivery',
    shopName: 'shopName>',
  }

  return (
    <Card
      src={state.src}
      title={state.title}
      price={state.price}
      vipPrice={state.vipPrice}
      shopDescription={state.shopDescription}
      delivery={state.delivery}
      shopName={state.shopName}
      extra={<div style={{ fontSize: '12px' }}>custom</div>}
    ></Card>
  )
}
export default App
```

:::

## Card

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| src | Left thumb image | `string` | `-` |
| title | Title | `string` | `-` |
| price | Price | `string` | `-` |
| vipPrice | vip-price | `string` | `-` |
| shopDescription | shop-description | `string` | `-` |
| delivery | delivery | `string` | `-` |
| shopName | shop-name | `string` | `-` |
| description | Custom product introduction | `ReactNode` | `-` |
| priceTag | Custom content behind the price | `ReactNode` | `-` |
| tag | Custom shop introduction | `ReactNode` | `-` |
| extra | Customize bottom right content | `ReactNode` | `-` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-card-font-size-0 | The font size of the card label | `$font-size-0` |
| \--nutui-card-left-border-radius | The size of the rounded corners of the card picture | `0` |
| \--nutui-card-left-background-color | The background color of the card picture | `inherit` |