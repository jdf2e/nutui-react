# Indicator 指示器

## 介绍

显示一个任务或流程的进度，常用于开通流程。

## 安装

```tsx
import { Indicator } from '@nutui/nutui-react-taro'
```

## 代码演示

### 基础用法

:::demo

```tsx
import  React from "react";
import { Indicator, Cell } from '@nutui/nutui-react-taro';

const App = () => {
  return (
    <Cell>
      <Indicator total={3} current={2} />
    </Cell>
  );
};
export default App;
```

:::

### 自定义节点

:::demo

```tsx
import  React from "react";
import { Indicator, Cell } from '@nutui/nutui-react-taro';

const App = () => {
  return (
    <Cell>
      <Indicator total={6} current={5}>
        <div
          style={{
            display: 'inline-block',
            width: '14px',
            height: '14px',
            lineHeight: '14px',
            textAlign: 'center',
            fontSize: '12px',
            color: '#FFFFFF',
            border: '1px solid #FFFFFF',
            borderRadius: '50%',
            margin: '4px',
            background: `var(--nutui-color-primary)`,
            boxShadow: `0 0 1px 1px var(--nutui-color-primary)`,
          }}
        >
          {5}
        </div>
      </Indicator>
    </Cell>
  );
};
export default App;
```

:::

### 自定义颜色大小

:::demo

```tsx
import  React from "react";
import { Indicator, Cell, ConfigProvider } from '@nutui/nutui-react-taro';

const customTheme = {
  nutuiIndicatorColor: '#3768fa',
  nutuiIndicatorDotColor: '#ddd',
  nutuiIndicatorDotSize: '8px',
  nutuiIndicatorDotActiveSize: '24px',
}

const App = () => {
  return (
    <Cell>
      <ConfigProvider theme={customTheme}>
        <Indicator total={6} current={5} />
      </ConfigProvider>
    </Cell>
  );
};
export default App;
```

:::

### 竖向展示

:::demo

```tsx
import  React from "react";
import { Indicator, Cell } from '@nutui/nutui-react-taro';

const App = () => {
  return (
    <Cell>
      <Indicator total={6} current={5} direction="vertical">
        <div
          style={{
            display: 'inline-block',
            width: '14px',
            height: '14px',
            lineHeight: '14px',
            textAlign: 'center',
            fontSize: '12px',
            color: '#FFFFFF',
            border: '1px solid #FFFFFF',
            borderRadius: '50%',
            margin: '4px',
            background: `var(--nutui-color-primary)`,
            boxShadow: `0 0 1px 1px var(--nutui-color-primary)`,
          }}
        >
          {5}
        </div>
      </Indicator>
      <Indicator
        total={6}
        current={2}
        direction="vertical"
        style={{
          marginLeft: '50px',
        }}
      />
    </Cell>
  );
};
export default App;
```

:::

## Indicator

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| current | 当前步骤 | `number` | `0` |
| total | 步骤长度 | `number` | `3` |
| direction | 展示方向，默认为水平方向 | `horizontal` \| `vertical` | `horizontal` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-indicator-color | 指示器焦点时色值 | `$color-primary` |
| \--nutui-indicator-dot-color | 指示器默认色值 | `$color-text-disabled` |
| \--nutui-indicator-dot-size | 指示器尺寸 | `5px` |
| \--nutui-indicator-dot-active-size | 指示器焦点时尺寸 | `15px` |
| \--nutui-indicator-border-radius | 指示器焦点时的border值 | `3px` |
| \--nutui-indicator-dot-margin | 指示器横向时的margin值 | `4px` |
