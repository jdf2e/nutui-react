# Empty组件

## 介绍

空状态时的占位提示

## 安装

```tsx
import { Empty } from '@nutui/nutui-react'
```

## 代码演示

### 基础用法

:::demo

```tsx
import  React from "react";
import { Empty } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <Empty
        title="标题"
        description="无数据"
        actions={[
          { text: "操作按钮" },
          { text: "操作按钮" },
        ]}
      />
      <Empty
        description="无数据"
        actions={[{ text: "操作按钮" }]}
        style={{ marginTop: '10px' }}
      />
      <Empty description="无数据" />
    </>
  );
};
export default App;
```

:::

### Size 为 small 时，可用于半屏

:::demo

```tsx
import  React from "react";
import { Empty } from '@nutui/nutui-react';

const App = () => {
  return (
    <Empty description="无数据" size="small" />
  );
};
export default App;
```

:::

### 自定义内容大小

:::demo

```tsx
import  React from "react";
import { Empty } from '@nutui/nutui-react';

const App = () => {
  return (
    <Empty description="无数据" imageSize={100} />
  );
};
export default App;
```

:::

### 图片类型，内置 3 个

:::demo

```tsx
import  React from "react";
import { Empty } from '@nutui/nutui-react';

const App = () => {
  return (
    <div className="show">
      <Empty status="empty" description="无内容" />
      <Empty status="error" description="加载失败/错误" />
      <Empty status="network" description="无网络" />
    </div>
  );
};
export default App;
```

:::

### 自定义图片


> 如果您是京东站内相关项目的开发，我们特意为您提供了一系列的缺省状态的图片链接，您可通过内部群获取。

:::demo

```tsx
import  React from "react";
import { Empty } from '@nutui/nutui-react';

const App = () => {
  return (
    <Empty
      description="店铺为空" 
      image={<img src="https://storage.360buyimg.com/imgtools/44f3cc10c4-0cf9a7e0-c0ac-11ee-8375-193101bb1a46.png" alt=""/>}
     />
  );
};
export default App;
```

:::

### 底部内容

:::demo

```tsx
import  React from "react";
import { Empty, Button } from '@nutui/nutui-react';

const App = () => {
  return (
    <Empty status="error" description="加载失败">
      <div style={{marginTop: "10px"}}>
        <Button icon="refresh" type="primary" size="small">重试</Button>
      </div>
    </Empty>
  );
};
export default App;
```

:::

## Empty

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| image | 图片,支持传入图片 URL | `ReactNode` | `-` |
| imageSize | 图片大小，number 类型单位为 px | `number` \| `string` | `-` |
| title | 图片下方的标题 | `ReactNode` | `-` |
| description | 图片下方的描述文字 | `ReactNode` | `-` |
| size | 组件整体大小，适配于全屏或半屏 | `small` \| `base` | `base` |
| status | 默认图片错误类型 | `empty` \| `error` \| `network` | `empty` |
| actions | 可用于处理操作的一组数据 | `Array` | `[]` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-empty-padding | Empty组件图片的padding值 | `32px 40px` |
| \--nutui-empty-image-size | Empty组件图片的尺寸大小 | `160px` |
| \--nutui-empty-image-small-size | size 为 small 时，Empty组件图片的尺寸大小 | `120px` |
| \--nutui-empty-title-margin-top | Empty组件图片标题margin-top的值 | `0px` |
| \--nutui-empty-title-margin-top | Empty组件图片标题margin-top的值 | `8px` |
| \--nutui-empty-title-line-height | Empty组件图片标题行高 | `$font-size-base` |
| \--nutui-empty-description-margin-top | Empty组件图片描述margin-top的值 | `4px` |
| \--nutui-empty-description-line-height | Empty组件图片描述行高 | `1.2` |