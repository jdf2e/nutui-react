# Lottie 動畫

載入圖標，用於顯示正在載入中的狀態

### 引入

```tsx
import { Lottie } from '@nutui/nutui-react-taro'
```

## 示例代碼

### 基礎用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

## Lottie

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| type | loading圖標的樣式 | `circular \| spinner` | `circular` |
| direction | loading圖示與文字的排列方式 | `horizo​​ntal \| vertical` | `horizo​​ntal` |
| icon | 自訂loading的圖示 | `tsx.Element` | `-` |
