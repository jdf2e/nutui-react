# ActionSheet 动作面板

## 介绍

从底部弹出的动作菜单面板。

## 安装

```ts
import { ActionSheet } from '@nutui/nutui-react-taro';
```

## 代码演示

### 基本用法

:::demo

```tsx
import  React, { useState } from "react";
import { ActionSheet,Cell } from '@nutui/nutui-react-taro';

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
      name: '权限设置',
    },
    {
      name: '重命名',
    },
    {
      name: '删除',
    },
  ]
  const chooseItem = (item: any) => {
    setVal1(item.name)
    setIsVisible1(false)
  }

  return ( 
    <>   
      <Cell  onClick={() => setIsVisible1(!isVisible1)}>
        <span>基础用法</span>
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

### 展示取消按钮

:::demo

```tsx
import  React, { useState } from "react";
import { ActionSheet,Cell } from '@nutui/nutui-react-taro';

const App = () => {
  const [isVisible2, setIsVisible2] = useState(false)
  const [val2, setVal2] = useState('')
  const optionsOne: ItemType<string>[] = [
    {
      name: '权限设置',
    },
    {
      name: '重命名',
    },
    {
      name: '删除',
    },
  ]
  const chooseItemTwo = (item: Item) => {
    setVal2(item.name)
    setIsVisible2(false)
  }
  return ( 
    <>   
    <Cell  onClick={() => setIsVisible2(!isVisible2)}>
      <span>展示取消按钮</span>
      <div style={{ marginLeft: '10px' }}>{val2}</div>
    </Cell>
            
    <ActionSheet
      visible={isVisible2}
      cancelText="取消"
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

### 展示描述信息

:::demo

```tsx
import  React, { useState } from "react";
import { ActionSheet,Cell } from '@nutui/nutui-react-taro';

const App = () => {
  const [isVisible3, setIsVisible3] = useState(false)
  const [val3, setVal3] = useState('')
  const optionsTwo: ItemType<string>[] = [
    {
      name: '权限设置',
    },
    {
      name: '重命名',
    },
    {
      name: '删除',
      description: '删除后无法恢复',
    },
  ]
  const chooseItemThree = (item: Item) => {
    setVal3(item.name)
    setIsVisible3(false)
  }
  return ( 
    <>   
    <Cell  onClick={() => setIsVisible3(!isVisible3)}>
      <span>展示描述信息</span>
      <div style={{ marginLeft: '10px' }}>{val3}</div>
    </Cell>
    <ActionSheet
      visible={isVisible3}
      title='标题'
      description="请选择操作动作"
      cancelText="取消"
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

### 选项状态

:::demo

```tsx
import  React, { useState } from "react";
import { ActionSheet,Cell } from '@nutui/nutui-react-taro';

const App = () => {
  const [isVisible4, setIsVisible4] = useState(false)
  const optionsThree: ItemType<string | boolean>[] = [
    {
      name: '着色选项',
      danger: true
    },
    {
      name: '禁用选项',
      disable: true,
    },
  ]
  return ( 
    <>   
    <Cell  onClick={() => setIsVisible4(!isVisible4)}>
      <span>选项状态</span>
    </Cell>
    <ActionSheet
      visible={isVisible4}
      cancelText="取消"
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

### 自定义内容

:::demo

```tsx
import  React, { useState } from "react";
import { ActionSheet,Cell } from '@nutui/nutui-react-taro';

const App = () => {
  const [isVisible5, setIsVisible5] = useState(false)
  return ( 
    <>   
      <Cell  onClick={() => setIsVisible5(!isVisible5)}>
        <span>自定义内容</span>
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
          新建表格
        </div>
        <div style={{ textAlign: 'left', padding: '10px 20px' }}>
          新建文档
        </div>
      </ActionSheet>
    </>
  );
};  
export default App;

```

:::

### 自定义key

:::demo

```tsx
import  React, { useState } from "react";
import { ActionSheet,Cell } from '@nutui/nutui-react-taro';

const App = () => {
  const [isVisible6, setIsVisible6] = useState(false)
  const optionsFour: ItemType<string | boolean>[] = [
    {
      title: '着色选项',
      danger: true
    },
    {
      title: '禁用选项',
      disable: true,
    },
  ]
  const optionKey = {
    name: 'title',
  }
  return ( 
    <>   
      <Cell  onClick={() => setIsVisible6(!isVisible6)}>
        <span>自定义key</span>
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

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| visible | 遮罩层可见 | `boolean` | `false` |
| title | 设置列表面板标题 | `string` | `-` |
| description | 设置列表面板副标题/描述 | `string` | `-` |
| options | 列表项 | `Array` | `[]` |
| optionKey | 列表项的自定义设置 | `{ [key: string]: string }` | `-` |
| cancelText | 取消文案 | `string` | `取消` |
| onSelect | 选择之后触发 | `(item: any, index: number) => void` | `-` |
| onCancel | 点击取消文案时触发 | `() => void` | `-` |

### options

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 列表项的标题key值 | `string` | `-` |
| description | 列表项的描述key值 | `string` | `-` |
| danger | 高亮颜色 | `string` | `$primary-color` |
| disable | 禁用状态 | `string` | `$disable-color` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-actionsheet-border-color | 标题和取消位置的border色值 | `#f6f6f6` |
| \--nutui-actionsheet-item-text-align | 列表项的文字对齐方式 | `center` |
| \--nutui-actionsheet-item-border-bottom | 列表项的底部border | `none` |
| \--nutui-actionsheet-item-line-height | 列表项行高 | `24px` |
| \--nutui-actionsheet-item-color | 列表项字色 | `$title-color` |
| \--nutui-actionsheet-item-danger | 列表项danger字色 | `$primary-color` |