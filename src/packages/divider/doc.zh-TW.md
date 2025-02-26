# Divider 分割線

用於將內容分隔為多個區域。

## 引入

```tsx
import { Divider } from '@nutui/nutui-react'
```

## 示例代碼

### 基礎用法

默認渲染一條水平分割線。

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 展示文本

通過插槽在可以分割線中間插入內容。

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 內容位置

通過 contentPosition 指定內容所在位置。

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 虛線

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 自定義樣式

可以直接通過 style 屬性設置分割線的樣式。

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### 垂直分割線

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

## Divider

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| contentPosition | 內容位置 | `left` \| `center` \| `right` | `center` |
| direction | 水平還是垂直類型 | `horizontal` \| `vertical` | `horizontal` |

## 主題定製

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-divider-margin | 分割線整體內容的margin值 | `16px 0` |
| \--nutui-divider-border-color | 分割線的邊框色值 | `$color-border` |
| \--nutui-divider-text-font-size | 分割線整體內容的font-size大小 | `$font-size-base` |
| \--nutui-divider-text-color | 分割線整體內容的顏色 | `$color-title` |
| \--nutui-divider-line-height | 分割線的行高 | `1px` |
| \--nutui-divider-spacing | 左邊分割線與文案的間隔值 | `8px` |
| \--nutui-divider-vertical-height | 垂直分割線的高度 | `12px` |
| \--nutui-divider-vertical-margin | 垂直分割線的margin值 | `0 8px` |

## 貢獻記錄

### Issues

- [更新版本后Form组件设置divider后看不见分割线了](https://github.com/jdf2e/nutui-react/issues/2895)

> 更多已解決問題請查看 [Issues](https://api.github.com/repos/jdf2e/nutui-react/issues?q=is%3Aissue+state%3Aclosed+label%3ADivider)

### Component Logs

- 🐛 fix(form): 分割线未生效 ([#2927](https://github.com/jdf2e/nutui-react/pull/2927)) `v2.7.6`
- 🐛 optimize vertical type syntax for divider ([#2664](https://github.com/jdf2e/nutui-react/pull/2664)) `v2.7.0`
- 🐛 fix(divider): demo拆解与规范 ([#2013](https://github.com/jdf2e/nutui-react/pull/2013)) @Alex-huxiyang `v2.4.1`
- ✨ feat(tabs): 新增模式 divider 及 demo ([#1761](https://github.com/jdf2e/nutui-react/pull/1761)) @xiaoyatong `v2.3.0`
- 💡 🌈 style: divider css 修改, 修改部分css变量 ([#1669](https://github.com/jdf2e/nutui-react/pull/1669)) @xiaoyatong `v2.2.0`

> 更多版本更新記錄請查看 [Releases](https://api.github.com/repos/jdf2e/nutui-react/releases?q=divider&expanded=true)
