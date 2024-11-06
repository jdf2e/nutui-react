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
