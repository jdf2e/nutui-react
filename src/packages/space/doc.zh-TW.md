# Space 間距

### 介紹

元素排列中保持相同的寬度。

### 安裝

```tsx
import { Space } from '@nutui/nutui-react';
```

## 代碼演示

### 基礎用法

:::demo

```tsx

import React from 'react';
import { Space, Button } from '@nutui/nutui-react';

 const App = () => {
  return (
    <Space>
      <Button>按鈕1</Button>
      <Button>按钮2</Button>
      <Button>按钮3</Button>
    </Space>
  );
};
export default App;

```
:::
### 換行

:::demo

```tsx
import React from 'react';
import { Space, Button } from '@nutui/nutui-react';

const App = () => {
  return (
    <Space wrap>
      <Button>按鈕1</Button>
      <Button>按钮2</Button>
      <Button>按钮3</Button>
      <Button>按钮4</Button>
      <Button>按钮5</Button>
      <Button>按钮6</Button>
    </Space>
  );
};
export default App;

```
:::
### 垂直

:::demo

```tsx
import React from 'react';
import { Space, Button } from '@nutui/nutui-react';

const App = () => {
  return (
    <Space direction="vertical">
      <Button>按鈕1</Button>
      <Button>按钮2</Button>
      <Button>按钮3</Button>
    </Space>
  );
};
export default App;

```
:::
### 間距大小

:::demo

```tsx
import React from 'react';
import { Space, Button,ConfigProvider } from '@nutui/nutui-react';

const App = () => {
  return (
    <ConfigProvider
      theme={{
        nutuiSpaceGap: '20px',
      }}
    >
      <Space direction="vertical">
        <Button>按鈕1</Button>
        <Button>按钮2</Button>
        <Button>按钮3</Button>
      </Space>
    </ConfigProvider>
  );
};
export default App;

```
:::
## Space

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| direction | 間距方嚮 | `'vertical'｜ 'horizontal'` | `'horizontal'` |
| align | 交叉軸對齊方式 | `'start'｜'end'｜'center'｜'baseline'` | `-` |
| justify | 主軸對齊方式 | `'start' ｜ 'end' ｜ 'center' ｜ 'between' ｜ 'around' ｜ 'evenly' ｜ 'stretch'` | `-` |
| wrap | 是否自動換行，僅在 horizontal 時有效 | `boolean / false` | `-` |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 默認值 | 說明 |
| --- | --- | --- |
| \--nutui-space-gap | `8px` | 间距大小 |