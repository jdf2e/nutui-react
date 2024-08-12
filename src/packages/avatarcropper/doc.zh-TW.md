# AvatarCropper 头像剪裁

用來對頭像進行剪裁生成一張新圖片。

## 引入

```tsx
import { AvatarCropper } from '@nutui/nutui-react'
```

## 示例代码

### 基礎用法

中間直接使用 avatar 組件，裁剪後圖片內容會被替換為新的。

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 裁剪區域工具欄插槽

自定義裁剪區域工具欄，toolbar-position 控制工具欄位置

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 圓形裁剪

設置裁剪展示的形狀，裁剪後還是方形的，需要在展示的地方設置圓角

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

## AvatarCropper

### Props

| 參數 | 說明 | 類型 | 預設值 |
| --- | --- | --- | --- |
| maxZoom | 最大縮放倍數 | `number` | `3` |
| space | 裁剪區域兩邊預留的間隙 | `number` | `10` |
| toolbarPosition | 裁剪區域工具欄位置,可選值為：`top` `bottom` | `string` | `bottom` |
| editText | 中間的文字內容 | `ReactNode \| string` | `編輯` |
| toolbar | 自定義裁剪區域工具欄 | `ReactNode[]` | `[<Button type="danger" key="cancel">取消</Button>, <Button type="info" key="reset">重置</Button>,<Button type="warning" key="rotate">旋转</Button>,<Button type="success" key="confirm">确认</Button>]` |
| shape | 裁剪形狀,可選值爲：`square` `round` | `string` | `square` |
| onConfirm | 裁剪後點擊確認觸發 | `(url: string) => void` | `-` |
| onCancel | 點擊取消觸發 | `-` | `-` |
