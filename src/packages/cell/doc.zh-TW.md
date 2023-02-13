# Cell 單元格

### 介紹

列表項，可組成列表。

### 安裝

```ts
// react
import { Cell, CellGroup } from '@nutui/nutui-react'

```

## 代碼演示

### 基本用法

:::demo

```tsx
import  React from "react";
import { Cell } from '@nutui/nutui-react';

const App = () => {
  const testClick = (event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    console.log('點擊事件')
}
  return (
    <>
    <Cell title="我是標題" desc="描述文字" />
    <Cell title="我是標題" subTitle="副標題描述" desc="描述文字" />
    <Cell
        title="點擊測試"
        onClick={(
        event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
        ) => testClick(event)}
    />
    <Cell title="圓角設置0" roundRadius={0} />
    </>
  );
};
export default App;
```

:::

### 尺寸設置 large

:::demo

```tsx
import  React from "react";
import { Cell } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
    <Cell size="large" title="我是標題" desc="描述文字" />
    <Cell
        size="large"
        title="我是標題"
        subTitle="副標題描述"
        desc="描述文字"
    />
    </>
  );
};
export default App;
```

:::

### 直接使用插槽

:::demo

```tsx
import  React from "react";
import { Cell } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
    <Cell>
        <div>自定義內容</div>
    </Cell>
    </>
  );
};
export default App;
```

:::

### 直接使用插槽(title slots)

:::demo

```tsx
import  React from "react";
import { Cell } from '@nutui/nutui-react';

const App = () => {
  return (
    <Cell
        title={
        <span>
            Title <b style={{ color: 'red' }}>1</b>
        </span>
        }
        desc="描述文字"
    />
  );
};
export default App;
```

:::

### 鏈接 | 分組用法

:::demo

```tsx
import  React from "react";
import { CellGroup,Cell } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
    <CellGroup
        title="鏈接 | 分組用法"
        desc="使用 nut-cell-group 支持 title desc slots"
    >
        <Cell title="鏈接" isLink />
        <Cell
        title="URL 跳轉"
        desc="https://jd.com"
        isLink
        url="https://jd.com"
        />
    </CellGroup>
    </>
  );
};
export default App;
```

:::

### 自定義右側箭頭區域

:::demo

```tsx
import  React from "react";
import { CellGroup,Cell,Switch } from '@nutui/nutui-react';

const App = () => {
  return (
    <CellGroup title="自定義右側箭頭區域">
      <Cell title="Switch" linkSlot={<Switch checked />} />
    </CellGroup>
  );
};
export default App;
```

:::

### 自定義左側 Icon 區域

:::demo

```tsx
import  React from "react";
import { CellGroup,Cell } from '@nutui/nutui-react';

const App = () => {
  return (
    <CellGroup title="自定義左側 Icon 區域">
        <Cell
        title="圖片"
        iconSlot={
            <img
            className="nut-icon"
            alt=""
            src="https://img11.360buyimg.com/imagetools/jfs/t1/137646/13/7132/1648/5f4c748bE43da8ddd/a3f06d51dcae7b60.png"
            />
        }
        />
    </CellGroup>
  );
};
export default App;
```

:::

### 單元格展示圖標

:::demo

```tsx
import  React from "react";
import { Cell } from '@nutui/nutui-react';

const App = () => {
  return (
    <Cell title="姓名" icon="my" desc="描述文案" isLink />
  );
};
export default App;
```

:::

### 只展示 desc ，可通過 desc-text-align 調整內容位置

:::demo

```tsx
import  React from "react";
import { Cell } from '@nutui/nutui-react';

const App = () => {
  return (
    <Cell descTextAlign="left" desc="描述文案" />
  );
};
export default App;
```

:::

### 垂直居中

通過 `center` 屬性可以讓 Cell 的左右內容都垂直居中。

:::demo

```tsx
import  React from "react";
import { Cell } from '@nutui/nutui-react';

const App = () => {
  return (
     <Cell center title="我是標題" subTitle="副標題描述" desc="描述文字" />
  );
};
export default App;
```

:::

## API


### CellGroup Prop

| 字段  | 說明     | 類型   | 默認值 |
|-------|----------|--------|--------|
| title | 分組標題 | String | -      |
| desc  | 分組描述 | String | -      |
| titleSlot        | 自定義`title`標題區域                         | React.ReactNode          | -  |
| descSlot        | 自定義`desc`描述區域                         | React.ReactNode          | -  |

### Cell Prop

| 字段           | 說明                                                                                           | 類型             | 默認值 |
|--------------|------------------------------------------------------------------------------------------------|------------------|--------|
| title        | 標題名稱                      |  React.ReactNode           | -      |
| subTitle     | 左側副標題                           |  React.ReactNode           | -      |
| desc         | 右側描述                                     | String      | -      |
| descTextAlign | 右側描述文本對齊方式 [text-align](https://www.w3school.com.cn/cssref/pr_text_text-align.asp)，只展示 desc 時可用 | String | right  |
| isLink       | 是否展示右側箭頭並開啟點擊反饋            | Boolean          | false  |
| to`v1.4.0 废弃`  | 點擊後跳轉的目標路由對象 | String  | -      |
| replace      | 是否在跳轉時替換當前頁面歷史                             | Boolean          | false  |
| roundRadius  | 圓角半徑                                      | String            | 6px    |
| url          | 點擊後跳轉的鏈接地址                                         | String           | -      |
| icon         | 左側 [圖標名稱](#/icon) 或圖片鏈接              | String           | -      |
| center       | 是否使內容垂直居中                                                                             | Boolean          | false  |
| size         | 單元格大小，可選值為 `large`                           | String          | -  |
| iconSlot     | 自定義左側`icon`區域                          | React.ReactNode          | -  |
| linkSlot     | 自定義右側`link`區域                         | React.ReactNode          | -  |




### Cell Event

| 名稱  | 說明     | 回調參數                                                       |
| ----- | -------- | -------------------------------------------------------------- |
| onClick`v1.3.8` | 點擊事件 | event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent> |


## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 默認值 |
| --- | --- |
| --nutui-cell-color | ` $gray1` |
| --nutui-cell-title-font | ` $font-size-2` |
| --nutui-cell-title-desc-font | ` $font-size-1` |
| --nutui-cell-desc-font | ` $font-size-2` |
| --nutui-cell-desc-color | ` $gray2` |
| --nutui-cell-subtitle-color | ` $gray2` |
| --nutui-cell-border-radius | ` 6px` |
| --nutui-cell-padding | ` 13px 16px` |
| --nutui-cell-line-height | ` 20px` |
| --nutui-cell-after-right | ` 16px` |
| --nutui-cell-after-border-bottom | `  2px solid #f5f6f7` |
| --nutui-cell-default-icon-margin | `  0 4px 0 0px` |
| --nutui-cell-large-title-font | `  $font-size-large` |
| --nutui-cell-large-title-desc-font | `  $font-size-base` |
| --nutui-cell-large-padding | ` 15px 16px` |
| --nutui-cell-background | ` $gray6` |
| --nutui-cell-box-shaow | `  0px 1px 7px 0px rgba(237, 238, 241, 1)` |
| --nutui-cell-group-title-padding | `  0 10px` |
| --nutui-cell-group-title-color | ` #909ca4` |
| --nutui-cell-group-title-font-size | `  $font-size-2` |
| --nutui-cell-group-title-line-height | `  20px` |
| --nutui-cell-group-desc-padding | ` 0 10px` |
| --nutui-cell-group-desc-color | ` #909ca4` |
| --nutui-cell-group-desc-font-size | `  $font-size-1` |
| --nutui-cell-group-desc-line-height | `  16px` |
| --nutui-cell-group-background-color | `  $white` |
