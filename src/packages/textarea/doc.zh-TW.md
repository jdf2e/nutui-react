# TextArea 文本域-TW

### 介紹

文本框內輸入或編輯文字，支持限制輸入數量。

### 安裝

```javascript

import { TextArea } from '@nutui/nutui-react';

```

## 代碼演示

### 基礎用法

```html
<textarea defaultValue="{value1}" />
```

```javascript
const [value1, UpdateValue1] = useState('')
```

### 顯示字數統計

```html
<textarea defaultValue="{value2}" limitShow maxlength="20" />
```

### 高度自定義，拉伸

```html
<textarea defaultValue="{value3}" rows="10" autosize />
```

### 只讀、禁用

```html
<textarea readonly defaultValue="textarea只读状态" />
<textarea disabled defaultValue="textarea禁用状态" limitShow maxlength="20" />
```

## API

### Props

| 参数         | 说明                                              | 类型           | 默认值         |
| ------------ | ------------------------------------------------- | -------------- | -------------- |
| defaultValue | 初始默認值，支持雙向綁定                          | String         | -              |
| placeholder  | 设置占位提示文字                                  | String         | `'请输入内容'` |
| maxlength    | 設置佔位提示文字                                  | String、Number | -              |
| rows         | textarea 的高度                                   | String、Number | `2`            |
| limitShow    | textarea 是否展示輸入字符。須配合`max-length`使用 | Boolean        | `false`        |
| autosize     | 高度是否可拉伸                                    | Boolean        | `false`        |
| textAlign    | 文本位置,可選值`left`,`center`,`right`            | String         | `left`         |
| readonly     | 只讀屬性                                          | Boolean        | `false`        |
| disabled     | 禁用屬性                                          | Boolean        | `false`        |

### Events

| 名称   | 说明           | 回调参数 |
| ------ | -------------- | -------- |
| change | 輸入內容時觸發 | val      |
| focus  | 聚焦時觸發     | val      |
| blur   | 失焦時觸發     | val      |
