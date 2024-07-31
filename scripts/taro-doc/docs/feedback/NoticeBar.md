---
sidebar_class_name: hasIcon
---

# NoticeBar 公告栏

:::info 兼容性
仅支持H5及小程序，JDRN、鸿蒙端待支持
:::

用于循环播放展示一组消息通知。

## 引入

```tsx
import { NoticeBar } from '@dongdesign/ui'
```

## 示例代码

### 基础用法

```tsx
import React from 'react'
import { NoticeBar } from '@nutui/nutui-react-taro'

const Demo1 = () => {
  const text =
    'NutUI-React 是京东风格的 React 移动端组件库，开发和服务于移动 Web 界面的企业级产品。'
  const textShort = 'NutUI 是京东风格的移动端组件库'
  return (
    <>
      <NoticeBar content={text} />
      <br />
      <NoticeBar
        content={textShort}
        leftIcon={null}
        scrollable={false}
        closeable
      />
    </>
  )
}
export default Demo1
```

### 居中布局，不支持滚动

```tsx
import React from 'react'
import { NoticeBar } from '@nutui/nutui-react-taro'
import { ArrowRight } from '@nutui/icons-react-taro'

const Demo2 = () => {
  const text =
    'NutUI-React 是京东风格的 React 移动端组件库，开发和服务于移动 Web 界面的企业级产品。'
  const textShort = 'NutUI-React 是移动端组件库'
  return (
    <>
      <NoticeBar
        content={text}
        align="center"
        wrap
        rightIcon={<ArrowRight />}
      />
      <br />
      <NoticeBar content={text} align="center" rightIcon={<ArrowRight />} />
      <br />
      <NoticeBar
        content={textShort}
        align="center"
        rightIcon={<ArrowRight />}
      />
    </>
  )
}
export default Demo2
```

### 滚动播放

通知栏的内容长度溢出时会自动开启滚动播放，可通过 scrollable 属性可以控制该行为

```tsx
import React from 'react'
import { NoticeBar } from '@nutui/nutui-react-taro'

const Demo3 = () => {
  const text =
    'NutUI-React 是京东风格的 React 移动端组件库，开发和服务于移动 Web 界面的企业级产品。'
  const textShort = 'NutUI 是京东风格的移动端组件库'
  return (
    <>
      <NoticeBar content={textShort} scrollable />
      <br />
      <NoticeBar content={text} scrollable={false} />
    </>
  )
}
export default Demo3
```

### 关闭模式

```tsx
import React from 'react'
import { NoticeBar, Image } from '@nutui/nutui-react-taro'
import { Failure } from '@nutui/icons-react-taro'

const Demo4 = () => {
  const text =
    'NutUI-React 是京东风格的 React 移动端组件库，开发和服务于移动 Web 界面的企业级产品。'
  const hello = () => {
    console.log('hello world')
  }
  return (
    <>
      <NoticeBar closeable onClick={hello}>
        {text}
      </NoticeBar>
      <br />
      <NoticeBar closeable rightIcon={<Failure />} onClick={hello}>
        {text}
      </NoticeBar>
      <br />
      <NoticeBar
        leftIcon={
          <Image
            width="16px"
            height="16px"
            src="https://img13.360buyimg.com/imagetools/jfs/t1/72082/2/3006/1197/5d130c8dE1c71bcd6/e48a3b60804c9775.png"
          />
        }
      >
        <a href="https://www.jd.com" style={{ color: '#4d88ff' }}>
          京东商城
        </a>
      </NoticeBar>
    </>
  )
}
export default Demo4
```

### 多行展示

文字较长时，可以通过设置 wrap 属性来开启多行展示。默认为不滚动，可以通过设置 scrollable 控制为滚动。

```tsx
import React from 'react'
import { NoticeBar } from '@nutui/nutui-react-taro'

const Demo5 = () => {
  const text =
    'NutUI-React 是京东风格的 React 移动端组件库，开发和服务于移动 Web 界面的企业级产品。'
  return <NoticeBar content={text} wrap />
}
export default Demo5
```

### 自定义右侧内容

增加自定义右侧区域，区分rightIcon，更灵活配置。

```tsx
import React from 'react'
import { NoticeBar, Button } from '@nutui/nutui-react-taro'

const Demo6 = () => {
  const text =
    'NutUI-React 是京东风格的 React 移动端组件库，开发和服务于移动 Web 界面的企业级产品。'
  const textShort = 'NutUI 是京东风格的移动端组件库'
  return (
    <>
      <NoticeBar
        content={text}
        wrap
        closeable
        right={
          <>
            <Button size="small" color="#d9500b" fill="outline">
              一键清理
            </Button>
          </>
        }
      />
      <br />
      <NoticeBar
        content={textShort}
        wrap
        closeable
        right={
          <>
            <Button
              size="small"
              color="linear-gradient(90deg, #2B45AC 4.31%, #132D96 94.83%)"
            >
              去开通
            </Button>
          </>
        }
      />
    </>
  )
}
export default Demo6
```

### 自定义主题

```tsx
import React from 'react'
import { NoticeBar, ConfigProvider } from '@nutui/nutui-react-taro'

const Demo7 = () => {
  const text =
    'NutUI-React 是京东风格的 React 移动端组件库，开发和服务于移动 Web 界面的企业级产品。'
  return (
    <ConfigProvider
      theme={{
        nutuiNoticebarBackground: '#EDF4FF',
        nutuiNoticebarColor: '#3768FA',
      }}
    >
      <NoticeBar content={text} />
    </ConfigProvider>
  )
}
export default Demo7
```

### 垂直滚动

```tsx
import React from 'react'
import { NoticeBar } from '@nutui/nutui-react-taro'

const Demo8 = () => {
  const horseLamp1 = [
    'NoticeBar 公告栏',
    'Cascader 级联选择',
    'DatePicker 日期选择器',
    'CheckBox 复选按钮',
  ]
  const go = (item: any) => {
    console.log(item)
  }
  return (
    <div className="interstroll-list">
      <NoticeBar
        direction="vertical"
        list={horseLamp1}
        speed={10}
        duration={1000}
        height={30}
        onClick={(e) => {
          go(e.target.innerHtml)
        }}
        closeable
      />
    </div>
  )
}
export default Demo8
```

### 纵向模式：自定义左侧图标

```tsx
import React from 'react'
import { NoticeBar } from '@nutui/nutui-react-taro'

const Demo9 = () => {
  const horseLamp2 = [
    'NoticeBar 公告栏',
    'Cascader 级联选择',
    'DatePicker 日期选择器',
    'CheckBox 复选按钮',
  ]
  return (
    <>
      <NoticeBar
        direction="vertical"
        list={horseLamp2}
        speed={10}
        duration={2000}
        leftIcon={
          <img
            alt="notice"
            width="16px"
            height="16px"
            src="https://img13.360buyimg.com/imagetools/jfs/t1/72082/2/3006/1197/5d130c8dE1c71bcd6/e48a3b60804c9775.png"
          />
        }
        onClick={(e) => {
          console.log('listClick', e.target)
        }}
        onItemClick={(e, val) => {
          console.log('dom', e.target)
          console.log('value', val)
        }}
      />
    </>
  )
}
export default Demo9
```

### 纵向模式：自定义滚动内容

```tsx
import React from 'react'
import { NoticeBar } from '@nutui/nutui-react-taro'

const Demo10 = () => {
  const horseLamp3 = [
    'NoticeBar 公告栏',
    'Cascader 级联选择',
    'DatePicker 日期选择器',
    'CheckBox 复选按钮',
  ]

  return (
    <>
      <NoticeBar
        direction="vertical"
        height={50}
        speed={10}
        duration={1000}
        closeable
        onClose={() => {
          console.log('close')
        }}
      >
        {horseLamp3.map((item, index) => {
          return (
            <div
              className="custom-item"
              style={{ height: '50px', lineHeight: '50px' }}
              key={index}
              onClick={() => {
                console.log('custom-inner', item)
              }}
            >
              {item}
            </div>
          )
        })}
      </NoticeBar>
    </>
  )
}
export default Demo10
```

### 纵向模式：自定义右侧图标

```tsx
import React from 'react'
import { NoticeBar } from '@nutui/nutui-react-taro'
import { Fabulous } from '@nutui/icons-react-taro'

const Demo11 = () => {
  const horseLamp1 = [
    'NoticeBar 公告栏',
    'Cascader 级联选择',
    'DatePicker 日期选择器',
    'CheckBox 复选按钮',
  ]
  return (
    <>
      <NoticeBar
        className="custom"
        direction="vertical"
        list={horseLamp1}
        speed={10}
        duration={1000}
        onItemClick={(e, v) => {
          console.log('onclick-custom', v)
        }}
        rightIcon={<Fabulous width={16} height={16} color="#f0250f" />}
      />
    </>
  )
}
export default Demo11
```

## NoticeBar

### Props

| 属性 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| align | 布局方式, 值为`center`时，不支持滚动 | `left` \| `center` | `left` |
| direction | 滚动的方向，可选 horizontal、vertical | `string` | `horizontal` |
| content | 提示的信息 | `string` | `-` |
| closeable | 是否启用关闭模式 | `boolean` | `false` |
| leftIcon | 左边的 icon，closeable 模式下默认为空 | `ReactNode` | `-` |
| rightIcon | closeable 模式下，默认为 `<Close />` | `ReactNode` | `-` |
| right | 区别于rightIcon，为右边自定义区域，仅用于 direction='horizontal' 模式 | `ReactNode` | `-` |
| delay | 延时多少秒 | `string` \| `number` | `1` |
| scrollable | 是否可以滚动 | `boolean` | `true` |
| speed | 滚动速率 (px/s) | `number` | `50` |
| wrap | 是否开启文本换行 | `boolean` | `false` |
| onClick | 外层点击事件回调 | `(event: any) => void` | `-` |
| onClose | 关闭通知栏时触发 | `(event: any) => void` | `-` |
| onItemClick | 垂直滚动多条数据时，点击当前展示的信息时触发 | `(event: any, value: any) => void` | `-` |

### Props（direction=vertical）

| 属性 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| list | 纵向滚动数据列表 | `Array` | `[]` |
| speed | 滚动的速度 | `number` | `50` |
| duration | 停留时间(毫秒) | `number` | `1000` |
| height | 每一个滚动列的高度(px) | `number` | `40` |
| closeable | 是否启用右侧关闭图标，可以通过 rightIcon 自定义图标 | `boolean` | `false` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| :--- | :--- | :--- |
| \--nutui-noticebar-height | 高度 | `36px` |
| \--nutui-noticebar-background | 背景色 | `rgba(251, 248, 220, 1)` |
| \--nutui-noticebar-color | 文字色 | `#d9500b` |
| \--nutui-noticebar-font-size | 字号 | `$font-size-small` |
| \--nutui-noticebar-line-height | 行高 | `24px` |
| \--nutui-noticebar-box-padding | padding值 | `0 16px` |
| \--nutui-noticebar-border-radius | 圆角 | `0` |
| \--nutui-noticebar-wrap-padding | 多行展示的padding值 | `8px 16px` |
| \--nutui-noticebar-icon-gap | icon、text间距 | `4px` |
| \--nutui-noticebar-left-icon-width | 左侧icon的宽度和高度的设定 | `16px` |
| \--nutui-noticebar-right-icon-width | 右侧icon的宽度和高度的设定 | `16px` |
