# Cascader 级联选择

### 介绍

级联选择器，用于多层级数据的选择，典型场景为省市区选择。

### 安装

```js
import { Cascader, Tabs, TabPane } from '@nutui/nutui-react';

const app = createApp();
app.use(Cascader)
.use(Tabs)
.use(TabPane);
```

### 基础用法

传入`options`列表。
:::demo
```jsx
import  React from "react";
import { Collapse,CollapseItem } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
    <Cell
      title="选择地址"
      desc={value ? value : '请选择'}
      onClick={openSwitch}
    >
    </Cell>
    <Cascader
      visible={isVisible}
      value={value}
      onClose={closeSwitch}
      title="地址选择"
      options={options}
      onChange={change}
    />
    </>
  );
};
export default App;
```
:::

## API

### Props

| 参数          | 说明                                                  | 类型     | 默认值 |
| ------------- | ----------------------------------------------------- | -------- | ------ |
| v-model       | 选中值，双向绑定                                      | Array    | -      |
| options       | 级联数据                                              | Array    | -      |
| lazy          | 是否开启动态加载                                      | Boolean  | -      |
| lazy-load      | 动态加载回调，开启动态加载时生效                      | Function | -      |
| value-key      | 自定义`options`结构中`value`的字段                    | String   | -      |
| text-key       | 自定义`options`结构中`text`的字段                     | String   | -      |
| children-key   | 自定义`options`结构中`children`的字段                 | String   | -      |
| convert-config | 当options为可转换为树形结构的扁平结构时，配置转换规则 | Object   | -      |
| title | 标题 | String   | ''      |
| close-icon-position | 取消按钮位置，继承 Popup 组件 | String   | "top-right"      |
| close-icon | 自定义关闭按钮，继承 Popup 组件 | String   | "close"     |
| closeable | 是否显示关闭按钮，继承 Popup 组件 | Boolean   | true     |

### Events

| 事件名     | 说明             | 回调参数           |
| ---------- | ---------------- | ------------------ |
| change     | 选中值改变时触发 | (value, pathNodes) |
| pathChange | 选中项改变时触发 | (pathNodes)        |
