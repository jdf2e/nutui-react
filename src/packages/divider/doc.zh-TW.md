# Divider 分割線

## 介紹

用於將內容分隔為多個區域。

## 安裝

```tsx
import { Divider } from '@nutui/nutui-react';
```

## 代碼演示

### 基礎用法

默認渲染一條水平分割線。

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

通過插槽在可以分割線中間插入內容。

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

### 內容位置

通過 contentPosition 指定內容所在位置。

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

### 虛線

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

### 自定義樣式

可以直接通過 style 屬性設置分割線的樣式。

:::demo

```tsx
import  React from "react";
import { Divider } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Divider style={{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px', borderStyle: 'dashed' }}>文本</Divider>
    </>
  );
};
export default App;
```

:::

### 垂直分割線

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
          <a href="#" style={{ color: '#1989fa' }}>鏈接</a>
          <Divider direction="vertical" />
          <a href="#" style={{ color: '#1989fa' }}>鏈接</a>
      </div>
    </>
  );
};
export default App;
```

:::

## Divider

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
| \--nutui-divider-text-font-size | 分割線整體內容的font-size大小 | `$font-text` |
| \--nutui-divider-text-color | 分割線整體內容的顏色 | `$color-title` |
| \--nutui-divider-line-height | 分割線的行高 | `2px` |
| \--nutui-divider-before-margin-right | 左邊分割線的margin-right值 | `16px` |
| \--nutui-divider-after-margin-left | 右邊分割線的margin-left值 | `16px` |
| \--nutui-divider-vertical-height | 垂直分割線的高度 | `12px` |
| \--nutui-divider-vertical-top | 垂直分割線的top值 | `2px` |
| \--nutui-divider-vertical-border-left | 垂直分割線的border-left值 | `rgba(0, 0, 0, 0.06)` |
| \--nutui-divider-vertical-margin | 垂直分割線的margin值 | `0 8px` |