# ConfigProvider 全域配置

### 介紹

用於全域配置 NutUI-React 元件，提供國際化支援。

### 安裝

``` javascript
import { ConfigProvider } from '@nutui/nutui-react';
```

## 代碼演示

### 基礎用法

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

| 屬性 | 說明 | 類型 | 預設值           |
|--------------|----------------------------|--------|-----------------|
| locale         | 設置多語言包                     | BaseLang | zhCN                |
