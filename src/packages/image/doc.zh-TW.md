#  Image組件

### 介紹

增強版的 img 標籤，提供多種圖片填充模式，支持圖片加載中提示、加載失敗提示。

### 安裝

``` javascript
// react
import { Image } from '@nutui/nutui-react';

```

## 代碼演示

### 基礎用法

基礎用法與原生 img 標籤一致，可以設置 src、width、height、alt 等原生屬性。

:::demo
```tsx
import React from "react";
import { Image } from '@nutui/nutui-react';

const App = () => {
const src =
    '//img10.360buyimg.com/ling/jfs/t1/181258/24/10385/53029/60d04978Ef21f2d42/92baeb21f907cd24.jpg'
  return <>
    <Image src={src} width="100" height="100" />
  </>
}
export default App;

```
:::

### 填充模式

通過 fit 屬性可以設置圖片填充模式，等同於原生的 object-fit 屬性，可選值見下方表格。

:::demo
```tsx
import React from "react";
import { Image } from '@nutui/nutui-react';

const App = () => {
const src =
    '//img10.360buyimg.com/ling/jfs/t1/181258/24/10385/53029/60d04978Ef21f2d42/92baeb21f907cd24.jpg'
  return <>
    <Image
        src={src}
        width="100"
        height="100"
        fit="contain"
    />
  </>
}
export default App;

```
:::

### 圖片位置

通過 position 屬性可以設置圖片位置，結合 fit 屬性使用，等同於原生的 object-position 屬性。

:::demo
```tsx
import React from "react";
import { Image } from '@nutui/nutui-react';

const App = () => {
const src =
    '//img10.360buyimg.com/ling/jfs/t1/181258/24/10385/53029/60d04978Ef21f2d42/92baeb21f907cd24.jpg'
  return <>
    <Image
        src={src}
        width="100"
        height="100"
        fit="contain"
        position="left"
    />
  </>
}
export default App;

```
:::

### 圓形圖片

通過 round 屬性可以設置圖片變圓，注意當圖片寬高不相等且 fit 為 contain 或 scale-down 時，將無法填充一個完整的圓形。

:::demo
```tsx
import React from "react";
import { Image } from '@nutui/nutui-react';

const App = () => {
const src =
    '//img10.360buyimg.com/ling/jfs/t1/181258/24/10385/53029/60d04978Ef21f2d42/92baeb21f907cd24.jpg'
  return <>
    <Image
        src={src}
        width="100"
        height="100"
        round
    />
  </>
}
export default App;

```
:::

### 加載中圖片

`Image` 組件提供了默認的加載中提示，支持通過 `loading` 插槽自定義內容。

:::demo
```tsx
import React from "react";
import { Image, Icon } from '@nutui/nutui-react';

const App = () => {
const src =
    '//img10.360buyimg.com/ling/jfs/t1/181258/24/10385/53029/60d04978Ef21f2d42/92baeb21f907cd24.jpg'
  return <>
    <Image
        width="100"
        height="100"
        showLoading
        slotLoding={
            <>
            <Icon name="loading" />
            </>
        }
    />
  </>
}
export default App;

```
:::
### 加載失敗

`Image` 組件提供了默認的加載失敗提示，支持通過 `error` 插槽自定義內容。

:::demo
```tsx
import React from "react";
import { Image, Icon } from '@nutui/nutui-react';

const App = () => {
  return <>
    <Image src="https://x" width="100" height="100" showError>
        <Icon name="circle-close" />
    </Image>
  </>
}
export default App;

```
:::

### 圖片懶加載

`Image` 組件提供了懶加載圖片功能，支持通過配置 `isLazy` 來實現，默認不開啟。

:::demo
```tsx
import React from "react";
import { Image,Cell } from '@nutui/nutui-react';

const App = () => {
const src =
    '//img10.360buyimg.com/ling/jfs/t1/181258/24/10385/53029/60d04978Ef21f2d42/92baeb21f907cd24.jpg'
const imageData = [1, 2, 3, 4, 5, 6]
const placeholderImg = 'https://img12.360buyimg.com/imagetools/jfs/t1/180776/26/8319/4587/60c094a8E1ef2ec9d/940780b87700b1d3.png'
const style = `
  .lazy-box{
    width:100%
  }
  .lazy-box .nut-image{
    margin-bottom: 10px;
  }
`
  return <>
  <style>{style}</style>
    <Cell>
        <div className="lazy-box">
        {imageData.map((item) => {
            return (
            <Image
                key={item}
                height="150"
                src={src}
                isLazy
                showError
                showLoading
                loadingImg={placeholderImg}
                errorImg={placeholderImg}
            />
            )
        })}
        </div>
    </Cell>
  </>
}
export default App;

```
:::


## API

### Props

| 參數         | 說明                             | 類型   | 默認值           |
|--------------|----------------------------------|--------|------------------|
| src         | 圖片鏈接               | String | -                |
| fit         | 圖片填充模式，等同於原生的 object-fit 屬性     | ImageFit | 'fill'                |
| position    | 圖片位置，等同於原生的 object-position 屬性  | ImagePosition | 'center'              |
| alt         | 替代文本               | String | -                |
| width         | 寬度，默認單位`px`               | String | -                |
| height         | 高度，默認單位`px`               | String | -                |
| round         | 是否顯示為圓角               | Boolean | false              |
| radius         | 圓角大小               | String \| Numer | -                |
| showError         | 是否展示圖片加載失敗| Boolean | true              |
| showLoading         | 是否展示加載中圖片               | Boolean | true              |
| isLazy `v1.4.6`  | 是否為懶加載圖片               | Boolean | false              |
| loadingImg `v1.4.6`    | 設置加載中提示圖片，與slotLoding衝突，優先級高於slotLoding       | String | -              |
| errorImg   `v1.4.6`    | 設置錯誤提示圖片，與slotError衝突，優先級高於slotError         | String | -              |

### ImageFit 圖片填充模

| 參數         | 說明                             |
|--------------|----------------------------------|
| contain         | 保持寬高縮放圖片，使圖片的長邊能完全顯示出來    |
| cover         | 保持寬高縮放圖片，使圖片的短邊能完全顯示出來，裁剪長邊     |
| fill    | 拉伸圖片，使圖片填滿元素  |
| none    | 保持圖片原有尺寸  |
| scale-down    | 取 none 或 contain 中較小的一個  |

### ImagePosition 圖片位置

| 參數         | 說明                             |
|--------------|----------------------------------|
| center         | 居中對齊    |
| top         | 頂部對齊     |
| right    | 右側對齊  |
| bottom    | 底部對齊  |
| left   | 左側對齊  |


### Slots
| 參數         | 說明                             |
|--------------|----------------------------------|
| slotLoding      | 自定義加載中的提示內容     |
| slotError    | 自定義記載失敗的提示內容  |

### Events

| 事件名 | 說明           | 回調參數     |
|--------|----------------|--------------|
| onClick  | 點擊圖片時觸發 | event: Event |
| onLoad  | 圖片加載完後觸發 | -- |
| onError  | 圖片加載失敗後觸發 | -- |