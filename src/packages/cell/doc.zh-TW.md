# Cell 單元格

## 介紹

列表項，可組成列表。

## 安裝

```tsx
import { Cell } from '@nutui/nutui-react'
```

## 代碼演示

### 基础用法

:::demo

```tsx
import  React from "react";
import { Cell, Toast } from '@nutui/nutui-react';

const App = () => {
  const testClick = (event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    Toast.show('點擊事件')
}
  return (
    <>
    <Cell title="我是標題" extra="描述文字" />
    <Cell title="我是標題" description="我是描述" extra="描述文字" />
    <Cell
        title="點擊測試"
        onClick={(
        event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
        ) => testClick(event)}
    />
    <Cell title="圓角設置0" radius={0} />
    </>
  );
};
export default App;
```

:::

### 自定義內容

:::demo

```tsx
import  React from "react";
import { Cell } from '@nutui/nutui-react';

const App = () => {
  return (
    <Cell>
        <div>自定義內容</div>
    </Cell>
  );
};
export default App;
```

:::

### 自定義標題區域

:::demo

```tsx
import  React from "react";
import { Cell } from '@nutui/nutui-react';
import { My } from '@nutui/icons-react'

const App = () => {
  return (
    <Cell
        title={
        <div style={{ display: 'inline-flex', alignItems: 'center' }}>
            <My />
            我是標題<span style={{ marginLeft: '5px' }}>{translated.title}</span>
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

### 自定義右側區域

:::demo

```tsx
import React from 'react'
import { Cell, Switch } from '@nutui/nutui-react'


const App = () => {
  return (
    <Cell.Group title='自定義右側箭頭區域'>
      <Cell title='Switch' extra={<Switch defaultChecked />} />
    </Cell.Group>
  )
}
export default App
```

:::

### 鏈接 | 分組用法

:::demo

```tsx
import React from 'react'
import { Cell, Button } from '@nutui/nutui-react'
import { Right, Star } from '@nutui/icons-react'

const App = () => {
  const onJumpclick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    url: string,
  ) => {
    const replace = false
    if (url) {
      replace ? window.location.replace(url) : (window.location.href = url)
    }
  }
  return (
    <>
      <Cell.Group
        title='鏈接 | 分組用法'
        description='使用 nut-cell-group 支持 title extra'
      >
        <Cell
          className='nutui-cell--clickable'
          title='鏈接'
          align='center'
          extra={<Right />}
        />
        <Cell
          className='nutui-cell--clickable'
          title='URL 跳轉'
          extra={
            <>
              <span style={{ marginRight: '5px' }}>https://jd.com</span>
              <Right />
            </>
          }
          align='center'
          onClick={(
            event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
          ) => onJumpclick(event, 'https://jd.com')}
        />
      </Cell.Group>

      <Cell.Group>
        <Cell
          title={
            <div style={{ display: 'flex', alignItems: 'flex-end' }}>
              <span style={{ fontWeight: '500' }}>我是標題</span>
              <span
                style={{
                  color: '#8C8C8C',
                  fontSize: '10px',
                  marginLeft: '5px',
                  lineHeight: 1.5,
                }}
              >
                  我是描述
                </span>
            </div>
          }
          extra={
            <div style={{ display: 'flex', alignItems: 'center' }}>
              More
              <Right width={12} height={12} style={{ marginLeft: '5px' }} />
            </div>
          }
        />
        <Cell>
          <div style={{ minHeight: '50px' }}>自定義內容</div>
        </Cell>
        <Cell
          align='center'
          title={
            <div
              style={{
                color: '#8C8C8C',
                fontSize: '12px',
              }}
            >
              我是描述
            </div>
          }
          extra={<Button type='primary'>Action</Button>}
        />
      </Cell.Group>

      <Cell.Group>
        <Cell
          title={
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Star style={{ marginRight: '5px' }} /> 我是標題
            </div>
          }
          extra={<Right />}
        />
        <Cell>
          <div style={{ minHeight: '50px' }}>自定義內容</div>
        </Cell>
        <Cell align='center' extra={<Button type='primary'>Action</Button>} />
      </Cell.Group>

      <Cell.Group>
        <Cell
          title={
            <div
              style={{ display: 'flex', alignItems: 'center', color: 'blue' }}
            >
              我是標題
            </div>
          }
        />
        <Cell>
          <div style={{ color: '#26bf26' }}>自定義內容</div>
        </Cell>
      </Cell.Group>
    </>
  )
}
export default App
```

:::

### 垂直居中

通過 `align` 屬性可以讓 Cell 的左右內容都垂直居中。

:::demo

```tsx
import  React from "react";
import { Cell } from '@nutui/nutui-react';

const App = () => {
  return (
     <Cell align="center" title="我是標題" description="我是描述" extra="描述文字" />
  );
};
export default App;
```

:::

## Cell.Group

### Props

| 属性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| title | 分組標題 | `ReactNode` | `-` |
| description | 分組描述 | `ReactNode` | `-` |
| divider | 單元格之間是否有分割線 | `boolean` | `true` |

## Cell

### Props

| 属性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| title | 標題 | `ReactNode` | `-` |
| description | 描述 | `ReactNode` | `-` |
| extra | 右側描述 | `ReactNode` | `-` |
| radius | 圓角半徑 | `string` | `6px` |
| align | 縱軸方向上的對齊方式，可選值為：`flex-start`、`center`、`flex-end` | `string` | `flex-start` |
| onClick | 點擊事件 | `onClick: (event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => void` | `false` |

## 主題定製

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-cell-title-color | 單元格標題字體顏色 | `$gray1` |
| \--nutui-cell-title-font-size | 單元格標題字體大小 | `$font-size-2` |
| \--nutui-cell-description-color | 單元格描述字體顏色 | `$gray2` |
| \--nutui-cell-description-font-size | 單元格描述字體大小 | `$font-size-1` |
| \--nutui-cell-extra-color | 單元格右側描述字體顏色 | `$gray2` |
| \--nutui-cell-extra-font-size | 單元格右側描述字體大小 | `$font-size-2` |
| \--nutui-cell-border-radius | 單元格圓角大小 | `6px` |
| \--nutui-cell-padding | 單元格內邊距 | `13px 16px` |
| \--nutui-cell-line-height | 單元格行高 | `20px` |
| \--nutui-cell-divider-left | 單元格分割線左邊距 | `16px` |
| \--nutui-cell-divider-right | 單元格分割線右邊距 | `16px` |
| \--nutui-cell-divider-border-bottom | 單元格分割線下邊框 | `2px solid #f5f6f7` |
| \--nutui-cell-background-color | 單元格背景顏色 | `$gray6` |
| \--nutui-cell-box-shadow | 單元格陰影 | `0px 1px 7px 0px rgba(237, 238, 241, 1)` |
| \--nutui-cell-group-title-padding | 單元格分組的標題內邊距 | `0 10px` |
| \--nutui-cell-group-title-color | 單元格分組的標題字體顏色 | `#909ca4` |
| \--nutui-cell-group-title-font-size | 單元格分組的標題字體大小 | `$font-size-2` |
| \--nutui-cell-group-title-line-height | 單元格分組的標題行高 | `20px` |
| \--nutui-cell-group-description-padding | 單元格分組的描述內邊距 | `0 10px` |
| \--nutui-cell-group-description-color | 單元格分組的描述顏色 | `#909ca4` |
| \--nutui-cell-group-description-font-size | 單元格分組的描述字體大小 | `$font-size-1` |
| \--nutui-cell-group-description-line-height | 單元格分組的描述行高 | `16px` |
| \--nutui-cell-group-background-color | 單元格分組的背景顏色 | `$white` |