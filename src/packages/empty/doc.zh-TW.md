# Empty組件

## 介紹

空狀態時的占位提示

## 安裝

```tsx
import { Empty } from '@nutui/nutui-react'
```

## 代碼演示

### 基礎用法

:::demo

```tsx
import  React from "react";
import { Empty } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Empty
        title="標題"
        description="無數據"
        actions={[
          { text: "操作按鈕" },
          { text: "操作按鈕" },
        ]}
      />
      <Empty
        description="無數據"
        actions={[{ text: "操作按鈕" }]}
        style={{ marginTop: '10px' }}
      />
      <Empty description="無數據" />
    </>
  );
};
export default App;
```

:::

### Size 為 small 時，可用於半屏

:::demo

```tsx
import  React from "react";
import { Empty } from '@nutui/nutui-react';

const App = () => {
  return (
    <Empty description="無數據" size="small" />
  );
};
export default App;
```

:::

### 自定義內容大小

:::demo

```tsx
import  React from "react";
import { Empty } from '@nutui/nutui-react';

const App = () => {
  return (
    <Empty description="無數據" imageSize={100} />
  );
};
export default App;
```

:::

### 圖片類型，內置 3 個

:::demo

```tsx
import  React from "react";
import { Empty } from '@nutui/nutui-react';

const App = () => {
  return (
    <div className="show">
      <Empty status="empty" description="無內容" />
      <Empty status="error" description="加載失敗/錯誤" />
      <Empty status="network" description="無網絡" />
    </div>
  );
};
export default App;
```

:::

### 自定義圖片

> 如果您是京東站內相關項目的開發，我們特意為您提供了一繫列的缺省狀態的圖片鏈接，您可通過內部群獲取。

:::demo

```tsx
import  React from "react";
import { Empty } from '@nutui/nutui-react';

const App = () => {
  return (
    <Empty
      description="店鋪爲空" 
      image={<img src="https://storage.360buyimg.com/imgtools/44f3cc10c4-0cf9a7e0-c0ac-11ee-8375-193101bb1a46.png" alt=""/>}
     />
  );
};
export default App;
```

:::

### 底部內容

:::demo

```tsx
import  React from "react";
import { Empty, Button } from '@nutui/nutui-react';

const App = () => {
  return (
    <Empty status="error" description="加載失敗">
      <div style={{marginTop: "10px"}}>
        <Button icon="refresh" type="primary" size="small">重試</Button>
      </div>
    </Empty>
  );
};
export default App;
```

:::

## Empty

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| image | 圖片,支持傳入圖片 URL | `ReactNode` | `-` |
| imageSize | 圖片大小，number 類型單位為 px | `number` \| `string` | `-` |
| title | 圖片下方的標題 | `ReactNode` | `-` |
| description | 圖片下方的描述文字 | `ReactNode` | `-` |
| size | 組件整體大小，適配於全屏或半屏 | `small` \| `base` | `base` |
| status | 默認圖片錯誤類型 | `empty` \| `error` \| `network` | `empty` |
| actions | 可用於處理操作的一組數據 | `Array` | `[]` |

## 主題定製

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-empty-padding | Empty組件圖片的padding值 | `32px 40px` |
| \--nutui-empty-image-size | Empty組件圖片的尺寸大小 | `160px` |
| \--nutui-empty-image-small-size | size 為 small 時，Empty組件圖片的尺寸大小 | `120px` |
| \--nutui-empty-title-margin-top | Empty組件圖片標題margin-top的值 | `0px` |
| \--nutui-empty-title-margin-top | Empty組件圖片標題margin-top的值 | `8px` |
| \--nutui-empty-title-line-height | Empty組件圖片標題行高 | `$font-size-base` |
| \--nutui-empty-description-margin-top | Empty組件圖片描述margin-top的值 | `4px` |
| \--nutui-empty-description-line-height | Empty組件圖片描述行高 | `1.2` |