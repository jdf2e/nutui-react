# ActionSheet 動作面闆

## 介紹

從底部彈出的動作菜單面闆。

## 安裝

```ts
// react
import { ActionSheet } from '@nutui/nutui-react';
```

## 代碼演示

### 基础用法

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
      name: '權限設定',
    },
    {
      name: '重命名',
    },
    {
      name: '刪除',
    },
  ]
  const chooseItem = (item: any) => {
    setVal1(item.name)
    setIsVisible1(false)
  }

  return ( 
    <>   
    <Cell  onClick={() => setIsVisible1(!isVisible1)}>
      <span>基礎用法</span>
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

### 展示取消按鈕

:::demo

```tsx
import  React, { useState } from "react";
import { ActionSheet,Cell } from '@nutui/nutui-react';

const App = () => {
  const [isVisible2, setIsVisible2] = useState(false)
  const [val2, setVal2] = useState('')
  const optionsOne: ItemType<string>[] = [
    {
      name: '權限設定',
    },
    {
      name: '重命名',
    },
    {
      name: '刪除',
    },
  ]
  const chooseItemTwo = (item: Item) => {
    setVal2(item.name)
    setIsVisible2(false)
  }
  return ( 
    <>   
    <Cell  onClick={() => setIsVisible2(!isVisible2)}>
      <span>展示取消按鈕</span>
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
import { ActionSheet,Cell } from '@nutui/nutui-react';

const App = () => {
  const [isVisible3, setIsVisible3] = useState(false)
  const [val3, setVal3] = useState('')
  const optionsTwo: ItemType<string>[] = [
    {
      name: '權限設定',
    },
    {
      name: '重命名',
    },
    {
      name: '刪除',
      description: '刪除後無法恢復',
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
      title='標題'
      description="請選擇操作動作"
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

### 選項狀態

:::demo

```tsx
import  React, { useState } from "react";
import { ActionSheet,Cell } from '@nutui/nutui-react';

const App = () => {
  const [isVisible4, setIsVisible4] = useState(false)
  const optionsThree: ItemType<string | boolean>[] = [
    {
      name: '著色選項',
      danger: true
    },
    {
      name: '禁用選項',
      disable: true,
    },
  ]
  return ( 
    <>   
    <Cell  onClick={() => setIsVisible4(!isVisible4)}>
      <span>選項狀態</span>
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

### 自定義內容

:::demo

```tsx
import  React, { useState } from "react";
import { ActionSheet,Cell } from '@nutui/nutui-react';

const App = () => {
  const [isVisible5, setIsVisible5] = useState(false)
  return ( 
    <>   
      <Cell  onClick={() => setIsVisible5(!isVisible5)}>
        <span>自定義內容</span>
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
          新建錶格
        </div>
        <div style={{ textAlign: 'left', padding: '10px 20px' }}>
          新建文檔
        </div>
      </ActionSheet>
    </>
  );
};  
export default App;

```

:::

### 自定義key

:::demo

```tsx
import  React, { useState } from "react";
import { ActionSheet,Cell } from '@nutui/nutui-react';

const App = () => {
  const [isVisible6, setIsVisible6] = useState(false)
  const optionsFour: ItemType<string | boolean>[] = [
    {
      title: '著色選項',
      danger: true
    },
    {
      title: '禁用選項',
      disable: true,
    },
  ]
  const optionKey = {
    name: 'title',
  }
  return ( 
    <>   
      <Cell  onClick={() => setIsVisible6(!isVisible6)}>
        <span>自定義key</span>
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

| 屬性 | 說明 | 類型 | 預設值 |
| --- | --- | --- | --- |
| visible | 遮罩層可見 | `boolean` | `false` |
| title | 設定列錶面闆標題 | `string` | \- |
| description | 設定列錶面闆副標題/描述 | `string` | \- |
| options | 列錶項 | `Array` | `[]` |
| optionKey | 列錶項的自定義設定 | `{ [key: string]: string }` | `-` |
| cancelText | 取消文案 | `string` | `取消` |
| onSelect | 選擇之後觸發 | `(item: any, index: number) => void` | `-` |
| onCancel | 點選取消文案時觸發 | `() => void` | `-` |

### options

| 屬性 | 說明 | 類型 | 預設值 |
| --- | --- | --- | --- |
| name | 列錶項的標題key值 | `string` | \- |
| description | 列錶項的描述key值 | `string` | \- |
| danger | 高亮顏色 | `string` | `$primary-color` |
| disable | 禁用狀態 | `string` | `$disable-color` |

## 主題定制

### 樣式變數

組件提供了下列 CSS 變數，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 預設值 |
| --- | --- | --- |
| \--nutui-actionsheet-border-color | 標題和取消位置的border色值 | `#f6f6f6` |
| \--nutui-actionsheet-item-text-align | 列錶項的文字對齊方式 | center |
| \--nutui-actionsheet-item-border-bottom | 列錶項的底部border | `none` |
| \--nutui-actionsheet-item-line-height | 列錶項行高 | `24px` |
| \--nutui-actionsheet-item-color | 列錶項字色 | `$title-color` |
| \--nutui-actionsheet-item-danger | 列錶項danger字色 | `$primary-color` |