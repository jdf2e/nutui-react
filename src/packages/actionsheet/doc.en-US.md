# ActionSheet

## Intro

Action menu panel that pops up from the bottom.

## Install

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
  description?: string
  disable?: boolean
}
const App = () => {
  const [val1, setVal1] = useState('')
  const [isVisible1, setIsVisible1] = useState(false)
  const optionsOne: ItemType<string>[] = [
    {
      name: 'Permission settings',
    },
    {
      name: 'Rename',
    },
    {
      name: 'Delete',
    },
  ]
  const chooseItem = (item: any) => {
    setVal1(item.name)
    setIsVisible1(false)
  }

  return ( 
    <>   
    <Cell  onClick={() => setIsVisible1(!isVisible1)}>
      <span>Basic Usage</span>
      <div style={{ marginLeft: '10px' }}>{val1}</div>
    </Cell>
            
    <ActionSheet
      visible={isVisible1}
      options={optionsOne}
        onSelect={(item) => {chooseItem(item)}}
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
  const optionsOne: ItemType<string>[] = [
    {
      name: 'Permission settings',
    },
    {
      name: 'Rename',
    },
    {
      name: 'Delete',
    },
  ]
  const chooseItemTwo = (item: Item) => {
    setVal2(item.name)
    setIsVisible2(false)
  }
  return ( 
    <>   
    <Cell  onClick={() => setIsVisible2(!isVisible2)}>
      <span>Show Cancel Button</span>
      <div style={{ marginLeft: '10px' }}>{val2}</div>
    </Cell>
            
    <ActionSheet
      visible={isVisible2}
      cancelText="Cancel"
      options={optionsOne}
      onSelect={(item)=>{chooseItemTwo(item)}}
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
  const optionsTwo: ItemType<string>[] = [
    {
      name: 'Permission settings',
    },
    {
      name: 'Rename',
    },
    {
      name: 'Delete',
      description: 'Cannot be restored after deletion'
    },
  ]
  const chooseItemThree = (item: Item) => {
    setVal3(item.name)
    setIsVisible3(false)
  }
  return ( 
    <>   
    <Cell  onClick={() => setIsVisible3(!isVisible3)}>
      <span>Display Description Information</span>
      <div style={{ marginLeft: '10px' }}>{val3}</div>
    </Cell>
    <ActionSheet
      visible={isVisible3}
      title="Title"
      description="This is a descriptive message"
      cancelText="Cancel"
      options={optionsTwo}
      onSelect={(item)=>{chooseItemThree(item)}}      
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
  const optionsThree: ItemType<string | boolean>[] = [
    {
      name: 'Shading Options',
      danger: true
    },
    {
      name: 'Disable Option',
      disable: true,
    },
  ]
  return ( 
    <>   
    <Cell  onClick={() => setIsVisible4(!isVisible4)}>
      <span>Option Status</span>
    </Cell>
    <ActionSheet
      visible={isVisible4}
      cancelText="Cancel"
      options={optionsThree}
      onCancel={() => setIsVisible4(false)}
      onSelect={() => {
        setIsVisible4(false)
      }}
     />
    </>
  );
};  
export default App;

```

:::

### Custom content

:::demo

```tsx
import  React, { useState } from "react";
import { ActionSheet,Cell } from '@nutui/nutui-react';

const App = () => {
  const [isVisible5, setIsVisible5] = useState(false)
  return ( 
    <>   
      <Cell  onClick={() => setIsVisible5(!isVisible5)}>
        <span>Custom content</span>
      </Cell>
      <ActionSheet
        visible={isVisible5}
        cancelText={translated['2cd0f3be']}
        onSelect={() => {
          setIsVisible5(false)
        }}
        onCancel={() => setIsVisible5(false)}
      >
        <div style={{ textAlign: 'left', padding: '10px 20px' }}>
          Create A Table
        </div>
        <div style={{ textAlign: 'left', padding: '10px 20px' }}>
          Create A Document
        </div>
      </ActionSheet>
    </>
  );
};  
export default App;

```

:::

### Custom key

:::demo

```tsx
import  React, { useState } from "react";
import { ActionSheet, Cell } from '@nutui/nutui-react';

const App = () => {
  const [isVisible6, setIsVisible6] = useState(false)
  const optionsFour: ItemType<string | boolean>[] = [
    {
      title: 'Shading Option',
      danger: true
    },
    {
      title: 'Disable Option',
      disable: true,
    },
  ]
  const optionKey = {
    name: 'title',
  }
  return ( 
    <>   
      <Cell  onClick={() => setIsVisible6(!isVisible6)}>
        <span>Custom key</span>
      </Cell>
      <ActionSheet
        visible={isVisible6}
        optionKey={optionKey}
        options={optionsFour}
        onSelect={() => {
          setIsVisible6(false)
        }}
        onCancel={() => setIsVisible6(false)}
      />
    </>
  );
};  
export default App;

```

:::

## ActionSheet

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| visible | Mask layer visible | `boolean` | `false` |
| title | Set panel title | `string` | `-` |
| description | Set panel subtitle/description | `string` | `-` |
| cancelText | Cancel Text | `string` | `Cancel` |
| options | Menu Item | `Array` | `[]` |
| optionKey | Menu Item Custom key | `{ [key: string]: string }` | \`\`\`\` |
| onSelect | Triggered after selection | `(item: any, index: number) => void` | `-` |
| onCancel | Triggered when onCancel copy is clicked | `() => void` | `-` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default Value |
| --- | --- | --- |
| \--nutui-actionsheet-border-color | title border-bottom and cancle border-top | `#f6f6f6` |
| \--nutui-actionsheet-item-text-align | item text align | `center` |
| \--nutui-actionsheet-item-border-bottom | item border bottom | `none` |
| \--nutui-actionsheet-item-line-height | item line height | `24px` |
| \--nutui-actionsheet-item-color | item color | `$title-color` |
| \--nutui-actionsheet-item-danger | item danger color | `$primary-color` |