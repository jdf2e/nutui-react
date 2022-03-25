# ActionSheet 动作面板


### 介绍
从底部弹出的动作菜单面板。

### 安装

```ts
import { ActionSheet } from '@nutui/nutui-react';
```
## 代码示例

### 基本用法

默认

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
      name: '选项一',
    },
    {
      name: '选项二',
    },
    {
      name: '选项三',
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
        <label>基础用法</label>
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
### 展示取消按钮

:::demo
```tsx
import  React, { useState } from "react";
import { ActionSheet,Cell } from '@nutui/nutui-react';

const App = () => {
  const [isVisible2, setIsVisible2] = useState(false)
  const [val2, setVal2] = useState('')
  const menuItemsOne: ItemType<string>[] = [
    {
      name: '选项一',
    },
    {
      name: '选项二',
    },
    {
      name: '选项三',
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
        <label>展示取消按钮</label>
      </span>
      <div className="selected-option">{val2}</div>
    </Cell>
            
    <ActionSheet
      visible={isVisible2}
      cancelTxt="取消"
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
### 展示描述信息

:::demo
```tsx
import  React, { useState } from "react";
import { ActionSheet,Cell } from '@nutui/nutui-react';

const App = () => {
  const [isVisible3, setIsVisible3] = useState(false)
  const [val3, setVal3] = useState('')
  const menuItemsTwo: ItemType<string>[] = [
    {
      name: '选项一',
    },
    {
      name: '选项二',
    },
    {
      name: '选项三',
      subname: '描述信息',
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
        <label>展示描述信息</label>
      </span>
      <div className="selected-option">{val3}</div>
    </Cell>
    <ActionSheet
      visible={isVisible3}
      description="这是一段描述信息"
      menuItems={menuItemsTwo}
      choose={chooseItemThree}
      cancelTxt="取消"
      cancel={() => setIsVisible3(false)}
     />
    </>
  );
};  
export default App;

```
:::
### 选项状态

:::demo
```tsx
import  React, { useState } from "react";
import { ActionSheet,Cell } from '@nutui/nutui-react';

const App = () => {
  const [isVisible4, setIsVisible4] = useState(false)
  const menuItemsThree: ItemType<string | boolean>[] = [
    {
      name: '着色选项',
    },
    {
      name: '禁用选项',
      disable: true,
    },
  ]
  return ( 
    <>   
    <Cell isLink onClick={() => setIsVisible4(!isVisible4)}>
      <span>
        <label>选项状态</label>
      </span>
    </Cell>
    <ActionSheet
      visible={isVisible4}
      cancelTxt="取消"
      cancel={() => setIsVisible4(false)}
      menuItems={menuItemsThree}
      chooseTagValue="着色选项"
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

| 字段             | 说明                                   | 类型    | 默认值    |
|------------------|----------------------------------------|---------|-----------|
| cancelTxt       | 取消文案                               | String  | '取消'    |
| menuItems       | 列表项                                 | Array   | [ ]       |
| optionTag       | 设置列表项展示使用参数                 | String  | 'name'    |
| visible       | 遮罩层可见                             | Boolean | false     |
| optionSubTag   | 设置列表项描述展示使用参数             | String  | 'subname' |
| chooseTagValue | 设置选中项的值，和'option-tag'的值对应 | String  | ''        |
| title            | 设置列表项标题                         | String  | ''        |
| description      | 设置列表项副标题/描述                  | String  | ''        |
| color            | 高亮颜色                               | String  | '#ee0a24' |


## Event

| 字段   | 说明               | 回调参数                          |
|--------|--------------------|-----------------------------------|
| choose | 选择之后触发       | 选中列表项item, 选中的索引值index |
| cancel | 点击取消文案时触发 | 无                                |