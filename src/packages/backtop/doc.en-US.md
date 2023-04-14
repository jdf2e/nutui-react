# BackTop

## Intro

Provides a quick return to the top function for long pages.

## Install

```javascript
// react
import { BackTop } from '@nutui/nutui-react';
```

## Code

### Basic Usage 

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
    <div className="demo" id="target">
        <div className="text-data" style={cellStyle}>test data1</div>
        <div className="text-data" style={cellStyle}>test data2</div>
        <div className="text-data" style={cellStyle}>test data3</div>
        <div className="text-data" style={cellStyle}>test data4</div>
        <div className="text-data" style={cellStyle}>test data5</div>
        <div className="text-data" style={cellStyle}>test data6</div>
        <div className="text-data" style={cellStyle}>test data7</div>
        <div className="text-data" style={cellStyle}>test data8</div>
        <div className="text-data" style={cellStyle}>test data9</div>
        <div className="text-data" style={cellStyle}>test data10</div>
        <div className="text-data" style={cellStyle}>test data11</div>
        <div className="text-data" style={cellStyle}>test data12</div>
        <div className="text-data" style={cellStyle}>test data13</div>
        <div className="text-data" style={cellStyle}>test data14</div>
        <div className="text-data" style={cellStyle}>test data15</div>
        <div className="text-data" style={cellStyle}>test data16</div>
        <div className="text-data" style={cellStyle}>test data17</div>
        <div className="text-data" style={cellStyle}>test data18</div>
        <div className="text-data" style={cellStyle}>test data19</div>
        <div className="text-data" style={cellStyle}>test data20</div>
        <div className="text-data" style={cellStyle}>test data21</div>
        <div className="text-data" style={cellStyle}>test data22</div>
        <div className="text-data" style={cellStyle}>test data23</div>
        <div className="text-data" style={cellStyle}>test data24</div>
        <BackTop  />
    </div>
    </>
  );
};
export default App;
```
:::

### Threshold

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
    <div className="demo" id="target">
       <div className="text-data" style={cellStyle}>test data1</div>
       <div className="text-data" style={cellStyle}>test data2</div>
       <div className="text-data" style={cellStyle}>test data3</div>
       <div className="text-data" style={cellStyle}>test data4</div>
       <div className="text-data" style={cellStyle}>test data5</div>
       <div className="text-data" style={cellStyle}>test data6</div>
       <div className="text-data" style={cellStyle}>test data7</div>
       <div className="text-data" style={cellStyle}>test data8</div>
       <div className="text-data" style={cellStyle}>test data9</div>
       <div className="text-data" style={cellStyle}>test data10</div>
       <div className="text-data" style={cellStyle}>test data11</div>
       <div className="text-data" style={cellStyle}>test data12</div>
       <div className="text-data" style={cellStyle}>test data13</div>
       <div className="text-data" style={cellStyle}>test data14</div>
       <div className="text-data" style={cellStyle}>test data15</div>
       <div className="text-data" style={cellStyle}>test data16</div>
       <div className="text-data" style={cellStyle}>test data17</div>
       <div className="text-data" style={cellStyle}>test data18</div>
       <div className="text-data" style={cellStyle}>test data19</div>
       <div className="text-data" style={cellStyle}>test data20</div>
       <div className="text-data" style={cellStyle}>test data21</div>
       <div className="text-data" style={cellStyle}>test data22</div>
       <div className="text-data" style={cellStyle}>test data23</div>
       <div className="text-data" style={cellStyle}>test data24</div>
        <BackTop  threshold={200} bottom={50} />
    </div>
    </>
  );
};
export default App;
```
:::
### Custom Style

:::demo

```tsx
import  React from "react";
import { BackTop } from '@nutui/nutui-react';
import { Top } from '@nutui/icons-react';

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
    <div className="demo" id="target">
       <div className="text-data" style={cellStyle}>test data1</div>
       <div className="text-data" style={cellStyle}>test data2</div>
       <div className="text-data" style={cellStyle}>test data3</div>
       <div className="text-data" style={cellStyle}>test data4</div>
       <div className="text-data" style={cellStyle}>test data5</div>
       <div className="text-data" style={cellStyle}>test data6</div>
       <div className="text-data" style={cellStyle}>test data7</div>
       <div className="text-data" style={cellStyle}>test data8</div>
       <div className="text-data" style={cellStyle}>test data9</div>
       <div className="text-data" style={cellStyle}>test data10</div>
       <div className="text-data" style={cellStyle}>test data11</div>
       <div className="text-data" style={cellStyle}>test data12</div>
       <div className="text-data" style={cellStyle}>test data13</div>
       <div className="text-data" style={cellStyle}>test data14</div>
       <div className="text-data" style={cellStyle}>test data15</div>
       <div className="text-data" style={cellStyle}>test data16</div>
       <div className="text-data" style={cellStyle}>test data17</div>
       <div className="text-data" style={cellStyle}>test data18</div>
       <div className="text-data" style={cellStyle}>test data19</div>
       <div className="text-data" style={cellStyle}>test data20</div>
       <div className="text-data" style={cellStyle}>test data21</div>
       <div className="text-data" style={cellStyle}>test data22</div>
       <div className="text-data" style={cellStyle}>test data23</div>
       <div className="text-data" style={cellStyle}>test data24</div>
       <BackTop
          className="custom-class"
          threshold={100}
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
            <Top width={12} height={12} className="nut-backtop-main" />
            <div style={{ fontSize: '12px' }}>TOP</div>
          </div>
        </BackTop>
    </div>
    </>
  );
};
export default App;
```
:::

### Scroll Inside Parent Element

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
    <div className="demo" style={{ height: '800px', overflowY: 'auto' }} id="target">
       <div className="text-data" style={cellStyle}>test data1</div>
       <div className="text-data" style={cellStyle}>test data2</div>
       <div className="text-data" style={cellStyle}>test data3</div>
       <div className="text-data" style={cellStyle}>test data4</div>
       <div className="text-data" style={cellStyle}>test data5</div>
       <div className="text-data" style={cellStyle}>test data6</div>
       <div className="text-data" style={cellStyle}>test data7</div>
       <div className="text-data" style={cellStyle}>test data8</div>
       <div className="text-data" style={cellStyle}>test data9</div>
       <div className="text-data" style={cellStyle}>test data10</div>
       <div className="text-data" style={cellStyle}>test data11</div>
       <div className="text-data" style={cellStyle}>test data12</div>
       <div className="text-data" style={cellStyle}>test data13</div>
       <div className="text-data" style={cellStyle}>test data14</div>
       <div className="text-data" style={cellStyle}>test data15</div>
       <div className="text-data" style={cellStyle}>test data16</div>
       <div className="text-data" style={cellStyle}>test data17</div>
       <div className="text-data" style={cellStyle}>test data18</div>
       <div className="text-data" style={cellStyle}>test data19</div>
       <div className="text-data" style={cellStyle}>test data20</div>
       <div className="text-data" style={cellStyle}>test data21</div>
       <div className="text-data" style={cellStyle}>test data22</div>
       <div className="text-data" style={cellStyle}>test data23</div>
       <div className="text-data" style={cellStyle}>test data24</div>
        <BackTop target="target" threshold={100} bottom={50} />
    </div>
    </>
  );
};
export default App;
```
:::
### Click

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
    console.log('backtop')
  }
  return (
    <>
    <div className="demo" id="target">
       <div className="text-data" style={cellStyle}>test data1</div>
       <div className="text-data" style={cellStyle}>test data2</div>
       <div className="text-data" style={cellStyle}>test data3</div>
       <div className="text-data" style={cellStyle}>test data4</div>
       <div className="text-data" style={cellStyle}>test data5</div>
       <div className="text-data" style={cellStyle}>test data6</div>
       <div className="text-data" style={cellStyle}>test data7</div>
       <div className="text-data" style={cellStyle}>test data8</div>
       <div className="text-data" style={cellStyle}>test data9</div>
       <div className="text-data" style={cellStyle}>test data10</div>
       <div className="text-data" style={cellStyle}>test data11</div>
       <div className="text-data" style={cellStyle}>test data12</div>
       <div className="text-data" style={cellStyle}>test data13</div>
       <div className="text-data" style={cellStyle}>test data14</div>
       <div className="text-data" style={cellStyle}>test data15</div>
       <div className="text-data" style={cellStyle}>test data16</div>
       <div className="text-data" style={cellStyle}>test data17</div>
       <div className="text-data" style={cellStyle}>test data18</div>
       <div className="text-data" style={cellStyle}>test data19</div>
       <div className="text-data" style={cellStyle}>test data20</div>
       <div className="text-data" style={cellStyle}>test data21</div>
       <div className="text-data" style={cellStyle}>test data22</div>
       <div className="text-data" style={cellStyle}>test data23</div>
       <div className="text-data" style={cellStyle}>test data24</div>
        <BackTop  threshold={100} bottom={50} onClick={handleClick} />
    </div>
    </>
  );
};
export default App;
```
:::

## BackTop

### Props

| Attribute        | Description                            | Type    | Default |
| ----------- | ------------------------------- | ------- | ------ |
| target        | The listening element          | string  | -      |
| threshold    | How high to scroll the page vertically          | number | `200`  |
| zIndex      | Set the component z-index                | number | `10`   |
| duration    | Set animation duration                | number | `1000` |
| onClick | Emitted when component is clicked | (event: MouseEvent) => void | - |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| --nutui-backtop-border-color | border color | `#e0e0e0` |
