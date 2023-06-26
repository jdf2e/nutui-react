# SearchBar组件

## 介绍

用于搜索场景的输入框组件。

## 安装

```tsx
import { SearchBar } from '@nutui/nutui-react-taro';
```

## 代码演示

### 基础用法

`SearchBar` 的 `placeholder` 属性支持自定义。

:::demo

```tsx
import React from "react";
import { SearchBar } from '@nutui/nutui-react-taro';

const App = () => {
  return <>
    <SearchBar placeholder="上京东，购好物" />
  </>
}
export default App;
```

:::

### 搜索框形状及最大长度

`SearchBar` 的 `shape` 属性支持定义圆角直角，`maxLength` 可控制输入字符的最大长度。

:::demo

```tsx
import React from "react";
import { SearchBar } from '@nutui/nutui-react-taro';

const App = () => {
  return <>
    <SearchBar shape="round" maxLength={5} />
  </>
}
export default App;
```

:::

### 搜索框内外背景设置

`SearchBar` 通过 CSS 变量设置。

:::demo

```tsx
import React from "react";
import { SearchBar, ConfigProvider } from '@nutui/nutui-react-taro';

const App = () => {
  return <>
    <ConfigProvider
      theme={{
        nutuiSearchbarBackground: 'var(--nutui-brand-color)',
        nutuiSearchbarInputBackground: '#eee',
        nutuiSearchbarInputTextAlign: 'right',
      }}
    >
      <SearchBar onSearch={(value) => Toast.text(value)} />
    </ConfigProvider>
  </>
}
export default App;
```

:::

### 搜索框文本设置

`SearchBar` 的 `left` 属性可以设置搜索框左侧内容，`right` 属性可以设置搜索框右侧内容

:::demo

```tsx
import React from "react";
import { SearchBar } from '@nutui/nutui-react-taro';

const App = () => {
  return <>
    <SearchBar left="文本" right="测试" />  
  </>
}
export default App;

```

:::

### 自定义图标设置

`SearchBar` 的 `left` `right` `rightIn` 属性可以设置自定义图标

:::demo

```tsx
import React from "react";
import { SearchBar, Icon } from '@nutui/nutui-react-taro';
import { HeartFill1, StarFill, ArrowDown } from '@nutui/icons-react-taro'

const App = () => {
  return <>
    <SearchBar
      left={<HeartFill1 size={14}/>}
      right={<StarFill size={14} />}
      rightIn={
        <StarFill
          size={14}
          onClick={() => {
            console.log('StarFill right in')
          }}
        />
      }
    />
  </>
}
export default App;

```

:::

### 自定义设置

`SearchBar` 的 `leftIn` 属性可以设置自定义内容

:::demo

```tsx
import React from "react";
import { SearchBar, PopOver } from '@nutui/nutui-react-taro';
import {  ArrowDown } from '@nutui/icons-react-taro'

const App = () => {
  return <>
    <SearchBar
      leftIn={
        <PopOver
          visible={lightTheme}
          onClick={() => {
            lightTheme ? setLightTheme(false) : setLightTheme(true)
          }}
          list={itemList}
        >
          <div style={{ fontSize: '12px', width: '50px', display: 'flex' }}>
            更多
            <ArrowDown size={8}/>
          </div>
        </PopOver>
      }
    />
  </>
}
export default App;

```

:::

### 数据改变监听

`SearchBar` 的 `onChange` 可获取输入的内容。

:::demo

```tsx
import React, { useState } from 'react'
import { SearchBar } from '@nutui/nutui-react-taro';

const App = () => {
  const [value, setValue] = useState('')
  const change = (val: string, e: Event) => {
    setValue(val)
  }
  return <>
    <SearchBar
      onChange={(val: string, e: Event) => change(val, e)}
      maxLength={10}
    />
    value：{value}
  </>
}
export default App;
```

:::

## SearchBar

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 当前输入的值 | `string` | `-` |
| placeholder | 输入框默认暗纹 | `string` | `请输入` |
| shape | 搜索框形状，可选值为 `round` | `string` | `square` |
| disabled | 是否禁用输入框 | `boolean` | `false` |
| readOnly | 输入框只读 | `boolean` | `false` |
| maxLength | 最大输入长度 | `number` | `9999` |
| clearable | 是否展示清除按钮 | `boolean` | `true` |
| autoFocus | 是否自动聚焦 | `boolean` | `false` |
| left | 搜索框左侧区域 | `ReactNode` | `-` |
| right | 搜搜框右侧区域 | `ReactNode` | `-` |
| leftIn | 输入框内左侧区域 | `ReactNode` | `<Search size="12" />` |
| rightIn | 输入框内右侧区域 | `ReactNode` | `-` |
| onChange | 输入内容时触发 | `(value: string, event: Event) => void` | `-` |
| onFocus | 聚焦时触发 | `(value: string, event: Event) => void` | `-` |
| onBlur | 失焦时触发 | `(value: string, event: Event) => void` | `-` |
| onSearch | 确定搜索时触发 | `(val: string) => void` | `-` |
| onInputClick | 点击输入区域时触发 | `(event: Event) => void` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-searchbar-width | 搜索框的宽度 | `100%` |
| \--nutui-searchbar-background | 搜索框背景色 | `$gray6` |
| \--nutui-searchbar-padding | 搜索框的padding值 | `9px 10px` |
| \--nutui-searchbar-content-border-radius | 搜索框内容区圆角 | `2px` |
| \--nutui-searchbar-left-fontsize | 搜索框外左侧区域字号 | `12px` |
| \--nutui-searchbar-left-padding | 搜索框外左侧区域padding值 | `0 12px 0 0` |
| \--nutui-searchbar-left-color | 搜索框外左侧区域字色 | `$gray1` |
| \--nutui-searchbar-right-fontsize | 搜索框外右侧区域字号 | `14px` |
| \--nutui-searchbar-right-padding | 搜索框外右侧区域padding值 | `0 0 0 8px` |
| \--nutui-searchbar-right-color | 搜索框外右侧区域字色 | `$gray1` |
| \--nutui-searchbar-input-height | 搜索框输入区高度 | `32px` |
| \--nutui-searchbar-input-padding | 搜索框输入区padding | `0 28px` |
| \--nutui-searchbar-input-background | 搜索框输入区背景色 | `#f7f7f7` |
| \--nutui-searchbar-input-text-color | 搜索框输入区字色 | `$gray1` |
| \--nutui-searchbar-input-curror-color | 搜索框输入区输入色 | `$gray1` |
| \--nutui-searchbar-input-width | 搜索框输入区宽度 | `100%` |
| \--nutui-searchbar-input-text-align | 搜索框输入区对齐方式 | `100%` |
| \--nutui-searchbar-input-border-radius | 搜索框输入区圆角 | `16px` |
| \--nutui-searchbar-clear-icon-padding | 搜索框清除icon的padding值 | `0 10px 0 5px` |