#  Empty组件

### 介绍

空状态时的占位提示

### 安装

```javascript
// react
import { Empty } from '@nutui/nutui-react'

```


## 代码演示

### 基础用法
:::demo
```tsx
import  React from "react";
import { Empty } from '@nutui/nutui-react';

const App = () => {
  return (
    <Empty description="无数据" />
  );
};
export default App;
```
:::

### 自定义内容大小
:::demo
```tsx
import  React from "react";
import { Empty } from '@nutui/nutui-react';

const App = () => {
  return (
    <Empty description="无数据" imageSize={100} />
  );
};
export default App;
```
:::

### 图片类型，内置 3 个
:::demo
```tsx
import  React from "react";
import { Empty } from '@nutui/nutui-react';

const App = () => {
  return (
    <div className="show">
      <Empty image="empty" description="无内容" />
      <Empty image="error" description="加载失败/错误" />
      <Empty image="network" description="无网络" />
    </div>
  );
};
export default App;
```
:::

### 自定义图片
:::demo
```tsx
import  React from "react";
import { Empty } from '@nutui/nutui-react';

const App = () => {
  return (
    <Empty
      description="无优惠券" 
      image={<img src="https://static-ftcms.jd.com/p/files/61a9e3313985005b3958672e.png" alt=""/>}
     />
  );
};
export default App;
```
:::


### 底部内容
:::demo
```tsx
import  React from "react";
import { Empty } from '@nutui/nutui-react';

const App = () => {
  return (
    <Empty image="error" description="加载失败">
        <div style="margin-top: 10px">
            <nut-button icon="refresh" type="primary">重试</nut-button>
        </div>
    </Empty>
  );
};
export default App;
```
:::
## API

### Props

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| image         | 图片类型，可选值为 error network empty，支持传入图片 URL              | ReactNode       |
| imageSize        | 图片大小，Number 类型单位为 px                         | Number \| String | -       |
| description         | 图片下方的描述文字 | ReactNode | 无数据                |




## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 默认值 |
| --- | --- |
| --nutui-empty-padding | ` 32px 0` |
| --nutui-empty-image-size | ` 170px` |
| --nutui-empty-description-margin-top | `  4px` |
| --nutui-empty-description-color | `  #666666` |
| --nutui-empty-description-font-size | `  14px` |
| --nutui-empty-description-line-height | `  20px` |
| --nutui-empty-description-padding | `  0 40px` |
