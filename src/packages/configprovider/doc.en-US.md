# ConfigProvider

### Introduce

Used to configure NutUI-React components globally, providing internationalization support.

### Install

``` javascript
import { ConfigProvider } from '@nutui/nutui-react';
```

## Demo

:::demo

```tsx
import React from 'react';
import { ConfigProvider, Textarea } from "@nutui/nutui-react";
import en from "@nutui/nutui-react/dist/locales/en-US";

const App = () => {
  return (
    <ConfigProvider locale={en}>
      <Textarea />
    </ConfigProvider>
  )
}

export default App;
```

:::

## API

### Props

| Props    | Description                             | Type   | Default          |
|--------------|----------------------------|--------|-----------------|
| locale         | Set up multilingual packs                     | BaseLang | zhCN                |
