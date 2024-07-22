# Avatar 头像

用来代表用户或事物，支持图片、图标或字符展示。

## 引入

```tsx
import { Avatar } from '@dongdesign/ui';
```

## 示例代码

### 基础用法

支持三种尺寸：small、normal、large

```tsx
import React from 'react'
import { Avatar, Cell } from '@dongdesign/ui'

const Demo1 = () => {
  return (
    <Cell className="cell-avatar" align="flex-end">
      <Avatar
        size="60"
        src="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
      />
      <Avatar src="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png" />
      <Avatar
        size="32"
        src="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
      />
    </Cell>
  )
}
export default Demo1

```

### 头像形状

支持两种形状：square、round

```tsx
import React from 'react'
import { Avatar, Cell } from '@dongdesign/ui'
import { User } from '@nutui/icons-react-taro'
import { harmonyAndRn } from '@dongdesign/ui/dist/utils/platform-taro'

const Demo2 = () => {
  return (
    <Cell className="cell-avatar">
      {harmonyAndRn() ? (
        <>
          <Avatar shape="square">N</Avatar>
          <Avatar shape="round">N</Avatar>
        </>
      ) : (
        <>
          <Avatar icon={<User />} shape="square" />
          <Avatar icon={<User />} shape="round" />
        </>
      )}
    </Cell>
  )
}
export default Demo2

```

### 头像类型

支持三种类型：图片、Icon 以及字符

```tsx
import React from 'react'
import { Avatar, Cell } from '@dongdesign/ui'
import { User } from '@nutui/icons-react-taro'
import { harmonyAndRn } from '@dongdesign/ui/dist/utils/platform-taro'

const Demo3 = () => {
  return (
    <Cell className="cell-avatar">
      {harmonyAndRn() ? (
        <>
          <Avatar src="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png" />
          <Avatar>N</Avatar>
          <Avatar>N</Avatar>
        </>
      ) : (
        <>
          <Avatar src="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png" />
          <Avatar icon={<User />} />
          <Avatar>N</Avatar>
        </>
      )}
    </Cell>
  )
}
export default Demo3

```

### 自定义颜色及背景色

Icon 和字符型可以自定义图标颜色及背景色

```tsx
import React from 'react'
import { Avatar, Cell } from '@dongdesign/ui'

const Demo4 = () => {
  return (
    <Cell className="cell-avatar">
      <Avatar
        color="#fff"
        background="var(--nutui-color-primary)"
        // icon={<User />}
      />
      <Avatar
        color="var(--nutui-color-primary)"
        background="var(--nutui-color-primary-light)"
      >
        U
      </Avatar>
    </Cell>
  )
}
export default Demo4

```

### 带徽标的头像

```tsx
import React from 'react'
// import { Avatar, Badge, Cell } from '@dongdesign/ui'
import { Avatar, Cell } from '@dongdesign/ui'
import { User } from '@nutui/icons-react-taro'
import { harmonyAndRn } from '@dongdesign/ui/dist/utils/platform-taro'

const Demo5 = () => {
  return (
    <Cell className="cell-avatar">
      {harmonyAndRn() ? null : (
        <>
          {/* <Badge value="8"> */}
          <Avatar icon={<User />} shape="square" />
          {/* </Badge> */}
          {/* <Badge dot> */}
          <Avatar icon={<User />} shape="square" />
          {/* </Badge> */}
        </>
      )}
    </Cell>
  )
}
export default Demo5

```

### 头像组合展现

```tsx
import React from 'react'
import { Avatar, Cell } from '@dongdesign/ui'
import { User } from '@nutui/icons-react-taro'
import { harmonyAndRn } from '@dongdesign/ui/dist/utils/platform-taro'

const Demo6 = () => {
  return (
    <>
      <Cell>
        {harmonyAndRn() ? (
          <Avatar.Group gap="-4">
            <Avatar
              color="var(--nutui-color-primary)"
              background={`${harmonyAndRn() ? '#eee' : 'var(--nutui-brand-2)'}`}
            >
              U
            </Avatar>
            <Avatar
              color="var(--nutui-color-primary)"
              background={`${harmonyAndRn() ? '#eee' : 'var(--nutui-brand-2)'}`}
            >
              U
            </Avatar>
            <Avatar
              color="var(--nutui-color-primary)"
              background={`${harmonyAndRn() ? '#ffd6e1' : 'var(--nutui-brand-2)'}`}
            >
              U
            </Avatar>
          </Avatar.Group>
        ) : (
          <Avatar.Group gap="-4">
            <Avatar src="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png" />
            <Avatar icon={<User />} />
            <Avatar
              color="var(--nutui-color-primary)"
              background={`${harmonyAndRn() ? '#eee' : 'var(--nutui-brand-2)'}`}
            >
              U
            </Avatar>
          </Avatar.Group>
        )}
      </Cell>
      <Cell>
        {harmonyAndRn() ? (
          <Avatar.Group max="3" maxColor="#fff" maxBackground="#498ff2">
            <Avatar src="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png" />
            <Avatar size="normal">N</Avatar>
            <Avatar
              color="var(--nutui-color-primary)"
              background={`${harmonyAndRn() ? '#ffd6e1' : 'var(--nutui-brand-2)'}`}
            >
              U
            </Avatar>
            <Avatar size="normal">N</Avatar>
          </Avatar.Group>
        ) : (
          <Avatar.Group max="3" maxColor="#fff" maxBackground="#498ff2">
            <Avatar src="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png" />
            <Avatar icon={<User />} />
            <Avatar
              color="var(--nutui-color-primary)"
              background="var(--nutui-brand-2)"
            >
              U
            </Avatar>
            <Avatar icon={<User />} />
          </Avatar.Group>
        )}
      </Cell>
    </>
  )
}
export default Demo6

```

### 组合头像可控制层级方向

```tsx
import React from 'react'
import { Avatar, Cell } from '@dongdesign/ui'
import { User } from '@nutui/icons-react-taro'
import { harmonyAndRn } from '@dongdesign/ui/dist/utils/platform-taro'

const Demo7 = () => {
  return (
    <Cell className="cell-avatar">
      {harmonyAndRn() ? (
        <Avatar.Group max="3" level="right" maxContent="...">
          <Avatar src="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png" />
          <Avatar>N</Avatar>
          <Avatar
            color="var(--nutui-color-primary)"
            background={`${harmonyAndRn() ? '#ffd6e1' : 'var(--nutui-brand-2)'}`}
          >
            U
          </Avatar>
          <Avatar>N</Avatar>
        </Avatar.Group>
      ) : (
        <Avatar.Group max="3" level="right" maxContent="...">
          <Avatar src="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png" />
          <Avatar icon={<User />} />
          <Avatar
            color="var(--nutui-color-primary)"
            background="var(--nutui-brand-2)"
          >
            U
          </Avatar>
          <Avatar icon={<User />} />
        </Avatar.Group>
      )}
    </Cell>
  )
}
export default Demo7

```

### 点击头像触发事件

```tsx
import React from 'react'
import { Avatar, Cell } from '@dongdesign/ui'
import { User } from '@nutui/icons-react-taro'
import Taro from '@tarojs/taro'
import { harmonyAndRn } from '@dongdesign/ui/dist/utils/platform-taro'

const Demo8 = () => {
  const activeAvatar = () => {
    Taro.showToast({ title: '触发点击头像' })
  }
  return (
    <Cell className="cell-avatar">
      {harmonyAndRn() ? (
        <Avatar>N</Avatar>
      ) : (
        <Avatar icon={<User />} onClick={activeAvatar} />
      )}
    </Cell>
  )
}
export default Demo8

```

### 列表展示

```tsx
import React from 'react'
import { View } from '@tarojs/components'
import { Avatar, Cell } from '@dongdesign/ui'
import pxTransform from '@dongdesign/ui/dist/utils/px-transform'

const Demo9 = () => {
  return (
    <Cell className="cell-avatar">
      <Avatar
        src="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
        style={{ marginRight: pxTransform(10) }}
      />
      <View>
        <View style={{ fontSize: pxTransform(16) }}>标题</View>
        <View style={{ fontSize: pxTransform(12) }}>描述信息</View>
      </View>
    </Cell>
  )
}
export default Demo9

```

## Avatar

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| size | 设置头像的大小 | `large` \| `normal` \| `small` \| `numbers` | `-` |
| shape | 设置头像的形状 | `round` \| `square` | `round` |
| background | 设置 Icon、字符类型头像的背景色 | `string` | `#eee` |
| color | 设置 Icon、字符类型头像的颜色 | `string` | `#666` |
| src | 设置图片类型头像的地址 | `string` | `-` |
| icon | 设置 Icon 类型头像图标 | `ReactNode` | `-` |
| onClick | 点击头像触发事件 | `(e: MouseEvent<HTMLDivElement>) => void` | `-` |
| onError | 图片加载失败的事件 | `() => void` | `-` |

## Avatar.Group

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| max | 显示的最大头像个数 | `string` \| `number`  | `-` |
| maxContent | 头像数量超出时，会出现一个头像折叠元素。该元素内容可为...、more、+N。 | `string` | `-` |
| size | 设置头像的大小，可选值为：large、normal、small，支持直接输入数字 | `large` \| `normal`  \| `small`  | `-` |
| shape | 设置头像的形状 | `string` \| `round`  | `-` |
| maxBackground | 设置 Icon、字符类型头像的背景色 | `string` | `#eee` |
| maxColor | 设置 Icon、字符类型头像的颜色 | `string` | `#666` |
| gap | 设置头像之间的间距 | `string` | `-8` |
| level | 头像之间的层级关系，可选值为：left、right | `left` \| `right`  | `left` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/docs/component/common/ConfigProvider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-avatar-square | 正方形头像的圆角弧度 | `5px` |
| \--nutui-avatar-large-width | 大尺寸头像的宽度 | `60px` |
| \--nutui-avatar-large-height | 大尺寸头像的高度 | `60px` |
| \--nutui-avatar-small-width | 小尺寸头像的宽度 | `32px` |
| \--nutui-avatar-small-height | 小尺寸头像的高度 | `32px` |
| \--nutui-avatar-normal-width | 正常尺寸头像的宽度 | `40px` |
| \--nutui-avatar-normal-height | 正常尺寸头像的高度 | `40px` |