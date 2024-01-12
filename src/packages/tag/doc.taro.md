# Tag 标签

## 介绍

用于标记和分类的标签。

## 安装

```tsx
import { Tag } from '@nutui/nutui-react-taro';
```

## 代码实例

### 基础用法

:::demo

```tsx
import React from "react";
import { Tag } from '@nutui/nutui-react-taro';

const App = () => {
  return (
    <>
      <Tag type="primary">标签</Tag>
      <Tag type="info">标签</Tag>
      <Tag type="success">标签</Tag>
      <Tag type="danger">标签</Tag>
      <Tag type="warning">标签</Tag>
    </>
  )
}
export default App;
```

:::


### 样式风格

:::demo

```tsx
import React from 'react'
import { Failure } from '@nutui/icons-react-taro'
import { Tag } from '@nutui/nutui-react'

const App = () => {
  return (
    <>
      <Tag plain>标签</Tag>
      <Tag round type='primary'>标签</Tag>
      <Tag mark type='primary'>标签</Tag>
      <Tag closeable
           onClose={() => alert('Tag closed')}
           type='primary'>标签</Tag>
      <Tag closeable
           closeIcon={<Failure size={8}  />}
           onClose={() => alert('Tag closed')}
           type='primary'>标签</Tag>
    </>
  )
}
export default App
```

:::

### 自定义颜色

:::demo

```tsx
import React from "react";
import { Tag } from '@nutui/nutui-react-taro';

const App = () => {
  return (
    <>
      <Tag background="#FA685D">标签</Tag>
      <Tag background="#E9E9E9" color="#999999">标签</Tag>
      <Tag background="#FA2400" plain>标签</Tag>
    </>
  )
}
export default App;
```

:::

### 自定义颜色

:::demo

```tsx
import React from "react";
import { Tag } from '@nutui/nutui-react-taro';

const App = () => {
  return (
    <>
      <Tag type="info">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            height="10"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAsCAMAAAAgsQpJAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURUdwTP////////////////////////////////////////////////////////////////////////////////////VtkI8AAAAVdFJOUwAdEr+crtuABfTnao8pUMpddzJFO9SD9HUAAAFqSURBVDjLjVVbAoMgDBN5CfhC5P5XXYtuDilivyaEpg0p67oiJufnvmvF4FTEkOEZ52z8xrLVYb1EhJEjT1BXpV1gVzmsbxoN/PYVoIC9cTg/GJ6aSdycsw3Ab8juIYXIKlY0+V4kWGO0BNDfEgI5aDWVQJBmbS9BqPK4BhVeAR0JhKZDCRQFbiX0xbWN6EXd5WWWUJJTJvBEkbCmCpcoQh9G1AjNmIHyzpKvMrCaLuXB5awgtI8aiMvWN3K0514zuJmycxWLo2yWnR9jpK7ljM38NtHucqiO4WVe/ohLFjoul/bsxQ2Ev4yi/pysUKO8auR0TqbxOcm6jsta1Lmn1ySqXEfobWQZ7HhsrP535CZNgoprMdFEPt95ep/eQBP+LtUIuvKQuMLXdVGyqhZBnS0y8yQZFmAPgCwMW+SMeE2MGslyQjXOLm/9A8yI8Y0KT1MtiLa6Eei5NLsvApTc3iDTePauRa1hOD/vACHPGH6amQAAAABJRU5ErkJggg=="
            alt=""
          />
          {translated.tag}
        </div>
      </Tag>
    </>
  )
}
export default App;
```

:::

## Tag

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 标签类型 | `primary` \| `default` \| `info` \| `success` \| `danger` \| `warning` | `default` |
| background | 标签颜色 | `string` | `-` |
| color | 文本颜色，优先级高于color属性 | `string` | `white` |
| plain | 是否为空心样式 | `boolean` | `false` |
| round | 是否为圆角样式 | `boolean` | `false` |
| mark | 是否为标记样式 | `boolean` | `false` |
| closeable | 是否为可关闭标签 | `boolean` | `false` |
| closeIcon | 关闭按钮 | `ReactNode` | `null` |
| onClick | 点击事件 | `(e: MouseEvent) => void` | `-` |
| onClose | 关闭事件 | `(e?: any) => void` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-tag-padding | padding 值 | `0 2px` |
| \--nutui-tag-font-size | 字号 | `10px` |
| \--nutui-tag-border-radius | 圆角 | `2px` |
| \--nutui-tag-height | 高度 | `14px` |
| \--nutui-tag-color | 字色 | `#ffffff` |
| \--nutui-tag-border-width | 边宽 | `1px` |
| \--nutui-tag-background-color | 背景色 | `$color-title` |
| \--nutui-tag-primary-background-color | 主色背景色 | `$color-primary-gradient-1` |
| \--nutui-tag-success-background-color | 成功背景色 | `#4fc08d` |
| \--nutui-tag-info-background-color | 信息背景色 | `$color-info` |
| \--nutui-tag-warning-background-color | 警告背景色 | `#f3812e` |
| \--nutui-tag-danger-background-color | 危险背景色 | `$color-primary` |
| \--nutui-tag-round-border-radius | round模式下的圆角 | `8px` |
| \--nutui-tag-mark-border-radius | mark模式下的圆角 | `0 8px 8px 0` |