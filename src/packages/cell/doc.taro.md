# Cell 单元格

## 介绍

列表项，可组成列表。

## 安装

```tsx
import { Cell } from '@nutui/nutui-react-taro'
```

## 代码演示

### 基础用法

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
    <Cell title="我是标题" description="我是描述" extra="描述文字" />
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
        <span>我是描述<b style={{ color: 'red' }}>1</b></span>
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
import React from 'react'
import { Cell, Switch } from '@nutui/nutui-react-taro'


const App = () => {
  return (
    <Cell.Group title='自定义右侧箭头区域'>
      <Cell title='Switch' extra={<Switch defaultChecked />} />
    </Cell.Group>
  )
}
export default App
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
     <Cell align="center" title="我是标题" description="我是描述" extra="描述文字" />
  );
};
export default App;
```

:::

### 链接 | 分组用法

:::demo

```tsx
import React from 'react'
import { Cell } from '@nutui/nutui-react-taro'
import { Right } from '@nutui/icons-react-taro'

const App = () => {
  const onJumpclick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    link: string,
  ) => {
    const replace = false
    if (link) {
      replace ? redirectTo({ url: link }) : navigateTo({ url: link })
    }
  }
  return (
    <Cell.Group
      title='链接 | 分组用法'
      description='使用 nut-cell-group 支持 title extra'
    >
      <Cell
        className='nutui-cell--clickable'
        title='链接'
        align='center'
        extra={<Right />}
      />
      <Cell
        className='nutui-cell--clickable'
        title='URL 跳转'
        extra={
          <>
            <span style={{ marginRight: '5px' }}>/pages/index/index</span>
            <Right />
          </>
        }
        align='center'
        onClick={(
          event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
        ) => onJumpclick(event, '/pages/index/index')}
      />
    </Cell.Group>
  )
}
export default App
```

:::

### 分组用法

通过 `divider` 属性可以让单元格之间不显示下边线。

:::demo

```tsx
import React from 'react'
import { Cell } from '@nutui/nutui-react-taro'

const App = () => {
  return (
    <Cell.Group
      divider={false}
      title='分组用法'
      description='单元格之间不显示下边线'
    >
      <Cell title='我是标题' extra='描述文字' />
      <Cell title='我是标题' extra='描述文字' />
    </Cell.Group>
  )
}
export default App
```

:::

## Cell.Group

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 分组标题 | `ReactNode` | `-` |
| description | 分组描述 | `ReactNode` | `-` |
| divider | 单元格之间是否有分割线 | `boolean` | `true` |

## Cell

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 标题 | `ReactNode` | `-` |
| description | 描述 | `ReactNode` | `-` |
| extra | 右侧描述 | `ReactNode` | `-` |
| radius | 圆角半径 | `string` | `6px` |
| align | 纵轴方向上的对齐方式，可选值为：`flex-start`、`center`、`flex-end` | `string` | `flex-start` |
| onClick | 点击事件 | `onClick: (event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => void` | `false` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-cell-title-color | 单元格标题字体颜色 | `$color-title` |
| \--nutui-cell-title-font-size | 单元格标题字体大小 | `$font-text` |
| \--nutui-cell-description-color | 单元格描述字体颜色 | `$color-text` |
| \--nutui-cell-description-font-size | 单元格描述字体大小 | `$font-size-small` |
| \--nutui-cell-extra-color | 单元格右侧描述字体颜色 | `$color-text` |
| \--nutui-cell-extra-font-size | 单元格右侧描述字体大小 | `$font-text` |
| \--nutui-cell-border-radius | 单元格圆角大小 | `6px` |
| \--nutui-cell-padding | 单元格内边距 | `13px 16px` |
| \--nutui-cell-line-height | 单元格行高 | `20px` |
| \--nutui-cell-divider-left | 单元格分割线左边距 | `16px` |
| \--nutui-cell-divider-right | 单元格分割线右边距 | `16px` |
| \--nutui-cell-divider-border-bottom | 单元格分割线下边框 | `2px solid #f5f6f7` |
| \--nutui-cell-background-color | 单元格背景颜色 | `$white` |
| \--nutui-cell-box-shadow | 单元格阴影 | `0px 1px 7px 0px rgba(237, 238, 241, 1)` |
| \--nutui-cell-group-title-padding | 单元格分组的标题内边距 | `0 10px` |
| \--nutui-cell-group-title-color | 单元格分组的标题字体颜色 | `#909ca4` |
| \--nutui-cell-group-title-font-size | 单元格分组的标题字体大小 | `$font-text` |
| \--nutui-cell-group-title-line-height | 单元格分组的标题行高 | `20px` |
| \--nutui-cell-group-description-padding | 单元格分组的描述内边距 | `0 10px` |
| \--nutui-cell-group-description-color | 单元格分组的描述颜色 | `#909ca4` |
| \--nutui-cell-group-description-font-size | 单元格分组的描述字体大小 | `$font-size-small` |
| \--nutui-cell-group-description-line-height | 单元格分组的描述行高 | `16px` |
| \--nutui-cell-group-background-color | 单元格分组的背景颜色 | `$white` |