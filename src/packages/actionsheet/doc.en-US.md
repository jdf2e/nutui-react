# ActionSheet 


### Intro
Action menu panel that pops up from the bottom.

### Install

```ts
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
      choose={chooseItem}
      cancel={() => setIsVisible1(false)}
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
      cancelTxt="Cancel"
      menuItems={menuItemsOne}
      choose={chooseItemTwo}
      cancel={() => setIsVisible2(false)}
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
      menuItems={menuItemsTwo}
      choose={chooseItemThree}
      cancelTxt="Cancel"
      cancel={() => setIsVisible3(false)}
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
      cancelTxt="Cancel"
      cancel={() => setIsVisible4(false)}
      menuItems={menuItemsThree}
      chooseTagValue="Shading Options"
      choose={() => {
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

| Attribute             | Description                                   | Type    | Default    |
|------------------|----------------------------------------|---------|-----------|
| cancelTxt       | Cancel Text                               | String  | 'Cancel'    |
| menuItems       | Menu Item                                 | Array   | [ ]       |
| optionTag       | Set menu item display usage parameters                 | String  | 'name'    |
| visible       | Mask layer visible  | Boolean | false     |
| optionSubTag   | Set menu item description display usage parameters             | String  | 'subname' |
| chooseTagValue | Set selected item'value, corresponds to the value of 'option-tag' | String  | ''        |
| title            | Set menu item title                         | String  | ''        |
| description      | Set menu item subtitle/description                  | String  | ''        |
| color            | highlight color                               | String  | '#ee0a24' |


## Event

| Attribute   | Description               | Arguments                          |
|--------|--------------------|-----------------------------------|
| choose | Triggered after selection       | Selected list item item, selected index value index |
| cancel | Triggered when cancel copy is clicked | none                                |