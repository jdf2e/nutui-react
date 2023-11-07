# Space 间距

### 介绍

元素排列中保持相同的宽度。

### 安装

```tsx
import { Space } from '@nutui/nutui-react';
```

## 代码演示

### 基础用法

:::demo

```tsx

import React from 'react';
import { Space, Button } from '@nutui/nutui-react';

 const App = () => {
  return (
    <Space>
      <Button>按钮1</Button>
      <Button>按钮2</Button>
      <Button>按钮3</Button>
    </Space>
  );
};
export default App;

```
:::

### 换行

:::demo

```tsx
import React from 'react';
import { Space, Button } from '@nutui/nutui-react';

const App = () => {
  return (
    <Space wrap>
      <Button>按钮1</Button>
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
      <Button>按钮1</Button>
      <Button>按钮2</Button>
      <Button>按钮3</Button>
    </Space>
  );
};
export default App;

```
:::
### 间距大小

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
        <Button>按钮1</Button>
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

| 属性 | 说明                       | 类型                                                                  | 默认值                            |
| --- |--------------------------|---------------------------------------------------------------------|--------------------------------|
| direction | 间距方向                     | ` vertical \|   horizontal`                                         | horizontal |
| align | 交叉轴对齐方式                  | `start \| end \|center \| baseline`                                 | `-`                            |
| justify | 主轴对齐方式                   | `start  \| end \| center \| between \| around \| evenly \| stretch` | `-`                            |
| wrap | 是否自动换行，仅在 horizontal 时有效 | `boolean / false`                                                   | `-`                            |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/components/config-provider)。

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| \--nutui-space-gap | `8px` | 间距大小 |