# Navbar 头部导航

提供导航功能。

## 引入

```tsx
import { NavBar } from '@nutui/nutui-react-taro'
```

## 示例代码

### 基础用法

:::demo

<CodeBlock src='taro/demo1.tsx'></CodeBlock>

:::

### 标题位置

:::demo

<CodeBlock src='taro/demo2.tsx'></CodeBlock>

:::

### 多tab切换导航

:::demo

<CodeBlock src='taro/demo3.tsx'></CodeBlock>

:::

## Navbar

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| right | 右侧内容 | `ReactNode` | `-` |
| left | 左侧内容，渲染在返回区域的右侧 | `ReactNode` | `-` |
| back | 返回区域的文字 | `ReactNode` | `-` |
| title | 标题 | `ReactNode` | `-` |
| fixed | 是否固定 | `boolean` | `false` |
| safeAreaInsetTop | 是否适配安全区 | `boolean` | `false` |
| placeholder | 固定在顶部时，是否在标签位置生成一个等高的占位元素 | `boolean` | `false` |
| zIndex | 导航栏层级 | `number` \| `string` | `10` |
| onBackClick | 点击返回区域后的回调 | `onBackClick:(event: Event)=>void` | `false` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-navbar-width | 头部导航的宽度 | `100%` |
| \--nutui-navbar-height | 头部导航的高度 | `44px` |
| \--nutui-navbar-margin-bottom | 头部导航的下边距 | `20px` |
| \--nutui-navbar-background | 头部导航的背景颜色 | `$white` |
| \--nutui-navbar-box-shadow | 头部导航的阴影 | `0px 1px 7px 0px rgba(237, 238, 241, 1)` |
| \--nutui-navbar-color | 头部导航的字体颜色 | `$color-text` |
| \--nutui-navbar-font-size | 头部导航的字体大小 | `$font-size-base` |
| \--nutui-navbar-title-font-size | 头部导航标题的字体大小 | `$font-size-base` |
| \--nutui-navbar-title-font-weight | 头部导航标题的字体粗细 | `0` |
| \--nutui-navbar-title-font-color | 头部导航标题的字体颜色 | `$color-title` |

## 贡献记录

### Issues

> 更多已解决问题请查看 [Issues](https://github.com/jdf2e/nutui-react/issues?q=is%3Aissue%20state%3Aclosed%20NavBar)

### Component Logs

- 🐛 fix(navbar): safearea displays abnormal when safeAreaInsetTop has been set true ([#2632](https://github.com/jdf2e/nutui-react/pull/2632)) `v2.6.22`
- 🐛 fix(navbar): demo拆解与规范 ([#2055](https://github.com/jdf2e/nutui-react/pull/2055)) @Alex-huxiyang `v2.4.2`
- 💡 📖 docs(navbar): 文档可读性优化 ([#1915](https://github.com/jdf2e/nutui-react/pull/1915)) @Alex.huxiyang `v2.3.9`
- ✨ feat(navbar): title区域自适应宽度 ([#1891](https://github.com/jdf2e/nutui-react/pull/1891)) @songsong `v2.3.8`
- 💡 📖 docs(navbar): showtoas 改为 showToast ([#1826](https://github.com/jdf2e/nutui-react/pull/1826)) @minghui `v2.3.4`

> 更多版本更新记录请查看 [Releases](https://github.com/jdf2e/nutui-react//releases?q=navbar&expanded=true)
