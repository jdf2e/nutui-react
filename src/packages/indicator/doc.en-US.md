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
    <Cell>
      <Indicator total={3} current={2} />
    </Cell>
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
        <div
          style={{
            display: 'inline-block',
            width: '14px',
            height: '14px',
            lineHeight: '14px',
            textAlign: 'center',
            fontSize: '12px',
            color: '#FFFFFF',
            border: '1px solid #FFFFFF',
            borderRadius: '50%',
            margin: '4px',
            background: `var(--nutui-color-primary)`,
            boxShadow: `0 0 1px 1px var(--nutui-color-primary)`,
          }}
        >
          {5}
        </div>
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
      <Indicator total={6} current={5} direction="vertical">
        <div
          style={{
            display: 'inline-block',
            width: '14px',
            height: '14px',
            lineHeight: '14px',
            textAlign: 'center',
            fontSize: '12px',
            color: '#FFFFFF',
            border: '1px solid #FFFFFF',
            borderRadius: '50%',
            margin: '4px',
            background: `var(--nutui-color-primary)`,
            boxShadow: `0 0 1px 1px var(--nutui-color-primary)`,
          }}
        >
          {5}
        </div>
      </Indicator>
      <Indicator
        total={6}
        current={2}
        direction="vertical"
        style={{
          marginLeft: '50px',
        }}
      />
    </Cell>
  );
};
export default App;
```

:::

## Indicator

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| current | current step | `number` | `0` |
| total | step total size | `number` | `3` |
| direction | display directory,default is horizontal | `horizontal` \| `vertical` | `horizontal` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default Value |
| --- | --- | --- |
| \--nutui-indicator-color | indicator active color | `$color-primary` |
| \--nutui-indicator-dot-color | indicator default color | `$color-text-disabled` |
| \--nutui-indicator-dot-size | indicator dot size | `5px` |
| \--nutui-indicator-dot-active-size | indicator dot active size | `15px` |
| \--nutui-indicator-border-radius | indicator active border size | `3px` |
| \--nutui-indicator-dot-margin | when horizontal, indicator margin | `4px` |