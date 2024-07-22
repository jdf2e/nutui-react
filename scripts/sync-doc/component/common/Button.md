# Button 按钮

按钮用于触发一个操作，如提交表单。

## 引入

```tsx
import { Button } from '@dongdesign/ui';
```

## 示例代码

### 设置 open-type

```tsx
import React from 'react'
import { Button, Cell } from '@dongdesign/ui'

const Demo1 = () => {
  const marginStyle = { margin: '8px' }
  return (
    <Cell style={{ flexWrap: 'wrap' }}>
      <Button openType="share" style={marginStyle}>
        Share
      </Button>
      <Button openType="openSetting" style={marginStyle}>
        打开授权设置页
      </Button>
    </Cell>
  )
}
export default Demo1

```

### 按钮类型

按钮支持 `default`、`primary`、`info`、`warning`、`danger`、`success` 六种类型，默认为 `default`。

```tsx
import React from 'react'
import { Button, Cell } from '@dongdesign/ui'
import { harmony } from '@dongdesign/ui/dist/utils/platform-taro'
import pxTransform from '@dongdesign/ui/dist/utils/px-transform'

const Demo2 = () => {
  const marginStyle = harmony()
    ? {
        width: pxTransform(90),
        marginRight: pxTransform(8),
        marginTop: pxTransform(8),
        marginLeft: pxTransform(8),
        marginBottom: pxTransform(8),
      }
    : {
        marginRight: 8,
        marginTop: 8,
        marginLeft: 8,
        marginBottom: 8,
      }
  return (
    <Cell style={{ flexWrap: 'wrap' }}>
      <Button type="primary" style={marginStyle}>
        Primary
      </Button>
      <Button type="info" style={marginStyle}>
        Info
      </Button>
      <Button type="default" style={marginStyle}>
        Default
      </Button>
      <Button type="danger" style={marginStyle}>
        Danger
      </Button>
      <Button type="warning" style={marginStyle}>
        Warning
      </Button>
      <Button type="success" style={marginStyle}>
        Success
      </Button>
    </Cell>
  )
}
export default Demo2

```

### 填充模式

按钮支持 `solid`、 `outline`、 `dashed`、`none`四种类型，默认为 `solid`。

```tsx
import React from 'react'
import { Button, Cell } from '@dongdesign/ui'
import pxTransform from '@dongdesign/ui/dist/utils/px-transform'

const Demo3 = () => {
  const marginStyle = {
    width: pxTransform(80),
    marginRight: pxTransform(8),
    marginTop: pxTransform(8),
    marginLeft: pxTransform(8),
    marginBottom: pxTransform(8),
  }
  return (
    <Cell style={{ flexWrap: 'wrap' }}>
      <Button type="primary" fill="solid" style={marginStyle}>
        Solid
      </Button>
      <Button type="primary" fill="outline" style={marginStyle}>
        Outline
      </Button>
      <Button type="primary" fill="dashed" style={marginStyle}>
        Dashed
      </Button>
      <Button fill="none" style={marginStyle}>
        None
      </Button>
    </Cell>
  )
}
export default Demo3

```

### 图标按钮

通过 `icon` 属性来设置按钮图标，并提供`rightIcon`属性使图标在右侧显示。

```tsx
import React from 'react'
import { Button, Cell } from '@dongdesign/ui'
import { Star, Plus } from '@nutui/icons-react-taro'
import { harmonyAndRn } from '@dongdesign/ui/dist/utils/platform-taro'
import pxTransform from '@dongdesign/ui/dist/utils/px-transform'

const Demo4 = () => {
  const marginStyle = {
    marginRight: pxTransform(8),
    marginTop: pxTransform(8),
    marginLeft: pxTransform(8),
    marginBottom: pxTransform(8),
  }
  return (
    <>
      {!harmonyAndRn() ? (
        <Cell style={{ flexWrap: 'wrap' }}>
          <Button
            type="primary"
            icon={<Star />}
            rightIcon={<Star />}
            style={marginStyle}
          >
            Button
          </Button>
          <Button
            type="primary"
            fill="outline"
            icon={<Star />}
            rightIcon={<Star />}
            style={marginStyle}
          >
            Button
          </Button>
          <Button
            type="primary"
            fill="dashed"
            icon={<Star />}
            rightIcon={<Star />}
            style={marginStyle}
          >
            Button
          </Button>
          <Button
            icon={<Star />}
            rightIcon={<Star />}
            style={{
              margin: 8,
              backgroundColor: `var(--nutui-color-primary-light)`,
              borderColor: `var(--nutui-color-primary)`,
              color: `var(--nutui-color-primary)`,
            }}
          >
            Button
          </Button>
          <Button
            type="default"
            fill="none"
            icon={<Star />}
            rightIcon={<Star />}
            style={{
              margin: 8,
              backgroundColor: `var(--nutui-gray-3)`,
              color: `var(--nutui-gray-7)`,
            }}
          >
            Button
          </Button>
          <Button
            type="default"
            fill="none"
            icon={<Star />}
            rightIcon={<Star />}
            style={{
              margin: 8,
              backgroundColor: `var(--nutui-gray-1)`,
              color: `var(--nutui-gray-7)`,
            }}
          >
            Button
          </Button>
          <Button
            type="default"
            icon={<Star />}
            rightIcon={<Star />}
            style={{
              margin: 8,
            }}
          >
            Button
          </Button>
          <Button
            shape="square"
            fill="outline"
            type="primary"
            icon={<Plus />}
            style={marginStyle}
          />
          <Button
            fill="outline"
            type="primary"
            icon={<Plus />}
            style={marginStyle}
          />
          <Button
            type="primary"
            fill="dashed"
            icon={<Plus />}
            style={marginStyle}
          />
          <Button
            shape="round"
            type="primary"
            size="large"
            icon={<Star />}
            rightIcon={<Star />}
            style={marginStyle}
          >
            Button
          </Button>
          <Button
            shape="round"
            type="primary"
            size="xlarge"
            icon={<Star />}
            rightIcon={<Star />}
            style={marginStyle}
          >
            Button
          </Button>
        </Cell>
      ) : (
        <Cell style={{ flexWrap: 'wrap' }}>
          <Button
            type="primary"
            // icon={<Star />}
            // rightIcon={<Star />}
            style={marginStyle}
          >
            Button
          </Button>
          <Button
            type="primary"
            fill="outline"
            // icon={<Star />}
            // rightIcon={<Star />}
            style={marginStyle}
          >
            Button
          </Button>
          <Button
            type="primary"
            fill="dashed"
            // icon={<Star />}
            // rightIcon={<Star />}
            style={marginStyle}
          >
            Button
          </Button>
          <Button
            // icon={<Star />}
            // rightIcon={<Star />}
            style={{
              ...{
                backgroundColor: `#ffebf1`,
                borderColor: `#ff0f23`,
                color: `#ff0f23`,
              },
              ...marginStyle,
            }}
          >
            Button
          </Button>
          <Button
            type="default"
            fill="none"
            // icon={<Star />}
            // rightIcon={<Star />}
            style={{
              ...{
                backgroundColor: `#f5f6fa`,
                color: `#1a1a1a`,
              },
              ...marginStyle,
            }}
          >
            Button
          </Button>
          <Button
            type="default"
            fill="none"
            // icon={<Star />}
            // rightIcon={<Star />}
            style={{
              ...{
                backgroundColor: `#ffffff`,
                color: `#1a1a1a`,
              },
              ...marginStyle,
            }}
          >
            Button
          </Button>
          <Button
            type="default"
            // icon={<Star />}
            // rightIcon={<Star />}
            style={marginStyle}
          >
            Button
          </Button>
          <Button
            shape="square"
            fill="outline"
            type="primary"
            // icon={<Plus />}
            style={{ width: pxTransform(32), ...marginStyle }}
          />
          <Button
            fill="outline"
            type="primary"
            // icon={<Plus />}
            style={{ width: pxTransform(32), ...marginStyle }}
          />
          <Button
            type="primary"
            fill="dashed"
            // icon={<Plus />}
            style={{ width: pxTransform(32), ...marginStyle }}
          />
          <Button
            shape="round"
            type="primary"
            size="large"
            // icon={<Star />}
            // rightIcon={<Star />}
            style={{ width: pxTransform(100), ...marginStyle }}
          >
            Button
          </Button>
          <Button
            shape="round"
            type="primary"
            size="xlarge"
            // icon={<Star />}
            // rightIcon={<Star />}
            style={{ width: pxTransform(200), ...marginStyle }}
          >
            Button
          </Button>
        </Cell>
      )}
    </>
  )
}
export default Demo4

```

### 禁用状态

通过 `disabled` 属性来禁用按钮，禁用状态下按钮不可点击。

```tsx
import React from 'react'
import { Button, Cell } from '@dongdesign/ui'
import { Star, Plus } from '@nutui/icons-react-taro'
import { harmonyAndRn, harmony } from '@dongdesign/ui/dist/utils/platform-taro'
import pxTransform from '@dongdesign/ui/dist/utils/px-transform'

const Demo5 = () => {
  const marginStyle = {
    marginRight: pxTransform(8),
    marginTop: pxTransform(8),
    marginLeft: pxTransform(8),
    marginBottom: pxTransform(8),
  }
  return (
    <>
      {!harmonyAndRn() ? (
        <Cell style={{ flexWrap: 'wrap' }}>
          <Button
            disabled
            type="primary"
            icon={<Star />}
            rightIcon={<Star />}
            style={marginStyle}
          >
            Disabled
          </Button>
          <Button
            disabled
            type="primary"
            fill="outline"
            icon={<Star />}
            rightIcon={<Star />}
            style={marginStyle}
          >
            Disabled
          </Button>
          <Button
            disabled
            type="primary"
            fill="dashed"
            icon={<Star />}
            rightIcon={<Star />}
            style={marginStyle}
          >
            Disabled
          </Button>
          <Button
            disabled
            fill="solid"
            icon={<Star />}
            rightIcon={<Star />}
            style={marginStyle}
          >
            Disabled
          </Button>
          <Button
            disabled
            type="default"
            fill="none"
            icon={<Star />}
            rightIcon={<Star />}
            style={{
              margin: 8,
              backgroundColor: `var(--nutui-gray-3)`,
              color: `var(--nutui-gray-5)`,
            }}
          >
            Disabled
          </Button>
          <Button
            disabled
            type="default"
            fill="none"
            icon={<Star />}
            rightIcon={<Star />}
            style={{
              margin: 8,
              backgroundColor: `var(--nutui-gray-1)`,
              color: `var(--nutui-gray-5)`,
            }}
          >
            Disabled
          </Button>
          <Button
            disabled
            icon={<Star />}
            rightIcon={<Star />}
            style={{
              margin: 8,
            }}
          >
            Disabled
          </Button>
          <Button
            disabled
            shape="square"
            fill="outline"
            type="primary"
            icon={<Plus size="20" />}
            style={marginStyle}
          />
          <Button
            disabled
            type="primary"
            icon={<Plus size="20" />}
            style={marginStyle}
          />
          <Button
            disabled
            type="primary"
            fill="dashed"
            icon={<Plus />}
            style={marginStyle}
          />
          <Button
            disabled
            shape="round"
            type="primary"
            size="large"
            icon={<Star />}
            rightIcon={<Star />}
            style={marginStyle}
          >
            Disabled
          </Button>
          <Button
            disabled
            shape="round"
            type="primary"
            size="xlarge"
            icon={<Star />}
            rightIcon={<Star />}
            style={marginStyle}
          >
            Disabled
          </Button>
        </Cell>
      ) : (
        <Cell style={{ flexWrap: 'wrap' }}>
          <Button
            disabled
            type="primary"
            // icon={<Star />}
            // rightIcon={<Star />}
            style={{ width: pxTransform(harmony() ? 100 : 80), ...marginStyle }}
          >
            Disabled
          </Button>
          <Button
            disabled
            type="primary"
            fill="outline"
            // icon={<Star />}
            // rightIcon={<Star />}
            style={{ width: pxTransform(harmony() ? 100 : 80), ...marginStyle }}
          >
            Disabled
          </Button>
          <Button
            disabled
            type="primary"
            fill="dashed"
            // icon={<Star />}
            // rightIcon={<Star />}
            style={{ width: pxTransform(harmony() ? 100 : 80), ...marginStyle }}
          >
            Disabled
          </Button>
          <Button
            disabled
            fill="solid"
            // icon={<Star />}
            // rightIcon={<Star />}
            style={{ width: pxTransform(harmony() ? 100 : 80), ...marginStyle }}
          >
            Disabled
          </Button>
          <Button
            disabled
            type="default"
            fill="none"
            // icon={<Star />}
            // rightIcon={<Star />}
            style={{
              ...{
                backgroundColor: `#f6f6f6`,
                color: `#888b94`,
                width: pxTransform(harmony() ? 100 : 80),
              },
              ...marginStyle,
            }}
          >
            Disabled
          </Button>
          <Button
            disabled
            type="default"
            fill="none"
            // icon={<Star />}
            // rightIcon={<Star />}
            style={{
              ...{
                backgroundColor: `#ffffff`,
                color: `#888b94`,
                width: pxTransform(harmony() ? 100 : 80),
              },
              ...marginStyle,
            }}
          >
            Disabled
          </Button>
          <Button
            disabled
            // icon={<Star />}
            // rightIcon={<Star />}
            style={{ width: pxTransform(harmony() ? 100 : 80), ...marginStyle }}
          >
            Disabled
          </Button>
          <Button
            disabled
            shape="square"
            fill="outline"
            type="primary"
            // icon={<Plus size="20" />}
            style={{ width: pxTransform(32), ...marginStyle }}
          />
          <Button
            disabled
            type="primary"
            // icon={<Plus size="20" />}
            style={{ width: pxTransform(32), ...marginStyle }}
          />
          <Button
            disabled
            type="primary"
            fill="dashed"
            // icon={<Plus />}
            style={{ width: pxTransform(32), ...marginStyle }}
          />
          <Button
            disabled
            shape="round"
            type="primary"
            size="large"
            // icon={<Star />}
            // rightIcon={<Star />}
            style={{ width: pxTransform(120), ...marginStyle }}
          >
            Disabled
          </Button>
          <Button
            disabled
            shape="round"
            type="primary"
            size="xlarge"
            // icon={<Star />}
            // rightIcon={<Star />}
            style={{ width: pxTransform(200), ...marginStyle }}
          >
            Disabled
          </Button>
        </Cell>
      )}
    </>
  )
}
export default Demo5

```

### 按钮形状

通过 `shape` 属性设置按钮形状，支持圆形、方形按钮，默认为圆形。

```tsx
import React from 'react'
import { Button, Cell } from '@dongdesign/ui'
import { harmonyAndRn, rn } from '@dongdesign/ui/dist/utils/platform-taro'
import pxTransform from '@dongdesign/ui/dist/utils/px-transform'

const Demo6 = () => {
  const marginStyle = harmonyAndRn()
    ? {
        width: pxTransform(rn() ? 120 : 150),
        marginRight: pxTransform(8),
        marginTop: pxTransform(8),
        marginLeft: pxTransform(8),
        marginBottom: pxTransform(8),
      }
    : {
        marginRight: 8,
        marginTop: 8,
        marginLeft: 8,
        marginBottom: 8,
      }
  return (
    <Cell style={{ flexWrap: 'wrap' }}>
      <Button shape="square" type="primary" style={marginStyle}>
        Square Button
      </Button>
      <Button shape="round" type="primary" style={marginStyle}>
        Round Button
      </Button>
    </Cell>
  )
}
export default Demo6

```

### 加载状态

```tsx
import React, { useState } from 'react'
import { Button, Cell } from '@dongdesign/ui'
import { rn } from '@dongdesign/ui/dist/utils/platform-taro'
import pxTransform from '@dongdesign/ui/dist/utils/px-transform'

const Demo7 = () => {
  const [loading, setLoading] = useState(false)
  const marginStyle = {
    width: pxTransform(rn() ? 90 : 120),
    marginRight: pxTransform(8),
    marginTop: pxTransform(8),
    marginLeft: pxTransform(8),
    marginBottom: pxTransform(8),
  }
  return (
    <Cell style={{ flexWrap: 'wrap' }}>
      <Button loading type="warning" style={marginStyle}>
        Loading
      </Button>
      <Button
        loading={loading}
        type="success"
        onClick={() => {
          setTimeout(() => {
            setLoading(false)
          }, 1500)
          setLoading(!loading)
        }}
        style={marginStyle}
      >
        Click me!
      </Button>
    </Cell>
  )
}
export default Demo7

```

### 按钮尺寸

支持 `xlarge` 、 `large`、`normal`、`small`、`mini` 尺寸，默认为 `normal`。

```tsx
import React from 'react'
import { Button, Cell } from '@dongdesign/ui'
import { harmonyAndRn } from '@dongdesign/ui/dist/utils/platform-taro'
import pxTransform from '@dongdesign/ui/dist/utils/px-transform'

const Demo8 = () => {
  const marginStyle = harmonyAndRn()
    ? {
        width: pxTransform(90),
        marginRight: pxTransform(8),
        marginTop: pxTransform(8),
        marginLeft: pxTransform(8),
        marginBottom: pxTransform(8),
      }
    : {
        marginRight: 8,
        marginTop: 8,
        marginLeft: 8,
        marginBottom: 8,
      }

  const marginStyleXL = harmonyAndRn()
    ? {
        width: pxTransform(140),
        marginRight: pxTransform(8),
        marginTop: pxTransform(8),
        marginLeft: pxTransform(8),
        marginBottom: pxTransform(8),
      }
    : {
        marginRight: 8,
        marginTop: 8,
        marginLeft: 8,
        marginBottom: 8,
      }
  return (
    <Cell style={{ flexWrap: 'wrap' }}>
      <Button type="primary" style={marginStyle}>
        Normal
      </Button>
      <Button style={marginStyle}>Normal</Button>
      <Button size="small" style={marginStyle} type="primary">
        Small
      </Button>
      <Button size="mini" style={marginStyle} type="primary">
        Mini
      </Button>
      <Button size="large" type="primary" style={marginStyle}>
        Large
      </Button>
      <Button size="xlarge" type="primary" style={marginStyleXL}>
        XLarge
      </Button>
    </Cell>
  )
}
export default Demo8

```

### 块级元素

按钮在默认情况下为行内块级元素，通过 `block` 属性可以将按钮的元素类型设置为块级元素，常用来实现通栏按钮。

```tsx
import React from 'react'
import { Button, Cell } from '@dongdesign/ui'

const App = () => {
  return (
    <Cell style={{ flexWrap: 'wrap' }}>
      <Button block type="primary">
        Block Button
      </Button>
    </Cell>
  )
}
export default App

```

### 自定义颜色

通过 color 属性可以自定义按钮的颜色。

```tsx
import React from 'react'
import { Button, Cell } from '@dongdesign/ui'
import { harmonyAndRn } from '@dongdesign/ui/dist/utils/platform-taro'
import pxTransform from '@dongdesign/ui/dist/utils/px-transform'

const App = () => {
  const marginStyle = harmonyAndRn()
    ? {
        width: pxTransform(120),
        marginRight: pxTransform(8),
        marginTop: pxTransform(8),
        marginLeft: pxTransform(8),
        marginBottom: pxTransform(8),
      }
    : {
        marginRight: 8,
        marginTop: 8,
        marginLeft: 8,
        marginBottom: 8,
      }
  return (
    <Cell style={{ flexWrap: 'wrap' }}>
      <Button color="blue" style={marginStyle}>
        单色按钮
      </Button>
      <Button fill="outline" color="#7232dd" style={marginStyle}>
        单色按钮
      </Button>
      <Button color="rgba(10,101,208,0.75)" style={marginStyle}>
        单色按钮
      </Button>
      <Button
        type="primary"
        color="linear-gradient(to right, #ff6034, #ee0a24)"
        style={marginStyle}
      >
        渐变按钮
      </Button>
    </Cell>
  )
}
export default App

```

## Button

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 按钮的样式 | `default` \| `primary` \| `warning` \| `danger` \| `success` \| `info` | `default` |
| size | 按钮的尺寸 | `normal` \|`xlarge` \|  `large` \| `small` \| `mini` | `normal` |
| shape | 按钮的形状 | `square` \| `round` | `round` |
| color | 按钮颜色，支持传入 linear-gradient 渐变色, outline 和 dashed 模式下设置的是 color，其他情况设置的是background，建议使用CSS变量实现的颜色配置 | `string` | `-` |
| fill | 填充模式 | `solid` \| `outline`  \| `dashed` \| `none` | `solid` |
| disabled | 是否禁用按钮 | `boolean` | `false` |
| block | 是否为块级元素 | `boolean` | `false` |
| icon | 按钮图标 | `ReactNode` | `-` |
| rightIcon | 右侧按钮图标 | `ReactNode` | `-` |
| loading | 按钮loading状态 | `boolean` | `false` |
| nativeType | 按钮原始类型 | `submit` \| `reset` \| `button` | `button` |
| onClick | 点击按钮时触发 | `(e: MouseEvent<HTMLButtonElement>) => void` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/docs/component/common/ConfigProvider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-button-border-radius | 按钮的圆角设置 | `24px` |
| \--nutui-button-border-width | 按钮的边框宽度 | `1px` |
| \--nutui-button-normal-padding | size normal时的padding值 | `0px 16px` |
| \--nutui-button-default-height | type 为 default 的按钮的高度 | `32px` |
| \--nutui-button-default-color | type 为 default 的按钮的文本色 | `$color-title` |
| \--nutui-button-default-background-color | type 为 default 的按钮的背景色 | `$white` |
| \--nutui-button-default-border-color | type 为 default 的按钮的边框色 | `$color-text` |
| \--nutui-button-default-disabled | type 为 default 的按钮的禁用色 | `$color-text-disabled` |
| \--nutui-button-default-disabled-color | type 为 default 的按钮的禁用文本色 | `$color-text-help` |
| \--nutui-button-default-padding | type 为 default 的按钮的内边距 | `0 16px` |
| \--nutui-button-default-font-size | type 为 default 的按钮的字号 | `$font-size-base` |
| \--nutui-button-default-font-weight | type 为 default 的按钮的字重 | `$font-weight` |
| \--nutui-button-large-height | size 为 large 的按钮的高度 | `40px` |
| \--nutui-button-large-font-size | size 为 large 的按钮的字号 | `$font-size-base` |
| \--nutui-button-large-border-radius | size 为 large 的按钮的圆角 | `24px` |
| \--nutui-button-small-padding | size 为 small 的按钮的内边距 | `0 12px` |
| \--nutui-button-small-height | size 为 small 的按钮的高度 | `28px` |
| \--nutui-button-small-font-size | size 为 small 的按钮的字号 | `$font-size-small` |
| \--nutui-button-small-border-radius | size 为 small 的按钮的圆角 | `24px` |
| \--nutui-button-mini-padding | size 为 mini 的按钮的内边距 | `0 12px` |
| \--nutui-button-mini-height | size 为 mini 的按钮的高度 | `24px` |
| \--nutui-button-mini-font-size | size 为 mini 的按钮的字号 | `$font-size-small` |
| \--nutui-button-mini-border-radius | size 为 mini 的按钮的圆角 | `24px` |
| \--nutui-button-text-icon-margin | 带 icon按钮的文本的边距 | `4px` |

