# Ellipsis組件

## 介紹

展示空間不足時，隱去部分內容併用“...”替代。

## 安裝

```tsx
import { Ellipsis } from '@nutui/nutui-react';
```

## 代碼演示

### 頭部省略

:::demo

```tsx
import  React from "react";
import { Ellipsis, Cell } from '@nutui/nutui-react';

const App = () => {
  const content =
    'NutUI3.0上線後我們研發團隊也在不斷的優化、測試、使用、叠代 Vue3 的相關組件，但是在跨端小程序的開發過程中，發現沒有合適的組件庫可以支持多端開發。為了填補這一空白，同時為了優化開發者體驗，讓 NutUI 能夠為更多的開發者帶來便利，我們決定在 NutUI 中增加小程序多端適配的能力。'
  return (
    <Cell>
    <Ellipsis content={content} direction="start"/>
    </Cell>
  );
};
export default App;
```

:::

### 尾部省略

:::demo

```tsx
import  React from "react";
import { Ellipsis, Cell } from '@nutui/nutui-react';

const App = () => {
  const content =
    'NutUI3.0上線後我們研發團隊也在不斷的優化、測試、使用、叠代 Vue3 的相關組件，但是在跨端小程序的開發過程中，發現沒有合適的組件庫可以支持多端開發。為了填補這一空白，同時為了優化開發者體驗，讓 NutUI 能夠為更多的開發者帶來便利，我們決定在 NutUI 中增加小程序多端適配的能力。'
  return (
    <Cell>
    <Ellipsis content={content} direction="end"/>
    </Cell>
  );
};
export default App;
```

:::

### 中間省略

:::demo

```tsx
import  React from "react";
import { Ellipsis, Cell } from '@nutui/nutui-react';

const App = () => {
  const content =
    'NutUI3.0上線後我們研發團隊也在不斷的優化、測試、使用、叠代 Vue3 的相關組件，但是在跨端小程序的開發過程中，發現沒有合適的組件庫可以支持多端開發。為了填補這一空白，同時為了優化開發者體驗，讓 NutUI 能夠為更多的開發者帶來便利，我們決定在 NutUI 中增加小程序多端適配的能力。'
  return (
    <Cell>
    <Ellipsis content={content} direction="middle"/>
    </Cell>
  );
};
export default App;
```

:::

### 多行省略

:::demo

```tsx
import  React from "react";
import { Ellipsis, Cell } from '@nutui/nutui-react';

const App = () => {
  const content =
    'NutUI3.0上線後我們研發團隊也在不斷的優化、測試、使用、叠代 Vue3 的相關組件，但是在跨端小程序的開發過程中，發現沒有合適的組件庫可以支持多端開發。為了填補這一空白，同時為了優化開發者體驗，讓 NutUI 能夠為更多的開發者帶來便利，我們決定在 NutUI 中增加小程序多端適配的能力。'
  return (
    <Cell>
    <Ellipsis content={content} direction="start" rows="3"/>
    </Cell>
  );
};
export default App;
```

:::

### 展開收起

:::demo

```tsx
import  React from "react";
import { Ellipsis, Cell } from '@nutui/nutui-react';

const App = () => {
  const content =
    'NutUI3.0上線後我們研發團隊也在不斷的優化、測試、使用、叠代 Vue3 的相關組件，但是在跨端小程序的開發過程中，發現沒有合適的組件庫可以支持多端開發。為了填補這一空白，同時為了優化開發者體驗，讓 NutUI 能夠為更多的開發者帶來便利，我們決定在 NutUI 中增加小程序多端適配的能力。'
  return (
    <Cell>
        <Ellipsis
        content={content}
        direction="start"
        expandText="展開"
        collapseText="收起"
        />
    </Cell>
  );
};
export default App;
```

:::

## Ellipsis

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| content | 文本內容 | `string` | `-` |
| direction | 省略位置 | `start` \| `end` \| `middle`  | `end` |
| rows | 展示幾行 | `number` | `1` |
| expandText | 展開操作的文案 | `string` | `-` |
| collapseText | 收起操作的文案 | `string` | `-` |
| symbol | 省略的符號 | `string` | `...` |
| lineHeight | 容器的行高 | `string` \| `number`  | `20` |
| onClick | 文本點擊是觸發 | `() => void` | `-` |
| onChange | 點擊展開收起時觸發 | `(type: string) => void` | `-` |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-ellipsis-expand-collapse-color | 展示和收起的按鈕顏色 | `#3460fa` |