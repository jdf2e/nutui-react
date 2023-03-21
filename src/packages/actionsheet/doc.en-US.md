# ActionSheet 


### Intro
Action menu panel that pops up from the bottom.

### Install

```ts
// react
import { ActionSheet } from '@nutui/nutui-react';
```
## Demo

### Basic usage

:::demo
```tsx
import  React, { useState } from "react";
import { ActionSheet,Cell } from '@nutui/nutui-react';

interface Item {
  name: string
  subname?: string
  disable?: boolean
}
const App = () => {
  const [val1, setVal1] = useState('')
  const [isVisible1, setIsVisible1] = useState(false)
  const menuItemsOne: ItemType<string>[] = [
    {
      name: 'Option One',
    },
    {
      name: 'Option Two',
    },
    {
      name: 'Option Three',
    },
  ]
  const chooseItem = (itemParams: any) => {
    console.log(itemParams.name, 'itemParams')
    setVal1(itemParams.name)
    setIsVisible1(false)
  }

  return ( 
    <>   
    <Cell isLink onClick={() => setIsVisible1(!isVisible1)}>
      <span>
        <label>Basic Usage</label>
      </span>
      <div className="selected-option">{val1}</div>
    </Cell>
            
    <ActionSheet
      visible={isVisible1}
      menuItems={menuItemsOne}
      onChoose={chooseItem}
      onCancel={() => setIsVisible1(false)}
     />
    </>
  );
};  
export default App;

```
:::
### Show Cancel Button

:::demo
```tsx
import  React, { useState } from "react";
import { ActionSheet,Cell } from '@nutui/nutui-react';

const App = () => {
  const [isVisible2, setIsVisible2] = useState(false)
  const [val2, setVal2] = useState('')
  const menuItemsOne: ItemType<string>[] = [
    {
      name: 'Option One',
    },
    {
      name: 'Option Two',
    },
    {
      name: 'Option Three',
    },
  ]
  const chooseItemTwo = (itemParams: Item) => {
    setVal2(itemParams.name)
    setIsVisible2(false)
  }
  return ( 
    <>   
    <Cell isLink onClick={() => setIsVisible2(!isVisible2)}>
      <span>
        <label>Show Cancel Button</label>
      </span>
      <div className="selected-option">{val2}</div>
    </Cell>
            
    <ActionSheet
      visible={isVisible2}
      cancelText="Cancel"
      menuItems={menuItemsOne}
      onChoose={chooseItemTwo}
      onCancel={() => setIsVisible2(false)}
     />
    </>
  );
};  
export default App;

```
:::
### Display Description Information

:::demo
```tsx
import  React, { useState } from "react";
import { ActionSheet,Cell } from '@nutui/nutui-react';

const App = () => {
  const [isVisible3, setIsVisible3] = useState(false)
  const [val3, setVal3] = useState('')
  const menuItemsTwo: ItemType<string>[] = [
    {
      name: 'Option One',
    },
    {
      name: 'Option Two',
    },
    {
      name: 'Option Three',
      subname: 'Description Information',
    },
  ]
  const chooseItemThree = (itemParams: Item) => {
    setVal3(itemParams.name)
    setIsVisible3(false)
  }
  return ( 
    <>   
    <Cell isLink onClick={() => setIsVisible3(!isVisible3)}>
      <span>
        <label>Display Description Information</label>
      </span>
      <div className="selected-option">{val3}</div>
    </Cell>
    <ActionSheet
      visible={isVisible3}
      description="This is a descriptive message"
      cancelText="Cancel"
      menuItems={menuItemsTwo}
      onChoose={chooseItemThree}
      
      onCancel={() => setIsVisible3(false)}
     />
    </>
  );
};  
export default App;

```
:::
### Option Status

:::demo
```tsx
import  React, { useState } from "react";
import { ActionSheet,Cell } from '@nutui/nutui-react';

const App = () => {
  const [isVisible4, setIsVisible4] = useState(false)
  const menuItemsThree: ItemType<string | boolean>[] = [
    {
      name: 'Shading Options',
    },
    {
      name: 'Disable Option',
      disable: true,
    },
  ]
  return ( 
    <>   
    <Cell isLink onClick={() => setIsVisible4(!isVisible4)}>
      <span>
        <label>Option Status</label>
      </span>
    </Cell>
    <ActionSheet
      visible={isVisible4}
      cancelText="Cancel"
      menuItems={menuItemsThree}
      chooseTagValue="Shading Options"
      onCancel={() => setIsVisible4(false)}
      
      onChoose={() => {
        setIsVisible4(false)
      }}
     />
    </>
  );
};  
export default App;

```
:::

## Prop

| Attribute | Description | Type    | Default    |
|------------------|----------- ------|---------|-----------|
| visible       | Mask layer visible  | boolean | `false`     |
| cancelText`2.0.0`       | Cancel Text | string  | `Cancel`    |
| menuItems | Menu Item | Array   | `[]`       |
| optionTag | Set menu item display usage parameters | string  | `name`    |
| optionSubTag   | Set menu item description display usage parameters             | string  | `subname` |
| title            | Set panel title | string  | -        |
| description      | Set panel subtitle/description | string  | -        |
| chooseTagValue | Set selected item'value, corresponds to the value of 'option-tag' | string  | -        |
| color            | highlight color | string  | `#ee0a24` |


## Event

| Attribute   | Description               | Arguments                          |
|--------|--------------------|-----------------------------------|
| onChoose | Triggered after selection       | Selected list item item, selected index value index |
| onCancel | Triggered when onCancel copy is clicked | none                                |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --- | --- |
| --nutui-actionsheet-light-color | `#f6f6f6` |
| --nutui-actionsheet-item-border-bottom | `none` |
| --nutui-actionsheet-item-font-size | `$font-size-2` |
| --nutui-actionsheet-item-subdesc-font-size | `$font-size-1` |
| --nutui-actionsheet-item-cancel-border-top | `1px solid $actionsheet-light-color` |
| --nutui-actionsheet-item-line-height | `24px` |
| --nutui-actionsheet-item-font-color | `$title-color` |
