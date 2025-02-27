# Image組件

增強版的 img 標簽，提供多種圖片填充模式，支持圖片加載中提示、加載失敗提示。

## 引入

```tsx
import { Image } from '@nutui/nutui-react'
```

## 示例代碼

### 基礎用法

基礎用法與原生 img 標簽一致，可以設置 src、width、height、alt 等原生屬性。

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 填充模式

通過 fit 屬性可以設置圖片填充模式，等同於原生的 object-fit 屬性，可選值見下方表格。

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 圖片位置

通過 position 屬性可以設置圖片位置，結合 fit 屬性使用，等同於原生的 object-position 屬性。

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 圓形圖片

通過 radius 屬性可以設置圖片變圓，註意當圖片寬高不相等且 fit 為 contain 或 scale-down 時，將無法填充一個完整的圓形。

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 加載中提示

`Image` 組件提供了默認的加載中提示，支持通過 `loading` 自定義內容。

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### 加載失敗

`Image` 組件提供了默認的加載失敗提示，支持通過 `error` 自定義內容。

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### Image + text 模式

`Image` 組件和文本組合。

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### 圖片懶加載

`Image` 組件提供了懶加載圖片功能，支持通過配置 `lazy` 來實現，默認不開啟。

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

## Image

### Props

| 屬性 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| src | 圖片鏈接 | `string` | `-` |
| fit | 圖片填充模式，等同於原生的 object-fit 屬性 | `ImageFit` | `fill` |
| position | 圖片位置，等同於原生的 object-position 屬性 | `ImagePosition` | `center` |
| alt | 替代文本 | `string` | `-` |
| width | 寬度，默認單位`px` | `string` | `-` |
| height | 高度，默認單位`px` | `string` | `-` |
| radius | 圓角大小 | `string` \| `number` | `-` |
| error | 是否展示圖片加載失敗 | `boolean \| ReactNode` | `true` |
| loading | 是否展示加載中圖片 | `boolean \| ReactNode` | `true` |
| lazy | 是否為懶加載圖片 | `boolean` | `false` |
| onClick | 點擊圖片時觸發 | `(e: MouseEvent) => void` | `-` |
| onLoad | 圖片加載完後觸發 | `() => void` | `-` |
| onError | 圖片加載失敗後觸發 | `() => void` | `-` |

### ImageFit 圖片填充模式

| 屬性 | 說明 |
| --- | --- |
| contain | 保持寬高縮放圖片，使圖片的長邊能完全顯示出來 |
| cover | 保持寬高縮放圖片，使圖片的短邊能完全顯示出來，裁剪長邊 |
| fill | 拉伸圖片，使圖片填滿元素 |
| none | 保持圖片原有尺寸 |
| scale-down | 取 none 或 contain 中較小的一個 |

### ImagePosition 圖片位置

| 屬性 | 說明 |
| --- | --- |
| center | 居中對齊 |
| top | 頂部對齊 |
| right | 右側對齊 |
| bottom | 底部對齊 |
| left | 左側對齊 |

## 貢獻記錄

### Issues

- [Iconfont 设置 name 为图片地址时，修改颜色不生效](https://github.com/jdf2e/nutui-react/issues/2333)

> 更多已解決問題請查看 [Issues](https://github.com/jdf2e/nutui-react/issues?q=is%3Aissue%20state%3Aclosed%20Image)

### Component Logs

- 🐛 imageSize=0无效 ([#2937](https://github.com/jdf2e/nutui-react/pull/2937)) `v2.7.7`
- 🐛 Uploade 组件无法预览图片 ([#2822](https://github.com/jdf2e/nutui-react/pull/2822)) `v2.7.2`
- ✨ feat(image-preview): 增加索引字段，用于预览内容排序 ([#2519](https://github.com/jdf2e/nutui-react/pull/2519)) `v2.6.17`
- 💡 🏡 chore(image): 官网taro的demo显示与h5不一致 ([#2244](https://github.com/jdf2e/nutui-react/pull/2244)) @Alex-huxiyang `v2.6.5`
- 💡 🏡 chore(image): demo代码风格优化 ([#2220](https://github.com/jdf2e/nutui-react/pull/2220)) @Alex-huxiyang `v2.6.4`

> 更多版本更新記錄請查看 [Releases](https://github.com/jdf2e/nutui-react//releases?q=image&expanded=true)
