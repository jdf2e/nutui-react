# NutUI React Codemod

一组帮助你升级到 NutUI React 2.x 的 codemod 脚本集合，基于 [jscodeshift](https://github.com/facebook/jscodeshift) 构建。

## 安装和使用

在运行 codemod 脚本钱，请先提交你本地代码的修改。

### 针对 @nutui/nutui-react 的升级可采用下面的脚本

```shell
# 使用 npx 直接运行
npx -p @nutui/nutui-react-codemod nutui-react-codemod src

# 或者使用 pnpm 直接运行
pnpm --package=@nutui/nutui-react-codemod  dlx nutui-react-codemod src
```

### 针对 @nutui/nutui-react-taro 的升级可采用下面的脚本

```shell
# 使用 npx 直接运行
npx -p @nutui/nutui-react-codemod nutui-react-codemod src -taro

# 或者使用 pnpm 直接运行
pnpm --package=@nutui/nutui-react-codemod  dlx nutui-react-codemod src -taro
```

## 功能

`component-name-migration`

- 将组件的使用方式进行修改，例如：`CollpaseItem` 改为 `Collpase.Item` 方式

```diff
import  React from "react";
- import { Collapse,CollapseItem } from '@nutui/nutui-react';
+ import { Collapse } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
    <Collapse activeName={['1']} icon="arrow-down" iconSize="16" iconColor="#999">
-      <CollapseItem title="标题1" name="1">
+      <Collapse.Item title="标题1" name="1">
        京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府
-      </CollapseItem>
+      </Collapse.Item>
    </Collapse>
    </>
  );
};
export default App;
```

`props-changed-migration`

- 将重命名的 props 进行替换

```diff
import React from 'react'
import { Button } from '@nutui/nutui-react'

const App = () => {
  return (
-    <Button plain type="primary">
-      主要按钮
-    </Button>
+   <Button fill="outline" type="primary">主要按钮</Button>
  )
}
export default App
```

`icon-migration`

- 将 Icon 组件替换为对应的 @nutui/icons-react 或 @nutui/icons-react-taro

```diff
import React from 'react'
- import { Icon } from '@nutui/nutui-react'
+ import { IconFont as Icon } from "@nutui/icons-react";

const App = () => {
  return (
    <>
      <Icon name="JD" />
    </>
  )
}
export default App

```
