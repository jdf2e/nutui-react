# Indicator 指示器

## 介紹

顯示一個任務或流程的進度，常用於開通流程。

## 安裝

```tsx
import { Indicator } from '@nutui/nutui-react'
```

## 代碼演示

### 基礎用法

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

### 自定義節點

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

### 自定義顏色大小

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

### 豎向展示

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

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| current | 當前步驟 | `number` | `0` |
| total | 步驟長度 | `number` | `3` |
| direction | 展示方向，默認為水平方向 | `horizontal` \| `vertical` | `horizontal` |

## 主題定製

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-indicator-color | 指示器焦點時色值 | `$color-primary` |
| \--nutui-indicator-dot-color | 指示器默認色值 | `$color-text-disabled` |
| \--nutui-indicator-dot-size | 指示器尺寸 | `5px` |
| \--nutui-indicator-dot-active-size | 指示器焦點時尺寸 | `15px` |
| \--nutui-indicator-border-radius | 指示器焦點時的border值 | `3px` |
| \--nutui-indicator-dot-margin | 指示器橫向時的margin值 | `4px` |