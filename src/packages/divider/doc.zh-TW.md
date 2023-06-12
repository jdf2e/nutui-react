# Divider 分割线

### 介绍

用于将内容分隔为多个区域。

### 安装

```ts
// react
import { Divider } from '@nutui/nutui-react';
```

### 基础用法

默认渲染一条水平分割线。

:::demo

```tsx
import  React from "react";
import { Divider } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Divider />
    </>
  );
};
export default App;
```

:::

### 展示文本

通过插槽在可以分割线中间插入内容。

:::demo

```tsx
import  React from "react";
import { Divider } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Divider>文本</Divider>
    </>
  );
};
export default App;
```

:::

### 内容位置

通过 contentPosition 指定内容所在位置。

:::demo

```tsx
import  React from "react";
import { Divider } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Divider contentPosition="left">文本</Divider>
      <Divider contentPosition="right">文本</Divider>
    </>
  );
};
export default App;
```

:::

### 虚线

:::demo

```tsx
import  React from "react";
import { Divider } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Divider style={{ borderStyle: 'dashed'}}>文本</Divider>
    </>
  );
};
export default App;
```

:::

### 自定义样式

可以直接通过 style 属性设置分割线的样式。

:::demo

```tsx
import  React from "react";
import { Divider } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Divider styles={{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px', borderStyle: 'dashed' }}>文本</Divider>
    </>
  );
};
export default App;
```

:::

### 垂直分割线

:::demo

```tsx
import  React from "react";
import { Divider } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
    <div>
        文本
        <Divider direction="vertical" />
        <a href="#" style={{ color: '#1989fa' }}>链接</a>
        <Divider direction="vertical" />
        <a href="#" style={{ color: '#1989fa' }}>链接</a>
    </div>
    </>
  );
};
export default App;
```

:::

## API

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| contentPosition | 內容位置 | `left` \| `center` \| `right` | `center` |
| direction | 水平還是垂直類型 | `horizontal` \| `vertical` | `horizontal` |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-divider-margin | 分割線整體內容的margin值 | `16px 0` |
| \--nutui-divider-text-font-size | 分割線整體內容的font-size大小 | `$font-size-2` |
| \--nutui-divider-text-color | 分割線整體內容的顏色 | `$gray1` |
| \--nutui-divider-line-height | 分割線的行高 | `2px` |
| \--nutui-divider-before-margin-right | 左邊分割線的margin-right值 | `16px` |
| \--nutui-divider-after-margin-left | 右邊分割線的margin-left值 | `16px` |
| \--nutui-divider-vertical-height | 垂直分割線的高度 | `12px` |
| \--nutui-divider-vertical-top | 垂直分割線的top值 | `2px` |
| \--nutui-divider-vertical-border-left | 垂直分割線的border-left值 | `rgba(0, 0, 0, 0.06)` |
| \--nutui-divider-vertical-margin | 垂直分割線的margin值 | `0 8px` |