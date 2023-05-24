#  Card 

### Intro

Used to display product pictures, prices and other information.

### Install

```js
// react
import { Card, Price, Tag } from '@nutui/nutui-react';
```


## Demo

### Basic Usage

:::demo

```ts
import  React from "react";
import { Card,Price, Tag } from '@nutui/nutui-react';

const App = () => {
    const state = {
    imgUrl:
      '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
    title: 'title',
    price: '388',
    vipPrice: '378',
    shopDesc: 'description',
    delivery: 'delivery',
    shopName: 'shopName>',
  }
  return (
    <Card
        imgUrl={state.imgUrl}
        title={state.title}
        price={state.price}
        vipPrice={state.vipPrice}
        shopDesc={state.shopDesc}
        delivery={state.delivery}
        shopName={state.shopName}
    ></Card>
  );
};
export default App;
```

:::

### Custom prolist

:::demo

```ts
import  React from "react";
import { Card,Price, Tag } from '@nutui/nutui-react';

const App = () => {
    const state = {
    imgUrl:
      '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
    title: 'title',
    price: '388',
    vipPrice: '378',
    shopDesc: 'description',
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
        imgUrl={state.imgUrl}
        title={state.title}
        price={state.price}
        vipPrice={state.vipPrice}
        shopDesc={state.shopDesc}
        delivery={state.delivery}
        shopName={state.shopName}
        prolistTpl={
        <div
            className="search_prolist_attr"
            style={{ display: 'inline-flex', margin: '3px 0 1px', height: '15px' }}
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
  );
};
export default App;

```

:::

### Price after custom tag

:::demo

```ts
import  React from "react";
import { Card,Price, Tag } from '@nutui/nutui-react';

const App = () => {
    const state = {
    imgUrl:
      '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
    title: 'title',
    price: '388',
    vipPrice: '378',
    shopDesc: 'description',
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
        imgUrl={state.imgUrl}
        title={state.title}
        price={state.price}
        vipPrice={state.vipPrice}
        shopDesc={state.shopDesc}
        delivery={state.delivery}
        shopName={state.shopName}
        originTpl={
        <img
            style={tagStyles}
            src="https://img11.360buyimg.com/jdphoto/s58x28_jfs/t9451/359/415622649/15318/b0943e5d/59a78495N3bd2a9f8.png"
            alt=""
        />
        }
    ></Card>
  );
};
export default App;
```

:::

### Custom Content

:::demo
```ts
import  React from "react";
import { Card,Price, Tag } from '@nutui/nutui-react';

const App = () => {
    const state = {
    imgUrl:
      '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
    title: 'title',
    price: '388',
    vipPrice: '378',
    shopDesc: 'description',
    delivery: 'delivery',
    shopName: 'shopName>',
  }
  return (
    <Card
        imgUrl={state.imgUrl}
        title={state.title}
        price={state.price}
        vipPrice={state.vipPrice}
        shopDesc={state.shopDesc}
        delivery={state.delivery}
        shopName={state.shopName}
        shopTagTpl={<div>Custom Content</div>}
    ></Card>
  );
};
export default App;
```

:::

### Customize bottom right content

:::demo

```ts
import  React from "react";
import { Card,Price, Tag } from '@nutui/nutui-react';

const App = () => {
    const state = {
    imgUrl:
      '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
    title: 'title',
    price: '388',
    vipPrice: '378',
    shopDesc: 'description',
    delivery: 'delivery',
    shopName: 'shopName>',
  }
  
  return (
    <Card
        imgUrl={state.imgUrl}
        title={state.title}
        price={state.price}
        vipPrice={state.vipPrice}
        shopDesc={state.shopDesc}
        delivery={state.delivery}
        shopName={state.shopName}
        footerTpl={<div style={{ fontSize: '12px' }}>custom</div>}
    ></Card>
  );
};
export default App;
```

:::


## API

### Props


| Property | Description               | Type   | Default  |
|---------|--------------------------------------------|---------|-----------|
| imgUrl   | Left thumb image                                  | string  | -         |
| title     | Title                   | string  | -    |
| price | Price                         | string  | -      |
| vipPrice     | vip-price                               | string | -    |
| shopDesc  | shop-description                                   | string | -    |
| delivery     | delivery | string  | -      |
| shopName   | shop-name| string  | -      |
| prolistTpl   | Custom product introduction| ReactNode  | -      |
| originTpl   | Custom content behind the price| ReactNode  | -      |
| shopTagTpl   | Custom shop introduction| ReactNode  | -      |
| footerTpl   | Customize bottom right content| ReactNode  | -      |





## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| --nutui-card-font-size-0 | `$font-size-0` |
| --nutui-card-font-size-1 | `$font-size-1` |
| --nutui-card-font-size-2 | `$font-size-2` |
| --nutui-card-font-size-3 | `$font-size-3` |
| --nutui-card-left-border-radius | `0` |
| --nutui-card-left-background-color | `inherit` |
