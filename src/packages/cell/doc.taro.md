# Cell 单元格

### 介绍

列表项，可组成列表。

### 安装

```ts
import { Cell, CellGroup } from '@nutui/nutui-react-taro'
```

## 代码演示

### 基本用法

:::demo

```tsx
import  React from "react";
import { Cell } from '@nutui/nutui-react-taro';

const App = () => {
  const testClick = (event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    console.log('点击事件')
}
  return (
    <>
    <Cell title="我是标题" extra="描述文字" />
    <Cell title="我是标题" description="副标题描述" extra="描述文字" />
    <Cell
        title="点击测试"
        onClick={(
        event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
        ) => testClick(event)}
    />
    <Cell title="圆角设置0" radius={0} />
    </>
  );
};
export default App;
```

:::

### 自定义内容

:::demo

```tsx
import  React from "react";
import { Cell } from '@nutui/nutui-react-taro';

const App = () => {
  return (
    <Cell>
        <div>自定义内容</div>
    </Cell>
  );
};
export default App;
```

:::

### 自定义标题区域

:::demo

```tsx
import  React from "react";
import { Cell } from '@nutui/nutui-react-taro';
import { My } from '@nutui/icons-react-taro'

const App = () => {
  return (
    <Cell
        title={
        <div style={{ display: 'inline-flex', alignItems: 'center' }}>
            <My />
            我是标题<span style={{ marginLeft: '5px' }}>{translated.title}</span>
        </div>
        }
        description={
        <span>副标题描述<b style={{ color: 'red' }}>1</b></span>
        }
        extra="描述文字"
    />
  );
};
export default App;
```

:::

### 自定义右侧区域

:::demo

```tsx
import  React from "react";
import { CellGroup,Cell,Switch  } from '@nutui/nutui-react-taro';


const App = () => {
  return (
    <CellGroup title="自定义右侧箭头区域">
      <Cell title="Switch" extra={<Switch checked />} />
    </CellGroup>
  );
};
export default App;
```

:::

### 链接 | 分组用法

:::demo

```tsx
import  React from "react";
import { CellGroup, Cell } from '@nutui/nutui-react-taro';
import { Right } from '@nutui/icons-react-taro'

const App = () => {
  const onJumpclick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    link: string
  ) => {
    const replace = false
    if (link) {
      replace ? redirectTo({ url: link }) : navigateTo({ url: link })
    }
  }
  return (
    <CellGroup
        title="链接 | 分组用法"
        description="使用 nut-cell-group 支持 title extra"
    >
        <Cell
        className="nutui-cell--clickable"
        title="链接"
        align="center"
        extra={<Right />}
        />
        <Cell
        className="nutui-cell--clickable"
        title="URL 跳转"
        extra={
            <>
            <span style={{ marginRight: '5px' }}>/pages/index/index</span>
            <Right />
            </>
        }
        align="center"
        onClick={(
            event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
        ) => onJumpclick(event, '/pages/index/index')}
        />
    </CellGroup>
  );
};
export default App;
```

:::

### 垂直居中

通过 `align` 属性可以让 Cell 的左右内容都垂直居中。

:::demo

```tsx
import  React from "react";
import { Cell } from '@nutui/nutui-react-taro';

const App = () => {
  return (
     <Cell align="center" title="我是标题" description="副标题描述" extra="描述文字" />
  );
};
export default App;
```

:::

## API


### CellGroup Prop

| 字段  | 说明     | 类型   | 默认值 |
|-------|----------|--------|--------|
| title | 分组标题 | string | -      |
| description  | 分组描述 | ReactNode | -      |


### Cell Prop

| 字段                 | 说明| 类型             | 默认值 |
|--------------------|----------------------------|------------------|--------|
| title              | 标题|  ReactNode           | -      |
| description           | 副标题 |  ReactNode           | -      |
| extra               | 右侧描述 | ReactNode      | -      |
| radius | 圆角半径 | string | `6px`    |
| align     | 纵轴方向上的对齐方式，可选值为：`flex-start`、`center`、`flex-end` | string          | `flex-start`  |

### Cell Event

| 名称  | 说明     | 回调参数                                                       |
| ----- | -------- | -------------------------------------------------------------- |
| onClick | 点击事件 | `event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>` |


## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 默认值 |
| --- | --- |
| --nutui-cell-color | `$gray1` |
| --nutui-cell-title-font | `$font-size-2` |
| --nutui-cell-title-description-font | `$font-size-1` |
| --nutui-cell-description-font | `$font-size-2` |
| --nutui-cell-description-color | `$gray2` |
| --nutui-cell-subtitle-color | `$gray2` |
| --nutui-cell-border-radius | `6px` |
| --nutui-cell-padding | `13px 16px` |
| --nutui-cell-line-height | `20px` |
| --nutui-cell-after-right | `16px` |
| --nutui-cell-after-border-bottom | `2px solid #f5f6f7` |
| --nutui-cell-default-icon-margin | `0 4px 0 0px` |
| --nutui-cell-background | `$gray6` |
| --nutui-cell-box-shaow | `0px 1px 7px 0px rgba(237, 238, 241, 1)` |
| --nutui-cell-group-title-padding | `0 10px` |
| --nutui-cell-group-title-color | `#909ca4` |
| --nutui-cell-group-title-font-size | `$font-size-2` |
| --nutui-cell-group-title-line-height | `20px` |
| --nutui-cell-group-description-padding | `0 10px` |
| --nutui-cell-group-description-color | `#909ca4` |
| --nutui-cell-group-description-font-size | `$font-size-1` |
| --nutui-cell-group-description-line-height | `16px` |
| --nutui-cell-group-background-color | `$white` |
