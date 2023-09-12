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
      <Empty description="无数据" />
      <Empty
        title="标题"
        description="辅助信息辅助信息"
        actions={[
          { text: "操作按钮" },
          { text: "操作按钮" },
        ]}
      />
      <Empty
        description="辅助信息辅助信息"
        actions={[{ text: "操作按钮" }]}
        style={{ marginTop: '10px' }}
      />
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

:::demo

```tsx
import  React from "react";
import { Empty } from '@nutui/nutui-react';

const App = () => {
  return (
    <Empty
      description="无优惠券" 
      image={<img src="https://static-ftcms.jd.com/p/files/61a9e3313985005b3958672e.png" alt=""/>}
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
        <Button icon="refresh" type="primary">重试</Button>
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
| description | 图片下方的描述文字 | `ReactNode` | `-` |
| status | 默认图片错误类型 | `empty` \| `error` \| `network` | `empty` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-empty-padding | Empty组件图片的padding值 | `32px 0` |
| \--nutui-empty-image-size | Empty组件图片的尺寸大小 | `170px` |
| \--nutui-empty-description-margin-top | Empty组件图片描述margin-top的值 | `4px` |
| \--nutui-empty-description-color | Empty组件图片描述颜色值 | `#666666` |
| \--nutui-empty-description-font-size | Empty组件图片描述font-size值大小 | `14px` |
| \--nutui-empty-description-line-height | Empty组件图片描述行高 | `20px` |
| \--nutui-empty-description-padding | Empty组件图片描述padding值 | `0 40px` |