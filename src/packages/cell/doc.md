# Cell 单元格

### 介绍

列表项，可组成列表。

### 安装

```ts
// react
import { Cell, CellGroup } from '@nutui/nutui-react'

```

## 代码演示

### 基本用法

:::demo

```tsx
import  React from "react";
import { Cell } from '@nutui/nutui-react';

const App = () => {
  const testClick = (event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    console.log('点击事件')
}
  return (
    <>
    <Cell title="我是标题" desc="描述文字" />
    <Cell title="我是标题" subTitle="副标题描述" desc="描述文字" />
    <Cell
        title="点击测试"
        onClick={(
        event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
        ) => testClick(event)}
    />
    <Cell title="圆角设置0" roundRadius={0} />
    </>
  );
};
export default App;
```

:::

### 尺寸设置 large

:::demo

```tsx
import  React from "react";
import { Cell } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
    <Cell size="large" title="我是标题" desc="描述文字" />
    <Cell
        size="large"
        title="我是标题"
        subTitle="副标题描述"
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
        <div>自定义内容</div>
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

### 链接 | 分组用法

:::demo

```tsx
import  React from "react";
import { CellGroup,Cell } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
    <CellGroup
        title="链接 | 分组用法"
        desc="使用 nut-cell-group 支持 title desc slots"
    >
        <Cell title="链接" isLink />
        <Cell
        title="URL 跳转"
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

### 自定义右侧箭头区域

:::demo

```tsx
import  React from "react";
import { CellGroup,Cell,Switch } from '@nutui/nutui-react';

const App = () => {
  return (
    <CellGroup title="自定义右侧箭头区域">
      <Cell title="Switch" linkSlot={<Switch checked />} />
    </CellGroup>
  );
};
export default App;
```

:::

### 自定义左侧 Icon 区域

:::demo

```tsx
import  React from "react";
import { CellGroup,Cell } from '@nutui/nutui-react';

const App = () => {
  return (
    <CellGroup title="自定义左侧 Icon 区域">
        <Cell
        title="图片"
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

### 单元格展示图标

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

### 只展示 desc ，可通过 desc-text-align 调整内容位置

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

通过 `center` 属性可以让 Cell 的左右内容都垂直居中。

:::demo

```tsx
import  React from "react";
import { Cell } from '@nutui/nutui-react';

const App = () => {
  return (
     <Cell center title="我是标题" subTitle="副标题描述" desc="描述文字" />
  );
};
export default App;
```

:::

## API


### CellGroup Prop

| 字段  | 说明     | 类型   | 默认值 |
|-------|----------|--------|--------|
| title | 分组标题 | String | -      |
| desc  | 分组描述 | String | -      |
| titleSlot        | 自定义`title`标题区域                         | React.ReactNode          | -  |
| descSlot        | 自定义`desc`描述区域                         | React.ReactNode          | -  |

### Cell Prop

| 字段                 | 说明                                                                                           | 类型             | 默认值 |
|--------------------|------------------------------------------------------------------------------------------------|------------------|--------|
| title              | 标题名称                      |  React.ReactNode           | -      |
| subTitle           | 左侧副标题                           |  React.ReactNode           | -      |
| desc               | 右侧描述                                     | String      | -      |
| descTextAlign      | 右侧描述文本对齐方式 [text-align](https://www.w3school.com.cn/cssref/pr_text_text-align.asp)，只展示 desc 时可用 | String | right  |
| isLink             | 是否展示右侧箭头并开启点击反馈            | Boolean          | false  |
| to`v1.4.0废弃`        | 点击后跳转的目标路由对象 | String  | -      |
| replace            | 是否在跳转时替换当前页面历史                             | Boolean          | false  |
| roundRadius`v1.2.0` | 圆角半径                                      | String            | 6px    |
| url                | 点击后跳转的链接地址                                         | String           | -      |
| icon               | 左侧 [图标名称](#/icon) 或图片链接              | String           | -      |
| center`v1.2.0`     | 是否使内容垂直居中                                                                             | Boolean          | false  |
| size`v1.2.0`       | 单元格大小，可选值为 `large`                           | String          | -  |
| iconSlot`v1.2.0`   | 自定义左侧`icon`区域                          | React.ReactNode          | -  |
| linkSlot`v1.2.0`   | 自定义右侧`link`区域                         | React.ReactNode          | -  |




### Cell Event

| 名称  | 说明     | 回调参数                                                       |
| ----- | -------- | -------------------------------------------------------------- |
| onClick`v1.3.8` | 点击事件 | event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent> |


## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 默认值 |
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
