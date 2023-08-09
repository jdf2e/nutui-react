# Divider

## Intro

Separate content into multiple areas.

## Install

```tsx
import { Divider } from '@nutui/nutui-react';
```

## Demo

### Basic Usage

Default render one horizontal divider line.

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

### With Text

Insert text into divider with default slot.

:::demo

```tsx
import  React from "react";
import { Divider } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Divider>Text</Divider>
    </>
  );
};
export default App;
```

:::

### Content Position

Set Content Position with `contentPosition` attribute.

:::demo

```tsx
import  React from "react";
import { Divider } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Divider contentPosition="left">Text</Divider>
      <Divider contentPosition="right">Text</Divider>
    </>
  );
};
export default App;
```

:::

### Dashed

:::demo

```tsx
import  React from "react";
import { Divider } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Divider style={{ borderStyle: 'dashed'}}>Text</Divider>
    </>
  );
};
export default App;
```

:::

### Custom Style

User can custom divider style with `style` attribute.

:::demo

```tsx
import  React from "react";
import { Divider } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
        <Divider style={{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px', borderStyle: 'dashed' }}>Text</Divider>
    </>
  );
};
export default App;
```

:::

### Vertical Divider

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
        <a href="#" style={{ color: '#1989fa' }}>Link</a>
        <Divider direction="vertical" />
        <a href="#" style={{ color: '#1989fa' }}>Link</a>
    </div>
    </>
  );
};
export default App;
```

:::

## Divider

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| contentPosition | Content position  |  `left` \| `center` \| `right` | `center` |
| direction | The direction of divider  | `horizontal` \| `vertical` | `horizontal` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-divider-margin | The margin value of the overall content of the dividing line | `16px 0` |
| \--nutui-divider-text-font-size | The font-size of the overall content of the dividing line | `$font-size-2` |
| \--nutui-divider-text-color | The color of the overall content of the dividing line | `$gray1` |
| \--nutui-divider-line-height | The row height of the dividing line | `2px` |
| \--nutui-divider-before-margin-right | The margin-right value of the left dividing line | `16px` |
| \--nutui-divider-after-margin-left | The margin-left value of the dividing line on the right | `16px` |
| \--nutui-divider-vertical-height | The height of the vertical split line | `12px` |
| \--nutui-divider-vertical-top | The top value of the vertical split line | `2px` |
| \--nutui-divider-vertical-border-left | The border-left value of the vertical split line | `rgba(0, 0, 0, 0.06)` |
| \--nutui-divider-vertical-margin | The margin value of the vertical split line | `0 8px` |