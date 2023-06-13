# Indicator

## Intro

Displays the progress of a task or process, often used for provisioning processes

## Install

```tsx
import { Indicator } from '@nutui/nutui-react'
```

## Demo

### Basic Usage
:::demo
```tsx
import  React from "react";
import { Indicator, Cell } from '@nutui/nutui-react';

const App = () => {
  return (
    <div className="demo">
      <Cell>
        <Indicator total={3} current={2} />
      </Cell>
    </div>
  );
};
export default App;
```
:::

### Custom Node
:::demo
```tsx
import  React from "react";
import { Indicator, Cell } from '@nutui/nutui-react';

const App = () => {
  return (
    <Cell>
      <Indicator total={6} current={5}>
        <div className="number">{5}</div>
      </Indicator>
    </Cell>
  );
};
export default App;
```
:::

### Custom Color and Size
:::demo
```tsx
import  React from "react";
import { Indicator, Cell, ConfigProvider } from '@nutui/nutui-react';

const customTheme = {
  nutuiIndicatorColor: '#3768fa',
  nutuiIndicatorDotColor: '#ddd',
  nutuiIndicatorDotSize: '8px',
  nutuiIndicatorDotActiveSize: '24px',
}

const App = () => {
  return (
    <Cell>
      <ConfigProvider theme={customTheme}>
        <Indicator total={6} current={5} />
      </ConfigProvider>
    </Cell>
  );
};
export default App;
```
:::

### Vertical display
:::demo
```tsx
import  React from "react";
import { Indicator, Cell } from '@nutui/nutui-react';

const App = () => {
  return (
    <Cell>
      <div className="vertical_cell">
        <Indicator total={6} current={5} direction="vertical">
          <div className="number">{5}</div>
        </Indicator>
      </div>
      <div className="vertical_cell">
        <Indicator total={6} current={2} direction="vertical" />
      </div>
    </Cell>
  );
};
export default App;
```
:::
## Indicator

### Props

| Property | Description | Type | Default |
|--------------|---------------|--------|---------|
| current  | current step | number | `0` |
| total | step total size | number | `3` |
| direction | display directory,default is horizontal | `'horizontal' \| 'vertical'` |   `horizontal` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default Value |
| --- | --- | --- |
| --nutui-indicator-color | indicator active color | `$primary-color` |
| --nutui-indicator-dot-color | indicator default color | `$disable-color` |
| --nutui-indicator-dot-size | indicator dot size  | `5px` |
| --nutui-indicator-dot-active-size | indicator dot active size | `15px` |
| --nutui-indicator-border-size | indicator active border size | `3px` |
| --nutui-indicator-dot-margin | when horizontal, indicator margin | `4px` |
| --nutui-indicator-dot-vertical-margin | when vertical, indicator margin | `4px` |
