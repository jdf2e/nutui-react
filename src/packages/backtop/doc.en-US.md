# BackTop

### Intro

Provides a quick return to the top function for long pages.

### Install

```javascript
import { BackTop } from '@nutui/nutui-react';
```


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
    <div className="demo" id="elId">
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
        <BackTop elId="elId" />
    </div>
    </>
  );
};
export default App;
```
:::

### Distance

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
        <BackTop elId="elId" distance={200} bottom={50} />
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
        <BackTop elId="elId" distance={200} bottom={50}><div>Text</div></BackTop>
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
    <div className="demo" id="elId">
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
        <BackTop elId="elId" distance={200} bottom={50} onClick={handleClick} />
    </div>
    </>
  );
};
export default App;
```
:::

## API

### Props

| Attribute        | Description                            | Type    | Default |
| ----------- | ------------------------------- | ------- | ------ |
| elId        | Get the parent element of the listening element          | String  | -      |
| bottom      | Distance from bottom of page                | Number  | `20`   |
| right       | Distance from the right side of the page                | Number  | `10`   |
| distance    | How high to scroll the page vertically          | Number  | `200`  |
| zIndex      | Set the component z-index                | Number  | `10`   |
| isAnimation | Whether there is animation, mutually exclusive with the duration parameter | Boolean | `true` |
| duration    | Set animation duration                | Number  | `1000` |

### Event

| Event         | Description               | Arguments          |
| ------------ | ------------------ | ----------------- |
| onClick | Emitted when component is clicked | event: MouseEvent |
