# SafeArea 安全区

在全面屏下提供自适应的边距调整。当网页被全屏展示时，可借助安全区实现自动适配。

## 引入

```tsx
import { SafeArea } from '@nutui/nutui-react'
```

## 示例代碼

### 基礎用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

## SafeArea

### Props

| 属性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| position | 安全区的位置 | `'top' \| 'bottom'` | `-` |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-safe-area-multiple | 显示的倍数 | `1` |

## 貢獻記錄

### Issues

> 更多已解決問題請查看 [Issues](https://api.github.com/repos/jdf2e/nutui-react/issues?q=is%3Aissue+state%3Aclosed+label%3ASafeArea)

### Component Logs

- 🐛 fix(navbar): safearea displays abnormal when safeAreaInsetTop has been set true ([#2632](https://github.com/jdf2e/nutui-react/pull/2632)) `v2.6.22`
- 🐛 safearea for ac ([#2293](https://github.com/jdf2e/nutui-react/pull/2293)) @xiaoyatong `v2.6.8`
- 🐛 ActionSheet 增加安全区处理 ([#2286](https://github.com/jdf2e/nutui-react/pull/2286)) @xiaoyatong `v2.6.7`
- ✨ feat(safearea): 新增安全区组件 ([#1642](https://github.com/jdf2e/nutui-react/pull/1642)) @oasis-cloud `v2.1.0`

> 更多版本更新記錄請查看 [Releases](https://api.github.com/repos/jdf2e/nutui-react/releases?q=safearea&expanded=true)
