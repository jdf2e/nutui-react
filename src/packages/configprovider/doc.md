# ConfigProvider 全局配置

用于全局配置 NutUI-React 组件，提供主题定制，国际化支持。

## 引入

```tsx
import { ConfigProvider } from '@nutui/nutui-react'
```

## 示例代码

### 主题定制

NutUI-React 可以通过 [CSS 变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties) 来组织样式，通过覆盖这些 CSS 变量，可以实现定制主题、动态切换主题等效果。

#### 通过 CSS 覆盖

你可以直接在代码中覆盖这些 CSS 变量，Button 组件的样式会随之发生改变：

> 小程序不存在 `:root` 元素，只能在 page 根元素里覆盖 CSS 变量。

```css
/* 添加这段样式后，Primary Button 会变成绿色 */
:root {
  --nutui-color-primary: green;
  --nutui-color-primary-stop1: green;
  --nutui-color-primary-stop2: green;
}
```

> @nutui/nutui-react 中带了两个主题文件 默认主题：@nutui/nutui-react/dist/styles/theme-default.scss; 暗黑主题：@nutui/nutui-react/dist/styles/theme-dark.scss; 如果想使用暗黑主题，可以在项目中导入暗黑主题文件。

#### 通过 ConfigProvider 覆盖

ConfigProvider 组件提供了覆盖 CSS 变量的能力，你需要在根节点包裹一个 ConfigProvider 组件，并通过 theme 属性来配置一些主题变量。

> ConfigProvider 组件不是一个虚拟组件，它会生成一个 div 标签。

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

#### CSS 变量

NutUI-React 支持的 CSS 变量如下：

```css
:root,
page {
  --nutui-color-primary: #fa2c19;
  // 主要内容用色，常用语常规标题内容、细文浏览、常规按钮文字以及图表引导。
  --nutui-gray-7: #1a1a1a;
  // 次要文字色，用于次级标题、属性标示、非主要信息引导等。
  --nutui-black-10: #757575;
  // 不可操作内容色，用于预置内容、无效内容、特殊不可点击按钮、组件边框线等。
  --nutui-gray-6: #bfbfbf;
  // 页面基底色，用于卡片式页面的兜底，永远置于页面最底层。
  --nutui-gray-5: #f4f4f4;
  // 卡片内嵌背景色，用于卡片内部的信息包裹，感知较弱。
  --nutui-gray-4: #f8f8f8;
  // 卡片背景色
  --nutui-black-3: #ffffff;
  // 页面全局蒙层，用于弹出层、弹窗、新功能引导出现的整页遮罩
  --nutui-gray-3: rgba(0, 0, 0, 0.7);
  // 局部蒙层，用于非整页遮罩
  --nutui-gray-2: rgba(0, 0, 0, 0.4);
  // 间隔线/容错线，用于结构或信息分割
  --nutui-black-2: rgba(0, 0, 0, 0.08);
  // 图片容错蒙层
  --nutui-gray-1: rgba(0, 0, 0, 0.02);
}

```

### 国际化

NutUI-React 提供了 ConfigProvider 组件用于全局配置国际化文案。目前支持以下语言:

- 简体中文 | zh-CN
- 繁体中文（中国台湾） | zh-TW
- 维吾尔语 ｜ zh-UG
- 英语（美式） | en-US
- 印尼语 ｜ id-ID

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### RTL

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### 增加语言包

如果你找不到你需要的语言包，欢迎你在 英文语言包 的基础上创建一个新的语言包，并给我们发一个 Pull Request。

## ConfigProvider

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| locale | 设置多语言包 | `BaseLang` | `zhCN` |
| theme | 设置主题 | `Record<string, string>` | `-` |
