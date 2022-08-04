# BackTop 返回顶部

### 介绍

提供较长的页面快捷返回顶部功能。

### 安装

```javascript
import { BackTop } from '@nutui/nutui-react';
```

## 代码演示

### 基础用法

:::demo

```tsx
import  React from "react";
import { BackTop } from '@nutui/nutui-react';

const App = () => {
  const cellStyle = {
    height: '46px',
    lineHeight: '46px',
    margin: '15px auto 20px',
    paddingLeft: '16px',
    backgroundColor: '#fff',
    color: '#666',
    borderRadius: '7px',
    boxShadow: '0 1px 7px #edeef1',
    fontSize: '13px',
  }
  return (
    <>
    <div className="demo" id="elId">
        <div className="text-data" style={cellStyle}>我是测试数据1</div>
        <div className="text-data" style={cellStyle}>我是测试数据2</div>
        <div className="text-data" style={cellStyle}>我是测试数据3</div>
        <div className="text-data" style={cellStyle}>我是测试数据4</div>
        <div className="text-data" style={cellStyle}>我是测试数据5</div>
        <div className="text-data" style={cellStyle}>我是测试数据6</div>
        <div className="text-data" style={cellStyle}>我是测试数据7</div>
        <div className="text-data" style={cellStyle}>我是测试数据8</div>
        <div className="text-data" style={cellStyle}>我是测试数据9</div>
        <div className="text-data" style={cellStyle}>我是测试数据10</div>
        <div className="text-data" style={cellStyle}>我是测试数据11</div>
        <div className="text-data" style={cellStyle}>我是测试数据12</div>
        <div className="text-data" style={cellStyle}>我是测试数据13</div>
        <div className="text-data" style={cellStyle}>我是测试数据14</div>
        <div className="text-data" style={cellStyle}>我是测试数据15</div>
        <div className="text-data" style={cellStyle}>我是测试数据16</div>
        <div className="text-data" style={cellStyle}>我是测试数据17</div>
        <div className="text-data" style={cellStyle}>我是测试数据18</div>
        <div className="text-data" style={cellStyle}>我是测试数据19</div>
        <div className="text-data" style={cellStyle}>我是测试数据20</div>
        <div className="text-data" style={cellStyle}>我是测试数据21</div>
        <div className="text-data" style={cellStyle}>我是测试数据22</div>
        <div className="text-data" style={cellStyle}>我是测试数据23</div>
        <div className="text-data" style={cellStyle}>我是测试数据24</div>
        <BackTop  />
    </div>
    </>
  );
};
export default App;
```
:::

### 设置出现位置

:::demo

```tsx
import  React from "react";
import { BackTop } from '@nutui/nutui-react';

const App = () => {
    const cellStyle = {
    height: '46px',
    lineHeight: '46px',
    margin: '15px auto 20px',
    paddingLeft: '16px',
    backgroundColor: '#fff',
    color: '#666',
    borderRadius: '7px',
    boxShadow: '0 1px 7px #edeef1',
    fontSize: '13px',
  }
  return (
    <>
    <div className="demo" id="elId">
        <div className="text-data" style={cellStyle}>我是测试数据1</div>
        <div className="text-data" style={cellStyle}>我是测试数据2</div>
        <div className="text-data" style={cellStyle}>我是测试数据3</div>
        <div className="text-data" style={cellStyle}>我是测试数据4</div>
        <div className="text-data" style={cellStyle}>我是测试数据5</div>
        <div className="text-data" style={cellStyle}>我是测试数据6</div>
        <div className="text-data" style={cellStyle}>我是测试数据7</div>
        <div className="text-data" style={cellStyle}>我是测试数据8</div>
        <div className="text-data" style={cellStyle}>我是测试数据9</div>
        <div className="text-data" style={cellStyle}>我是测试数据10</div>
        <div className="text-data" style={cellStyle}>我是测试数据11</div>
        <div className="text-data" style={cellStyle}>我是测试数据12</div>
        <div className="text-data" style={cellStyle}>我是测试数据13</div>
        <div className="text-data" style={cellStyle}>我是测试数据14</div>
        <div className="text-data" style={cellStyle}>我是测试数据15</div>
        <div className="text-data" style={cellStyle}>我是测试数据16</div>
        <div className="text-data" style={cellStyle}>我是测试数据17</div>
        <div className="text-data" style={cellStyle}>我是测试数据18</div>
        <div className="text-data" style={cellStyle}>我是测试数据19</div>
        <div className="text-data" style={cellStyle}>我是测试数据20</div>
        <div className="text-data" style={cellStyle}>我是测试数据21</div>
        <div className="text-data" style={cellStyle}>我是测试数据22</div>
        <div className="text-data" style={cellStyle}>我是测试数据23</div>
        <div className="text-data" style={cellStyle}>我是测试数据24</div>
        <BackTop  distance={200} bottom={50} />
    </div>
    </>
  );
};
export default App;
```
:::
### 自定义样式

:::demo

```tsx
import  React from "react";
import { BackTop } from '@nutui/nutui-react';

const App = () => {
  const cellStyle = {
    height: '46px',
    lineHeight: '46px',
    margin: '15px auto 20px',
    paddingLeft: '16px',
    backgroundColor: '#fff',
    color: '#666',
    borderRadius: '7px',
    boxShadow: '0 1px 7px #edeef1',
    fontSize: '13px',
  }
  return (
    <>
    <div className="demo" id="elId">
        <div className="text-data" style={cellStyle}>我是测试数据1</div>
        <div className="text-data" style={cellStyle}>我是测试数据2</div>
        <div className="text-data" style={cellStyle}>我是测试数据3</div>
        <div className="text-data" style={cellStyle}>我是测试数据4</div>
        <div className="text-data" style={cellStyle}>我是测试数据5</div>
        <div className="text-data" style={cellStyle}>我是测试数据6</div>
        <div className="text-data" style={cellStyle}>我是测试数据7</div>
        <div className="text-data" style={cellStyle}>我是测试数据8</div>
        <div className="text-data" style={cellStyle}>我是测试数据9</div>
        <div className="text-data" style={cellStyle}>我是测试数据10</div>
        <div className="text-data" style={cellStyle}>我是测试数据11</div>
        <div className="text-data" style={cellStyle}>我是测试数据12</div>
        <div className="text-data" style={cellStyle}>我是测试数据13</div>
        <div className="text-data" style={cellStyle}>我是测试数据14</div>
        <div className="text-data" style={cellStyle}>我是测试数据15</div>
        <div className="text-data" style={cellStyle}>我是测试数据16</div>
        <div className="text-data" style={cellStyle}>我是测试数据17</div>
        <div className="text-data" style={cellStyle}>我是测试数据18</div>
        <div className="text-data" style={cellStyle}>我是测试数据19</div>
        <div className="text-data" style={cellStyle}>我是测试数据20</div>
        <div className="text-data" style={cellStyle}>我是测试数据21</div>
        <div className="text-data" style={cellStyle}>我是测试数据22</div>
        <div className="text-data" style={cellStyle}>我是测试数据23</div>
        <div className="text-data" style={cellStyle}>我是测试数据24</div>
        <BackTop  distance={200} bottom={50}><div>无</div></BackTop>
    </div>
    </>
  );
};
export default App;
```
:::

### click 事件

:::demo

```tsx
import  React from "react";
import { BackTop } from '@nutui/nutui-react';

const App = () => {
  const cellStyle = {
    height: '46px',
    lineHeight: '46px',
    margin: '15px auto 20px',
    paddingLeft: '16px',
    backgroundColor: '#fff',
    color: '#666',
    borderRadius: '7px',
    boxShadow: '0 1px 7px #edeef1',
    fontSize: '13px',
  }
  const handleClick = () => {
    console.log('触发返回顶部')
  }
  return (
    <>
    <div className="demo" id="elId">
        <div className="text-data" style={cellStyle}>我是测试数据1</div>
        <div className="text-data" style={cellStyle}>我是测试数据2</div>
        <div className="text-data" style={cellStyle}>我是测试数据3</div>
        <div className="text-data" style={cellStyle}>我是测试数据4</div>
        <div className="text-data" style={cellStyle}>我是测试数据5</div>
        <div className="text-data" style={cellStyle}>我是测试数据6</div>
        <div className="text-data" style={cellStyle}>我是测试数据7</div>
        <div className="text-data" style={cellStyle}>我是测试数据8</div>
        <div className="text-data" style={cellStyle}>我是测试数据9</div>
        <div className="text-data" style={cellStyle}>我是测试数据10</div>
        <div className="text-data" style={cellStyle}>我是测试数据11</div>
        <div className="text-data" style={cellStyle}>我是测试数据12</div>
        <div className="text-data" style={cellStyle}>我是测试数据13</div>
        <div className="text-data" style={cellStyle}>我是测试数据14</div>
        <div className="text-data" style={cellStyle}>我是测试数据15</div>
        <div className="text-data" style={cellStyle}>我是测试数据16</div>
        <div className="text-data" style={cellStyle}>我是测试数据17</div>
        <div className="text-data" style={cellStyle}>我是测试数据18</div>
        <div className="text-data" style={cellStyle}>我是测试数据19</div>
        <div className="text-data" style={cellStyle}>我是测试数据20</div>
        <div className="text-data" style={cellStyle}>我是测试数据21</div>
        <div className="text-data" style={cellStyle}>我是测试数据22</div>
        <div className="text-data" style={cellStyle}>我是测试数据23</div>
        <div className="text-data" style={cellStyle}>我是测试数据24</div>
        <BackTop distance={200} bottom={50} onClick={handleClick} />
    </div>
    </>
  );
};
export default App;
```
:::

## API

### Props

| 字段        | 说明                            | 类型    | 默认值 |
| ----------- | ------------------------------- | ------- | ------ |
| elId        | 获取监听元素的父级元素          | String  | -      |
| bottom      | 距离页面底部距离                | Number  | `20`   |
| right       | 距离页面右侧距离                | Number  | `10`   |
| distance    | 页面垂直滚动多高后出现          | Number  | `200`  |
| zIndex      | 设置组件页面层级                | Number  | `10`   |
| isAnimation | 是否有动画,和 duration 参数互斥 | Boolean | `true` |
| duration    | 设置动画持续时间                | Number  | `1000` |

### Events

| 名称         | 说明               | 回调参数          |
| ------------ | ------------------ | ----------------- |
| onClick | 按钮点击时触发事件 | event: MouseEvent |
