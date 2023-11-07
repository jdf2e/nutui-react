# BackTop 返回顶部

## 介绍

提供较长的页面快捷返回顶部功能。

## 安装

```tsx
import { BackTop } from '@nutui/nutui-react';
```

## 代码演示

### 基础用法

:::demo

```tsx
import React from "react";
import { BackTop, Cell } from '@nutui/nutui-react';

const App = () => {
  return (
    <div id="target" style={{height: '100vh'}}>
      {new Array(24).fill(0).map((_, index) => {
        return <Cell key={index}>我是测试数据{index}</Cell>
      })}
      <BackTop target="target" />
    </div>
  )
}
export default App;
```

:::

### 设置出现位置

:::demo

```tsx
import React from "react";
import { BackTop, Cell } from '@nutui/nutui-react';

const App = () => {
  return (
    <div id="target" style={{height: '100vh'}}>
      {new Array(24).fill(0).map((_, index) => {
        return <Cell key={index}>我是测试数据{index}</Cell>
      })}
      <BackTop target="target" threshold={200} bottom={50} />
    </div>
  )
}
export default App;
```

:::

### 自定义样式

:::demo

```tsx
import React from "react";
import { Top } from '@nutui/icons-react';
import { BackTop, Cell } from '@nutui/nutui-react';

const App = () => {
  return (
    <div id="target" style={{height: '100vh'}}>
      {new Array(24).fill(0).map((_, index) => {
        return <Cell key={index}>我是测试数据{index}</Cell>
      })}
      <BackTop threshold={100} bottom={110}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Top width={12} height={12} />
          <div style={{ fontSize: '12px' }}>顶部</div>
        </div>
      </BackTop>
    </div>
  )
}
export default App;
```

:::

### 父级元素内滚动

:::demo

```tsx
import React from "react";
import { BackTop, Cell } from '@nutui/nutui-react';

const App = () => {
  return (
    <div id="target" style={{ height: '800px', overflowY: 'auto' }}>
      {new Array(24).fill(0).map((_, index) => {
        return <Cell key={index}>我是测试数据{index}</Cell>
      })}
      <BackTop target="target" threshold={100} bottom={50} />
    </div>
  );
};
export default App;
```

:::

### click 事件

:::demo

```tsx
import React from "react";
import { BackTop, Cell } from '@nutui/nutui-react';

const App = () => {
  const handleClick = () => {
    console.log('触发返回顶部')
  }
  return (
    <div id="target" style={{ height: '1000px', overflowY: 'auto' }}>
      {new Array(24).fill(0).map((_, index) => {
        return <Cell key={index}>我是测试数据{index}</Cell>
      })}
      <BackTop threshold={100} bottom={50} onClick={handleClick} />
    </div>
  );
};
export default App;
```

:::

## BackTop

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| target | 获取监听的目标元素 | `string` | `-` |
| threshold | 页面垂直滚动多高后出现 | `number` | `200` |
| zIndex | 设置组件页面层级 | `number` | `10` |
| duration | 设置动画持续时间，为 0 时表示无动画 | `number` | `1000` |
| onClick | 按钮点击时触发事件 | `(event: MouseEvent<HTMLDivElement>) => void` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-backtop-border-color | 边框颜色 | `#e0e0e0` |