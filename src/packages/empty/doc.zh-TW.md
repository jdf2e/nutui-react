# Empty組件

## 介紹

空狀態時的佔位提示

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
        description="輔助信息輔助信息"
        actions={[
          { text: "操作按鈕" },
          { text: "操作按鈕" },
        ]}
      />
      <Empty
        description="輔助信息輔助信息"
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

### Size 为 small 时，可用于半屏

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

:::demo

```tsx
import  React from "react";
import { Empty } from '@nutui/nutui-react';

const App = () => {
  return (
    <Empty
      description="無優惠券" 
      image={<img src="https://static-ftcms.jd.com/p/files/61a9e3313985005b3958672e.png" alt=""/>}
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
        <Button icon="refresh" type="primary">重試</Button>
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
| description | 圖片下方的描述文字 | `ReactNode` | `-` |
| status | 默認圖片錯誤類型 | `empty` \| `error` \| `network` | `empty` |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-empty-padding | Empty組件圖片的padding值 | `32px 0` |
| \--nutui-empty-image-size | Empty組件圖片的尺寸大小 | `170px` |
| \--nutui-empty-description-margin-top | Empty組件圖片描述margin-top的值 | `4px` |
| \--nutui-empty-description-color | Empty組件圖片描述顏色值 | `#666666` |
| \--nutui-empty-description-font-size | Empty組件圖片描述font-size值大小 | `14px` |
| \--nutui-empty-description-line-height | Empty組件圖片描述行高 | `20px` |
| \--nutui-empty-description-padding | Empty組件圖片描述padding值 | `0 40px` |