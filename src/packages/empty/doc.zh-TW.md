#  Empty组件

### 介紹

空狀態時的佔位提示

### 安裝

```javascript
// react
import { Empty } from '@nutui/nutui-react'

```

## 代碼演示

### 基礎用法
:::demo
```tsx
import  React from "react";
import { Empty } from '@nutui/nutui-react';

const App = () => {
  return (
    <Empty description="無數據" />
  );
};
export default App;
```
:::

### 自定義內容大小
:::demo
```tsx
import  React from "react";
import { Empty } from '@nutui/nutui-react';

const App = () => {
  return (
    <Empty description="無數據" imageSize={100} />
  );
};
export default App;
```
:::

### 圖片類型，內置 3 個
:::demo
```tsx
import  React from "react";
import { Empty } from '@nutui/nutui-react';

const App = () => {
  return (
    <div className="show">
      <Empty image="empty" description="無內容" />
      <Empty image="error" description="加載失敗/錯誤" />
      <Empty image="network" description="無網絡" />
    </div>
  );
};
export default App;
```
:::

### 自定義圖片
:::demo
```tsx
import  React from "react";
import { Empty } from '@nutui/nutui-react';

const App = () => {
  return (
    <Empty
      description="無優惠券" 
      image={<img src="https://static-ftcms.jd.com/p/files/61a9e3313985005b3958672e.png" alt=""/>}
     />
  );
};
export default App;
```
:::


### 底部內容
:::demo
```tsx
import  React from "react";
import { Empty, Button } from '@nutui/nutui-react';

const App = () => {
  return (
    <Empty image="error" description="加載失敗">
      <div style={{marginTop: "10px"}}>
        <Button icon="refresh" type="primary">重试</Button>
      </div>
    </Empty>
  );
};
export default App;
```
:::
## API

### Props

| 屬性 | 說明 | 類型 | 預設值           |
|--------------|----------------------------------|--------|------------------|
| image         | 圖片類型，可選值為 error network empty，支持傳入圖片 URL              | ReactNode       |
| imageSize        | 圖片大小，Number 類型單位為 px                    | Number \| String | -       |
| description         | 圖片下方的描述文字  | ReactNode |    無數據             |


## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 默認值 |
| --- | --- |
| --nutui-empty-padding | ` 32px 0` |
| --nutui-empty-image-size | ` 170px` |
| --nutui-empty-description-margin-top | `  4px` |
| --nutui-empty-description-color | `  #666666` |
| --nutui-empty-description-font-size | `  14px` |
| --nutui-empty-description-line-height | `  20px` |
| --nutui-empty-description-padding | `  0 40px` |
