# Cell 单元格

### 介绍

列表项，可组成列表。

### 安装

```javascript
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
        click={(event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>) =>
        testClick(event)}
     />
    </>
  );
};
export default App;
```

:::

### 直接使用

:::demo

```tsx
import  React from "react";
import { Cell } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
    <Cell title="我是标题" desc="描述文字">
      <div>自定义内容</div>
    </Cell>
    </>
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
    <CellGroup title="链接 | 分组用法">
      <Cell title="链接" isLink />
      <Cell title="URL 跳转" desc="https://m.jd.com/" isLink url="https://m.jd.com/" />
      <Cell title="路由跳转 ’/‘ " to="/" />
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
      <Cell title="Switch" extra={<Switch checked />} />
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
    <Cell title="姓名" icon="my" desc="张三" isLink />
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
    <Cell descTextAlign="left" desc="张三" />
  );
};
export default App;
```

:::

## API

### Prop

| 字段            | 说明                                                                                         | 类型            | 默认值 |
| --------------- | -------------------------------------------------------------------------------------------- | --------------- | ------ |
| title           | 标题名称                                                                                     | String          | -      |
| sub-title       | 左侧副标题                                                                                   | String          | -      |
| desc            | 右侧描述                                                                                     | String          | -      |
| desc-text-align | 右侧描述文本对齐方式 [text-align](https://www.w3school.com.cn/cssref/pr_text_text-align.asp) | String          | right  |
| is-link         | 是否展示右侧箭头并开启点击反馈                                                               | Boolean         | false  |
| icon            | 左侧 [图标名称](#/icon) 或图片链接                                                           | String          | -      |
| url             | 点击后跳转的链接地址                                                                         | String          | -      |
| to              | 点击后跳转的目标路由对象                                                                     | String          | -      |
| replace         | 是否在跳转时替换当前页面历史                                                                 | Boolean         | false  |
| extra           | 其他                                                                                         | React.ReactNode | -      |

### Event

| 名称  | 说明     | 回调参数                                                       |
| ----- | -------- | -------------------------------------------------------------- |
| click | 点击事件 | event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent> |
