# BackTop 返回頂部

### 介紹

提供較長的頁面快捷返回頂部功能。

### 安裝

```javascript
// react
import { BackTop } from '@nutui/nutui-react';

```

## 代碼演示

### 基礎用法

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
    <div className="demo"  id="elId">
        <div className="text-data" style={cellStyle}>我是測試數據1</div>
        <div className="text-data" style={cellStyle}>我是測試數據2</div>
        <div className="text-data" style={cellStyle}>我是測試數據3</div>
        <div className="text-data" style={cellStyle}>我是測試數據4</div>
        <div className="text-data" style={cellStyle}>我是測試數據5</div>
        <div className="text-data" style={cellStyle}>我是測試數據6</div>
        <div className="text-data" style={cellStyle}>我是測試數據7</div>
        <div className="text-data" style={cellStyle}>我是測試數據8</div>
        <div className="text-data" style={cellStyle}>我是測試數據9</div>
        <div className="text-data" style={cellStyle}>我是測試數據10</div>
        <div className="text-data" style={cellStyle}>我是測試數據11</div>
        <div className="text-data" style={cellStyle}>我是測試數據12</div>
        <div className="text-data" style={cellStyle}>我是測試數據13</div>
        <div className="text-data" style={cellStyle}>我是測試數據14</div>
        <div className="text-data" style={cellStyle}>我是測試數據15</div>
        <div className="text-data" style={cellStyle}>我是測試數據16</div>
        <div className="text-data" style={cellStyle}>我是測試數據17</div>
        <div className="text-data" style={cellStyle}>我是測試數據18</div>
        <div className="text-data" style={cellStyle}>我是測試數據19</div>
        <div className="text-data" style={cellStyle}>我是測試數據20</div>
        <div className="text-data" style={cellStyle}>我是測試數據21</div>
        <div className="text-data" style={cellStyle}>我是測試數據22</div>
        <div className="text-data" style={cellStyle}>我是測試數據23</div>
        <div className="text-data" style={cellStyle}>我是測試數據24</div>
        <BackTop  />
    </div>
    </>
  );
};
export default App;
```
:::


### 設置出現位置

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
    <div className="demo"  id="elId">
        <div className="text-data" style={cellStyle}>我是測試數據1</div>
        <div className="text-data" style={cellStyle}>我是測試數據2</div>
        <div className="text-data" style={cellStyle}>我是測試數據3</div>
        <div className="text-data" style={cellStyle}>我是測試數據4</div>
        <div className="text-data" style={cellStyle}>我是測試數據5</div>
        <div className="text-data" style={cellStyle}>我是測試數據6</div>
        <div className="text-data" style={cellStyle}>我是測試數據7</div>
        <div className="text-data" style={cellStyle}>我是測試數據8</div>
        <div className="text-data" style={cellStyle}>我是測試數據9</div>
        <div className="text-data" style={cellStyle}>我是測試數據10</div>
        <div className="text-data" style={cellStyle}>我是測試數據11</div>
        <div className="text-data" style={cellStyle}>我是測試數據12</div>
        <div className="text-data" style={cellStyle}>我是測試數據13</div>
        <div className="text-data" style={cellStyle}>我是測試數據14</div>
        <div className="text-data" style={cellStyle}>我是測試數據15</div>
        <div className="text-data" style={cellStyle}>我是測試數據16</div>
        <div className="text-data" style={cellStyle}>我是測試數據17</div>
        <div className="text-data" style={cellStyle}>我是測試數據18</div>
        <div className="text-data" style={cellStyle}>我是測試數據19</div>
        <div className="text-data" style={cellStyle}>我是測試數據20</div>
        <div className="text-data" style={cellStyle}>我是測試數據21</div>
        <div className="text-data" style={cellStyle}>我是測試數據22</div>
        <div className="text-data" style={cellStyle}>我是測試數據23</div>
        <div className="text-data" style={cellStyle}>我是測試數據24</div>
        <BackTop  distance={200} bottom={50} />
    </div>
    </>
  );
};
export default App;
```
:::
### 自定義樣式

:::demo

```tsx
import  React from "react";
import { BackTop,Icon } from '@nutui/nutui-react';


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
    <div className="demo"  id="elId">
        <div className="text-data" style={cellStyle}>我是測試數據1</div>
        <div className="text-data" style={cellStyle}>我是測試數據2</div>
        <div className="text-data" style={cellStyle}>我是測試數據3</div>
        <div className="text-data" style={cellStyle}>我是測試數據4</div>
        <div className="text-data" style={cellStyle}>我是測試數據5</div>
        <div className="text-data" style={cellStyle}>我是測試數據6</div>
        <div className="text-data" style={cellStyle}>我是測試數據7</div>
        <div className="text-data" style={cellStyle}>我是測試數據8</div>
        <div className="text-data" style={cellStyle}>我是測試數據9</div>
        <div className="text-data" style={cellStyle}>我是測試數據10</div>
        <div className="text-data" style={cellStyle}>我是測試數據11</div>
        <div className="text-data" style={cellStyle}>我是測試數據12</div>
        <div className="text-data" style={cellStyle}>我是測試數據13</div>
        <div className="text-data" style={cellStyle}>我是測試數據14</div>
        <div className="text-data" style={cellStyle}>我是測試數據15</div>
        <div className="text-data" style={cellStyle}>我是測試數據16</div>
        <div className="text-data" style={cellStyle}>我是測試數據17</div>
        <div className="text-data" style={cellStyle}>我是測試數據18</div>
        <div className="text-data" style={cellStyle}>我是測試數據19</div>
        <div className="text-data" style={cellStyle}>我是測試數據20</div>
        <div className="text-data" style={cellStyle}>我是測試數據21</div>
        <div className="text-data" style={cellStyle}>我是測試數據22</div>
        <div className="text-data" style={cellStyle}>我是測試數據23</div>
        <div className="text-data" style={cellStyle}>我是測試數據24</div>
        <BackTop
          className="custom-class"
          distance={100}
          bottom={110}
        >
          <div
            className="backtop-demo"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Icon size="12px" className="nut-backtop-main" name="top" />
            <div style={{ fontSize: '12px' }}>顶部</div>
          </div>
        </BackTop>
    </div>
    </>
  );
};
export default App;
```
:::

### 父級元素內滾動

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
    <div className="demo" style={{ height: '800px', overflowY: 'auto' }} id="elId">
        <div className="text-data" style={cellStyle}>我是測試數據1</div>
        <div className="text-data" style={cellStyle}>我是測試數據2</div>
        <div className="text-data" style={cellStyle}>我是測試數據3</div>
        <div className="text-data" style={cellStyle}>我是測試數據4</div>
        <div className="text-data" style={cellStyle}>我是測試數據5</div>
        <div className="text-data" style={cellStyle}>我是測試數據6</div>
        <div className="text-data" style={cellStyle}>我是測試數據7</div>
        <div className="text-data" style={cellStyle}>我是測試數據8</div>
        <div className="text-data" style={cellStyle}>我是測試數據9</div>
        <div className="text-data" style={cellStyle}>我是測試數據10</div>
        <div className="text-data" style={cellStyle}>我是測試數據11</div>
        <div className="text-data" style={cellStyle}>我是測試數據12</div>
        <div className="text-data" style={cellStyle}>我是測試數據13</div>
        <div className="text-data" style={cellStyle}>我是測試數據14</div>
        <div className="text-data" style={cellStyle}>我是測試數據15</div>
        <div className="text-data" style={cellStyle}>我是測試數據16</div>
        <div className="text-data" style={cellStyle}>我是測試數據17</div>
        <div className="text-data" style={cellStyle}>我是測試數據18</div>
        <div className="text-data" style={cellStyle}>我是測試數據19</div>
        <div className="text-data" style={cellStyle}>我是測試數據20</div>
        <div className="text-data" style={cellStyle}>我是測試數據21</div>
        <div className="text-data" style={cellStyle}>我是測試數據22</div>
        <div className="text-data" style={cellStyle}>我是測試數據23</div>
        <div className="text-data" style={cellStyle}>我是測試數據24</div>
        <BackTop elId="elId" distance={100} bottom={50} />
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
    <div className="demo" style={{ height: '1000px', overflowY: 'auto' }} id="elId">
        <div className="text-data" style={cellStyle}>我是測試數據1</div>
        <div className="text-data" style={cellStyle}>我是測試數據2</div>
        <div className="text-data" style={cellStyle}>我是測試數據3</div>
        <div className="text-data" style={cellStyle}>我是測試數據4</div>
        <div className="text-data" style={cellStyle}>我是測試數據5</div>
        <div className="text-data" style={cellStyle}>我是測試數據6</div>
        <div className="text-data" style={cellStyle}>我是測試數據7</div>
        <div className="text-data" style={cellStyle}>我是測試數據8</div>
        <div className="text-data" style={cellStyle}>我是測試數據9</div>
        <div className="text-data" style={cellStyle}>我是測試數據10</div>
        <div className="text-data" style={cellStyle}>我是測試數據11</div>
        <div className="text-data" style={cellStyle}>我是測試數據12</div>
        <div className="text-data" style={cellStyle}>我是測試數據13</div>
        <div className="text-data" style={cellStyle}>我是測試數據14</div>
        <div className="text-data" style={cellStyle}>我是測試數據15</div>
        <div className="text-data" style={cellStyle}>我是測試數據16</div>
        <div className="text-data" style={cellStyle}>我是測試數據17</div>
        <div className="text-data" style={cellStyle}>我是測試數據18</div>
        <div className="text-data" style={cellStyle}>我是測試數據19</div>
        <div className="text-data" style={cellStyle}>我是測試數據20</div>
        <div className="text-data" style={cellStyle}>我是測試數據21</div>
        <div className="text-data" style={cellStyle}>我是測試數據22</div>
        <div className="text-data" style={cellStyle}>我是測試數據23</div>
        <div className="text-data" style={cellStyle}>我是測試數據24</div>
        <BackTop distance={100} bottom={50} onClick={handleClick} />
    </div>
    </>
  );
};
export default App;
```
:::

## API

### Props

| 字段        | 說明                            | 類型    | 默認值 |
| ----------- | ------------------------------- | ------- | ------ |
| elId        | 獲取監聽元素的父級元素         | String  | -      |
| bottom      | 距離頁面底部距離                | Number  | `20`   |
| right       | 距離頁面右側距離                | Number  | `10`   |
| distance    | 頁面垂直滾動多高後出現          | Number  | `200`  |
| zIndex      | 設置組件頁面層級                | Number  | `10`   |
| isAnimation | 是否有動畫,和 duration 參數互斥 | Boolean | `true` |
| duration    | 設置動畫持續時間                | Number  | `1000` |

### Events

| 名稱                       | 說明               | 回調參數          |
|--------------------------| ------------------ | ----------------- |
| backTopClick`v1.2.1(廢棄)` | 按鈕點擊時觸發事件 | event: MouseEvent |
| onClick`v1.2.1`          | 按鈕點擊時觸發事件 | event: MouseEvent |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 默認值 |
| --- | --- |
| --nutui-backtop-border-color | ` #e0e0e0` |
